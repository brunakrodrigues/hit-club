import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { 
  User, Mail, Phone, MapPin, Calendar, Star, 
  Trophy, Award, Edit, Save, Camera 
} from "lucide-react";

interface UserProfileProps {
  userName: string;
  userPoints: number;
}

export function UserProfile({ userName, userPoints }: UserProfileProps) {
  const userLevel = "Nexus Prata";
  const memberSince = "Dezembro 2025";
  
  const achievements = [
    { icon: <Trophy className="h-6 w-6" />, title: "Primeiro Resgate", description: "Resgatou seu primeiro prêmio" },
    { icon: <Star className="h-6 w-6" />, title: "5 Eventos", description: "Participou de 5 eventos" },
    { icon: <Award className="h-6 w-6" />, title: "Nível Prata", description: "Alcançou o nível Prata" }
  ];

  const stats = [
    { label: "Pontos Totais Ganhos", value: "12.350" },
    { label: "Prêmios Resgatados", value: "3" },
    { label: "Eventos Participados", value: "8" },
    { label: "Amigos Indicados", value: "2" }
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-12 px-4 font-montserrat">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="font-bebas text-5xl md:text-6xl text-white uppercase tracking-wider mb-2">
            Meu <span className="text-[#d4af37]">Perfil</span>
          </h1>
          <p className="text-gray-400">Gerencie suas informações e veja suas conquistas</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Card de Perfil */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-to-br from-black via-zinc-900 to-zinc-800 border-[#d4af37] mb-6">
              <CardContent className="p-8 text-center">
                <div className="relative inline-block mb-4">
                  <Avatar className="h-32 w-32 border-4 border-white">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-black text-white text-4xl font-bebas">
                      {userName.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <button className="absolute bottom-0 right-0 bg-white text-[#d4af37] p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <Camera className="h-4 w-4" />
                  </button>
                </div>
                
                <h2 className="font-bebas text-3xl text-white uppercase tracking-wider mb-2">
                  {userName}
                </h2>
                
                <Badge className="bg-white/20 text-white border-0 mb-4">
                  {userLevel}
                </Badge>
                
                <div className="flex items-center justify-center gap-2 text-white/90 mb-4">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">Membro desde {memberSince}</span>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-white/80 text-sm mb-1">Saldo de Pontos</p>
                  <div className="flex items-center justify-center gap-2">
                    <Star className="h-6 w-6 text-white fill-current" />
                    <span className="font-bebas text-4xl text-white">
                      {userPoints.toLocaleString('pt-BR')}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Estatísticas */}
            <Card className="bg-[#1a1a1a] border-white/10">
              <CardHeader>
                <CardTitle className="font-bebas text-xl text-white uppercase tracking-wider">
                  Estatísticas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex justify-between items-center pb-3 border-b border-white/5 last:border-0">
                      <span className="text-gray-400 text-sm">{stat.label}</span>
                      <span className="text-[#d4af37] font-bebas text-xl">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Informações e Conquistas */}
          <div className="lg:col-span-2 space-y-6">
            {/* Informações Pessoais */}
            <Card className="bg-[#1a1a1a] border-white/10">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="font-bebas text-2xl text-white uppercase tracking-wider flex items-center gap-2">
                  <User className="h-6 w-6 text-[#d4af37]" />
                  Informações Pessoais
                </CardTitle>
                <Button 
                  size="sm"
                  className="bg-[#d4af37] hover:bg-[#c09d2e] text-black"
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Editar
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-gray-400 flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Nome Completo
                    </Label>
                    <Input 
                      value={userName}
                      className="bg-black border-white/10 text-white"
                      disabled
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-gray-400 flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      E-mail
                    </Label>
                    <Input 
                      value="usuario@email.com"
                      type="email"
                      className="bg-black border-white/10 text-white"
                      disabled
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-gray-400 flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Telefone
                    </Label>
                    <Input 
                      value="(11) 98765-4321"
                      type="tel"
                      className="bg-black border-white/10 text-white"
                      disabled
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-gray-400 flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Data de Nascimento
                    </Label>
                    <Input 
                      value="15/03/1990"
                      type="text"
                      className="bg-black border-white/10 text-white"
                      disabled
                    />
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label className="text-gray-400 flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Cidade
                    </Label>
                    <Input 
                      value="São José do Rio Preto - SP"
                      className="bg-black border-white/10 text-white"
                      disabled
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Conquistas */}
            <Card className="bg-[#1a1a1a] border-white/10">
              <CardHeader>
                <CardTitle className="font-bebas text-2xl text-white uppercase tracking-wider flex items-center gap-2">
                  <Trophy className="h-6 w-6 text-[#d4af37]" />
                  Conquistas Desbloqueadas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index}
                      className="bg-black/40 border border-white/5 rounded-lg p-4 text-center hover:border-[#d4af37] transition-all"
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#d4af37]/10 text-[#d4af37] mb-3">
                        {achievement.icon}
                      </div>
                      <h3 className="text-white mb-1 font-bebas text-lg uppercase">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Preferências */}
            <Card className="bg-[#1a1a1a] border-white/10">
              <CardHeader>
                <CardTitle className="font-bebas text-2xl text-white uppercase tracking-wider">
                  Preferências de Comunicação
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg">
                    <div>
                      <p className="text-white mb-1">Notificações de Novos Prêmios</p>
                      <p className="text-gray-500 text-sm">Receba alertas quando novos prêmios estiverem disponíveis</p>
                    </div>
                    <div className="w-12 h-6 bg-[#d4af37] rounded-full relative cursor-pointer">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg">
                    <div>
                      <p className="text-white mb-1">E-mails de Eventos</p>
                      <p className="text-gray-500 text-sm">Receba informações sobre próximos shows e rodeios</p>
                    </div>
                    <div className="w-12 h-6 bg-[#d4af37] rounded-full relative cursor-pointer">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg">
                    <div>
                      <p className="text-white mb-1">Newsletter Semanal</p>
                      <p className="text-gray-500 text-sm">Resumo semanal de pontos e novidades</p>
                    </div>
                    <div className="w-12 h-6 bg-gray-600 rounded-full relative cursor-pointer">
                      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full mt-6 bg-[#d4af37] hover:bg-[#c09d2e] text-black">
                  <Save className="h-4 w-4 mr-2" />
                  Salvar Preferências
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}