"use client";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Download, 
  ChevronRight, 
  ArrowRight,
  Home,
  Droplets,
  Factory,
  Settings,
  Flame
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

// Product images - using your existing product images

const products = [
  {
    name: "House Wiring Cables",
    description: "Ideal for residential and commercial buildings, engineered for safety and long service life.",
    applications: ["Homes & offices", "Lighting & fixtures", "Small appliances"],
    icon: Home,
    image: "/product-house-wiring.jpg",
    features: ["Fire resistant", "High conductivity", "Easy installation", "Long lifespan"]
  },
  {
    name: "Submersible Flat Cables",
    description: "Perfect for underwater pump systems with excellent insulation and moisture resistance.",
    applications: ["Borewell pumps", "Irrigation systems", "Water management"],
    icon: Droplets,
    image: "/product-submersible.jpg",
    features: ["Waterproof", "Abrasion resistant", "UV resistant", "Flexible"]
  },
  {
    name: "Flexible Industrial Cables",
    description: "Used in factories, machines, and automation where flexibility and durability are critical.",
    applications: ["Robotics & automation", "Machinery wiring", "Control panels"],
    icon: Factory,
    image: "/product-flexible-industrial.jpg",
    features: ["Oil resistant", "High temperature rating", "Flexible", "Durable"]
  },
  {
    name: "Control Cables",
    description: "For precise signal and power control in various industrial applications.",
    applications: ["Instrumentation", "Signal control", "PLC systems"],
    icon: Settings,
    image: "/controlCabel.png",
    features: ["EMI shielded", "Precision engineered", "Multiple cores", "Reliable performance"]
  },
  {
    name: "Solar Cables",
    description: "High-performance cables specifically designed for solar power systems and renewable energy applications.",
    applications: ["Solar panels", "Solar inverters", "Renewable energy systems"],
    icon: Flame,
    image: "/solar_cabel.png",
    features: ["UV resistant", "Weatherproof", "High conductivity", "Long lifespan"]
  },
];

export default function Products() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#0A2E57] to-[#1E3A8A] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="absolute h-1 bg-[#1E90FF] animate-moveLine"
              style={{
                top: `${20 + i * 15}%`,
                left: `${-10 + i * 5}%`,
                width: "120%",
                animationDelay: `${i * 0.5}s`,
                transform: `rotate(${i % 2 === 0 ? 5 : -5}deg)`,
              }}
            ></div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#00C4CC]">Products</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Premium copper cables engineered for safety, reliability, and peak performance across diverse applications.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 sm:py-16 bg-[#E6F4FF]" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[#0A2E57]">Product <span className="text-[#1E90FF]">Range</span></h2>
              <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                Explore our comprehensive range of high-quality copper cables for every application
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-0">
              {products.map((product) => (
                <Card 
                  key={product.name} 
                  className="border-[#1E90FF]/20 hover:shadow-xl transition-all duration-300 hover:border-[#1E90FF]/40 group overflow-hidden h-full flex flex-col"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1E90FF] to-[#00C4CC] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="overflow-hidden">
                    <div className="relative h-56">
                      <Image 
                        src={product.image} 
                        alt={product.name} 
                        fill 
                        style={{ objectFit: "contain" }} 
                        className="group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute top-4 left-4 p-3 rounded-full bg-white/90 shadow-md">
                        <product.icon className="text-[#1E90FF]" size={28} />
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl group-hover:text-[#1E90FF] transition-colors text-[#0A2E57] mb-3">
                      {product.name}
                    </CardTitle>
                    <p className="text-sm text-[#4A4A4A] leading-relaxed">{product.description}</p>
                  </CardHeader>
                  
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-[#0A2E57] mb-3 text-sm uppercase tracking-wide">Key Features</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {product.features.map((feature, index) => (
                            <div key={index} className="flex items-center text-sm text-[#4A4A4A]">
                              <div className="w-2 h-2 rounded-full bg-[#1E90FF] mr-3 flex-shrink-0"></div>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-[#0A2E57] mb-3 text-sm uppercase tracking-wide">Applications</h4>
                        <ul className="text-sm text-[#4A4A4A] space-y-1">
                          {product.applications.map((app, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-[#1E90FF] mr-2 mt-1">•</span>
                              <span>{app}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-[#1E90FF]/10">
                      <Button asChild variant="outline" className="w-full border-[#1E90FF] text-[#1E90FF] hover:bg-[#E6F4FF] group/btn h-12">
                        <div className="flex items-center justify-center">
                          <Download size={18} className="mr-2" />
                          Download Brochure
                          <ChevronRight size={18} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                        </div>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild className="bg-[#1E90FF] hover:bg-[#0A7AEA] text-white px-8 py-6 text-lg rounded-full">
                <Link href="/contact" className="flex items-center gap-2">
                  Request Custom Quote <ArrowRight size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[#0A2E57]">Technical <span className="text-[#1E90FF]">Specifications</span></h2>
            <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
              Our cables are manufactured to meet and exceed industry standards
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-5xl mx-auto">
            {[
              {
                title: "Standards Compliance",
                items: ["IS 694", "IS 1554", "IS 7098", "IS 9968", "IEC 60502", "Customer Specifications"]
              },
              {
                title: "Voltage Rating",
                items: ["Up to 1100V", "Flexible options available", "Custom voltage ratings"]
              },
              {
                title: "Temperature Range",
                items: ["-15°C to +70°C", "High-temp variants available", "Sub-zero performance"]
              }
            ].map((spec, index) => (
              <Card key={index} className="border-[#1E90FF]/20 hover:shadow-lg transition-all duration-300 group overflow-hidden text-center h-full">
                <CardContent className="p-8">
                  <h3 className="font-semibold text-xl group-hover:text-[#1E90FF] transition-colors text-[#0A2E57] mb-6">
                    {spec.title}
                  </h3>
                  <ul className="space-y-3 text-sm text-[#4A4A4A]">
                    {spec.items.map((item, i) => (
                      <li key={i} className="py-1">{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#1E90FF] to-[#00C4CC] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-6">Need Custom Cable Solutions?</h3>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
            Our engineering team can develop tailored specifications for your unique requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild variant="secondary" size="lg" className="bg-transparent border border-white text-white hover:bg-white hover:text-[#0A2E57] px-8 py-6 text-lg rounded-full transition-colors">
              <Link href="/contact" className="flex items-center gap-2">
                Contact Our Team <ArrowRight size={20} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-[#1E90FF] hover:bg-[#0A7AEA] text-white px-8 py-6 text-lg rounded-full transition-colors">
              <Link href="/downloads" className="flex items-center gap-2">
                Download Catalog <Download size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes moveLine {
          0% { transform: translateX(-100%) rotate(5deg); }
          100% { transform: translateX(100%) rotate(5deg); }
        }
        .animate-moveLine {
          animation: moveLine 15s linear infinite;
        }
      `}</style>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}


