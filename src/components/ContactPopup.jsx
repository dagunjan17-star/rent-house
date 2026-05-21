"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactPopup({
  isOpen,
  onClose,
  propertyTitle,
}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // CLOSE POPUP
  if (!isOpen) return null;

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
        "Phone number must be exactly 10 digits"
      );
      return;
    }

    // WEBSITE NAME
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
        propertyTitle,
        website,
        source: "Popup Enquiry",
      };

      console.log("PAYLOAD:", payload);

      // IMPORTANT
      // /api/submit use karo
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
          "Enquiry Submitted Successfully!"
        );

        // RESET FORM
        setFormData({
          name: "",
          phone: "",
          message: "",
        });

        // CLOSE POPUP
        onClose();
      } else {
        toast.error(
          data.message ||
            "Something went wrong"
        );
      }
    } catch (err) {
      console.log("ERROR:", err);

      toast.error(
        "Server error. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-white w-full max-w-md rounded p-8 shadow-2xl relative border border-gray-200">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-[#78C841] text-xl transition"
        >
          ×
        </button>

        <h3 className="text-2xl font-semibold text-[#78C841]">
          Rent House Visit
        </h3>

        <p className="text-sm text-gray-600 mt-3 mb-7 leading-relaxed">
          Enquiry for rent house:
          <span className="block font-medium text-gray-900 mt-1">
            {propertyTitle}
          </span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            name="name"
            required
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded 
            focus:ring-2 focus:ring-[#78C841] focus:border-[#78C841]
            outline-none transition placeholder:text-gray-500"
          />

          <input
            name="phone"
            required
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded
            focus:ring-2 focus:ring-[#78C841] focus:border-[#78C841]
            outline-none transition placeholder:text-gray-500"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Mention budget, BHK type, preferred sector..."
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded
            focus:ring-2 focus:ring-[#78C841] focus:border-[#78C841]
            outline-none resize-none transition placeholder:text-gray-500 text-black"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#78C841] hover:bg-[#5fae2e] 
            text-white font-semibold rounded transition shadow-md disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Get Rent House Details"}
          </button>

        </form>

      </div>
    </div>
  );
}