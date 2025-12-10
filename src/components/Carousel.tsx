import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { colors } from "../constants/colors"

const images = [
  {
    url: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Copos Personalizados",
  },
  {
    url: "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Canecas",
  },
  {
    url: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Cases de Celular",
  },
  {
    url: "https://images.pexels.com/photos/1437318/pexels-photo-1437318.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Taças",
  },
  {
    url: "https://images.pexels.com/photos/5632350/pexels-photo-5632350.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Xícaras",
  },
]

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isLeftHovering, setIsLeftHovering] = useState(false)
  const [isRightHovering, setIsRightHovering] = useState(false)
  const [autoPlayTimeout, setAutoPlayTimeout] = useState<NodeJS.Timeout | null>(
    null
  )

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)

    if (autoPlayTimeout) clearTimeout(autoPlayTimeout)
    const timeout = setTimeout(() => setIsAutoPlaying(true), 10000)
    setAutoPlayTimeout(timeout)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % images.length)

    if (autoPlayTimeout) clearTimeout(autoPlayTimeout)
    const timeout = setTimeout(() => setIsAutoPlaying(true), 10000)
    setAutoPlayTimeout(timeout)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Gradiente transparente superior */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 z-20 pointer-events-none" 
        style={{
          background: `linear-gradient(180deg, ${colors.background} 0%, ${colors.background}80 40%, ${colors.transparent}40 70%, ${colors.transparent} 0%)`
        }}
      ></div>

      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-4xl md:text-6xl font-serif text-white text-center px-4">
                {image.title}
              </h2>
            </div>
          </div>
        ))}

        {/* Área clicável esquerda */}
        <div
          className="absolute left-0 top-0 w-1/4 h-full cursor-pointer z-5"
          onClick={goToPrevious}
          onMouseEnter={() => setIsLeftHovering(true)}
          onMouseLeave={() => setIsLeftHovering(false)}
        />

        {/* Área clicável direita */}
        <div
          className="absolute right-0 top-0 w-1/4 h-full cursor-pointer z-5"
          onClick={goToNext}
          onMouseEnter={() => setIsRightHovering(true)}
          onMouseLeave={() => setIsRightHovering(false)}
        />
      </div>

      <button
        onClick={goToPrevious}
        onMouseEnter={() => setIsLeftHovering(true)}
        onMouseLeave={() => setIsLeftHovering(false)}
        className={`absolute left-4 top-1/2 -translate-y-1/2 p-2 transition-all z-10 ${
          isLeftHovering ? "opacity-100" : "opacity-0"
        }`}
        style={{ color: colors.primary }}
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={goToNext}
        onMouseEnter={() => setIsRightHovering(true)}
        onMouseLeave={() => setIsRightHovering(false)}
        className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 transition-all z-10 ${
          isRightHovering ? "opacity-100" : "opacity-0"
        }`}
        style={{ color: colors.primary }}
      >
        <ChevronRight size={32} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "w-8" : ""
            }`}
            style={{
              backgroundColor:
                index === currentIndex
                  ? "#ffffffff"
                  : "rgba(255, 255, 255, 0.5)",
            }}
          />
        ))}
      </div>
    </section>
  )
}
