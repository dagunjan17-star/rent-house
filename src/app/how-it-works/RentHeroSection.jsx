import Breadcrumb from "@/components/Breadcrumb";
export default function RentGuideSection() {
  return (
    <section className="bg-[#F3FAEC] py-6 px-4 md:px-8">

      {/* MAIN TITLE */}
      <div className="max-w-6xl mx-auto">
        <div className="py-3">
        <Breadcrumb/>
      </div>
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
          Rent House in Gurgaon – Complete Guide for Tenants and Owners
        </h1>
      </div>

      {/* CARDS WRAPPER */}
      <div className="max-w-6xl mx-auto mt-14 space-y-4">

        {/* CARD 1 */}
        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10 border border-gray-100">

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Introduction: The Real Problem Renters Face Today
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Finding a rented house in Gurgaon sounds easy, but many people struggle.
            You search online, but you see duplicate listings, wrong prices, or houses that are already rented.
          </p>

          <p className="mt-6 text-gray-900 font-medium">
            The biggest issue is trust.
          </p>

          <p className="mt-2 text-gray-800">
            People often face:
          </p>

          {/* LIST */}
          <ul className="mt-4 space-y-3">
            {[
              "Fake listings",
              "High broker charges",
              "Lack of clear information",
              "Too many middlemen",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-800">
                <div className="w-6 h-6 rounded-full bg-[#F3FAEC] flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-[#78C841] rounded-full"></div>
                </div>
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-gray-700 leading-relaxed">
            This creates confusion and stress.
            But now, things are changing.
          </p>

          <p className="mt-5 text-gray-900 font-semibold">
            With the right platform, you can:
          </p>

          {/* LIST */}
          <ul className="mt-4 space-y-3">
            {[
              "Find real homes",
              "Talk directly to owners",
              "Avoid brokers",
              "Save time and money",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-800">
                <div className="w-6 h-6 rounded-full bg-[#F3FAEC] flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-[#78C841] rounded-full"></div>
                </div>
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-gray-700 leading-relaxed">
            If you are planning to rent a house in Gurgaon, this guide will help you understand everything in a very simple way.
          </p>
        </div>

        {/* CARD 2 (GREEN PREMIUM) */}
        <div className="bg-[#78C841] rounded-3xl shadow-lg p-6 md:p-10">

          <h2 className="text-2xl md:text-3xl font-semibold text-white">
             What Our Website Does
          </h2>

          <p className="mt-6 text-lg text-white/90 leading-relaxed">
            Our platform is made to make renting simple.
          </p>

          <p className="mt-4 text-white font-medium">
            Here’s what makes it different:
          </p>

          {/* LIST */}
          <ul className="mt-4 space-y-3">
            {[
              "You can find all properties in one place",
              "Every listing is real and trusted",
              "You can connect directly with owners",
              "No middleman or broker involved",
              "Clean and easy-to-use system",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                </div>
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-white/90 leading-relaxed">
            Whether you are looking for a house for rent in Gurgaon or a small flat, everything is available here.
            This helps you make better decisions without confusion.
          </p>

        </div>

      </div>
    </section>
  );
}