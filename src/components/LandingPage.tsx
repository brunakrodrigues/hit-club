import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { HeroCarousel } from "./HeroCarousel";
import { UserPlus, Star, Gift, Trophy, Ticket, ShoppingBag, Music, Award } from "lucide-react";
import hitLogo from "figma:asset/4718ac0899edc8428110e90c9a5f3f9e8ebc3e3d.png";

interface LandingPageProps {
  onLogin: () => void;
}

export function LandingPage({ onLogin }: LandingPageProps) {
  const rewards = [
    {
      icon: <Ticket className="h-8 w-8" />,
      title: "Ingressos VIP",
      description: "Acesso exclusivo aos melhores shows sertanejos",
      points: "5.000 pontos",
      image: "https://images.unsplash.com/photo-1652018440238-1aeb20a803a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXAlMjB0aWNrZXRzfGVufDF8fHx8MTc2ODMyNDEyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: <ShoppingBag className="h-8 w-8" />,
      title: "Produtos Exclusivos",
      description: "Camisetas, bonés e acessórios do clube",
      points: "2.000 pontos",
      image: "https://images.unsplash.com/photo-1759563876852-72424d7ea98e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGNsdXNpdmUlMjBtZXJjaGFuZGlzZXxlbnwxfHx8fDE3NjgzMjQxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Experiências VIP",
      description: "Encontro com artistas e acesso aos bastidores",
      points: "10.000 pontos",
      image: "https://images.unsplash.com/photo-1547561046-ce0ba3e9a9e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VudHJ5JTIwY29uY2VydCUyMGNyb3dkfGVufDF8fHx8MTc2ODMyNDEyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: <Music className="h-8 w-8" />,
      title: "Meet & Greet",
      description: "Conheça seus artistas favoritos pessoalmente",
      points: "8.000 pontos",
      image: "https://images.unsplash.com/photo-1547561046-ce0ba3e9a9e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VudHJ5JTIwY29uY2VydCUyMGNyb3dkfGVufDF8fHx8MTc2ODMyNDEyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const steps = [
    {
      icon: <UserPlus className="h-12 w-12" />,
      title: "Cadastre-se Grátis",
      description: "Crie sua conta em segundos usando Google ou Apple"
    },
    {
      icon: <Star className="h-12 w-12" />,
      title: "Acumule Pontos",
      description: "Ganhe pontos em shows, eventos e comprando produtos"
    },
    {
      icon: <Gift className="h-12 w-12" />,
      title: "Resgate Prêmios",
      description: "Troque seus pontos por experiências exclusivas"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Altura do header fixo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-black font-montserrat">
      {/* Hero Section com Carrossel */}
      <HeroCarousel onLogin={onLogin} />

      {/* Como Funciona - DARK MODE */}
      <section id="como-funciona" className="py-20 px-4 bg-black scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-bebas text-5xl md:text-6xl text-center text-white uppercase tracking-wider mb-16">
            Como <span className="text-[#d4af37]">Funciona</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="bg-[#1a1a1a] border-gray-800 hover:border-[#d4af37] transition-all duration-300 shadow-sm hover:shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#d4af37]/10 text-[#d4af37] mb-6">
                    {step.icon}
                  </div>
                  <div className="text-[#d4af37] font-bebas text-xl mb-4">
                    PASSO {index + 1}
                  </div>
                  <h3 className="text-white mb-3 font-bebas text-2xl uppercase">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Catálogo de Recompensas - DARK MODE */}
      <section id="premios" className="py-20 px-4 bg-[#0a0a0a] scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-bebas text-5xl md:text-6xl text-center text-white uppercase tracking-wider mb-4">
            Catálogo de <span className="text-[#d4af37]">Recompensas</span>
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            Troque seus pontos por experiências exclusivas e produtos premium
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rewards.map((reward, index) => (
              <Card key={index} className="bg-[#1a1a1a] border-gray-800 hover:border-[#d4af37] transition-all duration-300 overflow-hidden group shadow-sm hover:shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={reward.image}
                    alt={reward.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-[#d4af37] text-black px-3 py-1 rounded-full flex items-center gap-1">
                    {reward.icon}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-white mb-2 font-bebas text-xl uppercase">
                    {reward.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {reward.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#d4af37] flex items-center gap-1 font-semibold">
                      <Star className="h-4 w-4 fill-current" />
                      {reward.points}
                    </span>
                    <Button 
                      size="sm"
                      variant="outline"
                      className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black"
                    >
                      Resgatar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final - DARK MODE */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <Award className="h-16 w-16 text-[#d4af37] mx-auto mb-6" />
          <h2 className="font-bebas text-5xl md:text-6xl text-white uppercase tracking-wider mb-6">
            Pronto para se juntar ao <span className="text-[#d4af37]">Nexus</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Junte-se à maior comunidade de fãs do universo sertanejo e de rodeios do Brasil
          </p>
          <Button 
            onClick={onLogin}
            size="lg"
            className="bg-[#d4af37] hover:bg-[#c09d2e] text-black px-12 py-6 text-lg"
          >
            <Trophy className="h-5 w-5 mr-2" />
            Cadastre-se Grátis Agora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img src={hitLogo} alt="HIT Logo" className="h-8 w-8 object-contain" />
              <span className="font-bebas text-xl text-white uppercase tracking-wider">
                Nexus Club
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              © 2026 Nexus Club. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}