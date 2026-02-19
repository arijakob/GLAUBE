import { useEffect, useState } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { MessageCircle, X } from 'lucide-react';
import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { About } from './sections/About';
import { Gallery } from './sections/Gallery';
import { Testimonials } from './sections/Testimonials';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

const PHONE_NUMBER = '526463883818';

function App() {
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    const message = encodeURIComponent('¡Hola! Me interesa agendar una cita para micropigmentación. ¿Podrías darme más información?');
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-center" richColors />
      <Navigation />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        {showWhatsApp ? (
          <div className="bg-white rounded-2xl shadow-2xl p-4 mb-4 w-72 animate-in slide-in-from-bottom-2">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[var(--charcoal)]">GLAUBE</p>
                  <p className="text-xs text-[var(--muted-foreground)]">En línea</p>
                </div>
              </div>
              <button 
                onClick={() => setShowWhatsApp(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-[var(--charcoal)]" />
              </button>
            </div>
            <p className="text-sm text-[var(--muted-foreground)] mb-4">
              ¡Hola! ¿En qué podemos ayudarte? Agenda tu cita ahora.
            </p>
            <button
              onClick={openWhatsApp}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] text-white font-medium rounded-xl hover:bg-[#128C7E] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Enviar mensaje</span>
            </button>
          </div>
        ) : null}
        
        <button
          onClick={() => setShowWhatsApp(!showWhatsApp)}
          className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 flex items-center justify-center hover:bg-[#128C7E] hover:scale-110 transition-all duration-300"
          aria-label="WhatsApp"
        >
          {showWhatsApp ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-7 h-7" />
          )}
        </button>
      </div>
    </div>
  );
}

export default App;
