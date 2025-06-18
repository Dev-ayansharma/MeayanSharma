// app/layout.tsx
import './globals.css';
import RouteLoader from '@/components/ui/RouteLoader';
export const metadata = {
  title: 'Ayan Sharma - Full Stack Developer',
  description: 'Full Stack Developer & UI/UX Designer passionate about creating exceptional digital experiences.',

  // ✅ Required to correctly resolve relative image URLs in metadata
  metadataBase: new URL(
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://your-actual-domain.vercel.app'
),

  openGraph: {
    title: 'Your Name - Full Stack Developer',
    description: 'Full Stack Developer & UI/UX Designer passionate about creating exceptional digital experiences.',
    type: 'website',
    url: 'https://yourwebsite.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Your Name Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name - Full Stack Developer',
    description: 'Full Stack Developer & UI/UX Designer passionate about creating exceptional digital experiences.',
    images: ['/og-image.jpg'],
  },
};

// ✅ Viewport must now be exported separately
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
      </head>

      <body className="antialiased scroll-smooth"> <RouteLoader /> {children}</body>
    </html>
  );
}



