'use client'

import { useState } from 'react'
import './home.css'

/* Homepage, built from Figma: My Portfolio / Desktop - 7. */

const EMAIL = 'prehandev@gmail.com'
const CAL = 'https://cal.com/hirehan/remote-product-designer'

const icons = {
  linkedin: (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M3.58214 16H0.264286V5.31786H3.58214V16ZM1.92143 3.86071C0.860714 3.86071 0 2.98214 0 1.92143C0 1.41071 0.203572 0.925 0.564286 0.564286C0.925 0.203572 1.41429 0 1.92143 0C2.42857 0 2.91786 0.203572 3.27857 0.564286C3.63929 0.925 3.84286 1.41429 3.84286 1.92143C3.84286 2.98214 2.98214 3.86071 1.92143 3.86071ZM15.9964 16H12.6857V10.8C12.6857 9.56071 12.6607 7.97143 10.9607 7.97143C9.23571 7.97143 8.97143 9.31786 8.97143 10.7107V16H5.65714V5.31786H8.83929V6.775H8.88571C9.32857 5.93571 10.4107 5.05 12.025 5.05C15.3821 5.05 16 7.26072 16 10.1321V16H15.9964Z" />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 18 16" fill="currentColor" aria-hidden="true">
      <path d="M13.9385 0H16.6538L10.7231 6.77692L17.7 16H12.2385L7.95769 10.4077L3.06538 16H0.346154L6.68846 8.75L0 0H5.6L9.46538 5.11154L13.9385 0ZM12.9846 14.3769H14.4885L4.78077 1.53846H3.16538L12.9846 14.3769Z" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 22 16" fill="currentColor" aria-hidden="true">
      <path d="M2 0C0.895833 0 0 0.895833 0 2C0 2.62917 0.295833 3.22083 0.8 3.6L9.46667 10.1C10.1792 10.6333 11.1542 10.6333 11.8667 10.1L20.5333 3.6C21.0375 3.22083 21.3333 2.62917 21.3333 2C21.3333 0.895833 20.4375 0 19.3333 0H2ZM0 5.5V13.3333C0 14.8042 1.19583 16 2.66667 16H18.6667C20.1375 16 21.3333 14.8042 21.3333 13.3333V5.5L13.0667 11.7C11.6458 12.7667 9.6875 12.7667 8.26667 11.7L0 5.5Z" />
    </svg>
  ),
  medium: (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M13.1929 0C14.7429 0 16 1.25686 16 2.80652V5.79871C15.9321 5.79514 15.8643 5.79157 15.7964 5.79157H15.7821C15.425 5.79157 14.9857 5.87726 14.6714 6.03437C14.3143 6.19862 14.0036 6.44499 13.7429 6.76992C13.3214 7.29123 13.0679 7.99464 13.0071 8.78375C13.0036 8.80875 13.0036 8.83017 13 8.85517C12.9964 8.88016 12.9964 8.89801 12.9964 8.92301C12.9929 8.96586 12.9929 9.0087 12.9929 9.05155C12.9929 9.11939 12.9893 9.18724 12.9929 9.25865C13.0357 11.0475 14 12.4794 15.7179 12.4794C15.8143 12.4794 15.9071 12.4758 16 12.4651V13.1935C16 14.7431 14.7429 16 13.1929 16L2.80714 15.9964C1.25714 15.9964 0 14.7396 0 13.1899V2.80652C0 1.25686 1.25714 0 2.80714 0H13.1929ZM2.93929 3.81701L2.95 3.82058C3.42143 3.9277 3.65714 4.0848 3.65714 4.6561V11.3403C3.65714 11.9116 3.41786 12.0687 2.94643 12.1759L2.93571 12.1794V12.2794H4.82143V12.1794L4.81071 12.1759C4.33929 12.0687 4.1 11.9116 4.1 11.3403V5.0453L7.175 12.2758H7.35L10.5143 4.84178V11.5046C10.475 11.9545 10.2357 12.0937 9.81071 12.1901L9.8 12.1937V12.2901H13.0821V12.1937L13.0714 12.1901C12.6464 12.0937 12.4036 11.9545 12.3607 11.5046L12.3571 4.6561H12.3607C12.3607 4.0848 12.6 3.9277 13.0714 3.82058L13.0821 3.81701V3.7206H10.5036L8.11071 9.34077L5.71786 3.7206H2.93929V3.81701ZM16 11.0083C15.1036 10.744 14.4643 9.75497 14.5286 8.58737H15.9964V11.0083H16ZM15.7714 6.16648C15.8536 6.16648 15.9286 6.17719 16 6.19862V8.24816H14.5643C14.6179 7.04843 15.05 6.18076 15.7714 6.16648Z" />
    </svg>
  ),
  resume: (
    <svg viewBox="0 0 12 16" fill="currentColor" aria-hidden="true">
      <path d="M2 0C0.896875 0 0 0.896875 0 2V14C0 15.1031 0.896875 16 2 16H10C11.1031 16 12 15.1031 12 14V5.32812C12 4.79688 11.7906 4.2875 11.4156 3.9125L8.08438 0.584375C7.70938 0.209375 7.20312 0 6.67188 0H2ZM10.1719 5.5H7.25C6.83437 5.5 6.5 5.16563 6.5 4.75V1.82812L10.1719 5.5Z" />
    </svg>
  ),
}

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/rehanpinjari', icon: icons.linkedin },
  { label: 'X (Twitter)', href: 'https://x.com/RehanDesigns', icon: icons.x },
  { label: 'Email', href: `mailto:${EMAIL}`, icon: icons.email },
  { label: 'Medium', href: 'https://medium.com/@rehanpinjari', icon: icons.medium },
  { label: 'Resume', href: '/resume', icon: icons.resume },
]

