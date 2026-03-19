"use client";

import React, { useState } from "react";

const SidebarEnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

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
      alert("Please enter valid 10 digit number");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: "Sidebar Rent House Enquiry",
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Rent house enquiry submitted successfully!");
        setFormData({ name: "", phone: "", message: "" });
      } else {
        alert("Something went wrong!");
      }

    } catch (error) {
      alert("Server error!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="sticky top-28 bg-white rounded shadow-xl 
      p-8 border border-gray-200"
    >

      <h3 className="text-2xl font-semibold text-[#78C841] mb-2">
        Get Rent House Consultation
      </h3>

      <p className="text-sm text-gray-600 mb-6 leading-relaxed">
        Looking for a rent house in Gurgaon? Share your requirement and our
        property expert will contact you shortly with the best available options.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Name */}
        <input
          name="name"
          required
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded border border-gray-300 
          text-gray-900 placeholder:text-gray-500
          focus:ring-2 focus:ring-[#78C841] focus:border-[#78C841]
          outline-none transition"
        />

        {/* Phone */}
        <input
          name="phone"
          required
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded border border-gray-300 
          text-gray-900 placeholder:text-gray-500
          focus:ring-2 focus:ring-[#78C841] focus:border-[#78C841]
          outline-none transition"
        />

        {/* Message */}
        <textarea
          name="message"
          rows="4"
          placeholder="Mention budget, BHK type, preferred sector..."
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded border border-gray-300 
          text-gray-900 placeholder:text-gray-500
          focus:ring-2 focus:ring-[#78C841] focus:border-[#78C841]
          outline-none resize-none transition"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#78C841] text-white py-3 rounded
          font-semibold hover:bg-[#5fae2e] 
          transition shadow-md disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Request Rent House Call Back"}
        </button>

      </form>
    </div>
  );
};

export default SidebarEnquiryForm;