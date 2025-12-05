import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

// Robotic/Tech Font for Headings
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: 'swap',
});

// Clean Tech Font for Body
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-rajdhani",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "PowerTech Enterprise Solutions",
  description: "Premium PC Parts & Custom Builds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${rajdhani.variable} antialiased font-sans bg-gray-50`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
