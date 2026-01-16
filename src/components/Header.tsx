import { Button } from "./ui/button";
import { Trophy, User, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeContext";
import hitLogo from "figma:asset/4718ac0899edc8428110e90c9a5f3f9e8ebc3e3d.png";

interface HeaderProps {
  isLoggedIn?: boolean;
  onLogin?: () => void;
  onNavigate?: (page: string) => void;
}

export function Header({ isLoggedIn, onLogin, onNavigate }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10 transition-colors">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => onNavigate?.('home')}
        >
          <img src={hitLogo} alt="HIT Logo" className="h-10 w-10 object-contain" />
          <div>
            <h1 className="font-bebas text-2xl tracking-wider text-white uppercase leading-none">
              Nexus Club
            </h1>
            <p className="text-xs text-[#d4af37] font-montserrat uppercase tracking-wide">
              by HIT
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 font-montserrat">
          {isLoggedIn ? (
            <>
              <button 
                onClick={() => onNavigate?.('dashboard')}
                className="text-white hover:text-[#d4af37] transition-colors"
              >
                Dashboard
              </button>
              <button 
                onClick={() => onNavigate?.('rewards')}
                className="text-white hover:text-[#d4af37] transition-colors"
              >
                Prêmios
              </button>
              <button 
                onClick={() => onNavigate?.('profile')}
                className="text-white hover:text-[#d4af37] transition-colors"
              >
                Perfil
              </button>
              
              <Button 
                onClick={() => onNavigate?.('dashboard')}
                className="bg-[#d4af37] hover:bg-[#c09d2e] text-black"
              >
                <User className="h-4 w-4 mr-2" />
                Minha Conta
              </Button>
            </>
          ) : (
            <>
              <button 
                onClick={() => {
                  onNavigate?.('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-white hover:text-[#d4af37] transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('como-funciona')}
                className="text-white hover:text-[#d4af37] transition-colors"
              >
                Como Funciona
              </button>
              <button 
                onClick={() => scrollToSection('premios')}
                className="text-white hover:text-[#d4af37] transition-colors"
              >
                Prêmios
              </button>
              
              <Button 
                onClick={onLogin}
                className="bg-[#d4af37] hover:bg-[#c09d2e] text-black"
              >
                Entrar no Clube
              </Button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}