import React from "react";
import { headers } from "next/headers";
import BlogList from "./BlogList";

export async function generateMetadata() {

  const h = await headers();
  const domain = h.get("host") || "localhost";

  const cleanDomain = domain.replace(/^www\./, "");

  return {
    title: "Rent House in Gurgaon Blog | Rental Tips & Market Insights",

    description:
      "Explore expert blogs about rent houses and flats in Gurgaon. Get rental market updates, tenant tips, legal advice and guides for finding the best rent houses in Gurgaon.",

    keywords: [
      "rent house in gurgaon blog",
      "flat for rent gurgaon tips",
      "gurgaon rental market insights",
      "tenant guide gurgaon",
      "rent house gurgaon tips",
      "best areas to rent house in gurgaon"
    ],

    alternates: {
      canonical: `https://${cleanDomain}/blog`,
    },
  };
}

const page = () => {
  return (

    <div className="min-h-screen bg-gradient-to-b from-white to-[#F3FAEC]">

      <BlogList />

    </div>

  );
};

export default page;