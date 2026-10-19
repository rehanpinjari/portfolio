'use client'

import { useEffect, useRef } from 'react'

function Timeline({
  items,
}: {
  items: {
    mark?: string
    color?: string
    logo?: string
    blur?: boolean
    title: string
    tag?: string
    body?: string
    points?: string[]
    dates: string
    href?: string
  }[]
}) {
  return (
    <ol className="tl">
      {items.map((item) => (
<li key={`${item.title}-${item.dates}`}>          <span
            className={`tl-dot${item.logo ? ' is-logo' : ''}${item.blur ? ' is-blur' : ''}`}
            style={{ background: item.logo ? '#fff' : item.color }}
            aria-hidden="true"
          >
            {item.logo ? <img src={item.logo} alt="" /> : item.mark}
          </span>
          <div className="tl-body">
            <div className="tl-top">
              <h3>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noreferrer">{item.title}</a>
                ) : (
                  item.title
                )}
              </h3>
              <small>{item.dates}</small>
            </div>
            {item.tag && <p className="tl-tag">{item.tag}</p>}
            {item.points ? (
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            ) : (
              item.body && <p>{item.body}</p>
            )}
          </div>
        </li>
      ))}
    </ol>
  )
}

export default function ResumePage() {
  return (
    <main className="cv">
      <header className="cv-card">
        <img src="/Clay PFP.png" alt="" />
        <div>
          <h1>Rehan Pinjari</h1>
          <p>Product designer. First call to developer handoff, since 2022.</p>
          <div className="cv-card-row">
            <span>Surat, India · Remote worldwide, or hybrid/onsite across India (open to relocate)</span>
            <a className="cv-pdf" href="/Rehan Product Designer Resume.pdf" download>Download PDF</a>
          </div>
        </div>
      </header>

      <section className="cv-block">
        <h2>About</h2>
        <p>
Four years taking founder ideas to products people use: iOS, Android, web, and POS. BookMyFarm reached 100K+ downloads and 4.5★. I stay through developer handoff. Looking for a full-time Product Designer role on one product, remote or across India.
        </p>
      </section>

      <section className="cv-block">
        <h2>Contact</h2>
        <dl className="cv-contact">
          <div><dt>Email</dt><dd><a href="mailto:prehandev@gmail.com">prehandev@gmail.com</a></dd></div>
          <div><dt>Phone</dt><dd><a href="tel:+919725292779">+91 97252 92779</a></dd></div>
          <div><dt>LinkedIn</dt><dd><a href="https://linkedin.com/in/rehanpinjari" target="_blank" rel="noreferrer">linkedin.com/in/rehanpinjari</a></dd></div>
          <div><dt>X</dt><dd><a href="https://x.com/RehanDesigns" target="_blank" rel="noreferrer">x.com/RehanDesigns</a></dd></div>
          <div><dt>Call</dt><dd><a href="cal.com/hirehan/remote-product-designer" target="_blank" rel="noreferrer">cal.com/hirehan</a></dd></div>
        </dl>
      </section>

      <section className="cv-block">
  <h2>Work experience</h2>
  <Timeline
items={[
  {
  logo: '/Xvantage Infotech.png',
  title: 'Product UX & UI Designer',
    tag: 'Xvantage Infotech · Surat, India',
    dates: 'Sep 2024 — present',
    points: [
      'Designed BookMyFarm 0→1 for iOS and Android, reordering the listing around trust (reviews and stay videos first, owner chat in the listing, deposit option). Launched to 100K+ downloads and a 4.5★ rating from 353+ reviews.',
      'Designed Byting Korner’s franchise platform in Figma — POS, inventory, recipes, stock requests, reporting — for 3 access levels (Super Admin, Master Franchise, Outlet), so each role sees only what its job needs.',
      'Built a documented Figma design system for BookMyFarm (18 components, variables, tokens) that another designer could pick up and extend after handoff.',
    ],
  },
  {
    mark: 'F',
  color: '#1F6B4A',
  title: 'Product UX & UI Designer',
    tag: 'Freelance · Remote',
    dates: 'Sep 2022 — present',
    points: [
      'Designed 40+ websites, mobile apps, and SaaS products for founders and startups, from first call to developer handoff.',
      'Worked directly with founders and developers across time zones, including an AI legal platform for a Canadian client (NDA). Owned scope and delivery, and ran recurring design reviews with prototypes and flow videos.',
    ],
  },
]}
  />
</section>

<section className="cv-block">
  <h2>Projects</h2>
  <Timeline
   items={[
  {
    logo: '/BookMyFarm Icon.svg', title: 'BookMyFarm',
    tag: 'Farmhouse booking marketplace · iOS + Android',
    dates: 'Jan 2025 — present',
    href: 'https://medium.com/@rehanpinjari/how-i-designed-trust-into-a-farmhouse-booking-app-100k-downloads-4-5-rating-b74b968cd3ca',
    points: [
      'A 0→1 marketplace where guests pay for private farmhouses they have never visited, launched with no brand and no review history.',
      'Rebuilt the listing around trust: guest reviews above the amenities grid, stay videos on the home screen, owner chat in the listing, after aligning a team that had prioritised amenities.',
      'Shaped availability (available, booked, blocked) and a full-or-deposit payment option around backend and gateway limits, and documented an 18-component system so a small team could ship on time.',
      'Launched to 100K+ downloads, a 4.5★ rating (353+ reviews), and 300+ bookings in the launch window.',
    ],
  },
  {
    logo: '/BytingKorner WB.png', title: 'Byting Korner',
    tag: 'Franchise POS & operations · Web, POS',
    dates: 'Mar 2025',
    href: 'https://medium.com/design-bootcamp/how-i-designed-an-org-chart-with-software-bd6650da4bfd',
    points: [
      'A POS and back office for a growing restaurant franchise: orders, inventory, recipes, stock requests, and reporting.',
      'Designed role-based experiences across Super Admin, Master Franchise, and Outlet, so each role sees and edits only what its job needs.',
      'Designed the stock-request flow (asked, approved, sent, received) with explicit states and a three-party signature handoff, recipe-based stock updates when an order completes, and POS ordering with cash, UPI, and split payments.',
      'Company today, not a personal claim: 50+ outlets, 10 cities, 3M+ consumers.',
    ],
  },
  {
    logo: '/MyLaw Logo.png', title: 'Legal Tech SaaS',
    tag: 'AI legal platform · Canadian startup · NDA',
    dates: 'Jan — Jun 2025',
    points: [
      'An AI legal platform with a marketing site, a client workspace, and a lawyer-facing side.',
      'Designed the AI intake flow (instant acknowledgment, plain-language summary, a “Refine My Problem” step before lawyer matching), merged two tabs into one Workspace, and removed a duplicate Settings item.',
      'Designed the lawyer request board, a booking flow that shows the fee before slot selection, plus authentication, registration, lawyer profile, templates and pricing. Built clickable prototypes and flow videos used in client demos, and designed the product logo.',
    ],
  },
  {
    logo: '/Openwork Icon.png', title: 'Openwork',
    tag: 'Web3 job marketplace',
    dates: 'Aug — Nov 2024',
    points: [
      'A decentralized work platform connecting job givers and talent through wallet-based identity.',
      'Designed wallet connection, job browsing and details, talent profiles, and a skill-oracle flow.',
    ],
  },
]}
  />
</section>

<section className="cv-block">
  <h2>Education</h2>
  <Timeline
    items={[
      {
        color: '#fff', logo: '/GTU Logo.png',
        title: 'B.E. Computer Science & Engineering',
        tag: 'Prime Institute of Engineering & Technology · GTU',
        body: 'Navsari.',
        dates: 'BE · Degree',
      },
      {
        color: '#fff', logo: '/GTU Logo.png',
        title: 'Diploma in Electrical Engineering',
        tag: 'Government Polytechnic Navsari · GTU',
        body: 'Navsari.',
        dates: 'Diploma',
      },
    ]}
  />
</section>

<section className="cv-end">
  <p>That’s the work so far. Next stop is a team.</p>
  <span>Open to full-time roles. Remote worldwide, or hybrid/onsite across India.</span>
  <div className="cv-end-actions">
    <a className="cv-pdf cv-end-dark" href="https://cal.com/hirehan/remote-product-designer" target="_blank" rel="noreferrer">Book a call</a>
    <a className="cv-pdf" href="mailto:prehandev@gmail.com">Email me</a>
  </div>
</section>
    </main>
  )
}