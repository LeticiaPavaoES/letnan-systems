"use client";
import React, { useState } from "react";
import ServiceCard from "@/components/serviceCard";

const services = [
  {
    title: "Consultoria em TI",
    description:
      "Consultoria especializada para o desenvolvimento e implementação de sistemas personalizados, conforme as necessidades da sua empresa.",
    updated: "01/10/2024",
    responsible: "Letícia Pavão",
    reviewPeriod: "Anual",
  },
  {
    title: "Suporte Técnico",
    description:
      "Atendimento especializado para resolução de problemas técnicos e suporte contínuo para garantir o funcionamento do seu sistema.",
    updated: "01/09/2024",
    responsible: "Renan Toledo",
    reviewPeriod: "Semestral",
  },
  {
    title: "Desenvolvimento de Software",
    description:
      "Desenvolvemos soluções de software sob medida, desde aplicativos móveis até sistemas empresariais completos.",
    updated: "15/08/2024",
    responsible: "Letícia Pavão",
    reviewPeriod: "Anual",
  },
  {
    title: "Manutenção Preventiva",
    description:
      "Serviços de manutenção preventiva para assegurar o pleno funcionamento dos seus sistemas e prevenir falhas.",
    updated: "12/08/2024",
    responsible: "Renan Toledo",
    reviewPeriod: "Semestral",
  },
  {
    title: "Outsourcing de TI",
    description:
      "Terceirização de serviços de TI para sua empresa focar no core business enquanto nossa equipe cuida de toda a parte técnica.",
    updated: "22/07/2024",
    responsible: "Letícia Pavão",
    reviewPeriod: "Anual",
  },
  {
    title: "Soluções em Nuvem",
    description:
      "Implantação e gerenciamento de soluções em nuvem para otimizar recursos e aumentar a produtividade da sua empresa.",
    updated: "30/06/2024",
    responsible: "Renan Toledo",
    reviewPeriod: "Semestral",
  },
];

const ServicesPage = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const handleServiceClick = (title: string) => {
    if (expandedService === title) {
      setExpandedService(null);  
    } else {
      setExpandedService(title);  
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 pb-12">
          Catálogo de Serviços
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title}>
              <ServiceCard
                title={service.title}
                description={service.description}
                onClick={() => handleServiceClick(service.title)}
              />
              {expandedService === service.title && (
                <div className="mt-4 p-4 bg-white border border-gray-300 rounded-lg shadow-md">
                  <p className="text-gray-600 pb-4">
                    <strong>Última atualização:</strong> {service.updated}
                  </p>
                  <p className="text-gray-600">
                    <strong>Responsável:</strong> {service.responsible}
                  </p>
                  <p className="text-gray-600">
                    <strong>Período de revisão:</strong> {service.reviewPeriod}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
