"use client";

import { useEffect, useState, useMemo } from "react";
import { useProperty } from "@/contextapi/propertycontext";
import Image from "next/image";
import Link from "next/link";
import ContactPopup from "@/components/ContactPopup";

export default function FilterProperties({ area }) {

  const { data, properties, loading2, error2, setLocality } = useProperty();

  const safeData = Array.isArray(data) ? data : [];
  const safeProperties = Array.isArray(properties) ? properties : [];

  const [open, setOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");

  const formattedArea = area
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  useEffect(() => {
    if (formattedArea) {
      setLocality(formattedArea);
    }
  }, [formattedArea, setLocality]);

  const formatArea = (area, unit) => {
    if (!area) return "N/A";
    const formattedNumber = Number(area).toLocaleString("en-IN");
    if (!unit) return formattedNumber;
    return `${formattedNumber} ${unit}`;
  };

  /* ================= 150 CARD LOGIC ================= */

  const finalData = useMemo(() => {

    if (safeProperties.length === 0) {
      return safeData;
    }

    const filteredIds = new Set(
      safeData.map((p) => p._id)
    );

    const remaining = safeProperties.filter(
      (p) => !filteredIds.has(p._id)
    );

    const needed = 150 - safeData.length;

    return [
      ...safeData,
      ...remaining.slice(0, needed > 0 ? needed : 0)
    ].slice(0, 150);

  }, [safeData, safeProperties]);

  /* ================= LOADING ================= */

  if (loading2) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#F3FAEC]">

        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-[#78C841]/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#78C841] border-r-[#5fae2e] animate-spin"></div>
        </div>

        <p className="mt-6 text-sm font-medium text-gray-600 tracking-wide">
          Loading Rent House Listings...
        </p>

      </div>
    );
  }

  /* ================= ERROR ================= */

  if (error2) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-white to-[#F3FAEC]">
        <p className="text-red-500 text-lg">
          Something went wrong while loading properties.
        </p>
      </div>
    );
  }

  /* ================= EMPTY ================= */

  if (!data || data.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#F3FAEC]">

        <h2 className="text-2xl font-semibold text-gray-800">
          No Rent Houses Available in {formattedArea}
        </h2>

        <p className="text-gray-500 mt-2">
          New listings will be updated soon.
        </p>

      </div>
    );
  }

  return (

    <section className="bg-[#F3FAEC] py-10">

      <div className="max-w-7xl mx-auto">

        {/* GRID */}

        <div className="grid grid-cols-1 gap-6">

          {finalData.map((property) => (

            <div
              key={property._id}
              className="bg-white rounded border border-[#78C841]/10
              shadow-sm hover:shadow-2xl hover:-translate-y-1
              transition duration-300 overflow-hidden flex flex-col md:flex-row"
            >

              {/* IMAGE */}

              <div className="relative md:w-1/3 aspect-[4/3] md:aspect-auto">

                {property?.media?.url ? (

                  <Image
                    src={property.media.url}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />

                ) : (

                  <div className="bg-[#F3FAEC] w-full h-full flex items-center justify-center text-[#78C841] text-sm">
                    No Image
                  </div>

                )}

                <span
                  onClick={() => {
                    setSelectedProperty(property.title);
                    setOpen(true);
                  }}
                  className="absolute top-4 left-4 bg-[#78C841] text-white text-xs px-4 py-1 rounded shadow font-medium cursor-pointer"
                >
                  {property.propertyType}
                </span>

              </div>

              {/* CONTENT */}

              <div className="p-6 flex-1 flex flex-col">

                <h2 className="text-lg font-semibold text-gray-900">
                  {property.title}
                </h2>

                <p className="text-sm text-gray-600 mt-1">
                  {property.locality}
                </p>

                {/* INFO BAR */}

                <div className="mt-4 bg-[#F3FAEC] border border-[#78C841]/20 rounded px-4 py-3 text-xs flex items-center justify-between">

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

                <p className="text-sm text-gray-600 mt-3 line-clamp-2">
                  {property.description ||
                    "Premium rent house with modern amenities and excellent connectivity."}
                </p>

                <div className="flex-1" />

                {/* ACTIONS */}

                <div className="mt-5 flex justify-between items-center flex-wrap gap-3">

                  <button
                    onClick={() => {
                      setSelectedProperty(property.title);
                      setOpen(true);
                    }}
                    className="text-md font-bold text-[#78C841] 
                    border border-[#78C841] px-2 py-1 
                    rounded hover:bg-[#78C841] hover:text-white 
                    transition cursor-pointer"
                  >
                    Price on Call
                  </button>

                  <Link
                    href={`/properties/${property.slug}`}
                    className="text-[#78C841] text-sm font-medium hover:underline"
                  >
                    View Details →
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      <ContactPopup
        isOpen={open}
        onClose={() => setOpen(false)}
        propertyTitle={selectedProperty}
      />

    </section>

  );
}