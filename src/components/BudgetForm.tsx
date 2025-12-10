/*
===========================================
FORMULÁRIO DE ORÇAMENTO - README
===========================================

## Por que usar Resend API?

A Resend é a melhor escolha para este projeto porque:

1. **Suporte nativo a Base64**: Permite enviar imagens embutidas diretamente no HTML usando data URIs
2. **API moderna e simples**: Interface limpa com TypeScript
3. **Alta deliverability**: Excelente taxa de entrega de emails
4. **Anexos e imagens inline**: Suporta múltiplos formatos de envio
5. **Sem limites artificiais**: Aceita emails com imagens Base64 grandes

## Como funciona o envio de imagem Base64?

1. O usuário faz upload da imagem no formulário
2. O JavaScript converte a imagem para Base64 usando FileReader API
3. O Base64 é enviado junto com os dados do formulário
4. A Edge Function recebe e injeta o Base64 no HTML do email usando tag <img>
5. Resend processa e envia o email com a imagem embutida

## Configuração da Edge Function

A Edge Function já está criada em: `supabase/functions/send-budget-email`

### Variável de ambiente necessária:
- RESEND_API_KEY: Sua chave da API Resend (obtida em https://resend.com/api-keys)

### Exemplo de configuração:
1. Crie uma conta em https://resend.com
2. Obtenha sua API key
3. Configure no Supabase Dashboard: Settings → Edge Functions → Secrets
4. Adicione: RESEND_API_KEY = re_xxxxxxxxxx

### Endpoint:
POST {SUPABASE_URL}/functions/v1/send-budget-email

Body:
{
  "name": "João Silva",
  "phone": "(11) 99999-9999",
  "category": "Brindes Personalizados",
  "item": "Canecas",
  "quantity": 100,
  "message": "Gostaria de orçamento urgente",
  "imageBase64": "data:image/png;base64,iVBORw0KGgo..."
}

## Testando localmente:

```bash
# Instalar Supabase CLI
npm install -g supabase

# Iniciar funções localmente
supabase functions serve

# Testar endpoint
curl -X POST http://localhost:54321/functions/v1/send-budget-email \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","phone":"123","category":"Test","item":"Test","quantity":1}'
```

===========================================
*/

import { useState, ChangeEvent, FormEvent } from "react"
import { Upload, Send, CheckCircle2, AlertCircle } from "lucide-react"
import { colors } from "../constants/colors"

const CATEGORIES = {
  "Brindes Personalizados": ["Canecas", "Camisetas", "Chaveiros"],
  Decoração: ["Quadros", "Luzes LED", "Plaquinhas 3D"],
  Eventos: ["Convites", "Lembrancinhas", "Tags Personalizadas"],
}

interface FormData {
  name: string
  phone: string
  category: string
  item: string
  quantity: number
  message: string
  imageBase64: string
}

interface FormErrors {
  [key: string]: string
}

