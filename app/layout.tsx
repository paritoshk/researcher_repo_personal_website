import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const siteDescription =
  "Computational biophysicist decoding the biology of disease to build better medicines. PhD in Biophysics, Cornell University.";

export const metadata: Metadata = {
  metadataBase: new URL("https://shobhitagupta.com"),
  title: "Shobhita Gupta, PhD — Computational Biophysicist",
  description: siteDescription,
  openGraph: {
    title: "Shobhita Gupta, PhD",
    description: siteDescription,
    url: "https://shobhitagupta.com",
    siteName: "Shobhita Gupta",
    type: "website",
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "Shobhita Gupta, PhD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shobhita Gupta, PhD",
    description: siteDescription,
    images: ["/images/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
