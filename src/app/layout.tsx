import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  weight: ["400", "600", "700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "600", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://deyarsu.com'),
  title: {
    default: 'ديار جدة العالمية | مظلات سيارات وسواتر وبرجولات جدة',
    template: '%s | ديار جدة العالمية - أفضل مقاول مظلات جدة',
  },
  description: 'مؤسسة ديار جدة العالمية المتخصصة في تركيب مظلات سيارات جدة، سواتر، برجولات حدائق، هناجر، وبيوت شعر. نقدم أفضل أسعار المظلات في جدة وتصاميم عصرية بضمان 10 سنوات.',
  keywords: [
    'مظلات سيارات جدة',
    'سواتر جدة',
    'برجولات حدائق',
    'تركيب مظلات جدة',
    'مظلات وسواتر',
    'هناجر ومستودعات',
    'بيوت شعر جدة',
    'حداد مظلات جدة',
    'أسعار مظلات السيارات',
    'جلسات خارجية',
    'Car Shades Jeddah',
    'Pergolas Jeddah',
  ],
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://deyarsu.com',
    title: 'ديار جدة العالمية | تركيب مظلات وسواتر وبرجولات بخصم 25%',
    description: 'أفضل شركة تركيب مظلات سيارات وسواتر في جدة. تصاميم مودرن وكلاسيك للفلل والقصور. اتصل الآن 0553719009 للحصول على عرض سعر.',
    siteName: 'ديار جدة العالمية',
    images: [
      {
        url: '/logo.svg',
        width: 800,
        height: 600,
        alt: 'شعار ديار جدة العالمية - مظلات وسواتر',
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import FloatingSocials from "@/components/FloatingSocials";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${cairo.variable} ${inter.variable} antialiased bg-[var(--background)] text-[var(--foreground)] font-[family-name:var(--font-cairo)] selection:bg-brand-accent selection:text-brand-primary`}
      >
        <JsonLd />
        <Providers>
          <Navbar />
          <FloatingSocials />
          <FloatingWhatsApp />
          <main className="relative min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
