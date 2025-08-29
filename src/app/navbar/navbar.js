import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#1E90FF]/20 shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="Libra Cables Home"
          >
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-md bg-gradient-to-r from-[#1E90FF] to-[#00C4CC] flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 1a1 1 0 011 1v1a1 1 0 11-2 0V2a1 1 0 011-1zm4 7a3 3 0 11-6 0 3 3 0 016 0zm2.657 5.657a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 13.636a1 1 0 10-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM6 10a1 1 0 01-1 1H4a1 1 0 110-2h1a1 1 0 011 1zm2.293-7.707a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-display text-xl font-bold text-[#0A2E57] group-hover:text-[#1E90FF] transition-colors">
                Libra <span className="text-[#1E90FF]">Cables</span>
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium text-[#4A4A4A] hover:text-[#1E90FF] hover:bg-[#E6F4FF] transition-colors">Home</Link>
            <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium text-[#4A4A4A] hover:text-[#1E90FF] hover:bg-[#E6F4FF] transition-colors">About</Link>
            <Link href="/products" className="px-3 py-2 rounded-md text-sm font-medium text-[#4A4A4A] hover:text-[#1E90FF] hover:bg-[#E6F4FF] transition-colors">Products</Link>
            <Link href="/industries" className="px-3 py-2 rounded-md text-sm font-medium text-[#4A4A4A] hover:text-[#1E90FF] hover:bg-[#E6F4FF] transition-colors">Industries</Link>
            <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium text-[#4A4A4A] hover:text-[#1E90FF] hover:bg-[#E6F4FF] transition-colors">Contact</Link>
            <Link href="/quote" className="ml-4 px-4 py-2 rounded-md bg-gradient-to-r from-[#1E90FF] to-[#00C4CC] text-sm font-medium text-white shadow-sm hover:from-[#0A7AEA] hover:to-[#00B4B4] transition-all">Get Quote</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[#4A4A4A] hover:text-[#1E90FF] hover:bg-[#E6F4FF] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#1E90FF]"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        <div className="md:hidden hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-[#1E90FF]/20 shadow-lg">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-[#4A4A4A] hover:text-[#1E90FF] hover:bg-[#E6F4FF]">Home</Link>
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-[#4A4A4A] hover:text-[#1E90FF] hover:bg-[#E6F4FF]">About</Link>
            <Link href="/products" className="block px-3 py-2 rounded-md text-base font-medium text-[#4A4A4A] hover:text-[#1E90FF] hover:bg-[#E6F4FF]">Products</Link>
            <Link href="/industries" className="block px-3 py-2 rounded-md text-base font-medium text-[#4A4A4A] hover:text-[#1E90FF] hover:bg-[#E6F4FF]">Industries</Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-[#4A4A4A] hover:text-[#1E90FF] hover:bg-[#E6F4FF]">Contact</Link>
            <Link href="/quote" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gradient-to-r from-[#1E90FF] to-[#00C4CC] hover:from-[#0A7AEA] hover:to-[#00B4B4] mt-2">Get Quote</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}