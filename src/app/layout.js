import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Phone } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vastro - Premium Wall Solutions",
  description:
    "About Vastro Private LimitedVastro is an emerging building material and interior solutions company dedicated to transforming Indian spaces. We specialize in premium interior and exterior wall panel systems designed for residential,commercial, and institutional properties across India. What We Do Premium wall panel solutions including decorative panels, acoustic systems, weatherproof façades, and custom installations for homes, offices, and institutions. Core Materials PVC panels, WPC boards, composite panels, moisture- resistant boards, and UV-resistant façade panels engineered for Indian climate conditions.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-[#FAF8F3]">
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
