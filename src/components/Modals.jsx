import React, { useState } from 'react';

export function BrochureModal({ isOpen, onClose, onShowToast }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      onShowToast('Please fill all fields to receive the master brochure.', 'error');
      return;
    }
    onShowToast(`Thank you ${name}! The Master E-Brochure & Price Sheet has been dispatched to ${email}.`, 'success');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-surface-container-lowest rounded-2xl max-w-lg w-full p-6 shadow-2xl relative border border-surface-container-high">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-title-lg">close</span>
        </button>

        <div className="mb-4">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
            Official E-Brochure
          </span>
          <h3 className="font-headline-md text-headline-md text-primary mt-1">
            Download Prinalto Master Lookbook
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            Includes high-resolution contour maps, 7/12 title guarantees, and complete price schedule.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="font-label-sm text-label-sm uppercase text-on-surface-variant block mb-1">
              Full Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-surface-container-low px-3 py-2 rounded-lg font-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary border border-surface-container-high"
              placeholder="e.g. Ananya Sharma"
              type="text"
              required
            />
          </div>
          <div>
            <label className="font-label-sm text-label-sm uppercase text-on-surface-variant block mb-1">
              Email Address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-surface-container-low px-3 py-2 rounded-lg font-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary border border-surface-container-high"
              placeholder="ananya@example.com"
              type="email"
              required
            />
          </div>
          <div>
            <label className="font-label-sm text-label-sm uppercase text-on-surface-variant block mb-1">
              Phone Number
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-surface-container-low px-3 py-2 rounded-lg font-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary border border-surface-container-high"
              placeholder="+91 98200 00000"
              type="tel"
              required
            />
          </div>

          <button
            className="w-full bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg py-3 rounded-lg shadow-md transition-colors mt-2 cursor-pointer font-semibold flex items-center justify-center gap-2"
            type="submit"
          >
            <span className="material-symbols-outlined text-title-md">picture_as_pdf</span>
            Get Instant Brochure PDF
          </button>
        </form>
      </div>
    </div>
  );
}

export function DossierModal({ isOpen, onClose, plan, onShowToast }) {
  if (!isOpen || !plan) return null;

  const handleDownload = () => {
    onShowToast(`Downloading architectural dossier PDF for ${plan.name}...`, 'success');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/80 backdrop-blur-sm">
      <div className="bg-surface-container-lowest rounded-2xl max-w-md w-full p-6 shadow-2xl relative border border-surface-container-high">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-title-md">close</span>
        </button>

        <div className="flex items-center gap-2 text-secondary mb-2">
          <span className="material-symbols-outlined text-title-md">architecture</span>
          <span className="font-label-sm text-label-sm uppercase font-semibold">Architectural CAD</span>
        </div>

        <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
          {plan.name} Dossier
        </h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
          Complete structural drawings, elevation renders, and material specifications for {plan.tabLabel}.
        </p>

        <div className="bg-surface-container-low p-3 rounded-lg space-y-2 mb-4 text-xs">
          <div className="flex justify-between border-b border-surface-container-high pb-1">
            <span className="text-on-surface-variant">Revision:</span>
            <span className="font-mono text-primary font-semibold">{plan.cadRef}</span>
          </div>
          <div className="flex justify-between border-b border-surface-container-high pb-1">
            <span className="text-on-surface-variant">Document Size:</span>
            <span className="font-mono text-primary font-semibold">14.2 MB (Vector PDF)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-on-surface-variant">Status:</span>
            <span className="text-secondary font-semibold">Pre-Sanctioned & RERA Verified</span>
          </div>
        </div>

        <button
          onClick={handleDownload}
          className="w-full bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg py-3 rounded-lg shadow-md transition-colors font-semibold flex items-center justify-center gap-2 cursor-pointer"
        >
          <span className="material-symbols-outlined text-title-md">file_download</span>
          Download PDF Specification Package
        </button>
      </div>
    </div>
  );
}

export function ImageLightboxModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/95 backdrop-blur-md">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-surface-bright hover:text-secondary-fixed transition-colors cursor-pointer z-10"
      >
        <span className="material-symbols-outlined text-headline-lg">close</span>
      </button>

      <div className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
        <img
          alt={item.title}
          className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl border border-white/10"
          src={item.image}
        />
        <div className="mt-4 text-center text-surface-bright">
          <span className="px-3 py-1 rounded-full bg-surface-container-lowest/20 backdrop-blur-md font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed font-semibold">
            {item.tag}
          </span>
          <h3 className="font-headline-md text-headline-md text-surface-container-lowest mt-2">
            {item.title}
          </h3>
          <p className="font-body-sm text-body-sm text-surface-variant/80 max-w-xl mx-auto mt-1">
            {item.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ToastNotification({ toast }) {
  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md bg-primary text-on-primary px-5 py-4 rounded-xl shadow-2xl border border-secondary-fixed/30 flex items-start gap-3 animate-slide-up">
      <span className={`material-symbols-outlined text-title-lg ${toast.type === 'error' ? 'text-error-container' : 'text-secondary-fixed'}`}>
        {toast.type === 'error' ? 'error' : 'check_circle'}
      </span>
      <p className="font-body-sm text-body-sm text-surface-container-lowest leading-relaxed">
        {toast.message}
      </p>
    </div>
  );
}
