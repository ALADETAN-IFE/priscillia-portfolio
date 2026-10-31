import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Priscilla Ijomah - Product Designer",
  description:
    "I create simple, useful and engaging digital experiences that solve real problems and make life easier for people.",
  authors: [{ name: "IfeCodes" }],
  other: {
    designer: "Priscilla Ijomah",
  },
  icons: {
    icon: "/Figmora.png",
    shortcut: "/Figmora.png",
    apple: "/Figmora.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  keywords: [
    "Priscilla Ijomah",
    "product designer",
    "UX designer",
    "UI designer",
    "digital product design",
  ],
  openGraph: {
    title: "Priscilla Ijomah - Product Designer",
    description:
      "I create simple, useful and engaging digital experiences that solve real problems and make life easier for people.",
    type: "website",
    siteName: "Priscilla Ijomah",
    images: [
      {
        url: "/og-image.jpg",
        width: 800,
        height: 800,
        alt: "Priscilla Ijomah - Product Designer",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Priscilla Ijomah - Product Designer",
    description:
      "I create simple, useful and engaging digital experiences that solve real problems and make life easier for people.",
    images: [
      {
        url: "/og-image.jpg",
        width: 800,
        height: 800,
        alt: "Priscilla Ijomah - Product Designer",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
