import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../public/vendor/pokevault/css/7fb674adbec2a7c3.css";
import "../public/vendor/pokevault/css/21f418c2620c223b.css";
import Footer from "./components/footer";
import Navbar from "./components/nav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PokéVault",
  description: "PokéVault",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="apple-touch-icon"
        href="https://www.pokevaultsol.com/favicon.png"
        sizes="180x180"
      ></link>
      <link
        rel="icon"
        href="https://www.pokevaultsol.com//favicon.png"
        sizes="32x32"
      ></link>
      <link
        rel="icon"
        href="https://www.pokevaultsol.com/favicon.png"
        sizes="16x16"
      ></link>
      <body className={`${inter.variable} antialiased`}>
        {" "}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
