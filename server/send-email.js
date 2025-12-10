import nodemailer from "nodemailer"

// Configurar transporter do Nodemailer
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" })
  }

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
      // Remover o prefixo data URL e extrair apenas o base64
      const base64Data = imageBase64.split(",")[1] || imageBase64
      attachments.push({
        filename: imageName,
        content: Buffer.from(base64Data, "base64"),
        contentType: "image/png", // Ajustar conforme necessário
      })
    }

    // Corpo do email em HTML
    const htmlContent = `
      <h2>Nova Solicitação de Orçamento</h2>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Telefone:</strong> ${phone}</p>
      <p><strong>Categoria:</strong> ${category}</p>
      <p><strong>Item:</strong> ${item}</p>
      <p><strong>Quantidade:</strong> ${quantity}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${message}</p>
      ${
        imageBase64
          ? `<p><strong>Imagem anexada:</strong> ${imageName}</p>`
          : ""
      }
    `

    // Configurar email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER,
      subject: `Nova Solicitação de Orçamento - ${name}`,
      html: htmlContent,
      attachments: attachments,
      replyTo: `${name} <${
        process.env.EMAIL_REPLY_TO || process.env.EMAIL_USER
      }>`,
    }

    // Enviar email
    await transporter.sendMail(mailOptions)

    return res
      .status(200)
      .json({ success: true, message: "Email enviado com sucesso" })
  } catch (error) {
    console.error("Erro ao enviar email:", error)
    return res
      .status(500)
      .json({ error: error.message || "Erro ao enviar email" })
  }
}
