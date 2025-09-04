"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, ArrowRight, Plus, Minus, Mail } from "lucide-react";
import Link from "next/link";

export default function FAQPage() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const faqCategories = [
    {
      id: "general",
      title: "General Questions",
      questions: [
        {
          id: "general-1",
          question: "What products does Libra Cables offer?",
          answer: "Libra Cables specializes in high-quality copper cables for various applications including electrical wiring, networking, telecommunications, and industrial use. Our product range includes building wires, power cables, control cables, instrumentation cables, and more."
        },
        {
          id: "general-2",
          question: "Where are Libra Cables products manufactured?",
          answer: "All our cables are manufactured in our state-of-the-art facility in Mohali, Punjab, India. We maintain strict quality control standards throughout the manufacturing process to ensure the highest quality products."
        },
        {
          id: "general-3",
          question: "Are Libra Cables products certified?",
          answer: "Yes, all our products are certified by relevant Indian and international standards including ISI, IEC, and ISO. We also undergo regular quality audits to maintain our certifications."
        }
      ]
    },
    {
      id: "ordering",
      title: "Ordering & Payments",
      questions: [
        {
          id: "ordering-1",
          question: "How can I place an order?",
          answer: "You can place an order through our website by selecting products and adding them to your cart, or you can contact our sales team directly via phone or email for bulk orders and customized solutions."
        },
        {
          id: "ordering-2",
          question: "What payment methods do you accept?",
          answer: "We accept various payment methods including bank transfers, demand drafts, and online payments through secure gateways. For established customers, we also offer credit terms subject to approval."
        },
        {
          id: "ordering-3",
          question: "Do you offer discounts for bulk orders?",
          answer: "Yes, we offer competitive pricing for bulk orders. Please contact our sales team with your requirements, and we will provide you with a customized quote."
        },
        {
          id: "ordering-4",
          question: "Can I get a sample before placing a large order?",
          answer: "Yes, we can provide samples for evaluation. Please contact our sales team to request samples. Note that sample charges may apply, which are often credited against future orders."
        }
      ]
    },
    {
      id: "shipping",
      title: "Shipping & Delivery",
      questions: [
        {
          id: "shipping-1",
          question: "What are your delivery timelines?",
          answer: "Delivery times vary based on product availability and order quantity. Standard products are typically shipped within 3-5 business days. For large custom orders, delivery times will be confirmed at the time of order placement."
        },
        {
          id: "shipping-2",
          question: "Do you offer international shipping?",
          answer: "Currently, we primarily serve customers within India. However, we do consider international orders on a case-by-case basis. Please contact our export department for more information."
        },
        {
          id: "shipping-3",
          question: "Who bears the shipping costs?",
          answer: "Shipping costs are calculated based on order weight and delivery location. These costs will be clearly displayed before order confirmation. For large orders, we may offer free shipping depending on the order value and destination."
        }
      ]
    },
    {
      id: "technical",
      title: "Technical Support",
      questions: [
        {
          id: "technical-1",
          question: "How do I choose the right cable for my application?",
          answer: "Our technical team can help you select the appropriate cable based on your specific requirements including voltage rating, environmental conditions, installation method, and regulatory standards. Contact our support team with your project details."
        },
        {
          id: "technical-2",
          question: "Do you provide installation guidance?",
          answer: "Yes, we provide basic installation guidelines with our products. For complex installations, our technical team can offer advice and best practices to ensure optimal performance and safety."
        },
        {
          id: "technical-3",
          question: "What documentation do you provide with your products?",
          answer: "All our products come with test certificates, specification sheets, and safety information. Additional documentation can be provided upon request for specific applications."
        }
      ]
    },
    {
      id: "warranty",
      title: "Warranty & Returns",
      questions: [
        {
          id: "warranty-1",
          question: "What is your warranty policy?",
          answer: "We offer a comprehensive warranty on all our products against manufacturing defects. The warranty period varies by product type and is detailed in our terms and conditions. Please retain your proof of purchase for warranty claims."
        },
        {
          id: "warranty-2",
          question: "How do I make a warranty claim?",
          answer: "To make a warranty claim, please contact our customer service team with your order details and a description of the issue. We may require photos or samples for evaluation before processing your claim."
        },
        {
          id: "warranty-3",
          question: "What is your return policy?",
          answer: "We accept returns of unused products in original packaging within 14 days of delivery. Custom-manufactured items may not be eligible for return. Please contact our team for specific return instructions."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F7FAFC]">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-[#0A2E57] to-[#1E3A8A]">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className="absolute h-1 bg-[#1E90FF] animate-moveLine"
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
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-3 bg-[#1E90FF]/10 rounded-full mb-6">
              <Mail className="text-[#1E90FF]" size={32} />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked <span className="text-[#00C4CC]">Questions</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Find answers to common questions about our products and services
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <Card className="sticky top-24 border-[#1E90FF]/20">
              <CardHeader>
                <CardTitle className="text-[#0A2E57]">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <nav className="space-y-2">
                  {faqCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        const element = document.getElementById(category.id);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="w-full text-left px-4 py-3 rounded-lg transition-all duration-200 text-[#4A4A4A] hover:bg-[#E6F4FF] hover:text-[#0A2E57]"
                    >
                      {category.title}
                    </button>
                  ))}
                </nav>
                
                <div className="mt-8 pt-6 border-t border-[#1E90FF]/20">
                  <Button asChild variant="outline" className="w-full border-[#1E90FF] text-[#1E90FF] hover:bg-[#E6F4FF]">
                    <Link href="/contact" className="flex items-center justify-center gap-2">
                      Contact Support <ChevronRight size={16} />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Content */}
          <div className="lg:w-3/4">
            <Card className="border-[#1E90FF]/20">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none prose-headings:text-[#0A2E57] prose-p:text-[#4A4A4A] prose-strong:text-[#0A2E57]">
                  {faqCategories.map((category) => (
                    <section key={category.id} id={category.id} className="scroll-mt-24 pb-10">
                      <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
                      <div className="space-y-4">
                        {category.questions.map((item) => (
                          <div key={item.id} className="border border-[#1E90FF]/20 rounded-lg overflow-hidden">
                            <button
                              onClick={() => toggleItem(item.id)}
                              className="flex items-center justify-between w-full p-4 text-left bg-white hover:bg-[#F7FAFC] transition-colors"
                            >
                              <span className="font-medium text-[#0A2E57]">{item.question}</span>
                              {openItems[item.id] ? (
                                <Minus className="text-[#1E90FF] flex-shrink-0" size={20} />
                              ) : (
                                <Plus className="text-[#1E90FF] flex-shrink-0" size={20} />
                              )}
                            </button>
                            {openItems[item.id] && (
                              <div className="p-4 bg-[#F7FAFC] border-t border-[#1E90FF]/20">
                                <p className="text-[#4A4A4A]">{item.answer}</p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>

                {/* Support Section */}
                <div className="mt-12 p-6 bg-[#E6F4FF] rounded-lg">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-[#0A2E57]">Still have questions?</h3>
                      <p className="text-sm text-[#4A4A4A] mt-1">
                        Our support team is here to help you with any additional questions
                      </p>
                    </div>
                    <Button asChild className="bg-[#1E90FF] hover:bg-[#0A7AEA] text-white">
                      <Link href="/contact" className="flex items-center gap-2">
                        Contact Support <ArrowRight size={18} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#1E90FF] to-[#00C4CC] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">Need Personalized Assistance?</h3>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Our technical experts are ready to help you find the perfect cable solutions for your specific needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg" className="bg-white text-[#1E90FF] hover:bg-gray-100 px-8 py-6 text-lg rounded-full">
              <Link href="/contact" className="flex items-center gap-2">
                Contact Our Team <ArrowRight size={20} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full">
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
    </div>
  );
}