const testimonials = [
  {
    person: 'Sebastian Janus',
    role: 'Founder & CEO at nugrow.de',
    quote: "Page converts because it's clear. No noise. Rehan didn't redesign—he removed everything that didn't matter. That's it.",
    photo: '/Client Sebastian Janus.png',
    brand: '/CFO Icon.png',
  },
  {
    person: 'Josh Golosinskiy',
    role: 'CEO of GRYD.IO',
    quote: 'Rehan got into the product fast. He worked through the protocol complexity, cleaned up the core flows, and made the whole thing easier to use without stripping out the mechanics.',
    photo: '/Client Josh Golosinskiy.png',
    brand: '/GRYD Icon.png',
  },
  {
    person: 'Cristina Romanelli',
    role: 'Co-founder at The Romanelli Group',
    quote: "Rehan doesn't just design websites—he designs experiences. He got what The Romanelli Group is about before he touched Figma. The site doesn't just look premium; it converts. That's the difference between a designer and a partner.",
    photo: '/Client Cristina Romanelli.png',
    brand: '/The Romanelli Group Icon.png',
  },
  {
    person: 'Neil Corke',
    role: 'Operations Director at Falk',
    quote: "Rehan took time to understand Falk before touching the design. He asked the right questions about our customers, our heritage, what actually matters in how we sell. The homepage he delivered is clean and purposeful—every section has a reason. That's exactly what we needed.",
    photo: '/Client Neil Corke.png',
    brand: '/Falk Icon.png',
  },
  {
    person: 'Armand Poonawala',
    role: 'Founder at OpenWork',
    quote: 'Rehan got into the product fast. He worked through the protocol complexity, cleaned up the core flows, and made the whole thing easier to use without stripping out the mechanics.',
    photo: '/Client Armand Poonawala.png',
    brand: '/Openwork Icon.png',
  },
  {
    person: 'Shushan Pambukhchyan',
    role: 'Co-founder & CEO at SINOBI',
    quote: "Rehan restructured our entire product page without redesigning it. Like, the layout stayed clean, the aesthetic stayed ours, but suddenly people understood what we were actually selling. That's not common.",
    photo: '/Client Shushan Pambukhchyan.png',
    brand: '/Sinobi Icon.png',
  },
]

