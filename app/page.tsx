
'use client'

import { useRef, useState } from 'react'

const projects = [
  {
    name: 'BookMyFarm',
    type: 'Farmhouse Marketplace',
    title: 'Designed trust into a farmhouse booking app with 100K+ downloads.',
    text: 'Designed BookMyFarm 0→1 for iOS and Android. It launched with no brand and no reviews, and guests were being asked to pay for farmhouses they’d never seen. I moved reviews above amenities, put stay videos on the home screen, added owner chat to the listing, and offered a deposit option. I also built its Figma design system: 18 components, variables, tokens.',
    quote: "Rehan changed how we thought about the product. We started with 'we need a booking app' and ended up with a complete experience built around trust, availability, owners, and customers. He didn’t just design the screens—he helped us think through how the whole product should work together.",
    person: 'Vipul Sapra',
    role: 'Founder & CEO, BookMyFarm',
    personImage: '/Client Vipul Sapra.png',
    tags: ['App Design', 'Product Design', 'System Design'],
    stats: [
  { icon: 'fa-solid fa-download', text: '100K+ downloads', bg: '#E7F6EC', color: '#0E9F4E' },
  { icon: 'fa-solid fa-star', text: '4.5★ rating, 353+ reviews', bg: '#FFF4D6', color: '#C4840A' },
],
    href: 'https://medium.com/@rehanpinjari/how-i-designed-trust-into-a-farmhouse-booking-app-100k-downloads-4-5-rating-b74b968cd3ca',
    image: '/BookMyFarm Thumbnail.png',
    video: '/BookMyFarm Hero Case.mp4',
    logo: '/BookMyFarm Icon.svg',
  },
  {
    name: 'Byting Korner',
    type: 'Fast Food Franchise',
  title: "Not a restaurant dashboard. A system where every role sees what its job needs.",
  text: "Designed Byting Korner’s franchise operations platform in Figma: POS (cash, UPI, split payments), inventory, recipes, stock requests and reporting, for three access levels: Super Admin, Master Franchise and Outlet. Stock requests move through explicit states (asked, approved, sent, received) with a three-signature handoff, and recipes update inventory when an order completes.",
    quote: "Rehan didn't just design a system. He designed the backbone that lets us scale without losing control. 50+ outlets across 10 cities, and every franchisee knows exactly what's happening—inventory, orders, revenue, real-time. That's how you grow without chaos."
,
  person: 'Ashish Doshi',
  role: 'Founder & Director, Byting Korner',
    personImage: '/BytingKorner Icon.png',
  tags: ['Product Design', 'POS Design', 'System Design'],
  stats: [
  { icon: 'fa-solid fa-store', text: '50+ outlets · 10 cities', bg: '#FDE8E4', color: '#D3542C' },
  { icon: 'fa-solid fa-location-dot', text: '3M+ consumers', bg: '#E7F0FF', color: '#245AEE' },
],  href: 'https://medium.com/design-bootcamp/how-i-designed-an-org-chart-with-software-bd6650da4bfd',
    image: '/BytingKorner Thumbnail.png',
    video: '/BytingKorner Hero Case.mp4',
    logo: '/BytingKorner Icon.png',
  },
  {
  name: 'Mylaw',
  type: 'Legal Tech SaaS',
  title: 'Places in the sidebar, verbs on the workspace.',
  text: 'A client’s review of duplicate menu items, and the rule it produced. I designed the navigation and core flows for the user and lawyer roles, including an AI intake step that shows users what it understood before matching them with a lawyer. Nothing was tested with users. The client approved eight screens.',
  quote: 'Rehan was a pleasure to work with and he helped us in shaping MyLaw’s initial design. He was patient, flexible, and always receptive to feedback, consistently translating ideas and suggestions into strong design results.',
  person: 'Annonymous',
  role: 'CEO, MyLaw',
  personImage: '/Client Karan Dhawan.png',
  tags: ['Product Design', 'Navigation', 'NDA'],
  stats: [
    { icon: 'fa-solid fa-layer-group', text: '8 screens approved', bg: '#F4F4F4', color: '#111' },
    { icon: 'fa-solid fa-code-branch', text: '2 roles, 1 shell', bg: '#F4F4F4', color: '#111' },
  ],
  href: 'https://rehanpinjari.medium.com/places-in-the-sidebar-verbs-on-the-workspace-781db754d1a8?postPublishedType=initial',
  image: '/Olanur Cover.png',
  video: '',
  logo: '/MyLaw Logo.png',
},
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
  { name: 'The Romanelli Group', src: '/LogoWall/The Romanelli Group Wordmark.png', className: 'logo-romaneli', line: 'Designed the full marketing site for a Keller Williams real estate team. They are still using it.' },
  { name: 'Qty AI', src: '/LogoWall/Qty AI Wordmark.svg', line: 'Designed a limited set of SaaS screens. Not a full product.' },
  { name: 'Tulip', src: '/LogoWall/Tulip Wordmark.svg', line: 'Designed the marketing site for a retail customer-engagement platform.' },
  { name: 'SINOBI', src: '/LogoWall/Sinobi Wordmark.svg', line: 'Designed the full site and the Shopify shop for a sustainable footwear brand.' },
  { name: 'VeriKlick', src: '/LogoWall/VeriKlick Wordmark.svg', line: 'Redesigned the brand for an AI interview platform. The work is still live.' },
  { name: 'KLIQTEK', src: '/LogoWall/Kliqtek Wordmark.png', line: 'Redesigned the full marketing site for a Workday partner. The pages are still live.' },
]
const testimonials = [
  {
    person: 'Sebastian Janus',
    role: 'Founder & CEO',
    company: 'nugrow.de',
    quote:
      "Page converts because it's clear. No noise. Rehan didn't redesign—he removed everything that didn't matter. That's it.",
    clientImage: '/Client Sebastian Janus.png',
    brandImage: '/CFO Icon.png',
  },
  {
    person: 'Josh Golosinskiy',
    role: 'CEO',
    company: 'GRYD.IO',
    quote:
      "Rehan got into the product fast. He worked through the protocol complexity, cleaned up the core flows, and made the whole thing easier to use without stripping out the mechanics.",
    clientImage: '/Client Josh Golosinskiy.png',
    brandImage: '/GRYD Icon.png',
  },
  {
    person: 'Cristina Romanelli',
    role: 'Co-founder',
    company: 'The Romanelli Group',
    quote:
      "Rehan doesn't just design websites—he designs experiences. He got what The Romanelli Group is about before he touched Figma. The site doesn't just look premium; it converts. That's the difference between a designer and a partner. 👊🏼",
    clientImage: '/Client Cristina Romanelli.png',
    brandImage: '/The Romanelli Group Icon.png',
  },
  {
    person: 'Neil Corke',
    role: 'Operations Director',
    company: 'Falk',
    quote:
      "Rehan took time to understand Falk before touching the design. He asked the right questions about our customers, our heritage, what actually matters in how we sell. The homepage he delivered is clean and purposeful—every section has a reason. That's exactly what we needed.",
    clientImage: '/Client Neil Corke.png',
    brandImage: '/Falk Icon.png',
  },
  {
    person: 'Armand Poonawala',
    role: 'Founder',
    company: 'OpenWork',
    quote:
      "Rehan got into the product fast. He worked through the protocol complexity, cleaned up the core flows, and made the whole thing easier to use without stripping out the mechanics.",
    clientImage: '/Client Armand Poonawala.png',
    brandImage: '/Openwork Icon.png',
  },
  {
    person: 'Shushan Pambukhchyan',
    role: 'Co-founder & CEO',
    company: 'SINOBI',
    quote:
      "Rehan restructured our entire product page without redesigning it. Like, the layout stayed clean, the aesthetic stayed ours, but suddenly people understood what we were actually selling. That's not common.",
    clientImage: '/Client Shushan Pambukhchyan.png',
    brandImage: '/Sinobi Icon.png',
  },
]



