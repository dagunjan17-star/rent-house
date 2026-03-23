import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { PropertyProvider } from "@/contextapi/propertycontext"; // ✅ ADD THIS
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { BlogProvider } from "@/contextapi/BlogContext";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rent House in Gurgaon",
  description: "Find verified Rent House in Gurgaon with best deals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ Provider Wrap Start */}
        <PropertyProvider>
          <BlogProvider>
          <Navbar />
          {children}
          <ScrollToTop />
          <Footer/>
          </BlogProvider>
        </PropertyProvider>
        {/* ✅ Provider Wrap End */}
      </body>
    </html>
  );
}