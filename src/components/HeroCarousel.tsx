import { React, useState, useEffect, useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Trophy, ChevronLeft, ChevronRight } from 'lucide-react';

// Importação das imagens locais
// Certifique-se de que o caminho './assets/' está correto para a sua estrutura
import anaCastelaImg from '../assets/anacastela.jpg';
import gusttavoLimaImg from '../assets/gusttavolima.jpg';
import jorgeMateusImg from '../assets/jorgeemateus.jpg';
import luanSantanaImg from '../assets/luansantana.png';
import maiaraMaraisaImg from '../assets/maiaraemaraisa.png';
import zezeImg from '../assets/zezedicamargo.png';
import showImg from '../assets/show.jpg';

interface HeroCarouselProps {
  onLogin: () => void;
}

export function HeroCarousel({ onLogin }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      image: anaCastelaImg,
      artist: "Ana Castela",
      alt: "Ana Castela no palco"
    },
    {
      image: gusttavoLimaImg,
      artist: "Gusttavo Lima",
      alt: "Gusttavo Lima em apresentação"
    },
    {
      image: jorgeMateusImg,
      artist: "Jorge & Mateus",
      alt: "Jorge & Mateus no palco"
    },
    {
      image: luanSantanaImg,
      artist: "Luan Santana",
      alt: "Luan Santana performando"
    },
    {
      image: maiaraMaraisaImg,
      artist: "Maiara & Maraisa",
      alt: "Maiara & Maraisa em show"
    },
    {
      image: zezeImg,
      artist: "Zezé Di Camargo",
      alt: "Zezé Di Camargo ao vivo"
    },
    {
      image: showImg,
      artist: "A Galera",
      alt: "Energia da multidão no evento"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 6000); // 6 segundos por slide

      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    }
  }, [currentSlide, isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ImageWithFallback
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
      </div>

      {/* Botões de Navegação - Desktop */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 z-20 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all opacity-0 md:opacity-60 hover:opacity-100 backdrop-blur-sm"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 z-20 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all opacity-0 md:opacity-60 hover:opacity-100 backdrop-blur-sm"
        aria-label="Próximo slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Conteúdo Central */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <h1 className="font-bebas text-6xl md:text-8xl text-white uppercase tracking-wider mb-6 leading-none animate-fade-in">
          Bem-vindo ao<br />
          <span className="text-[#d4af37]">Nexus Club</span>
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
          Acumule pontos, ganhe experiências exclusivas e faça parte da maior comunidade by HIT do Brasil
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={onLogin}
            size="lg"
            className="bg-[#d4af37] hover:bg-[#c09d2e] text-black px-8 py-6 text-lg transform hover:scale-105 transition-transform"
          >
            <Trophy className="h-5 w-5 mr-2" />
            Faça Parte do Clube
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg"
          >
            Conheça os Prêmios
          </Button>
        </div>
      </div>

      {/* Indicadores de Progresso */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-12 h-3 bg-[#d4af37]'
                : 'w-3 h-3 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Nome do Artista Atual */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
        <p className="text-white/70 text-sm uppercase tracking-wider">
          {slides[currentSlide].artist}
        </p>
      </div>
    </section>
  );
}