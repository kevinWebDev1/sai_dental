import { Plus_Jakarta_Sans, Montserrat } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://saidental-five.vercel.app"),
  title: "Sai Specialized Dental Hospital | Top-Rated Dentist in Gomti Nagar, Lucknow",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  description: "Gentle, painless root canals, dental implants, clear aligners & smile makeovers in Gomti Nagar, Lucknow. Rated 4.9/5.0 across 151+ Google reviews. Book directly on WhatsApp.",
  keywords: [
    "Sai Specialized Dental Hospital",
    "Dentist Gomti Nagar",
    "Dental Implants Lucknow",
    "Painless Root Canal Gomti Nagar",
    "Clear Aligners Lucknow",
    "Best Dental Clinic Vipul Khand"
  ],
  openGraph: {
    title: "Sai Specialized Dental Hospital | Gomti Nagar Lucknow",
    description: "Advanced dental implants & painless dentistry in Gomti Nagar. Rated 4.9/5.0 (151+ Google Reviews).",
    url: "https://saidental-five.vercel.app",
    siteName: "Sai Specialized Dental Hospital",
    images: [
      {
        url: "/clinic/clinic_photo_1.jpg",
        width: 1200,
        height: 630,
        alt: "Sai Specialized Dental Hospital Gomti Nagar Lucknow",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Specialized Dental Hospital | Lucknow",
    description: "4.9/5.0 Rated Dental Care in Gomti Nagar. Painless root canals & dental implants.",
    images: ["/clinic/clinic_photo_1.jpg"],
  },
};

export default function RootLayout({ children }) {
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Sai Specialized Dental Hospital",
    "image": "/clinic/clinic_photo_1.jpg",
    "telephone": "+919235179344",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop no. 102, Jeevan Plaza, near Study Hall School, Vipul Khand 2",
      "addressLocality": "Gomti Nagar, Lucknow",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "226010",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.8456782,
      "longitude": 80.9984512
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "151"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "21:00"
      }
    ],
    "priceRange": "₹₹"
  };

  return (
    <html lang="en" className={`${plusJakarta.variable} ${montserrat.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20 md:pb-0 antialiased selection:bg-teal-100 selection:text-teal-900">
        {children}
      </body>
    </html>
  );
}
