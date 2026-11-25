import { ArrowRight, BriefcaseBusiness, Building2, Clock3, MapPin, MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import { CAREERS_EMAIL, careerRoles, getApplicationHref } from "@/lib/careers";

const Careers = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Careers at Kolorowey | Build what’s next in AdTech"
      description="Explore roles in Ad Operations, finance, and legal at Kolorowey. Join the people connecting publishers, demand partners, and technology across programmatic advertising."
      canonical="https://kolorowey.com/careers"
    />
    <Header />
    <main>
      <section className="relative overflow-hidden bg-secondary/30 pt-40 pb-16 md:pt-44 md:pb-20">
        <div className="container mx-auto grid max-w-7xl items-end gap-10 px-6 lg:grid-cols-[minmax(0,1fr)_15rem]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-accent">Careers at Kolorowey</p>
            <h1 className="max-w-3xl text-balance text-4xl font-extrabold leading-tight md:text-6xl">
              Build what’s next in <span className="gradient-text">AdTech.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Join the people connecting publishers, demand partners, and technology across the programmatic ecosystem.
            </p>
            <Button asChild size="lg" className="mt-8 rounded-full group">
              <a href="#open-roles">
                Explore open roles
                <ArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </Button>
          </motion.div>

          <div className="flex items-end gap-4 border-t border-border pt-5 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
            <span className="gradient-text text-6xl font-extrabold leading-none" aria-hidden="true">03</span>
            <div className="pb-1">
              <p className="text-sm font-bold text-foreground">Open roles</p>
              <p className="mt-1 text-sm text-muted-foreground">Operations · Finance · Legal</p>
            </div>
          </div>
        </div>
      </section>

      <section id="open-roles" className="scroll-mt-32 py-16 md:py-24" aria-labelledby="open-roles-title">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-col justify-between gap-4 border-b border-border pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-accent">Open positions</p>
              <h2 id="open-roles-title" className="text-3xl font-extrabold md:text-4xl">Find your place here.</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Explore the role details, then email your application directly to our team.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {careerRoles.map((role, index) => (
              <motion.article
                key={role.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/40 md:p-7"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    Role 0{index + 1}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary" aria-hidden="true">
                    {index === 0 ? <Building2 size={19} /> : index === 1 ? <BriefcaseBusiness size={19} /> : <MoveUpRight size={19} />}
                  </span>
                </div>
                <h3 className="text-xl font-bold leading-snug">{role.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{role.summary}</p>

                <dl className="mt-6 space-y-3 border-t border-border pt-5 text-sm">
                  {role.location && (
                    <div className="flex items-start gap-2.5">
                      <dt className="sr-only">Location</dt>
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                      <dd>{role.location}</dd>
                    </div>
                  )}
                  <div className="flex items-start gap-2.5">
                    <dt className="sr-only">Working model</dt>
                    <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <dd>{role.workingModel}</dd>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <dt className="sr-only">Engagement</dt>
                    <BriefcaseBusiness className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <dd>{role.engagement}</dd>
                  </div>
                  {role.experience && (
                    <div className="flex items-start gap-2.5">
                      <dt className="sr-only">Experience</dt>
                      <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                      <dd>{role.experience}</dd>
                    </div>
                  )}
                </dl>

                <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
                  <a className="text-sm font-medium text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground" href={getApplicationHref(role)}>
                    Apply by email
                  </a>
                  <Button asChild variant="outline" className="rounded-full group">
                    <Link to={`/careers/${role.slug}`} aria-label={`View role details: ${role.title}`}>
                      View role
                      <ArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/30 py-14 md:py-18" aria-labelledby="open-application-title">
        <div className="container mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-accent">Kolorowey People</p>
            <h2 id="open-application-title" className="text-2xl font-extrabold md:text-3xl">Don’t see the right role?</h2>
            <p className="mt-2 text-muted-foreground">
              Introduce yourself at <a className="font-semibold text-foreground underline decoration-accent/50 underline-offset-4" href={`mailto:${CAREERS_EMAIL}`}>{CAREERS_EMAIL}</a>.
            </p>
          </div>
          <Button asChild variant="outline" size="lg" className="w-fit rounded-full">
            <a href={`mailto:${CAREERS_EMAIL}`}>
              Email Kolorowey People
              <ArrowRight aria-hidden="true" />
            </a>
          </Button>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Careers;