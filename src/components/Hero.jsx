"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
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
      toast.error("Phone number must be 10 digits");
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
        toast.success("Enquiry submitted successfully!");
        setFormData({ name: "", phone: "", message: "" });
      } else {
        toast.error("Something went wrong. Try again.");
      }
    } catch (err) {
      toast.error("Server error. Please try later.");
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

          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Rent House in {" "}
            <span className="text-[#78C841] bg-white px-3 py-1 rounded">
              Gurgaon
            </span>
          </h1>

          <p className="text-lg max-w-2xl text-gray-200 leading-relaxed">
            Looking for the perfect house for rent in Gurgaon? Discover
            affordable and premium rental homes in one of the fastest-growing
            cities in India. Gurgaon offers a wide range of rental properties
            including 1BHK, 2BHK, and spacious 3–4BHK homes in well-developed
            residential societies.
            <br />
            <br />
            Popular areas like Golf Course Road, Sohna Road, and Dwarka
            Expressway provide excellent connectivity to offices, metro
            stations, schools, and shopping malls. Browse verified rental
            listings and find the ideal home in Gurgaon quickly and easily.
          </p>

        </div>

        {/* RIGHT FORM */}
        <div className="md:col-span-5 lg:col-span-4">

          <div className="bg-white/10 backdrop-blur-xl p-8 border border-white/20 shadow-2xl text-white rounded">

            <h3 className="text-2xl font-semibold mb-2">
              Book Rental Visit
            </h3>

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

      </div>
    </section>
  );
};

export default HeroSection;