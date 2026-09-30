import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maple Learning Solutions | Digital Learning Experiences & Work Showcase",
  description: "Explore Maple Learning Solutions' digital learning experiences, interactive eLearning, LMS solutions, gamification, immersive learning, and more.",
  icons: {
    icon: "/maple-icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-maple-green selection:text-slate-900 bg-black text-slate-50`}>
        <Navbar />
        <main className="min-h-screen flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
