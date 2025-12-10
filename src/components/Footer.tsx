import { Heart } from "lucide-react"
import { colors } from '../constants/colors';

export default function Footer() {
  return (
    <footer
      className="text-white py-12"
      style={{ backgroundColor: colors.primary }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif mb-4"
            style={{color:colors.gold}}>Sonhalize Personalizados</h3>
            <p className="leading-relaxed" style={{ color: colors.light }}>
              Realizando sonhos e tornando momentos especiais ainda mais
              inesquecíveis.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-4">Links Rápidos</h4>
            <ul className="space-y-2" style={{ color: colors.light }}>
              <li>
                <a
                  href="#about"
                  className="hover:text-white transition-colors duration-300"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#catalog"
                  className="hover:text-white transition-colors duration-300"
                >
                  Catálogo
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  className="hover:text-white transition-colors duration-300"
                >
                  Localização
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors duration-300"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-4">Contato</h4>
            <ul className="space-y-2" style={{ color: colors.light }}>
              <li>(63) 99999-9999</li>
              <li>sonhalize@gmail.com.br</li>
              <li>@sonhalize</li>
              <li className="mt-4">
                <p className="text-sm">Segunda a Sexta: 8h às 18h</p>
                <p className="text-sm">Sábado: 8h às 12h</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#848884] pt-8 text-center">
          <p
            className="flex items-center justify-center gap-2"
            style={{ color: colors.light }}
          >
            Feito com <Heart size={16} className="text-red-400" /> para realizar
            seus sonhos
          </p>
          <p className="text-sm mt-2" style={{ borderColor: colors.light }}>
            © {new Date().getFullYear()} Sonhalize Personalizados. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
