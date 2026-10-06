import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-on-primary">
      <div className="max-w-[1380px] mx-auto px-margin-mobile lg:px-margin pt-space-xl pb-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-gutter pb-space-xl border-b border-primary-container">
          <div className="lg:col-span-2 flex flex-col gap-space-md pr-space-md">
            <div className="flex items-center gap-space-sm">
              <span className="font-headline-md text-headline-md text-surface-container-lowest tracking-tight font-bold">
                GENERAL
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed-dim pl-space-xs border-l border-primary-container ml-1">
                Karajat Villa Plots
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-surface-variant/80 max-w-md">
              Institutional-grade 2,000 sq.ft to 1 Acre hillside villa plots in Karajat. Featuring private pool for every villa, gated community security, and assured rental returns.
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
              Quick Navigation
            </span>
            <div className="flex flex-col gap-space-xs">
              <a className="font-body-sm text-body-sm text-surface-variant/80 hover:text-on-primary transition-colors" href="#overview">
                Overview
              </a>
              <a className="font-body-sm text-body-sm text-surface-variant/80 hover:text-on-primary transition-colors" href="#plot-masterplan">
                Plot Masterplan (2k-1 Acre)
              </a>
              <a className="font-body-sm text-body-sm text-surface-variant/80 hover:text-on-primary transition-colors" href="#amenities">
                Private Pool & Amenities
              </a>
              <a className="font-body-sm text-body-sm text-surface-variant/80 hover:text-on-primary transition-colors" href="#nearby-places">
                Curated Neighborhood
              </a>
              <a className="font-body-sm text-body-sm text-surface-variant/80 hover:text-on-primary transition-colors" href="#payment-options">
                Payment Options (CLP / Subvention)
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-space-sm">
            <span className="font-title-md text-title-md text-surface-container-lowest font-semibold">
              Investor Resources
            </span>
            <div className="flex flex-col gap-space-xs">
              <a className="font-body-sm text-body-sm text-surface-variant/80 hover:text-on-primary transition-colors" href="#payment-options">
                Subvention & CLP Offers
              </a>
              <a className="font-body-sm text-body-sm text-surface-variant/80 hover:text-on-primary transition-colors" href="#overview">
                NA / Agro Title Guarantees
              </a>
              <a className="font-body-sm text-body-sm text-surface-variant/80 hover:text-on-primary transition-colors" href="#amenities">
                Assured Rental Program
              </a>
              <a className="font-body-sm text-body-sm text-surface-variant/80 hover:text-on-primary transition-colors" href="#book-tour">
                On-Spot Booking Discounts
              </a>
              <a className="font-body-sm text-body-sm text-surface-variant/80 hover:text-on-primary transition-colors" href="#book-tour">
                Private Advisory Desk
              </a>
            </div>
          </div>
        </div>

        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md text-surface-variant/60 font-body-sm text-body-sm">
          <p className="text-center md:text-left">
            © 2025 General Realty LLP. All rights reserved. Registered under Real Estate (Regulation and Development) Act.
          </p>
          <div className="flex items-center gap-space-lg">
            <a className="hover:text-on-primary transition-colors" href="#overview">
              Privacy Policy
            </a>
            <a className="hover:text-on-primary transition-colors" href="#overview">
              Legal Disclaimers
            </a>
            <a className="hover:text-on-primary transition-colors" href="#overview">
              RERA Certification
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
