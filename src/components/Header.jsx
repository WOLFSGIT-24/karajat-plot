import React, { useState } from 'react';

export default function Header({ onOpenBookModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Masterplan', href: '#plot-masterplan' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Location', href: '#location-and-connectivity' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] transition-all">
      <div className="h-20 max-w-[1380px] mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-xl">
          <a className="flex items-center gap-space-xs sm:gap-space-sm" href="#overview">
            <span className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold">PRINALTO</span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant/80 pl-space-xs border-l border-on-surface-variant/20 ml-1">Karajat</span>
          </a>
          <nav className="hidden md:flex items-center gap-space-lg">
            {navLinks.map((link) => (
              <a
                key={link.label}
                className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors font-medium"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-space-md">
          {/* Single Primary CTA Button */}
          <button
            onClick={onOpenBookModal}
            className="bg-tertiary-container hover:bg-tertiary text-on-tertiary transition-colors font-label-lg text-label-lg px-space-lg py-space-sm rounded-lg shadow-sm font-semibold cursor-pointer whitespace-nowrap"
            type="button"
          >
            Book Site Visit
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-primary focus:outline-none"
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
        <div className="md:hidden bg-surface-container-lowest border-b border-surface-container-high px-margin-mobile py-4 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                onClick={() => setMobileMenuOpen(false)}
                className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary py-1 font-medium"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-surface-container-high flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBookModal(); }}
              className="w-full text-center bg-tertiary-container text-on-tertiary py-2.5 rounded-lg font-label-lg font-semibold"
            >
              Book Site Visit
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
