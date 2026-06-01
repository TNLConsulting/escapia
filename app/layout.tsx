import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Escapia - Disconnect to Reconnect | Bio-Integrated Forest Dome",
  description:
    "Immerse yourself in nature within our bio-integrated forest dome. A unique luxury retreat where you can disconnect and reconnect with yourself.",
  keywords:
    "forest dome, glamping, eco-luxury, retreat, Belgium, nature, wellness",
  openGraph: {
    title: "Escapia - Disconnect to Reconnect",
    description:
      "A bio-integrated forest dome offering the perfect balance between nature and luxury.",
    url: "https://escapia.be",
    siteName: "Escapia",
    images: [
      {
        url: "https://escapia.be/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Escapia Forest Dome",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Escapia - Disconnect to Reconnect",
    description: "A bio-integrated forest dome retreat in Belgium",
    images: ["https://escapia.be/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a1a1a" />
        <link rel="canonical" href="https://escapia.be" />
      </head>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
        <Script 
          src="https://cdn.lodgify.com/widgets/search-bar/latest/widget.js" 
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
