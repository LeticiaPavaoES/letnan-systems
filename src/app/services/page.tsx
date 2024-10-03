import React from "react";
import ServiceCard from "@/components/serviceCard"; // Importe do caminho correto

const services = [
  {
    title: "Consultoria em TI",
    description:
      "Consultoria especializada para o desenvolvimento e implementação de sistemas personalizados, conforme as necessidades da sua empresa.",
  },
  {
    title: "Suporte Técnico",
    description:
      "Atendimento especializado para resolução de problemas técnicos e suporte contínuo para garantir o funcionamento do seu sistema.",
  },
  {
    title: "Desenvolvimento de Software",
    description:
      "Desenvolvemos soluções de software sob medida, desde aplicativos móveis até sistemas empresariais completos.",
  },
  {
    title: "Manutenção Preventiva",
    description:
      "Serviços de manutenção preventiva para assegurar o pleno funcionamento dos seus sistemas e prevenir falhas.",
  },
  {
    title: "Outsourcing de TI",
    description:
      "Terceirização de serviços de TI para sua empresa focar no core business enquanto nossa equipe cuida de toda a parte técnica.",
  },
  {
    title: "Soluções em Nuvem",
    description:
      "Implantação e gerenciamento de soluções em nuvem para otimizar recursos e aumentar a produtividade da sua empresa.",
  },
];

const ServicesPage = () => {
  return (
    <section className="py-16 px-4 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Catálogo de Serviços
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
