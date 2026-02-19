import { useEffect, useRef, useState } from 'react';
import { Scissors, Sparkles, Clock, Check, ChevronRight } from 'lucide-react';

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  duration: string;
  price: string;
  images: string[];
}

const services: Service[] = [
  {
    id: 'hairstroke',
    icon: <Scissors className="w-8 h-8" />,
    title: 'Hairstroke',
    subtitle: 'Cejas Pelo a Pelo',
    description: 'Técnica de micropigmentación que imita el cabello natural, creando cejas definidas y realistas con un efecto tridimensional. Cada trazo es único y personalizado para tu tipo de rostro.',
    features: [
      'Efecto natural de pelo real',
      'Diseño personalizado facial',
      'Pigmentos hipoalergénicos',
      'Duración de 1-2 años',
      'Sin dolor con anestesia tópica'
    ],
    duration: '2-3 horas',
    price: 'Desde $350',
    images: [
      '/gallery/hairstroke/hair1.jpg',
      '/gallery/hairstroke/hair2.jpg',
      '/gallery/hairstroke/hair3.jpg'
    ]
  },
  {
    id: 'smp',
    icon: <Sparkles className="w-8 h-8" />,
    title: 'SMP',
    subtitle: 'Scalp Micropigmentation',
    description: 'Micropigmentación capilar que simula folículos de cabello, ideal para disimular alopecia, entradas, coronilla o crear el efecto de cabello rapado. Técnica avanzada con resultados naturales.',
    features: [
      'Simulación de folículos reales',
      'Corrección de alopecia',
      'Densificación visual',
      'Resultados inmediatos',
      'Duración de 3-5 años'
    ],
    duration: '3-4 horas',
    price: 'Desde $500',
    images: [
      '/gallery/smp/smp1.jpg',
      '/gallery/smp/smp2.jpg',
      '/gallery/smp/smp3.jpg'
    ]
  }
];

export function Services() {
  const [activeService, setActiveService] = useState<string>('hairstroke');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Reset image index when service changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeService]);

  const currentService = services.find(s => s.id === activeService) || services[0];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentService.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentService.images.length) % currentService.images.length);
  };

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-[var(--sage)]/10 text-[var(--sage-dark)] text-sm font-medium rounded-full mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl lg:text-5xl font-light text-[var(--charcoal)] mb-4">
            Técnicas de <span className="font-semibold text-gradient">Excelencia</span>
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Especializados en las técnicas más avanzadas de micropigmentación para realzar tu belleza natural
          </p>
        </div>

        {/* Service Tabs */}
        <div className={`flex justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 ${
                activeService === service.id
                  ? 'bg-[var(--sage)] text-white shadow-lg shadow-[var(--sage)]/25'
                  : 'bg-[var(--cream)] text-[var(--charcoal)] hover:bg-[var(--sage-light)]/30'
              }`}
            >
              <span className={activeService === service.id ? 'text-white' : 'text-[var(--gold)]'}>
                {service.icon}
              </span>
              <div className="text-left">
                <div className="font-semibold">{service.title}</div>
                <div className={`text-xs ${activeService === service.id ? 'text-white/80' : 'text-[var(--muted-foreground)]'}`}>
                  {service.subtitle}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Service Detail */}
        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Image Carousel */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[var(--gold)]/20 to-[var(--sage)]/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={currentService.images[currentImageIndex]}
                alt={currentService.title}
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              
              {/* Carousel Navigation */}
              <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={prevImage}
                  className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-[var(--charcoal)] hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5 rotate-180" />
                </button>
                <button
                  onClick={nextImage}
                  className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-[var(--charcoal)] hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Image Dots */}
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
                {currentService.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex ? 'bg-white w-6' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-4 text-white">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span className="text-sm">{currentService.duration}</span>
                  </div>
                  <div className="w-px h-4 bg-white/40" />
                  <span className="text-lg font-semibold">{currentService.price}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-light text-[var(--charcoal)] mb-2">
              {currentService.title}
            </h3>
            <p className="text-[var(--gold)] font-medium mb-4">{currentService.subtitle}</p>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-8">
              {currentService.description}
            </p>

            {/* Features */}
            <div className="space-y-3 mb-8">
              {currentService.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--sage)]/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[var(--sage)]" />
                  </div>
                  <span className="text-[var(--charcoal)]">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--gold)] text-white font-medium rounded-full hover:bg-[var(--gold)]/90 transition-all duration-300 group"
            >
              <span>Reservar Ahora</span>
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
