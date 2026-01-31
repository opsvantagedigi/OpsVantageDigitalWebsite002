
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'

function ToTopButton() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return visible ? (
    <button
      aria-label="To the top"
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-sky-500 via-emerald-500 to-amber-400 text-slate-950 font-bold px-4 py-2 rounded-full shadow-lg hover:brightness-110 focus-visible:outline-2 focus-visible:outline-amber-400"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >↑ Top</button>
  ) : null
}

function ThemeToggle() {
  const [theme, setTheme] = useState('dark')
  useEffect(() => {
    const sysTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
    setTheme(localStorage.getItem('theme') || sysTheme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.classList.toggle('light', theme === 'light')
  }, [theme])
  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('theme', next)
  }
  return (
    <button
      aria-label="Toggle theme"
      className="fixed top-6 right-6 z-50 bg-slate-800 dark:bg-slate-200 text-amber-400 dark:text-slate-900 px-3 py-2 rounded-full shadow-lg border border-slate-700 dark:border-slate-300 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-amber-400"
      onClick={toggle}
    >{theme === 'dark' ? '🌙' : '☀️'}</button>
  )
}

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col">
      <Header />
      <main className="container mx-auto px-6 py-12 max-w-3xl flex-1">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-sky-500 via-emerald-500 to-amber-400 bg-clip-text text-transparent">Our Process</h1>
        <p className="text-xl text-center mb-10">A proven, governance-grade approach to building digital systems that last.</p>
        <section className="space-y-10">
          <div>
            <h2 className="text-2xl font-semibold mb-2">1. Discovery</h2>
            <p>We begin every project by understanding your story, goals, challenges, and customers. This ensures every solution is tailored to your real needs.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">2. Architecture</h2>
            <p>We design systems with clarity, scalability, and security in mind. Our architecture is future-proof, compliant with ISO/IEC standards, and built for maintainability.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">3. Implementation</h2>
            <p>We build with discipline, using modern engineering practices, accessibility standards, and rigorous testing. Every detail is crafted for reliability and performance.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">4. Stewardship</h2>
            <p>We don’t disappear after launch. We monitor, maintain, and improve your platform, providing ongoing support, updates, and governance-grade care.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">5. Continuous Improvement</h2>
            <p>We believe in iterative growth. We analyze performance, gather feedback, and optimize systems to ensure your digital foundation evolves with your business.</p>
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-2">Compliance & Governance</h2>
          <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300">
            <li>ISO/IEC 27001-aligned security and data handling</li>
            <li>GDPR, CCPA, ePrivacy, and global legal compliance</li>
            <li>Accessibility (WCAG 2.1 AA), non-discrimination, and privacy by design</li>
            <li>Transparent documentation and change logs</li>
          </ul>
        </section>
      </main>
      <ThemeToggle />
      <ToTopButton />
      <Footer />
    </div>
  )
}
