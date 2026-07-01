import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Home, Building2, Factory, Wrench, Wallet, Sun, Sprout, HardHat } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import heroImage from "@/assets/hero_services.png";
import { services } from "@/data/services";

export const Route = createFileRoute("/services")({
  component: ServicesLayout,
  head: () => ({
    meta: [
      { title: "Services | RK Green Mount Energies" },
      { name: "description", content: "Residential, commercial, industrial solar — plus PM Kusum PPA, EPC contracts, financing, O&M and PM Surya Ghar subsidy assistance." },
    ],
  }),
});

const icons: Record<string, typeof Home> = {
  residential: Home,
  commercial: Building2,
  industrial: Factory,
  maintenance: Wrench,
  financing: Wallet,
  "pm-surya-ghar": Sun,
  "pm-kusum": Sprout,
  "epc-contract": HardHat,
};

function ServicesLayout() {
  const matches = useMatches();
  const isDetail = matches.some((m) => m.routeId === "/services/$slug");
  if (isDetail) return <Outlet />;

  return (
    <>
      <PageHero
        image={heroImage}
        eyebrow="Services"
        title="Solar solutions for every scale."
        subtitle="From a single rooftop to multi-megawatt industrial plants, we engineer solar systems that perform — backed by lifetime support."
      />



      <section className="py-24">
        <div className="container-x grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.slug] ?? Sun;
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group relative block h-full overflow-hidden rounded-2xl border border-border bg-card"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                    <div className="absolute left-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold text-primary-foreground shadow-gold">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="text-2xl font-semibold transition-colors group-hover:text-gold">{s.title}</h3>
                    <p className="mt-2 text-sm font-medium text-gold/80">{s.tagline}</p>
                    <p className="mt-4 text-sm text-muted-foreground line-clamp-3">{s.description}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                      View details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}
