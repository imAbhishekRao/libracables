"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, ArrowRight, Download, Shield } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("introduction");

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "introduction";
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - 100 && 
            window.scrollY < sectionTop + sectionHeight - 100) {
          currentSection = section.id;
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "data-collection", title: "Data Collection" },
    { id: "data-usage", title: "Data Usage" },
    { id: "data-protection", title: "Data Protection" },
    { id: "cookies", title: "Cookies" },
    { id: "user-rights", title: "Your Rights" },
    { id: "third-party", title: "Third-Party Services" },
    { id: "policy-changes", title: "Policy Changes" },
    { id: "contact", title: "Contact Us" },
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
              <Shield className="text-[#1E90FF]" size={32} />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy <span className="text-[#00C4CC]">Policy</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Learn how we collect, use, and protect your personal information
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
                    <Link href="/terms-conditions" className="flex items-center justify-center gap-2">
                      Terms & Conditions <ChevronRight size={16} />
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
                      Welcome to Libra Cables. We are committed to protecting your privacy and ensuring the security of your personal information. 
                      This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase from us.
                    </p>
                    <p>
                      Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                    </p>
                  </section>

                  {/* Data Collection */}
                  <section id="data-collection" className="scroll-mt-24 pt-12">
                    <h2>2. Data Collection</h2>
                    <h3>2.1 Personal Information</h3>
                    <p>
                      We may collect personal information that you voluntarily provide to us when you register on our website, place an order, 
                      subscribe to our newsletter, or contact us with inquiries.
                    </p>
                    <p>
                      This information may include your name, email address, phone number, company name, billing address, shipping address, and payment information.
                    </p>
                    
                    <h3>2.2 Automatically Collected Information</h3>
                    <p>
                      When you visit our website, we automatically collect certain information about your device, including your IP address, browser type, 
                      operating system, referring URLs, pages visited, and time spent on those pages.
                    </p>
                  </section>

                  {/* Data Usage */}
                  <section id="data-usage" className="scroll-mt-24 pt-12">
                    <h2>3. Data Usage</h2>
                    <p>
                      We may use the information we collect for various purposes, including to:
                    </p>
                    <ul>
                      <li>Process and fulfill your orders</li>
                      <li>Communicate with you about your orders, products, services, and promotions</li>
                      <li>Provide customer support</li>
                      <li>Improve our website and product offerings</li>
                      <li>Personalize your experience on our website</li>
                      <li>Send you marketing communications (where you have consented)</li>
                      <li>Prevent fraudulent transactions and monitor against theft</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </section>

                  {/* Data Protection */}
                  <section id="data-protection" className="scroll-mt-24 pt-12">
                    <h2>4. Data Protection</h2>
                    <p>
                      We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. 
                      These measures include SSL encryption, secure servers, regular security assessments, and limited access to personal information on a need-to-know basis.
                    </p>
                    <p>
                      However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                    </p>
                  </section>

                  {/* Cookies */}
                  <section id="cookies" className="scroll-mt-24 pt-12">
                    <h2>5. Cookies</h2>
                    <p>
                      We use cookies and similar tracking technologies to track activity on our website and store certain information. 
                      Cookies are files with a small amount of data that may include an anonymous unique identifier.
                    </p>
                    
                    <h3>5.1 Types of Cookies We Use</h3>
                    <ul>
                      <li><strong>Essential Cookies:</strong> Necessary for the operation of our website</li>
                      <li><strong>Analytical/Performance Cookies:</strong> Allow us to recognize and count the number of visitors</li>
                      <li><strong>Functionality Cookies:</strong> Enable us to personalize content and remember your preferences</li>
                      <li><strong>Targeting Cookies:</strong> Record your visit to our website and the pages you visit</li>
                    </ul>
                    
                    <h3>5.2 Managing Cookies</h3>
                    <p>
                      You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
                      However, if you do not accept cookies, you may not be able to use some portions of our website.
                    </p>
                  </section>

                  {/* User Rights */}
                  <section id="user-rights" className="scroll-mt-24 pt-12">
                    <h2>6. Your Rights</h2>
                    <p>
                      Depending on your location, you may have the following rights regarding your personal information:
                    </p>
                    <ul>
                      <li><strong>Access:</strong> The right to request copies of your personal information</li>
                      <li><strong>Rectification:</strong> The right to request correction of inaccurate information</li>
                      <li><strong>Erasure:</strong> The right to request deletion of your personal information</li>
                      <li><strong>Restriction:</strong> The right to request the limiting of processing of your personal information</li>
                      <li><strong>Data Portability:</strong> The right to request the transfer of your data to another organization</li>
                      <li><strong>Objection:</strong> The right to object to processing of your personal information</li>
                    </ul>
                    <p>
                      To exercise any of these rights, please contact us using the details provided in the "Contact Us" section.
                    </p>
                  </section>

                  {/* Third-Party Services */}
                  <section id="third-party" className="scroll-mt-24 pt-12">
                    <h2>7. Third-Party Services</h2>
                    <p>
                      We may share your personal information with third-party service providers who perform services on our behalf, such as payment processing, shipping, and marketing. 
                      We require all third parties to respect the security of your personal information and to treat it in accordance with the law.
                    </p>
                    <p>
                      Our website may contain links to third-party websites. This Privacy Policy does not apply to those websites, and we encourage you to read their privacy policies.
                    </p>
                  </section>

                  {/* Policy Changes */}
                  <section id="policy-changes" className="scroll-mt-24 pt-12">
                    <h2>8. Policy Changes</h2>
                    <p>
                      We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                    </p>
                    <p>
                      You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                    </p>
                  </section>

                  {/* Contact Us */}
                  <section id="contact" className="scroll-mt-24 pt-12">
                    <h2>9. Contact Us</h2>
                    <p>
                      If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                    </p>
                    <p>
                      <strong>Libra Cables</strong><br />
                      Email: privacy@libracables.com<br />
                      Phone: +91 XXXXX XXXXX<br />
                      Address: Mohali, Punjab, India
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
                      <h3 className="font-semibold text-[#0A2E57]">Download Privacy Policy</h3>
                      <p className="text-sm text-[#4A4A4A] mt-1">
                        Save a copy of our Privacy Policy for your records
                      </p>
                    </div>
                    <Button asChild className="bg-[#1E90FF] hover:bg-[#0A7AEA] text-white">
                      <Link href="/docs/privacy-policy.pdf" className="flex items-center gap-2">
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
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">Questions About Your Privacy?</h3>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Our team is here to help clarify any aspects of our Privacy Policy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg" className="bg-white text-[#1E90FF] hover:bg-gray-100 px-8 py-6 text-lg rounded-full">
              <Link href="/contact" className="flex items-center gap-2">
                Contact Us <ArrowRight size={20} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full">
              <Link href="/terms-conditions" className="flex items-center gap-2">
                Terms & Conditions <ChevronRight size={20} />
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