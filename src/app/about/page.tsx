"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Users, Target, Lightbulb, ShieldCheck, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center space-x-4">
          <Users className="h-10 w-10 text-amber-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Sobre a Letnan Systems</h1>
            <p className="text-lg text-gray-600">Nossa história, essência e valores</p>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Introduction Card */}
        <Card className="mb-8 bg-white">
          <CardContent className="pt-6">
            <p className="text-gray-700">
              A Letnan Systems nasceu do encontro entre a paixão pela tecnologia e a determinação de dois amigos, <span className="text-amber-600">Letícia</span> e <span className="text-amber-600">Renan</span>. Desde os primeiros passos na faculdade, eles compartilharam o sonho de transformar ideias em soluções inovadoras e impactantes. Fundaram a Letnan Systems para oferecer soluções tecnológicas personalizadas, alinhadas às necessidades únicas de cada cliente.
            </p>
            <p className="text-gray-700 mt-4">
            O diferencial da Letnan Systems está na personalização de suas soluções, sempre alinhadas com as <span className="text-amber-600">necessidades específicas</span> de cada cliente, além de um suporte técnico especializado e uma abordagem consultiva para maximizar resultados.
            </p>
            <p className="text-gray-700 mt-4">
              A Letnan Systems é muito mais do que uma empresa; é o reflexo de uma parceria sólida, da união de talentos e de uma visão compartilhada de inovação e excelência.
            </p>
          </CardContent>
        </Card>

        {/* Mission, Vision, and Values Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Nossa Essência</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Target className="h-6 w-6 text-amber-600" />
                  Missão
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Proporcionar soluções tecnológicas personalizadas e inovadoras que otimizem processos e impulsionem o crescimento de nossos clientes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Lightbulb className="h-6 w-6 text-amber-600" />
                  Visão
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ser referência no mercado de desenvolvimento de software, reconhecida pela inovação e entrega de soluções que agregam valor aos negócios de nossos clientes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <ShieldCheck className="h-6 w-6 text-amber-600" />
                  Valores
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-600">
                  <li><span className="text-amber-600 font-bold">Inovação:</span> Novas tecnologias e metodologias.</li>
                  <li><span className="text-amber-600 font-bold">Excelência:</span> Resultados que transformam negócios.</li>
                  <li><span className="text-amber-600 font-bold">Transparência:</span> Comunicação clara e aberta.</li>
                  <li><span className="text-amber-600 font-bold">Compromisso:</span> Dedicação total às necessidades dos clientes.</li>
                  <li><span className="text-amber-600 font-bold">Ética:</span> Integridade em todas as ações.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Closing Statement */}
        <Card className="mt-8 bg-white border-amber-200">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Globe className="h-6 w-6 text-amber-600" />
              Nosso Compromisso
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Na Letnan Systems, transformamos desafios em oportunidades, tecnologia em resultados e parcerias em histórias de sucesso. Nosso objetivo é ser a ponte entre suas ideias e o futuro que você imagina.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default About;
