import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#1e2f1b] text-on-primary border-t border-white/10">
      <div className="max-w-[1380px] mx-auto px-margin-mobile lg:px-margin pt-space-xl pb-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl pb-space-xl border-b border-white/10">
          
          {/* Column 1: Brand & Overview */}
          <div className="flex flex-col gap-space-md">
            <a className="flex items-center gap-space-sm" href="#hero">
              <img
                src="/logo.svg"
                alt="Prinalto Estates Logo"
                className="h-10 sm:h-11 w-auto object-contain filter brightness-0 invert"
              />
            </a>
            <p className="font-body-sm text-body-sm text-surface-variant/80 max-w-sm leading-relaxed">
              Premium plot opportunities in Karjat from 2,000 sq. ft. to 1 Acre. Ideal for private weekend homes, villa living, or long-term land investment.
            </p>
            <div className="pt-1">
              <span className="font-label-sm text-xs text-white/50 block uppercase tracking-wider mb-1">
                MahaRERA Registration Number
              </span>
              <span className="font-label-lg text-sm text-secondary-fixed font-mono font-semibold">
                P52000049812 | Prinalto Estates Phase I &amp; II
              </span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-title-md text-title-md text-white font-semibold mb-1">
              Quick Navigation
            </span>
            <div className="flex flex-col gap-2">
              <a className="font-body-sm text-body-sm text-surface-variant/80 hover:text-white transition-colors" href="#hero">
                Overview
              </a>
              <a className="font-body-sm text-body-sm text-surface-variant/80 hover:text-white transition-colors" href="#why-invest">
                Why Karjat
              </a>
              <a className="font-body-sm text-body-sm text-surface-variant/80 hover:text-white transition-colors" href="#plot-options">
                Plot Options
              </a>
              <a className="font-body-sm text-body-sm text-surface-variant/80 hover:text-white transition-colors" href="#lifestyle">
                The Karjat Lifestyle
              </a>
              <a className="font-body-sm text-body-sm text-surface-variant/80 hover:text-white transition-colors" href="#location">
                Location Advantage
              </a>
              <a className="font-body-sm text-body-sm text-surface-variant/80 hover:text-white transition-colors" href="#key-highlights">
                Key Highlights
              </a>
            </div>
          </div>

          {/* Column 3: Karjat Site Office */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-title-md text-title-md text-white font-semibold mb-1">
              Karjat Site Office
            </span>
            <p className="font-body-sm text-body-sm text-surface-variant/80 leading-relaxed">
              Prinalto Foothill Estates,<br />
              Off Karjat-Murbad Highway,<br />
              Village Posari, Karjat, Raigad,<br />
              Maharashtra - 410201
            </p>
            <a
              className="font-label-sm text-xs text-secondary-fixed hover:text-white transition-colors flex items-center gap-1 pt-1 font-medium"
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-sm">navigation</span>
              Open Directions &amp; Maps
            </a>
          </div>

          {/* Column 4: Plot Pricing & Details */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-title-md text-title-md text-white font-semibold mb-1">
              Plot Details
            </span>
            <div className="space-y-2 text-surface-variant/80 text-body-sm">
              <p className="flex justify-between border-b border-white/10 pb-1.5">
                <span>Plot Sizes:</span>
                <span className="text-white font-medium">2,000 sq. ft. – 1 Acre</span>
              </p>
              <p className="flex justify-between border-b border-white/10 pb-1.5">
                <span>Price Guide:</span>
                <span className="text-white font-medium">Starting ₹1 Cr+</span>
              </p>
              <p className="flex justify-between border-b border-white/10 pb-1.5">
                <span>Land Type:</span>
                <span className="text-white font-medium">NA &amp; Agri Options</span>
              </p>
              <p className="flex justify-between">
                <span>Community:</span>
                <span className="text-white font-medium">Gated Estate</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md text-white/50 font-body-sm text-xs">
          <p className="text-center sm:text-left">
            © 2026 Prinalto Estates. All rights reserved. RERA Registered Project.
          </p>
          <div className="flex items-center gap-space-lg">
            <a className="hover:text-white transition-colors" href="#hero">
              Privacy Policy
            </a>
            <a className="hover:text-white transition-colors" href="#hero">
              Legal Disclaimer
            </a>
            <a className="hover:text-white transition-colors" href="#hero">
              RERA Info
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

