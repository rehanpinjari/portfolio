import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Four years designing products for founders. BookMyFarm, Byting Korner, and the work in between. Looking for a full-time product role.',
  openGraph: {
    title: 'About Rehan Pinjari',
    description:
      'Four years designing products for founders. BookMyFarm, Byting Korner, and the work in between.',
    url: 'https://heyrehan.design/about',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}