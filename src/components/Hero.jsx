import React from 'react';

export default function Hero({ onOpenBookModal }) {
  return (
    <section className="relative w-full min-h-[92vh] -mt-20 pt-20 flex flex-col justify-end text-on-primary overflow-hidden" id="overview">
      <div className="absolute inset-0 z-0">
        <img
          alt="General Karajat Western Ghats Sanctuary"
          className="w-full h-full object-cover scale-105 animate-[pulse_10s_ease-in-out_infinite] duration-1000"
          src="/hero.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-primary/25 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/40 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-[1380px] w-full mx-auto px-margin-mobile lg:px-margin pb-space-xl pt-space-xl flex flex-col justify-end">
        {/* Main Catchy Title */}
        <div className="max-w-4xl space-y-space-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed/20 text-secondary-fixed border border-secondary-fixed/30 backdrop-blur-md text-xs uppercase tracking-widest font-semibold mb-2">
            ✨ General Karajat · Private Villa Plots
          </div>
          <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-surface-container-lowest tracking-tight font-display-lg leading-tight">
            Escape to Karajat.<br />
            <span className="italic font-normal text-secondary-fixed">Own Your Hillside Sanctuary at General.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-surface-container-highest/90 max-w-2xl font-light">
            Curated <strong className="text-white font-semibold">2,000 sq.ft to 1 Acre</strong> Gated Villa Plots with <strong className="text-secondary-fixed font-semibold">Private Pool for Every Villa</strong>. Collector NA & Agriculture sanctioned land equity with lifetime hospitality & assured rental returns.
          </p>
        </div>

        {/* Action Cluster */}
        <div className="flex flex-wrap items-center gap-space-md pt-space-lg">
          <button
            onClick={onOpenBookModal}
            className="inline-flex items-center gap-space-sm bg-tertiary-container hover:bg-tertiary text-on-tertiary font-label-lg text-label-lg px-space-lg py-space-md rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer font-semibold"
          >
            <span className="material-symbols-outlined text-title-lg">calendar_month</span>
            Schedule Private Site Tour
          </button>
          <a
            className="inline-flex items-center gap-space-sm bg-surface-container-lowest/15 hover:bg-surface-container-lowest/25 text-surface-container-lowest backdrop-blur-md font-label-lg text-label-lg px-space-lg py-space-md rounded-lg transition-all duration-300 border border-white/20"
            href="#estate-gallery"
          >
            <span className="material-symbols-outlined text-title-lg">photo_library</span>
            Explore Masterplan & Gallery
          </a>
        </div>

        {/* Minimal Quick Stats Rail */}
        <div className="mt-space-xl pt-space-md grid grid-cols-2 md:grid-cols-4 gap-space-md bg-surface-container-lowest/10 backdrop-blur-md rounded-xl p-space-md border border-white/10">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-surface-variant/70">Plot Sizes</span>
            <span className="font-title-lg font-bold text-[22px] lg:text-[26px] text-surface-bright font-sans">2,000 sq ft - 1 Acre</span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-surface-variant/70">Plot Classification</span>
            <span className="font-title-lg font-bold text-[22px] lg:text-[26px] text-surface-bright font-sans">NA / Agriculture</span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-surface-variant/70">Investment Entry</span>
            <span className="font-title-lg font-bold text-[22px] lg:text-[26px] text-secondary-fixed font-sans">Starting ₹1 Cr+</span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-surface-variant/70">Villa Amenity</span>
            <span className="font-title-lg font-bold text-[22px] lg:text-[26px] text-surface-bright font-sans">Private Pool Included</span>
          </div>
        </div>
      </div>
    </section>
  );
}
