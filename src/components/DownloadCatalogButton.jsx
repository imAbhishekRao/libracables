"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, ChevronRight } from "lucide-react";

export default function DownloadCatalogButton({ variant = "cta" }) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadCatalog = () => {
    setIsDownloading(true);
    
    // Create a temporary anchor element to trigger the download
    const link = document.createElement('a');
    link.href = '/libra cabel price list.pdf'; // Path to your PDF in the public folder
    link.download = 'Libra-Cables-Price-List.pdf'; // The filename for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
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
