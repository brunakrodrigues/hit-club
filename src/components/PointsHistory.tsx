import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { 
  Star, TrendingUp, TrendingDown, Calendar, 
  Filter, Download, Search, ChevronLeft, ChevronRight 
} from "lucide-react";

interface PointsHistoryProps {
  userName: string;
}

export function PointsHistory({ userName }: PointsHistoryProps) {
  const [filterType, setFilterType] = useState<'all' | 'earned' | 'spent'>('all');
  
  const transactions = [
    { 
      id: 1,
      date: "13/01/2026", 
      description: "Check-in no Rodeio Rio Preto Country Bulls", 
      points: 500, 
      type: "earned",
      category: "Evento"
    },
    { 
      id: 2,
      date: "10/01/2026", 
      description: "Participação no show de Gusttavo Lima", 
      points: 500, 
      type: "earned",
      category: "Show"
    },
    { 
      id: 3,
      date: "08/01/2026", 
      description: "Resgate: Camiseta Oficial Nexus Club", 
      points: -2000, 
      type: "spent",
      category: "Resgate"
    },
    { 
      id: 4,
      date: "05/01/2026", 
      description: "Compra de produtos na loja oficial", 
      points: 200, 
      type: "earned",
      category: "Compra"
    },
    { 
      id: 5,
      date: "03/01/2026", 
      description: "Missão Completa: Complete seu Perfil", 
      points: 100, 
      type: "earned",
      category: "Missão"
    },
    { 
      id: 6,
      date: "28/12/2025", 
      description: "Check-in no Rio Preto Country Bulls", 
      points: 150, 
      type: "earned",
      category: "Evento"
    },
    { 
      id: 7,
      date: "25/12/2025", 
      description: "Bônus de Natal - Oferta Especial", 
      points: 300, 
      type: "earned",
      category: "Bônus"
    },
    { 
      id: 8,
      date: "20/12/2025", 
      description: "Indicação de amigo: Maria Silva", 
      points: 300, 
      type: "earned",
      category: "Indicação"
    },
    { 
      id: 9,
      date: "18/12/2025", 
      description: "Resgate: Boné Snapback Nexus", 
      points: -1500, 
      type: "spent",
      category: "Resgate"
    },
    { 
      id: 10,
      date: "15/12/2025", 
      description: "Participação no show de Henrique & Juliano", 
      points: 500, 
      type: "earned",
      category: "Show"
    },
    { 
      id: 11,
      date: "10/12/2025", 
      description: "Cadastro completo no Nexus Club", 
      points: 500, 
      type: "earned",
      category: "Cadastro"
    },
    { 
      id: 12,
      date: "10/12/2025", 
      description: "Bônus de boas-vindas", 
      points: 1000, 
      type: "earned",
      category: "Bônus"
    }
  ];

  const filteredTransactions = transactions.filter(t => {
    if (filterType === 'all') return true;
    return t.type === filterType;
  });

  const stats = {
    totalEarned: transactions.filter(t => t.type === 'earned').reduce((acc, t) => acc + t.points, 0),
    totalSpent: Math.abs(transactions.filter(t => t.type === 'spent').reduce((acc, t) => acc + t.points, 0)),
    currentBalance: 7850
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Evento': 'bg-blue-500/10 text-blue-400',
      'Show': 'bg-purple-500/10 text-purple-400',
      'Resgate': 'bg-red-500/10 text-red-400',
      'Compra': 'bg-green-500/10 text-green-400',
      'Missão': 'bg-yellow-500/10 text-yellow-400',
      'Bônus': 'bg-pink-500/10 text-pink-400',
      'Indicação': 'bg-orange-500/10 text-orange-400',
      'Cadastro': 'bg-cyan-500/10 text-cyan-400'
    };
    return colors[category] || 'bg-gray-500/10 text-gray-400';
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-12 px-4 font-montserrat">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="font-bebas text-5xl md:text-6xl text-white uppercase tracking-wider mb-2">
            Extrato de <span className="text-[#d4af37]">Pontos</span>
          </h1>
          <p className="text-gray-400">Acompanhe todo o histórico das suas transações</p>
        </div>

        {/* Cards de Estatísticas */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-[#d4af37] via-[#b8932c] to-[#8b7021] border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-white/80 text-sm uppercase tracking-wide">Saldo Atual</p>
                <Star className="h-5 w-5 text-white fill-current" />
              </div>
              <p className="font-bebas text-4xl text-white">
                {stats.currentBalance.toLocaleString('pt-BR')}
              </p>
              <p className="text-white/70 text-sm">pontos disponíveis</p>
            </CardContent>
          </Card>

          <Card className="bg-[#1a1a1a] border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-gray-400 text-sm uppercase tracking-wide">Total Ganho</p>
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
              <p className="font-bebas text-4xl text-white">
                +{stats.totalEarned.toLocaleString('pt-BR')}
              </p>
              <p className="text-gray-500 text-sm">pontos recebidos</p>
            </CardContent>
          </Card>

          <Card className="bg-[#1a1a1a] border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-gray-400 text-sm uppercase tracking-wide">Total Gasto</p>
                <TrendingDown className="h-5 w-5 text-orange-500" />
              </div>
              <p className="font-bebas text-4xl text-white">
                -{stats.totalSpent.toLocaleString('pt-BR')}
              </p>
              <p className="text-gray-500 text-sm">pontos resgatados</p>
            </CardContent>
          </Card>
        </div>

        {/* Filtros e Ações */}
        <Card className="bg-[#1a1a1a] border-white/10 mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Filter className="h-5 w-5 text-gray-400" />
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant={filterType === 'all' ? 'default' : 'outline'}
                    onClick={() => setFilterType('all')}
                    className={filterType === 'all' 
                      ? 'bg-[#d4af37] hover:bg-[#c09d2e] text-black' 
                      : 'border-white/20 text-white hover:bg-white/10'
                    }
                  >
                    Todas
                  </Button>
                  <Button
                    size="sm"
                    variant={filterType === 'earned' ? 'default' : 'outline'}
                    onClick={() => setFilterType('earned')}
                    className={filterType === 'earned' 
                      ? 'bg-[#d4af37] hover:bg-[#c09d2e] text-black' 
                      : 'border-white/20 text-white hover:bg-white/10'
                    }
                  >
                    Ganhos
                  </Button>
                  <Button
                    size="sm"
                    variant={filterType === 'spent' ? 'default' : 'outline'}
                    onClick={() => setFilterType('spent')}
                    className={filterType === 'spent' 
                      ? 'bg-[#d4af37] hover:bg-[#c09d2e] text-black' 
                      : 'border-white/20 text-white hover:bg-white/10'
                    }
                  >
                    Gastos
                  </Button>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <Search className="h-4 w-4 mr-2" />
                  Buscar
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Exportar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabela de Transações */}
        <Card className="bg-[#1a1a1a] border-white/10">
          <CardHeader>
            <CardTitle className="font-bebas text-2xl text-white uppercase tracking-wider flex items-center gap-2">
              <Calendar className="h-6 w-6 text-[#d4af37]" />
              Histórico de Transações
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-white/10 hover:bg-transparent">
                    <TableHead className="text-gray-400 font-bebas text-base uppercase">Data</TableHead>
                    <TableHead className="text-gray-400 font-bebas text-base uppercase">Descrição</TableHead>
                    <TableHead className="text-gray-400 font-bebas text-base uppercase">Categoria</TableHead>
                    <TableHead className="text-right text-gray-400 font-bebas text-base uppercase">Pontos</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTransactions.map((transaction) => (
                    <TableRow 
                      key={transaction.id} 
                      className="border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <TableCell className="text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {transaction.date}
                        </div>
                      </TableCell>
                      <TableCell className="text-white">
                        {transaction.description}
                      </TableCell>
                      <TableCell>
                        <Badge className={`${getCategoryColor(transaction.category)} border-0`}>
                          {transaction.category}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className={`flex items-center justify-end gap-2 ${
                          transaction.type === 'earned' ? 'text-green-500' : 'text-red-500'
                        }`}>
                          {transaction.type === 'earned' ? (
                            <TrendingUp className="h-4 w-4" />
                          ) : (
                            <TrendingDown className="h-4 w-4" />
                          )}
                          <span className="font-bebas text-lg">
                            {transaction.points > 0 ? '+' : ''}{transaction.points.toLocaleString('pt-BR')}
                          </span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Paginação */}
            <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                Mostrando {filteredTransactions.length} de {transactions.length} transações
              </p>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                  disabled
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  1
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                  disabled
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}