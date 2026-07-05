import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, Leaf, Target, Eye, Users, BadgeCheck, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import heroImage from "@/assets/hero_about.png";
import bgAboutCta from "@/assets/bg-about-cta.png";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About | RK Solar Green Mount" },
      { name: "description", content: "Learn about RK Solar Green Mount — India's trusted solar partner with 4,000+ installations and MNRE approval." },
    ],
  }),
});

const values = [
  { icon: Target, title: "Our Mission", text: "Make sustainable solar energy accessible to every home and business in India." },
  { icon: Eye, title: "Our Vision", text: "A future where every rooftop powers itself with clean, renewable energy." },
  { icon: Leaf, title: "Our Promise", text: "Premium engineering, transparent pricing and lifetime support — always." },
];

const founders = [
  {
    name: "Thum Shyam Prasad",
    role: "Co-Founder & CEO",
    image: "/founder-shyam.png",
    bio: "With over 20 years in the renewable energy industry, Shyam Prasad has been the driving force behind RK Solar Green Mount's vision. His strategic leadership has helped the company grow from a small team of engineers to one of India's most trusted solar installers, serving residential, commercial, and industrial clients across 12+ states.",
    highlights: ["20+ Years Experience", "Strategic Leadership", "Pan-India Growth"],
  },
  {
    name: "K. Ramesh Goud",
    role: "Co-Founder & CTO",
    image: "/founder-ramesh.png",
    bio: "Ramesh Goud is the technical backbone of RK Solar Green Mount. A solar technology expert, he drives innovation in engineering, product development, and installation excellence. His hands-on approach ensures every project meets the highest standards of quality, safety, and performance.",
    highlights: ["Solar Technology Expert", "Engineering Excellence", "Quality Assurance"],
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        image={heroImage}
        eyebrow="About Us"
        title="Powering homes. Empowering India."
        subtitle="With years of hands-on solar expertise, we've helped thousands of families and businesses generate their own clean energy."
      />

      {/* ── Our Story ── */}
      <section className="py-24">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gold font-bold">Our Story</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-gray-900">
              From a single rooftop to{" "}
              <span className="text-gradient-gold">4,000+ installations.</span>
            </h2>
            <div className="mt-6 w-12 h-1 rounded-full bg-gradient-to-r from-[#f5c518] to-[#e6a800]" />
            <p className="mt-5 text-gray-600 leading-relaxed text-[15px]">
              RK Solar Green Mount was founded with a simple belief: clean energy
              should be accessible, affordable and reliable for every Indian. What
              began as a small team of passionate engineers has grown into one of
              the most trusted solar installers in the country.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed text-[15px]">
              Today, we serve residential, commercial and industrial clients across
              India — backed by MNRE certification, MSME registration, and
              partnerships with every major public-sector bank.
            </p>
          </motion.div>

          {/* Key highlights — replacing plain stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              { label: "14+ Years of Industry Experience", pct: 95 },
              { label: "4,000+ Successful Installations", pct: 88 },
              { label: "12+ States Covered Across India", pct: 75 },
              { label: "MNRE Certified Vendor", pct: 100 },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-sm font-medium mb-1.5">
                  <span className="text-gray-800">{item.label}</span>
                  <span className="text-gold font-bold">{item.pct}%</span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-gray-100 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="h-full rounded-full bg-gradient-to-r from-[#f5c518] to-[#e6a800]"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Our Values ── */}
      <section className="bg-navy py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Our Values</p>
            <h2 className="mt-4 text-4xl font-semibold text-white">Built on trust, driven by purpose.</h2>
          </div>
          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:bg-gradient-gold hover:border-transparent hover:shadow-gold hover:-translate-y-1"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold text-primary-foreground transition-colors group-hover:bg-white group-hover:text-[#2d6a2d]">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold transition-colors group-hover:text-navy-deep">{v.title}</h3>
                <p className="mt-3 text-muted-foreground transition-colors group-hover:text-navy-deep/85">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founders ── */}
      <section className="py-28 bg-gray-50">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Leadership</p>
            <h2 className="mt-4 text-4xl font-bold text-gray-900">Meet the <span className="text-gradient-gold">Founders.</span></h2>
            <p className="mt-4 text-gray-500 text-base">The visionaries who turned a single rooftop into a nationwide solar mission.</p>
          </div>

          <div className="space-y-10 max-w-5xl mx-auto">
            {founders.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`group relative flex flex-col md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""} overflow-hidden rounded-3xl bg-white shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-500`}
              >
                {/* Gold left/right accent bar */}
                <div className={`hidden md:block absolute top-0 bottom-0 ${i % 2 === 0 ? "left-0" : "right-0"} w-1.5 bg-gradient-to-b from-[#f5c518] to-[#e6a800] rounded-full`} />

                {/* Portrait */}
                <div className="md:w-64 lg:w-72 flex-shrink-0 relative overflow-hidden">
                  <div className="h-64 md:h-full w-full">
                    <img
                      src={f.image}
                      alt={f.name}
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className={`flex flex-col justify-center p-8 lg:p-12 ${i % 2 === 0 ? "md:pl-14" : "md:pr-14"}`}>
                  {/* Role badge */}
                  <span className="inline-flex w-fit items-center rounded-full bg-gold/10 px-4 py-1 text-[11px] font-bold uppercase tracking-widest text-gold mb-4">
                    {f.role}
                  </span>

                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">{f.name}</h3>

                  <p className="mt-4 text-gray-500 text-sm leading-relaxed max-w-lg">{f.bio}</p>

                  {/* Highlights */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {f.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded-full border border-gold/30 bg-gold/5 px-3.5 py-1 text-xs font-semibold text-gray-700"
                      >
                        ✦ {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="bg-navy py-20">
        <div className="container-x">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Certifications</p>
            <h2 className="mt-4 text-3xl font-bold text-white">Recognised &amp; trusted nationwide.</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Award, t: "MNRE Approved", s: "Ministry of New & Renewable Energy" },
              { icon: BadgeCheck, t: "MSME Registered", s: "Micro, Small & Medium Enterprises" },
              { icon: Users, t: "TSREDCO Empanelled", s: "Telangana State Renewable Energy" },
              { icon: Leaf, t: "PM Surya Ghar", s: "Authorised Subsidy Installer" },
            ].map((c) => (
              <div key={c.t} className="rounded-xl border border-border bg-card p-6 text-center hover:border-gold/40 transition-colors">
                <c.icon className="mx-auto h-10 w-10 text-gold" />
                <div className="mt-4 font-semibold">{c.t}</div>
                <div className="mt-1 text-xs text-muted-foreground">{c.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0">
          <img src={bgAboutCta} alt="" className="h-full w-full object-cover animate-ken-burns" loading="lazy" />
          <div className="absolute inset-0 bg-navy-deep/30" />
        </div>
        <div className="container-x relative z-10 text-center">
          <h2 className="mx-auto max-w-3xl text-4xl font-bold text-white md:text-5xl" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}>
            Ready to switch to <span className="text-gradient-gold">solar?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}>
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
