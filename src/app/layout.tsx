import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MHCPP",
  description: "Montréal Heart of the City Piano Program. A program that provides free piano lessons to children in need.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className=" bg-logored">Navigation bar</nav>
        {children}
      </body>
    </html>
  );
}
