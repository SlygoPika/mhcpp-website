import { Analytics } from "@vercel/analytics/react"
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://montrealhcpp.ca'),
  title: {
    template: "%s | MHCPP",
    default: "MHCPP",
  },
  twitter: {
    card: "summary_large_image",
  },
  description: "Montréal Heart of the City Piano Program. A program that provides free piano lessons to children in need.",
  icons: {
    icon: "/Logo_Transparent.png",
    apple: "/Logo_Transparent.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
