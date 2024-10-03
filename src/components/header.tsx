import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Letnan Systems</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/home" className="text-white hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-white hover:text-gray-300">
                Services
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="text-white hover:text-gray-300">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
