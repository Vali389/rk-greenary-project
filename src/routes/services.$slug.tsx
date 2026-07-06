import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, ArrowRight, ArrowLeft, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { getService, services, type Service } from "@/data/services";

// Import partner logos
import logoEcofy from "@/assets/logo-ecofy.png";
import logoCreditFair from "@/assets/logo-creditfair.png";
import logoJioFinance from "@/assets/logo-jiofinance.png";
import logoPsuBanks from "@/assets/logo-psubanks.png";
import logoEfl from "@/assets/logo-efl.png";

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
      { title: `${loaderData?.title ?? "Service"} | RK Green Mount Energies` },
      { name: "description", content: loaderData?.description },
    ],
  }),
});

/* ─── Financing partner data ─────────────────────────────────────── */
const financingPartners = [
  {
    id: "ecofy",
    name: "Ecofy",
    logo: logoEcofy,
    tagline: "India's Green-Only NBFC",
    color: "#1a6b3a",
    badge: "100% Funding*",
    description:
      "Ecofy is India's dedicated green NBFC, offering unsecured solar loans with a digital-first, paperless process. EMIs are designed to be lower than your current electricity bill — making solar truly cash-neutral from day one.",
    highlights: [
      "Collateral-free solar loans",
      "AI-powered instant eligibility check",
      "Digital KYC — Aadhaar & PAN only",
      "Partnerships with leading EPC installers",
      "Covers panels, inverters & BOS equipment",
    ],
    url: "https://www.ecofy.co.in",
  },
  {
    id: "creditfair",
    name: "Credit Fair",
    logo: logoCreditFair,
    tagline: "RBI-Registered Climate Fintech",
    color: "#1a3c8f",
    badge: "100% Funding*",
    description:
      "Credit Fair is an RBI-registered NBFC focused on climate financing since 2018. Listed on the JanSamarth portal and a PM Surya Ghar registered lender — covering residential, MSME, and housing-society solar projects.",
    highlights: [
      "100% online application-to-approval",
      "EMI lower than electricity bill",
      "PM Surya Ghar registered lender",
      "MSME & housing society loans",
      "Solar insurance integration",
    ],
    url: "https://www.creditfair.in",
  },
  {
    id: "jiofinance",
    name: "Jio Finance",
    logo: logoJioFinance,
    tagline: "Reliance Group's Digital Finance Arm",
    color: "#003087",
    badge: "100% Funding*",
    description:
      "JioFinance brings Reliance's digital muscle to solar financing. Through the JioFinance app, customers access competitive green energy loans and solar leasing (Device-as-a-Service) with flexible tenures and minimal documentation.",
    highlights: [
      "Solar loans via the JioFinance app",
      "Solar panel leasing (DaaS) for businesses",
      "Competitive interest rates",
      "Backed by Reliance's financial strength",
      "Seamless digital journey end-to-end",
    ],
    url: "https://www.jiofinance.com",
  },
  {
    id: "efl",
    name: "EFL (Electronica Finance)",
    logo: logoEfl,
    tagline: "India's Leading MSME & Solar Rooftop Lender",
    color: "#059669",
    badge: "100% Funding*",
    description:
      "Electronica Finance Limited (EFL) offers fast, specialized loan approvals for solar rooftop installations. Designed to cover up to 100% of project costs with competitive interest rates and minimal physical paperwork.",
    highlights: [
      "Up to 100% project cost funding",
      "Specialized commercial & industrial loan schemes",
      "Flexible repayment options up to 7 years",
      "Quick eligibility assessment & paperless flow",
      "Hassle-free, direct EPC coordination",
    ],
    url: "https://www.electronicafinance.com",
  },
  {
    id: "psubanks",
    name: "Nationalised Banks",
    logo: logoPsuBanks,
    tagline: "SBI • PNB • Bank of Baroda • Canara Bank",
    color: "#7c3aed",
    badge: "Up to 90% Funding",
    description:
      "Major PSU banks offer concessional solar loans under PM Surya Ghar aligned schemes — collateral-free up to ₹2 lakh, tenures up to 10 years, and interest rates as low as 5.75%. We coordinate directly with your bank branch.",
    highlights: [
      "SBI Yono Surya Ghar — from ~5.75% p.a.",
      "PNB Rooftop Solar — up to 10-year tenure",
      "Bank of Baroda Surya Ghar — 90% financing",
      "Canara Bank — zero processing charge",
      "Collateral-free up to ₹2 lakh",
    ],
    url: "https://www.pmsuryaghar.gov.in",
  },
];

