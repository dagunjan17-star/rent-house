import React from "react";
import BlogList from "./BlogList";

export async function generateMetadata() {
  return {
    title: "Blog | Rent House in Gurgaon | Rental Tips, Price Trends & Area Guide",

    description:
      "Read expert blogs on renting a house in Gurgaon — rental price trends, best areas, tenant tips, furnished vs unfurnished home guide & market updates for independent homes & villas in Gurugram. Stay informed before you rent.",

    keywords: [
      "rent house Gurgaon blog", "house rental tips Gurgaon", "best area to rent house Gurgaon", "house rent price trends Gurgaon", "independent house rent guide Gurgaon", "furnished home rental advice Gurugram", "rental market Gurgaon 2026", "villa for rent blog Gurgaon", "tenant guide Gurgaon", "house renting tips Gurugram", "affordable rent house areas Gurgaon", "rental agreement tips Gurgaon", "rent house news Gurgaon", "real estate rental blog Gurgaon", "Gurgaon property rent update 2026"
    ],

    alternates: {
      canonical: "www.renthouseingurgaon.com/blog", // 🔥 apna real domain yaha replace karna
    },
  };
}

const Page = () => {
  return (
    <div className="bg-gradient-to-b from-white to-[#F3FAEC]">
      <BlogList />
    </div>
  );
};

export default Page;