export default function BudgetForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    category: "",
    item: "",
    quantity: 1,
    message: "",
    imageBase64: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [imagePreview, setImagePreview] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    setFormData((prev) => {
      const updated = { ...prev, [name]: value }

      if (name === "category") {
        updated.item = ""
      }

      return updated
    })

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (!file) return

    if (!file.type.startsWith("image/")) {
      setErrors((prev) => ({
        ...prev,
        image: "Por favor, selecione apenas arquivos de imagem",
      }))
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        image: "A imagem deve ter no máximo 5MB",
      }))
      return
    }

    const reader = new FileReader()

    reader.onloadend = () => {
      const base64String = reader.result as string
      setFormData((prev) => ({ ...prev, imageBase64: base64String }))
      setImagePreview(base64String)
      setErrors((prev) => ({ ...prev, image: "" }))
    }

    reader.onerror = () => {
      setErrors((prev) => ({ ...prev, image: "Erro ao processar a imagem" }))
    }

    reader.readAsDataURL(file)
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Telefone é obrigatório"
    }

    if (!formData.category) {
      newErrors.category = "Selecione uma categoria"
    }

    if (!formData.item) {
      newErrors.item = "Selecione um item"
    }

    if (!formData.quantity || formData.quantity < 1) {
      newErrors.quantity = "Quantidade deve ser maior que 0"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

      if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error("Configuração do Supabase não encontrada")
      }

      const response = await fetch(
        `${supabaseUrl}/functions/v1/send-budget-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${supabaseAnonKey}`,
          },
          body: JSON.stringify(formData),
        }
      )

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Erro ao enviar orçamento")
      }

      setSubmitStatus("success")

      setFormData({
        name: "",
        phone: "",
        category: "",
        item: "",
        quantity: 1,
        message: "",
        imageBase64: "",
      })
      setImagePreview("")

      setTimeout(() => setSubmitStatus("idle"), 5000)
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
      setSubmitStatus("error")
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Erro ao enviar orçamento. Tente novamente."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const availableItems = formData.category
    ? CATEGORIES[formData.category as keyof typeof CATEGORIES]
    : []

  return (
    <section
      id="form"
      className="py-20 px-4 bg-white"
      style={{ backgroundColor: colors.background }}
    >
      <div className="container mx-auto max-w-4xl">
        <h1
          className="text-4xl md:text-5xl font-serif text-center mb-4"
          style={{ color: colors.primary }}
        >
          Solicite seu Orçamento
        </h1>
        <div
          className="h-1 w-24 mx-auto mb-8"
          style={{ backgroundColor: colors.secondary }}
        />
        <p
          className="text-center mb-12 text-lg"
          style={{ color: colors.secondary }}
        >
          Preencha os dados abaixo e entraremos em contato em breve
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {submitStatus === "success" && (
            <div
              className="flex items-center gap-3 px-4 py-3 rounded-lg"
              style={{
                backgroundColor: `${colors.success}20`,
              }}
            >
              <CheckCircle2
                className="w-5 h-5 flex-shrink-0"
                style={{ color: colors.success }}
              />
              <p
                className="text-sm font-medium"
                style={{ color: colors.success }}
              >
                Orçamento enviado com sucesso! Entraremos em contato em breve.
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div
              className="flex items-center gap-3 px-4 py-3 rounded-lg"
              style={{
                backgroundColor: `${colors.error}20`,
              }}
            >
              <AlertCircle
                className="w-5 h-5 flex-shrink-0"
                style={{ color: colors.error }}
              />
              <p
                className="text-sm font-medium"
                style={{ color: colors.error }}
              >
                {errorMessage}
              </p>
            </div>
          )}

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2"
              style={{ color: colors.primary }}
            >
              Nome Completo *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-opacity-100 transition-all"
              style={{
                borderColor: errors.name ? colors.error : colors.light,
              }}
              placeholder="Seu nome completo"
            />
            {errors.name && (
              <p className="mt-1 text-sm" style={{ color: colors.error }}>
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium mb-2"
              style={{ color: colors.primary }}
            >
              Telefone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-opacity-100 transition-all"
              style={{
                borderColor: errors.phone ? colors.error : colors.light,
              }}
              placeholder="(11) 99999-9999"
            />
            {errors.phone && (
              <p className="mt-1 text-sm" style={{ color: colors.error }}>
                {errors.phone}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium mb-2"
                style={{ color: colors.primary }}
              >
                Categoria *
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-opacity-100 transition-all"
                style={{
                  borderColor: errors.category ? colors.error : colors.light,
                  color: colors.primary,
                }}
              >
                <option value="">Selecione uma categoria</option>
                {Object.keys(CATEGORIES).map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              {errors.category && (
                <p className="mt-1 text-sm" style={{ color: colors.error }}>
                  {errors.category}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="item"
                className="block text-sm font-medium mb-2"
                style={{ color: colors.primary }}
              >
                Item {formData.category && "*"}
              </label>
              <select
                id="item"
                name="item"
                value={formData.item}
                onChange={handleInputChange}
                disabled={!formData.category}
                className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-opacity-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  borderColor: errors.item ? colors.error : colors.light,
                  color: colors.primary,
                }}
              >
                <option value="">
                  {formData.category
                    ? "Selecione um item"
                    : "Primeiro selecione uma categoria"}
                </option>
                {availableItems.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              {errors.item && (
                <p className="mt-1 text-sm" style={{ color: colors.error }}>
                  {errors.item}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="quantity"
              className="block text-sm font-medium mb-2"
              style={{ color: colors.primary }}
            >
              Quantidade *
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              value={formData.quantity}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-opacity-100 transition-all"
              style={{
                borderColor: errors.quantity ? colors.error : colors.light,
              }}
              placeholder="Ex: 100"
            />
            {errors.quantity && (
              <p className="mt-1 text-sm" style={{ color: colors.error }}>
                {errors.quantity}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium mb-2"
              style={{ color: colors.primary }}
            >
              Imagem de Referência
            </label>
            <div className="mt-1">
              <label
                htmlFor="image"
                className="flex flex-col items-center justify-center gap-3 w-full px-4 py-8 border-2 border-dashed rounded-lg hover:opacity-80 transition-all cursor-pointer"
                style={{
                  borderColor: colors.light,
                }}
              >
                <Upload
                  className="w-8 h-8"
                  style={{ color: colors.secondary }}
                />
                <span
                  className="text-sm text-center"
                  style={{ color: colors.secondary }}
                >
                  {imagePreview ? "Alterar imagem" : "Escolher imagem"}
                </span>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
              {imagePreview && (
                <div className="mt-3">
                  <div
                    className="relative w-32 h-32 mx-auto rounded-lg overflow-hidden border-2"
                    style={{ borderColor: colors.light }}
                  >
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
            {errors.image && (
              <p className="mt-1 text-sm" style={{ color: colors.error }}>
                {errors.image}
              </p>
            )}
            <p className="mt-1 text-xs" style={{ color: colors.light }}>
              PNG, JPG ou GIF até 5MB
            </p>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2"
              style={{ color: colors.primary }}
            >
              Mensagem (Opcional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-opacity-100 transition-all resize-none"
              style={{
                borderColor: colors.light,
              }}
              placeholder="Informações adicionais sobre seu orçamento..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-6 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
            style={{
              backgroundColor: colors.primary,
              color: colors.white,
              opacity: isSubmitting ? 0.7 : 1,
              cursor: isSubmitting ? "not-allowed" : "pointer",
            }}
          >
            {isSubmitting ? (
              <>
                <div
                  className="animate-spin rounded-full h-5 w-5 border-b-2"
                  style={{ borderColor: colors.white }}
                />
                <span>Enviando...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Enviar Solicitação de Orçamento</span>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  )
}
