import { useParams, Link } from "react-router-dom"
import { ArrowLeft, X } from "lucide-react"
import { useEffect, useState } from "react"
import { colors } from "../constants/colors"

const categoryData = {
  copos: {
    title: "Copos Personalizados",
    description:
      "Copos elegantes e personalizáveis para qualquer ocasião, perfeitos para presentes ou uso pessoal",
    items: [
      {
        id: 1,
        name: "Copo de Vidro Personalizado",
        image:
          "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Copo de vidro transparente com gravação personalizada",
      },
      {
        id: 2,
        name: "Copo Térmico com Logo",
        image:
          "https://images.pexels.com/photos/7262730/pexels-photo-7262730.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Copo térmico que mantém bebidas quentes ou frias",
      },
      {
        id: 3,
        name: "Copo de Plástico",
        image:
          "https://images.pexels.com/photos/35137081/pexels-photo-35137081.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Copo personalizado em cores vibrantes",
      },
      {
        id: 4,
        name: "Copo",
        image:
          "https://images.pexels.com/photos/35130786/pexels-photo-35130786.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Copo",
      },
      {
        id: 5,
        name: "Copo Cerâmica Moderno",
        image:
          "https://images.pexels.com/photos/585753/pexels-photo-585753.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Copo de cerâmica com personalização em alta definição",
      },
      {
        id: 6,
        name: "Copo Descartável",
        image:
          "https://images.pexels.com/photos/87383/pexels-photo-87383.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Copo descartável",
      },
    ],
  },
  canecas: {
    title: "Canecas Personalizadas",
    description: "Canecas de qualidade, para presentear ou seu uso diário",
    items: [
      {
        id: 1,
        name: "Caneca Clássica Branca",
        image:
          "https://images.pexels.com/photos/1207918/pexels-photo-1207918.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Caneca branca clássica com personalização em full color",
      },
      {
        id: 2,
        name: "Caneca Preta Premium",
        image:
          "https://images.pexels.com/photos/129209/pexels-photo-129209.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Caneca preta elegante com design personalizado",
      },
      {
        id: 3,
        name: "Caneca Colorida",
        image:
          "https://images.pexels.com/photos/3563623/pexels-photo-3563623.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Caneca em cores variadas",
      },
      {
        id: 4,
        name: "Caneca",
        image:
          "https://images.pexels.com/photos/3806690/pexels-photo-3806690.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Caneca",
      },
      {
        id: 5,
        name: "Caneca de Cerâmica",
        image:
          "https://images.pexels.com/photos/4577860/pexels-photo-4577860.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Caneca cerâmica com personalização",
      },
      {
        id: 6,
        name: "Caneca Grande",
        image:
          "https://images.pexels.com/photos/3216564/pexels-photo-3216564.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Caneca grande",
      },
    ],
  },
  cases: {
    title: "Cases de Celular Personalizados",
    description: "Proteja seu celular com estilo e personalização única",
    items: [
      {
        id: 1,
        name: "Case de Silicone",
        image:
          "https://images.pexels.com/photos/850885/pexels-photo-850885.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Case de silicone com design personalizado",
      },
      {
        id: 2,
        name: "Case Rígido",
        image:
          "https://images.pexels.com/photos/8066715/pexels-photo-8066715.png?auto=compress&cs=tinysrgb&w=800",
        description: "Case rígido personalizado",
      },
      {
        id: 3,
        name: "Case personalizado",
        image:
          "https://images.pexels.com/photos/18868637/pexels-photo-18868637.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Case personalizado",
      },
    ],
  },
  tacas: {
    title: "Taças Personalizadas",
    description:
      "Taças elegantes e sofisticadas para celebrações e momentos especiais",
    items: [
      {
        id: 1,
        name: "Taça Personalizada",
        image:
          "https://images.pexels.com/photos/3268735/pexels-photo-3268735.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Taça com gravação personalizada",
      },
    ],
  },
}

