import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { getService, services, type Service } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const svc = getService(params.slug);
    if (!svc) throw notFound();
    return svc;
  },
  component: ServiceDetail,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-semibold">Service not found</h1>
        <Link to="/services" className="mt-6 inline-flex rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground">View all services</Link>
      </div>
    </div>
  ),
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Service"} | RK Solar Green Mount` },
      { name: "description", content: loaderData?.description },
    ],
  }),
});

function ServiceDetail() {
  const svc = Route.useLoaderData() as Service;
  const related = services.filter((s) => s.slug !== svc.slug).slice(0, 3);

  return (
    <>
      <PageHero image={svc.image} eyebrow="Service" title={svc.title} subtitle={svc.tagline} height="md" />

      <section className="bg-white py-24">
        <div className="container-x grid gap-14 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Overview</p>
              <h2 className="mt-4 text-3xl font-semibold text-gray-900 md:text-4xl">{svc.tagline}</h2>
              <p className="mt-6 text-lg text-gray-500">{svc.description}</p>
            </motion.div>

            <div className="mt-12 overflow-hidden rounded-2xl border border-gray-200">
              <img src={svc.image} alt={svc.title} className="h-[420px] w-full object-cover animate-ken-burns" loading="lazy" />
            </div>

            <div className="mt-16">
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Process</p>
              <h3 className="mt-4 text-3xl font-semibold text-gray-900">How we deliver.</h3>
              <div className="mt-10 space-y-6">
                {svc.process.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex gap-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-gold font-display text-lg text-primary-foreground">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">{p.title}</h4>
                      <p className="mt-2 text-sm text-gray-500">{p.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Key Benefits</p>
              <ul className="mt-5 space-y-3">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-gradient-gold p-7 text-primary-foreground shadow-gold">
              <h4 className="font-display text-2xl">Need a quote?</h4>
              <p className="mt-2 text-sm opacity-90">Free survey &amp; feasibility report within 24 hours.</p>
              <Link to="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-navy-deep px-5 py-3 text-sm font-semibold text-white hover:opacity-90">
                Get Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-navy py-20">
        <div className="container-x">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Explore More</p>
              <h3 className="mt-3 text-3xl font-semibold text-white">Other services</h3>
            </div>
            <Link to="/services" className="hidden items-center gap-2 text-sm font-semibold text-gold md:inline-flex">
              <ArrowLeft className="h-4 w-4" /> All services
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/services/$slug"
                params={{ slug: r.slug }}
                className="group block overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="h-44 overflow-hidden">
                  <img src={r.image} alt={r.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold transition-colors group-hover:text-gold">{r.title}</h4>
                  <p className="mt-1 text-xs text-muted-foreground">{r.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