/* Real history, from app/resume/page.tsx. */
const experience = [
  {
    org: 'Xvantage Infotech',
    role: 'Product UX & UI Designer',
    dates: '2024–Now',
    line: 'Designed BookMyFarm and Byting Korner, from first sketch to developer handoff.',
    logo: '/Xvantage Infotech.png',
  },
  {
    org: 'Freelance',
    role: 'Product UX & UI Designer',
    dates: '2022–Now',
    line: '40+ websites, apps and SaaS products for founders and startups.',
    mark: 'F',
  },
  {
    org: 'GTU',
    role: 'B.E. Computer Science & Engineering',
    dates: 'Degree',
    line: 'Prime Institute of Engineering & Technology, Navsari.',
    logo: '/GTU Logo.png',
  },
  {
    org: 'GTU',
    role: 'Diploma in Electrical Engineering',
    dates: 'Diploma',
    line: 'Government Polytechnic Navsari.',
    logo: '/GTU Logo.png',
  },
]

const projects = [
  {
    name: 'BookMyFarm',
    type: 'Farmhouse Marketplace',
    text: 'Designed the booking and trust experience for a 0→1 farmhouse marketplace launching without established brand recognition or customer reviews.',
    tags: ['0→1 Product Design', 'Booking UX', 'Trust & Credibility', 'Marketplace UX'],
    image: '/BookMyFarm Thumbnail.png',
    logo: '/BookMyFarm Icon.svg',
    darkLogo: false,
    gallery: ['/cases/bookmyfarm-1.jpg', '/cases/bookmyfarm-2.jpg'],
    href: 'https://medium.com/@rehanpinjari/how-i-designed-trust-into-a-farmhouse-booking-app-100k-downloads-4-5-rating-b74b968cd3ca',
  },
  {
    name: 'Byting Korner',
    type: 'Fast Food Franchise',
    text: 'A multi-role platform connecting restaurant orders, POS, inventory, recipe-based consumption, stock approvals, warehouse fulfilment and reporting across a franchise network.',
    tags: ['Multi-role UX', 'POS & Inventory', 'Operational Workflows', 'Design Systems'],
    image: '/BytingKorner Thumbnail.png',
    logo: '/BytingKorner Icon.png',
    darkLogo: true,
    gallery: ['/cases/bytingkorner-1.jpg', '/cases/bytingkorner-2.jpg'],
    href: 'https://medium.com/design-bootcamp/how-i-designed-an-org-chart-with-software-bd6650da4bfd',
  },
  {
    name: 'Confidential',
    type: 'AI Legal Services Platform',
    text: 'Worked on core navigation and client and lawyer workflows for an AI-assisted legal services platform, including AI-powered intake, problem refinement and lawyer matching.',
    tags: ['AI-assisted UX', 'LegalTech SaaS', 'Intake & Triage', 'Multi-sided Workflows'],
    image: '/Olanur Cover.png',
    logo: '/MyLaw Logo.png',
    darkLogo: false,
    gallery: ['/cases/legaltech-1.jpg', '/cases/legaltech-2.jpg'],
    href: 'https://rehanpinjari.medium.com/places-in-the-sidebar-verbs-on-the-workspace-781db754d1a8',
  },
]

const stats = [
  { value: '4', label: 'years in product design' },
  { value: '100K+', label: 'downloads on BookMyFarm' },
  { value: '4.5★', label: 'from 353+ reviews' },
  { value: '300+', label: "bookings in BookMyFarm's launch window" },
  { value: '16.7K+', label: 'followers on Medium' },
  { value: '1300+', label: 'people get my writing by email' },
]

