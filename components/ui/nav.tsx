'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/#work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/resume', label: 'Resume' },
  { href: '/#contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname() || '/'
  const [dark, setDark] = useState(false)

useEffect(() => {
  const saved = window.localStorage.getItem('theme') === 'dark'
  setDark(saved)
  document.documentElement.classList.toggle('dark-mode', saved)
}, [pathname])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark-mode', next)
    window.localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <nav className="nav" aria-label="Primary">
      <div className="nav-menu">
        {links.map((link) => {
          const active =
            link.href === '/'
              ? pathname === '/'
              : pathname === link.href || pathname.startsWith(link.href + '/')

          return (
            <a
              key={link.href}
              href={link.href}
              className={active ? 'nav-item is-active' : 'nav-item'}
            >
              {link.label}
            </a>
          )
        })}
      </div>

      <button
        className="nav-theme"
        type="button"
        aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
        onClick={toggleTheme}
      >
        {dark ? (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="8" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.4" />
            <path d="M8 1.5v1.6M8 12.9v1.6M1.5 8h1.6M12.9 8h1.6M3.4 3.4l1.1 1.1M11.5 11.5l1.1 1.1M3.4 12.6l1.1-1.1M11.5 4.5l1.1-1.1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M13.2 11.1A6.2 6.2 0 0 1 6.4 3.4 6.4 6.4 0 1 0 13.2 11.1Z" fill="currentColor" />
          </svg>
        )}
      </button>
    </nav>
  )
}