export default function CategoryPage() {
  const { id } = useParams<{ id: string }>()
  const category = categoryData[id as keyof typeof categoryData]
  const [modalItemId, setModalItemId] = useState<number | null>(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" })
  }, [id])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalItemId(null)
    }
    if (modalItemId !== null) {
      document.addEventListener("keydown", onKey)
    }
    return () => document.removeEventListener("keydown", onKey)
  }, [modalItemId])

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1
            className="text-4xl font-serif mb-4"
            style={{ color: colors.primary }}
          >
            Categoria não encontrada
          </h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-lg hover:opacity-70 transition-opacity"
            style={{ color: "#848884" }}
          >
            <ArrowLeft size={20} />
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <Link
          to="/"
          onClick={() => {
            setTimeout(() => {
              const catalogElement = document.getElementById("catalog")
              if (catalogElement) {
                catalogElement.scrollIntoView({ behavior: "smooth" })
              }
            }, 100)
          }}
          className="inline-flex items-center gap-2 mb-8 text-lg hover:opacity-70 transition-opacity"
          style={{ color: colors.secondary }}
        >
          <ArrowLeft size={20} />
          Voltar
        </Link>

        <div className="text-center mb-16">
          <h1
            className="text-4xl md:text-6xl font-serif mb-4"
            style={{ color: colors.primary }}
          >
            {category.title}
          </h1>
          <div
            className="h-1 w-24 mx-auto mb-6"
            style={{ backgroundColor: colors.secondary }}
          ></div>
          <p
            className="hidden sm:block text-xl max-w-3xl mx-auto"
            style={{ color: colors.secondary }}
          >
            {category.description}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {category.items.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col"
              onClick={() => {
                if (typeof window !== "undefined" && window.innerWidth < 768) {
                  setModalItemId(item.id)
                }
              }}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="relative aspect-[3/4] overflow-hidden flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <h3
                  className="text-xl max-sm:text-sm font-semibold mb-2"
                  style={{ color: colors.primary }}
                >
                  {item.name}
                </h3>
                <p
                  className="hidden md:block text-sm mb-4"
                  style={{ color: colors.secondary }}
                >
                  {item.description}
                </p>

                <div className="mt-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      const element = document.getElementById("form")
                      if (element) {
                        window.scrollTo({ top: 0, behavior: "smooth" })
                        setTimeout(() => {
                          window.location.href = "/#form"
                        }, 500)
                      }
                    }}
                    className="w-full py-3 rounded-full text-white transition-all hover:opacity-90"
                    style={{ backgroundColor: colors.secondary }}
                  >
                    Solicitar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal overlay para mobile */}
        {modalItemId !== null &&
          (() => {
            const modalItem = category.items.find((it) => it.id === modalItemId)
            if (!modalItem) return null
            return (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
                onClick={() => setModalItemId(null)}
              >
                <div
                  className="max-w-md w-full bg-white rounded-lg overflow-hidden shadow-xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div
                    className="flex items-center justify-between p-4 border-b"
                    style={{ borderColor: colors.light }}
                  >
                    <button
                      className="inline-flex items-center gap-2 text-sm"
                      onClick={() => setModalItemId(null)}
                      style={{ color: colors.primary }}
                    >
                      <ArrowLeft size={16} /> Voltar
                    </button>
                    <button
                      onClick={() => setModalItemId(null)}
                      className="p-2"
                      style={{ color: colors.primary }}
                    >
                      <X size={20} />
                    </button>
                  </div>
                  <img
                    src={modalItem.image}
                    alt={modalItem.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h2
                      className="text-2xl font-serif mb-2"
                      style={{ color: colors.primary }}
                    >
                      {modalItem.name}
                    </h2>
                    <p
                      className="text-sm mb-4"
                      style={{ color: colors.secondary }}
                    >
                      {modalItem.description}
                    </p>
                    <div className="mt-4">
                      <button
                        onClick={() => {
                          setModalItemId(null)
                          const element = document.getElementById("form")
                          if (element) {
                            window.scrollTo({ top: 0, behavior: "smooth" })
                            setTimeout(() => {
                              window.location.href = "/#form"
                            }, 500)
                          }
                        }}
                        className="w-full py-3 rounded-full text-white transition-all hover:opacity-90"
                        style={{ backgroundColor: colors.secondary }}
                      >
                        Solicitar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })()}
      </div>
    </div>
  )
}
