"use client";
import Link from "next/link";
import { Bolt } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-[#0a192f]/90 backdrop-blur-md fixed w-full z-50 py-3 border-b border-[#64ffda]/10">
      <div className="max-w-6xl mx-auto px-5 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#64ffda] flex items-center">
          <Bolt className="mr-3" />
          <span>Libra Cables</span>
        </Link>
        <div className="flex gap-8">
          <Link href="/" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors font-medium">Home</Link>
          <Link href="/products" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors font-medium">Products</Link>
          <Link href="/about" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors font-medium">About</Link>
          <Link href="/contact" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors font-medium">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
