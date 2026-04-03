"use client";
import { useState } from "react";

export default function RentFAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "1. How can I find a rented house in Gurgaon without a broker?",
      a: "You can use a trusted platform where you connect directly with owners. This helps you avoid brokerage and find verified rental properties in Gurgaon easily.",
    },
    {
      q: "2. What is the average rent in Gurgaon?",
      a: "Rent depends on location and type. Premium areas have higher rent, while developing areas offer affordable houses for rent in Gurgaon.",
    },
    {
      q: "3. Is it safe to rent directly from owners?",
      a: "Yes, it is safe if listings are verified. Direct interaction helps you save money and get better deals on homes for rent in Gurgaon.",
    },
    {
      q: "4. What documents are required for renting a house?",
      a: "You need ID proof, address proof, and sometimes job proof. These are basic requirements for renting a house in Gurgaon.",
    },
    {
      q: "5. How much security deposit is required?",
      a: "Usually, 1–3 months’ rent is taken as a deposit. It depends on the owner and type of rental homes in Gurgaon.",
    },
    {
      q: "6. Which areas are best for renting in Gurgaon?",
      a: "Sohna Road, Golf Course Road, and Dwarka Expressway are popular. These areas have good rental properties in Gurgaon.",
    },
    {
      q: "7. Can I find furnished houses easily?",
      a: "Yes, many listings include furnished and semi-furnished homes for rent in Gurgaon on trusted platforms.",
    },
    {
      q: "8. How can I avoid fake listings?",
      a: "Always use platforms with verified listings. This ensures you find real houses for rent in Gurgaon.",
    },
    {
      q: "9. Can owners list properties for free?",
      a: "Yes, owners can use free property listing to add their rental homes in Gurgaon and connect with tenants directly.",
    },
    {
      q: "10. Why is Gurgaon good for renting?",
      a: "Gurgaon offers jobs, a good lifestyle, and connectivity. This makes it one of the best places to find a rented house in Gurgaon.",
    },
  ];

  return (
    <section className="bg-[#F3FAEC] py-4 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 ">
          FAQs – Rent House in Gurgaon
        </h2>

        {/* FAQ LIST */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-white shadow-lg border-[#78C841]"
                    : "bg-white border-gray-200 hover:shadow-md"
                }`}
              >
                {/* QUESTION */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-5 py-4 flex justify-between items-center cursor-pointer"
                >
                  <span className="font-medium text-gray-900">
                    {faq.q}
                  </span>

                  <span
                    className={`text-xl font-bold text-[#78C841] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  className={`px-5 overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 pb-4" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-700 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}