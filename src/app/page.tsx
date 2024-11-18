import ContactForm from "@/components/contactForm";
import MapComponent from "@/components/mapComponent";
import ServiceCard from "@/components/serviceCard";
import TestimonialSection from "@/components/testimonial";
import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <section
        className="relative flex flex-col items-center justify-center h-screen text-white"
      >
        <div className="absolute inset-0 bg-black" />

        <div className="relative z-10 max-w-3xl text-center">
          <h1 className="text-4xl md:text-4xl font-extrabold tracking-tight pb-6">
            Bem-vindo à
          </h1>
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700">
            Letnan Systems
          </h1>
          <p className="text-lg md:text-2xl text-gray-300">
            Soluções inovadoras para transformar a tecnologia no coração dos seus negócios.
          </p>
          <p className="mt-4 text-base md:text-lg text-gray-400">
            Desenhamos soluções personalizadas, focadas em aumentar sua produtividade e alcançar novos patamares de eficiência.
          </p>
        </div>
      </section>


      <section className="bg-white py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 pb-8">
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

              <button
                type="button"
                className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full mt-8">
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
          <h2 className="text-3xl font-bold text-center text-gray-800 pb-8">
            Onde Estamos
          </h2>
          <MapComponent />
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 pb-8">
            Entre em Contato
          </h2>
          <ContactForm />
        </div>
      </section>

    </div>
  );
};

export default HomePage;
