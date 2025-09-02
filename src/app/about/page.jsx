"use client";
import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Factory, 
  ShieldCheck, 
  Users, 
  Target,
  Award,
  Globe,
  Heart,
  Zap,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

// Placeholder images - replace with your actual images when available

export default function AboutPage() {
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
      <section className="relative py-20 bg-gradient-to-b from-[#0A2E57] to-[#1E3A8A]">
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
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                About <span className="text-[#00C4CC]">Libra Cables</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                For over 25 years, Libra Cables has been a trusted manufacturer of high-quality copper cables, 
                powering progress across India with reliable and innovative wiring solutions from our facility in Delhi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-transparent border border-white text-white hover:bg-white hover:text-[#0A2E57] px-8 py-6 text-lg rounded-full transition-colors">
                  <Link href="/products" className="flex items-center gap-2">
                    Our Products <ArrowRight size={20} />
                  </Link>
                </Button>
                <Button asChild className="bg-[#1E90FF] hover:bg-[#0A7AEA] text-white px-8 py-6 text-lg rounded-full transition-colors">
                  <Link href="/contact" className="flex items-center gap-2">
                    Contact Us <ChevronRight size={20} />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1E90FF] to-[#00C4CC] flex items-center justify-center">
              <div className="text-center text-white">
                <Factory className="mx-auto mb-4" size={64} />
                <h3 className="text-2xl font-bold">Manufacturing Facility</h3>
                <p className="text-lg opacity-90">Delhi, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-b from-[#E6F4FF] to-[#D1E9FF] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: "25+", label: "Years Experience" },
              { number: "500+", label: "Projects Completed" },
              { number: "1000+", label: "Satisfied Clients" },
              { number: "Pan-India", label: "Delivery Network" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-white rounded-xl shadow-sm border border-[#1E90FF]/20"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#1E90FF]">{stat.number}</div>
                <div className="mt-2 text-sm md:text-base text-[#4A4A4A]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white" ref={sectionRef}>
        <div className="container mx-auto px-4">
          <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[#0A2E57]">Our <span className="text-[#1E90FF]">Story</span></h2>
              <p className="text-lg text-[#4A4A4A] max-w-3xl mx-auto">
                From humble beginnings to becoming a trusted name in the cable industry
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-[#1E90FF] to-[#00C4CC] flex items-center justify-center">
                <div className="text-center text-white">
                  <Zap className="mx-auto mb-4" size={64} />
                  <h3 className="text-2xl font-bold">Manufacturing Process</h3>
                  <p className="text-lg opacity-90">Quality & Innovation</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-display text-2xl font-bold text-[#0A2E57] mb-4">Our Journey</h3>
                <p className="text-[#4A4A4A] mb-4">
                  Founded in 1998, Libra Cables began as a small manufacturing unit in Delhi with a vision to provide 
                  high-quality copper cables to the Indian market. Through dedication to quality and customer 
                  satisfaction, we've grown into a recognized brand serving clients across multiple industries.
                </p>
                <p className="text-[#4A4A4A] mb-4">
                  Our journey has been marked by continuous innovation, investment in advanced manufacturing 
                  technologies, and a commitment to exceeding industry standards.
                </p>
                <p className="text-[#4A4A4A]">
                  Today, we take pride in our extensive product range that powers homes, industries, and 
                  infrastructure projects across the nation.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="font-display text-2xl font-bold text-[#0A2E57] mb-4">Our Mission & Vision</h3>
                <p className="text-[#4A4A4A] mb-4">
                  Our mission is to deliver superior quality copper cables that ensure safety, reliability, 
                  and efficiency for all electrical applications. We strive to be the preferred choice for 
                  customers seeking trustworthy wiring solutions.
                </p>
                <p className="text-[#4A4A4A]">
                  Our vision is to pioneer innovation in the cable manufacturing industry while maintaining 
                  sustainable practices and contributing to India's growth through infrastructure development.
                </p>
              </div>
              
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl order-1 lg:order-2 bg-gradient-to-br from-[#1E90FF] to-[#00C4CC] flex items-center justify-center">
                <div className="text-center text-white">
                  <Users className="mx-auto mb-4" size={64} />
                  <h3 className="text-2xl font-bold">Our Team</h3>
                  <p className="text-lg opacity-90">Expert Professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-[#E6F4FF]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[#0A2E57]">Our <span className="text-[#1E90FF]">Values</span></h2>
            <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
              The principles that guide everything we do at Libra Cables
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: ShieldCheck, 
                title: "Quality", 
                description: "We never compromise on quality, ensuring every cable meets the highest standards of safety and performance." 
              },
              { 
                icon: Heart, 
                title: "Integrity", 
                description: "We conduct business with honesty and transparency, building trust with our customers and partners." 
              },
              { 
                icon: Zap, 
                title: "Innovation", 
                description: "We continuously invest in research and technology to improve our products and processes." 
              },
              { 
                icon: Users, 
                title: "Customer Focus", 
                description: "Our customers are at the heart of everything we do, and we strive to exceed their expectations." 
              },
            ].map((item, index) => (
              <Card 
                key={item.title} 
                className="border-[#1E90FF]/20 hover:shadow-md transition-all duration-300 hover:border-[#1E90FF]/40 group overflow-hidden text-center"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1E90FF] to-[#00C4CC] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardContent className="p-8">
                  <div className="p-4 rounded-full bg-[#E6F4FF] group-hover:bg-[#D1E9FF] transition-colors inline-flex mb-6">
                    <item.icon className="text-[#1E90FF]" size={32} />
                  </div>
                  <h3 className="font-semibold text-lg group-hover:text-[#1E90FF] transition-colors text-[#0A2E57] mb-3">{item.title}</h3>
                  <p className="text-sm text-[#4A4A4A]">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[#0A2E57]">Why Choose <span className="text-[#1E90FF]">Libra Cables</span></h2>
            <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
              Our commitment to excellence sets us apart in the industry
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: Factory, 
                title: "State-of-the-Art Manufacturing", 
                description: "Our advanced manufacturing facilities use cutting-edge technology to produce cables of consistent quality and performance." 
              },
              { 
                icon: Award, 
                title: "Quality Certifications", 
                description: "Our products meet national and international standards, with rigorous testing at every stage of production." 
              },
              { 
                icon: Globe, 
                title: "Nationwide Presence", 
                description: "With a robust distribution network, we serve customers across India with reliable and timely delivery." 
              },
              { 
                icon: Target, 
                title: "Industry-Specific Solutions", 
                description: "We offer specialized cables tailored to the unique requirements of different industries and applications." 
              },
              { 
                icon: ShieldCheck, 
                title: "Safety Compliance", 
                description: "All our cables are manufactured with the highest safety standards to protect people and property." 
              },
              { 
                icon: Users, 
                title: "Expert Support", 
                description: "Our team of experienced professionals provides technical guidance and support to help you choose the right products." 
              },
            ].map((item, index) => (
              <Card 
                key={item.title} 
                className="border-[#1E90FF]/20 hover:shadow-md transition-all duration-300 hover:border-[#1E90FF]/40 group overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-[#E6F4FF] group-hover:bg-[#D1E9FF] transition-colors">
                      <item.icon className="text-[#1E90FF]" size={24} />
                    </div>
                    <h3 className="font-semibold group-hover:text-[#1E90FF] transition-colors text-[#0A2E57]">{item.title}</h3>
                  </div>
                  <p className="text-sm text-[#4A4A4A]">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#1E90FF] to-[#00C4CC] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">Ready to Power Your Projects with Quality Cables?</h3>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your requirements and discover the Libra Cables difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-transparent border border-white text-white hover:bg-white hover:text-[#0A2E57] px-8 py-6 text-lg rounded-full transition-colors">
              <Link href="/contact" className="flex items-center gap-2">
                Get in Touch <ArrowRight size={20} />
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-[#1E90FF] hover:bg-[#0A7AEA] text-white px-8 py-6 text-lg rounded-full transition-colors">
              <Link href="/products" className="flex items-center gap-2">
                Explore Products <ChevronRight size={20} />
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


