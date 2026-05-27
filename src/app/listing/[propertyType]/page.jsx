import PropertyTypePage from "./PropertyTypePage";

export async function generateMetadata({ params }) {
  const { propertyType } = await params;

  const formattedTitle = propertyType
    ?.split("-")
    ?.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    )
    ?.join(" ");

  return {
    title: `${formattedTitle} | Rent House in Gurgaon`,

    description: `Explore ${formattedTitle} with updated pricing, amenities, and premium property options in Gurgaon.`,

    alternates: {
      canonical: `http://www.renthouseingurgaon.com/listing/${propertyType}`,
    },
  };
}

export default async function Page({ params }) {
  const { propertyType } = await params;

  return (
    <PropertyTypePage propertyType={propertyType} />
  );
}