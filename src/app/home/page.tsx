import ContactForm from "@/components/contactForm";
import MapComponent from "@/components/mapComponent";
import ServiceCard from "@/components/serviceCard";
import TestimonialSection from "@/components/testemonial";
import React from "react";
import ServicesPage from "../services/page";
import Link from "next/link";

const HomePage = () => {
    return (
        <div>
            <section className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
                <h1 className="text-6xl font-bold mb-8">Bem-vindo à Letnan Systems</h1>
                <p className="text-lg text-center">
                    Soluções em tecnologia para otimizar seus negócios.
                </p>
            </section>

            <section className="bg-white py-12">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                        Nossos Serviços
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceCard
                            title="Desenvolvimento de Software"
                            description="Desenvolvimento de soluções personalizadas para atender às necessidades de sua empresa."
                        />
                        <ServiceCard
                            title="Consultoria em TI"
                            description="Consultoria especializada para otimizar a infraestrutura tecnológica da sua empresa."
                        />
                        <ServiceCard
                            title="Suporte Técnico"
                            description="Suporte técnico completo para garantir o funcionamento contínuo de seus sistemas."
                        />
                    </div>

                    <div className="flex justify-center mt-8">
                        <Link href="/services">

                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-8">
                                Saiba mais
                            </button>
                        </Link>
                    </div>

                </div>
            </section>

            <section className="bg-gray-100 py-12">
                <div className="container mx-auto">
                    <TestimonialSection
                    />
                </div>
            </section>

            <section className="bg-white py-12">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                        Onde Estamos
                    </h2>
                    <MapComponent />
                </div>
            </section>

            <section className="bg-gray-100 py-12">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                        Entre em Contato
                    </h2>
                    <ContactForm />
                </div>
            </section>

        </div>
    );
};

export default HomePage;
