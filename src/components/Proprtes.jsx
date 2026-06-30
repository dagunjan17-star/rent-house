"use client";

import { useState, useRef, useEffect } from "react";
import { useProperty } from "@/contextapi/propertycontext";
import Image from "next/image";
import Link from "next/link";
import ContactPopup from "@/components/ContactPopup";
import SidebarEnquiryForm from "./SidebarEnquiryForm";
import Pagination from "@/components/Pagination";
import ViewDetailsButton from "./ViewDetailsButton";
import NearbyLocations from "./NearbyLocations";
import BHKFilterButtons from "@/components/BHKFilterButtons";
// 👉 Hook import kiya
import { useClickLimit } from "@/hooks/useClickLimit";

export default function Properties() {
  const { properties, loading, error, page2, setPage2, totalItems, itemsPerPage } = useProperty();
  const [open, setOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");
  
  // 👉 Hook initialize kiya
  const { handlePropertyClick } = useClickLimit();

  const propertySectionRef = useRef(null);

  /* ================= LOADING ================= */
  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#F3FAEC]">
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-full border-4 border-[#78C841]/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#78C841] border-r-[#5e9e32] animate-spin"></div>
        </div>
        <p className="mt-5 text-sm font-medium text-gray-600 tracking-wide">
          Loading House Listings...
        </p>
      </div>
    );
  }

  if (error) {
    return <p className="text-center py-20 text-red-500">Something went wrong while loading properties.</p>;
  }

  if (!properties || properties.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">No Rent Houses Available in Gurgaon</h2>
        <p className="text-gray-500 mt-2 text-sm">New rental listings will be updated soon.</p>
      </div>
    );
  }

  return (
    <section ref={propertySectionRef} className="bg-[#F3FAEC] px-4 py-12 sm:py-16">
      {/* HEADING */}
      <div className="max-w-7xl mx-auto mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Rent House in Gurgaon</h2>
        <p className="mt-3 text-gray-500 text-sm sm:text-base max-w-2xl">
          Explore premium rent houses in prime sectors of Gurgaon. Affordable 1BHK, 2BHK & 3BHK homes available.
        </p>
        <div className="w-16 h-1 bg-[#78C841] mt-5 rounded-full"></div>
            <div className="mt-6">

          <BHKFilterButtons />

        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT LIST */}
        <div className="lg:col-span-2 space-y-6">
          {properties.map((property, index) => {
            const typeSlug = property.propertyType
              ? property.propertyType.toLowerCase().trim().replace(/[\s\W-]+/g, '-')
              : "house";

            return (
              <div key={property._id}>
                <div className="bg-white rounded-xl border border-[#78C841]/10 shadow-sm hover:shadow-lg transition overflow-hidden md:h-[280px]">
                  <div className="flex flex-col sm:flex-row h-full">
                    {/* IMAGE */}
                    <div className="relative sm:w-[40%]">
                      <Image
                        src={property?.media?.url || "https://res.cloudinary.com/dbihlu2ve/image/upload/v1778830993/GurgaonProperties/fls3swkw4k5bdcjf40y5.webp"}
                        unoptimized
                        alt={property.title}
                        width={600}
                        height={400}
                        className="w-full h-48 sm:h-full object-cover"
                      />
                      <span
                        onClick={() => { setSelectedProperty(property.title); setOpen(true); }}
                        className="absolute top-3 left-3 bg-[#78C841] text-white text-xs px-3 py-1 rounded cursor-pointer"
                      >
                        {property.propertyType}
                      </span>
                    </div>

                    {/* CONTENT */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col">
                      <h2 className="text-base sm:text-lg font-semibold text-gray-900">{property.title}</h2>
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

                      <div className="mt-3 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 flex items-center justify-between text-xs sm:text-sm text-gray-800">
                        <p>Type : <span className="font-semibold text-gray-800">{property.propertyCategory}</span></p>
                        <div className="h-6 w-px bg-gray-200"></div>
                        <p>Status : <span className="font-semibold text-[#78C841]">{property.status || "Available"}</span></p>
                      </div>

                      <div className="flex-1" />

                      {/* BUTTONS */}
                    <div className="flex flex-col md:flex-row gap-3 mt-2">
                        <button
                          onClick={() => {
                            setSelectedProperty(property.title);
                            setOpen(true);
                          }}
                          className="text-sm text-[#78C841] border border-[#78C841] px-4 py-2 rounded hover:bg-[#78C841] hover:text-white transition cursor-pointer"
                        >
                          Price on Call
                        </button>
                          <ViewDetailsButton className="text-sm border border-[#78C841] text-[#78C841] px-4 py-2 rounded hover:bg-[#78C841] hover:text-white transition text-center"

                      slug={property.slug}
                      href={`https://www.dealacres.com/property/${property.slug}`}/>
                        
                      </div>

                      {/* EXPLORE MORE LINKS */}
                      <div className="border-t border-gray-200 mt-4 pt-4 flex justify-between items-center text-sm text-gray-500 font-medium">
                        <Link href={`https://www.dealacres.com/properties/${typeSlug}-for-rent-in-gurgaon`} target="_blank" onClick={handlePropertyClick} className="group text-left flex items-center gap-1">
                          <h4 className="font-semibold text-gray-700 group-hover:text-[#78C841] transition-colors underline-offset-2 hover:underline">Explore more</h4>
                          <span className="text-[#78C841] group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </Link>
                        <div className="h-5 w-px bg-gray-300 mx-3"></div>
                        <Link href="https://www.dealacres.com/sell-property" target="_blank" className="group text-right flex items-center gap-1">
                          <h4 className="font-semibold text-gray-700 group-hover:text-[#78C841] transition-colors underline-offset-2 hover:underline">Free Sell Property</h4>
                          <span className="text-[#78C841] group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {(index + 1) % 10 === 0 && <NearbyLocations blockIndex={Math.floor(index / 10)} />}
              </div>
            );
          })}
          
          <Pagination totalItems={totalItems} itemsPerPage={itemsPerPage} currentPage={page2} onPageChange={(p) => { setPage2(p); window.scrollTo({ top: 0, behavior: "smooth" }); }} />
        </div>

        {/* SIDEBAR */}
        <div className="lg:col-span-1 sticky top-28">
          <SidebarEnquiryForm />
        </div>
      </div>
      <ContactPopup isOpen={open} onClose={() => setOpen(false)} propertyTitle={selectedProperty} />
    </section>
  );
}