export default function RentGuideSectionPart2() {
  return (
    <section className="bg-[#F3FAEC] py-4 px-4 md:px-8">

      <div className="max-w-6xl mx-auto space-y-4">

        {/* CARD 3 */}
        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
             Why Gurgaon is Growing So Fast
          </h2>

          <p className="mt-6 text-lg text-gray-700">
            Gurgaon is one of the top cities for jobs and living.
          </p>

          <p className="mt-4 font-medium text-gray-900">
            Here’s why people move here:
          </p>

          <ul className="mt-4 space-y-2">
            {[
              "Many IT companies and offices",
              "Close to Delhi",
              "Good roads and metro",
              "Modern lifestyle",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-gray-900">
                <span className="w-2 h-2 bg-[#78C841] rounded-full mt-2 "></span>
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-gray-700">
            Because of this, demand for rental properties in Gurgaon is very high.
            More people are coming for jobs, so the need for rental homes keeps increasing.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="bg-[#78C841] rounded-3xl shadow-lg p-6 md:p-10 text-white">
          <h2 className="text-2xl md:text-3xl font-semibold">
             House vs Flat vs PG – What Should You Choose?
          </h2>

          <p className="mt-6">Let’s understand this in a simple way.</p>

          <p className="mt-4 font-semibold">Independent House</p>
          <ul className="space-y-1 mt-2 list-disc pl-4">
            <li>Full privacy</li>
            <li>More space</li>
            <li>Good for families</li>
          </ul>

          <p className="mt-4 font-semibold">Flat (Apartment)</p>
          <ul className="space-y-1 mt-2 list-disc pl-4">
            <li>Easy to maintain</li>
            <li>Security available</li>
            <li>Good for small families</li>
          </ul>

          <p className="mt-4 font-semibold">PG (Paying Guest)</p>
          <ul className="space-y-1 mt-2 list-disc pl-4">
            <li>Budget-friendly</li>
            <li>Food included</li>
            <li>Good for students</li>
          </ul>

          <p className="mt-6">
            If you want space and freedom, a rented house in Gurgaon is a better choice.
          </p>
        </div>

        {/* CARD 5 */}
        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Types of Rental Houses in Gurgaon
          </h2>

          <p className="mt-6 text-gray-700">
            There are many types of homes available.
          </p>

          <ul className="mt-4 space-y-3">
            {[
              "1. Independent Houses – Full building or floor – More privacy",
              "2. Builder Floors – One floor per family – Modern design",
              "3. Villas – Premium lifestyle – Large space",
              "4. Studio Apartments – Small and compact – Good for singles",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-gray-900">
                <span className="w-2 h-2 bg-[#78C841] rounded-full mt-2"></span>
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-gray-700">
            People searching for homes for rent in Gurgaon can choose based on budget and need.
          </p>
        </div>

        {/* CARD 6 (WITH BUTTON) */}
        <div className="bg-[#78C841] rounded-3xl shadow-lg p-6 md:p-10 text-white">
          <h2 className="text-2xl md:text-3xl font-semibold">
             Best Locations to Rent a House in Gurgaon
          </h2>

          <p className="mt-6">Location plays a big role.</p>

          <p className="mt-4 font-semibold">Top Areas:</p>

          <ul className="mt-4 space-y-2">
            {[
              "1. Sector 56–57 – Good connectivity – Family-friendly",
              "2. Sohna Road – Affordable options – Growing area",
              "3. Golf Course Road – Premium living – High-end homes",
              "4. Dwarka Expressway – Fast development – Future growth",
              "5. Palam Vihar – Peaceful area – Good for families",
            ].map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>

          <p className="mt-6">
            If you want a house for rent in Gurgaon, these areas are popular choices.
          </p>

          {/* BUTTON */}
          <button className="mt-6 bg-white text-[#78C841] px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
            Explore More Location
          </button>
        </div>

        {/* CARD 7 */}
        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Rental Price Trends in Gurgaon
          </h2>

          <p className="mt-6 text-gray-700">
            Rent depends on location and type of house.
          </p>

          <p className="mt-4 font-medium text-black">Simple idea:</p>

          <ul className="mt-3 space-y-2 text-gray-900 list-disc pl-4">
            <li>Prime areas = High rent</li>
            <li>Developing areas = Lower rent</li>
          </ul>

          <p className="mt-4 font-medium text-black">Factors affecting rent:</p>

          <ul className="mt-3 space-y-2 text-gray-900 list-disc pl-4">
            <li>Location</li>
            <li>Size of house</li>
            <li>Furnishing</li>
            <li>Facilities</li>
          </ul>

          <p className="mt-6 text-gray-700">
            The demand for rental properties in Gurgaon keeps prices stable and growing.
          </p>
        </div>

        {/* CARD 8 */}
        <div className="bg-[#78C841] rounded-3xl shadow-lg p-6 md:p-10 text-white">
          <h2 className="text-2xl md:text-3xl font-semibold">
            How Our Platform Helps Tenants
          </h2>

          <p className="mt-6">Finding a home becomes easy here.</p>

          <p className="mt-4 font-semibold">Benefits:</p>

          <ul className="mt-3 space-y-2 list-disc pl-4">
            <li>Verified listings only</li>
            <li>Clear pricing</li>
            <li>Easy filters</li>
            <li>Direct contact with owners</li>
            <li>No broker fees</li>
          </ul>

          <p className="mt-6">
            You don’t need to check multiple sites. Everything is in one place.
            This helps you quickly find a rent house in Gurgaon without stress.
          </p>
        </div>

        {/* CARD 9 */}
        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Importance of Verified Listings
          </h2>

          <p className="mt-6 text-gray-700">
            Fake listings waste time and money.
          </p>

          <p className="mt-4 font-medium text-black">That’s why verified listings matter.</p>

          <p className="mt-4 font-medium text-black">Why important:</p>

          <ul className="mt-3 space-y-2 text-gray-900 list-disc pl-4">
            <li>Real property details</li>
            <li>Correct rent price</li>
            <li>Genuine owners</li>
            <li>Safe transactions</li>
          </ul>

          <p className="mt-6 text-gray-700">
            Our platform ensures trusted listings for homes for rent in Gurgaon.
          </p>
        </div>

        {/* CARD 10 */}
        <div className="bg-[#78C841] rounded-3xl shadow-lg p-6 md:p-10 text-white">
          <h2 className="text-2xl md:text-3xl font-semibold">
             Direct Buyer-Seller Interaction (No Middleman)
          </h2>

          <p className="mt-6">
            Middlemen often charge high fees.
          </p>

          <p className="mt-4 font-semibold">We remove that problem.</p>

          <p className="mt-4 font-semibold">What you get:</p>

          <ul className="mt-3 space-y-2 list-disc pl-4">
            <li>Direct owner contact</li>
            <li>Better rent negotiation</li>
            <li>No extra charges</li>
            <li>Clear communication</li>
          </ul>

          <p className="mt-6">
            This makes renting a house in Gurgaon simple and cost-effective.
          </p>
        </div>

      </div>
    </section>
  );
}