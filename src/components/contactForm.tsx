"use client";
import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-800">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    value={formData.name}
                    className="w-full border-2 border-gray-300 p-2 rounded-md text-gray-900"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-800">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    value={formData.email}
                    className="w-full border-2 border-gray-300 p-2 rounded-md text-gray-900"
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-800">Message</label>
                <textarea
                    name="message"
                    id="message"
                    onChange={handleChange}
                    value={formData.message}
                    className="w-full border-2 border-gray-300 p-2 rounded-md text-gray-900"
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">Send</button>
        </form>
    );
};

export default ContactForm;