function FlipflopButton({
  href,
  children,
  dark = true,
  className = '',
  target,
  rel,
}: {
  href: string
  children: string
  dark?: boolean
  className?: string
  target?: string
  rel?: string
}) {
  return (
    <a
      href={href}
      data-text={children}
      target={target}
      rel={rel}
      className={`button-flipflop${dark ? ' is-dark' : ' is-light'}${className ? ` ${className}` : ''}`}
    >
      <span className="button-flipflop__container">
        <span className="button-flipflop__text">{children}</span>
      </span>
    </a>
  )
}




function CaseStudy({ project }: { project: typeof projects[number] }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const delayRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const hovering = useRef(false)
  const [playing, setPlaying] = useState(false)
  const [hasVideo, setHasVideo] = useState(Boolean(project.video))

  const clearDelay = () => {
    if (delayRef.current) {
      clearTimeout(delayRef.current)
      delayRef.current = null
    }
  }

const start = () => {
  hovering.current = true
  if (!hasVideo || !project.video) return
  clearDelay()
  delayRef.current = setTimeout(() => {
    const video = videoRef.current
    if (!video) return
    if (!video.src) video.src = project.video
    const go = () => setPlaying(true)
    video.play().then(go).catch(() => setHasVideo(false))
  }, 80)
}
  const pause = () => {
    hovering.current = false
    clearDelay()
    const video = videoRef.current
    if (!video) return
    video.pause()
    setPlaying(false)
  }

  const onEnded = () => {
    const video = videoRef.current
    if (!video) return
    video.currentTime = 0
    if (hovering.current) {
      video.play().catch(() => { })
    } else {
      setPlaying(false)
    }
  }

  return (
    <article className="case">
      <div
        className={`case-media${playing ? ' is-playing' : ''}`}
        onPointerEnter={start}
        onPointerLeave={pause}
        onPointerDown={start}
        onPointerUp={pause}
        onPointerCancel={pause}
      >
        <img
          className={`case-poster${playing ? ' is-hidden' : ''}`}
          src={project.image}
          alt=""
        />

        {hasVideo && (
        <video
  ref={videoRef}
  className="case-video"
  muted
  playsInline
  preload="none"
  onPlaying={() => setPlaying(true)}
  onEnded={onEnded}
  onError={() => setHasVideo(false)}
/>
        )}

        <div className="case-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

<div className="case-stats">
  {project.stats.map((stat) => (
    <span className="case-stat" key={stat.text}>
      <span
        className="case-stat-icon"
        style={{ background: stat.bg, color: stat.color }}
      >
        <i className={stat.icon} aria-hidden="true" />
      </span>
      {stat.text}
    </span>
  ))}
</div>
    
      </div>

      <div className="case-layout">
        <div className="case-brand">
          <span className="case-logo">
            <img src={project.logo} alt="" />
          </span>
          <span>
            <b>{project.name}</b>
            <small>{project.type}</small>
          </span>
        </div>

        <div className="case-body">
          <h3>{project.title}</h3>
          <p>{project.text}</p>
        </div>

        <div className="case-quote-col">
          <div className="case-quote">
            <p>“{project.quote}”</p>
            <div className="case-author">
              {project.personImage ? (
                <img className="case-avatar" src={project.personImage} alt={project.person} />
              ) : (
                <span className="case-avatar" />
              )}
              <span>
                <b>{project.person}</b>
                <small>{project.role ?? `Founder, ${project.name}`}</small>
              </span>
            </div>
          </div>

          <FlipflopButton className="case-more" href={project.href} target="_blank"
            rel="noopener noreferrer" dark={false}>Read full case study</FlipflopButton>
        </div>
      </div>
    </article>
  )
}

