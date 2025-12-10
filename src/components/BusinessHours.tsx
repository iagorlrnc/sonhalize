import { Clock } from "lucide-react"
import { colors } from "../constants/colors"

export function BusinessHours() {
  const hours = [
    { day: "Segunda-feira", time: "08h às 18h", isOpen: true },
    { day: "Terça-feira", time: "08h às 18h", isOpen: true },
    { day: "Quarta-feira", time: "08h às 18h", isOpen: true },
    { day: "Quinta-feira", time: "08h às 18h", isOpen: true },
    { day: "Sexta-feira", time: "08h às 18h", isOpen: true },
    { day: "Sábado", time: "08h às 12h", isOpen: true },
    { day: "Domingo", time: "Fechado", isOpen: false },
  ]

  return (
    <section
      id="horario"
      className="py-20 px-4"
      style={{ backgroundColor: colors.white }}
    >
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex items-center gap-4">
            <div
              className="p-4 rounded-full"
              style={{ backgroundColor: colors.primary }}
            >
              <Clock size={40} style={{ color: colors.white }} />
            </div>
            <div>
              <h2
                className="text-4xl md:text-5xl font-serif mb-2"
                style={{ color: colors.primary }}
              >
                Horário de Funcionamento
              </h2>
              <p style={{ color: colors.secondary }}>
                Estamos prontos para atender você
              </p>
            </div>
          </div>

          <div
            className="rounded-lg p-8 w-full"
            style={{
              backgroundColor: colors.white,
              border: `2px solid ${colors.light}`,
            }}
          >
            <div className="space-y-3">
              {hours.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center gap-8 pb-3 border-b last:border-0"
                  style={{ borderColor: colors.light }}
                >
                  <span
                    className="font-medium min-w-[120px]"
                    style={{ color: colors.primary }}
                  >
                    {item.day}
                  </span>
                  <span
                    className="font-semibold"
                    style={{
                      color: item.isOpen ? colors.primary : colors.light,
                    }}
                  >
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
