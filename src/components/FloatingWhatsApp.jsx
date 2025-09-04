"use client";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

const FloatingWhatsApp = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Don't render on server to avoid hydration mismatch
  if (!isClient) {
    return null;
  }

  return (
    <a
      href="https://wa.me/917011574043"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Libra Cables on WhatsApp"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
        <MessageCircle size={24} />
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