export default function Page() {
  const [openTestimonial, setOpenTestimonial] = useState(0)

  return (
    <main className="portfolio">

      <section className="hero" id="home">
        <div className="hero-copy">
         <h1>
 I design products that make <span className="hero-line is-muted">strangers comfortable paying.</span>
</h1>
          <div className="hero-actions">
            <FlipflopButton href="#work">See my work</FlipflopButton>
            <FlipflopButton href="#contact" dark={false}>Let's talk</FlipflopButton>
          </div>
        </div>

        <span className="scroll-note">Scroll to explore</span>

      <aside className="recent-articles">
  <span className="recent-label">recent<br />article</span>
  <img className="recent-arrow" src="/arrow.svg" alt="" />

  <a
    className="recent-card"
    href="https://medium.muz.li/the-real-difference-between-a-5k-designer-and-a-50k-designer-9ae98214b2ae"
    target="_blank"
    rel="noreferrer"
  >
    <img src="https://miro.medium.com/v2/resize:fit:144/format:webp/1*erlEVVKY5VBY3Aw0QssHBg.png" alt="" />
    <b>What Separates $5K<br />From $50K Designers</b>
  </a>

  <a
    className="recent-card"
    href="https://rehanpinjari.medium.com"
    target="_blank"
    rel="noreferrer"
  >
    <img src="https://miro.medium.com/v2/resize:fit:144/format:webp/1*kO7B7QKjagEFijQVK6s20A.png" alt="" />
    <b>The System That<br />Ended Free Work</b>
  </a>
</aside>
      </section>

      <section className="section work-section" id="work">
        <div className="work-header">
          <div className="work-kicker">
            <div className="logo-orbs" aria-hidden="true">
              <span className="orb"><img src="/BytingKorner Icon.png" alt="" /></span>
              <span className="orb"><img src="/BookMyFarm Icon.svg" alt="" /></span>
              <span className="orb"><img src="/Tulip Icon.svg" alt="" /></span>
              <span className="orb"><img src="/SceneSeek Icon.png" alt="" /></span>
              <span className="orb"><img src="/VeriKlick Icon.svg" alt="" /></span>
            </div>
            <p>Trusted by 40+ Founders</p>
          </div>
          <h2>
           Products I’ve designed.
{' '}
            <span>Mobile apps, SaaS platforms and design systems.</span>
          </h2>
        </div>

        <div className="case-list">
          {projects.map((item) => (
            <CaseStudy project={item} key={item.name} />
          ))}
        </div>

<FlipflopButton className="work-cta" href="https://cal.com/hirehan/remote-product-designer" target="_blank" rel="noreferrer">
 Book a 30-min call
</FlipflopButton>

      </section>

      <section className="section trust-section" id="trust">
<h2 className="trust-heading">
 Don’t take my word.

  <br />
  <span>Take theirs.</span>
</h2>

  <div className="testimonial-list">
    {testimonials.map((item, index) => {
      const open = openTestimonial === index

      return (
        <button
          key={`${item.person}-${index}`}
          type="button"
          className={`testimonial-box${open ? ' is-open' : ''}`}
          onClick={() => setOpenTestimonial(index)}
          aria-expanded={open}
        >
          <div className="testimonial-content">
            {open && (
              <p className="testimonial-text">“{item.quote}”</p>
            )}

            <div className="testimonial-author">
              <div className="author-left">
                <span className="author-photo">
                  <img
                    src={item.clientImage}
                    alt={item.person}
                  />
                </span>

                <span>
                  <b>{item.person}</b>
                  <small>
                    {item.role}, {item.company}
                  </small>
                </span>
              </div>

              <span className="author-logo">
                <img
                  src={item.brandImage}
                  alt={item.company}
                />
              </span>
            </div>
          </div>
        </button>
      )
    })}
  </div>

  <div className="trust-footer">
    <p className="trust-more">and more...</p>

    <div className="trust-stats">
      <p>4 years in product design</p>
       <p className="trust-medium">
        16.7K+ followers on
        <img src="/Medium Logo.svg" alt="Medium" />
      </p>
    </div>
  </div>

<div className="logo-grid">
  {logos.map((logo) => (
    <div className="logo-box" key={logo.name}>
      <img className={logo.className || ''} src={logo.src} alt="" />
      <span className="logo-tip">
        <b>{logo.name}</b>
        <small>{logo.line}</small>
      </span>
    </div>
  ))}
</div>
</section>

      <section className="section about-section" id="about">
        <div className="about-main">
          <aside className="about-sidebar">
            <h2>About Rehan</h2>

            <div className="about-profile">
              <img className="about-pfp" src="/Clay PFP.png" alt="Rehan Pinjari" />

              <dl className="about-meta">
                <div>
                  <dt>Name</dt>
                  <dd>Rehan Pinjari</dd>
                </div>
                <div>
                  <dt>Role</dt>
                  <dd>Product Designer</dd>
                </div>
                <div className="about-availability">
                  <dt>Availability</dt>
                  <dd>
                    <a className="avail-pill" href="https://cal.com/hirehan/remote-product-designer" target="_blank" rel="noreferrer">
                      Open to full-time roles
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </aside>

          <div className="about-bio">
            <div className="about-copy">
              <p>I stay until what ships matches what I designed.</p>
              <p>4 years. 100K+ downloads on BookMyFarm.
                <br />
4.5★ from 353+ reviews.</p>

              <p>I work directly with founders and engineers, from the first call to developer handoff, and I stay until what ships matches what was designed.</p>
              <p>I like the work where the constraints are real: no brand yet, a payment gateway with opinions, one system that has to serve three kinds of users. Now I want to go deep on one product with a team that values clarity and execution over flash.</p>
            </div>
            <FlipflopButton className="about-more" href="/about">Read more about me</FlipflopButton>
          </div>
        </div>
      </section>

    

    </main>
  )
}