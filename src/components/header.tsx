"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-3">
          <Image
            src="/favicon.ico"
            alt="Letnan Systems Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
        <h1 className="text-white text-xl font-bold">Letnan Systems</h1>
        </div>
        
        {/* Botão para o menu em telas menores */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title id="menuIconTitle">Menu</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Links de navegação para telas maiores */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-white hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-gray-300">
                Sobre nós
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-white hover:text-gray-300">
                Serviços
              </Link>
            </li>
            <li>
              <Link href="/infrastructure" className="text-white hover:text-gray-300">
                Infraestrutura
              </Link>
            </li>
            <li>
              <Link href="/compliance" className="text-white hover:text-gray-300">
                Compliance
              </Link>
            </li>
            <li>
              <Link href="/bsc" className="text-white hover:text-gray-300">
                Análise BSC
              </Link>
            </li>
            <li>
              <Link href="/swot" className="text-white hover:text-gray-300">
                Análise SWOT
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="text-white hover:text-gray-300">
                Depoimentos
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white hover:text-gray-300">
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Menu para telas menores */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <nav className="bg-black">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link href="/" className="text-white hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-gray-300">
                Sobre nós
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-white hover:text-gray-300">
                Serviços
              </Link>
            </li>
            <li>
              <Link href="/infrastructure" className="text-white hover:text-gray-300">
                Infraestrutura
              </Link>
            </li>
            <li>
              <Link href="/compliance" className="text-white hover:text-gray-300">
                Compliance
              </Link>
            </li>
            <li>
              <Link href="/bsc" className="text-white hover:text-gray-300">
                Análise BSC
              </Link>
            </li>
            <li>
              <Link href="/swot" className="text-white hover:text-gray-300">
                Análise SWOT
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="text-white hover:text-gray-300">
                Depoimentos
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white hover:text-gray-300">
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
