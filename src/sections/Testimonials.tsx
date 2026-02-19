import { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  service: string;
  rating: number;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'María González',
    service: 'Hairstroke',
    rating: 5,
    text: 'Increíble resultado con mis cejas. El efecto natural es exactamente lo que buscaba. El equipo de GLAUBE es muy profesional y me hizo sentir cómoda durante todo el proceso. ¡Totalmente recomendado!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
  },
  {
    id: 2,
    name: 'Carlos Mendez',
    service: 'SMP',
    rating: 5,
    text: 'Después de años lidiando con alopecia, finalmente encontré una solución. La micropigmentación capilar cambió mi vida. Me siento mucho más seguro y el resultado es súper natural.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
  },
  {
    id: 3,
    name: 'Ana Lucía',
    service: 'Hairstroke',
    rating: 5,
    text: 'El mejor lugar para micropigmentación. Me encantó cómo diseñaron mis cejas según mi tipo de rostro. El ambiente es muy limpio y profesional. Volvería sin dudarlo.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
  },
  {
    id: 4,
    name: 'Roberto Silva',
    service: 'SMP',
    rating: 5,
    text: 'Excelente servicio y atención. El proceso fue muy detallado y el resultado superó mis expectativas. Ahora tengo la línea de cabello que siempre quise.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
  }
];

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-[var(--sage)]/5 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 text-[var(--gold)]/10">
        <Quote className="w-32 h-32" />
      </div>
      <div className="absolute bottom-10 right-10 text-[var(--gold)]/10 rotate-180">
        <Quote className="w-32 h-32" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-[var(--sage)]/10 text-[var(--sage-dark)] text-sm font-medium rounded-full mb-4">
            Testimonios
          </span>
          <h2 className="text-4xl lg:text-5xl font-light text-[var(--charcoal)] mb-4">
            Lo que Dicen Nuestros <span className="font-semibold text-gradient">Clientes</span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 lg:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[var(--charcoal)] hover:bg-[var(--sage)] hover:text-white transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 lg:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[var(--charcoal)] hover:bg-[var(--sage)] hover:text-white transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Content */}
            <div className="text-center">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 border-4 border-[var(--gold)]/20">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[var(--gold)] text-[var(--gold)]" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg lg:text-xl text-[var(--charcoal)] leading-relaxed mb-8 max-w-2xl mx-auto">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Author */}
              <div>
                <div className="font-semibold text-[var(--charcoal)] text-lg">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-sm text-[var(--muted-foreground)]">
                  Cliente {testimonials[currentIndex].service}
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-[var(--sage)] w-8'
                      : 'bg-[var(--sage)]/30 hover:bg-[var(--sage)]/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
