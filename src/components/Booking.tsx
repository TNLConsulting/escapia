"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { useState } from "react";

export function Booking() {
  const { language } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "2",
    checkIn: "",
    checkOut: "",
    specialRequests: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.checkIn ||
      !formData.checkOut
    ) {
      alert("Please fill in all required fields");
      return;
    }
    // Here you would normally send the data to your backend
    console.log("Booking submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        guests: "2",
        checkIn: "",
        checkOut: "",
        specialRequests: "",
      });
    }, 3000);
  };

  return (
    <section id="booking" className="w-full section-padding" style={{ backgroundColor: '#000' }}>
      <div className="container-narrow">
        <h2
          className="text-4xl md:text-5xl font-serif font-light text-center mb-16"
          style={{ color: '#c9a961' }}
        >
          {t.booking.title}
        </h2>

        <div
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block mb-2 font-light text-sm" style={{ color: '#b8b8b8' }}>
                {t.booking.form.name} *
              </label>
              <input
                type="text"
                name="name"
                placeholder={t.booking.form.placeholder.name}
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg px-4 py-3 transition-colors duration-300"
                style={{
                  backgroundColor: '#000',
                  border: '1px solid rgba(212, 165, 116, 0.2)',
                  color: '#b8b8b8',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#c9a961';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(212, 165, 116, 0.2)';
                }}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-light text-sm" style={{ color: '#b8b8b8' }}>
                {t.booking.form.email} *
              </label>
              <input
                type="email"
                name="email"
                placeholder={t.booking.form.placeholder.email}
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg px-4 py-3 transition-colors duration-300"
                style={{
                  backgroundColor: '#000',
                  border: '1px solid rgba(212, 165, 116, 0.2)',
                  color: '#b8b8b8',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#c9a961';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(212, 165, 116, 0.2)';
                }}
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-2 font-light text-sm" style={{ color: '#b8b8b8' }}>
                {t.booking.form.phone} *
              </label>
              <input
                type="tel"
                name="phone"
                placeholder={t.booking.form.placeholder.phone}
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-lg px-4 py-3 transition-colors duration-300"
                style={{
                  backgroundColor: '#000',
                  border: '1px solid rgba(212, 165, 116, 0.2)',
                  color: '#b8b8b8',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#c9a961';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(212, 165, 116, 0.2)';
                }}
                required
              />
            </div>

            {/* Guests */}
            <div>
              <label className="block mb-2 font-light text-sm" style={{ color: '#b8b8b8' }}>
                {t.booking.form.guests}
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full rounded-lg px-4 py-3 transition-colors duration-300"
                style={{
                  backgroundColor: '#000',
                  border: '1px solid rgba(212, 165, 116, 0.2)',
                  color: '#b8b8b8',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#c9a961';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(212, 165, 116, 0.2)';
                }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>

            {/* Check-in & Check-out */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-light text-sm" style={{ color: '#b8b8b8' }}>
                  {t.booking.form.checkIn} *
                </label>
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-3 transition-colors duration-300"
                  style={{
                    backgroundColor: '#000',
                    border: '1px solid rgba(212, 165, 116, 0.2)',
                    color: '#b8b8b8',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#c9a961';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(212, 165, 116, 0.2)';
                  }}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-light text-sm" style={{ color: '#b8b8b8' }}>
                  {t.booking.form.checkOut} *
                </label>
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-3 transition-colors duration-300"
                  style={{
                    backgroundColor: '#000',
                    border: '1px solid rgba(212, 165, 116, 0.2)',
                    color: '#b8b8b8',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#c9a961';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(212, 165, 116, 0.2)';
                  }}
                  required
                />
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label className="block mb-2 font-light text-sm" style={{ color: '#b8b8b8' }}>
                {t.booking.form.specialRequests}
              </label>
              <textarea
                name="specialRequests"
                placeholder={t.booking.form.placeholder.specialRequests}
                value={formData.specialRequests}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-lg px-4 py-3 transition-colors duration-300 resize-none"
                style={{
                  backgroundColor: '#000',
                  border: '1px solid rgba(212, 165, 116, 0.2)',
                  color: '#b8b8b8',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#c9a961';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(212, 165, 116, 0.2)';
                }}
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="button-primary w-full text-center">
              {submitted ? "✓ " + t.booking.form.submit : t.booking.form.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
