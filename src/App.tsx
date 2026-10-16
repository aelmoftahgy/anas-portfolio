import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { Download, Copy, Check, Menu, X, Mail, Linkedin, Github, Plus } from 'lucide-react'
import { cvBase64 } from './cv'
import { site, nav, about, projects, timeline, skills, certs } from './content'

gsap.registerPlugin(ScrollTrigger)
async function saveCv() {
  const bytes = Uint8Array.from(atob(cvBase64), c => c.charCodeAt(0))
  const blob = new Blob([bytes], { type: 'application/pdf' })
  try {
    const dl = await (window as any).claude?.use?.('downloads')
    if (dl) { await dl.save({ filename: 'Anas_Elmoftahgy_CV.pdf', data: blob }); return }
  } catch { return }
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'Anas_Elmoftahgy_CV.pdf'; a.click()
}
const reduce = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Character-level reveal (React Bits SplitText-style, written in-house with GSAP)
function SplitText({ text, className = '', tag: Tag = 'span' }: { text: string; className?: string; tag?: any }) {
  const ref = useRef<HTMLElement>(null)
  useLayoutEffect(() => {
    if (reduce()) return
    const ctx = gsap.context(() => {
      gsap.from('.ch', { yPercent: 110, opacity: 0, duration: 0.9, ease: 'power4.out', stagger: 0.025, delay: 0.15 })
    }, ref)
    return () => ctx.revert()
  }, [])
  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {text.split(' ').map((w, i) => (
        <span key={i} className="word" aria-hidden="true">
          {[...w].map((c, j) => <span key={j} className="chmask"><span className="ch">{c}</span></span>)}
          {'\u00A0'}
        </span>
      ))}
    </Tag>
  )
}

function useSmoothScroll() {
  useEffect(() => {
    if (reduce()) return
    const lenis = new Lenis({ lerp: 0.1 })
    lenis.on('scroll', ScrollTrigger.update)
    const tick = (t: number) => lenis.raf(t * 1000)
    gsap.ticker.add(tick); gsap.ticker.lagSmoothing(0)
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!a) return
      e.preventDefault(); lenis.scrollTo(a.getAttribute('href')!, { offset: -60 })
    }
    document.addEventListener('click', onClick)
    return () => { document.removeEventListener('click', onClick); gsap.ticker.remove(tick); lenis.destroy() }
  }, [])
}

function Header() {
  const [open, setOpen] = useState(false)
  const bar = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const on = () => { const h = document.documentElement; bar.current!.style.transform = `scaleX(${h.scrollTop / (h.scrollHeight - h.clientHeight || 1)})` }
    window.addEventListener('scroll', on, { passive: true }); return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <header className="hdr">
      <div className="progress" ref={bar} />
      <a href="#top" className="mono-logo" aria-label="Back to top">{site.monogram}</a>
      <nav className={open ? 'open' : ''} aria-label="Primary">
        {nav.map(n => <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)}>{n}</a>)}
        <button className="btn sm" onClick={saveCv}><Download size={15} />Download CV</button>
      </nav>
      <button className="burger" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
    </header>
  )
}

function Hero() {
  const ref = useRef<HTMLElement>(null)
  useLayoutEffect(() => {
    if (reduce()) return
    const ctx = gsap.context(() => {
      gsap.from('.portrait', { clipPath: 'inset(100% 0% 0% 0%)', duration: 1.2, ease: 'power4.inOut', delay: 0.3 })
      gsap.from('.portrait img', { scale: 1.18, duration: 1.6, ease: 'power3.out', delay: 0.3 })
      gsap.from('.pframe', { opacity: 0, duration: 0.9, ease: 'power3.out', delay: 1.1, clearProps: 'opacity' })
    }, ref)
    return () => ctx.revert()
  }, [])
  return (
    <section id="top" className="hero" ref={ref}>
      <div className="hero-top">
        <div className="hero-name">
          <p className="meta">Software tester · Founder of Wandy · Cairo</p>
          <h1><SplitText text="Anas" className="giant" /><SplitText text="Elmoftahgy" className="giant outline" /></h1>
        </div>
        <figure className="pwrap">
          <div className="pframe" aria-hidden="true" />
          <div className="portrait"><img src={site.photo} alt={site.photoAlt} width={900} height={1125} fetchPriority="high" /></div>
        </figure>
      </div>
      <div className="hero-foot">
        <p className="lead">Building better digital experiences through technology, quality and business thinking. I am a Computer Science student, software tester and entrepreneur interested in reliable digital products and meaningful business experiences.</p>
        <div className="ctas"><a className="btn" href="#projects">Explore my work</a><button className="btn ghost" onClick={saveCv}><Download size={16} />Download CV</button></div>
      </div>
    </section>
  )
}

