import { colors } from "../constants/colors"
import { Sparkles, Heart, Zap } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: Sparkles,
      title: "Criatividade Ilimitada",
      description: "Transformamos suas ideias em obras de arte personalizadas",
    },
    {
      icon: Heart,
      title: "Qualidade Premium",
      description: "Materiais de qualidade e acabamento impecável",
    },
    {
      icon: Zap,
      title: "Entrega Rápida",
      description: "Seu pedido personalizado pronto em tempo recorde",
    },
  ]

  return (
    <section
      id="about"
      className="py-20 px-4 mt-8 bg-white scroll-mt-20 md:scroll-mt-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Título centralizado */}
        <div className="text-center mb-16">
          <h1
            className="text-4xl md:text-5xl font-serif mb-4"
            style={{ color: colors.primary }}
          >
            Sonhalize Personalizados
          </h1>
          <div
            className="h-1 w-24 mx-auto mb-6"
            style={{ backgroundColor: colors.secondary }}
          ></div>
          <p className="text-lg" style={{ color: colors.secondary }}>
            Personalizamos momentos que viram memórias
          </p>
        </div>

        {/* Conteúdo com texto à esquerda e imagem redonda à direita */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Texto à esquerda */}
          <div className="space-y-4">
            <p
              className="text-xl leading-relaxed font-semibold"
              style={{ color: colors.primary }}
            >
              Na{" "}
              <span style={{ color: colors.gold }}>
                Sonhalize Personalizados
              </span>
              , acreditamos que cada objeto merece uma história única.
            </p>

            <p
              className="text-base leading-relaxed"
              style={{ color: colors.secondary }}
            >
              Desde copos e canecas até cases personalizados, cada criação é um
              reflexo de sua personalidade e estilo. Combinamos tecnologia de
              ponta com design inovador para criar peças que impressionam.
            </p>
          </div>

          {/* Imagem redonda à direita */}
          <div className="flex justify-center relative">
            <div
              className="absolute inset-0 rounded-full opacity-10"
              style={{
                backgroundColor: colors.secondary,
                filter: "blur(30px)",
              }}
            ></div>
            <div
              className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl"
              style={{ borderColor: colors.light, borderWidth: "4px" }}
            >
              <img
                src="assets/logo.jpg"
                alt="PersonalArt"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Cards com diferenciais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-6 rounded-lg text-center transition-all hover:shadow-lg"
                style={{
                  backgroundColor: `${colors.primary}08`,
                  borderColor: colors.light,
                  borderWidth: "1px",
                }}
              >
                <div className="flex justify-center mb-4">
                  <div
                    className="p-3 rounded-full"
                    style={{
                      backgroundColor: `${colors.secondary}20`,
                    }}
                  >
                    <Icon size={24} style={{ color: colors.secondary }} />
                  </div>
                </div>
                <h3
                  className="font-semibold mb-2 text-lg"
                  style={{ color: colors.primary }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm" style={{ color: colors.secondary }}>
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
