"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactPopup from "@/components/ContactPopup";

export default function PropertyCard({ property }) {
  const [open, setOpen] = useState(false);

  const formatArea = (area, unit) => {
    if (!area) return "N/A";
    const formattedNumber = Number(area).toLocaleString("en-IN");
    if (!unit) return formattedNumber;
    const formattedUnit =
      unit.charAt(0).toUpperCase() + unit.slice(1).toLowerCase();
    return `${formattedNumber} ${formattedUnit}`;
  };

  return (
    <>
      <div
        className="bg-white rounded border border-gray-100 
        shadow-sm hover:shadow-2xl hover:-translate-y-2 
        transition duration-300 overflow-hidden flex flex-col h-full"
      >

        {/* IMAGE */}
        <div className="relative w-full h-40">
          <Image
            src={property?.media?.url || "/no-image.png"}
            alt={property.title}
            width={400}
            height={250}
            className="w-full h-full object-cover"
          />

          <span
            onClick={() => setOpen(true)}
            className="absolute top-4 left-4 bg-[#78C841] text-white text-xs px-4 py-1 rounded shadow font-medium cursor-pointer"
          >
            {property.propertyType}
          </span>
        </div>

        {/* CONTENT */}
        <div className="p-5 flex flex-col flex-1">

          <h2 className="text-lg font-semibold text-gray-900">
            {property.title}
          </h2>

          <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243A8 8 0 1117.657 16.657z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>

  {property.locality}
</p>

          {/* STATS */}
          <div
            className="mt-4 bg-[#F3FAEC] border border-[#78C841]/20 
            rounded px-4 py-3 text-xs flex items-center justify-between"
          >

            <div className="flex flex-col items-center flex-1">
              <span className="text-gray-500">STATUS</span>
              <span className="font-semibold text-[#78C841]">
                {property.status || "Available"}
              </span>
            </div>

            <div className="h-8 w-px bg-[#78C841]/20"></div>

            <div className="flex flex-col items-center flex-1">
              <span className="text-gray-500">TYPE</span>
              <span className="font-semibold text-gray-900">
                {property.propertyCategory}
              </span>
            </div>

          </div>

          <div className="flex-1" />

          {/* BUTTONS */}
          <div className="mt-4 pt-4 border-t border-gray-100">

            <div className="flex gap-3">

              {/* PRICE ON CALL */}
              <button
                onClick={() => setOpen(true)}
                className="flex-1 bg-[#78C841] text-white 
                py-1.5 rounded text-sm font-semibold
                hover:bg-[#5fae2e] transition 
                shadow cursor-pointer"
              >
                Price on Call
              </button>

              {/* VIEW DETAILS */}
              <Link
                href={`/properties/${property.slug}`}
                className="flex-1 border border-[#78C841] 
                text-[#78C841] py-1.5 rounded 
                text-sm font-medium text-center
                hover:bg-[#78C841] hover:text-white 
                transition cursor-pointer"
              >
                View Rent House Details
              </Link>

            </div>

          </div>

        </div>
      </div>

      {/* CONTACT POPUP */}
      <ContactPopup
        isOpen={open}
        onClose={() => setOpen(false)}
        propertyTitle={property.title}
      />
    </>
  );
}