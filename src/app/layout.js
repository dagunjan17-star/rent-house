import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { PropertyProvider } from "@/contextapi/propertycontext"; // ✅ ADD THIS
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { BlogProvider } from "@/contextapi/BlogContext";
import { LocalityProvider } from "@/contextapi/LocalityContext";

import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
 title: "Rent House in Gurgaon | Independent Homes & Villas for Rent in Gurugram",

description:
"Find verified houses for rent in Gurgaon — 1BHK, 2BHK, 3BHK & 4BHK independent homes, builder floors & villas in Golf Course Road, Sohna Road, Palam Vihar, DLF Phase & 80+ localities. No broker. Book free visit today.",

keywords: [
 "rent house in Gurgaon", "house for rent in Gurgaon", "houses for rent in Gurgaon", "independent house for rent Gurgaon", "rent house Gurugram", "house on rent Gurgaon", "1BHK house for rent Gurgaon", "2BHK house for rent Gurgaon", "3BHK house for rent Gurgaon", "4BHK house for rent Gurgaon", "furnished house for rent Gurgaon", "affordable house for rent Gurgaon", "villa for rent Gurgaon", "builder floor for rent Gurgaon", "rent house near Cyber City Gurgaon", "rent house Golf Course Road Gurgaon", "rent house Sohna Road Gurgaon", "rent house Palam Vihar Gurgaon", "rent house DLF Phase Gurgaon", "no broker rent house Gurgaon"
],

  alternates: {
    canonical: "https://www.renthouseingurgaon.com/",
  },
  verification: {
    google: "sLzipjeWA8qP9b0bXnbYkr8pt1RjfN2ExoUPW8S3dm4",
  },
   icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        {/* ✅ Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NN933849');
            `,
          }}
        />

        {/* ✅ Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RNF6ZGCGK3"
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RNF6ZGCGK3');
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ GTM NoScript */}
        
 <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NN933849"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>


        {/* ✅ Providers */}
        <PropertyProvider>
          <BlogProvider>
            <LocalityProvider>
            <Navbar />
            {children}
            <ScrollToTop />
            <Footer />
          </LocalityProvider>
          </BlogProvider>
        </PropertyProvider>
      </body>
    </html>
  );
}