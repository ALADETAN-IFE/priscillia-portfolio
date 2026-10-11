import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Priscilla Ijomah - Product Designer",
  description:
    "I create simple, useful and engaging digital experiences that solve real problems and make life easier for people.",
  authors: [{ name: "IfeCodes" }],
  other: {
    "designer": "Priscilla Ijomah"
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
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
      "Thoughtful digital products, made for real people.",
    type: "website",
    siteName: "Priscilla Ijomah",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary",
    title: "Priscilla Ijomah - Product Designer",
    description:
      "Thoughtful digital products, made for real people.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
