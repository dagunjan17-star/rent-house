"use client";

import { useState } from "react";
import Link from "next/link";

const locations = [
  'Ashok Vihar',         'Ashok Vihar Phase 2', 'Civil Lines',
  'DLF Phase 1',         'DLF Phase 2',         'DLF Phase 3',
  'DLF Phase 4',         'DLF Phase 5',         'Manesar',
  'New Palam Vihar',     'Palam Vihar',         'Palam Vihar Extension',
  'Rajendra Park',       'Sadar Bazar',         'Sector 1',
  'Sector 102',          'Sector 103',          'Sector 105',
  'Sector 10A',          'Sector 11',           'Sector 110',
  'Sector 111',          'Sector 112',          'Sector 14',
  'Sector 23',           'Sector 26',           'Sector 28',
  'Sector 3',            'Sector 30',           'Sector 31',
  'Sector 33',           'Sector 38',           'Sector 39',
  'Sector 3A',           'Sector 41',           'Sector 45',
  'Sector 46',           'Sector 47',           'Sector 48',
  'Sector 49',           'Sector 51',           'Sector 53',
  'Sector 54',           'Sector 55',           'Sector 57',
  'Sector 60',           'Sector 63',           'Sector 63A',
  'Sector 65',           'Sector 66',           'Sector 67A',
  'Sector 68',           'Sector 69',           'Sector 7',
  'Sector 8',            'Sector 80',           'Sector 82',
  'Sector 83',           'Sector 84',           'Sector 88',
  'Sector 89',           'Sector 99',           'Sohna Road',
  'South City 1',        'South City 2',        'Sushant Lok Phase 1',
  'Sushant Lok Phase 2', 'Sushant Lok Phase 3', 'Udyog Vihar'
];

const createSlug = (location) => {
  return location
    .replace(", Gurgaon", "")
    .toLowerCase()
    .replace(/,/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

export default function Footer() {

  const [showAll, setShowAll] = useState(false);

  const initialCount = 50;

  const visibleLocations = showAll
    ? locations
    : locations.slice(0, initialCount);

  return (
    <footer className="bg-[#0F0617] pt-16 pb-8 px-4 border-t border-[#1F3D12]">

      <div className="max-w-7xl mx-auto">

        {/* LOCATIONS */}

        <div className="mb-10">

          <h3 className="text-lg font-semibold text-white mb-6">
            Popular Rent House Locations
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4 text-sm">

            {visibleLocations.map((loc, index) => (

              <div key={index} className="relative group">

                <Link
                  href={`/${createSlug(loc)}`}
                  className="block truncate text-gray-400 hover:text-[#78C841] transition duration-200"
                >
                  Rent House in {loc}
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

                  Rent House in {loc}

                </div>

              </div>

            ))}

            {!showAll && locations.length > initialCount && (

              <div>

                <span
                  onClick={() => setShowAll(true)}
                  className="block cursor-pointer text-[#78C841] hover:underline"
                >
                  Read More...
                </span>

              </div>

            )}

            {showAll && locations.length > initialCount && (

              <div>

                <span
                  onClick={() => setShowAll(false)}
                  className="block cursor-pointer text-[#78C841] hover:underline"
                >
                  Read Less...
                </span>

              </div>

            )}

          </div>

        </div>

        {/* BOTTOM */}

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