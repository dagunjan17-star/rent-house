"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function BHKFilterButtons() {
  const bhkOptions = [1, 2, 3, 4];
  const params = useParams();

  const city = "gurgaon";

  // 🔥 current slug from URL
  const activeSlug = params?.slug;

  const formatCity = (city) =>
    city.toLowerCase().replace(/\s+/g, "-");

  const createSlug = (bhk) => {
    return `${bhk}-bhk-house-for-rent-in-${formatCity(city)}`;
  };

  return (
    <div className="flex flex-wrap gap-4">
      {bhkOptions.map((bhk) => {
        const slug = createSlug(bhk);
        const isActive = activeSlug === slug;

        return (
          <Link
            key={bhk}
            href={`/listing/${slug}`}
            className={`px-6 py-3 rounded text-sm md:text-base font-medium 
            border transition-all duration-200

            ${
              isActive
                ? "bg-[#78C841] text-white border-transparent"
                : "border-[#78C841] text-[#78C841] hover:bg-[#78C841] hover:text-white"
            }
            `}
          >
            Rent House {bhk} BHK
          </Link>
        );
      })}
    </div>
  );
}