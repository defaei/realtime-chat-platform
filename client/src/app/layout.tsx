import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const generateMetadata = () => ({
  title: "RealTime Chat",
  description: "have fun with this",
  alternates: {
    canonical: `${process.env.SITE_URL}`,
  },
  other: {
    // "google-site-verification": "X9U9GAt952hSouwUF_u2helcUvK68iWvjkFyscpSyos",
  },
  openGraph: {
    title: "RealTime Chat",
    description: "have fun with this",
    url: `${process.env.SITE_URL}`,
    type: "website",
    // images: [
    //   {
    //     url: `${process.env.SITE_URL}/videos/header-poster.jpg`,
    //     alt: "Prime Dokht Header",
    //     width: 1920,
    //     height: 1080,
    //   },
    // ],
  },
  icons: {
    // icon: [
    //   { url: "/icons/favicon.ico", sizes: "any" },
    //   { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    //   { url: "/icons/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    // ],
    // apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
    // android: [
    //   { url: "/icons/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    //   { url: "/icons/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    // ],
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "real time chat",
    url: `${process.env.SITE_URL}`,
    logo: `${process.env.SITE_URL}/icons/logo.png`,
    sameAs: ["https://www.instagram.com/robinnetwork"],
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
