import React from 'react';

export default function Amenities() {
  const amenitiesList = [
    {
      icon: 'pool',
      title: '40m Horizon Infinity Pool',
      description: 'Temperature-balanced Olympic-grade edge lap pool gazing directly out over the Posari waterfalls and riverbed.',
      status: 'Phase I Ready',
    },
    {
      icon: 'agriculture',
      title: 'Organic Agro & Orchards',
      description: 'Fully tended Ratnagiri Alphonso groves, spice gardens, and farm-to-table vegetable plots managed by resident agronomists.',
      status: 'Active Harvest',
    },
    {
      icon: 'self_improvement',
      title: 'Forest Yoga Pavilion',
      description: 'Cantilevered teakwood deck immersed in dense bamboo clusters for sunrise mindfulness, sound-baths, and meditation.',
      status: 'Open Air',
    },
    {
      icon: 'sports_tennis',
      title: 'Floodlit Tennis & Pickleball',
      description: 'Professional cushioned-acrylic multi-sport courts equipped with tournament lighting and players lounge.',
      status: 'Championship Spec',
    },
    {
      icon: 'qr_code_2',
      title: 'Dark-Sky Observatory',
      description: 'Unblemished Bortle-4 Karajat night skies paired with an astronomical telescope dome for stargazing evenings.',
      status: 'High Elevation Deck',
    },
    {
      icon: 'concierge',
      title: 'Managed Rental Concierge',
      description: 'Turnkey holiday rental management allowing effortless yields of 9-12% p.a. through luxury villa hospitality operators.',
      status: 'Passive Income Desk',
    },
  ];

  return (
    <section className="w-full py-space-xl bg-surface" id="amenities">
      <div className="max-w-[1380px] mx-auto px-margin-mobile lg:px-margin">
        {/* Headline & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-space-xs font-semibold">
              Bespoke Club Infrastructure
            </span>
            <h2 className="font-display-md text-display-md-mobile lg:text-display-md text-primary tracking-tight">
              Resort Living, Daily
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Zero-maintenance community upkeep handled by five-star hospitality operators, ensuring turn-key leisure whenever you return home.
          </p>
        </div>

        {/* Spotlight Feature Card */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-lg mb-gutter bg-primary min-h-[380px] lg:min-h-[460px] flex items-end">
          <img
            alt="Clubhouse with Horizon Pool"
            className="absolute inset-0 w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBryz8imGvp9STK9q0QNF8xD7M6p2h7mLZUw2OlWdx_IU7q_FPM1VjSkSvnLHTJLGwrBvyKjthoIMvBq0e19lBcv5O_ihPyt4TP-J7La8sekwoUD6LTzZvgQqB6vmPNAtxRXorridMXCG6y72pkeVhkDaSITTCgAO6xYnSqSDzmIJ3XVYbvK_KlmWd8HcKtfybqfKY6gL4LoN0wIM3sE14ThGo6IwCvwbGxuxZWZ5bA5SOEaFuB5XZo"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent"></div>
          <div className="relative z-10 p-space-md lg:p-space-xl max-w-3xl">
            <span className="px-space-md py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider mb-space-sm inline-block font-semibold">
              Flagship Facility
            </span>
            <h3 className="font-display-md text-display-md-mobile lg:text-display-md text-surface-container-lowest font-semibold">
              The Valley Clubhouse
            </h3>
            <p className="font-body-lg text-body-lg text-surface-container-highest/90 mt-space-xs">
              35,000 sq.ft of elevated wellness facilities including a heated 40m horizon edge pool, private dining cabanas, library salon, and Ayurvedic steam spa.
            </p>
          </div>
        </div>

        {/* 6-Part Clean Amenity Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {amenitiesList.map((amenity, idx) => (
            <div
              key={idx}
              className="p-space-lg rounded-xl bg-surface-container-low hover:bg-surface-container-lowest shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-space-sm">
                <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-headline-sm">{amenity.icon}</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-primary">{amenity.title}</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {amenity.description}
                </p>
              </div>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary pt-space-md font-semibold">
                {amenity.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
