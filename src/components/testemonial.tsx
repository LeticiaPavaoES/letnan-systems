import Image from "next/image";
import React from "react";

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  message: string;
  image: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: "John Doe",
    role: "CEO",
    company: "Tech Corp",
    message:
      "Letnan Systems helped our company transition to the cloud seamlessly. Their support was outstanding!",
    image: "https://images.pexels.com/photos/28703280/pexels-photo-28703280/free-photo-of-chef-preparando-refeicao-em-ambiente-de-cozinha-aconchegante.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    company: "InnovateX",
    message:
      "The cybersecurity solutions provided by Letnan Systems were top-notch. Highly recommended!",
    image: "https://images.pexels.com/photos/26242007/pexels-photo-26242007/free-photo-of-cidade-meio-urbano-moda-tendencia.jpeg",
  },
  {
    name: "David Wilson",
    role: "Product Manager",
    company: "NextGen Solutions",
    message:
      "Their team was responsive, professional, and always willing to go the extra mile. Great experience overall!",
    image: "https://images.pexels.com/photos/27599352/pexels-photo-27599352/free-photo-of-moda-tendencia-homem-pessoa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const TestimonialCard = ({ name, role, company, message, image }: TestimonialProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4 max-w-sm">
      <Image
        src={image}
        alt={`Photo of ${name}`}
        width={64} 
        height={64} 
        className="w-16 h-16 rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold text-center">{name}</h3>
      <p className="text-gray-600 text-center">{role}, {company}</p>
      <p className="mt-4 text-gray-700 text-center">{`"${message}"`}</p>
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
