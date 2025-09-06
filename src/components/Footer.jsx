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
  Building2,
  ChevronRight,
} from "lucide-react";

export default function Footer() {

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
            <div className="flex justify-center lg:justify-start mb-6 ">
              <img 
                src="/bg_logo.png" 
                alt="Libra Cables Logo" 
                className="h-50 w-auto object-contain"
              />
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/libracableindia/photos/a.158564978946506/200885298047807/?type=3&theater" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-[#1E90FF] transition-colors">
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
