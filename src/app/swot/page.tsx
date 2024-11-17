"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { 
  ArrowUpCircle, 
  ArrowDownCircle, 
  Sun, 
  CloudLightning,
  Shield
} from 'lucide-react';

const SwotAnalysisPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center space-x-4">
          <Shield className="h-10 w-10 text-amber-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Análise SWOT</h1>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Introduction Card */}
        <Card className="mb-8 bg-white">
          <CardHeader>
            <CardTitle className="text-2xl">Visão Geral</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              A análise SWOT é uma ferramenta estratégica que ajuda organizações a
              entenderem sua posição no mercado, identificando forças, fraquezas, oportunidades
              e ameaças. Forças e fraquezas referem-se a fatores internos, como recursos,
              capacidades e processos, enquanto oportunidades e ameaças são fatores externos,
              como tendências de mercado e ações da concorrência.
            </p>
          </CardContent>
        </Card>

        {/* SWOT Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Strengths */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2 text-green-700">
                <ArrowUpCircle className="h-6 w-6" />
                Forças
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800">Serviços personalizados</h3>
                  <p className="text-gray-700 text-sm mt-1">
                    Soluções sob medida, adaptadas às necessidades específicas de cada cliente, 
                    criando um diferencial competitivo.
                  </p>
                </li>
                <li className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800">Equipe altamente qualificada</h3>
                  <p className="text-gray-700 text-sm mt-1">
                    Desenvolvedores experientes e certificados em diversas tecnologias (AWS, Docker, 
                    Kubernetes), entregando projetos complexos com alta qualidade.
                  </p>
                </li>
                <li className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800">Infraestrutura robusta</h3>
                  <p className="text-gray-700 text-sm mt-1">
                    Servidores de alta performance e rede segura, com roteadores Cisco e firewall 
                    Fortinet, garantindo segurança e eficiência.
                  </p>
                </li>
                <li className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800">Inovação e tecnologia de ponta</h3>
                  <p className="text-gray-700 text-sm mt-1">
                    Uso de tecnologias modernas como contêineres, automação de testes e serviços 
                    em nuvem, proporcionando maior agilidade e escalabilidade.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Weaknesses */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2 text-red-700">
                <ArrowDownCircle className="h-6 w-6" />
                Fraquezas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-800">Dependência de grandes clientes</h3>
                  <p className="text-gray-700 text-sm mt-1">
                    Base de clientes concentrada em poucas grandes empresas, criando vulnerabilidade 
                    caso algum desses clientes encerre ou diminua a parceria.
                  </p>
                </li>
                <li className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-800">Necessidade de mais reconhecimento de marca</h3>
                  <p className="text-gray-700 text-sm mt-1">
                    Pouco reconhecimento fora do círculo atual de clientes, limitando a capacidade 
                    de expansão.
                  </p>
                </li>
                <li className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-800">Processos internos passíveis de melhorias</h3>
                  <p className="text-gray-700 text-sm mt-1">
                    Alguns processos internos podem ser otimizados, como a automação de tarefas 
                    administrativas e de gestão de projetos.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Opportunities */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2 text-yellow-700">
                <Sun className="h-6 w-6" />
                Oportunidades
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-800">Crescimento da demanda por serviços em nuvem</h3>
                  <p className="text-gray-700 text-sm mt-1">
                    Expansão da oferta de serviços AWS e Azure devido à migração de empresas para 
                    ambientes em nuvem.
                  </p>
                </li>
                <li className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-800">Expansão internacional</h3>
                  <p className="text-gray-700 text-sm mt-1">
                    Potencial de aumentar receita atendendo clientes fora do Brasil, especialmente 
                    em mercados com maior demanda por inovação.
                  </p>
                </li>
                <li className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-800">Parcerias estratégicas</h3>
                  <p className="text-gray-700 text-sm mt-1">
                    Alianças com empresas de TI ou fornecedores de software para trazer novas 
                    oportunidades e aumentar alcance.
                  </p>
                </li>
                <li className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-800">Desenvolvimento de novos produtos</h3>
                  <p className="text-gray-700 text-sm mt-1">
                    Criação de soluções SaaS para entrar em novos mercados e diversificar fontes 
                    de receita.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Threats */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2 text-purple-700">
                <CloudLightning className="h-6 w-6" />
                Ameaças
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800">Concorrência acirrada</h3>
                  <p className="text-gray-700 text-sm mt-1">
                    Setor altamente competitivo com muitas empresas oferecendo serviços semelhantes, 
                    pressionando preços e margens.
                  </p>
                </li>
                <li className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800">Avanço rápido da tecnologia</h3>
                  <p className="text-gray-700 text-sm mt-1">
                    Necessidade de atualização constante devido à velocidade das mudanças tecnológicas 
                    para manter competitividade.
                  </p>
                </li>
                <li className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800">Ciberataques e ameaças de segurança</h3>
                  <p className="text-gray-700 text-sm mt-1">
                    Aumento constante de ameaças cibernéticas representa risco para a integridade 
                    dos dados dos clientes.
                  </p>
                </li>
                <li className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800">Flutuação econômica</h3>
                  <p className="text-gray-700 text-sm mt-1">
                    Instabilidade econômica pode impactar investimentos em TI, resultando em menos 
                    demanda por serviços.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SwotAnalysisPage;