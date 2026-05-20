
import Image from "next/image";
import Hero from "@/components/Hero.jsx"
import Properties from "@/components/Proprtes";
import GurgaonRealEstateSection from "@/components/GurgaonRealEstateSection";
// export const metadata = {
//   title: "Flat for Rent in Gurgaon | 1BHK, 2BHK & Furnished Flats",
//   description:
//     "Find verified flats for rent in Gurgaon including 1BHK, 2BHK, furnished apartments and PG accommodations across DLF, Sohna Road and Golf Course Road.",
// };
export default function Home() {
  return (
    <>
     <Hero/>
     <Properties/>
          <GurgaonRealEstateSection/>
    </>
  );
}
