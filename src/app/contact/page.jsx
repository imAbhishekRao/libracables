"use client";
import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/Footer";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2,
  Zap,
  ChevronRight,
  Building2
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log(formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: ""
      });
    }, 3000);
  };

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
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Get in <span className="text-[#00C4CC]">Touch</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Have questions about our copper cable products? Our team is here to help you find the perfect solution.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-[#E6F4FF]" ref={sectionRef}>
        <div className="container mx-auto px-4">
          <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-6">
                <h2 className="font-display text-3xl font-bold text-[#0A2E57] mb-6">Contact Information</h2>
                
                <Card className="border-[#1E90FF]/20 hover:shadow-md transition-all duration-300 group overflow-hidden">
                  <CardContent className="p-6 flex items-start">
                    <div className="p-3 rounded-full bg-[#E6F4FF] group-hover:bg-[#D1E9FF] transition-colors mr-4">
                      <Building2 className="text-[#1E90FF]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0A2E57] group-hover:text-[#1E90FF] transition-colors">Manufacturer</h3>
                      <p className="text-[#4A4A4A] mt-1">LIBRA CABLE INDIA</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-[#1E90FF]/20 hover:shadow-md transition-all duration-300 group overflow-hidden">
                  <CardContent className="p-6 flex items-start">
                    <div className="p-3 rounded-full bg-[#E6F4FF] group-hover:bg-[#D1E9FF] transition-colors mr-4">
                      <MapPin className="text-[#1E90FF]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0A2E57] group-hover:text-[#1E90FF] transition-colors">Address</h3>
                      <p className="text-[#4A4A4A] mt-1">M-215, Sector-5, DSIIDC Banana Industrial Area, Delhi-39</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-[#1E90FF]/20 hover:shadow-md transition-all duration-300 group overflow-hidden">
                  <CardContent className="p-6 flex items-start">
                    <div className="p-3 rounded-full bg-[#E6F4FF] group-hover:bg-[#D1E9FF] transition-colors mr-4">
                      <Mail className="text-[#1E90FF]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0A2E57] group-hover:text-[#1E90FF] transition-colors">Email</h3>
                      <p className="text-[#4A4A4A] mt-1">libracable@gmail.com</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-[#1E90FF]/20 hover:shadow-md transition-all duration-300 group overflow-hidden">
                  <CardContent className="p-6 flex items-start">
                    <div className="p-3 rounded-full bg-[#E6F4FF] group-hover:bg-[#D1E9FF] transition-colors mr-4">
                      <Clock className="text-[#1E90FF]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0A2E57] group-hover:text-[#1E90FF] transition-colors">Business Hours</h3>
                      <p className="text-[#4A4A4A] mt-1">Monday - Friday: 9AM - 6PM</p>
                      <p className="text-[#4A4A4A]">Saturday: 10AM - 2PM</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-[#1E90FF]/20 overflow-hidden">
                  <CardContent className="p-8">
                    <h2 className="font-display text-3xl font-bold text-[#0A2E57] mb-6">Send us a Message</h2>
                    
                    {isSubmitted ? (
                      <div className="text-center py-12">
                        <CheckCircle2 className="text-[#1E90FF] mx-auto mb-4" size={48} />
                        <h3 className="text-2xl font-bold text-[#0A2E57] mb-2">Message Sent!</h3>
                        <p className="text-[#4A4A4A]">Thank you for contacting us. We'll get back to you soon.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-[#0A2E57] mb-2">Full Name *</label>
                            <Input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="border-[#1E90FF]/20 focus:border-[#1E90FF]"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-[#0A2E57] mb-2">Email Address *</label>
                            <Input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="border-[#1E90FF]/20 focus:border-[#1E90FF]"
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-[#0A2E57] mb-2">Phone Number</label>
                            <Input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="border-[#1E90FF]/20 focus:border-[#1E90FF]"
                            />
                          </div>
                          <div>
                            <label htmlFor="company" className="block text-sm font-medium text-[#0A2E57] mb-2">Company</label>
                            <Input
                              type="text"
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              className="border-[#1E90FF]/20 focus:border-[#1E90FF]"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-[#0A2E57] mb-2">Subject *</label>
                          <Input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="border-[#1E90FF]/20 focus:border-[#1E90FF]"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-[#0A2E57] mb-2">Message *</label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="border-[#1E90FF]/20 focus:border-[#1E90FF]"
                          />
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="bg-[#1E90FF] hover:bg-[#0A7AEA] text-white px-8 py-6 text-lg rounded-full flex items-center"
                        >
                          Send Message <Send size={20} className="ml-2" />
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[#0A2E57]">Frequently Asked <span className="text-[#1E90FF]">Questions</span></h2>
            <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
              Find answers to common questions about our copper cable products and services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What types of copper cables do you manufacture?",
                answer: "We produce a wide range of copper cables including house wiring cables, submersible flat cables, flexible industrial cables, control cables, and specialized cables for various industries."
              },
              {
                question: "Do you offer custom cable solutions?",
                answer: "Yes, our engineering team can develop tailored cable specifications to meet your unique requirements and applications."
              },
              {
                question: "What is your delivery timeline?",
                answer: "Standard products are typically delivered within 7-10 days. Custom solutions may require additional time based on complexity and quantity."
              },
              {
                question: "Do you provide technical support?",
                answer: "Absolutely! Our technical team is available to assist with product selection, installation guidance, and troubleshooting."
              },
            ].map((faq, index) => (
              <Card key={index} className="border-[#1E90FF]/20 hover:shadow-md transition-all duration-300 group overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-[#0A2E57] group-hover:text-[#1E90FF] transition-colors flex items-center">
                    <Zap className="text-[#1E90FF] mr-3" size={20} />
                    {faq.question}
                  </h3>
                  <p className="text-[#4A4A4A] mt-3">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="rounded-full border-[#1E90FF] text-[#1E90FF] hover:bg-[#E6F4FF]">
              <a href="/faq" className="flex items-center gap-2">
                View All FAQs <ChevronRight size={18} />
              </a>
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


