"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowUp,
  Building2,
  ChevronRight,
  Clock
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A2E57] text-white relative overflow-hidden">
      {/* Decorative elements matching homepage style */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            className="absolute h-0.5 bg-[#1E90FF] animate-moveLine"
            style={{
              top: `${20 + i * 25}%`,
              left: `${-10 + i * 5}%`,
              width: "120%",
              animationDelay: `${i * 0.5}s`,
              transform: `rotate(${i % 2 === 0 ? 5 : -5}deg)`,
            }}
          ></div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <Building2 className="text-[#1E90FF] mr-2" size={28} />
              <h3 className="text-2xl font-bold">Libra Cables</h3>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Manufacturing premium copper cables for industrial, commercial, and residential applications with a commitment to quality and reliability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-[#1E90FF] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-[#1E90FF] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-[#1E90FF] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-[#1E90FF] transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#1E90FF]"></div>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/80 hover:text-[#1E90FF] transition-colors flex items-center group">
                  <ChevronRight size={16} className="mr-1 group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-[#1E90FF] transition-colors flex items-center group">
                  <ChevronRight size={16} className="mr-1 group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/80 hover:text-[#1E90FF] transition-colors flex items-center group">
                  <ChevronRight size={16} className="mr-1 group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100" />
                  Products
                </Link>
              </li>
              <li>
                <Link href="/quality" className="text-white/80 hover:text-[#1E90FF] transition-colors flex items-center group">
                  <ChevronRight size={16} className="mr-1 group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100" />
                  Quality Assurance
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-[#1E90FF] transition-colors flex items-center group">
                  <ChevronRight size={16} className="mr-1 group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Our Products
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#1E90FF]"></div>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/products" className="text-white/80 hover:text-[#1E90FF] transition-colors flex items-center group">
                  <ChevronRight size={16} className="mr-1 group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100" />
                  House Wiring Cables
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/80 hover:text-[#1E90FF] transition-colors flex items-center group">
                  <ChevronRight size={16} className="mr-1 group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100" />
                  Submersible Cables
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/80 hover:text-[#1E90FF] transition-colors flex items-center group">
                  <ChevronRight size={16} className="mr-1 group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100" />
                  Industrial Cables
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/80 hover:text-[#1E90FF] transition-colors flex items-center group">
                  <ChevronRight size={16} className="mr-1 group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100" />
                  Solar Cables
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/80 hover:text-[#1E90FF] transition-colors flex items-center group">
                  <ChevronRight size={16} className="mr-1 group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100" />
                  Control Cables
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Contact Info
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#1E90FF]"></div>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Building2 className="text-[#1E90FF] mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-white/80">Mfg. by: LIBRA CABLE INDIA</span>
              </li>
              <li className="flex items-start">
                <MapPin className="text-[#1E90FF] mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-white/80">A-5/7, Jhilmil Industrial Area, Delhi - 110095</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-[#1E90FF] mr-3 flex-shrink-0" size={20} />
                <a href="mailto:libracable@gmail.com" className="text-white/80 hover:text-[#1E90FF] transition-colors">libracable@gmail.com</a>
              </li>
              <li className="flex items-center">
                <a href="https://www.libracables.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#1E90FF] transition-colors flex items-center">
                  <span className="mr-2">🌐</span>
                  www.libracables.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="text-[#1E90FF] mr-3 mt-1 flex-shrink-0" size={20} />
                <div className="text-white/80">
                  <div className="font-medium">Business Hours</div>
                  <div className="text-sm">9 am to 5 pm</div>
                  <div className="text-sm">Tuesday Off</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Libra Cables. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-white/60 hover:text-[#1E90FF] transition-colors text-sm">Privacy Policy</Link>
            <Link href="/terms" className="text-white/60 hover:text-[#1E90FF] transition-colors text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-[#1E90FF] hover:bg-[#0A7AEA] text-white rounded-full shadow-lg transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}

      <style jsx>{`
        @keyframes moveLine {
          0% { transform: translateX(-100%) rotate(5deg); }
          100% { transform: translateX(100%) rotate(5deg); }
        }
        .animate-moveLine {
          animation: moveLine 15s linear infinite;
        }
      `}</style>
    </footer>
  );
}
