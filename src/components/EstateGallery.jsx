import React, { useState } from 'react';

export default function EstateGallery({ onSelectImage }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const galleryItems = [
    {
      id: 1,
      category: 'landscape',
      tag: 'Panoramic Valley',
      title: 'Misty Western Ghats Ridge Line',
      subtitle: 'Perpetual morning fog roll over terraced estate topography',
      image: 'https://lh3.googleusercontent.com/aida/AEtjO1XDr7njAm5liTFIaSJNFUH9x49KlN0ZlbzkwFpZcFYuvvTBpYFZmdtL5nF078NokSqHt529gVbIMWjD7CPCfNMNd9EDeWoEPYSi2HHu2WSnomrmeAc8wVSySK0A05PkBFubKqJCQExIn0nL4zBoOSm_DfcQx4djTSGANYv7P90QzH4AyQt5aY7nYQ2H-H8RCyX2ky9TjSsS2Wm00i2dakGt36zEdgEEPjlg9ehDpwDG0rG5m8VxdgJ4_t8',
      span: 'md:col-span-8',
      minHeight: 'min-h-[420px] lg:min-h-[500px]',
    },
    {
      id: 2,
      category: 'masterplan',
      tag: 'Master Layout',
      title: 'Concentric Plot Enclaves',
      subtitle: 'RERA Sanctioned 84-Acre Sectoring',
      image: 'https://lh3.googleusercontent.com/aida/AEtjO1UiIY9wEIjlRlp7SiybfArPFzbJPcLRRuY0wSMoSz0PTicqcY1D0tyduhBGqLLBfKtvZkLEqpcdgR9L_S5osc0rDuBUzVaQ5zbJ1FVWL5vNXyIgIBnaFu0VNqNN1r183geO4U8frn_EcmjUHzfCmU7daYD61DzKHW__3PrQ2htdJdajV4o5uRFETXdUDBpooC_SecRQcHVYQVqswrVca56d3j7__xmrA-R-YLcno_Bw51ChiI0esocguIw',
      span: 'md:col-span-4',
      minHeight: 'min-h-[300px] lg:min-h-[500px]',
    },
    {
      id: 3,
      category: 'clubhouse',
      tag: 'Wellness Clubhouse',
      title: 'Horizon Edge Pool & Lounge',
      subtitle: '35,000 sq.ft private social pavilion set against twilight peaks',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBryz8imGvp9STK9q0QNF8xD7M6p2h7mLZUw2OlWdx_IU7q_FPM1VjSkSvnLHTJLGwrBvyKjthoIMvBq0e19lBcv5O_ihPyt4TP-J7La8sekwoUD6LTzZvgQqB6vmPNAtxRXorridMXCG6y72pkeVhkDaSITTCgAO6xYnSqSDzmIJ3XVYbvK_KlmWd8HcKtfybqfKY6gL4LoN0wIM3sE14ThGo6IwCvwbGxuxZWZ5bA5SOEaFuB5XZo',
      span: 'md:col-span-6',
      minHeight: 'min-h-[360px]',
    },
    {
      id: 4,
      category: 'orchards',
      tag: 'Agro Sanctuary',
      title: 'The Mango Grove Living Deck',
      subtitle: 'Private sundeck overlooking organic Alphonso plantations',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsygrpDg0lQxAx4gBxSEInzZNlAPmZNzz9s12Hkl2jeWSTA3P8STRBr-nyFtU-iTjwDbKpne-tcpHZXA3Nsu4WfHSK0JhimpRumQSeo5gt5cWjKJy1HwNawX0JG1LQyVPaEf3wZIOEtxNcOLK5gnrfGH8PeRt-EQpTIaQECZGMEanGck_0eIIHbfDBznLR2V7rmcoXzyF_ucPWfSECdeI1zRP4xp_rTVCMV2a1Z_z0-XNGnbKoezG9',
      span: 'md:col-span-6',
      minHeight: 'min-h-[360px]',
    },
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const categories = [
    { key: 'all', label: 'All Vignettes' },
    { key: 'landscape', label: 'Landscape' },
    { key: 'masterplan', label: 'Masterplan' },
    { key: 'clubhouse', label: 'Clubhouse' },
    { key: 'orchards', label: 'Orchards' },
  ];

  return (
    <section className="w-full py-space-xl bg-surface" id="estate-gallery">
      <div className="max-w-[1380px] mx-auto px-margin-mobile lg:px-margin">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-space-xs font-semibold">
              Visual Archives
            </span>
            <h2 className="font-display-md text-display-md-mobile lg:text-display-md text-primary tracking-tight">
              The Estate in Pictures
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-space-xs p-1 bg-surface-container-low rounded-lg self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`font-label-md text-label-md px-space-md py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.key
                    ? 'bg-surface-container-lowest text-primary shadow-sm font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
                type="button"
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Visual Masonry */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-stretch">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectImage(item)}
              className={`group relative rounded-xl overflow-hidden shadow-sm bg-surface-container cursor-pointer ${item.span} ${item.minHeight}`}
            >
              <img
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={item.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
              <div className="absolute top-space-md left-space-md">
                <span className="px-space-md py-1 rounded-full bg-surface-container-lowest/80 backdrop-blur-md font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold">
                  {item.tag}
                </span>
              </div>
              <div className="absolute bottom-space-md left-space-md right-space-md flex justify-between items-end">
                <div>
                  <p className="font-headline-sm text-headline-sm text-surface-container-lowest">
                    {item.title}
                  </p>
                  <p className="font-body-sm text-body-sm text-surface-variant/80">
                    {item.subtitle}
                  </p>
                </div>
                <span className="material-symbols-outlined text-surface-container-lowest opacity-0 group-hover:opacity-100 transition-opacity">
                  fullscreen
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Bar */}
        <div className="flex items-center justify-between pt-space-lg">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Showing {filteredItems.length} verified photographic surveys · Western Ghats High-Elevation Ridge
          </p>
          <button
            onClick={() => onSelectImage(galleryItems[0])}
            className="inline-flex items-center gap-space-xs font-label-lg text-label-lg text-primary hover:text-secondary font-semibold transition-colors cursor-pointer"
            type="button"
          >
            View Complete Lookbook
            <span className="material-symbols-outlined text-title-md">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
}
