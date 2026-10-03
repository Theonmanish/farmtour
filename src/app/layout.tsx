import type { Metadata } from "next";
import { EB_Garamond, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Soans Farm — Plant Catalogue",
  description: "Explore the documented botanical collection of Soans Farm.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${dmSans.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#111311] text-[#EAE4D8] selection:bg-[#B99868]/30 selection:text-[#EAE4D8]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
