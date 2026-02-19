import { Instagram, Facebook, Mail, Phone, MapPin, MessageCircle, Music2 } from 'lucide-react';

const PHONE_NUMBER = '526463883818';
const PHONE_DISPLAY = '646 388 3818';
const EMAIL = 'glaubemex@gmail.com';

const quickLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' }
];

const services = [
  { label: 'Hairstroke', href: '#servicios' },
  { label: 'SMP', href: '#servicios' },
  { label: 'Consulta', href: '#contacto' }
];

export function Footer() {
  const openWhatsApp = () => {
    const message = encodeURIComponent('¡Hola! Me interesa agendar una cita para micropigmentación. ¿Podrías darme más información?');
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-[var(--charcoal)] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#inicio" className="inline-block mb-6">
              <img
                src="/logo.png"
                alt="GLAUBE"
                className="h-20 w-auto brightness-0 invert"
              />
            </a>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Especialistas en micropigmentación de alta precisión. 
              Realzando tu belleza natural con técnicas avanzadas de Hairstroke y SMP.
            </p>
            <div className="flex gap-3">
              <a
               href="https://www.instagram.com/glaubemx/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--gold)] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/GlaubeMx/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--gold)] transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <button
                onClick={openWhatsApp}
                className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center hover:bg-[#128C7E] transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
                            <a
                href="https://www.tiktok.com/@arieljacobo17"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--gold)] transition-colors duration-300"
                aria-label="TikTok"
              >
                <Music2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[var(--gold)] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-white/70 hover:text-[var(--gold)] transition-colors duration-300 text-sm"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:+${PHONE_NUMBER}`}
                  className="flex items-center gap-3 text-white/70 hover:text-[var(--gold)] transition-colors duration-300 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-white/70 hover:text-[var(--gold)] transition-colors duration-300 text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>{EMAIL}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Vicente Guerrero, San Quintín B.C.<br />y Ensenada B.C.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} GLAUBE. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
