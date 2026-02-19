import { useEffect, useRef } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      
      const elements = heroRef.current.querySelectorAll('.parallax');
      elements.forEach((el) => {
        (el as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--cream)] via-white to-[var(--sage-light)]/20" />
      
      {/* Decorative Elements */}
      <div className="parallax absolute top-20 left-10 w-64 h-64 bg-[var(--gold)]/10 rounded-full blur-3xl transition-transform duration-300" />
      <div className="parallax absolute bottom-20 right-10 w-80 h-80 bg-[var(--sage)]/10 rounded-full blur-3xl transition-transform duration-300" />
      <div className="parallax absolute top-1/3 right-1/4 w-40 h-40 bg-[var(--gold-light)]/15 rounded-full blur-2xl transition-transform duration-300" />
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[var(--gold)]/30 mb-8">
          <Sparkles className="w-4 h-4 text-[var(--gold)]" />
          <span className="text-sm font-medium tracking-wider uppercase text-[var(--sage-dark)]">
            Micropigmentación de Alta Precisión
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-[var(--charcoal)] mb-6 leading-tight">
          Realza tu Belleza
          <span className="block font-semibold text-gradient mt-2">
            Natural
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto mb-10 leading-relaxed">
          Especialistas en técnicas avanzadas de <strong className="text-[var(--sage-dark)]">Hairstroke</strong> para cejas 
          y <strong className="text-[var(--sage-dark)]">SMP</strong> para micropigmentación capilar. 
          Resultados que transforman y realzan tu esencia.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#servicios"
            className="px-8 py-4 bg-[var(--sage)] text-white font-medium rounded-full hover:bg-[var(--sage-dark)] transition-all duration-300 shadow-lg shadow-[var(--sage)]/25 hover:shadow-xl hover:shadow-[var(--sage)]/30"
          >
            Descubre Nuestros Servicios
          </a>
          <a
            href="#contacto"
            className="px-8 py-4 border-2 border-[var(--gold)] text-[var(--charcoal)] font-medium rounded-full hover:bg-[var(--gold)] hover:text-white transition-all duration-300"
          >
            Agendar Consulta
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-semibold text-[var(--gold)]">500+</div>
            <div className="text-sm text-[var(--muted-foreground)] mt-1">Clientes Felices</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-semibold text-[var(--gold)]">5+</div>
            <div className="text-sm text-[var(--muted-foreground)] mt-1">Años de Experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-semibold text-[var(--gold)]">100%</div>
            <div className="text-sm text-[var(--muted-foreground)] mt-1">Satisfacción</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#servicios" className="flex flex-col items-center text-[var(--muted-foreground)] hover:text-[var(--gold)] transition-colors">
          <span className="text-xs uppercase tracking-widest mb-2">Explorar</span>
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
