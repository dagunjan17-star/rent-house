"use client";

import { useState, useRef, useEffect } from "react";
import { useProperty } from "@/contextapi/propertycontext";
import Image from "next/image";
import Link from "next/link";
import ContactPopup from "@/components/ContactPopup";
import SidebarEnquiryForm from "./SidebarEnquiryForm";
import Pagination from "@/components/Pagination";
import BHKFilterButtons from "@/components/BHKFilterButtons";

export default function Properties() {
  const { properties, loading, error, refetch } = useProperty();

  const [open, setOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const propertySectionRef = useRef(null);

  const itemsPerPage = 150;

  /* 🔥 Refetch on mount */
  useEffect(() => {
    refetch();
  }, []);

  /* Reset page when data changes */
  useEffect(() => {
    if (properties) {
      setCurrentPage(1);
    }
  }, [properties]);

  /* Pagination */
  const totalItems = properties?.length || 0;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProperties = properties?.slice(startIndex, endIndex) || [];

  return (
    <section
      ref={propertySectionRef}
      className="bg-[#F3FAEC] px-4 py-12 sm:py-16"
    >
      {/* ================= HEADING ================= */}
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Rent House in Gurgaon
        </h1>

        <p className="mt-3 text-gray-500 text-sm sm:text-base max-w-2xl">
          Explore premium rent houses in prime sectors of Gurgaon.
          Affordable 1BHK, 2BHK & 3BHK homes available.
        </p>

        <div className="w-16 h-1 bg-[#78C841] mt-5 rounded-full"></div>

        <div className="mt-6">
          <BHKFilterButtons />
        </div>
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* ================= LEFT LIST ================= */}
        <div className="lg:col-span-2 space-y-6">

          {/* ❌ ERROR */}
          {error && (
            <p className="text-center py-20 text-red-500">
              Something went wrong while loading properties.
            </p>
          )}

          {/* 🔥 LOADING (ONLY CARDS AREA) */}
          {loading ? (
            <div className="grid gap-6">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border p-4 animate-pulse"
                >
                  <div className="h-40 bg-gray-200 rounded mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : currentProperties.length === 0 ? (
            /* ❌ NO DATA */
            <div className="text-center py-20">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                No Rent Houses Available in Gurgaon
              </h2>
              <p className="text-gray-500 mt-2 text-sm">
                New rental listings will be updated soon.
              </p>
            </div>
          ) : (
            <>
              {/* ✅ PROPERTY CARDS */}
              {currentProperties.map((property) => (
                <div
                  key={property._id}
                  className="bg-white rounded-xl border border-[#78C841]/10 shadow-sm hover:shadow-lg transition overflow-hidden md:h-[250px]"
                >
                  <div className="flex flex-col sm:flex-row h-full">
                    
                    {/* IMAGE */}
                    <div className="relative sm:w-[40%]">
                      <Image
                        src={property?.media?.url || "/no-image.png"}
                        alt={property.title}
                        width={600}
                        height={400}
                        className="w-full h-48 sm:h-full object-cover"
                      />

                      <span
                        onClick={() => {
                          setSelectedProperty(property.title);
                          setOpen(true);
                        }}
                        className="absolute top-3 left-3 bg-[#78C841] text-white text-xs px-3 py-1 rounded cursor-pointer"
                      >
                        {property.propertyType}
                      </span>
                    </div>

                    {/* CONTENT */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col">
                      <h2 className="text-base sm:text-lg font-semibold text-gray-900">
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

                      {/* INFO BAR */}
                      <div className="mt-3 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 flex items-center justify-between text-xs sm:text-sm">
                        <div>
                          <span className="text-gray-400">Type : </span>
                          <span className="font-semibold text-gray-800">
                            {property.propertyCategory}
                          </span>
                        </div>

                        <div className="h-6 w-px bg-gray-200"></div>

                        <div>
                          <span className="text-gray-400">Status : </span>
                          <span className="font-semibold text-[#78C841]">
                            {property.status || "Available"}
                          </span>
                        </div>
                      </div>

                      {/* <p className="text-xs sm:text-sm text-gray-500 mt-3 line-clamp-2">
                        {property.description ||
                          "Modern rent house with great connectivity and amenities."}
                      </p> */}

                      <div className="flex-1"></div>

                      {/* BUTTONS */}
                      <div className="flex flex-col sm:flex-row gap-3 mt-4">
                        <button
                          onClick={() => {
                            setSelectedProperty(property.title);
                            setOpen(true);
                          }}
                          className="text-sm text-[#78C841] border border-[#78C841] px-4 py-2 rounded hover:bg-[#78C841] hover:text-white transition cursor-pointer"
                        >
                          Price on Call
                        </button>

                        <Link
                          href={`/properties/${property.slug}`}
                          className="text-sm border border-[#78C841] text-[#78C841] px-4 py-2 rounded hover:bg-[#78C841] hover:text-white transition text-center"
                        >
                          View Rent House Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* ✅ PAGINATION */}
              {totalItems > itemsPerPage && (
                <div className="mt-12" key={totalItems}>
                  <Pagination
                    key={totalItems + "-" + currentPage}
                    totalItems={totalItems}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    onPageChange={(page) => {
                      setCurrentPage(page);

                      const yOffset = -90;
                      const y =
                        propertySectionRef.current.getBoundingClientRect()
                          .top +
                        window.pageYOffset +
                        yOffset;

                      window.scrollTo({ top: y, behavior: "smooth" });
                    }}
                  />
                </div>
              )}
            </>
          )}
        </div>

        {/* ================= SIDEBAR ================= */}
        <div className="lg:col-span-1 sticky top-28">
          <SidebarEnquiryForm />
        </div>
      </div>

      {/* ================= POPUP ================= */}
      <ContactPopup
        isOpen={open}
        onClose={() => setOpen(false)}
        propertyTitle={selectedProperty}
      />
    </section>
  );
}