import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, Zap, Shield, Users, Leaf, BadgeCheck, Sun,
  Quote, Star, Award, Wallet, MapPin, FileText, Download,
} from "lucide-react";
import bgHome from "@/assets/bg-home.jpg";
import svcCommercial from "@/assets/svc-commercial.jpg";
import svcIndustrial from "@/assets/svc-industrial.jpg";
import svcResidential from "@/assets/svc-residential.jpg";
import img100kwp from "@/assets/100kwp-soloar-rooftop-system.jpeg";
import img56kwp from "@/assets/56kwpsoloar-rooftop-system.jpeg";
import img49kwp from "@/assets/49kwpsolarshedmountedsytsem.jpeg";
import warrantyCert from "@/assets/waranty-certificte.pdf";
import { services } from "@/data/services";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "RK Solar Green Mount | Power Your Future With Solar" },
      { name: "description", content: "India's trusted solar installer. MNRE-approved, PM Surya Ghar empanelled. Get a free quote today." },
    ],
  }),
});

const popularSlugs = new Set(["residential", "pm-surya-ghar"]);

const why = [
  { icon: Users, title: "Expert Team", text: "Skilled engineers with deep solar expertise from residential to industrial." },
  { icon: Zap, title: "End-to-End Solutions", text: "Survey, design, approvals, installation and after-care — all under one roof." },
  { icon: BadgeCheck, title: "Tier-1 Components", text: "Only MNRE-approved panels, inverters and balance-of-system equipment." },
  { icon: Wallet, title: "Flexible Plans", text: "Customised packages and financing for every budget and need." },
  { icon: Shield, title: "After-Sales Care", text: "Lifetime support with regular maintenance and quick assistance." },
  { icon: Leaf, title: "Greener Future", text: "One rooftop at a time, we're building a sustainable India." },
];



const testimonials = [
  { name: "Parvathi Reddy", role: "Cedar Valley International School, Khammam", text: "RK Solar handled everything from site inspection to installation smoothly. Our electricity bill dropped by almost 70% in just two months." },
  { name: "Kavitha Madam", role: "Aparna Western Meadows", text: "I really appreciated how clearly they explained every part of the process. Installation was neat, quick, and the team was polite." },
  { name: "Karthik Vuppala", role: "Housing Association Treasurer", text: "The 40 kWp system drastically reduced our community's common-area electricity expenses. Residents are very happy." },
  { name: "Ramesh Goud", role: "Factory Owner, Isnapur", text: "Industrial installation completed ahead of schedule. We now save over ₹80,000 every month on our power bill." },
  { name: "Sunita Sharma", role: "Villa Owner, Tellapur", text: "From survey to subsidy, everything was handled by RK Solar. Zero stress and excellent after-sales support." },
];

const badges = [
  { icon: Award, label: "MNRE Approved" },
  { icon: BadgeCheck, label: "MSME Registered" },
  { icon: Shield, label: "TSREDCO Empanelled" },
  { icon: Sun, label: "PM Surya Ghar" },
  { icon: Leaf, label: "ISO Standards" },
];

const featuredProjects = [
  {
    img: img100kwp,
    kw: "100 kWp",
    type: "Commercial",
    client: "Cedar Valley International School",
    location: "Khammam, Telangana",
    saving: "70% bill reduction",
  },
  {
    img: img56kwp,
    kw: "56 kWp",
    type: "Industrial",
    client: "Airco Fin Tubes Pvt. Ltd.",
    location: "Isnapur, Telangana",
    saving: "₹80K monthly savings",
  },
  {
    img: img49kwp,
    kw: "49 kWp",
    type: "Industrial",
    client: "Industrial Client",
    location: "Hyderabad, Telangana",
    saving: "₹45K+ monthly savings",
  },
];

// Bank / Authority Partners — MSME, MNRE, TSREDCO, TGREDCO and banks
const bankPartners = [
  {
    name: "MSME",
    fullName: "Ministry of Micro, Small & Medium Enterprises",
    logo: "https://msme.gov.in/sites/default/files/MSME-new-logo.png",
    abbr: "MSME",
    color: "border-blue-200",
  },
  {
    name: "MNRE",
    fullName: "Ministry of New & Renewable Energy",
    logo: "https://mnre.gov.in/img/mnre_logo_1.png",
    abbr: "MNRE",
    color: "border-green-200",
  },
  {
    name: "TSREDCO",
    fullName: "Telangana State Renewable Energy Development Corp.",
    logo: "https://tsredco.telangana.gov.in/images/tsredco_logo.png",
    abbr: "TSREDCO",
    color: "border-orange-200",
  },
  {
    name: "TGREDCO",
    fullName: "Telangana Renewable Energy Dev. Corp.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/90px-Emblem_of_India.svg.png",
    abbr: "TGREDCO",
    color: "border-yellow-200",
  },
  {
    name: "SBI",
    fullName: "State Bank of India — Solar Finance",
    logo: "https://www.sbi.co.in/documents/16012/22867/sbi-logo.svg",
    abbr: "SBI",
    color: "border-indigo-200",
  },
  {
    name: "ICICI Bank",
    fullName: "ICICI Bank — Solar Loan Partner",
    logo: "https://www.icicibank.com/content/dam/icicibank/india/managed-assets/images/icici-bank-logo.svg",
    abbr: "ICICI",
    color: "border-red-200",
  },
  {
    name: "Bank of Baroda",
    fullName: "Bank of Baroda — Solar Financing",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/90px-Emblem_of_India.svg.png",
    abbr: "BOB",
    color: "border-orange-100",
  },
  {
    name: "Canara Bank",
    fullName: "Canara Bank — Solar Loans",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/90px-Emblem_of_India.svg.png",
    abbr: "CANARA",
    color: "border-sky-200",
  },
];

