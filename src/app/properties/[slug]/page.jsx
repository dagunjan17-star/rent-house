// app/properties/[slug]/page.js

import PropertyDetails from "./PropertyDetails";

export const metadata = {
  title: "Property for Rent | Price, Location, Photos & Complete Details",
  description:
    "View full details of this property including price, location, photos, amenities, area and owner details. Find verified properties for rent with latest updates.",
  alternates: {
    canonical: "https://www.renthouseingurgaon/property",
  },
};


async function getPropertyBySlug(slug) {
  const res = await fetch(
    `https://gurgaon-backend.onrender.com/api/listed-properties/getPropertyBySlug/${slug}`,
    {
      cache: "no-store", // 👈 pure SSR
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch property");
  }

  const json = await res.json();
  return json?.data || null;
}

export default async function Page({ params }) {
  // ✅ EXACT tumhare style me
  const { slug } = await params;

  if (!slug) {
    throw new Error("Invalid slug");
  }

  const property = await getPropertyBySlug(slug);

  if (!property) {
    throw new Error("Property not found");
  }

  return (
    <div>
      <PropertyDetails propertyy ={property}/>
    </div>
  );
}