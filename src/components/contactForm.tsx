"use client";
import { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        setSubmitted(true);
    };

    return (
        <div>
            {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-lg font-medium text-gray-600">Nome</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            onChange={handleChange}
                            value={formData.name}
                            className="w-full border-2 border-gray-300 p-2 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium text-gray-600">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            onChange={handleChange}
                            value={formData.email}
                            className="w-full border-2 border-gray-300 p-2 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-lg font-medium text-gray-600">Mensagem</label>
                        <textarea
                            name="message"
                            id="message"
                            onChange={handleChange}
                            value={formData.message}
                            className="w-full border-2 border-gray-600 text-black p-2 rounded-md"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-purple-500 text-white py-2 px-4 rounded-md">Enviar</button>
                </form>
            ) : (
                <div className="mt-4 p-4 bg-purple-100 border border-purple-500 rounded-lg shadow-md">
                    <p className="text-lg text-purple-500 font-bold text-center">
                        Muito obrigado pelo contato, retornaremos em breve.
                    </p>
                </div>
            )}
        </div>
    );
};

export default ContactForm;
