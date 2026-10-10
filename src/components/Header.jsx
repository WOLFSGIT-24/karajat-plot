import React, { useState, useEffect } from 'react';

export default function Header({ onOpenBookModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'Why Karjat', href: '#why-invest' },
    { label: 'Plot Options', href: '#plot-options' },
    { label: 'Lifestyle', href: '#lifestyle' },
    { label: 'Location', href: '#location' },
    { label: 'Highlights & Pricing', href: '#key-highlights' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/85 backdrop-blur-lg py-3 border-b border-white/10 shadow-2xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-[1380px] mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-space-md">
        
        {/* Left: Brand Logo */}
        <a className="flex items-center gap-3 group" href="#hero">
          <img
            src="/logo.svg"
            alt="Prinalto Estates Logo"
            className="h-9 sm:h-10 w-auto object-contain filter brightness-0 invert transition-opacity group-hover:opacity-90"
          />
        </a>

        {/* Center / Right: Nav Links + Enquire Button */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                className="text-sm text-white/90 hover:text-white transition-colors font-medium tracking-wide whitespace-nowrap drop-shadow-sm"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Far Right Green Pill Button */}
          <button
            onClick={onOpenBookModal}
            className="bg-[#557A46] hover:bg-[#3b5730] text-white transition-all font-medium text-sm px-6 py-2.5 rounded-xl shadow-md cursor-pointer whitespace-nowrap"
            type="button"
          >
            Enquire Now
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={onOpenBookModal}
            className="bg-[#557A46] text-white font-medium text-xs px-4 py-2 rounded-lg"
            type="button"
          >
            Enquire
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 text-white border-b border-white/10 px-margin-mobile py-4 space-y-3 shadow-xl backdrop-blur-xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-white/80 hover:text-white py-1 font-medium"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-white/20 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBookModal(); }}
              className="w-full text-center bg-[#557A46] text-white py-2.5 rounded-xl font-medium text-sm"
            >
              Enquire Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