/* ─── Component ──────────────────────────────────────────────────── */
function ServiceDetail() {
  const svc = Route.useLoaderData() as Service;
  const related = services.filter((s) => s.slug !== svc.slug).slice(0, 3);
  const isFinancing = svc.slug === "financing";
  const heroLayout = (svc.slug === "financing" || svc.slug === "pm-surya-ghar") ? "contain" : svc.layout;

  return (
    <>
      <PageHero image={svc.image} eyebrow="Service" title={svc.title} subtitle={svc.tagline} height="md" imagePosition={svc.imagePosition} layout={heroLayout} />

      <section className="bg-white py-24">
        <div className="container-x grid gap-14 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Overview</p>
              <h2 className="mt-4 text-3xl font-semibold text-gray-900 md:text-4xl">{svc.tagline}</h2>
              <p className="mt-6 text-lg text-gray-500">{svc.description}</p>
            </motion.div>

            <div className="mt-12 overflow-hidden rounded-2xl border border-gray-200">
              <img src={svc.image} alt={svc.title} className="w-full h-auto block" loading="lazy" />
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

            {/* ── Solar Financing Partners section (only for /services/financing) ── */}
            {isFinancing && (
              <div className="mt-20">
                <p className="text-xs uppercase tracking-[0.3em] text-gold">Our Lending Partners</p>
                <h3 className="mt-4 text-3xl font-semibold text-gray-900">Solar financing, made simple.</h3>
                <p className="mt-3 text-gray-500 text-base leading-relaxed">
                  We work with trusted financial institutions that offer <strong>100% solar project funding</strong> (subject to customer credit profile). Pick the lender that suits you — we handle all the paperwork.
                </p>

                <div className="mt-10 grid gap-8 sm:grid-cols-2">
                  {financingPartners.map((partner, i) => (
                    <motion.div
                      key={partner.id}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 pt-9 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                    >
                      {/* Color accent top bar */}
                      <div className="absolute inset-x-0 top-0 h-1.5 rounded-t-2xl" style={{ backgroundColor: partner.color }} />

                      {/* Absolute Badge */}
                      <div className="absolute top-5 right-5">
                        <span
                          className="rounded-full px-3 py-1 text-[10px] font-bold text-white shadow whitespace-nowrap"
                          style={{ backgroundColor: partner.color }}
                        >
                          {partner.badge}
                        </span>
                      </div>

                      {/* Logo */}
                      <div className="flex items-center justify-start bg-transparent mb-6">
                        <img
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="h-20 w-auto max-w-[220px] object-contain"
                        />
                      </div>

                      <div className="mt-4">
                        <h4 className="text-xl font-bold text-gray-900">{partner.name}</h4>
                        <p className="text-xs font-semibold text-gray-400 mt-0.5">{partner.tagline}</p>
                        <p className="mt-3 text-sm leading-relaxed text-gray-600">{partner.description}</p>
                      </div>

                      <ul className="mt-5 space-y-2">
                        {partner.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2.5 text-sm text-gray-700">
                            <Check className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: partner.color }} />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      <a
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold hover:underline transition-colors"
                        style={{ color: partner.color }}
                      >
                        Learn more <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </motion.div>
                  ))}
                </div>

                {/* Disclaimer */}
                <p className="mt-6 text-xs text-gray-400 leading-relaxed">
                  * 100% funding is subject to individual credit profile, income proof, and lender eligibility criteria. Interest rates and terms are indicative and subject to change per RBI and lender policy. RK Green Mount Energies acts as a facilitation partner only.
                </p>
              </div>
            )}
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
              <p className="mt-2 text-sm opacity-90">Free survey & feasibility report within 24 hours.</p>
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
