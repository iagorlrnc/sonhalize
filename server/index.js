import express from "express"
import nodemailer from "nodemailer"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Middlewares
app.use(cors())
app.use(express.json({ limit: "50mb" }))
app.use(express.urlencoded({ limit: "50mb" }))

// Configurar transporter do Nodemailer
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

// Rota para enviar email
app.post("/api/send-email", async (req, res) => {
  try {
    const {
      name,
      phone,
      category,
      item,
      quantity,
      message,
      imageBase64,
      imageName,
    } = req.body

    // Validar dados obrigatórios
    if (!name || !phone) {
      return res.status(400).json({ error: "Nome e telefone são obrigatórios" })
    }

    // Preparar anexo se houver imagem
    const attachments = []
    if (imageBase64) {
      // Remover o prefixo data URL se existir
      const base64Data = imageBase64.includes(",")
        ? imageBase64.split(",")[1]
        : imageBase64
      attachments.push({
        filename: imageName || "imagem.png",
        content: Buffer.from(base64Data, "base64"),
        contentType: "image/png", // Pode ser ajustado conforme tipo de imagem
      })
    }

    // Corpo do email em HTML
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Nova Solicitação de Orçamento</h2>
        
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Telefone:</strong> ${phone}</p>
          <p><strong>Categoria:</strong> ${category}</p>
          <p><strong>Item:</strong> ${item}</p>
          <p><strong>Quantidade:</strong> ${quantity}</p>
          <p><strong>Mensagem:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
          ${
            imageBase64
              ? `<p><strong>📎 Imagem anexada:</strong> ${imageName}</p>`
              : ""
          }
        </div>
        
        <p style="color: #666; margin-top: 20px; font-size: 12px;">
          Esta é uma solicitação de orçamento automática. Por favor, entre em contato com o cliente em breve.
        </p>
      </div>
    `

    // Configurar email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER,
      subject: `📋 Nova Solicitação de Orçamento - ${name}`,
      html: htmlContent,
      attachments: attachments,
    }

    // Enviar email
    const info = await transporter.sendMail(mailOptions)

    console.log("✅ Email enviado com sucesso:", info.response)
    return res.status(200).json({
      success: true,
      message: "Email enviado com sucesso",
      messageId: info.messageId,
    })
  } catch (error) {
    console.error("❌ Erro ao enviar email:", error)
    return res.status(500).json({
      error: error.message || "Erro ao enviar email",
      success: false,
    })
  }
})

// Rota de teste
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Servidor funcionando" })
})

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`)
  console.log(`📧 Email configurado: ${process.env.EMAIL_USER}`)
})

export default app
