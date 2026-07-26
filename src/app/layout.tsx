import { Metadata } from 'next';
import { Suspense } from 'react';
import SmoothScrollProvider from '@/components/shared/SmoothScroll';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import Footer from '@/components/shared/footer/Footer';
import Navbar from '@/components/shared/navbar/Navbar';
import { site } from '@/data/site';
import { interTight } from '@/utils/font';
import './globals.css';

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  metadataBase: new URL(`https://${site.domain}`),
  alternates: { canonical: '/' },
  openGraph: { title: site.title, description: site.description, url: `https://${site.domain}`, locale: 'it_IT', type: 'website' },
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="it" suppressHydrationWarning><body className={`${interTight.variable} antialiased`}><ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange><Suspense fallback={null}><SmoothScrollProvider><Navbar />{children}<Footer /></SmoothScrollProvider></Suspense></ThemeProvider></body></html>;
}
