import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { 
  Briefcase, Shield, Network, Code,
  Calendar, User, RefreshCcw, DollarSign
} from 'lucide-react';
import Image from "next/image";

const icons = {
  "Negócio": Briefcase,
  "Segurança": Shield,
  "Rede e internet": Network,
  "Desenvolvimento": Code
};

const serviceImages = {
  "Consultoria em TI": "/consultoria.png",
  "Outsourcing de TI": "/outsourcing.png",
  "Suporte Técnico": "/suporte.png",
  "Manutenção Preventiva": "/manutencao.png",
  "Soluções em Nuvem": "/cloud.png",
  "Desenvolvimento de Software": "/desenvolvimento.png"
};

type Service = {
  title: string;
  description: string;
  details: string;
  updated: string;
  responsible: string;
  reviewPeriod: string;
};

type ServiceCategories = {
  [key: string]: Service[];
};

const extractPrice = (details: string) => {
  const priceMatch = details.match(/R\$\s*[\d.,]+(?:\/[^\s.,]+)?/);
  return priceMatch ? priceMatch[0] : "Sob consulta";
};

const ServicesPage = () => {
  const servicesByCategory: ServiceCategories = {
    "Negócio": [
      {
        title: "Consultoria em TI",
        description: "Consultoria especializada para o desenvolvimento e implementação de sistemas personalizados.",
        details: "Oferecemos consultoria para sistemas como CRMs, ERPs, plataformas de e-commerce e aplicativos móveis. Os valores começam a partir de R$ 10.000,00 e variam conforme a necessidade do cliente.",
        updated: "01/10/2024",
        responsible: "Letícia Pavão",
        reviewPeriod: "Anual",
      },
      {
        title: "Outsourcing de TI",
        description: "Terceirização de serviços de TI para sua empresa focar no core business enquanto cuidamos da parte técnica.",
        details: "O termo 'core business' refere-se ao principal objetivo ou atividade de sua empresa. Com o Outsourcing de TI, você pode concentrar recursos no que faz de melhor, enquanto nós cuidamos do suporte técnico e manutenção. Valores a partir de R$ 5.000,00/mês.",
        updated: "22/07/2024",
        responsible: "Letícia Pavão",
        reviewPeriod: "Anual",
      },
    ],
    "Segurança": [
      {
        title: "Suporte Técnico",
        description: "Atendimento especializado para resolução de problemas técnicos e suporte contínuo.",
        details: "Resolvemos problemas como falhas de conexão, erros de sistema, incompatibilidades de software e ajustes técnicos. Nosso suporte garante que seus sistemas estejam sempre operacionais. Valores a partir de R$ 1.000,00/mês.",
        updated: "01/09/2024",
        responsible: "Renan Toledo",
        reviewPeriod: "Semestral",
      },
      {
        title: "Manutenção Preventiva",
        description: "Serviços para assegurar o pleno funcionamento dos sistemas e prevenir falhas.",
        details: "Inclui atualizações de software, monitoramento de desempenho e inspeções regulares. Oferecemos também manutenção corretiva, que abrange a resolução de falhas específicas e reparos emergenciais. Valores sob consulta.",
        updated: "12/08/2024",
        responsible: "Renan Toledo",
        reviewPeriod: "Semestral",
      },
    ],
    "Rede e internet": [
      {
        title: "Soluções em Nuvem",
        description: "Implantação e gerenciamento de soluções em nuvem para otimizar recursos.",
        details: "Realizamos migração de sistemas para a nuvem, configuramos ambientes híbridos e gerenciamos plataformas em AWS, Azure e Google Cloud. Valores a partir de R$ 15.000,00 por implantação e planos mensais para gerenciamento.",
        updated: "30/06/2024",
        responsible: "Renan Toledo",
        reviewPeriod: "Semestral",
      },
    ],
    "Desenvolvimento": [
      {
        title: "Desenvolvimento de Software",
        description: "Soluções sob medida, desde aplicativos móveis até sistemas empresariais completos.",
        details: "Desenvolvemos CRMs, ERPs, plataformas de e-commerce, aplicativos de gestão e soluções personalizadas. Os valores começam a partir de R$ 5.000,00 e variam conforme o escopo do projeto.",
        updated: "15/08/2024",
        responsible: "Letícia Pavão",
        reviewPeriod: "Anual",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center space-x-4">
          <Briefcase className="h-10 w-10 text-amber-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Nossos Serviços</h1>
            <p className="text-gray-600 mt-2">
              Soluções completas em tecnologia para impulsionar seu negócio
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {Object.entries(servicesByCategory).map(([category, services]) => {
          const IconComponent = icons[category as keyof typeof icons];
          return (
            <Card key={category} className="mb-8 bg-white">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  {IconComponent && <IconComponent className="h-6 w-6 text-amber-600" />}
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg border border-gray-200 hover:border-amber-300 transition-colors overflow-hidden"
                    >
                      {/* Imagem do serviço */}
                      <div className="relative w-full h-48">
                        <Image
                          src={serviceImages[service.title as keyof typeof serviceImages]}
                          alt={service.title}
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>

                      {/* Cabeçalho do card com preço em destaque */}
                      <div className="bg-amber-600 p-4 flex justify-between items-center">
                        <h3 className="font-semibold text-xl text-white">
                          {service.title}
                        </h3>
                        <div className="flex items-center gap-2 bg-white text-amber-600 px-3 py-1 rounded-full">
                          <DollarSign className="h-4 w-4" />
                          <span className="font-bold">
                            {extractPrice(service.details)}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <p className="text-gray-700 text-sm mb-4">
                          {service.details.split('Valores')[0]}
                        </p>
                        
                        {/* Informações adicionais */}
                        <div className="grid grid-cols-2 gap-4 text-sm mt-4 pt-4 border-t border-gray-200">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-amber-600" />
                            <span className="text-gray-600">Atualizado: {service.updated}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-amber-600" />
                            <span className="text-gray-600">Responsável: {service.responsible}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <RefreshCcw className="h-4 w-4 text-amber-600" />
                            <span className="text-gray-600">Revisão: {service.reviewPeriod}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </main>
    </div>
  );
};

export default ServicesPage;