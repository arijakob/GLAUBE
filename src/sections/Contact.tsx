import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const PHONE_NUMBER = '526463883818';
const PHONE_DISPLAY = '646 388 3818';
const EMAIL = 'glaubemex@gmail.com';

const contactInfo = [
  {
    icon: <MapPin className="w-5 h-5" />,
    title: 'Ubicación',
    content: 'Vicente Guerrero, San Quintín B.C. y Ensenada B.C.',
    link: '#'
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: 'Teléfono',
    content: PHONE_DISPLAY,
    link: `tel:+${PHONE_NUMBER}`
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: 'Email',
    content: EMAIL,
    link: `mailto:${EMAIL}`
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: 'Horario',
    content: 'Previa cita',
    link: '#'
  }
];

const socialLinks = [
  { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', link: 'https://www.instagram.com/glaubemx/' },
  { icon: <Facebook className="w-5 h-5" />, label: 'Facebook', link: 'https://www.facebook.com/GlaubeMx/' }
];

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('¡Mensaje enviado! Te contactaremos pronto.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('¡Hola! Me interesa agendar una cita para micropigmentación. ¿Podrías darme más información?');
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--sage)]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-[var(--sage)]/10 text-[var(--sage-dark)] text-sm font-medium rounded-full mb-4">
            Contacto
          </span>
          <h2 className="text-4xl lg:text-5xl font-light text-[var(--charcoal)] mb-4">
            Agenda tu <span className="font-semibold text-gradient">Consulta</span>
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Estamos aquí para responder tus preguntas y ayudarte a dar el primer paso hacia tu transformación
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--sage)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--sage)] transition-colors duration-300">
                    <span className="text-[var(--sage)] group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-medium text-[var(--charcoal)]">{item.title}</h3>
                    <p className="text-[var(--muted-foreground)]">{item.content}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp Button */}
            <div className="mb-8">
              <button
                onClick={openWhatsApp}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#25D366] text-white font-medium rounded-2xl hover:bg-[#128C7E] transition-all duration-300 shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/30"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Enviar WhatsApp</span>
              </button>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-medium text-[var(--charcoal)] mb-4">Síguenos</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-[var(--cream)] flex items-center justify-center text-[var(--charcoal)] hover:bg-[var(--sage)] hover:text-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-3 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <form action="https://formspree.io/f/maqddqpv" method="POST" className="bg-[var(--cream)] rounded-3xl p-8 lg:p-10">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[var(--charcoal)]">Nombre completo</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white border-[var(--border)] focus:border-[var(--sage)] focus:ring-[var(--sage)]"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[var(--charcoal)]">Correo electrónico</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white border-[var(--border)] focus:border-[var(--sage)] focus:ring-[var(--sage)]"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[var(--charcoal)]">Teléfono</Label>
                  <Input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="646 388 3818"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-white border-[var(--border)] focus:border-[var(--sage)] focus:ring-[var(--sage)]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-[var(--charcoal)]">Servicio de interés</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full h-10 px-3 rounded-md bg-white border border-[var(--border)] text-[var(--charcoal)] focus:border-[var(--sage)] focus:ring-1 focus:ring-[var(--sage)] outline-none"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="hairstroke">Hairstroke - Cejas</option>
                    <option value="smp">SMP - Micropigmentación Capilar</option>
                    <option value="consulta">Consulta General</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <Label htmlFor="message" className="text-[var(--charcoal)]">Mensaje</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Cuéntanos qué necesitas..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white border-[var(--border)] focus:border-[var(--sage)] focus:ring-[var(--sage)] min-h-[120px]"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[var(--sage)] hover:bg-[var(--sage-dark)] text-white py-6 rounded-xl font-medium transition-all duration-300"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
