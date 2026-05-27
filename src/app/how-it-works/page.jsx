import RentFAQSection from "./RentFAQSection";
import RentGuideSectionPart2 from "./RentGuideSectionPart2";
import RentGuideSectionPart3 from "./RentGuideSectionPart3";
import RentHeroSection from "./RentHeroSection";

// ✅ SEO METADATA
export const metadata = {
  title: "How It Works | Rent House in Gurgaon Easily | No Broker Direct Owner",

  description:
    "Rent a house in Gurgaon in simple steps — search verified listings, connect directly with owners, zero broker fee & book a free property visit. Safe & transparent rental process for homes & villas in Gurugram.",

  keywords: [
   "how to rent house in Gurgaon", "rent house process Gurgaon", "no broker rent house Gurgaon", "verified house for rent Gurgaon", "direct owner rent house Gurgaon", "book rent house visit Gurgaon", "furnished house rental guide Gurgaon", "2BHK 3BHK rent process Gurugram", "rental agreement Gurgaon", "documents for renting house Gurgaon", "affordable rent house tips Gurgaon", "house rent without broker Gurgaon", "independent house rent guide Gurgaon", "villa rent guide Gurgaon", "Deal Acres rent house Gurgaon"
  ],
    alternates: {
    canonical: "https://www.renthouseingurgaon.com/how-it-works",
  },
};

export default function Page() {
  return (
    <>
      <RentHeroSection />
      <RentGuideSectionPart2 />
      <RentGuideSectionPart3 />
      <RentFAQSection />
    </>
  );
}