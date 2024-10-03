import React from "react";

import ContactForm from '@/components/contactForm';

const Contact = () => {
  return (
    <div>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p>If you have any questions, feel free to reach out!</p>
        <ContactForm />
      </main>
    </div>
  );
};

export default Contact;
