import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flopiq.com"),
  title: {
    default: "FlopIQ - Social Poker Intelligence Platform",
    template: "%s | FlopIQ",
  },
  description:
    "The social-first intelligence platform for serious poker players. Move beyond rote memorization and start reasoning with a community.",
  keywords: [
    "poker",
    "poker strategy",
    "hand analysis",
    "poker training",
    "poker study",
    "GTO poker",
    "poker solver",
    "poker community",
    "poker learning",
    "poker improvement",
  ],
  authors: [{ name: "FlopIQ" }],
  creator: "FlopIQ",
  publisher: "FlopIQ",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/icon.png",
  },
  openGraph: {
    title: "FlopIQ - Social Poker Intelligence Platform",
    description:
      "The social-first intelligence platform for serious poker players. Move beyond rote memorization and start reasoning with a community.",
    url: "https://flopiq.com",
    siteName: "FlopIQ",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "FlopIQ - Social Poker Intelligence Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlopIQ - Social Poker Intelligence Platform",
    description:
      "The social-first intelligence platform for serious poker players. Move beyond rote memorization and start reasoning with a community.",
    images: ["/logo.png"],
    creator: "@flopiq",
  },
  alternates: {
    canonical: "https://flopiq.com",
  },
  category: "technology",
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-BW45TC8WPK" />
    </html>
  );
}
