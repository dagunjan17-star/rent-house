"use client";

import Link from "next/link";

export default function BHKFilterButtons() {
  const bhkOptions = ["1", "2", "3", "4"];

  return (
    <div className="flex flex-wrap gap-4">
      {bhkOptions.map((bhk) => (
        <Link
          key={bhk}
          href={`/type/${bhk}`}
          className="px-6 py-3 rounded text-sm md:text-base font-medium 
          border border-[#78C841] text-[#78C841]
          hover:bg-[#78C841] hover:text-white 
          transition-all duration-200"
        >
          Rent House {bhk} BHK
        </Link>
      ))}
    </div>
  );
}