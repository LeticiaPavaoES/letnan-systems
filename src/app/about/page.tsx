import React from "react";

const About = () => {
    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-6 text-gray-800">Sobre a Letnan Systems</h1>
                <p className="pb-4 text-gray-500">
                    A <strong>Letnan Systems</strong> é uma empresa especializada em desenvolvimento de software sob medida, oferecendo soluções tecnológicas inovadoras que aumentam a produtividade e otimizam os processos operacionais de nossos clientes. Nosso foco é garantir que cada solução desenvolvida esteja alinhada às necessidades específicas do ambiente de negócios, utilizando as mais recentes tecnologias do mercado para maximizar o impacto e os resultados.
                </p>

                <h2 className="text-2xl font-semibold text-gray-500 pb-4">Nossos Serviços</h2>
                <p className="pb-4 text-gray-500">
                    Na Letnan Systems, oferecemos uma ampla gama de serviços que visam transformar as operações dos nossos clientes por meio da tecnologia. Nossos principais serviços incluem:
                </p>
                <ul className="list-disc list-inside text-gray-500 pb-4">
                    <li><strong>Consultoria em Soluções Tecnológicas:</strong> Análise profunda das necessidades dos nossos clientes, com o desenvolvimento de um plano estratégico sob medida para maximizar a eficiência e inovação.</li>
                    <li><strong>Desenvolvimento de Software:</strong> Criação de aplicativos personalizados para desktop, dispositivos móveis e web, com foco em alta performance e escalabilidade.</li>
                    <li><strong>Automação de Processos:</strong> Implementação de ferramentas que automatizam tarefas repetitivas, liberando tempo e recursos para outras áreas essenciais do negócio.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-500 pb-4">Segurança de Dados e Sistemas</h2>
                <p className="text-gray-500 pb-4">
                    Temos um compromisso inabalável com a segurança da informação. A Letnan Systems garante a proteção total dos dados e sistemas dos nossos clientes, implementando medidas de segurança robustas como:
                </p>
                <ul className="list-disc list-inside text-gray-500 pb-4">
                    <li><strong>Firewall Fortinet:</strong> Proteção avançada contra ameaças externas, garantindo a integridade da rede.</li>
                    <li><strong>Backup Automatizado:</strong> Soluções confiáveis com Veeam e Acronis para garantir a recuperação rápida em caso de falhas ou perda de dados.</li>
                    <li><strong>Antivírus:</strong> Utilizamos Kaspersky e Norton para proteção contra malware e ameaças emergentes.</li>
                    <li><strong>Segurança em Nuvem:</strong> Monitoramento contínuo e criptografia de dados armazenados em plataformas seguras como AWS e Microsoft Azure, com políticas rígidas de acesso.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-500 pb-4">Infraestrutura de Rede e Internet</h2>
                <p className="text-gray-500 pb-4">
                    Nossa infraestrutura de rede é projetada para oferecer alta performance e disponibilidade contínua, garantindo que os sistemas dos nossos clientes operem com máxima eficiência e confiabilidade:
                </p>
                <ul className="list-disc list-inside text-gray-500 pb-4">
                    <li><strong>Roteadores e Switches Cisco:</strong> Garantia de uma conectividade segura e estável, essencial para grandes operações.</li>
                    <li><strong>Servidores Dell PowerEdge e HP ProLiant:</strong> Hospedagem confiável de aplicativos críticos e backup seguro de dados.</li>
                    <li><strong>Redundância de Dados:</strong> Infraestrutura que suporta grandes volumes de dados, com recuperação rápida em caso de falhas.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-500 pb-4">Comunicação Transparente com Clientes</h2>
                <p className="text-gray-500 pb-4">
                    Na Letnan Systems, acreditamos que a comunicação aberta e constante é fundamental para o sucesso de qualquer projeto. Utilizamos ferramentas colaborativas para garantir que nossos clientes estejam sempre informados sobre o progresso de seus projetos:
                </p>
                <ul className="list-disc list-inside text-gray-500 pb-4">
                    <li><strong>Microsoft Teams e Slack:</strong> Comunicação instantânea e eficiente para discutir detalhes técnicos e ajustes em tempo real.</li>
                    <li><strong>Jira e Trello:</strong> Ferramentas de gerenciamento de projetos que proporcionam visibilidade total sobre o andamento e as tarefas em execução.</li>
                    <li><strong>Confluence:</strong> Documentação detalhada e organizada, acessível a qualquer momento para consulta sobre as soluções implementadas.</li>
                </ul>
                <p className="text-gray-500 pb-4">
                    Nosso objetivo é construir uma parceria sólida com cada cliente, oferecendo soluções que não apenas atendem às suas necessidades atuais, mas que também estão preparadas para escalar com o crescimento do seu negócio.
                </p>
            </div>
        </section>
    );
};

export default About;
