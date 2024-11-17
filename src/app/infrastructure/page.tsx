"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { 
  Server, 
  Monitor, 
  Network, 
  Smartphone,
  Database,
  Shield,
  Terminal,
  Building
} from 'lucide-react';

const ITCostsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center space-x-4">
          <Server className="h-10 w-10 text-amber-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Estrutura de TI</h1>
            <p className="text-lg text-gray-600">Custos e Investimentos</p>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Introduction Card */}
        <Card className="mb-8 bg-white">
          <CardContent className="pt-6">
            <p className="text-gray-700">
              Na Letnan Systems, garantimos que nossos investimentos em infraestrutura e tecnologia 
              estejam alinhados com nosso compromisso de oferecer soluções personalizadas e 
              eficientes. Nossa estrutura de TI foi projetada para garantir alto desempenho, 
              segurança e inovação, atendendo às demandas de nossos clientes e proporcionando 
              um ambiente ideal para o desenvolvimento de software de qualidade.
            </p>
          </CardContent>
        </Card>

        {/* Hardware Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Hardware</h2>
          
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Server className="h-6 w-6 text-amber-600" />
                Servidores de Alta Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900">Dell PowerEdge R740</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Equipamento robusto para hospedagem de aplicações críticas e serviços de banco de dados.
                  </p>
                  <p className="text-amber-600 font-semibold mt-2">
                    Custo anual: R$ 11.500,00
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900">HP ProLiant DL380</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Solução confiável para backup e armazenamento de dados.
                  </p>
                  <p className="text-amber-600 font-semibold mt-2">
                    Custo anual: R$ 10.000,00
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Monitor className="h-6 w-6 text-amber-600" />
                  Estações de Trabalho
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm">
                    Computadores com processadores de última geração, monitores duplos e configuração 
                    de alto desempenho.
                  </p>
                  <p className="text-amber-600 font-semibold mt-2">
                    Custo anual: R$ 56.000,00
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Network className="h-6 w-6 text-amber-600" />
                  Redes e Conectividade
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm">
                    Equipamentos da Cisco e firewall Fortinet para alta disponibilidade e segurança.
                  </p>
                  <p className="text-amber-600 font-semibold mt-2">
                    Custo anual: R$ 12.000,00
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Smartphone className="h-6 w-6 text-amber-600" />
                  Dispositivos Móveis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm">
                    Tablets e smartphones iOS e Android para testes de aplicações móveis.
                  </p>
                  <p className="text-amber-600 font-semibold mt-2">
                    Custo anual: R$ 13.333,00
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Software Section */}
        <div className="space-y-6 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Software</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Terminal className="h-6 w-6 text-amber-600" />
                  Sistemas e Desenvolvimento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm">
                    Licenças de Windows, macOS e IDEs como Visual Studio Code, IntelliJ IDEA e Docker.
                  </p>
                  <p className="text-amber-600 font-semibold mt-2">
                    Custo anual: R$ 35.000,00
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Database className="h-6 w-6 text-amber-600" />
                  Bancos de Dados e Nuvem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm">
                    MySQL, PostgreSQL, MongoDB e serviços AWS e Azure para escalabilidade.
                  </p>
                  <p className="text-amber-600 font-semibold mt-2">
                    Custo anual: R$ 168.000,00
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Shield className="h-6 w-6 text-amber-600" />
                  Colaboração e Segurança
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm">
                    Jira, Slack, Confluence e soluções de backup e antivírus.
                  </p>
                  <p className="text-amber-600 font-semibold mt-2">
                    Custo anual: R$ 60.000,00
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Total Investment Card */}
        <Card className="mt-8 bg-white border-amber-200">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Building className="h-6 w-6 text-amber-600" />
              Investimento Total
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-2xl font-bold text-amber-600">
                R$ 377.833,00
              </p>
              <p className="text-gray-700 mt-2">
                Investimento anual em nossa estrutura de TI
              </p>
            </div>
            <p className="mt-4 text-gray-600">
              Na Letnan Systems, nosso objetivo é sempre estar à frente, entregando tecnologia 
              de ponta para superar as expectativas dos nossos clientes. Nossa estrutura de TI 
              reflete esse compromisso, sendo um dos pilares que sustentam o nosso sucesso e o 
              de nossos parceiros.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ITCostsPage;