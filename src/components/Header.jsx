import React, { useState } from 'react';

export default function Header({ onOpenBookModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'Why Karjat', href: '#why-invest' },
    { label: 'Plot Options', href: '#plot-options' },
    { label: 'Lifestyle', href: '#lifestyle' },
    { label: 'Location', href: '#location' },
    { label: 'Highlights & Pricing', href: '#key-highlights' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md text-white border-b border-white/10 transition-all">
      <div className="h-20 max-w-[1380px] mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-xl">
          <a className="flex items-center gap-space-xs sm:gap-space-sm" href="#hero">
            <span className="font-headline-sm text-headline-sm text-white tracking-tight font-bold">GENERAL</span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-white/80 pl-space-xs border-l border-white/30 ml-1">Karjat</span>
          </a>
          <nav className="hidden md:flex items-center gap-space-sm lg:gap-space-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                className="font-label-lg text-label-lg text-white/80 hover:text-white transition-colors font-medium whitespace-nowrap"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-space-md">
          <button
            onClick={onOpenBookModal}
            className="bg-[#557A46] hover:bg-[#3e5c32] text-white transition-all font-label-lg text-label-lg px-6 py-2.5 rounded-xl shadow-md font-semibold cursor-pointer whitespace-nowrap"
            type="button"
          >
            Enquire Now
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-headline-sm">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primary/95 text-white border-b border-white/10 px-margin-mobile py-4 space-y-3 shadow-xl backdrop-blur-xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                onClick={() => setMobileMenuOpen(false)}
                className="font-label-lg text-label-lg text-white/80 hover:text-white py-1 font-medium"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-white/20 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBookModal(); }}
              className="w-full text-center bg-[#557A46] text-white py-2.5 rounded-xl font-label-lg font-semibold"
            >
              Enquire Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
