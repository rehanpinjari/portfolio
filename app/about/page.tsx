'use client'

import { useState } from 'react'

export default function AboutPage() {
  const [mode, setMode] = useState<'full' | 'quick'>('full')

  return (
    <main className="portfolio about-page">
      <section className="about-page-content">
        <header className="about-page-hero">
          <h1>
            I’m Rehan.
            <br />
I design products
            <br />
and see them through handoff.
          </h1>
          <img src="/Clay PFP.png" alt="Portrait of Rehan Pinjari" />
        </header>

        <div className="about-mode-tabs" role="tablist" aria-label="About story length">
          <button
            role="tab"
            aria-selected={mode === 'full'}
            className={mode === 'full' ? 'active' : ''}
            onClick={() => setMode('full')}
          >
            Full Story
          </button>
          <button
            role="tab"
            aria-selected={mode === 'quick'}
            className={mode === 'quick' ? 'active quick' : 'quick'}
            onClick={() => setMode('quick')}
          >
            Quick Story
          </button>
        </div>

        {mode === 'full' ? (
          <div className="about-story">
            <p className="about-lead">
             Four years ago I started designing products for founders, working with them and their developers from the first call to handoff.</p>
            <p className="about-lead">
             That taught me to decide fast with real constraints in front of me: backend limits, payment gateways, wallets, and users who had never seen the product.</p>

            <section className="story-section">
              <h2>The proof</h2>
              <p>Booking. Franchise POS. Legal tech. Web3. Same job: make a complex system feel simple.</p>
              <ul className="about-proof">
                <li>
                  <b>BookMyFarm</b>
                  <span>No brand and no reviews at launch, so the listing had to earn trust: reviews above amenities, stay videos, owner chat. Availability and full-or-deposit payments were shaped around backend and gateway limits. 100K+ downloads, 4.5★.</span>
                </li>
                <li>
                  <b>Byting Korner</b>
                  <span>One system for Super Admin, Master Franchise and Outlet, each seeing only what its job needs. POS for cash, UPI and split payments. A stock-request flow with explicit states.</span>
                </li>
                <li>
                  <b>Legal Tech SaaS</b>
                  <span>An AI legal platform for a Canadian startup, designed without a written spec. An intake step that shows users what the AI understood before matching them with a lawyer, plus the lawyer side, auth, workspace and pricing. Prototypes and flow videos used in client demos.</span>
                </li>
                <li>
                  <b>Openwork</b>
                  <span>Web3 job marketplace. Wallet connection, job browsing, talent profiles, skill-oracle flow.</span>
                </li>
                <li>
                  <b>Manage PG</b>
                  <span>Owners, tenant KYC, supervisors and financial reporting in one product.</span>
                </li>
              </ul>
              <p>When roles and limits pull in different directions, I stop designing for looks and design for what has to ship. BookMyFarm’s design system has 18 components, variables and tokens, so another designer can extend it.</p>
            </section>

            <section className="story-section">
              <h2>Who I am</h2>
              <p>I write on Medium (16.7K+ followers) because clear thinking produces clear design. I care about explaining a decision to an engineer and to a founder.</p>
              <p>When I’m not designing, I’m reading product strategy, trying new tools, or thinking about how a system actually scales.</p>
            </section>

            <section className="story-section">
              <h2>Why full-time now</h2>
              <p>I’ve spent 4 years with founders, across very different products. Next is one product, with a team that cares about shipping.</p>
              <ul className="about-looking">
                <li>A product I can care about

</li>
                <li>A team that values clarity over flash
</li>
                <li>Systems, not just screens</li>
                <li>Remote worldwide, or hybrid/onsite across India</li>
              </ul>
            </section>

            <a className="pill pill-dark about-talk" href="/#contact">Let’s talk</a>
          </div>
        ) : (
          <div className="about-story quick-story">
            <p>4 years. Mobile, SaaS, POS and Web3. BookMyFarm: 100K+ downloads.


</p>
            <p>I stay through developer handoff, and I like the work where the constraints are real.
</p>
            <p>Looking for a full-time Product Designer role. Remote worldwide, or hybrid/onsite across India.</p>
            <a className="pill pill-dark about-talk" href="/#contact">Let’s talk</a>
          </div>
        )}
      </section>
    </main>
  )
}