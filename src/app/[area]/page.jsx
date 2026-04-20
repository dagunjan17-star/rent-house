import FilterProperties from "./FilterProperties";
import SidebarEnquiryForm from "@/components/SidebarEnquiryForm";

export default async function Page({ params }) {

  const resolvedParams = await params;
    const rawArea = resolvedParams?.area;

// ✅ CLEAN SLUG (IMPORTANT)
const area = rawArea?.replace("rent-house-in-", "");

// slug format → sector-9 → Sector 9
const formattedArea = area
  ?.replace(/-/g, " ")
  .replace(/\b\w/g, (c) => c.toUpperCase());

  return (

    <div className="bg-[#F3FAEC] min-h-screen">

      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* HEADING */}

        <div className="mb-14">

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">

            Rent Houses in{" "}
            <span className="text-[#78C841]">
              {formattedArea || "Gurgaon"}
            </span>

          </h1>

          <p className="text-gray-600 mt-3">
            Explore verified rent houses in {formattedArea || "Gurgaon"} including
            1 BHK, 2 BHK and 3 BHK flats with modern amenities and great connectivity.
          </p>

          <div className="w-20 h-1 bg-[#78C841] mt-6 rounded-full"></div>

        </div>

        {/* MAIN GRID */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* LEFT */}

          <div className="lg:col-span-8 space-y-6">

            <FilterProperties area={area} />

          </div>

          {/* RIGHT */}

          <div className="lg:col-span-4">

            <div className="sticky top-24">
              <SidebarEnquiryForm />
            </div>

          </div>

        </div>

      </div>

    </div>

  );
}