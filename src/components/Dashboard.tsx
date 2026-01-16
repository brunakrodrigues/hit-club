import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Trophy, Gift, User, History, Star, TrendingUp, 
  Ticket, ShoppingBag, Award, Calendar, CreditCard,
  Target, Zap, CheckCircle2, Clock
} from "lucide-react";

interface DashboardProps {
  userName: string;
  onNavigate: (page: string) => void;
}

export function Dashboard({ userName, onNavigate }: DashboardProps) {
  const userPoints = 7850;
  const nextLevelPoints = 10000;
  const progress = (userPoints / nextLevelPoints) * 100;
  
  const recentActivities = [
    { date: "10/01/2026", action: "Participação no show de Gusttavo Lima", points: "+500" },
    { date: "05/01/2026", action: "Compra de camiseta oficial", points: "+200" },
    { date: "28/12/2025", action: "Check-in no Rio Preto Country Bulls", points: "+150" },
    { date: "20/12/2025", action: "Indicação de amigo", points: "+300" }
  ];

  const missions = [
    {
      title: "Complete seu Perfil",
      description: "Adicione foto e preencha todos os dados",
      points: 100,
      progress: 60,
      icon: <User className="h-5 w-5" />,
      status: "active"
    },
    {
      title: "Participe de 3 Eventos",
      description: "Compareça a 3 shows ou rodeios este mês",
      points: 500,
      progress: 66,
      icon: <Ticket className="h-5 w-5" />,
      status: "active"
    },
    {
      title: "Indique 5 Amigos",
      description: "Convide amigos para o Nexus Club",
      points: 750,
      progress: 40,
      icon: <Trophy className="h-5 w-5" />,
      status: "active"
    },
    {
      title: "Primeiro Resgate",
      description: "Resgate seu primeiro prêmio",
      points: 200,
      progress: 100,
      icon: <CheckCircle2 className="h-5 w-5" />,
      status: "completed"
    }
  ];

  const offers = [
    {
      title: "Dobro de Pontos no Próximo Show",
      description: "Ganhe 2x pontos no show de Luan Santana - 20/02",
      image: "https://images.unsplash.com/photo-1709731191876-899e32264420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodHN8ZW58MXx8fHwxNzY4MjI2NzI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badge: "2x Pontos",
      expires: "3 dias"
    },
    {
      title: "Oferta Relâmpago - 30% OFF em Produtos",
      description: "Use seus pontos com desconto na loja oficial",
      image: "https://images.unsplash.com/photo-1759563876852-72424d7ea98e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGNsdXNpdmUlMjBtZXJjaGFuZGlzZXxlbnwxfHx8fDE3NjgzMjQxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badge: "30% OFF",
      expires: "24 horas"
    },
    {
      title: "Experiência VIP - Rodeio Especial",
      description: "Acesso exclusivo aos bastidores no próximo rodeio",
      image: "https://images.unsplash.com/photo-1760041871055-f447302cfe3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZXN0ZXJuJTIwY293Ym95JTIwZXZlbnR8ZW58MXx8fHwxNzY4MzI0NTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badge: "Exclusivo",
      expires: "7 dias"
    }
  ];

  const quickActions = [
    { 
      icon: <Gift className="h-6 w-6" />, 
      title: "Resgatar Prêmios", 
      description: "Ver catálogo completo",
      action: "rewards"
    },
    { 
      icon: <History className="h-6 w-6" />, 
      title: "Ver Extrato", 
      description: "Histórico de pontos",
      action: "history"
    },
    { 
      icon: <User className="h-6 w-6" />, 
      title: "Editar Perfil", 
      description: "Atualizar dados",
      action: "profile"
    },
    { 
      icon: <CreditCard className="h-6 w-6" />, 
      title: "Cartão Virtual", 
      description: "Seu cartão do clube",
      action: "card"
    }
  ];

  const upcomingRewards = [
    { name: "Ingresso VIP - Show Luan Santana", points: 5000, image: <Ticket className="h-8 w-8" /> },
    { name: "Camiseta Exclusiva Nexus", points: 2000, image: <ShoppingBag className="h-8 w-8" /> },
    { name: "Meet & Greet Backstage", points: 8000, image: <Award className="h-8 w-8" /> }
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-12 px-4 font-montserrat">
      <div className="container mx-auto max-w-7xl">
        {/* Saudação e Saldo de Pontos */}
        <div className="mb-8">
          <h1 className="font-bebas text-4xl md:text-5xl text-white uppercase tracking-wider mb-2">
            Olá, <span className="text-[#d4af37]">{userName}</span>!
          </h1>
          <p className="text-gray-400">Bem-vindo de volta ao Nexus Club</p>
        </div>

        {/* Card de Pontos Principal */}
        <Card className="bg-gradient-to-br from-[#d4af37] via-[#b8932c] to-[#8b7021] border-0 mb-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 opacity-10">
            <Trophy className="h-64 w-64" />
          </div>
          <CardContent className="p-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <p className="text-black/80 mb-2 uppercase tracking-wide text-sm">Saldo Disponível</p>
                <div className="flex items-baseline gap-3">
                  <span className="font-bebas text-6xl md:text-7xl text-black">
                    {userPoints.toLocaleString('pt-BR')}
                  </span>
                  <span className="text-black text-xl">pontos</span>
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-2 text-black/90 mb-2">
                    <Award className="h-4 w-4" />
                    <span className="text-sm">Nível: Nexus Prata</span>
                  </div>
                  <Progress 
  value={progress} 
  className="h-2 bg-black/20" 
  indicatorClassName="bg-black" 
/>
                  <p className="text-black/70 text-sm mt-2">
                    Faltam {(nextLevelPoints - userPoints).toLocaleString('pt-BR')} pontos para Ouro
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Button 
                  onClick={() => onNavigate('rewards')}
                  className="bg-black text-[#d4af37] hover:bg-black/90"
                >
                  <Gift className="h-4 w-4 mr-2" />
                  Resgatar Pontos
                </Button>
                <Button 
                  variant="outline"
                  className="border-black text-black hover:bg-black/10"
                >
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Ganhar Mais Pontos
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ofertas Personalizadas */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bebas text-3xl text-white uppercase tracking-wider flex items-center gap-2">
              <Zap className="h-7 w-7 text-[#d4af37]" />
              Ofertas <span className="text-[#d4af37]">Personalizadas</span>
            </h2>
            <Button 
              variant="ghost"
              className="text-[#d4af37] hover:text-[#d4af37] hover:bg-[#d4af37]/10"
            >
              Ver Todas
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {offers.map((offer, index) => (
              <Card 
                key={index}
                className="bg-[#1a1a1a] border-gray-800 hover:border-[#d4af37] transition-all cursor-pointer group overflow-hidden shadow-sm hover:shadow-lg"
              >
                <div className="relative h-40 overflow-hidden">
                  <ImageWithFallback
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-[#d4af37] text-black border-0">
                      {offer.badge}
                    </Badge>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white font-bebas text-lg uppercase mb-1">
                      {offer.title}
                    </h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-gray-400 text-sm mb-3">{offer.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="h-3 w-3" />
                      Expira em {offer.expires}
                    </div>
                    <Button size="sm" className="bg-[#d4af37] hover:bg-[#c09d2e] text-black text-xs">
                      Ativar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Missões */}
        <div className="mb-8">
          <h2 className="font-bebas text-3xl text-white uppercase tracking-wider mb-6 flex items-center gap-2">
            <Target className="h-7 w-7 text-[#d4af37]" />
            Missões <span className="text-[#d4af37]">do Clube</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {missions.map((mission, index) => (
              <Card 
                key={index}
                className={`${
                  mission.status === 'completed' 
                    ? 'bg-[#d4af37]/10 border-[#d4af37]/30' 
                    : 'bg-[#1a1a1a] border-gray-800 hover:border-[#d4af37]'
                } transition-all shadow-sm`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${
                        mission.status === 'completed' 
                          ? 'bg-[#d4af37] text-black' 
                          : 'bg-[#d4af37]/10 text-[#d4af37]'
                      }`}>
                        {mission.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white mb-1 flex items-center gap-2">
                          {mission.title}
                          {mission.status === 'completed' && (
                            <CheckCircle2 className="h-4 w-4 text-[#d4af37]" />
                          )}
                        </h3>
                        <p className="text-gray-400 text-sm mb-3">{mission.description}</p>
                        {mission.status === 'active' && (
                          <>
                            <Progress value={mission.progress} className="h-2 mb-2" />
                            <p className="text-xs text-gray-500">{mission.progress}% concluído</p>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-[#d4af37]">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="font-bebas text-xl">+{mission.points}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Ações Rápidas */}
        <div className="mb-8">
          <h2 className="font-bebas text-3xl text-white uppercase tracking-wider mb-6">
            Ações <span className="text-[#d4af37]">Rápidas</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Card 
                key={index} 
                className="bg-[#1a1a1a] border-gray-800 hover:border-[#d4af37] transition-all cursor-pointer group shadow-sm hover:shadow-md"
                onClick={() => onNavigate(action.action)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#d4af37]/10 rounded-lg text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition-colors">
                      {action.icon}
                    </div>
                    <div>
                      <h3 className="text-white mb-1 group-hover:text-[#d4af37] transition-colors">
                        {action.title}
                      </h3>
                      <p className="text-gray-500 text-sm">{action.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Atividades Recentes */}
          <Card className="bg-[#1a1a1a] border-gray-800 shadow-sm">
            <CardHeader>
              <CardTitle className="font-bebas text-2xl text-white uppercase tracking-wider flex items-center gap-2">
                <History className="h-6 w-6 text-[#d4af37]" />
                Atividades Recentes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div 
                    key={index} 
                    className="flex items-start justify-between pb-4 border-b border-gray-800 last:border-0"
                  >
                    <div className="flex-1">
                      <p className="text-white mb-1">{activity.action}</p>
                      <p className="text-gray-500 text-sm flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        {activity.date}
                      </p>
                    </div>
                    <div className="text-[#d4af37] flex items-center gap-1">
                      <Star className="h-4 w-4 fill-current" />
                      {activity.points}
                    </div>
                  </div>
                ))}
              </div>
              <Button 
                variant="ghost" 
                className="w-full mt-4 text-[#d4af37] hover:text-[#d4af37] hover:bg-[#d4af37]/10"
                onClick={() => onNavigate('history')}
              >
                Ver Histórico Completo
              </Button>
            </CardContent>
          </Card>

          {/* Próximos Prêmios */}
          <Card className="bg-[#1a1a1a] border-gray-800 shadow-sm">
            <CardHeader>
              <CardTitle className="font-bebas text-2xl text-white uppercase tracking-wider flex items-center gap-2">
                <Trophy className="h-6 w-6 text-[#d4af37]" />
                Prêmios em Destaque
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingRewards.map((reward, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-4 p-4 bg-[#0a0a0a] rounded-lg hover:bg-[#222] transition-colors cursor-pointer"
                    onClick={() => onNavigate('rewards')}
                  >
                    <div className="p-3 bg-[#d4af37]/10 rounded-lg text-[#d4af37]">
                      {reward.image}
                    </div>
                    <div className="flex-1">
                      <p className="text-white mb-1">{reward.name}</p>
                      <p className="text-gray-500 text-sm flex items-center gap-1">
                        <Star className="h-3 w-3 fill-current text-[#d4af37]" />
                        {reward.points.toLocaleString('pt-BR')} pontos
                      </p>
                    </div>
                    {userPoints >= reward.points && (
                      <span className="text-xs bg-[#d4af37] text-black px-2 py-1 rounded-full">
                        Disponível
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <Button 
                className="w-full mt-4 bg-[#d4af37] hover:bg-[#c09d2e] text-black"
                onClick={() => onNavigate('rewards')}
              >
                <Gift className="h-4 w-4 mr-2" />
                Ver Todos os Prêmios
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}