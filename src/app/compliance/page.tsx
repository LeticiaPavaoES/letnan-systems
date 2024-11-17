"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
    AlertCircle, Shield, Users, Book, Bell, Target, 
    FileText, Lock, BarChart, UserCheck, Briefcase 
  } from 'lucide-react';
import { Button } from "@/components/ui/button";

const CompliancePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center space-x-4">
          <Shield className="h-10 w-10 text-amber-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Programa de Compliance</h1>
          </div>
        </div>
      </div>
   

    {/* Main Content */}
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Objetivo Geral */}
      <Card className="mb-8 bg-white">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Target className="h-6 w-6 text-amber-600" />
            Objetivo Geral
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">
            O Programa de Compliance da Letnan Systems visa garantir que todas as operações da empresa 
            sejam conduzidas em conformidade com leis, regulamentos, normas internas e padrões éticos. 
            Reflete o compromisso da empresa com a integridade, transparência e prevenção de riscos, 
            proporcionando segurança e responsabilidade a nossos clientes, colaboradores e parceiros.
          </p>
        </CardContent>
      </Card>

      {/* Valores */}
      <Card className="mb-8 bg-white">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <FileText className="h-6 w-6 text-amber-600" />
            Visão e Valores
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: 'Integridade',
                description: 'Agir com honestidade e ética em todas as interações e operações.'
              },
              {
                title: 'Transparência',
                description: 'Garantir processos claros e auditáveis, permitindo decisões justas.'
              },
              {
                title: 'Responsabilidade',
                description: 'Assumir a responsabilidade pelo cumprimento das normas e das obrigações legais.'
              },
              {
                title: 'Cultura de Compliance',
                description: 'Cultivar uma mentalidade de conformidade e comportamento ético em todos os níveis.'
              }
            ].map((value, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
<div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-semibold text-lg text-amber-700 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Políticas e Procedimentos */}
      <Card className="mb-8 bg-white">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Book className="h-6 w-6 text-amber-600" />
            Políticas e Procedimentos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="code" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-gray-100">
              <TabsTrigger value="code" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                Código de Conduta
              </TabsTrigger>
              <TabsTrigger value="anti" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                Antissuborno
              </TabsTrigger>
              <TabsTrigger value="privacy" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                Privacidade
              </TabsTrigger>
              <TabsTrigger value="work" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                Trabalhista
              </TabsTrigger>
            </TabsList>
            <TabsContent value="code" className="mt-4">
              <div className="prose">
                <h3 className="text-lg font-semibold mb-2 text-amber-800">Código de Conduta Ética</h3>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Integridade nos negócios: Proibição de práticas como suborno e favorecimento pessoal</li>
                  <li>Conflito de interesses: Exigência de comunicação de conflitos reais ou potenciais</li>
                  <li>Relacionamentos éticos: Estabelecimento de uma conduta justa e baseada em valores éticos</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="anti" className="mt-4">
              <div className="prose">
                <h3 className="text-lg font-semibold mb-2 text-amber-800">Política Antissuborno e Anticorrupção</h3>
                <p className="text-gray-700">
                  A Letnan Systems adota uma postura de tolerância zero ao suborno e pagamento ilícito. 
                  Todas as transações devem ser transparentes e alinhadas às legislações anticorrupção.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="privacy" className="mt-4">
              <div className="prose">
                <h3 className="text-lg font-semibold mb-2 text-amber-800">Política de Privacidade e Proteção de Dados</h3>
                <p className="text-gray-700">
                  Comprometimento com a proteção de informações pessoais, em conformidade com LGPD e GDPR, 
                  seguindo práticas rigorosas de segurança e privacidade.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="work" className="mt-4">
              <div className="prose">
                <h3 className="text-lg font-semibold mb-2 text-amber-800">Política de Compliance Trabalhista</h3>
                <p className="text-gray-700">
                  Cumprimento de regulamentações locais e internacionais, prevenindo trabalho infantil, 
                  forçado, e promovendo um ambiente seguro e igualitário.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Canal de Denúncia */}
      <Card className="mb-8 bg-white">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Bell className="h-6 w-6 text-amber-600" />
            Canal de Denúncia
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-6 w-6 text-amber-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Canal Confidencial 24h</h4>
                <p className="mt-1 text-gray-700">
                  Disponível para colaboradores, parceiros e fornecedores relatarem preocupações 
                  relacionadas ao compliance. Denúncias podem ser feitas anonimamente e são 
                  tratadas com total confidencialidade.
                </p>
                <Button className="mt-4 bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors">
                  Fazer Denúncia
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Treinamento */}
      <Card className="mb-8 bg-white">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Users className="h-6 w-6 text-amber-600" />
            Treinamento e Conscientização
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: 'Treinamento Inicial',
                description: 'Obrigatório para novos colaboradores, abordando Código de Conduta e práticas éticas.'
              },
              {
                title: 'Workshops Anuais',
                description: 'Cenários de dilemas éticos e conformidade para reforçar a cultura de compliance.'
              },
              {
                title: 'Módulos Online',
                description: 'Programas de e-learning para atualização contínua sobre leis e regulamentações.'
              }
            ].map((training, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
<div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-lg text-amber-800 mb-2">{training.title}</h3>
                <p className="text-gray-600 text-sm">{training.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card className="mb-8 bg-white">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <UserCheck className="h-6 w-6 text-amber-600" />
              Estrutura de Governança
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-lg text-amber-800 mb-2">Comitê de Ética e Compliance</h3>
                <p className="text-gray-600 text-sm">
                  Composto por CEO, Diretor Jurídico e Diretor de RH. Supervisiona o programa, analisa relatórios 
                  e define diretrizes éticas.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-lg text-amber-800 mb-2">Departamento de Compliance</h3>
                <p className="text-gray-600 text-sm">
                  Equipe dedicada liderada pelo Compliance Officer, responsável pelo desenvolvimento e 
                  monitoramento das políticas.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-lg text-amber-800 mb-2">Representantes Locais</h3>
                <p className="text-gray-600 text-sm">
                  Cada unidade possui um representante responsável por questões locais e comunicação 
                  das políticas.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* New: Monitoramento e Auditoria */}
        <Card className="mb-8 bg-white">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <BarChart className="h-6 w-6 text-amber-600" />
              Monitoramento e Auditoria
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-lg text-amber-800 mb-2">Auditorias</h3>
                <p className="text-gray-600 text-sm">
                  Realizamos auditorias internas regulares e compartilhamos relatórios com o Comitê de Ética 
                  e autoridades quando necessário.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-lg text-amber-800 mb-2">Monitoramento Contínuo</h3>
                <p className="text-gray-600 text-sm">
                  Utilizamos SIEM para alertas de atividades suspeitas e painéis de KPIs para acompanhamento 
                  de indicadores-chave.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* New: Políticas Adicionais */}
        <Card className="mb-8 bg-white">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Lock className="h-6 w-6 text-amber-600" />
              Políticas Adicionais
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="identity" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-gray-100">
                <TabsTrigger value="identity" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                  Gestão de Identidade
                </TabsTrigger>
                <TabsTrigger value="suppliers" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                  Gestão de Fornecedores
                </TabsTrigger>
                <TabsTrigger value="risks" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                  Gestão de Riscos
                </TabsTrigger>
              </TabsList>
              <TabsContent value="identity" className="mt-4">
                <div className="prose">
                  <h3 className="text-lg font-semibold mb-2 text-amber-800">Controle de Acesso</h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Autenticação Multifatorial (MFA) em sistemas críticos</li>
                    <li>Gestão de Identidade e Acesso (IAM) com níveis de permissão</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="suppliers" className="mt-4">
                <div className="prose">
                  <h3 className="text-lg font-semibold mb-2 text-amber-800">Fornecedores e Terceiros</h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Avaliação de conformidade de fornecedores</li>
                    <li>Cláusulas de compliance em contratos</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="risks" className="mt-4">
                <div className="prose">
                  <h3 className="text-lg font-semibold mb-2 text-amber-800">Gestão de Riscos</h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Mapeamento de riscos operacionais, legais e de reputação</li>
                    <li>Planos de mitigação para riscos identificados</li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* New: Penalidades */}
        <Card className="mb-8 bg-white">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-amber-600" />
              Penalidades e Ações Disciplinares
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              {[
                {
                  title: 'Advertências',
                  description: 'Aplicadas para infrações leves'
                },
                {
                  title: 'Suspensões',
                  description: 'Para violações moderadas ou repetidas'
                },
                {
                  title: 'Demissões e Ações Legais',
                  description: 'Para infrações graves, como fraude e corrupção'
                }
              ].map((penalty, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
<div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-lg text-amber-800 mb-2">{penalty.title}</h3>
                  <p className="text-gray-600 text-sm">{penalty.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
    </main>
  </div>
);
};

export default CompliancePage;
