import { Link } from "@tanstack/react-router";
import { BrandMark } from "@/components/brand-mark";
import { company, moreNav, nav } from "@/lib/content/company";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <BrandMark onDark />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
            {company.lede}
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <a className="text-cream/80 hover:text-cream" href={company.social.youtube} target="_blank" rel="noreferrer">
              YouTube
            </a>
            <a className="text-cream/80 hover:text-cream" href={company.social.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="text-cream/80 hover:text-cream" href={company.social.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
        <div>
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-cream/50">Visit</p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-cream/80 hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-cream/50">Company</p>
          <ul className="mt-4 space-y-2 text-sm">
            {moreNav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-cream/80 hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/privacy" className="text-cream/80 hover:text-cream">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-cream/80 hover:text-cream">
                Terms
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-cream/50">Dhaka</p>
          <address className="mt-4 space-y-3 text-sm not-italic text-cream/80">
            <p>
              {company.office.lines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </p>
            <p>
              <a className="hover:text-cream" href={company.phoneHref}>
                {company.phone}
              </a>
              <span className="block text-cream/55">WhatsApp · WeChat · Line · Viber</span>
            </p>
            <p>
              <a className="hover:text-cream" href={`mailto:${company.emails.contact}`}>
                {company.emails.contact}
              </a>
            </p>
            <p>
              <a className="hover:text-cream" href={`mailto:${company.emails.business}`}>
                {company.emails.business}
              </a>
            </p>
            <p className="text-cream/55">{company.hours}</p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</p>
          <p>Member, DCCI and Bangladesh Tanners Association.</p>
        </div>
      </div>
    </footer>
  );
}
