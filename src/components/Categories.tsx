import { useNavigate } from "react-router-dom"
import { Wine, Coffee, Smartphone, CupSoda } from "lucide-react"
import { colors } from "../constants/colors"

const categories = [
  {
    id: "copos",
    title: "Copos",
    description:
      "Copos personalizados para qualquer ocasião com design exclusivo",
    icon: CupSoda,
    image:
      "https://images.pexels.com/photos/885021/pexels-photo-885021.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "canecas",
    title: "Canecas",
    description: "Canecas personalizadas perfeitas para presentes especiais",
    icon: Coffee,
    image:
      "https://images.pexels.com/photos/1755215/pexels-photo-1755215.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "cases",
    title: "Cases de Celular",
    description: "Proteja seu celular com estilo e personalização",
    icon: Smartphone,
    image:
      "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "tacas",
    title: "Taças",
    description: "Taças elegantes para celebrações e momentos especiais",
    icon: Wine,
    image:
      "https://images.pexels.com/photos/1437318/pexels-photo-1437318.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
]

export default function Categories() {
  const navigate = useNavigate()

  return (
    <section
      id="catalog"
      className="py-20 px-4 scroll-mt-20 md:scroll-mt-24"
      style={{ backgroundColor: colors.white }}
    >
      <div className="container mx-auto">
        <h2
          className="text-4xl md:text-5xl font-serif text-center mb-4"
          style={{ color: colors.primary }}
        >
          Nosso Catálogo
        </h2>
        <div
          className="h-1 w-24 mx-auto mb-16"
          style={{ backgroundColor: colors.secondary }}
        ></div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={category.id}
                className="group cursor-pointer"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" })
                  navigate(`/categoria/${category.id}`)
                }}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex items-center gap-3 sm:flex-col sm:items-start sm:gap-0">
                    <Icon className="flex-shrink-0 sm:mb-3" size={32} />
                    <h3 className="text-2xl max-xs:text-sm font-serif mb-0 sm:mb-2">
                      {category.title}
                    </h3>
                    <p className="hidden sm:block text-sm text-white/90">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
