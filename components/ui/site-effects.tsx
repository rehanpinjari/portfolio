'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

export default function SiteEffects() {
  const pathname = usePathname()

  useEffect(() => {
    const click = new Audio('/click.mp3')
    click.volume = 0.5
    click.preload = 'auto'

    const onPress = (event: PointerEvent) => {
      const el = event.target as HTMLElement | null
      const hit = el?.closest('a, button')
      if (!hit) return
      if (hit.closest('.logo-box, .testimonial-box')) return
      click.currentTime = 0
      click.play().catch(() => {})
    }

    document.addEventListener('pointerdown', onPress, true)

    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.05,
      lerp: 0.085,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      prevent: (node) => node.tagName === 'VIDEO',
    })

    lenis.scrollTo(0, { immediate: true })

    return () => {
      document.removeEventListener('pointerdown', onPress, true)
      lenis.destroy()
    }
  }, [pathname])

  return null
}