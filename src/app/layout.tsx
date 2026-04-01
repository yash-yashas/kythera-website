import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Using Inter and Outfit for a modern tech feel
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const interSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfitMono = Outfit({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kythera Systems | Software, Cloud & Automation",
  description: "Kythera Systems – Software, Cloud, Digital & Business Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interSans.variable} ${outfitMono.variable} scroll-smooth antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-[#0f172a] text-slate-100 font-sans">
        <Navbar />
        <main className="flex-grow flex flex-col pt-16">{/* pt-16 offsets fixed Navbar */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
