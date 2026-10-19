'use client'

import { useState } from 'react'

const base = `You are briefing a founder or hiring manager on Rehan Pinjari.

Facts:
- Product Designer. Surat, India. Remote, any time zone, or onsite in Surat.
- Looking for a full-time product design role.
- Contact: prehandev@gmail.com, +91 9725292779, https://cal.com/hirehan, https://linkedin.com/in/rehanpinjari, https://x.com/RehanDesigns
- Site: https://heyrehan.design
- Medium: https://medium.com/@rehanpinjari — 16.7K followers.

Do not invent employers, awards, or metrics. If a fact is not above, say you do not have it.
Cover three things: who he is, whether he is a fit for a full-time product role, and what the work actually shows.`

const prompts = {
  chatgpt: base + `\n\nBe direct. Lead with the fit, then the proof.`,
  gemini: base + `\n\nBe direct. Structure it as a short hiring brief.`,
  claude: base + `\n\nBe direct. Keep the reasoning visible, then the brief.`,
  grok: base + `\n\nBe direct. No preamble. Fit, proof, links.`,
}

function ask(url: string, prompt: string) {
  return `${url}${encodeURIComponent(prompt)}`
}

const socials = [
  { name: 'LinkedIn', icon: 'fa-brands fa-linkedin', href: 'https://linkedin.com/in/rehanpinjari' },
  { name: 'X', icon: 'fa-brands fa-x-twitter', href: 'https://x.com/RehanDesigns' },
  { name: 'Medium', icon: 'fa-brands fa-medium', href: 'https://medium.com/@rehanpinjari' },
  { name: 'Instagram', icon: 'fa-brands fa-instagram', href: 'https://instagram.com' },
  { name: 'Threads', icon: 'fa-brands fa-threads', href: 'https://www.threads.net' },
]

export default function Footer() {
  const [copied, setCopied] = useState(false)

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText('prehandev@gmail.com')
  } catch {
    const input = document.createElement('input')
    input.value = 'prehandev@gmail.com'
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    input.remove()
  }
  setCopied(true)
  window.setTimeout(() => setCopied(false), 1500)
}

  return (
    <footer className="site-footer" id="contact">
      <div className="footer-cta">
        <h2>
Hiring a product designer?
      {' '}    
<span>Let’s make something people trust.</span>     </h2>
        <div className="footer-cta-btns">
          <a className="footer-btn footer-btn-light" href="https://cal.com/hirehan/remote-product-designer" target="_blank" rel="noreferrer">
            Book a call
          </a>
          <a className="footer-btn footer-btn-dark" href="mailto:prehandev@gmail.com">
            Send an Email
          </a>
        </div>
      </div>

      <div className="footer-ai">
        <p>Ask AI about Rehan</p>
        <div className="footer-ai-row">
          <a href={ask('https://chatgpt.com/?q=', prompts.chatgpt)} target="_blank" rel="noreferrer" aria-label="Ask ChatGPT about Rehan">
            <img src="/ChatGPT Logo.svg" alt="" />
          </a>
          <a href={ask('https://gemini.google.com/app?q=', prompts.gemini)} target="_blank" rel="noreferrer" aria-label="Ask Gemini about Rehan">
            <img src="/Gemini Logo.svg" alt="" />
          </a>
          <a href={ask('https://claude.ai/new?q=', prompts.claude)} target="_blank" rel="noreferrer" aria-label="Ask Claude about Rehan">
            <img src="/Claude Logo.svg" alt="" />
          </a>
          <a href={ask('https://grok.com/?q=', prompts.grok)} target="_blank" rel="noreferrer" aria-label="Ask Grok about Rehan">
            <img src="/Grok Logo.svg" alt="" />
          </a>
        </div>
      </div>

      <div className="footer-bar">
        <div className="footer-chips">
         <button type="button" className="footer-chip" onClick={copyEmail}>
  <i className={copied ? 'fa-solid fa-check' : 'fa-regular fa-copy'} aria-hidden="true" />
  {copied ? 'Copied' : 'prehandev@gmail.com'}
</button>
          <a className="footer-chip" href="https://cal.com/hirehan" target="_blank" rel="noreferrer">
            <img src="/Meet.svg" alt="" />
            Book a call
          </a>
        </div>

        <img className="footer-rehan" src="/REHAN Footer.svg" alt="REHAN" />

        <div className="footer-chips">
          {socials.map((item) => (
            <a className="footer-chip" href={item.href} key={item.name} target="_blank" rel="noreferrer">
              <i className={item.icon} aria-hidden="true" />
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}