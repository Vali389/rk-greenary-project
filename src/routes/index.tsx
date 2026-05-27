import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Zap, Shield, Users, Leaf, BadgeCheck, Sun,
  Quote, Star, ChevronUp, Award, Wallet,
} from "lucide-react";
import bgHome from "@/assets/bg-home.jpg";
import { services } from "@/data/services";
import { useEffect, useState } from "react";

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

function FloatingActions() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.a
            key="whatsapp"
            href="https://wa.me/919347920454"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.35 }}
            className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition-transform"
            aria-label="Chat on WhatsApp"
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </motion.a>

          <motion.button
            key="scrolltop"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold text-primary-foreground shadow-gold hover:scale-110 transition-transform"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-6 w-6" />
          </motion.button>
        </>
      )}
    </AnimatePresence>
  );
}

function Index() {
  return (
    <>
      <FloatingActions />

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
              className="mt-6 text-5xl font-bold leading-[1.02] sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Power Your Future
              <br />
              <span className="text-gradient-gold">With Solar.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-7 max-w-2xl text-xl text-muted-foreground md:text-2xl"
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
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-105"
              >
                Get Free Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-navy-deep/40 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-gold hover:text-gold"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="border-y border-gold/15 bg-navy-deep py-5">
        <div className="container-x">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {badges.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-2.5 text-sm font-semibold text-muted-foreground"
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



      {/* WHY CHOOSE */}
      <section className="relative bg-navy py-28">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Why Choose Us</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
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
          <h2 className="mx-auto max-w-3xl text-4xl font-bold md:text-5xl">
            Ready to switch to <span className="text-gradient-gold">solar?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Get a free site survey and personalised quote within 24 hours.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-105"
          >
            Get Free Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
