import React from 'react';

export default function MobileFixedCTA({ onOpenBookModal }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-black/90 backdrop-blur-xl border-t border-white/15 px-4 py-3 shadow-[0_-8px_30px_rgba(0,0,0,0.35)] transition-all duration-300">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        {/* Left Button: Enquire Now */}
        <button
          onClick={onOpenBookModal}
          type="button"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-[#557A46] hover:bg-[#3b5730] text-white font-semibold text-sm py-3 px-4 rounded-xl shadow-lg active:scale-[0.98] transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg">mail</span>
          <span>Enquire Now</span>
        </button>

        {/* Right Button: Book Site Visit */}
        <button
          onClick={onOpenBookModal}
          type="button"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold text-sm py-3 px-4 rounded-xl backdrop-blur-md shadow-lg active:scale-[0.98] transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg">calendar_month</span>
          <span>Book Site Visit</span>
        </button>
      </div>
    </div>
  );
}