function Project({ p, i }: { p: typeof projects[number]; i: number }) {
  const [open, setOpen] = useState(i === 0)
  return (
    <article className={`proj v${i} ${open ? 'open' : ''}`}>
      <button className="proj-head" aria-expanded={open} aria-controls={`${p.id}-d`} onClick={() => setOpen(!open)}>
        <span><span className="ctx">{p.ctx}</span><span className="ptitle">{p.title}</span><span className="pcat">{p.cat}</span></span>
        <Plus className="plus" />
      </button>
      <div id={`${p.id}-d`} className="proj-body" role="region"><div className="inner">
        <div className="art" aria-hidden="true"><div /><div /><div /></div>
        <div className="copy">
          <p>{p.overview}</p>
          <h4>My role</h4><p>{p.role}</p>
          <h4>Activities</h4><ul>{p.points.map(x => <li key={x}>{x}</li>)}</ul>
          <h4>Tools and context</h4><p className="tags">{p.tech.map(t => <span key={t}>{t}</span>)}</p>
        </div>
      </div></div>
    </article>
  )
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null)
  useLayoutEffect(() => {
    if (reduce()) return
    const ctx = gsap.context(() => {
      gsap.from('.rv', { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08, scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true } })
    }, ref)
    return () => ctx.revert()
  }, [])
  return <section id={id} ref={ref} className="sec"><h2 className="rv">{title}</h2>{children}</section>
}

function Contact() {
  const [ok, setOk] = useState(false)
  const copy = async () => { try { await navigator.clipboard.writeText(site.email); setOk(true); setTimeout(() => setOk(false), 2000) } catch { window.location.href = `mailto:${site.email}` } }
  return (
    <Section id="contact" title="Let’s talk about quality, products or internships.">
      <p className="lead rv">I am open to conversations with recruiters, internship coordinators and collaborators.</p>
      <a className="bigmail rv" href={`mailto:${site.email}`}>{site.email}</a>
      <div className="ctas rv">
        <button className="btn" onClick={copy}>{ok ? <Check size={16} /> : <Copy size={16} />}{ok ? 'Copied' : 'Copy email'}</button>
        <a className="btn ghost" href={site.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} />LinkedIn</a>
        <a className="btn ghost" href={`mailto:${site.email}`}><Mail size={16} />Send email</a>
        {site.github && <a className="btn ghost" href={site.github} target="_blank" rel="noreferrer"><Github size={16} />GitHub</a>}
      </div>
      <p className="rv small">{site.location} · {site.phone}</p>
    </Section>
  )
}

export default function App() {
  useSmoothScroll()
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Section id="about" title="About">
          <div className="about">{about.map(t => <p key={t} className="rv">{t}</p>)}</div>
        </Section>
        <Section id="projects" title="Selected projects">{projects.map((p, i) => <div className="rv" key={p.id}><Project p={p} i={i} /></div>)}</Section>
        <Section id="experience" title="Experience and education">
          <ol className="tl">{timeline.map(t => (
            <li key={t.title} className="rv"><span className="when">{t.when}</span>
              <div><span className="kind">{t.kind}</span><h3>{t.title}</h3><p className="org">{t.org}</p><p>{t.text}</p></div></li>))}
          </ol>
        </Section>
        <Section id="skills" title="Skills">
          <div className="grid">{Object.entries(skills).map(([k, v]) => (
            <div className="cell rv" key={k}><h3>{k}</h3><ul>{v.map(s => <li key={s}>{s}</li>)}</ul></div>))}
          </div>
          <h2 className="rv sub">Certifications and training</h2>
          <div className="grid">{Object.entries(certs).map(([k, v]) => (
            <details className="cell rv" key={k} open={k.startsWith('Google /')}><summary>{k}<span>{v.length}</span></summary><ul>{v.map(s => <li key={s}>{s}</li>)}</ul></details>))}
          </div>
        </Section>
        <Contact />
      </main>
      <footer className="foot">© {new Date().getFullYear()} {site.name}</footer>
    </>
  )
}
