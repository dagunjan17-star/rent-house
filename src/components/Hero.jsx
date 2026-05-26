"use client";

import React, { useState } from "react";
import AlertPopup from "./AlertPopup";
import Link from "next/link";
const HeroSection = () => {
   const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [popup, setPopup] = useState({
  open: false,
  type: "success",
  message: "",
});

  const [loading, setLoading] = useState(false);

  const website =
    typeof window !== "undefined"
      ? window.location.hostname.replace("www.", "")
      : "";

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      setPopup({
        open: true,
        type: "error",
        message: "Phone number must be exactly 10 digits",
      });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          website,
        }),
      });

      const result = await res.json();

     if (result.success) {
  setPopup({
    open: true,
    type: "success",
    message: "Enquiry submitted successfully!",
  });

  setFormData({
    name: "",
    phone: "",
    message: "",
  });
} else {
  setPopup({
    open: true,
    type: "error",
    message: "Something went wrong. Try again.",
  });
}
    } catch (err) {
      setPopup({
  open: true,
  type: "error",
  message: "Server error. Please try later.",
});

  setFormData({
    name: "",
    phone: "",
    message: "",
  });

    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative bg-cover bg-center px-4 sm:px-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-7xl mx-auto py-10 grid md:grid-cols-12 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="md:col-span-7 lg:col-span-8 text-white">

          <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
            Rent House in {" "}
            <span className="text-[#78C841] bg-white px-3 py-1 rounded">
              Gurgaon
            </span>
          </h1>

          <p className="text-lg max-w-4xl text-gray-200 leading-relaxed">
            Find your ideal house for rent in Gurgaon — where modern urban living meets homely comfort! Unlike apartments in high-rise towers, independent houses and builder floor rentals in Gurgaon offer a unique combination of privacy, space, and affordability that many families and professionals deeply value. Whether you're looking for a standalone independent house with a private garden in sectors like Palam Vihar, DLF Phase 2, or Sushant Lok, or a spacious builder floor rental in a quiet residential colony, Gurgaon's house rental market has abundant choices for you. Renting a house in Gurgaon gives you more living space per rupee, greater customisation freedom, and a relaxed neighbourhood atmosphere while keeping you connected to the city's corporate corridors, premier schools, hospitals, and entertainment destinations. <br/> Families with elderly members, pet owners, and those who love entertaining find independent house rentals especially rewarding. Our curated listings of houses for rent in Gurgaon cover all major residential sectors, societies, and colonies — with verified owner contacts, honest pricing, and complete property details. Start your house hunt in Gurgaon today and find the space that truly feels like home!
          </p>
<Link href="/how-it-works">
  <button className="relative overflow-hidden bg-[#78C841] text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300 hover:bg-[#78C841] hover:shadow-xl hover:scale-105 mt-4 cursor-pointer">
    
    <span className="relative z-10">Learn More</span>

    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition duration-700"></span>
  
  </button>
</Link>
        </div>

        {/* RIGHT FORM */}
        <div className="md:col-span-5 lg:col-span-4">

          <div className="bg-white/10 backdrop-blur-xl p-8 border border-white/20 shadow-2xl text-white rounded">

            <h2 className="text-2xl font-semibold mb-2">
              Book Rental Visit
            </h2>

            <p className="text-sm mb-6 text-gray-300">
              Submit your details to explore the best rental houses in Gurgaon.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                name="name"
                required
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded
                bg-white/10 border border-white/30
                text-white placeholder-white/70
                focus:ring-2 focus:ring-[#78C841]
                focus:border-[#78C841]
                outline-none transition"
              />

              <input
                name="phone"
                required
                inputMode="numeric"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded
                bg-white/10 border border-white/30
                text-white placeholder-white/70
                focus:ring-2 focus:ring-[#78C841]
                focus:border-[#78C841]
                outline-none transition"
              />

              <textarea
                rows="3"
                name="message"
                placeholder="Your Rental Requirement (Budget, BHK, Location)"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded
                bg-white/10 border border-white/30
                text-white placeholder-white/70
                focus:ring-2 focus:ring-[#78C841]
                focus:border-[#78C841]
                outline-none resize-none transition"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded font-semibold
                bg-gradient-to-r from-[#78C841] to-[#5fae2e]
                text-white flex items-center justify-center gap-2
                hover:from-[#5fae2e] hover:to-[#4e9625]
                transition-all duration-300
                disabled:opacity-70 shadow-xl hover:scale-[1.02] cursor-pointer"
              >
                {loading ? (
                  "Submitting..."
                ) : (
                  <>
                    Get Rental Details
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </>
                )}
              </button>

            </form>

          </div>

        </div>
  <AlertPopup
  open={popup.open}
  type={popup.type}
  message={popup.message}
  onClose={() =>
    setPopup({
      ...popup,
      open: false,
    })
  }
/>

      </div>
    </section>
  );
};

export default HeroSection;