import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resume',
  description:
    'Rehan Pinjari, product designer. Xvantage Infotech and freelance. BookMyFarm, Byting Korner, Openwork. Open to full-time roles.',
  openGraph: {
    title: 'Resume — Rehan Pinjari',
    description:
      'Product designer. 4 years. Open to full-time roles, remote or in Surat.',
    url: 'https://heyrehan.design/resume',
  },
}

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return children
}