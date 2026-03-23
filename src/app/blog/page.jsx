import React from "react";
import BlogList from "./BlogList";

export async function generateMetadata() {
  return {
    title: "Rent House in Gurgaon Blogs | Rental Tips, Market Trends & Area Guide",

    description:
      "Explore expert blogs on rent house in Gurgaon. Get rental market trends, tenant tips, legal advice and guides to find the best houses for rent in Gurgaon.",

    keywords: [
      "rent house in Gurgaon",
      "house for rent Gurgaon",
      "Gurgaon rental market trends",
      "tenant guide Gurgaon",
      "best areas to rent house in Gurgaon",
      "Gurgaon rent house tips"
    ],

    alternates: {
      canonical: "www.houseforrentingurgaon.com/blog", // 🔥 apna real domain yaha replace karna
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