const logos = [
  { name: 'Feel', src: '/LogoWall/Feel Wordmark.svg', line: 'Designed the full marketing site. It stayed live for a year, then they redesigned it.' },
  { name: 'Byting Korner', src: '/LogoWall/BytingKorner Wordmark.svg', line: 'Designed the franchise platform across web, mobile, and POS, so each role sees only what its job needs.' },
  { name: 'BookMyFarm', src: '/LogoWall/BookMyFarm Wordmark.svg', line: 'Designed the farmhouse booking app for iOS and Android. 100K+ downloads, 4.5★ from 353+ reviews.' },
  { name: 'Falk', src: '/LogoWall/Falk Wordmark.svg', line: 'Designed the homepage for a third-generation copper cookware brand.' },
  { name: 'Openwork', src: '/LogoWall/Openwork Wordmark.svg', line: 'Designed the Web3 job marketplace: wallet connection, job browsing, talent profiles, and the skill-oracle flow.' },
  { name: 'Gryd.io', src: '/LogoWall/GRYD Wordmark.svg', line: 'Designed the full marketing site, mobile first, for a Jira and process consultancy.' },
  { name: 'Scene Seek', src: '/LogoWall/SceneSeek Wordmark.svg', line: 'Designed the nightlife app end to end: a live venue map and recommendations matched to taste, on iOS, Android, and web.' },
  { name: 'Xvantage Infotech', src: '/LogoWall/Xvanatage Wordmark.svg', line: 'Designed the logo, which is still live, then joined the team as product designer.' },
  { name: 'The Romanelli Group', src: '/LogoWall/The Romanelli Group Wordmark.png', line: 'Designed the full marketing site for a Keller Williams real estate team. They are still using it.' },
  { name: 'Qty AI', src: '/LogoWall/Qty AI Wordmark.svg', line: 'Designed a limited set of SaaS screens. Not a full product.' },
  { name: 'Tulip', src: '/LogoWall/Tulip Wordmark.svg', line: 'Designed the marketing site for a retail customer-engagement platform.' },
  { name: 'SINOBI', src: '/LogoWall/Sinobi Wordmark.svg', line: 'Designed the full site and the Shopify shop for a sustainable footwear brand.' },
  { name: 'VeriKlick', src: '/LogoWall/VeriKlick Wordmark.svg', line: 'Redesigned the brand for an AI interview platform. The work is still live.' },
  { name: 'KLIQTEK', src: '/LogoWall/Kliqtek Wordmark.png', line: 'Redesigned the full marketing site for a Workday partner. The pages are still live.' },
]

type Tab = 'testimonials' | 'experience'

function AboutTabs() {
  const [tab, setTab] = useState<Tab>('testimonials')
  const tabs: { id: Tab; label: string }[] = [
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'experience', label: 'Experience' },
  ]

  return (
    <div className="hp-tabs">
      <div className="hp-tablist" role="tablist" aria-label="About Rehan">
        {tabs.map((t) => (
          <button
            key={t.id}
            id={`hp-tab-${t.id}`}
            type="button"
            role="tab"
            className="hp-tab"
            aria-selected={tab === t.id}
            aria-controls={`hp-panel-${t.id}`}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div
        className="hp-panel"
        id={`hp-panel-${tab}`}
        role="tabpanel"
        aria-labelledby={`hp-tab-${tab}`}
      >
        <div className="hp-panel-scroll" data-lenis-prevent>
          {tab === 'testimonials' &&
            testimonials.map((t) => (
              <article className="hp-card" key={t.person}>
                <img src={t.photo} alt="" />
                <div className="hp-card-body">
                  <p>
                    <b>{t.person}</b> <span className="hp-muted">/ {t.role}</span>
                  </p>
                  <p>“{t.quote}”</p>
                </div>
              </article>
            ))}

          {tab === 'experience' &&
            experience.map((e) => (
              <article className="hp-card" key={`${e.org}-${e.role}`}>
                {e.logo ? <img src={e.logo} alt="" /> : <span className="hp-mark">{e.mark}</span>}
                <div className="hp-card-body">
                  <div className="hp-card-head">
                    <p>
                      <b>{e.org}</b> <span className="hp-muted">/ {e.role}</span>
                    </p>
                    <small>{e.dates}</small>
                  </div>
                  <p className="hp-muted">{e.line}</p>
                </div>
              </article>
            ))}
        </div>
      </div>
    </div>
  )
}

function Testimonials() {
  const [open, setOpen] = useState(0)

  return (
    <div className="hp-quotes">
      {testimonials.map((t, i) => (
        <button
          key={t.person}
          type="button"
          className="hp-quote"
          aria-expanded={open === i}
          onClick={() => setOpen(i)}
        >
          {open === i && <p>“{t.quote}”</p>}
          <span className="hp-author">
            <img src={t.photo} alt="" />
            <span>
              <b>{t.person}</b>
              <small>{t.role}</small>
            </span>
            <img className="hp-brand" src={t.brand} alt="" />
          </span>
        </button>
      ))}
    </div>
  )
}

function LogoWall() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <div className="hp-logos">
      {logos.map((logo) => (
        <button
          key={logo.name}
          type="button"
          className="hp-logo"
          aria-label={logo.name}
          aria-expanded={active === logo.name}
          onClick={() => setActive(active === logo.name ? null : logo.name)}
          onBlur={() => setActive(null)}
        >
          <img src={logo.src} alt="" />
          <span className="hp-logo-tip" role="tooltip">
            <b>{logo.name}</b>
            {logo.line}
          </span>
        </button>
      ))}
    </div>
  )
}

