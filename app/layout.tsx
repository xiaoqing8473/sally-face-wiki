import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sally Face 2 Wiki — Release Date, Trailers, Gameplay Guide",
  description: "Complete guide to Sally Face 2, covering release date, platforms, gameplay, trailers, and everything announced by Portable Moose.",
  keywords: "Sally Face 2, Steam, horror game, Portable Moose, release date, gameplay, trailer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