function Index() {
  return (
    <>

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img src={bgHome} alt="" className="h-full w-full object-cover animate-ken-burns" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-navy-deep/50 to-navy-deep" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/85 via-navy-deep/40 to-transparent" />
        </div>
        <div className="container-x relative z-10 flex min-h-screen items-center pt-24 pb-16">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-navy-deep/50 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-gold backdrop-blur"
            >
              <Sun className="h-3.5 w-3.5" /> Powering India Since 2020
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-5xl font-bold leading-[1.02] text-white sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Power Your Future
              <br />
              <span className="text-gradient-gold">With Solar.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-7 max-w-2xl text-xl text-white/80 md:text-2xl"
            >
              Clean, sustainable and cost-effective energy solutions for homes,
              businesses and industries across India — engineered for performance,
              built to last.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-white shadow-gold transition-transform hover:scale-105"
              >
                Get Free Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-gold hover:text-gold"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="border-y border-gold/20 bg-navy-deep py-5">
        <div className="container-x">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {badges.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-2.5 text-sm font-semibold text-white/80"
              >
                <b.icon className="h-5 w-5 text-gold" />
                {b.label}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative bg-white py-28">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">What We Offer</p>
            <h2 className="mt-4 text-4xl font-bold text-[#1a1a2e] md:text-5xl">
              End-to-end <span className="text-gradient-gold">solar solutions.</span>
            </h2>
            <p className="mt-5 text-lg text-gray-500">
              Discover the right solar package for your needs — every service comes
              with our promise of premium engineering and lifetime support.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group relative flex flex-col h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-xl"
                >
                  {/* Image with title overlay */}
                  <div className="relative h-60 overflow-hidden flex-shrink-0">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* dark gradient so text is readable */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

                    {/* POPULAR badge */}
                    {popularSlugs.has(s.slug) && (
                      <span className="absolute right-4 top-4 rounded-full bg-gradient-gold px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground shadow-gold">
                        Popular
                      </span>
                    )}

                    {/* Title overlaid on image */}
                    <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white leading-tight drop-shadow-lg">
                      {s.title}
                    </h3>
                  </div>

                  {/* Card body — white background */}
                  <div className="flex flex-col flex-1 p-6 bg-white">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">{s.tagline}</p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-500 line-clamp-3">{s.description}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-gray-900 group-hover:text-gold transition-colors">
                      Explore Service
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* FEATURED PROJECTS */}
      <section className="bg-secondary/40 py-28">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Our Work</p>
            <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
              Featured <span className="text-gradient-gold">installations.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Real projects, real savings — see how we've transformed energy bills across India.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {featuredProjects.map((p, i) => (
              <motion.div
                key={p.client}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm hover:shadow-xl transition-shadow"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.client}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  {/* kWp badge */}
                  <span className="absolute left-4 top-4 rounded-full bg-gradient-gold px-3 py-1 text-xs font-bold text-white shadow-gold">
                    {p.kw}
                  </span>
                  {/* Type tag */}
                  <span className="absolute right-4 top-4 rounded-full bg-black/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                    {p.type}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-lg text-foreground leading-snug">{p.client}</h3>
                  <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 text-gold flex-shrink-0" />
                    {p.location}
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold/10 px-3.5 py-1.5 text-sm font-semibold text-gold">
                    ✓ {p.saving}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full border-2 border-gold px-7 py-3 text-sm font-bold text-gold hover:bg-gold hover:text-white transition-all"
            >
              View All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="relative bg-navy py-28">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Why Choose Us</p>
            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              Trust, performance &amp; <span className="text-gradient-gold">sustainability.</span>
            </h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {why.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group rounded-2xl border border-border bg-card p-7 transition-all hover:border-gold/50 hover:shadow-gold"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gradient-gold group-hover:text-primary-foreground">
                  <w.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{w.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{w.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — auto-scroll */}
      <section className="py-28 overflow-hidden">
        <div className="container-x mb-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Client Stories</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              What our clients <span className="text-gradient-gold">say.</span>
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-gradient-gold" />
          </motion.div>
        </div>

        <div className="relative">
          {/* fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

          <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]" style={{ width: "max-content" }}>
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="w-[360px] flex-shrink-0 rounded-2xl border border-border bg-card p-8"
              >
                <Quote className="h-8 w-8 text-gold opacity-60" />
                <div className="mt-3 flex gap-1 text-gold">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
                <div className="mt-6 border-t border-border pt-4">
                  <div className="font-semibold">{t.name}</div>
                  <div className="mt-0.5 text-xs text-gold">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0">
          <img src={bgHome} alt="" className="h-full w-full object-cover animate-ken-burns" loading="lazy" />
          <div className="absolute inset-0 bg-navy-deep/85" />
        </div>
        <div className="container-x relative z-10 text-center">
          <h2 className="mx-auto max-w-3xl text-4xl font-bold text-white md:text-5xl">
            Ready to switch to <span className="text-gradient-gold">solar?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75">
            Get a free site survey and personalised quote within 24 hours.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold text-white shadow-gold transition-transform hover:scale-105"
          >
            Get Free Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