function Dock() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1500)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <div className="hp-dock">
      <a href={CAL} target="_blank" rel="noreferrer">
        <img src="/Meet.svg" alt="" />
        Book a call
      </a>
      <button type="button" onClick={copy} aria-live="polite">
        {copied ? 'Copied' : 'Copy Email'}
      </button>
    </div>
  )
}

export default function Page() {
  return (
    <main className="portfolio hp">
      <section className="hp-hero" id="home">
        <div className="hp-intro">
          <div className="hp-hello">
            <img src="/Clay PFP.png" alt="Rehan Pinjari" />
            <span>Heya! I&apos;m Rehan</span>
          </div>

          <div className="hp-intro-copy">
            <h1>
              Product designer with 4 years of experience across{' '}
              <span className="hp-muted">consumer apps and complex SaaS workflows.</span>
            </h1>
            <p>
              At Xvantage, I designed BookMyFarm, a farmhouse-booking app that now has 100K+ downloads and a
              4.5★ rating. I worked on its booking and trust experience when it had no established brand or
              customer reviews.{' '}
              <span className="hp-muted">Now I&apos;m looking for a full-time role in Bengaluru or remote across India.</span>
            </p>
          </div>

          <nav className="hp-socials" aria-label="Elsewhere">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                {...(s.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                {s.icon}
              </a>
            ))}
          </nav>
        </div>

        <AboutTabs />
      </section>

      <section className="hp-col hp-projects" id="work">
        <header className="hp-head">
          <h2>Selected Product Projects</h2>
          <p>
            From building trust in a new consumer marketplace to designing complex operational software and
            AI-assisted legal experiences, these are three products I&apos;ve worked on and the problems I&apos;ve
            helped solve.
          </p>
        </header>

        <div className="hp-project-list">
          {projects.map((p) => (
            <article className="hp-project" key={p.name}>
              <div className="hp-project-brand">
                <span className={`hp-project-logo${p.darkLogo ? ' is-dark' : ''}`}>
                  <img src={p.logo} alt="" />
                </span>
                <span>
                  <b>{p.name}</b>
                  <small>{p.type}</small>
                </span>
              </div>
              <p>{p.text}</p>
              <a className="hp-media" href={p.href} target="_blank" rel="noreferrer" aria-label={`Read the ${p.name} case study`}>
                <img src={p.image} alt="" loading="lazy" />
                <span className="hp-tags">
                  {p.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </span>
              </a>
              <div className="hp-gallery">
                {p.gallery.map((src) => (
                  <img key={src} src={src} alt="" loading="lazy" />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="hp-col" id="testimonials">
        <header className="hp-head">
          <h2>
            What founders say
            <br />
            about working with me.
          </h2>
          <p>Quotes from the people I designed for, used with their permission.</p>
        </header>
        <Testimonials />
      </section>

      <section className="hp-col" id="numbers">
        <header className="hp-head">
          <h2>Numbers you can check.</h2>
          <p>Store figures, my own writing reach and years of work. Company figures aren&apos;t included.</p>
        </header>
        <div className="hp-stats">
          {stats.map((s) => (
            <div className="hp-stat" key={s.label}>
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="hp-col" id="clients">
        <header className="hp-head">
          <h2>Teams I&apos;ve designed for.</h2>
          <p>Marketing sites, brand work and product design. Hover or tap a logo to see what I did.</p>
        </header>
        <LogoWall />
      </section>

      <Dock />
    </main>
  )
}
