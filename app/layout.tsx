import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'Serene Touch | Massage & Wellness Studio',
  description:
    'Premium massage and wellness studio in Denver with restorative massage treatments, quiet luxury, and personalized care.',
  metadataBase: new URL('https://www.serenetouchdenver.com'),
  openGraph: {
    title: 'Serene Touch | Massage & Wellness Studio',
    description:
      'Premium massage and wellness studio in Denver with restorative massage treatments, quiet luxury, and personalized care.',
    url: 'https://www.serenetouchdenver.com',
    siteName: 'Serene Touch',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serene Touch | Massage & Wellness Studio',
    description:
      'Premium massage and wellness studio in Denver with restorative massage treatments, quiet luxury, and personalized care.'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>{children}</body>
    </html>
  );
}
