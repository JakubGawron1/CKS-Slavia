import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CKS Slavia",
  description: "CKS Slavia Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={inter.className}>
      <NavBar />
        {children}
        <Footer/>
      </body>

    </html>
  );
}
