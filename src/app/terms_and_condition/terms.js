"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, ArrowRight, Download, FileText } from "lucide-react";
import Link from "next/link";

export default function TermsConditions() {
  const [activeSection, setActiveSection] = useState("introduction");

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "definitions", title: "Definitions" },
    { id: "orders-pricing", title: "Orders & Pricing" },
    { id: "payment-terms", title: "Payment Terms" },
    { id: "delivery", title: "Delivery" },
    { id: "warranty", title: "Warranty" },
    { id: "liability", title: "Liability" },
    { id: "intellectual-property", title: "Intellectual Property" },
    { id: "governing-law", title: "Governing Law" },
    { id: "changes", title: "Changes to Terms" },
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
              <FileText className="text-[#1E90FF]" size={32} />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Terms & <span className="text-[#00C4CC]">Conditions</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Please read these terms carefully before using our products or services
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
                <CardTitle className="text-[#0A2E57]">Sections</CardTitle>
              </CardHeader>
              <CardContent>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                        activeSection === section.id
                          ? "bg-[#1E90FF] text-white"
                          : "text-[#4A4A4A] hover:bg-[#E6F4FF]"
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
                
                <div className="mt-8 pt-6 border-t border-[#1E90FF]/20">
                  <Button asChild variant="outline" className="w-full border-[#1E90FF] text-[#1E90FF] hover:bg-[#E6F4FF]">
                    <Link href="/privacy-policy" className="flex items-center justify-center gap-2">
                      Privacy Policy <ChevronRight size={16} />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Content */}
          <div className="lg:w-3/4">
            <Card className="border-[#1E90FF]/20">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none prose-headings:text-[#0A2E57] prose-p:text-[#4A4A4A] prose-strong:text-[#0A2E57] prose-a:text-[#1E90FF] hover:prose-a:text-[#00C4CC]">
                  
                  {/* Introduction */}
                  <section id="introduction" className="scroll-mt-24">
                    <h2>1. Introduction</h2>
                    <p>
                      Welcome to Libra Cables. These Terms and Conditions govern your use of our website 
                      and the purchase of products from us. By accessing our website or placing an order, 
                      you agree to be bound by these terms and conditions.
                    </p>
                    <p>
                      Libra Cables (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the website www.libracables.com 
                      (the &quot;Site&quot;) and sells copper cables and related products (the &quot;Products&quot;).
                    </p>
                  </section>

                  {/* Definitions */}
                  <section id="definitions" className="scroll-mt-24 pt-12">
                    <h2>2. Definitions</h2>
                    <p>In these Terms and Conditions:</p>
                    <ul>
                      <li><strong>&quot;Customer&quot;</strong> means the person or entity purchasing Products from us.</li>
                      <li><strong>&quot;Order&quot;</strong> means a request by the Customer to purchase Products from us.</li>
                      <li><strong>&quot;Products&quot;</strong> means the copper cables and related items offered for sale on our Site.</li>
                      <li><strong>&quot;Site&quot;</strong> means our website at www.libracables.com.</li>
                      <li><strong>&quot;Writing&quot;</strong> includes email and other digital communications.</li>
                    </ul>
                  </section>

                  {/* Orders & Pricing */}
                  <section id="orders-pricing" className="scroll-mt-24 pt-12">
                    <h2>3. Orders & Pricing</h2>
                    <h3>3.1 Order Acceptance</h3>
                    <p>
                      All orders are subject to acceptance by us. We reserve the right to refuse any order 
                      without providing a reason. Order confirmation will be sent via email upon acceptance.
                    </p>
                    
                    <h3>3.2 Pricing</h3>
                    <p>
                      All prices are in Indian Rupees (₹) and exclude GST and other applicable taxes unless 
                      otherwise stated. Prices are subject to change without notice, but changes will not 
                      affect orders that have been confirmed.
                    </p>
                    
                    <h3>3.3 Product Information</h3>
                    <p>
                      We make every effort to ensure that product descriptions, specifications, and prices 
                      are accurate. However, minor variations may occur, and we reserve the right to correct 
                      any errors.
                    </p>
                  </section>

                  {/* Payment Terms */}
                  <section id="payment-terms" className="scroll-mt-24 pt-12">
                    <h2>4. Payment Terms</h2>
                    <h3>4.1 Payment Methods</h3>
                    <p>
                      We accept various payment methods including bank transfer, demand draft, and online 
                      payment gateways. Payment terms may vary based on the Customer&apos;s creditworthiness 
                      
                      and order history.
                    </p>
                    
                    <h3>4.2 Payment Schedule</h3>
                    <p>
                      For new customers, 100% advance payment may be required. For established customers, 
                      payment terms of 15-30 days from the date of invoice may be offered subject to 
                      credit approval.
                    </p>
                    
                    <h3>4.3 Late Payment</h3>
                    <p>
                      Interest may be charged on overdue accounts at the rate of 1.5% per month or the 
                      maximum rate permitted by law, whichever is lower.
                    </p>
                  </section>

                  {/* Delivery */}
                  <section id="delivery" className="scroll-mt-24 pt-12">
                    <h2>5. Delivery</h2>
                    <h3>5.1 Delivery Terms</h3>
                    <p>
                      Delivery times are estimates only and are not guaranteed. We are not liable for any 
                      delays in delivery caused by circumstances beyond our reasonable control.
                    </p>
                    
                    <h3>5.2 Shipping Costs</h3>
                    <p>
                      Shipping costs will be calculated based on the delivery location and order weight. 
                      These costs will be clearly displayed before order confirmation.
                    </p>
                    
                    <h3>5.3 Risk and Title</h3>
                    <p>
                      Risk of damage to or loss of the Products passes to the Customer upon delivery. 
                      Title to the Products passes to the Customer only when we receive full payment.
                    </p>
                  </section>

                  {/* Warranty */}
                  <section id="warranty" className="scroll-mt-24 pt-12">
                    <h2>6. Warranty</h2>
                    <h3>6.1 Product Warranty</h3>
                    <p>
                      We warrant that our Products will conform to their specifications and be free from 
                      defects in materials and workmanship for the period specified in the product documentation.
                    </p>
                    
                    <h3>6.2 Warranty Claims</h3>
                    <p>
                      To make a warranty claim, the Customer must notify us in writing within the warranty 
                      period, providing details of the alleged defect. We will, at our option, repair, 
                      replace, or refund the defective Products.
                    </p>
                    
                    <h3>6.3 Warranty Exclusions</h3>
                    <p>
                      This warranty does not cover defects caused by improper installation, misuse, 
                      neglect, accident, or unauthorized modifications to the Products.
                    </p>
                  </section>

                  {/* Liability */}
                  <section id="liability" className="scroll-mt-24 pt-12">
                    <h2>7. Liability</h2>
                    <h3>7.1 Limitation of Liability</h3>
                    <p>
                      Our total liability to the Customer for any claim arising out of or relating to 
                      these Terms or the Products shall not exceed the purchase price of the Products 
                      giving rise to the claim.
                    </p>
                    
                    <h3>7.2 Consequential Damages</h3>
                    <p>
                      We shall not be liable for any indirect, special, incidental, or consequential 
                      damages, including lost profits or business interruption, even if we have been 
                      advised of the possibility of such damages.
                    </p>
                    
                    <h3>7.3 Force Majeure</h3>
                    <p>
                      We are not liable for any failure or delay in performance due to circumstances 
                      beyond our reasonable control, including acts of God, war, terrorism, labor disputes, 
                      or supplier failures.
                    </p>
                  </section>

                  {/* Intellectual Property */}
                  <section id="intellectual-property" className="scroll-mt-24 pt-12">
                    <h2>8. Intellectual Property</h2>
                    <p>
                      All intellectual property rights in our Products, website, and marketing materials 
                      remain our property. The Customer does not acquire any rights to our trademarks, 
                      logos, or other intellectual property.
                    </p>
                  </section>

                  {/* Governing Law */}
                  <section id="governing-law" className="scroll-mt-24 pt-12">
                    <h2>9. Governing Law</h2>
                    <p>
                      These Terms and Conditions are governed by and construed in accordance with the 
                      laws of India. Any disputes shall be subject to the exclusive jurisdiction of 
                      the courts in Mohali, Punjab.
                    </p>
                  </section>

                  {/* Changes to Terms */}
                  <section id="changes" className="scroll-mt-24 pt-12">
                    <h2>10. Changes to Terms</h2>
                    <p>
                      We reserve the right to modify these Terms and Conditions at any time. The current 
                      version will always be available on our website. Continued use of our Products or 
                      services after changes constitutes acceptance of the modified terms.
                    </p>
                  </section>

                  {/* Last Updated */}
                  <div className="mt-12 pt-8 border-t border-[#1E90FF]/20">
                    <p className="text-sm text-[#4A4A4A]">
                      <strong>Last updated:</strong> August 27, 2025
                    </p>
                  </div>
                </div>

                {/* Download Section */}
                <div className="mt-12 p-6 bg-[#E6F4FF] rounded-lg">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-[#0A2E57]">Download Terms & Conditions</h3>
                      <p className="text-sm text-[#4A4A4A] mt-1">
                        Save a copy of our Terms and Conditions for your records
                      </p>
                    </div>
                    <Button asChild className="bg-[#1E90FF] hover:bg-[#0A7AEA] text-white">
                      <Link href="/docs/terms-and-conditions.pdf" className="flex items-center gap-2">
                        Download PDF <Download size={18} />
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
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">Questions About Our Terms?</h3>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Our team is here to help clarify any aspects of our Terms and Conditions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg" className="bg-white text-[#1E90FF] hover:bg-gray-100 px-8 py-6 text-lg rounded-full">
              <Link href="/contact" className="flex items-center gap-2">
                Contact Us <ArrowRight size={20} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full">
              <Link href="/privacy-policy" className="flex items-center gap-2">
                Privacy Policy <ChevronRight size={20} />
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
        
        /* Custom styling for the content */
        .prose h2 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #0A2E57;
        }
        
        .prose h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: #0A2E57;
        }
        
        .prose ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-top: 0.75rem;
          margin-bottom: 0.75rem;
        }
        
        .prose li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
}