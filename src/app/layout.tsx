// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Ma Laxmi & Co | Global Shipping & Trade Experts",
    template: "%s | Global Trade Co."
  },
  description: "Leading importer, exporter, and high-sea sales specialist of OCC (Old Corrugated Containers) with over 20 years of experience in the international shipping and trading industry.",
keywords: "OCC trade, Old Corrugated Containers, shipping, import export, international logistics, high-sea sales, Global Trade & Co.",
authors: [{ name: "Global Trade & Co.", url: "https://malaxmi.com" }],
openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://malaxmi.com",
    siteName: "Ma Laxmi & Co",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ma Laxmi & Co - Global Shipping & Trade Experts",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    creator: "@malaxmiandco",
    images: "/og-image.jpg"
  },
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
  verification: {
    google: "your-google-verification-code",
  },
};

export function generateViewport(): Viewport {
  return {
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "#ffffff" },
      { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" }
    ],
    colorScheme: "light dark",
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="antialiased bg-white dark:bg-gray-950">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="malaxmi-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}