import React, { useState } from 'react';

export function BrochureModal({ isOpen, onClose, onShowToast }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleNameChange = (e) => {
    setName(e.target.value.replace(/[^a-zA-Z\s]/g, ''));
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value.replace(/[^0-9]/g, '').slice(0, 10));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || phone.length !== 10) {
      onShowToast('Please enter a valid name, email, and 10-digit phone number.', 'error');
      return;
    }
    onShowToast(`Thank you ${name}! The Master E-Brochure & Price Sheet has been dispatched to ${email}.`, 'success');
    setName('');
    setEmail('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-surface-container-lowest rounded-2xl max-w-lg w-full p-6 shadow-2xl relative border border-surface-container-high">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
          type="button"
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

        <form onSubmit={handleSubmit} className="space-y-3" noValidate>
          <div>
            <label className="font-label-sm text-label-sm uppercase text-on-surface-variant block mb-1 font-semibold">
              Full Name
            </label>
            <input
              value={name}
              onChange={handleNameChange}
              className="w-full bg-surface-container-low px-3 py-2 rounded-lg font-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary border border-surface-container-high"
              placeholder="Enter your full name"
              type="text"
              required
            />
          </div>
          <div>
            <label className="font-label-sm text-label-sm uppercase text-on-surface-variant block mb-1 font-semibold">
              Email Address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-surface-container-low px-3 py-2 rounded-lg font-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary border border-surface-container-high"
              placeholder="Enter your email address"
              type="email"
              required
            />
          </div>
          <div>
            <label className="font-label-sm text-label-sm uppercase text-on-surface-variant block mb-1 font-semibold">
              Phone Number
            </label>
            <input
              value={phone}
              onChange={handlePhoneChange}
              maxLength={10}
              className="w-full bg-surface-container-low px-3 py-2 rounded-lg font-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary border border-surface-container-high"
              placeholder="Enter 10-digit phone number"
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

export function EnquiryModal({ isOpen, onClose, onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleNameChange = (e) => {
    const val = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    setFormData((prev) => ({ ...prev, name: val }));
    if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
  };

  const handlePhoneChange = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
    setFormData((prev) => ({ ...prev, phone: val }));
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
  };

  const handleEmailChange = (e) => {
    setFormData((prev) => ({ ...prev, email: e.target.value }));
    if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
  };

  const validate = () => {
    const newErrors = {};
    const cleanName = formData.name.trim();
    if (!cleanName) {
      newErrors.name = 'Full name is required.';
    } else if (cleanName.length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const cleanEmail = formData.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(cleanEmail)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    const digitsOnly = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (digitsOnly.length !== 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      onShowToast('Please fix the validation errors before submitting.', 'error');
      return;
    }

    onShowToast(`Thank you ${formData.name.trim()}! Your site visit reservation request for Karjat plots has been booked. Confirmation sent to ${formData.email}.`, 'success');
    setFormData({ name: '', email: '', phone: '' });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-surface-container-lowest/95 backdrop-blur-xl rounded-2xl max-w-lg w-full p-space-lg lg:p-space-xl shadow-2xl relative border border-surface-container-high text-on-surface">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
          type="button"
        >
          <span className="material-symbols-outlined text-title-lg">close</span>
        </button>

        <div className="mb-space-md text-left">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
            Enquire Now
          </span>
          <h3 className="font-title-lg text-title-lg text-primary font-bold mt-1">
            Book Your Site Visit
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            Schedule a private visit to explore available plot options and understand pricing.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-space-md text-left" noValidate>
          {/* Name Field */}
          <div className="flex flex-col">
            <label className="font-label-sm text-label-sm uppercase text-on-surface-variant mb-1 font-semibold">
              Full Name
            </label>
            <input
              value={formData.name}
              onChange={handleNameChange}
              className={`w-full bg-surface-container-low text-on-surface font-body-sm text-body-sm px-space-md py-space-sm rounded-lg focus:outline-none focus:ring-2 border transition-all ${
                errors.name ? 'border-error ring-1 ring-error bg-error-container/20' : 'border-surface-container-high focus:ring-primary'
              }`}
              placeholder="Enter your full name"
              type="text"
              required
            />
            {errors.name && (
              <span className="text-xs text-error mt-1 font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">error</span>
                {errors.name}
              </span>
            )}
          </div>

          {/* Email Field */}
          <div className="flex flex-col">
            <label className="font-label-sm text-label-sm uppercase text-on-surface-variant mb-1 font-semibold">
              Email Address
            </label>
            <input
              value={formData.email}
              onChange={handleEmailChange}
              className={`w-full bg-surface-container-low text-on-surface font-body-sm text-body-sm px-space-md py-space-sm rounded-lg focus:outline-none focus:ring-2 border transition-all ${
                errors.email ? 'border-error ring-1 ring-error bg-error-container/20' : 'border-surface-container-high focus:ring-primary'
              }`}
              placeholder="Enter your email address"
              type="email"
              required
            />
            {errors.email && (
              <span className="text-xs text-error mt-1 font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">error</span>
                {errors.email}
              </span>
            )}
          </div>

          {/* Phone Number Field */}
          <div className="flex flex-col">
            <label className="font-label-sm text-label-sm uppercase text-on-surface-variant mb-1 font-semibold">
              Phone Number
            </label>
            <input
              value={formData.phone}
              onChange={handlePhoneChange}
              maxLength={10}
              className={`w-full bg-surface-container-low text-on-surface font-body-sm text-body-sm px-space-md py-space-sm rounded-lg focus:outline-none focus:ring-2 border transition-all ${
                errors.phone ? 'border-error ring-1 ring-error bg-error-container/20' : 'border-surface-container-high focus:ring-primary'
              }`}
              placeholder="Enter 10-digit phone number"
              type="tel"
              required
            />
            {errors.phone && (
              <span className="text-xs text-error mt-1 font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">error</span>
                {errors.phone}
              </span>
            )}
          </div>

          <button
            className="w-full bg-[#557A46] hover:bg-[#3b5730] text-white font-label-lg text-label-lg py-space-md rounded-lg font-bold shadow-lg transition-all duration-300 cursor-pointer text-center"
            type="submit"
          >
            Book Your Site Visit
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

