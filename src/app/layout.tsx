import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

// Import Playfair Display for headings
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

// Import Poppins for body text
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SCPSC Cultural Fest",
  description: "SCPSC Cultural Fest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
