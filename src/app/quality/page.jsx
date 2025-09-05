"use client";
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ShieldCheck, 
  CheckCircle2, 
  Award, 
  FileCheck, 
  Microscope,
  Zap,
  Factory,
  TestTube2,
  ClipboardCheck,
  BarChart3,
  Target,
  ChevronRight,
  ArrowRight,
  Download
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function QualityPage() {
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
      <section className="relative py-32 bg-gradient-to-b from-[#0A2E57] to-[#1E3A8A]">
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8 relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Quality <span className="text-[#00C4CC]">Assurance</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Uncompromising commitment to excellence in every cable we manufacture
          </p>
        </div>
      </section>

      {/* Quality Intro */}
      <section className="py-16 bg-gradient-to-b from-[#E6F4FF] to-[#D1E9FF]" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
          <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-[#0A2E57]">
                  Our <span className="text-[#1E90FF]">Quality Promise</span>
                </h2>
                <p className="text-[#4A4A4A] mb-6 leading-relaxed">
                  At Libra Cables, quality isn&apos;t just a department—it&apos;s embedded in every aspect of our 
                  manufacturing process. From raw material selection to final product testing, we maintain 
                  rigorous standards to ensure our cables deliver exceptional performance and safety.
                </p>
                <p className="text-[#4A4A4A] mb-8 leading-relaxed">
                  Our commitment to quality has earned us certifications from leading international 
                  standards organizations and the trust of customers worldwide.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center text-[#1E90FF] font-semibold">
                    <ShieldCheck className="mr-2" size={20} />
                    ISO 9001:2015 Certified
                  </div>
                  <div className="flex items-center text-[#1E90FF] font-semibold">
                    <Award className="mr-2" size={20} />
                    BIS Certified
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-[#1E90FF] to-[#00C4CC] p-1 rounded-2xl">
                  <div className="bg-gradient-to-br from-white/95 to-white/85 rounded-2xl p-8 backdrop-blur-sm">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="bg-[#1E90FF]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                          <CheckCircle2 className="text-[#1E90FF]" size={28} />
                        </div>
                        <h3 className="font-semibold text-[#0A2E57] mb-2">99.9%</h3>
                        <p className="text-sm text-[#4A4A4A]">Quality Rate</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-[#00C4CC]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Target className="text-[#00C4CC]" size={28} />
                        </div>
                        <h3 className="font-semibold text-[#0A2E57] mb-2">100%</h3>
                        <p className="text-sm text-[#4A4A4A]">Tested</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-[#1E90FF]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Award className="text-[#1E90FF]" size={28} />
                        </div>
                        <h3 className="font-semibold text-[#0A2E57] mb-2">25+</h3>
                        <p className="text-sm text-[#4A4A4A]">Years Experience</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-[#00C4CC]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Factory className="text-[#00C4CC]" size={28} />
                        </div>
                        <h3 className="font-semibold text-[#0A2E57] mb-2">24/7</h3>
                        <p className="text-sm text-[#4A4A4A]">Monitoring</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-[#0A2E57]">
              International <span className="text-[#1E90FF]">Quality Standards</span>
            </h2>
            <p className="text-[#4A4A4A] max-w-2xl mx-auto">
              We adhere to the highest international standards to ensure our products meet global quality requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="bg-[#1E90FF]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="text-[#1E90FF]" size={32} />
                </div>
                <CardTitle className="text-[#0A2E57]">ISO 9001:2015</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-[#4A4A4A] mb-4">
                  International standard for quality management systems ensuring consistent quality in all processes
                </p>
                <div className="flex items-center justify-center text-[#1E90FF] font-semibold">
                  <CheckCircle2 className="mr-2" size={16} />
                  Certified
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="bg-[#00C4CC]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-[#00C4CC]" size={32} />
                </div>
                <CardTitle className="text-[#0A2E57]">BIS Certification</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-[#4A4A4A] mb-4">
                  Bureau of Indian Standards certification ensuring compliance with Indian quality standards
                </p>
                <div className="flex items-center justify-center text-[#00C4CC] font-semibold">
                  <CheckCircle2 className="mr-2" size={16} />
                  Certified
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="bg-[#1E90FF]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="text-[#1E90FF]" size={32} />
                </div>
                <CardTitle className="text-[#0A2E57]">CE Marking</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-[#4A4A4A] mb-4">
                  European conformity marking indicating compliance with EU safety, health, and environmental requirements
                </p>
                <div className="flex items-center justify-center text-[#1E90FF] font-semibold">
                  <CheckCircle2 className="mr-2" size={16} />
                  Certified
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testing Process */}
      <section className="py-16 bg-gradient-to-b from-[#F0F8FF] to-[#E6F4FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-[#0A2E57]">
              Comprehensive <span className="text-[#1E90FF]">Testing Process</span>
            </h2>
            <p className="text-[#4A4A4A] max-w-2xl mx-auto">
              Every cable undergoes rigorous testing at multiple stages to ensure superior quality and performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#1E90FF] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0A2E57] mb-2">Raw Material Testing</h3>
                  <p className="text-[#4A4A4A]">
                    Comprehensive testing of copper purity, insulation materials, and protective coatings before production begins
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#1E90FF] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0A2E57] mb-2">In-Process Quality Control</h3>
                  <p className="text-[#4A4A4A]">
                    Continuous monitoring and testing during manufacturing to catch any issues early
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#1E90FF] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0A2E57] mb-2">Final Product Testing</h3>
                  <p className="text-[#4A4A4A]">
                    Complete electrical, mechanical, and environmental testing before shipment
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#1E90FF] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0A2E57] mb-2">Quality Documentation</h3>
                  <p className="text-[#4A4A4A]">
                    Detailed test reports and certificates provided with every shipment
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#1E90FF] to-[#00C4CC] p-1 rounded-2xl">
              <div className="bg-gradient-to-br from-white/95 to-white/85 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-[#0A2E57] mb-6 text-center">
                  Testing Equipment
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="bg-[#1E90FF]/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Microscope className="text-[#1E90FF]" size={24} />
                    </div>
                    <p className="text-sm font-semibold text-[#0A2E57]">Microscopic Analysis</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#00C4CC]/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Zap className="text-[#00C4CC]" size={24} />
                    </div>
                    <p className="text-sm font-semibold text-[#0A2E57]">Electrical Testing</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#1E90FF]/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <TestTube2 className="text-[#1E90FF]" size={24} />
                    </div>
                    <p className="text-sm font-semibold text-[#0A2E57]">Chemical Analysis</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#00C4CC]/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <BarChart3 className="text-[#00C4CC]" size={24} />
                    </div>
                    <p className="text-sm font-semibold text-[#0A2E57]">Performance Data</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-[#0A2E57]">
              Quality <span className="text-[#1E90FF]">Metrics</span>
            </h2>
            <p className="text-[#4A4A4A] max-w-2xl mx-auto">
              Our commitment to quality is reflected in our performance metrics and customer satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-8 pb-6">
                <div className="bg-[#1E90FF]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-[#1E90FF]">99.9%</span>
                </div>
                <h3 className="text-xl font-semibold text-[#0A2E57] mb-2">Quality Rate</h3>
                <p className="text-[#4A4A4A]">Consistent product quality across all batches</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-8 pb-6">
                <div className="bg-[#00C4CC]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-[#00C4CC]">100%</span>
                </div>
                <h3 className="text-xl font-semibold text-[#0A2E57] mb-2">Test Coverage</h3>
                <p className="text-[#4A4A4A]">Every product undergoes complete testing</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-8 pb-6">
                <div className="bg-[#1E90FF]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-[#1E90FF]">24/7</span>
                </div>
                <h3 className="text-xl font-semibold text-[#0A2E57] mb-2">Monitoring</h3>
                <p className="text-[#4A4A4A]">Continuous quality surveillance</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-8 pb-6">
                <div className="bg-[#00C4CC]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-[#00C4CC]">25+</span>
                </div>
                <h3 className="text-xl font-semibold text-[#0A2E57] mb-2">Years</h3>
                <p className="text-[#4A4A4A]">Of quality manufacturing experience</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0A2E57] to-[#1E3A8A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
            Experience <span className="text-[#00C4CC]">Quality</span> Firsthand
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Discover why leading industries trust Libra Cables for their critical electrical infrastructure needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                         <Button asChild className="bg-transparent border border-white text-white hover:bg-white hover:text-[#0A2E57] px-8 py-3 text-lg rounded-full transition-colors">
               <Link href="/products" className="flex items-center">
                 View Our Products <ArrowRight className="ml-2" size={20} />
               </Link>
             </Button>
             <Button asChild className="bg-[#1E90FF] hover:bg-[#0A7AEA] text-white px-8 py-3 text-lg rounded-full transition-colors">
               <Link href="/contact" className="flex items-center">
                 Contact Us <ChevronRight className="ml-2" size={20} />
               </Link>
             </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <style jsx>{`
        @keyframes moveLine {
          0% { transform: translateX(-100%) rotate(5deg); }
          100% { transform: translateX(100%) rotate(5deg); }
        }
        .animate-moveLine {
          animation: moveLine 15s linear infinite;
        }
      `}</style>
    </div>
  );
}
