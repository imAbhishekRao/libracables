"use client";

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
      <button
        onClick={handleDownload}
        className="w-full border border-[#1E90FF] text-[#1E90FF] hover:bg-[#E6F4FF] px-4 py-3 rounded-md transition-colors"
      >
        Download Brochure
      </button>
    );
  }

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center rounded-md px-4 py-2 bg-black text-white"
    >
      Download catalog
    </button>
  );
}
