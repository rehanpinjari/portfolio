import { Analytics } from "@vercel/analytics/next";
import { Geist, Nanum_Pen_Script } from "next/font/google";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Nav from "@/components/ui/nav"
import Footer from "@/components/ui/footer"
import SiteEffects from '@/components/ui/site-effects'

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const nanumPen = Nanum_Pen_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nanum-pen",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://heyrehan.design'),
  title: {
    default: 'Rehan Pinjari — Product Designer',
    template: '%s — Rehan Pinjari',
  },
  description:
    'Product designer in Surat. 4 years, 40+ shipped, 100K+ downloads. Looking for a full-time product role. Remote, or onsite in Surat.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://heyrehan.design',
    title: 'Rehan Pinjari — Product Designer',
    description:
      'Products that ship, scale, and stay used. 4 years. 40+ shipped. 100K+ downloads.',
    siteName: 'Rehan Pinjari',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Rehan Pinjari, product designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@RehanDesigns',
    title: 'Rehan Pinjari — Product Designer',
    description:
      'Products that ship, scale, and stay used. 4 years. 40+ shipped. 100K+ downloads.',
    images: ['/og.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-light-32x32.png', sizes: '32x32', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', sizes: '32x32', media: '(prefers-color-scheme: dark)' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${nanumPen.variable} bg-background`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark-mode')}catch(e){}`,
          }}
        />
      </head>
      <body className="antialiased">
        <SiteEffects />
        <Nav />
        {children}
        <Footer />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}