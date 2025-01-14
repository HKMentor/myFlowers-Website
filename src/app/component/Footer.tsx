import Link from "next/link";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
    return (
      <footer className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          {/* Footer Logo or Name */}
          <div className="text-2xl font-bold mb-4 md:mb-0">
            <Link href="/" id="#top"> MyShop</Link>
          </div>
  
          {/* Navigation Links */}
          <nav className="flex space-x-4 mb-4 md:mb-0">
            <Link href="/about" className="hover:text-gray-400">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-gray-400">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-gray-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-400">
              Terms of Service
            </Link>
          </nav>
  
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <Link href="https://www.instagram.com/hooria_codehub?igsh=MXRuNXZ3cm83amZ6eA==" className="hover:text-red-400">
            <FaSquareInstagram className="text-4xl  "  />

            </Link>
            <Link href="https://www.linkedin.com/in/hooria-fatima-54753927b/" className="hover:text-blue-900">
            <FaLinkedin className="text-4xl " />

            </Link>
          </div>
        </div>
  
        {/* Footer Bottom Text */}
        <div className="text-center text-sm text-gray-400 mt-6">
          <p>&copy; 2025 MyShop. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  