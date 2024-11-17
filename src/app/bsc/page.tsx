import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, TrendingUp, Users, Cog, BookOpen } from 'lucide-react';

const BSCDashboard = () => {
  const sections = [
    {
      title: "Financeiro",
      icon: <TrendingUp className="h-6 w-6 text-amber-600" />,
      items: [
        "Aumentar o lucro líquido em 10%",
        "Expandir a receita de serviços em nuvem em 20%",
        "Reduzir em 5% os custos de infraestrutura de TI"
      ]
    },
    {
      title: "Clientes",
      icon: <Users className="h-6 w-6 text-amber-600" />,
      items: [
        "Ampliar a participação no mercado em 15%",
        "Aumentar a retenção de clientes em 10%",
        "Aumentar a satisfação do cliente em 15%",
        "Expandir o atendimento internacional"
      ]
    },
    {
      title: "Processos Internos",
      icon: <Cog className="h-6 w-6 text-amber-600" />,
      items: [
        "Reduzir o tempo de entrega dos projetos em 20%",
        "Melhorar a eficiência dos processos de desenvolvimento em 15%",
        "Reduzir os custos com retrabalho em 10%",
        "Implementar soluções de automação de testes"
      ]
    },
    {
      title: "Aprendizado e Crescimento",
      icon: <BookOpen className="h-6 w-6 text-amber-600" />,
      items: [
        "Capacitar 100% da equipe de desenvolvimento em novas tecnologias de nuvem",
        "Desenvolver um programa de liderança interna",
        "Promover uma cultura de inovação contínua"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center space-x-4">
          <Award className="h-10 w-10 text-amber-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Análise BSC (Balanced Scorecard)</h1>
          </div>
        </div>

        <main className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((section, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
<Card key={index} className="bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    {section.icon}
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
<li key={itemIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 mt-2 rounded-full bg-amber-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default BSCDashboard;