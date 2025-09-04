"use client";
import { Button } from "@/components/ui/button";
import { Download, ChevronRight } from "lucide-react";

export default function DownloadCatalogButton({ variant = "cta" }) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/catalog.pdf";
    link.download = "Libra-Cable-Catalog.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  if (variant === "product") {
    return (
      <Button 
        onClick={handleDownload}
        variant="outline" 
        className="w-full border-[#1E90FF] text-[#1E90FF] hover:bg-[#1E90FF] hover:text-white rounded-full group/btn h-12 transition-all duration-300"
      >
        <Download size={18} className="mr-2" />
        Download Brochure
        <ChevronRight size={18} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
      </Button>
    );
  }

  return (
    <Button 
      onClick={handleDownload}
      variant="default" 
      size="lg" 
      className="bg-[#1E90FF] hover:bg-[#0A7AEA] text-white px-8 py-6 text-lg rounded-full transition-colors flex items-center gap-2"
    >
      <Download size={20} />
      Download Catalog
    </Button>
  );
}
