"use client";
import Link from "next/link";
import { Bolt, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#0a192f]/90 backdrop-blur-md fixed w-full z-50 py-3 border-b border-[#64ffda]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#64ffda] flex items-center">
          <Bolt className="mr-3" />
          <span>Libra Cables</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <Link href="/" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors font-medium">Home</Link>
          <Link href="/products" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors font-medium">Products</Link>
          <Link href="/about" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors font-medium">About</Link>
          <Link href="/contact" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors font-medium">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#64ffda] p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a192f]/95 backdrop-blur-md border-t border-[#64ffda]/10">
          <div className="px-5 py-4 space-y-4">
            <Link 
              href="/" 
              className="block text-[#ccd6f6] hover:text-[#64ffda] transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/products" 
              className="block text-[#ccd6f6] hover:text-[#64ffda] transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              href="/about" 
              className="block text-[#ccd6f6] hover:text-[#64ffda] transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="block text-[#ccd6f6] hover:text-[#64ffda] transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
