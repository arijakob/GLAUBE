import { useEffect, useRef, useState } from 'react';
import { Award, Heart, Shield, Star } from 'lucide-react';

const values = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Pasión',
    description: 'Amamos lo que hacemos y se refleja en cada detalle de nuestro trabajo.'
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Excelencia',
    description: 'Nos esforzamos por superar las expectativas en cada procedimiento.'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Seguridad',
    description: 'Protocolos estrictos de higiene y productos certificados.'
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: 'Personalización',
    description: 'Cada cliente recibe un diseño único adaptado a sus características.'
  }
];

export function About() {
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

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-[var(--cream)] relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--sage)]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <span className="inline-block px-4 py-1.5 bg-[var(--sage)]/10 text-[var(--sage-dark)] text-sm font-medium rounded-full mb-4">
              Sobre Nosotros
            </span>
            <h2 className="text-4xl lg:text-5xl font-light text-[var(--charcoal)] mb-6">
              Arte y Precisión en
              <span className="block font-semibold text-gradient">Cada Trazo</span>
            </h2>
            <p className="text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              En <strong className="text-[var(--sage-dark)]">GLAUBE</strong> combinamos técnica avanzada con un enfoque artístico 
              para crear resultados que realzan la belleza natural de cada persona. Nuestro compromiso es 
              ofrecerte una experiencia transformadora en un ambiente seguro y profesional.
            </p>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-8">
              Con años de experiencia y formación continua en las técnicas más innovadoras de micropigmentación, 
              nos especializamos en Hairstroke y SMP, dos disciplinas que requieren precisión milimétrica 
              y un ojo entrenado para los detalles.
            </p>

            {/* Signature */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[var(--sage)]/10 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="GLAUBE"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <div className="font-serif text-xl text-[var(--charcoal)]">Equipo GLAUBE</div>
                <div className="text-sm text-[var(--muted-foreground)]">Especialistas en PMU</div>
              </div>
            </div>
          </div>

          {/* Right Content - Values */}
          <div className={`grid sm:grid-cols-2 gap-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--sage)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--sage)] transition-colors duration-300">
                  <span className="text-[var(--sage)] group-hover:text-white transition-colors duration-300">
                    {value.icon}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[var(--charcoal)] mb-2">{value.title}</h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className={`mt-20 pt-12 border-t border-[var(--border)] transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-8">
            <p className="text-sm text-[var(--muted-foreground)] uppercase tracking-widest">Certificaciones y Formación</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {['Certificación Internacional PMU', 'Especialista en Hairstroke', 'Técnica Avanzada SMP', 'Higiene y Biosseguridad'].map((cert, index) => (
              <div key={index} className="flex items-center gap-2 text-[var(--charcoal)]">
                <Award className="w-5 h-5 text-[var(--gold)]" />
                <span className="text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
