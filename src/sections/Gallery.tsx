import { useEffect, useRef, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  // SMP - Micropigmentación Capilar
  {
    id: 1,
    image: '/gallery/smp/smp1.jpg',
    title: 'Resultado SMP - Vista Lateral',
    category: 'SMP'
  },
  {
    id: 2,
    image: '/gallery/smp/smp2.jpg',
    title: 'Resultado SMP - Perfil',
    category: 'SMP'
  },
  {
    id: 3,
    image: '/gallery/smp/smp3.jpg',
    title: 'Resultado SMP - Exterior',
    category: 'SMP'
  },
  {
    id: 4,
    image: '/gallery/smp/smp4.jpg',
    title: 'Resultado SMP - Detalle',
    category: 'SMP'
  },
  {
    id: 5,
    image: '/gallery/smp/smp5.jpg',
    title: 'Resultado SMP - Vista Superior',
    category: 'SMP'
  },
  // Hairstroke - Cejas
  {
    id: 6,
    image: '/gallery/hairstroke/hair1.jpg',
    title: 'Hairstroke Masculino',
    category: 'Hairstroke'
  },
  {
    id: 7,
    image: '/gallery/hairstroke/hair2.jpg',
    title: 'Diseño de Cejas Personalizado',
    category: 'Hairstroke'
  },
  {
    id: 8,
    image: '/gallery/hairstroke/hair3.jpg',
    title: 'Cejas Terminadas - Efecto Natural',
    category: 'Hairstroke'
  },
  {
    id: 9,
    image: '/gallery/hairstroke/hair4.jpg',
    title: 'Cejas Definidas',
    category: 'Hairstroke'
  },
  {
    id: 10,
    image: '/gallery/hairstroke/hair5.jpg',
    title: 'Cejas Naturales',
    category: 'Hairstroke'
  },
  // Proceso y Promocional
  {
    id: 11,
    image: '/gallery/proceso/antesdespues1.jpg',
    title: 'Antes y Después SMP',
    category: 'Proceso'
  },
  {
    id: 12,
    image: '/gallery/proceso/collage1.jpg',
    title: 'Micropigmentación Capilar - Resultados',
    category: 'Proceso'
  },
  {
    id: 13,
    image: '/gallery/proceso/collage2.jpg',
    title: 'Proceso SMP - Recupera tu Confianza',
    category: 'Proceso'
  },
  {
    id: 14,
    image: '/gallery/proceso/proceso1.jpg',
    title: 'Trazo de Cejas - Proceso',
    category: 'Proceso'
  },
  {
    id: 15,
    image: '/gallery/proceso/proceso2.jpg',
    title: 'Delineado de Cejas',
    category: 'Proceso'
  },
  {
    id: 16,
    image: '/gallery/proceso/proceso3.jpg',
    title: 'Proceso SMP - Detalle',
    category: 'Proceso'
  },
  {
    id: 17,
    image: '/gallery/proceso/proceso4.jpg',
    title: 'Trabajo en Proceso',
    category: 'Proceso'
  },
  {
    id: 18,
    image: '/gallery/proceso/profesional1.jpg',
    title: 'Equipo GLAUBE',
    category: 'Proceso'
  },
  {
    id: 19,
    image: '/gallery/proceso/profesional2.jpg',
    title: 'Certificaciones Internacionales',
    category: 'Proceso'
  }
];

export function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState<string>('all');

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

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section
      id="galeria"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-[var(--sage)]/10 text-[var(--sage-dark)] text-sm font-medium rounded-full mb-4">
            Galería
          </span>
          <h2 className="text-4xl lg:text-5xl font-light text-[var(--charcoal)] mb-4">
            Nuestros <span className="font-semibold text-gradient">Resultados</span>
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Cada trabajo es una obra de arte única, diseñada para realzar la belleza natural de cada cliente
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex justify-center gap-3 mb-12 flex-wrap transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {['all', 'SMP', 'Hairstroke', 'Proceso'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-[var(--sage)] text-white'
                  : 'bg-[var(--cream)] text-[var(--charcoal)] hover:bg-[var(--sage-light)]/30'
              }`}
            >
              {category === 'all' ? 'Todos' : category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelectedImage(item)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-2 py-1 bg-[var(--gold)]/80 text-white text-xs rounded mb-1">
                  {item.category}
                </span>
                <h3 className="text-white text-sm font-medium line-clamp-2">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className={`text-center text-sm text-[var(--muted-foreground)] mt-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          * Los resultados pueden variar según el tipo de piel y cuidados post-tratamiento
        </p>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full max-h-[75vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-center">
              <span className="inline-block px-3 py-1 bg-[var(--gold)] text-white text-sm rounded-full mb-2">
                {selectedImage.category}
              </span>
              <h3 className="text-white text-xl font-medium">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
