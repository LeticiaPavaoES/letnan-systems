import React from "react";
import ContactForm from '@/components/contactForm';

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Fale conosco</h1>
        <p className="text-center text-gray-600 mb-12">
          Se você tiver alguma dúvida, entre em contato! Estamos prontos para ajuda-lo.
        </p>
        <div className="max-w-lg mx-auto">
          <ContactForm />
        </div>
      </main>
    </div>
  );
};

export default Contact;
