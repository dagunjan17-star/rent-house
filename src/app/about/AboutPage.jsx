"use client";

import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
export default function AboutPage() {

  return (

    <section className="bg-gradient-to-b from-white to-[#F3FAEC] px-4 py-20">

      <div className="max-w-7xl mx-auto">
<div className="py-3">
        <Breadcrumb/>
      </div>
        {/* HERO */}

        <div className="grid md:grid-cols-2 gap-16 items-center mb-28">

          {/* LEFT */}

          <div>

            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">

              About{" "}
              <span className="text-[#78C841]">
                Rent House in Gurgaon
              </span>

            </h1>

            <p className="text-gray-600 mt-6 leading-relaxed text-lg">

              From furnished apartments to spacious family homes — discover the
              perfect rent house or flat in Gurgaon that matches your
              lifestyle, budget, and preferred location.

            </p>

            <div className="mt-8 flex gap-4">

              <Link
                href="/"
                className="bg-[#78C841] text-white px-6 py-3 rounded font-medium hover:bg-[#5fae2e] transition shadow-md"
              >
                Browse Rent Houses
              </Link>

              <Link
                href="/contact"
                className="border border-[#78C841] text-[#78C841] px-6 py-3 rounded font-medium hover:bg-[#78C841] hover:text-white transition"
              >
                Contact Us
              </Link>

            </div>

          </div>

          {/* IMAGE */}

          <div className="relative h-[420px] rounded overflow-hidden shadow-2xl">

            <Image
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
              alt="Rent House in Gurgaon"
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

          </div>

        </div>


        {/* MISSION */}

        <div className="text-center max-w-4xl mx-auto mb-28">

          <h2 className="text-3xl font-bold text-gray-900">
            Our Mission
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed text-lg">

            Finding a rent house in a fast-growing city like Gurgaon can be
            overwhelming. Our mission is to make the rental search simple,
            transparent, and reliable for tenants, working professionals,
            families, and newcomers.

          </p>

          <p className="text-gray-600 mt-6 leading-relaxed text-lg">

            Whether you are searching for a modern apartment near Golf Course
            Road, a budget-friendly flat near Cyber City, or a spacious home in
            Sohna Road — our platform helps you explore verified rent houses
            across Gurgaon’s top localities.

          </p>

        </div>


        {/* STATS */}

        <div className="grid md:grid-cols-3 gap-10 mb-28">

          <div className="bg-white rounded p-10 shadow-xl border border-[#78C841]/10 text-center">

            <h3 className="text-4xl font-bold text-[#78C841]">
              2000+
            </h3>

            <p className="text-gray-600 mt-3 text-sm">
              Verified Rent House Listings
            </p>

          </div>

          <div className="bg-white rounded p-10 shadow-xl border border-[#78C841]/10 text-center">

            <h3 className="text-4xl font-bold text-[#78C841]">
              3500+
            </h3>

            <p className="text-gray-600 mt-3 text-sm">
              Happy Tenants Served
            </p>

          </div>

          <div className="bg-white rounded p-10 shadow-xl border border-[#78C841]/10 text-center">

            <h3 className="text-4xl font-bold text-[#78C841]">
              80+
            </h3>

            <p className="text-gray-600 mt-3 text-sm">
              Localities Covered in Gurgaon
            </p>

          </div>

        </div>


        {/* WHY CHOOSE US */}

        <div className="mb-28">

          <h2 className="text-3xl font-bold text-center text-gray-900 mb-14">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white p-8 rounded shadow-lg hover:shadow-2xl transition border border-[#78C841]/10">

              <h3 className="font-semibold text-lg text-[#78C841] mb-3">
                Verified Rental Listings
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                Every listing is reviewed to ensure tenants see genuine and
                updated rent houses and flats available in Gurgaon.
              </p>

            </div>

            <div className="bg-white p-8 rounded shadow-lg hover:shadow-2xl transition border border-[#78C841]/10">

              <h3 className="font-semibold text-lg text-[#78C841] mb-3">
                Multiple Housing Options
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                Choose from furnished, semi-furnished, and unfurnished flats
                across Gurgaon’s top residential areas.
              </p>

            </div>

            <div className="bg-white p-8 rounded shadow-lg hover:shadow-2xl transition border border-[#78C841]/10">

              <h3 className="font-semibold text-lg text-[#78C841] mb-3">
                Connect with Active Tenants
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                Property owners can list their rental homes and reach thousands
                of people actively searching for rent houses in Gurgaon.
              </p>

            </div>

          </div>

        </div>


        {/* CTA */}

        <div className="bg-[#78C841] text-white rounded p-16 text-center shadow-2xl">

          <h2 className="text-3xl font-bold mb-4">
            Your Next Rent House in Gurgaon is Just a Few Clicks Away
          </h2>

          <p className="text-[#F3FAEC] mb-8 max-w-2xl mx-auto">
            Browse verified houses, apartments, and rent houses across
            Gurgaon and schedule your property visit today.
          </p>

        </div>

      </div>

    </section>

  );
}