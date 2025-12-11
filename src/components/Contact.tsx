import { Phone, MessageCircle, Instagram, Mail } from "lucide-react"
import { colors } from "../constants/colors"

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <div className="container mx-auto">
        <h2
          className="text-4xl md:text-5xl font-serif text-center mb-4"
          style={{ color: colors.primary }}
        >
          Entre em Contato
        </h2>
        <div
          className="h-1 w-24 mx-auto mb-16"
          style={{ backgroundColor: colors.secondary }}
        ></div>

        <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer"
            style={{ textDecoration: "none" }}
          >
            <div
              className="p-4 rounded-full mb-4"
              style={{ backgroundColor: colors.light }}
            >
              <MessageCircle style={{ color: colors.white }} size={32} />
            </div>
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: colors.primary }}
            >
              WhatsApp
            </h3>
            <span
              className="hidden sm:block text-lg hover:opacity-70 transition-opacity"
              style={{ color: colors.secondary }}
            >
              Envie uma mensagem
            </span>
          </a>

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer"
            style={{ textDecoration: "none" }}
          >
            <div
              className="p-4 rounded-full mb-4"
              style={{ backgroundColor: colors.light }}
            >
              <Instagram style={{ color: colors.white }} size={32} />
            </div>
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: colors.primary }}
            >
              Instagram
            </h3>
            <span
              className="hidden sm:block text-lg hover:opacity-70 transition-opacity"
              style={{ color: colors.secondary }}
            >
              @sonhalize
            </span>
          </a>

          <a
            href="tel:+5511999999999"
            className="flex flex-col items-center text-center p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer"
            style={{ textDecoration: "none" }}
          >
            <div
              className="p-4 rounded-full mb-4"
              style={{ backgroundColor: colors.light }}
            >
              <Phone style={{ color: colors.white }} size={32} />
            </div>
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: colors.primary }}
            >
              Telefone
            </h3>
            <span
              className="hidden sm:block text-lg hover:opacity-70 transition-opacity"
              style={{ color: colors.secondary }}
            >
              (11) 99999-9999
            </span>
          </a>

          <a
            href="mailto:sonhalize@gmail.com.br"
            className="flex flex-col items-center text-center p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer"
            style={{ textDecoration: "none" }}
          >
            <div
              className="p-4 rounded-full mb-4"
              style={{ backgroundColor: colors.light }}
            >
              <Mail style={{ color: colors.white }} size={32} />
            </div>
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: colors.primary }}
            >
              E-mail
            </h3>
            <span
              className="hidden sm:block text-lg hover:opacity-70 transition-opacity"
              style={{ color: colors.secondary }}
            >
              sonhalize@gmail.com.br
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
