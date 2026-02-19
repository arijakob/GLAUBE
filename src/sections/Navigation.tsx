import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const PHONE_NUMBER = '526463883818';
const PHONE_DISPLAY = '646 388 3818';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#galeria', label: 'Galería' },
    { href: '#contacto', label: 'Contacto' },
  ];

  const openWhatsApp = () => {
    const message = encodeURIComponent('¡Hola! Me interesa agendar una cita para micropigmentación. ¿Podrías darme más información?');
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="GLAUBE"
              className="h-14 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide uppercase text-[var(--charcoal)] hover:text-[var(--gold)] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:+${PHONE_NUMBER}`}
              className="flex items-center gap-2 px-4 py-2.5 border-2 border-[var(--sage)] text-[var(--sage)] text-sm font-medium rounded-full hover:bg-[var(--sage)] hover:text-white transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>{PHONE_DISPLAY}</span>
            </a>
            <button
              onClick={openWhatsApp}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-sm font-medium rounded-full hover:bg-[#128C7E] transition-colors duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[var(--charcoal)]" />
            ) : (
              <Menu className="w-6 h-6 text-[var(--charcoal)]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-[var(--border)]">
            <div className="py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-[var(--charcoal)] hover:text-[var(--gold)] hover:bg-[var(--cream)] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-4 space-y-3">
                <a
                  href={`tel:+${PHONE_NUMBER}`}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 border-2 border-[var(--sage)] text-[var(--sage)] font-medium rounded-full"
                >
                  <Phone className="w-4 h-4" />
                  <span>Llamar</span>
                </a>
                <button
                  onClick={() => {
                    openWhatsApp();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-[#25D366] text-white font-medium rounded-full"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
