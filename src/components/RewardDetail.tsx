import { useState } from 'react';
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { 
  Star, ArrowLeft, Check, Info, Calendar, 
  MapPin, Users, Clock, Zap 
} from "lucide-react";

interface RewardDetailProps {
  rewardId: number;
  userPoints: number;
  onBack: () => void;
  onNavigate: (page: string) => void;
}

export function RewardDetail({ rewardId, userPoints, onBack, onNavigate }: RewardDetailProps) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Mock data - in a real app this would come from a database
  const reward = {
    id: rewardId,
    title: "Ingresso VIP - Show Luan Santana",
    category: "Ingressos",
    points: 5000,
    description: "Viva uma experiência inesquecível no show de Luan Santana! Este pacote VIP inclui acesso exclusivo ao camarote premium, com vista privilegiada do palco, open bar completo com bebidas premium, buffet gastronômico e muito mais.",
    images: [
      "https://images.unsplash.com/photo-1652018440238-1aeb20a803a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXAlMjB0aWNrZXRzfGVufDF8fHx8MTc2ODMyNDEyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1709731191876-899e32264420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodHN8ZW58MXx8fHwxNzY4MjI2NzI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1547561046-ce0ba3e9a9e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VudHJ5JTIwY29uY2VydCUyMGNyb3dkfGVufDF8fHx8MTc2ODMyNDEyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    badge: "Mais Popular",
    included: [
      "1 Ingresso VIP para o camarote",
      "Open bar com bebidas premium",
      "Buffet gastronômico completo",
      "Estacionamento exclusivo",
      "Acesso prioritário ao evento",
      "Kit de brindes exclusivos"
    ],
    details: {
      date: "20 de Fevereiro, 2026",
      location: "Arena Rio Preto - São José do Rio Preto, SP",
      capacity: "50 lugares VIP disponíveis",
      duration: "Show com duração de 3 horas"
    },
    stock: 12,
    validUntil: "15/02/2026"
  };

  const canRedeem = userPoints >= reward.points;

  const handleRedeem = () => {
    setShowConfirmation(true);
  };

  const confirmRedeem = () => {
    console.log('Prêmio resgatado:', reward.title);
    setShowConfirmation(false);
    // Aqui você redirecionaria para uma página de confirmação ou atualizaria o estado
    onNavigate('dashboard');
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-12 px-4 font-montserrat">
      <div className="container mx-auto max-w-6xl">
        {/* Botão Voltar */}
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-white hover:text-[#d4af37] hover:bg-white/5 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar ao Catálogo
        </Button>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Galeria de Imagens */}
          <div>
            <div className="mb-4">
              <div className="relative rounded-lg overflow-hidden aspect-video">
                <ImageWithFallback
                  src={reward.images[selectedImage]}
                  alt={reward.title}
                  className="w-full h-full object-cover"
                />
                {reward.badge && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#d4af37] text-black border-0 text-sm px-3 py-1">
                      {reward.badge}
                    </Badge>
                  </div>
                )}
                {reward.stock <= 20 && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-orange-500 text-white border-0 text-sm px-3 py-1 flex items-center gap-1">
                      <Zap className="h-3 w-3" />
                      Últimas {reward.stock} unidades
                    </Badge>
                  </div>
                )}
              </div>
            </div>
            
            {/* Miniaturas */}
            <div className="grid grid-cols-3 gap-3">
              {reward.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative rounded-lg overflow-hidden aspect-video border-2 transition-all ${
                    selectedImage === index 
                      ? 'border-[#d4af37] ring-2 ring-[#d4af37]/30' 
                      : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${reward.title} - Foto ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Informações do Prêmio */}
          <div>
            <div className="mb-6">
              <Badge className="bg-[#d4af37]/10 text-[#d4af37] border-0 mb-3">
                {reward.category}
              </Badge>
              <h1 className="font-bebas text-4xl md:text-5xl text-white uppercase tracking-wider mb-4">
                {reward.title}
              </h1>
              <p className="text-gray-400 leading-relaxed mb-6">
                {reward.description}
              </p>
              
              {/* Preço em Pontos */}
              <Card className="bg-gradient-to-br from-[#d4af37] to-[#c09d2e] border-0 mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/80 text-sm mb-1">Valor do Resgate</p>
                      <div className="flex items-center gap-2">
                        <Star className="h-6 w-6 text-white fill-current" />
                        <span className="font-bebas text-4xl text-white">
                          {reward.points.toLocaleString('pt-BR')}
                        </span>
                        <span className="text-white text-lg">pontos</span>
                      </div>
                    </div>
                    {canRedeem ? (
                      <Check className="h-8 w-8 text-white" />
                    ) : (
                      <div className="text-right">
                        <p className="text-white/80 text-xs">Você tem:</p>
                        <p className="text-white font-bebas text-xl">
                          {userPoints.toLocaleString('pt-BR')}
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Botão de Resgate */}
              <Button
                onClick={handleRedeem}
                disabled={!canRedeem}
                className={`w-full py-6 text-lg ${
                  canRedeem 
                    ? 'bg-[#d4af37] hover:bg-[#c09d2e] text-black' 
                    : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                }`}
              >
                {canRedeem ? (
                  <>
                    <Star className="h-5 w-5 mr-2" />
                    Resgatar por {reward.points.toLocaleString('pt-BR')} Pontos
                  </>
                ) : (
                  <>
                    Faltam {(reward.points - userPoints).toLocaleString('pt-BR')} pontos
                  </>
                )}
              </Button>

              {!canRedeem && (
                <p className="text-center text-gray-500 text-sm mt-3">
                  Continue participando de eventos para ganhar mais pontos!
                </p>
              )}
            </div>

            {/* Detalhes do Evento */}
            <Card className="bg-[#1a1a1a] border-white/10 mb-6">
              <CardContent className="p-6">
                <h3 className="font-bebas text-xl text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Info className="h-5 w-5 text-[#d4af37]" />
                  Informações do Evento
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-[#d4af37] mt-0.5" />
                    <div>
                      <p className="text-white">{reward.details.date}</p>
                      <p className="text-gray-500 text-sm">{reward.details.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#d4af37] mt-0.5" />
                    <p className="text-white">{reward.details.location}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-[#d4af37] mt-0.5" />
                    <p className="text-white">{reward.details.capacity}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-[#d4af37] mt-0.5" />
                    <div>
                      <p className="text-white">Válido até {reward.validUntil}</p>
                      <p className="text-gray-500 text-sm">Resgate antes dessa data</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* O que está incluído */}
            <Card className="bg-[#1a1a1a] border-white/10">
              <CardContent className="p-6">
                <h3 className="font-bebas text-xl text-white uppercase tracking-wider mb-4">
                  O que está incluído
                </h3>
                <div className="space-y-3">
                  {reward.included.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#d4af37] mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Modal de Confirmação */}
        <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
          <DialogContent className="bg-black border-white/10 text-white max-w-md">
            <DialogHeader>
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-[#d4af37]/10 rounded-full">
                  <Star className="h-12 w-12 text-[#d4af37] fill-current" />
                </div>
              </div>
              <DialogTitle className="font-bebas text-3xl text-center uppercase tracking-wider">
                Confirmar <span className="text-[#d4af37]">Resgate</span>
              </DialogTitle>
              <DialogDescription className="text-gray-400 text-center">
                Você está prestes a resgatar este prêmio
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 my-6">
              <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-4">
                <p className="text-gray-400 text-sm mb-1">Prêmio</p>
                <p className="text-white font-bebas text-lg uppercase">{reward.title}</p>
              </div>
              
              <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-4">
                <p className="text-gray-400 text-sm mb-1">Custo</p>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-[#d4af37] fill-current" />
                  <span className="text-white font-bebas text-2xl">
                    {reward.points.toLocaleString('pt-BR')}
                  </span>
                  <span className="text-gray-400">pontos</span>
                </div>
              </div>
              
              <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-4">
                <p className="text-gray-400 text-sm mb-1">Saldo após resgate</p>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-[#d4af37] fill-current" />
                  <span className="text-white font-bebas text-2xl">
                    {(userPoints - reward.points).toLocaleString('pt-BR')}
                  </span>
                  <span className="text-gray-400">pontos</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setShowConfirmation(false)}
                className="flex-1 border-white/20 text-white hover:bg-white/10"
              >
                Cancelar
              </Button>
              <Button
                onClick={confirmRedeem}
                className="flex-1 bg-[#d4af37] hover:bg-[#c09d2e] text-black"
              >
                Confirmar Resgate
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}