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

// Placeholder images - replace with your actual images
import qualityHero from "@/../public/quality-hero.jpg";
import testingLab from "@/../public/testing-lab.jpg";
import certification from "@/../public/certification.jpg";
import manufacturingQA from "@/../public/manufacturing-qa.jpg";

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
    
    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
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
      <section className="py-16 bg-white" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
          <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-[#0A2E57]">
                  Our <span className="text-[#1E90FF]">Quality Promise</span>
                </h2>
                <p className="text-[#4A4A4A] mb-6 leading-relaxed">
                  At Libra Cables, quality isn&apos;t just a department—it embedded in every aspect of our 
                  manufacturing process. From raw material selection to final product testing, we maintain 
                  rigorous standards to ensure our cables deliver exceptional performance and safety.
                </p>
                <p className="text-[#4A4A4A] mb-6 leading-relaxed">
                  Our quality assurance system is designed to exceed national and international standards, 
                  providing you with complete confidence in every meter of cable that bears our name.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-[#1E90FF] hover:bg-[#0A7AEA] text-white">
                    <Link href="/certificates" className="flex items-center gap-2">
                      View Certificates <ArrowRight size={18} />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-[#1E90FF] text-[#1E90FF] hover:bg-[#E6F4FF]">
                    <Link href="/contact" className="flex items-center gap-2">
                      Quality Inquiry <ChevronRight size={18} />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src={qualityHero} 
                  alt="Libra Cables quality assurance process" 
                  fill 
                  style={{ objectFit: "cover" }} 
                  className="brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2E57]/70 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Pillars */}
      <section className="py-16 bg-[#E6F4FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[#0A2E57]">Pillars of <span className="text-[#1E90FF]">Our Quality</span></h2>
            <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
              The foundation of our commitment to excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: ShieldCheck, 
                title: "Certified Materials", 
                description: "Only using highest-grade copper and insulation materials from certified suppliers" 
              },
              { 
                icon: Microscope, 
                title: "Precision Engineering", 
                description: "Advanced manufacturing processes with tight tolerance controls" 
              },
              { 
                icon: TestTube2, 
                title: "Rigorous Testing", 
                description: "Comprehensive testing at every production stage for consistent quality" 
              },
              { 
                icon: ClipboardCheck, 
                title: "Process Control", 
                description: "Stringent quality checks throughout the manufacturing lifecycle" 
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

      {/* Testing Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[#0A2E57]">Comprehensive <span className="text-[#1E90FF]">Testing Process</span></h2>
            <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
              Every cable undergoes rigorous testing to ensure superior performance and safety
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src={testingLab} 
                alt="Libra Cables testing laboratory" 
                fill 
                style={{ objectFit: "cover" }} 
              />
            </div>
            
            <div>
              <h3 className="font-display text-2xl font-bold text-[#0A2E57] mb-4">Our Testing Laboratory</h3>
              <p className="text-[#4A4A4A] mb-4">
                Our state-of-the-art testing facility is equipped with advanced instruments to perform 
                comprehensive quality checks on raw materials, in-process products, and finished cables.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { name: "Conductivity Testing", value: "100%" },
                  { name: "Insulation Resistance", value: "100%" },
                  { name: "Voltage Withstand", value: "100%" },
                  { name: "Dimensional Checks", value: "100%" },
                ].map((test, index) => (
                  <div key={index} className="bg-[#E6F4FF] p-4 rounded-lg text-center">
                    <div className="text-sm text-[#4A4A4A] mb-1">{test.name}</div>
                    <div className="text-xl font-bold text-[#1E90FF]">{test.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Raw Material Testing",
                tests: ["Copper purity analysis", "Insulation material quality", "Diameter and thickness checks", "Chemical composition verification"]
              },
              {
                title: "In-Process Testing",
                tests: ["Conductor resistance measurement", "Insulation thickness verification", "Jacket integrity checks", "Color coding validation"]
              },
              {
                title: "Final Product Testing",
                tests: ["High voltage testing", "Flame resistance tests", "Flexibility and durability", "Environmental simulation"]
              }
            ].map((stage, index) => (
              <Card key={index} className="border-[#1E90FF]/20 hover:shadow-md transition-all duration-300 group overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-[#1E90FF] transition-colors text-[#0A2E57]">
                    {stage.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {stage.tests.map((test, i) => (
                      <li key={i} className="flex items-center text-sm text-[#4A4A4A]">
                        <CheckCircle2 className="text-[#1E90FF] mr-2 flex-shrink-0" size={16} />
                        {test}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-[#E6F4FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[#0A2E57]">Certifications & <span className="text-[#1E90FF]">Standards</span></h2>
            <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
              Our compliance with national and international quality standards
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-display text-2xl font-bold text-[#0A2E57] mb-6">Quality Certifications</h3>
              <div className="space-y-6">
                {[
                  { standard: "ISO 9001:2015", description: "Quality Management System Certification" },
                  { standard: "ISI Mark (BIS)", description: "Bureau of Indian Standards Certification" },
                  { standard: "IS 694", description: "Indian Standard for PVC Insulated Cables" },
                  { standard: "IS 1554", description: "Indian Standard for PVC Insulated Cables for Working Voltages" },
                  { standard: "IEC 60502", description: "International Standard for Power Cables" },
                  { standard: "IS 9968", description: "Indian Standard for Flexible Cables" },
                ].map((cert, index) => (
                  <div key={index} className="flex items-start">
                    <Award className="text-[#1E90FF] mr-4 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-[#0A2E57]">{cert.standard}</h4>
                      <p className="text-sm text-[#4A4A4A]">{cert.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src={certification} 
                alt="Libra Cables certifications and awards" 
                fill 
                style={{ objectFit: "cover" }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2E57]/70 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[#0A2E57]">Quality <span className="text-[#1E90FF]">Performance</span></h2>
            <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
              Measurable excellence in our manufacturing processes
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { metric: "99.95%", description: "Quality Compliance Rate" },
              { metric: "< 0.05%", description: "Product Defect Rate" },
              { metric: "100%", description: "Testing Coverage" },
              { metric: "24-48 Hrs", description: "Quality Issue Resolution" },
            ].map((item, index) => (
              <Card key={index} className="border-[#1E90FF]/20 text-center p-6 hover:shadow-md transition-all duration-300 group overflow-hidden">
                <div className="text-3xl font-bold text-[#1E90FF] mb-2">{item.metric}</div>
                <div className="text-sm text-[#4A4A4A]">{item.description}</div>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 bg-[#E6F4FF] rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-[#0A2E57] mb-6 text-center">Continuous Improvement</h3>
            <p className="text-[#4A4A4A] text-center mb-6">
              Our quality management system includes regular audits, customer feedback analysis, and 
              continuous improvement initiatives to ensure we consistently meet and exceed expectations.
            </p>
            <div className="flex justify-center">
              <Button asChild variant="outline" className="border-[#1E90FF] text-[#1E90FF] hover:bg-[#D1E9FF]">
                <Link href="/quality-policy" className="flex items-center gap-2">
                  View Our Quality Policy <Download size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#1E90FF] to-[#00C4CC] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">Have Quality Requirements?</h3>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Our quality team is ready to address your specific requirements and provide detailed certifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg" className="bg-white text-[#1E90FF] hover:bg-gray-100 px-8 py-6 text-lg rounded-full">
              <Link href="/contact" className="flex items-center gap-2">
                Contact Quality Team <ArrowRight size={20} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full">
              <Link href="/certificates" className="flex items-center gap-2">
                View Certificates <Download size={20} />
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
    </div>
  );
}