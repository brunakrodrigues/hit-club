import { useState } from 'react';
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Star, Trophy, Ticket, ShoppingBag, Music, Award, 
  Users, Gift, Sparkles, Crown, ArrowUpDown, SlidersHorizontal
} from "lucide-react";

interface RewardsCatalogProps {
  userPoints: number;
  onRewardClick?: (rewardId: number) => void;
}

export function RewardsCatalog({ userPoints, onRewardClick }: RewardsCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | 'none'>('none');

  const categories = [
    { name: "Todos", icon: <Sparkles className="h-4 w-4" /> },
    { name: "Ingressos", icon: <Ticket className="h-4 w-4" /> },
    { name: "Produtos", icon: <ShoppingBag className="h-4 w-4" /> },
    { name: "Experiências", icon: <Trophy className="h-4 w-4" /> },
    { name: "VIP", icon: <Crown className="h-4 w-4" /> }
  ];

  const rewards = [
    {
      id: 1,
      title: "Ingresso VIP - Show Luan Santana",
      description: "Acesso completo ao camarote VIP com open bar e buffet",
      points: 5000,
      category: "Ingressos",
      image: "https://images.unsplash.com/photo-1652018440238-1aeb20a803a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXAlMjB0aWNrZXRzfGVufDF8fHx8MTc2ODMyNDEyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: <Ticket className="h-8 w-8" />,
      badge: "Mais Popular"
    },
    {
      id: 2,
      title: "Camiseta Oficial Nexus Club",
      description: "Edição limitada com design exclusivo do clube",
      points: 2000,
      category: "Produtos",
      image: "https://images.unsplash.com/photo-1759563876852-72424d7ea98e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGNsdXNpdmUlMjBtZXJjaGFuZGlzZXxlbnwxfHx8fDE3NjgzMjQxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: <ShoppingBag className="h-8 w-8" />
    },
    {
      id: 3,
      title: "Meet & Greet com Gusttavo Lima",
      description: "Encontro exclusivo nos bastidores + foto autografada",
      points: 8000,
      category: "Experiências",
      image: "https://images.unsplash.com/photo-1547561046-ce0ba3e9a9e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VudHJ5JTIwY29uY2VydCUyMGNyb3dkfGVufDF8fHx8MTc2ODMyNDEyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: <Music className="h-8 w-8" />,
      badge: "Exclusivo"
    },
    {
      id: 4,
      title: "Boné Snapback Nexus",
      description: "Boné premium com bordado 3D",
      points: 1500,
      category: "Produtos",
      image: "https://images.unsplash.com/photo-1759563876852-72424d7ea98e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGNsdXNpdmUlMjBtZXJjaGFuZGlzZXxlbnwxfHx8fDE3NjgzMjQxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: <ShoppingBag className="h-8 w-8" />
    },
    {
      id: 5,
      title: "Experiência VIP - Rodeio Rio Preto",
      description: "Acesso completo aos bastidores + jantar com peões",
      points: 10000,
      category: "VIP",
      image: "https://images.unsplash.com/photo-1767206106365-f6d3437d1ad0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2RlbyUyMGJ1bGwlMjByaWRpbmd8ZW58MXx8fHwxNzY4MzI0MTIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: <Trophy className="h-8 w-8" />,
      badge: "Premium"
    },
    {
      id: 6,
      title: "Par de Ingressos - Área VIP",
      description: "Dois ingressos para qualquer show do circuito",
      points: 4000,
      category: "Ingressos",
      image: "https://images.unsplash.com/photo-1652018440238-1aeb20a803a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXAlMjB0aWNrZXRzfGVufDF8fHx8MTc2ODMyNDEyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: <Ticket className="h-8 w-8" />
    },
    {
      id: 7,
      title: "Kit Completo Nexus",
      description: "Camiseta + Boné + Chaveiro + Adesivos exclusivos",
      points: 3500,
      category: "Produtos",
      image: "https://images.unsplash.com/photo-1759563876852-72424d7ea98e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGNsdXNpdmUlMjBtZXJjaGFuZGlzZXxlbnwxfHx8fDE3NjgzMjQxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: <Gift className="h-8 w-8" />,
      badge: "Kit Completo"
    },
    {
      id: 8,
      title: "Tour nos Bastidores",
      description: "Conheça os bastidores do evento + brindes exclusivos",
      points: 6000,
      category: "Experiências",
      image: "https://images.unsplash.com/photo-1547561046-ce0ba3e9a9e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VudHJ5JTIwY29uY2VydCUyMGNyb3dkfGVufDF8fHx8MTc2ODMyNDEyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: <Users className="h-8 w-8" />
    },
    {
      id: 9,
      title: "Jaqueta Exclusiva Premium",
      description: "Jaqueta de couro sintético com logo bordado",
      points: 7500,
      category: "Produtos",
      image: "https://images.unsplash.com/photo-1759563876852-72424d7ea98e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGNsdXNpdmUlMjBtZXJjaGFuZGlzZXxlbnwxfHx8fDE3NjgzMjQxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: <ShoppingBag className="h-8 w-8" />,
      badge: "Edição Limitada"
    },
    {
      id: 10,
      title: "Pacote Completo VIP Anual",
      description: "Acesso VIP a todos os eventos do ano + brindes mensais",
      points: 15000,
      category: "VIP",
      image: "https://images.unsplash.com/photo-1767206106365-f6d3437d1ad0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2RlbyUyMGJ1bGwlMjByaWRpbmd8ZW58MXx8fHwxNzY4MzI0MTIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: <Crown className="h-8 w-8" />,
      badge: "Ultimate"
    }
  ];

  // Filter by category
  const filteredRewards = selectedCategory === "Todos" 
    ? rewards 
    : rewards.filter(r => r.category === selectedCategory);

  // Sort by points
  const sortedRewards = [...filteredRewards].sort((a, b) => {
    if (sortOrder === 'asc') return a.points - b.points;
    if (sortOrder === 'desc') return b.points - a.points;
    return 0;
  });

  const toggleSort = () => {
    if (sortOrder === 'none') setSortOrder('asc');
    else if (sortOrder === 'asc') setSortOrder('desc');
    else setSortOrder('none');
  };

  const getSortLabel = () => {
    if (sortOrder === 'asc') return 'Menor para Maior';
    if (sortOrder === 'desc') return 'Maior para Menor';
    return 'Ordenar por Pontos';
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-12 px-4 font-montserrat">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="font-bebas text-5xl md:text-6xl text-white uppercase tracking-wider mb-4">
            Catálogo de <span className="text-[#d4af37]">Prêmios</span>
          </h1>
          <div className="flex items-center gap-4 flex-wrap">
            <p className="text-gray-400">Seus pontos disponíveis:</p>
            <div className="flex items-center gap-2 bg-[#d4af37]/10 border border-[#d4af37] rounded-lg px-4 py-2">
              <Star className="h-5 w-5 text-[#d4af37] fill-current" />
              <span className="text-[#d4af37] font-bebas text-2xl">
                {userPoints.toLocaleString('pt-BR')}
              </span>
              <span className="text-white">pontos</span>
            </div>
          </div>
        </div>

        {/* Filtros e Ordenação */}
        <div className="mb-6 flex flex-col md:flex-row justify-between gap-4">
          {/* Categorias */}
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-5 w-5 text-gray-400" />
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={selectedCategory === category.name ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.name)}
                  className={
                    selectedCategory === category.name
                      ? "bg-[#d4af37] hover:bg-[#c09d2e] text-black" 
                      : "border-gray-700 text-gray-300 hover:bg-gray-800"
                  }
                >
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Ordenação */}
          <Button
            variant="outline"
            onClick={toggleSort}
            className="border-gray-700 text-gray-300 hover:bg-gray-800 whitespace-nowrap"
          >
            <ArrowUpDown className="h-4 w-4 mr-2" />
            {getSortLabel()}
          </Button>
        </div>

        {/* Grid de Prêmios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedRewards.map((reward) => {
            const canRedeem = userPoints >= reward.points;
            
            return (
              <Card 
                key={reward.id} 
                className="bg-[#1a1a1a] border-gray-800 hover:border-[#d4af37] transition-all duration-300 overflow-hidden group cursor-pointer shadow-sm hover:shadow-lg"
                onClick={() => onRewardClick?.(reward.id)}
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={reward.image}
                    alt={reward.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                  {reward.badge && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-[#d4af37] text-black px-3 py-1 rounded-full text-xs font-semibold">
                        {reward.badge}
                      </span>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div className="text-[#d4af37]/20">
                      {reward.icon}
                    </div>
                    <div className="flex items-center gap-1 text-[#d4af37]">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="font-bebas text-xl">
                        {reward.points.toLocaleString('pt-BR')}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-white mb-2 font-bebas text-xl uppercase leading-tight">
                    {reward.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {reward.description}
                  </p>
                  <Button
                    className={`w-full ${
                      canRedeem 
                        ? 'bg-[#d4af37] hover:bg-[#c09d2e] text-black' 
                        : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!canRedeem}
                  >
                    {canRedeem ? 'Resgatar Agora' : `Faltam ${(reward.points - userPoints).toLocaleString('pt-BR')} pts`}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mensagem se não houver resultados */}
        {sortedRewards.length === 0 && (
          <div className="text-center py-16">
            <Gift className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="font-bebas text-2xl text-white mb-2">Nenhum prêmio encontrado</h3>
            <p className="text-gray-400">Tente selecionar outra categoria</p>
          </div>
        )}
      </div>
    </div>
  );
}