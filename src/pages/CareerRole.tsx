import { ArrowLeft, ArrowRight, BriefcaseBusiness, Building2, Clock3, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Link, Navigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import { CAREERS_EMAIL, getApplicationHref, getCareerRole } from "@/lib/careers";

const CareerRole = () => {
  const { slug } = useParams();
  const role = getCareerRole(slug);

  if (!role) return <Navigate to="/careers" replace />;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={role.metaTitle}
        description={role.metaDescription}
        canonical={`https://kolorowey.com/careers/${role.slug}`}
      />
      <Header />
      <main>
        <section className="bg-secondary/30 pt-36 pb-14 md:pt-40 md:pb-16">
          <div className="container mx-auto max-w-7xl px-6">
            <nav aria-label="Breadcrumb" className="mb-8">
              <Link to="/careers" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Careers
              </Link>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-accent">Careers at Kolorowey</p>
              <h1 className="max-w-4xl text-balance text-3xl font-extrabold leading-tight md:text-5xl">{role.title}</h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">{role.summary}</p>
              <Button asChild size="lg" className="mt-7 rounded-full group">
                <a href={getApplicationHref(role)}>
                  Apply now
                  <ArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </Button>
            </motion.div>

            <dl className="mt-10 grid gap-5 border-t border-border pt-6 sm:grid-cols-2 lg:grid-cols-4">
              {role.location && (
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <div><dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Location</dt><dd className="mt-1 text-sm font-medium">{role.location}</dd></div>
                </div>
              )}
              <div className="flex items-start gap-3">
                <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <div><dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Working model</dt><dd className="mt-1 text-sm font-medium">{role.workingModel}</dd></div>
              </div>
              <div className="flex items-start gap-3">
                <BriefcaseBusiness className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <div><dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Engagement</dt><dd className="mt-1 text-sm font-medium">{role.engagement}</dd></div>
              </div>
              {role.experience && (
                <div className="flex items-start gap-3">
                  <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <div><dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Experience</dt><dd className="mt-1 text-sm font-medium">{role.experience}</dd></div>
                </div>
              )}
            </dl>
          </div>
        </section>

        <div className="container mx-auto max-w-7xl px-6">
          <section className="grid gap-8 border-b border-border py-12 md:grid-cols-[minmax(12rem,0.7fr)_minmax(0,1.3fr)] md:gap-16 md:py-16" aria-labelledby="responsibilities-title">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-accent">The role</p>
              <h2 id="responsibilities-title" className="text-2xl font-extrabold md:text-3xl">Responsibilities</h2>
            </div>
            <ul className="space-y-4">
              {role.responsibilities.map((responsibility) => (
                <li key={responsibility} className="flex gap-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {responsibility}
                </li>
              ))}
            </ul>
          </section>

          <section className="grid gap-8 border-b border-border py-12 md:grid-cols-[minmax(12rem,0.7fr)_minmax(0,1.3fr)] md:gap-16 md:py-16" aria-labelledby="requirements-title">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-accent">What you bring</p>
              <h2 id="requirements-title" className="text-2xl font-extrabold md:text-3xl">Requirements</h2>
            </div>
            <ul className="space-y-4">
              {role.requirements.map((requirement) => (
                <li key={requirement} className="flex gap-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-highlight" aria-hidden="true" />
                  {requirement}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="bg-secondary/30 py-12 md:py-16" aria-labelledby="apply-title">
          <div className="container mx-auto flex max-w-7xl flex-col gap-7 px-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-accent">How to apply</p>
              <h2 id="apply-title" className="text-2xl font-extrabold md:text-3xl">Start a conversation.</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Send your CV or résumé and a brief introduction to{" "}
                <a className="font-semibold text-foreground underline decoration-accent/50 underline-offset-4" href={`mailto:${CAREERS_EMAIL}`}>{CAREERS_EMAIL}</a>.
              </p>
            </div>
            <Button asChild size="lg" className="w-fit shrink-0 rounded-full group">
              <a href={getApplicationHref(role)}>
                Apply now
                <ArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </section>
        <div className="container mx-auto max-w-7xl px-6 py-6">
          <Button asChild variant="ghost" className="rounded-full">
            <Link to="/careers"><ArrowLeft aria-hidden="true" />All open roles</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CareerRole;