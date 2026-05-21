"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

const SidebarEnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;

    // PHONE VALIDATION
    if (name === "phone") {
      // only numbers
      if (!/^\d*$/.test(value)) return;

      // max 10 digits
      if (value.length > 10) return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // SUBMIT FORM
  const handleSubmit = async (e) => {
    e.preventDefault();

    // PHONE CHECK
    if (formData.phone.length !== 10) {
      toast.error(
        "Phone number must be exactly 10 digits."
      );
      return;
    }

    // WEBSITE
    const website =
      typeof window !== "undefined"
        ? window.location.hostname.replace(
            "www.",
            ""
          )
        : "";

    try {
      setLoading(true);

      const payload = {
        ...formData,
        website,
        source: "Sidebar Enquiry Form",
      };

      console.log("PAYLOAD:", payload);

      const res = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log("STATUS:", res.status);

      const data = await res.json();

      console.log("RESPONSE:", data);

      if (data.success) {
        toast.success(
          "Request submitted successfully!"
        );

        // RESET FORM
        setFormData({
          name: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error(
          data.error ||
            "Something went wrong."
        );
      }
    } catch (err) {
      console.log("ERROR:", err);

      toast.error(
        "Network error. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="sticky top-28 bg-white rounded shadow-xl 
      p-8 border border-gray-200"
    >

      <h2 className="text-2xl font-semibold text-[#78C841] mb-2">
        Get Rent House Consultation
      </h2>

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