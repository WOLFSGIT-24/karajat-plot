import React from 'react';

export default function Hero({ onOpenBookModal }) {
  return (
    <section className="relative w-full min-h-[92vh] -mt-20 pt-20 flex flex-col justify-end text-on-primary overflow-hidden" id="overview">
      <div className="absolute inset-0 z-0">
        <img
          alt="Prinalto Karajat Western Ghats Sanctuary"
          className="w-full h-full object-cover scale-105 animate-[pulse_10s_ease-in-out_infinite] duration-1000"
          src="https://lh3.googleusercontent.com/aida/AEtjO1XDr7njAm5liTFIaSJNFUH9x49KlN0ZlbzkwFpZcFYuvvTBpYFZmdtL5nF078NokSqHt529gVbIMWjD7CPCfNMNd9EDeWoEPYSi2HHu2WSnomrmeAc8wVSySK0A05PkBFubKqJCQExIn0nL4zBoOSm_DfcQx4djTSGANYv7P90QzH4AyQt5aY7nYQ2H-H8RCyX2ky9TjSsS2Wm00i2dakGt36zEdgEEPjlg9ehDpwDG0rG5m8VxdgJ4_t8"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/45 to-primary/20 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/30 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-[1380px] w-full mx-auto px-margin-mobile lg:px-margin pb-space-xl pt-space-xl flex flex-col justify-end">
        {/* Main Catchy Title */}
        <div className="max-w-4xl space-y-space-sm">
          <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-surface-container-lowest tracking-tight font-display-lg leading-tight">
            Escape to Karajat.<br />
            <span className="italic font-normal text-secondary-fixed">Own Your Hillside Sanctuary.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-surface-container-highest/90 max-w-2xl font-light">
            Curated 0.25 to 1.5 Acre Gated Villa Plots nestled amidst the mist-clad Western Ghats foothills. Pre-certified, collector-sanctioned land equity for generations.
          </p>
        </div>
        {/* Action Cluster */}
        <div className="flex flex-wrap items-center gap-space-md pt-space-lg">
          <button
            onClick={onOpenBookModal}
            className="inline-flex items-center gap-space-sm bg-tertiary-container hover:bg-tertiary text-on-tertiary font-label-lg text-label-lg px-space-lg py-space-md rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
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
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-surface-variant/70">Master Development</span>
            <span className="font-title-lg font-bold text-[24px] lg:text-[28px] text-surface-bright font-sans">84 Acres</span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-surface-variant/70">Preserved Flora</span>
            <span className="font-title-lg font-bold text-[24px] lg:text-[28px] text-surface-bright font-sans">40% Open Space</span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-surface-variant/70">Immediate Acquisition</span>
            <span className="font-title-lg font-bold text-[24px] lg:text-[28px] text-secondary-fixed font-sans">Starting ₹45 Lakhs*</span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-surface-variant/70">Legal Guarantee</span>
            <span className="font-title-lg font-bold text-[24px] lg:text-[28px] text-surface-bright font-sans">Individual 7/12</span>
          </div>
        </div>
      </div>
    </section>
  );
}
