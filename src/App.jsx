import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EstateGallery from './components/EstateGallery';
import BespokePlans from './components/BespokePlans';
import Amenities from './components/Amenities';
import WhyKarajat from './components/WhyKarajat';
import LocationConnectivity from './components/LocationConnectivity';
import BookTour from './components/BookTour';
import Footer from './components/Footer';
import { BrochureModal, DossierModal, ImageLightboxModal, ToastNotification } from './components/Modals';

export default function App() {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [selectedDossierPlan, setSelectedDossierPlan] = useState(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  const handleOpenBookModal = () => {
    const el = document.getElementById('book-tour');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      showToast('Scroll down to book your private site tour.', 'success');
    }
  };

  return (
    <div className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      <Header onOpenBookModal={handleOpenBookModal} />

      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          <Hero onOpenBookModal={handleOpenBookModal} />
          <EstateGallery onSelectImage={(item) => setSelectedGalleryItem(item)} />
          <BespokePlans onOpenDossierModal={(plan) => setSelectedDossierPlan(plan)} />
          <Amenities />
          <WhyKarajat />
          <LocationConnectivity />
          <BookTour onShowToast={showToast} />
        </div>
      </main>

      <Footer />

      {/* Interactive Overlay Dialogs */}
      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
        onShowToast={showToast}
      />
      <DossierModal
        isOpen={!!selectedDossierPlan}
        plan={selectedDossierPlan}
        onClose={() => setSelectedDossierPlan(null)}
        onShowToast={showToast}
      />
      <ImageLightboxModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
      />
      <ToastNotification toast={toast} />
    </div>
  );
}
