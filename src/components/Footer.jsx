"use client";

import { useState } from "react";
import Link from "next/link";

import { locations } from "../data/locations";

const createSlug = (location) => {
  return location
    .replace(", Gurgaon", "")
    .toLowerCase()
    .replace(/,/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

export default function Footer() {

  const [showAll, setShowAll] = useState({
  house: false,
  bhk1: false,
  bhk2: false,
  bhk3: false,
  bhk4: false,
});

const initialCount = 14;

const getVisibleLocations = (key) => {
  return showAll[key]
    ? locations
    : locations.slice(0, initialCount);
};

const toggleShowAll = (key) => {
  setShowAll((prev) => ({
    ...prev,
    [key]: !prev[key],
  }));
};
const houseLocations = getVisibleLocations("house");
const bhk1Locations = getVisibleLocations("bhk1");
const bhk2Locations = getVisibleLocations("bhk2");
const bhk3Locations = getVisibleLocations("bhk3");
const bhk4Locations = getVisibleLocations("bhk4");
  return (
    <footer className="bg-[#0F0617] pt-16 pb-8 px-4 border-t border-[#1F3D12]">

      <div className="max-w-7xl mx-auto">
{/* 🔥 TOP HEADING */}
<div className="mb-12 ">
  <h2 className="text-2xl sm:text-3xl font-bold text-white">
    Find Rental Houses in{" "}
    <span className="text-[#78C841]">Gurgaon</span>
  </h2>

  <p className="text-gray-400 mt-3 max-w-2xl text-sm sm:text-base">
    Explore affordable and premium rental houses in top locations of Gurgaon,
    perfect for families and working professionals.
  </p>

  <div className="w-20 h-1 bg-[#78C841]  mt-5 rounded-full"></div>
</div>
        {/* LOCATIONS */}

        <div className="mb-10">

          <h3 className="text-lg font-semibold text-white mb-6">
            Popular Rent House Locations
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-x-6 gap-y-4 text-sm">

            {houseLocations.map((loc, index) => (

              <div key={index} className="relative group">

                <Link
key={index}
  href={`https://www.dealacres.com/properties/rent-house-in-${createSlug(loc)}-gurgaon`}
  target="_blank"
  rel="noopener noreferrer"                  className="block truncate text-gray-400 hover:text-[#78C841] transition duration-200"
                >
                  Rent House in {loc}, Gurgaon
                </Link>

                <div className="
                  absolute left-1/2 -translate-x-1/2 bottom-full mb-2
                  opacity-0 scale-95
                  group-hover:opacity-100 group-hover:scale-100
                  transition-all duration-200
                  whitespace-nowrap
                  bg-[#111827] text-white text-xs
                  px-3 py-1.5 rounded-md
                  shadow-lg border border-[#78C841]/40
                  z-[9999]
                  pointer-events-none">

                  Rent House in {loc}, Gurgaon

                </div>

              </div>

            ))}

             {locations.length > initialCount && (

              <div>
<span
  onClick={() => toggleShowAll("house")}
  className="block cursor-pointer text-[#78C841] hover:underline"
>
  {showAll.house ? "View Less..." : "View More..."}
</span>

              </div>

            )}

            {/* {showAll && locations.length > initialCount && (

              <div>

                <span
                  onClick={() => setShowAll(false)}
                  className="block cursor-pointer text-[#78C841] hover:underline"
                >
                  Read Less...
                </span>

              </div>

            )} */}

          </div>

        </div>
        <div className="mb-10">

          <h3 className="text-lg font-semibold text-white mb-6">
            Popular 1 BHK Rent House Locations
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-x-6 gap-y-4 text-sm">

            {bhk1Locations.map((loc, index) => (

              <div key={index} className="relative group">

                <Link
key={index}
  href={`https://www.dealacres.com/properties/1-bhk-rent-house-in-${createSlug(loc)}-gurgaon`}
  target="_blank"
  rel="noopener noreferrer"                  className="block truncate text-gray-400 hover:text-[#78C841] transition duration-200"
                >
                 1 BHK Rent House in {loc}, Gurgaon
                </Link>

                <div className="
                  absolute left-1/2 -translate-x-1/2 bottom-full mb-2
                  opacity-0 scale-95
                  group-hover:opacity-100 group-hover:scale-100
                  transition-all duration-200
                  whitespace-nowrap
                  bg-[#111827] text-white text-xs
                  px-3 py-1.5 rounded-md
                  shadow-lg border border-[#78C841]/40
                  z-[9999]
                  pointer-events-none">

                 1 BHK Rent House in {loc}, Gurgaon

                </div>

              </div>

            ))}

             {locations.length > initialCount && (

              <div>
<span
  onClick={() => toggleShowAll("bhk1")}
  className="block cursor-pointer text-[#78C841] hover:underline"
>
  {showAll.bhk1 ? "View Less..." : "View More..."}
</span>

              </div>

            )}

            {/* {showAll && locations.length > initialCount && (

              <div>

                <span
                  onClick={() => setShowAll(false)}
                  className="block cursor-pointer text-[#78C841] hover:underline"
                >
                  Read Less...
                </span>

              </div>

            )} */}

          </div>

        </div>
        <div className="mb-10">

          <h3 className="text-lg font-semibold text-white mb-6">
            Popular 2 BHK Rent House Locations
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-x-6 gap-y-4 text-sm">

            {bhk2Locations.map((loc, index) => (

              <div key={index} className="relative group">

                <Link
key={index}
  href={`https://www.dealacres.com/properties/2-bhk-rent-house-in-${createSlug(loc)}-gurgaon`}
  target="_blank"
  rel="noopener noreferrer"                  className="block truncate text-gray-400 hover:text-[#78C841] transition duration-200"
                >
                 2 BHK Rent House in {loc}, Gurgaon
                </Link>

                <div className="
                  absolute left-1/2 -translate-x-1/2 bottom-full mb-2
                  opacity-0 scale-95
                  group-hover:opacity-100 group-hover:scale-100
                  transition-all duration-200
                  whitespace-nowrap
                  bg-[#111827] text-white text-xs
                  px-3 py-1.5 rounded-md
                  shadow-lg border border-[#78C841]/40
                  z-[9999]
                  pointer-events-none">

                 2 BHK Rent House in {loc}, Gurgaon

                </div>

              </div>

            ))}

             {locations.length > initialCount && (

              <div>
<span
  onClick={() => toggleShowAll("bhk2")}
  className="block cursor-pointer text-[#78C841] hover:underline"
>
  {showAll.bhk2 ? "View Less..." : "View More..."}
</span>

              </div>

            )}

            {/* {showAll && locations.length > initialCount && (

              <div>

                <span
                  onClick={() => setShowAll(false)}
                  className="block cursor-pointer text-[#78C841] hover:underline"
                >
                  Read Less...
                </span>

              </div>

            )} */}

          </div>

        </div>
        <div className="mb-10">

          <h3 className="text-lg font-semibold text-white mb-6">
            Popular 3 BHK Rent House Locations
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-x-6 gap-y-4 text-sm">

            {bhk3Locations.map((loc, index) => (

              <div key={index} className="relative group">

                <Link
key={index}
  href={`https://www.dealacres.com/properties/3-bhk-rent-house-in-${createSlug(loc)}-gurgaon`}
  target="_blank"
  rel="noopener noreferrer"                  className="block truncate text-gray-400 hover:text-[#78C841] transition duration-200"
                >
                 3 BHK Rent House in {loc}, Gurgaon
                </Link>

                <div className="
                  absolute left-1/2 -translate-x-1/2 bottom-full mb-2
                  opacity-0 scale-95
                  group-hover:opacity-100 group-hover:scale-100
                  transition-all duration-200
                  whitespace-nowrap
                  bg-[#111827] text-white text-xs
                  px-3 py-1.5 rounded-md
                  shadow-lg border border-[#78C841]/40
                  z-[9999]
                  pointer-events-none">

                 3 BHK Rent House in {loc}, Gurgaon

                </div>

              </div>

            ))}

             {locations.length > initialCount && (

              <div>
<span
  onClick={() => toggleShowAll("bhk3")}
  className="block cursor-pointer text-[#78C841] hover:underline"
>
  {showAll.bhk3 ? "View Less..." : "View More..."}
</span>

              </div>

            )}

            {/* {showAll && locations.length > initialCount && (

              <div>

                <span
                  onClick={() => setShowAll(false)}
                  className="block cursor-pointer text-[#78C841] hover:underline"
                >
                  Read Less...
                </span>

              </div>

            )} */}

          </div>

        </div>
        <div className="mb-10">

          <h3 className="text-lg font-semibold text-white mb-6">
            Popular 4 BHK Rent House Locations
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-x-6 gap-y-4 text-sm">

            {bhk4Locations.map((loc, index) => (

              <div key={index} className="relative group">

                <Link
key={index}
  href={`https://www.dealacres.com/properties/4-bhk-rent-house-in-${createSlug(loc)}-gurgaon`}
  target="_blank"
  rel="noopener noreferrer"                  className="block truncate text-gray-400 hover:text-[#78C841] transition duration-200"
                >
                 4 BHK Rent House in {loc}, Gurgaon
                </Link>

                <div className="
                  absolute left-1/2 -translate-x-1/2 bottom-full mb-2
                  opacity-0 scale-95
                  group-hover:opacity-100 group-hover:scale-100
                  transition-all duration-200
                  whitespace-nowrap
                  bg-[#111827] text-white text-xs
                  px-3 py-1.5 rounded-md
                  shadow-lg border border-[#78C841]/40
                  z-[9999]
                  pointer-events-none">

                 4 BHK Rent House in {loc}, Gurgaon

                </div>

              </div>

            ))}

             {locations.length > initialCount && (

              <div>

               <span
  onClick={() => toggleShowAll("bhk4")}
  className="block cursor-pointer text-[#78C841] hover:underline"
>
  {showAll.bhk4 ? "View Less..." : "View More..."}
</span>

              </div>

            )}

            {/* {showAll && locations.length > initialCount && (

              <div>

                <span
                  onClick={() => setShowAll(false)}
                  className="block cursor-pointer text-[#78C841] hover:underline"
                >
                  Read Less...
                </span>

              </div>

            )} */}

          </div>

        </div>
{/* 🔥 Bottom Navigation Buttons - CENTER */}
<div className="border-t border-[#1F3D12] pt-6 mt-10 mb-6">
  <div className="flex justify-center items-center">
    
    <div className="flex flex-wrap gap-6 justify-center text-sm">
      <Link
        href="/about"
        className="text-gray-400 hover:text-[#78C841] transition"
      >
        About
      </Link>

      <Link
        href="/blog"
        className="text-gray-400 hover:text-[#78C841] transition"
      >
        Blog
      </Link>

      <Link
        href="/contact"
        className="text-gray-400 hover:text-[#78C841] transition"
      >
        Contact
      </Link>

      <Link
        href="/how-it-works"
        className="text-gray-400 hover:text-[#78C841] transition"
      >
        How It's Work
      </Link>
    </div>

  </div>
</div>
        <div className="border-t border-[#1F3D12] pt-6 flex flex-col md:flex-row items-center justify-between">

          <p className="text-sm text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Rent House in Gurgaon.com - All rights reserved
          </p>

          <p className="text-sm text-gray-400 mt-3 md:mt-0">
            Designed By - {" "}
            <Link
              href="https://www.parcharmanch.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#78C841] transition underline-offset-4 hover:underline"
            >
              Parchar Manch
            </Link>
          </p>

        </div>

      </div>
    </footer>
  );
}