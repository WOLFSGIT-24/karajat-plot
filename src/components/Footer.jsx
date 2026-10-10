import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-on-primary">
      <div className="max-w-[1380px] mx-auto px-margin-mobile lg:px-margin pt-space-xl pb-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-gutter pb-space-xl border-b border-primary-container">
          <div className="lg:col-span-2 flex flex-col gap-space-md pr-space-md">
            <a className="flex items-center gap-space-sm mb-1" href="#hero">
              <img
                src="/logo.svg"
                alt="Prinalto Estates Logo"
                className="h-10 sm:h-11 w-auto object-contain filter brightness-0 invert"
              />
            </a>
            <p className="font-body-sm text-body-sm text-surface-variant/80 max-w-md">
              Premium plot opportunities in Karjat from 2,000 sq. ft. to 1 Acre starting from ₹1 Cr+. Ideal for private weekend homes, villa living, or long-term land equity.
            </p>
            <div className="pt-space-xs">
              <span className="font-label-sm text-label-sm text-surface-variant/60 block uppercase tracking-wider">
                MahaRERA Registration Number
              </span>
              <span className="font-label-lg text-label-lg text-primary-fixed font-mono">
                P52000049812 | General Phase I & II
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-space-sm">
            <span className="font-title-md text-title-md text-surface-container-lowest font-semibold">
              Karajat Site Office
            </span>
            <p className="font-body-sm text-body-sm text-surface-variant/80 leading-relaxed">
              General Foothill Estates,<br />
              Off Karajat-Murbad Highway,<br />
              Village Posari, Karajat, Raigad,<br />
              Maharashtra - 410201
            </p>
            <a
              className="font-label-sm text-label-sm text-secondary-fixed hover:text-on-primary transition-colors flex items-center gap-space-xs pt-space-xs"
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-body-sm">navigation</span>
              Open Site Coordinates
            </a>
          </div>

          <div className="flex flex-col gap-space-sm">
            <span className="font-title-md text-title-md text-surface-container-lowest font-semibold">
              Section Directory
            </span>
            <div className="flex flex-col gap-space-xs">
              <a className="font-body-sm text-body-sm text-surface-variant/80 hover:text-on-primary transition-colors" href="#hero">
                1. Hero Banner
              </a>
              <a className="font-body-sm text-body-sm text-surface-variant/80 hover:text-on-primary transition-colors" href="#why-invest">
                2. Why Invest in Karjat
              </a>
              <a className="font-body-sm text-body-sm text-surface-variant/80 hover:text-on-primary transition-colors" href="#plot-options">
                3. Plot Options
              </a>
              <a className="font-body-sm text-body-sm text-surface-variant/80 hover:text-on-primary transition-colors" href="#lifestyle">
                4. The Karjat Lifestyle
              </a>
              <a className="font-body-sm text-body-sm text-surface-variant/80 hover:text-on-primary transition-colors" href="#location">
                5. Location Advantage
              </a>
              <a className="font-body-sm text-body-sm text-surface-variant/80 hover:text-on-primary transition-colors" href="#key-highlights">
                6. Key Highlights & Pricing
              </a>
              <a className="font-body-sm text-body-sm text-surface-variant/80 hover:text-on-primary transition-colors" href="#book-tour">
                7. Final CTA / Site Visit
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-space-sm">
            <span className="font-title-md text-title-md text-surface-container-lowest font-semibold">
              Investor Resources
            </span>
            <div className="flex flex-col gap-space-xs">
              <a className="font-body-sm text-body-sm text-surface-variant/80 hover:text-on-primary transition-colors" href="#key-highlights">
                CLP & Subvention Payment Plans
              </a>
              <a className="font-body-sm text-body-sm text-surface-variant/80 hover:text-on-primary transition-colors" href="#why-invest">
                Agro & NA Title Certifications
              </a>
              <a className="font-body-sm text-body-sm text-surface-variant/80 hover:text-on-primary transition-colors" href="#key-highlights">
                Assured Rental Program
              </a>
              <a className="font-body-sm text-body-sm text-surface-variant/80 hover:text-on-primary transition-colors" href="#book-tour">
                On-Spot Booking Offers
              </a>
            </div>
          </div>
        </div>

        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md text-surface-variant/60 font-body-sm text-body-sm">
          <p className="text-center md:text-left">
            © 2025 General Realty LLP. All rights reserved. Registered under Real Estate (Regulation and Development) Act.
          </p>
          <div className="flex items-center gap-space-lg">
            <a className="hover:text-on-primary transition-colors" href="#hero">
              Privacy Policy
            </a>
            <a className="hover:text-on-primary transition-colors" href="#hero">
              Legal Disclaimers
            </a>
            <a className="hover:text-on-primary transition-colors" href="#hero">
              RERA Certification
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
