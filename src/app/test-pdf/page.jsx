"use client";

export default function TestPDF() {
  const testDownload = () => {
    // Test direct access
    window.open('/catalog.pdf', '_blank');
  };

  const testDownloadWithLink = () => {
    const link = document.createElement('a');
    link.href = '/catalog.pdf';
    link.download = 'test-catalog.pdf';
    link.click();
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">PDF Download Test</h1>
      
      <div className="space-y-4">
        <button 
          onClick={testDownload}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-4"
        >
          Test 1: Open PDF in New Tab
        </button>
        
        <button 
          onClick={testDownloadWithLink}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Test 2: Download PDF
        </button>
        
        <div className="mt-4">
          <p>Direct link: <a href="/catalog.pdf" target="_blank" className="text-blue-500 underline">/catalog.pdf</a></p>
        </div>
      </div>
    </div>
  );
}

