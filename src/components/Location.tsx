import { MapPin, Navigation } from 'lucide-react';
import { colors } from '../constants/colors';

export default function Location() {
  const address = "Rua das Flores, 123 - Centro - São Paulo - SP - CEP: 01234-567";
  const mapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0977!2d-46.6333!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjgiUyA0NsKwMzgnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890";
  const directionsUrl = "https://www.google.com/maps/dir//Rua+das+Flores,+123+-+Centro+-+São+Paulo";

  return (
    <section id="location" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-4" style={{ color: colors.primary }}>
          Nossa Localização
        </h2>
        <div className="h-1 w-24 mx-auto mb-16" style={{ backgroundColor: colors.secondary }}></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="flex-shrink-0 mt-1" size={28} style={{ color: colors.secondary }} />
              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: colors.primary }}>
                  Endereço
                </h3>
                <p className="text-lg" style={{ color: colors.secondary }}>
                  {address}
                </p>
              </div>
            </div>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white transition-all hover:opacity-90 hover:scale-105 transform"
              style={{ backgroundColor: colors.secondary }}
            >
              <Navigation size={20} />
              <span>Como Chegar</span>
            </a>

            <div className="pt-6">
              <p className="text-sm" style={{ color: colors.light }}>
                Estamos localizados no coração da cidade, com fácil acesso e estacionamento próximo.
                Venha nos visitar e conhecer nossa coleção exclusiva.
              </p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-xl h-[400px]">
            <iframe
              src={mapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
