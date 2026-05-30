"use client";

import { useState } from "react";

export function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "2",
    checkIn: "",
    checkOut: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="booking" className="w-full py-24" style={{ backgroundColor: "#000" }}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <p className="text-xs tracking-widest uppercase text-center mb-3" style={{ color: "#9d7e44" }}>
          Reservations
        </p>
        <h2 className="text-6xl font-serif font-light text-center mb-6" style={{ color: "#b8b8b8" }}>
          Begin Your <span style={{ color: "#9d7e44", fontStyle: "italic" }}>Escape</span>
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-16" style={{ color: "#a8a8a8", lineHeight: "1.8" }}>
          From <span style={{ color: "#9d7e44", fontWeight: "500" }}>€250 per night</span> — exclusively for 2 guests. Due to our intimate nature, we recommend booking at least 2 weeks in advance.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Full Name */}
            <div>
              <label className="text-xs tracking-widest uppercase block mb-3" style={{ color: "#9d7e44" }}>
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded"
                style={{ backgroundColor: "#0a0a0a", border: "1px solid rgba(157, 126, 68, 0.2)", color: "#b8b8b8" }}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-xs tracking-widest uppercase block mb-3" style={{ color: "#9d7e44" }}>
                📞 Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+32 XXX XXX XXX"
                className="w-full px-4 py-3 rounded"
                style={{ backgroundColor: "#0a0a0a", border: "1px solid rgba(157, 126, 68, 0.2)", color: "#b8b8b8" }}
              />
            </div>

            {/* Check-in */}
            <div>
              <label className="text-xs tracking-widest uppercase block mb-3" style={{ color: "#9d7e44" }}>
                📅 Check-in
              </label>
              <input
                type="text"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                placeholder="dd-mm-jjjj"
                className="w-full px-4 py-3 rounded"
                style={{ backgroundColor: "#0a0a0a", border: "1px solid rgba(157, 126, 68, 0.2)", color: "#b8b8b8" }}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Email */}
            <div>
              <label className="text-xs tracking-widest uppercase block mb-3" style={{ color: "#9d7e44" }}>
                📧 Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded"
                style={{ backgroundColor: "#0a0a0a", border: "1px solid rgba(157, 126, 68, 0.2)", color: "#b8b8b8" }}
              />
            </div>

            {/* Guests */}
            <div>
              <label className="text-xs tracking-widest uppercase block mb-3" style={{ color: "#9d7e44" }}>
                👥 Guests
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded"
                style={{ backgroundColor: "#0a0a0a", border: "1px solid rgba(157, 126, 68, 0.2)", color: "#b8b8b8" }}
              >
                <option value="2">2 Guests</option>
              </select>
            </div>

            {/* Check-out */}
            <div>
              <label className="text-xs tracking-widest uppercase block mb-3" style={{ color: "#9d7e44" }}>
                📅 Check-out
              </label>
              <input
                type="text"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                placeholder="dd-mm-jjjj"
                className="w-full px-4 py-3 rounded"
                style={{ backgroundColor: "#0a0a0a", border: "1px solid rgba(157, 126, 68, 0.2)", color: "#b8b8b8" }}
              />
            </div>
          </div>
        </form>

        {/* Submit Button */}
        <div className="mt-12 flex justify-center">
          <button
            type="submit"
            onClick={(e) => handleSubmit(e as any)}
            className="px-12 py-4 rounded font-serif tracking-wider text-sm"
            style={{
              backgroundColor: "#9d7e44",
              color: "#000",
            }}
          >
            REQUEST RESERVATION
          </button>
        </div>
      </div>
    </section>
  );
}
