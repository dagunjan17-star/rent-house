// app/properties/[slug]/loading.js

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-[#F3FAEC]">
      
      <div className="flex flex-col items-center gap-6">

        {/* Premium Dual Ring Spinner */}
        <div className="relative w-16 h-16">

          {/* Outer Soft Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-[#78C841]/20"></div>

          {/* Spinning Brand Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#78C841] border-r-[#5fae2e] animate-spin"></div>

          {/* Inner Glow Dot */}
          <div className="absolute inset-4 bg-[#78C841] rounded-full animate-pulse shadow-lg shadow-[#78C841]/40"></div>

        </div>

        {/* Main Text */}
        <p className="text-[#78C841] font-semibold text-lg tracking-wide">
          Loading Rent House Details...
        </p>

        {/* Sub Text */}
        <p className="text-sm text-gray-500 text-center max-w-xs">
          Please wait while we fetch complete rent house information and availability for you.
        </p>

      </div>
    </div>
  );
}