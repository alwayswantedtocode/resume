import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavHeader from "../Components/NavHeader"
import Footer from "@/Components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Osecodes",
  description: "A Portfolio Webapp",
  icons: {
    icon: "/favicon(1).ico",

    apple: "/apple-touch-icon.png",
    shortcut: ["/apple-touch-icon.png"]
  },
  manifest: "/site.webmanifest"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-gradient-to-br from-[#0f0c29] via-[#1e3c72] to-[#24243e] ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
