"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, ChevronRight } from "lucide-react";

export default function DownloadCatalogButton({ variant = "cta" }) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadCatalog = async () => {
    setIsDownloading(true);
    
    try {
      // Method 1: Try direct download first
      const link = document.createElement('a');
      link.href = '/catalog.pdf';
      link.download = 'Libra-Cables-Catalog.pdf';
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // If that doesn't work, try opening in new tab
      setTimeout(() => {
        window.open('/catalog.pdf', '_blank');
      }, 100);
      
    } catch (error) {
      console.error('Download error:', error);
      // Fallback: Open in new tab
      window.open('/catalog.pdf', '_blank');
    }
    
    // Reset downloading state after a short delay
    setTimeout(() => setIsDownloading(false), 1500);
  };

  if (variant === "product") {
    return (
      <Button 
        onClick={handleDownloadCatalog}
        disabled={isDownloading}
        variant="outline" 
        className="w-full border-[#1E90FF] text-[#1E90FF] hover:bg-[#E6F4FF] group/btn h-12"
      >
        {isDownloading ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#1E90FF] mr-2"></div>
            Downloading...
          </>
        ) : (
          <>
            <Download size={18} className="mr-2" />
            Download Brochure
            <ChevronRight size={18} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
          </>
        )}
      </Button>
    );
  }

  return (
    <Button 
      onClick={handleDownloadCatalog}
      disabled={isDownloading}
      variant="outline" 
      size="lg" 
      className="bg-[#1E90FF] hover:bg-[#0A7AEA] text-white px-8 py-6 text-lg rounded-full transition-colors flex items-center gap-2"
    >
      {isDownloading ? (
        <>
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          Downloading...
        </>
      ) : (
        <>
          <Download size={20} />
          Download Catalog
        </>
      )}
    </Button>
  );
}
