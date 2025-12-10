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
          "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Copo térmico que mantém bebidas quentes ou frias",
      },
      {
        id: 3,
        name: "Copo Neon Colorido",
        image:
          "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Copo personalizado em cores vibrantes",
      },
      {
        id: 4,
        name: "Copo Premium com Alça",
        image:
          "https://images.pexels.com/photos/159870/pexels-photo-159870.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Copo de vidro com alça e design elegante",
      },
      {
        id: 5,
        name: "Copo Acrílico Moderno",
        image:
          "https://images.pexels.com/photos/5632350/pexels-photo-5632350.jpeg?auto=compress&cs=tinysrgb&w=800",
        description:
          "Copo acrílico resistente com personalização em alta definição",
      },
      {
        id: 6,
        name: "Copo Frost Gelado",
        image:
          "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Copo com acabamento fosco personalizado",
      },
    ],
  },
  canecas: {
    title: "Canecas Personalizadas",
    description:
      "Canecas de qualidade premium perfeitas para presentear ou seu uso diário",
    items: [
      {
        id: 1,
        name: "Caneca Clássica Branca",
        image:
          "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Caneca branca clássica com personalização em full color",
      },
      {
        id: 2,
        name: "Caneca Preta Premium",
        image:
          "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Caneca preta elegante com design personalizado",
      },
      {
        id: 3,
        name: "Caneca com Alça Colorida",
        image:
          "https://images.pexels.com/photos/159870/pexels-photo-159870.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Caneca com alça em cores variadas",
      },
      {
        id: 4,
        name: "Caneca Termossensível",
        image:
          "https://images.pexels.com/photos/5632350/pexels-photo-5632350.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Caneca mágica que muda de cor com o calor",
      },
      {
        id: 5,
        name: "Caneca Cerâmica Artesanal",
        image:
          "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Caneca cerâmica artesanal com personalização",
      },
      {
        id: 6,
        name: "Caneca Grande 450ml",
        image:
          "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Caneca grande e espaçosa para suas bebidas favoritas",
      },
    ],
  },
  cases: {
    title: "Cases de Celular Personalizados",
    description: "Proteja seu celular com estilo e personalização única",
    items: [
      {
        id: 1,
        name: "Case de Silicone Flexível",
        image:
          "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800",
        description:
          "Case de silicone flexível e resistente com design personalizado",
      },
      {
        id: 2,
        name: "Case Rígido Premium",
        image:
          "https://images.pexels.com/photos/159870/pexels-photo-159870.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Case rígido premium com proteção total",
      },
      {
        id: 3,
        name: "Case Espelhado Luxo",
        image:
          "https://images.pexels.com/photos/5632350/pexels-photo-5632350.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Case espelhado com acabamento luxuoso",
      },
      {
        id: 4,
        name: "Case com Suporte Integrado",
        image:
          "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Case com suporte para assistir vídeos",
      },
      {
        id: 5,
        name: "Case Texturizado Antiderrapante",
        image:
          "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Case com textura antiderrapante e design exclusivo",
      },
      {
        id: 6,
        name: "Case Holográfico Brilhante",
        image:
          "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Case holográfico com efeito brilhante especial",
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
        name: "Taça de Vinho Personalizada",
        image:
          "https://images.pexels.com/photos/159870/pexels-photo-159870.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Taça de vinho com gravação personalizada",
      },
      {
        id: 2,
        name: "Taça de Champagne Elegante",
        image:
          "https://images.pexels.com/photos/5632350/pexels-photo-5632350.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Taça de champagne de cristal com personalização",
      },
      {
        id: 3,
        name: "Taça de Coquetel Moderna",
        image:
          "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Taça moderna para coquetéis e drinks",
      },
      {
        id: 4,
        name: "Taça de Cristal Premium",
        image:
          "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Taça de cristal premium com acabamento sofisticado",
      },
      {
        id: 5,
        name: "Taça Colorida Artesanal",
        image:
          "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Taça colorida artesanal com design exclusivo",
      },
      {
        id: 6,
        name: "Taça Vintage Retrô",
        image:
          "https://images.pexels.com/photos/159870/pexels-photo-159870.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Taça com design vintage e retro elegante",
      },
    ],
  },
  xicaras: {
    title: "Xícaras Premium",
    description:
      "Xícaras de qualidade para café, chá e bebidas quentes personalizadas",
    items: [
      {
        id: 1,
        name: "Xícara de Porcelana Branca",
        image:
          "https://images.pexels.com/photos/5632350/pexels-photo-5632350.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Xícara de porcelana branca com personalização",
      },
      {
        id: 2,
        name: "Xícara Vintage com Pires",
        image:
          "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Xícara vintage com pires combinado",
      },
      {
        id: 3,
        name: "Xícara Colorida com Alça",
        image:
          "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Xícara colorida com alça e design único",
      },
      {
        id: 4,
        name: "Xícara Espresso Premium",
        image:
          "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Xícara pequena para espresso personalizada",
      },
      {
        id: 5,
        name: "Xícara Grande para Cappuccino",
        image:
          "https://images.pexels.com/photos/159870/pexels-photo-159870.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Xícara grande para cappuccino e bebidas especiais",
      },
      {
        id: 6,
        name: "Xícara de Chá Delicada",
        image:
          "https://images.pexels.com/photos/5632350/pexels-photo-5632350.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Xícara delicada e elegante para chá",
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
