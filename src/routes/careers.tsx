import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, RelatedPages } from "@/components/layout/site-shell";
import { QuoteForm } from "@/components/quote-form";
import { jobs } from "@/lib/content/jobs";
import { company } from "@/lib/content/company";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
  head: () => ({
    meta: [{ title: "Careers | ABM Trading Corporation" }],
  }),
});

function CareersPage() {
  return (
    <main>
      <PageHero
        kicker="Careers"
        title="Inspectors, technologists, people who can hold a mill date."
        lede="A small house with global files. Dhaka office, Savar floor, buyers in fifteen markets. We hire for judgement, not slogans."
        crumbs={[{ label: "Careers" }]}
      />
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Floor and world", "Mill visits in Hemayetpur, buyers from China to Italy."],
            ["A craft, taught", "On-the-job and off-site training. Inspectors are not left to guess."],
            ["A file you own", "Small enough that your name is on the lot — for better or worse."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-md bg-paper p-5 shadow-[var(--shadow-border)]">
              <p className="font-display text-xl font-semibold">{t}</p>
              <p className="mt-2 text-sm text-muted">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 space-y-8">
          {jobs.map((job) => (
            <article key={job.slug} className="rounded-lg border border-line bg-paper p-7">
              <h2 className="font-display text-2xl font-semibold">{job.title}</h2>
              <p className="mt-1 text-sm text-muted">
                {job.location} · {job.experience} · {job.education}
              </p>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-[11px] font-semibold tracking-[0.16em] uppercase text-muted">
                    Responsibilities
                  </h3>
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-body">
                    {job.responsibilities.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-[11px] font-semibold tracking-[0.16em] uppercase text-muted">
                    Requirements
                  </h3>
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-body">
                    {job.requirements.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-14 rounded-lg bg-cream/60 p-7">
          <h2 className="font-display text-2xl font-semibold">Internship</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            Three to six months, stipend, rotation through inspection, sourcing and coordination.
            Students and new graduates in leather, chemistry or business. Strong files convert to
            full-time.
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-3xl">
          <h2 className="font-display text-3xl font-semibold">Apply</h2>
          <p className="mt-2 text-sm text-muted">
            CV and a short note on the role. Or email {company.emails.careers}.
          </p>
          <div className="mt-6 rounded-lg bg-paper p-6 shadow-[var(--shadow-border)]">
            <QuoteForm intent="career" />
          </div>
        </div>
      </section>
      <RelatedPages
        items={[
          { to: "/about", label: "About", text: "A leather family, a professional inspecting house." },
          { to: "/services", label: "Services", text: "The work inspectors and technologists actually do." },
          { to: "/contact", label: "Contact", text: "Or email a CV to the careers desk." },
        ]}
      />
      <CtaBand />
    </main>
  );
}
