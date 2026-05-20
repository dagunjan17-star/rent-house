"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is the average rent for an independent house in Gurgaon?",
    answer:
      "Independent house rents in Gurgaon range widely — from ₹20,000/month for a modest floor in an older colony to ₹2-3 lakh/month for a luxury bungalow in DLF or South City. Most family houses rent between ₹30,000-₹80,000/month.",
  },
  {
    question: "Which colonies in Gurgaon are best for renting independent houses?",
    answer:
      "Top colonies for house rentals in Gurgaon include DLF Phase 1-4, Sushant Lok 1-3, Palam Vihar, South City 1 & 2, Ardee City, Nirvana Country, Greenwood City, and Ansal Sushant City.",
  },
  {
    question:
      "What is the difference between renting a builder floor and an independent house?",
    answer:
      "An independent house is a standalone building rented entirely by one tenant, offering maximum privacy. A builder floor is a single floor of an independently built 3-4 floor building, shared vertically with other tenants from different floors.",
  },
  {
    question: "Are pet-friendly houses for rent available in Gurgaon?",
    answer:
      "Yes, independent houses and builder floors in Gurgaon are much more likely to be pet-friendly compared to societies. Colonies like Palam Vihar and DLF Phase 2 have many landlords open to pets given the private nature of the housing.",
  },
  {
    question:
      "Can I run a home business from a rented house in Gurgaon?",
    answer:
      "Running a small home-based business from a rented house may be possible depending on your lease terms and municipal regulations. Always take explicit written permission from your landlord to avoid disputes.",
  },
  {
    question:
      "Is a registered rent agreement mandatory for house rentals in Gurgaon?",
    answer:
      "While an 11-month notarised agreement is common, for leases exceeding 12 months, registration at the Sub-Registrar office is legally mandated under the Registration Act. A registered agreement provides stronger legal protection.",
  },
  {
    question:
      "Do house rentals in Gurgaon include maintenance charges?",
    answer:
      "Maintenance charges depend on whether the house is in a managed colony or standalone. In societies like DLF or Sushant Lok, monthly maintenance is usually paid separately to the RWA (Resident Welfare Association).",
  },
  {
    question:
      "Are servant quarters available in houses for rent in Gurgaon?",
    answer:
      "Many independent houses and bungalows in older Gurgaon colonies like DLF Phase 1-2 and South City come with servant quarters. This is a significant advantage for families with domestic help.",
  },
  {
    question:
      "How do I search for houses for rent near specific schools in Gurgaon?",
    answer:
      "Use our locality-based search to filter houses near your preferred schools such as DPS International, Heritage Xperiential School, GD Goenka, or Pathways World School in sectors corresponding to those campuses.",
  },
  {
    question: "Can I sublet a rented house in Gurgaon?",
    answer:
      "Subletting a rented house in Gurgaon is generally not permitted unless explicitly mentioned in your lease agreement. Always get written permission from your landlord before subletting any portion of the property.",
  },
];

export default function GurgaonRealEstateSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
   <section className="relative overflow-hidden bg-white py-10 px-4 sm:px-6">

  {/* Background Lights */}
  <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-[#78C841]/10 blur-3xl" />

  <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-[#78C841]/10 blur-3xl" />

  {/* Border Circles */}
  <div className="absolute top-16 left-10 h-24 w-24 rounded-full border border-[#78C841]/20" />

  <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full border border-[#78C841]/10" />

  <div className="relative z-10 max-w-7xl mx-auto">

    {/* Main Content Box */}
    <div className="rounded-[34px] border border-blue-100 bg-gradient-to-br from-blue-50/70 via-white to-blue-50/70 p-8 md:p-14 shadow-[0_20px_60px_rgba(0,70,255,0.08)]">

      {/* Heading */}
      <h2 className="text-xl md:text-4xl font-bold leading-tight text-gray-900 max-w-5xl">
        About
        <span className="text-[#78C841]">
          {" "}Gurgaon Real Estate
        </span>
      </h2>

      {/* Paragraphs */}
      <div className="mt-8 space-y-7">

        <p className="text-lg leading-9 text-gray-600">
Gurgaon's house rental market — encompassing independent bungalows, kothi-style homes, and builder floors — is a distinct and thriving segment that runs parallel to the city's dominant apartment market. Many of Gurgaon's older, well-established sectors like DLF Phase 1-4, Sushant Lok 1-3, Palam Vihar, South City 1-2, and Ardee City have a rich inventory of independent houses available for rent. These residential colonies were developed in the 1990s and 2000s and are characterised by wider roads, green neighbourhoods, excellent social infrastructure, and a mature community feel. Independent houses in Gurgaon range from 3-4 bedroom double-storey homes to sprawling bungalows with multiple floors, servant quarters, and landscaped gardens. Monthly rents for house rentals in Gurgaon vary from ₹20,000 for a modest 3BHK floor in a peripheral sector to ₹3,00,000 or more for a fully furnished luxury bungalow in upscale DLF Farms or Anantraj Estates. Builder floor rentals offer an excellent middle ground — better space than apartments and more affordable than full independent houses. The house rental segment in Gurgaon continues to attract families who prefer ground-level living and a more community-oriented residential experience.        </p>
      </div>
    </div>

    {/* FAQ Section */}
    <div className="mt-14">

      <div className="mb-8">
        <h3 className="text-3xl font-bold text-gray-900">
          Frequently Asked Questions
        </h3>

        <p className="mt-2 text-gray-500">
          Everything you need to know before renting a flat in Gurgaon.
        </p>
      </div>

      <div className="space-y-5">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 ${
                isOpen
                  ? "border-[#78C841]/30 shadow-[0_10px_40px_rgba(0,70,255,0.10)]"
                  : "border-gray-200 hover:border-[#78C841]/20"
              }`}
            >
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <h4
                  className={`text-base md:text-lg font-semibold transition ${
                    isOpen
                      ? "text-[#78C841]"
                      : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </h4>

                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
                    isOpen
                      ? "bg-[#78C841] rotate-180"
                      : "bg-[#78C841]/10"
                  }`}
                >
                  <ChevronDown
                    size={18}
                    className={`${
                      isOpen
                        ? "text-white"
                        : "text-[#78C841]"
                    }`}
                  />
                </div>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  isOpen
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-gray-100 px-6 py-5 text-gray-600 leading-7 bg-gradient-to-b from-[#78C841]/[0.03] to-transparent">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  </div>
</section>
  );
}