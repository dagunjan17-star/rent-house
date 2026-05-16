"use client";

import ContactPopup from "@/components/ContactPopup";
import PropertyCard from "@/components/PropertyCard";
import Image from "next/image";
import { useState, useMemo, useEffect } from "react";
import { useProperty } from "@/contextapi/propertycontext";
import Breadcrumb from "@/components/Breadcrumb";
export default function PropertyDetails({ propertyy }) {

  const [open, setOpen] = useState(false);
  const [relatedLoading, setRelatedLoading] = useState(true);

  const { properties: allProperties } = useProperty();

  /* ================= SHUFFLE ================= */

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  /* ================= RELATED ================= */

  const relatedProperties = useMemo(() => {
    if (!allProperties?.length) return [];

    const filtered = allProperties.filter(
      (p) =>
        p._id !== propertyy._id &&
        p.city?.toLowerCase() === propertyy.city?.toLowerCase()
    );

    return shuffleArray(filtered).slice(0, 30);
  }, [allProperties, propertyy]);

  /* ================= LOADING ================= */

  useEffect(() => {
    if (allProperties?.length > 0) {
      const timer = setTimeout(() => {
        setRelatedLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [allProperties]);

  return (

    <div className="bg-[#F3FAEC] text-gray-900 px-4 sm:px-6 py-10 sm:py-14">

      <div className="max-w-7xl mx-auto">
<div className="mb-6">
   <Breadcrumb property={propertyy}/>
  </div>
        {/* ================= TOP GRID ================= */}

        <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] gap-8 md:gap-14 items-start">

          {/* IMAGE */}

          <div className="relative w-full h-[250px] sm:h-[340px] rounded overflow-hidden shadow-md border border-gray-200 group">

            

              <Image
                src={propertyy?.media?.url
                  ? propertyy?.media?.url
                      : "https://res.cloudinary.com/dbihlu2ve/image/upload/v1778830993/GurgaonProperties/fls3swkw4k5bdcjf40y5.webp"}
                unoptimized
                alt={propertyy?.title}
                fill
                priority
                className="object-cover transition duration-500 group-hover:scale-105"
              />

           

          </div>

          {/* RIGHT CONTENT */}

          <div className="flex flex-col justify-between">

            <div>

              <h1 className="text-xl sm:text-3xl font-semibold text-gray-900">
                {propertyy?.title}
              </h1>

              <p className="text-gray-500 mt-2 text-sm sm:text-base">
                {propertyy?.locality}
              </p>

              {/* META GRID */}

              <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-3 gap-y-5 gap-x-6 text-xs sm:text-sm border-t border-gray-200 pt-5">

                <Meta label="Category" value={propertyy?.propertyCategory} />
                <Meta label="Property Type" value={propertyy?.propertyType} />
                <Meta label="Listing Type" value={propertyy?.listingType} />
                <Meta label="City" value={propertyy?.city} />
                <Meta label="State" value={propertyy?.state} />

                {propertyy?.bedrooms > 0 && (
                  <Meta label="Bedrooms" value={propertyy?.bedrooms} />
                )}

                {propertyy?.bathrooms > 0 && (
                  <Meta label="Bathrooms" value={propertyy?.bathrooms} />
                )}

              </div>

            </div>

            {/* BUTTON */}

            <div className="mt-6 sm:mt-10">

              <button
                onClick={() => setOpen(true)}
                className="bg-[#78C841] hover:bg-[#5fae2e] 
                text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded 
                text-sm font-medium shadow-md 
                transition w-full sm:w-auto"
              >
                Call for Rent House Visit
              </button>

            </div>

          </div>

        </div>

        {/* ================= DESCRIPTION ================= */}

        <section className="mt-14 sm:mt-20 border-t border-gray-200 pt-8 sm:pt-10">

          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
            Rent House Description
          </h2>

          <div className="mt-6 flex flex-col md:flex-row gap-6 md:gap-8 items-start">

            {/* TEXT */}

            <div className="space-y-4 text-sm text-gray-600 leading-relaxed flex-1">

              {propertyy?.description2?.length > 0 ? (
                propertyy.description2.map((text, i) => (
                  <p key={i}>{text}</p>
                ))
              ) : (
                <p>No additional description available.</p>
              )}

            </div>

            {/* SIDE IMAGE */}

            <div className="w-full md:w-[320px] h-[200px] sm:h-[250px] relative rounded overflow-hidden border border-gray-200 shadow">

              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
                alt="Property"
                fill
                className="object-cover"
              />

            </div>

          </div>

        </section>

        {/* ================= RELATED ================= */}

        <section className="mt-20 sm:mt-24">

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-8 sm:mb-10">
            Similar Rent Houses
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

            {relatedLoading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))
              : relatedProperties.map((property) => (
                  <PropertyCard key={property._id} property={property} />
                ))}

          </div>

        </section>

      </div>

      <ContactPopup
        isOpen={open}
        onClose={() => setOpen(false)}
        propertyTitle={propertyy?.title}
      />

    </div>
  );
}

/* ================= META ================= */

function Meta({ label, value }) {
  return (
    <div>
      <div className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-wider">
        {label}
      </div>
      <div className="mt-1 font-medium text-gray-900 text-xs sm:text-sm">
        {value || "—"}
      </div>
    </div>
  );
}

/* ================= SKELETON ================= */

function SkeletonCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 animate-pulse shadow-sm">
      <div className="h-40 bg-gray-200 rounded-lg mb-3"></div>
      <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
      <div className="h-7 bg-gray-200 rounded mt-3"></div>
    </div>
  );
}