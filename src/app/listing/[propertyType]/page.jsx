"use client";

import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { useProperty } from "@/contextapi/propertycontext";
import Image from "next/image";
import Link from "next/link";
import ContactPopup from "@/components/ContactPopup";
import SidebarEnquiryForm from "@/components/SidebarEnquiryForm";
import Pagination from "@/components/Pagination";
import BHKFilterButtons from "@/components/BHKFilterButtons";
import Breadcrumb from "@/components/Breadcrumb";
export default function PropertyTypePage() {

  const { propertyType } = useParams();

  const {
    properties,
    loading3,
    error3,
    fetchPropertiesByType,
    page,
    totalPages
  } = useProperty();

  const [open, setOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");

  const propertySectionRef = useRef(null);

 const bhk = propertyType?.split("-")[0];

useEffect(() => {
  if (bhk) {
    fetchPropertiesByType(`${bhk} BHK`, 1);
  }
}, [bhk]);


  /* LOADING */

  if (loading3) {

    return (

      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#F3FAEC]">

        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-full border-4 border-[#78C841]/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#78C841] border-r-[#5fae2e] animate-spin"></div>
        </div>

        <p className="mt-5 text-sm font-medium text-gray-600 tracking-wide">
          Loading {bhk} BHK Rent Houses...
        </p>

      </div>

    );
  }

  if (error3) {

    return (
      <p className="text-center py-20 text-red-500">
        Something went wrong while loading properties.
      </p>
    );

  }

  if (!properties || properties.length === 0) {

    return (

      <div className="text-center py-20">

        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          No {bhk} BHK Rent Houses Available
        </h2>

        <p className="text-gray-500 mt-2 text-sm">
          New listings will be updated soon.
        </p>

      </div>

    );

  }

  return (

    <section
      ref={propertySectionRef}
      className="bg-[#F3FAEC] px-4 sm:px-6 py-12"
    >

      {/* HEADING */}

      <div className="max-w-7xl mx-auto mb-10">
<div className="mb-6">
   <Breadcrumb />
  </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          {bhk} BHK House for Rent in Gurgaon
        </h1>

        <p className="mt-3 text-gray-500 max-w-2xl text-sm sm:text-base">
          Explore premium {bhk} BHK rent houses across prime
          locations in Gurgaon with verified listings and best rental deals.
        </p>

        <div className="w-20 h-1 bg-[#78C841] mt-5 rounded-full"></div>

        <div className="mt-6">
          <BHKFilterButtons />
        </div>

      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT LIST */}

        <div className="lg:col-span-2 space-y-6">

          {properties.map((property) => (

            <div
              key={property._id}
              className="bg-white rounded-xl border border-[#78C841]/10
              shadow-sm hover:shadow-lg transition overflow-hidden md:h-[240px]"
            >

              <div className="flex flex-col sm:flex-row h-full">

                {/* IMAGE */}

                <div className="relative sm:w-[40%]">

                  <Image
                    src={property?.media?.url || "/no-image.png"}
                    unoptimized
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
                    className="absolute top-3 left-3 bg-[#78C841]
                    text-white text-xs px-3 py-1 rounded"
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
                      <span className="text-gray-400">Type : </span>{" "}
                      <span className="font-semibold text-gray-800">
                        {property.propertyCategory}
                      </span>
                    </div>

                    <div className="h-6 w-px bg-gray-200"></div>

                    <div>
                      <span className="text-gray-400">Status : </span>{" "}
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
                      className="text-sm text-[#78C841]
                      border border-[#78C841]
                      px-4 py-2 rounded
                      hover:bg-[#78C841]
                      hover:text-white transition cursor-pointer"
                    >
                      Price on Call
                    </button>

                    <Link
                      href={`/properties/${property.slug}`}
                      className="text-sm border border-[#78C841]
                      text-[#78C841]
                      px-4 py-2 rounded
                      hover:bg-[#78C841]
                      hover:text-white transition text-center"
                    >
                      View Details
                    </Link>

                  </div>

                </div>

              </div>

            </div>

          ))}

          {/* PAGINATION */}

          <div className="mt-12">

            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={(newPage) => {
                fetchPropertiesByType(`${propertyType} BHK`, newPage);
              }}
            />

          </div>

        </div>

        {/* SIDEBAR */}

        <div className="lg:col-span-1 sticky top-28">
          <SidebarEnquiryForm />
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