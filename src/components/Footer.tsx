import Link from 'next/link';
import { Logo } from './Logo';
import { SERVICES, INDUSTRIES, TECHNOLOGY, INSIGHTS, ABOUT } from '@/lib/nav';
import { SITE } from '@/lib/site';

export function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-300">
      <div className="container-site py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-12">
          <div className="col-span-2 md:col-span-4">
            <Logo inverted />
            <p className="mt-5 max-w-sm text-sm text-ink-400">
              Enterprise AI engineering from Abu Dhabi. We design, build, and run production
              artificial intelligence systems for regulated industries across the GCC and beyond.
            </p>
            <div className="mt-6 space-y-2 text-sm text-ink-400">
              <p className="font-medium text-white">{SITE.hq.line1}</p>
              <p>{SITE.hq.line2}</p>
              <p>
                {SITE.hq.city}, {SITE.hq.country}
              </p>
              <p className="pt-2">
                <a href={`mailto:${SITE.email}`} className="hover:text-white">
                  {SITE.email}
                </a>
              </p>
              <p>
                <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="hover:text-white">
                  {SITE.phone}
                </a>
              </p>
            </div>
          </div>

          <FooterCol label="Services" links={SERVICES.slice(0, 10)} />
          <FooterCol label="More services" links={SERVICES.slice(10, 20)} />
          <FooterCol label="Industries" links={INDUSTRIES} />

          <div className="col-span-2 md:col-span-2">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-ink-400">
              Technology
            </p>
            <ul className="space-y-2 text-sm">
              {TECHNOLOGY.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-ink-300 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mb-4 mt-8 text-xs font-semibold uppercase tracking-wider text-ink-400">
              Company
            </p>
            <ul className="space-y-2 text-sm">
              {ABOUT.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-ink-300 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="text-ink-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
            <p className="mb-4 mt-8 text-xs font-semibold uppercase tracking-wider text-ink-400">
              Insights
            </p>
            <ul className="space-y-2 text-sm">
              {INSIGHTS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-ink-300 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ink-700 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} {SITE.brand}. All rights reserved. Registered in the Abu
            Dhabi Global Market.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-ink-400">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white">
              Terms
            </Link>
            <Link href="/cookie-policy" className="hover:text-white">
              Cookies
            </Link>
            <Link href="/security-compliance" className="hover:text-white">
              Security
            </Link>
            <span aria-hidden>·</span>
            <span>Region: United Arab Emirates (English)</span>
          </div>
          <div className="flex items-center gap-3 text-ink-400">
            <a href={SITE.social.linkedin} aria-label="LinkedIn" className="hover:text-white">
              LinkedIn
            </a>
            <a href={SITE.social.twitter} aria-label="X / Twitter" className="hover:text-white">
              X
            </a>
            <a href={SITE.social.github} aria-label="GitHub" className="hover:text-white">
              GitHub
            </a>
            <a href={SITE.social.youtube} aria-label="YouTube" className="hover:text-white">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ label, links }: { label: string; links: { label: string; href: string }[] }) {
  return (
    <div className="col-span-1 md:col-span-2">
      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-ink-400">{label}</p>
      <ul className="space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-ink-300 hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
