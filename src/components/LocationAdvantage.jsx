import React, { useState } from 'react';

export default function LocationAdvantage({ onOpenBookModal }) {
  const [activeTab, setActiveTab] = useState('picnic');

  const categories = {
    picnic: {
      title: 'Picnic & Nature',
      icon: 'waterfall_chart',
      places: [
        'Palasdari Waterfalls',
        'Bhilvale Dam',
        'Morbe Dam',
        'Kalote Waterfalls',
        'Ulhas River',
        'Bhivpuri Waterfall',
        'Matheran',
      ],
    },
    leisure: {
      title: 'Leisure',
      icon: 'restaurant',
      places: [
        'Saltt Restaurant & Bar',
        'Coco Café',
        'Namak Restaurant',
        'Q Lounge',
        'Palms at Radisson Blu',
      ],
    },
    adventure: {
      title: 'Adventure & Trekking',
      icon: 'hiking',
      places: [
        'Songiri Fort',
        'Bekare Waterfall',
        'Sondai Fort',
        'Kalote-Mokashi Hill Range',
        'Imagicaa',
        'River Rafting on Pej',
        'Garbett Plateau',
        'Peb Fort',
        'Karnala Sanctuary',
      ],
    },
    experiences: {
      title: 'Unique Experiences',
      icon: 'explore',
      places: [
        'N.D. Studio',
        'Monteria Village',
        'Bhairoba Caves',
        'Kondana Buddhist Caves',
      ],
    },
    essentials: {
      title: 'Essentials',
      icon: 'local_hospital',
      places: [
        'Sukham Hospital',
        'Phadke Hospital',
        'Rushabh Supermarket',
        'D-Mart',
      ],
    },
  };

  return (
    <section className="w-full py-space-xl bg-surface" id="location">
      <div className="max-w-[1380px] mx-auto px-margin-mobile lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-space-xs font-semibold">
              Section 5 — Location Advantage
            </span>
            <h2 className="font-display-md text-display-md-mobile lg:text-display-md text-primary tracking-tight">
              Everything Around You
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Everything you need for leisure, adventure, dining, and daily living within quick driving distance.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-space-xs p-1.5 bg-surface-container-low rounded-xl shadow-sm mb-space-lg overflow-x-auto max-w-full">
          {Object.keys(categories).map((key) => {
            const cat = categories[key];
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 font-label-md text-label-md px-space-md py-2.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-primary text-on-primary shadow-sm font-semibold'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
                type="button"
              >
                <span className="material-symbols-outlined text-title-md">{cat.icon}</span>
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md mb-space-lg">
          {categories[activeTab].places.map((placeName, idx) => (
            <div
              key={idx}
              className="bg-surface-container-low hover:bg-surface-container-lowest p-space-md rounded-xl border border-surface-container-high shadow-sm hover:shadow-md transition-all flex items-center gap-space-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary flex-shrink-0">
                <span className="material-symbols-outlined text-title-md">place</span>
              </div>
              <span className="font-title-md text-title-md text-primary font-semibold">
                {placeName}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-space-xs">
          <button
            onClick={onOpenBookModal}
            className="inline-flex items-center gap-space-xs bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg px-space-xl py-space-md rounded-lg shadow-md transition-colors cursor-pointer font-semibold"
            type="button"
          >
            Explore Karjat
            <span className="material-symbols-outlined text-title-md">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
}
