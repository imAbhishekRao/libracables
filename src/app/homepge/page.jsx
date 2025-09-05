"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Factory, ShieldCheck, Truck, Building2, Zap, Train, Signal, Car, Home, ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Footer from "@/components/Footer";
import Image from "next/image";

// Product images - using your existing product images

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Fading pen section animation
    const animatedElements = document.querySelectorAll('.animate');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }, 100);
        }
      });
    }, {
      threshold: 0.1
    });
    
    animatedElements.forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden bg-[#0A2E57] text-white">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        aria-label="Hero section"
      >
        <Image 
          src="/hero-copper-cables.jpg" 
          alt="Copper cables hero" 
          fill 
          style={{ objectFit: "cover" }} 
          priority 
          className="brightness-[0.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2E57]/70 via-[#0A2E57]/40 to-[#0A2E57]"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Animated cable lines in background */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
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
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 py-20 px-4 sm:px-8 lg:px-8 text-center">
          <div className="animate opacity-0 translate-y-5 transition-all duration-1000">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl max-w-3xl mx-auto font-bold text-white">
              Powering Progress <span className="text-[#00C4CC]">with Precision</span>
            </h1>
            <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Premium copper cables engineered for safety, reliability, and peak performance in modern infrastructure.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="default" size="lg" className="bg-transparent border border-white text-white hover:bg-white hover:text-[#0A2E57] px-8 py-6 text-lg rounded-full transition-colors">
                <Link href="/products" className="flex items-center gap-2">
                  Explore Our Products <ArrowRight size={20} />
                </Link>
              </Button>
              <Button asChild variant="default" size="lg" className="bg-[#1E90FF] hover:bg-[#0A7AEA] text-white px-8 py-6 text-lg rounded-full transition-colors">
                <Link href="/contact" className="flex items-center gap-2">
                  Contact Sales <ChevronRight size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-b from-[#F0F8FF] to-[#E6F4FF] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "25+", label: "Years Experience" },
              { number: "1000+", label: "Satisfied Clients" },
              { number: "Pan-India", label: "Delivery Network" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-gradient-to-br from-white/90 to-white/70 rounded-xl shadow-sm border border-[#1E90FF]/20 animate opacity-0 translate-y-5 transition-all duration-1000 backdrop-blur-sm"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-[#1E90FF]">{stat.number}</div>
                <div className="mt-2 text-sm md:text-base text-[#1A1A1A] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#F8FBFF] py-16" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
          <div className="text-center mb-12 animate opacity-0 translate-y-5 transition-all duration-1000">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[#0A2E57]">Why Choose <span className="text-[#1E90FF]">Libra Cables</span></h2>
            <p className="text-lg text-[#1A1A1A] max-w-2xl mx-auto font-medium">
              Our commitment to quality and innovation sets us apart in the industry
            </p>
          </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              icon: ShieldCheck, 
              title: "ISO-Certified Manufacturing", 
              description: "Quality assured processes meeting international standards" 
            },
            { 
              icon: CheckCircle2, 
              title: "Long-Life Copper Conductors", 
              description: "Premium materials for extended durability and performance" 
            },
            { 
              icon: Truck, 
              title: "Nationwide Delivery", 
              description: "Reliable logistics network reaching every corner of India" 
            },
            { 
              icon: Factory, 
              title: "Rigorously Tested", 
              description: "Comprehensive testing for safety and performance compliance" 
            },
          ].map((item, index) => (
            <Card 
              key={item.title} 
              className="border-[#1E90FF]/20 hover:shadow-md transition-all duration-300 hover:border-[#1E90FF]/40 group overflow-hidden animate opacity-0 translate-y-5 transition-all duration-1000"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1E90FF] to-[#00C4CC] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-gradient-to-br from-white/90 to-white/70 group-hover:bg-gradient-to-br group-hover:from-[#F0F8FF] group-hover:to-[#E6F4FF] transition-colors backdrop-blur-sm">
                    <item.icon className="text-[#1E90FF]" size={24} />
                  </div>
                  <CardTitle className="text-lg group-hover:text-[#1E90FF] transition-colors text-[#0A2E57] font-semibold">{item.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#1A1A1A] font-medium">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="bg-[#F8FBFF] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
                  <div className="text-center mb-12 animate opacity-0 translate-y-5 transition-all duration-1000">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[#0A2E57]">Our <span className="text-[#4A4A4A]">Product Range</span></h2>
          <p className="text-lg text-[#1A1A1A] max-w-2xl mx-auto font-medium">
            Premium copper cables designed for diverse applications and environments
          </p>
        </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                img: "/House_wiringcabel2.png", 
                title: "House Wiring Cables", 
                desc: "Reliable, safe, and efficient copper cables for homes and offices.",
                features: ["Fire resistant", "High conductivity", "Easy installation"]
              },
              { 
                img: "/submerged2.png", 
                title: "Submersible Flat Cables", 
                desc: "Durable performance for underwater pump systems.",
                features: ["Waterproof", "Abrasion resistant", "Long lifespan"]
              },
              { 
                img: "/flexible2.png", 
                title: "Flexible Industrial Cables", 
                desc: "High flexibility and strength for industrial automation.",
                features: ["Oil resistant", "High temperature rating", "Flexible"]
              },
            ].map((p, index) => (
              <Card key={p.title} className="overflow-hidden group border-[#1E90FF]/20 hover:shadow-lg transition-all duration-300 animate opacity-0 translate-y-5 transition-all duration-1000"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="overflow-hidden relative h-52">
                  <Image 
                    src={p.img} 
                    alt={`${p.title} product image`} 
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-[#1E90FF] transition-colors text-[#0A2E57] font-bold">{p.title}</CardTitle>
                  <p className="text-[#1A1A1A] font-medium">{p.desc}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {p.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-[#1A1A1A] font-medium">
                        <CheckCircle2 className="text-[#1E90FF] mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="link" className="px-0 mt-4 text-[#1E90FF] hover:text-[#00C4CC] group/link">
                    <Link href="/products" className="flex items-center gap-1">
                      Learn more <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12 animate opacity-0 translate-y-5 transition-all duration-1000">
            <Button asChild variant="outline" size="lg" className="rounded-full border-[#1E90FF] text-[#1E90FF] hover:bg-[#E6F4FF]">
              <Link href="/products" className="flex items-center gap-2">
                View All Products <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-[#F0F8FF] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
        <div className="text-center mb-12 animate opacity-0 translate-y-5 transition-all duration-1000">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[#0A2E57]">Industries We <span className="text-[#1E90FF]">Serve</span></h2>
          <p className="text-lg text-[#1A1A1A] max-w-2xl mx-auto font-medium">
            Providing specialized cable solutions across diverse sectors
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { Icon: Building2, text: "Construction – Homes, buildings, and offices." },
            { Icon: Zap, text: "Energy – Transmission-grade power systems." },
            { Icon: Train, text: "Railways – High-durability transport networks." },
            { Icon: Signal, text: "Telecom – Signal and power cabling." },
            { Icon: Car, text: "Automobile – Flexible vehicle and EV cables." },
            { Icon: Home, text: "Real Estate – Residential and commercial developments." },
          ].map(({ Icon, text }, index) => (
            <Card key={text} className="border-[#1E90FF]/20 hover:shadow-md transition-all duration-300 group overflow-hidden animate opacity-0 translate-y-5 transition-all duration-1000"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-gradient-to-br from-white/90 to-white/70 group-hover:bg-gradient-to-br group-hover:from-[#F0F8FF] group-hover:to-[#E6F4FF] transition-colors backdrop-blur-sm">
                    <Icon className="text-[#1E90FF]" size={24} />
                  </div>
                  <CardTitle className="text-base group-hover:text-[#1E90FF] transition-colors text-[#0A2E57] font-semibold">{text}</CardTitle>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#1E90FF] to-[#00C4CC] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 animate opacity-0 translate-y-5 transition-all duration-1000">Need Custom Cable Solutions?</h3>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 animate opacity-0 translate-y-5 transition-all duration-1000">
            Our engineering team can develop tailored specifications for your unique requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate opacity-0 translate-y-5 transition-all duration-1000">
            <Button asChild variant="secondary" size="lg" className="bg-transparent border border-white text-white hover:bg-white hover:text-[#0A2E57] px-8 py-6 text-lg rounded-full transition-colors">
              <Link href="/contact" className="flex items-center gap-2">
                Request a Quote <ArrowRight size={20} />
              </Link>
            </Button>
            <Button asChild variant="default" size="lg" className="bg-[#1E90FF] hover:bg-[#0A7AEA] text-white px-8 py-6 text-lg rounded-full transition-colors">
              <Link href="/products" className="flex items-center gap-2">
                Browse Products <ChevronRight size={20} />
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

