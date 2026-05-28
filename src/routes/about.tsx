import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, Leaf, Target, Eye, Users, BadgeCheck } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import bgAbout from "@/assets/bg-about.jpg";

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

function AboutPage() {
  return (
    <>
      <PageHero
        image={bgAbout}
        eyebrow="About Us"
        title="Powering homes. Empowering India."
        subtitle="With years of hands-on solar expertise, we've helped thousands of families and businesses generate their own clean energy."
      />

      <section className="py-24">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Our Story</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">
              From a single rooftop to <span className="text-gradient-gold">4,000+ installations.</span>
            </h2>
            <p className="mt-6 text-muted-foreground">
              RK Solar Green Mount was founded with a simple belief: clean energy
              should be accessible, affordable and reliable for every Indian. What
              began as a small team of passionate engineers has grown into one of
              the most trusted solar installers in the country.
            </p>
            <p className="mt-4 text-muted-foreground">
              Today, we serve residential, commercial and industrial clients across
              India — backed by MNRE certification, MSME registration, and
              partnerships with every major public-sector bank.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-5"
          >
            {[
              { n: "4,000+", l: "Installations" },
              { n: "12+", l: "States Covered" },
              { n: "92%", l: "Customer Satisfaction" },
              { n: "MNRE", l: "Certified Vendor" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-gold/20 bg-card p-8 text-center">
                <div className="font-display text-4xl text-gradient-gold">{s.n}</div>
                <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

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
                className="rounded-2xl border border-border bg-card p-8"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold text-primary-foreground">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold">{v.title}</h3>
                <p className="mt-3 text-muted-foreground">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Founders</p>
            <h2 className="mt-4 text-4xl font-semibold">Meet the leadership.</h2>
          </div>
          <div className="mx-auto mt-14 grid max-w-4xl gap-7 md:grid-cols-2">
            {[
              { name: "Thum Shyam Prasad", role: "Founder", bio: "Over 20 years in renewable energy, leading RK Solar's vision and strategic growth across India." },
              { name: "K. Ramesh Goud", role: "Founder", bio: "Solar technology expert driving innovation in product development and engineering excellence." },
            ].map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="rounded-2xl border border-border bg-card p-8 text-center"
              >
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-gold text-3xl font-display text-primary-foreground">
                  {f.name.charAt(0)}
                </div>
                <h3 className="mt-5 text-2xl font-semibold">{f.name}</h3>
                <p className="text-sm uppercase tracking-widest text-gold">{f.role}</p>
                <p className="mt-4 text-sm text-muted-foreground">{f.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20">
        <div className="container-x">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Certifications</p>
            <h2 className="mt-4 text-3xl font-semibold">Recognised & trusted nationwide.</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Award, t: "MNRE Approved", s: "Ministry of New & Renewable Energy" },
              { icon: BadgeCheck, t: "MSME Registered", s: "Micro, Small & Medium Enterprises" },
              { icon: Users, t: "TSREDCO Empanelled", s: "Telangana State Renewable Energy" },
              { icon: Leaf, t: "PM Surya Ghar", s: "Authorised Subsidy Installer" },
            ].map((c) => (
              <div key={c.t} className="rounded-xl border border-border bg-card p-6 text-center">
                <c.icon className="mx-auto h-10 w-10 text-gold" />
                <div className="mt-4 font-semibold">{c.t}</div>
                <div className="mt-1 text-xs text-muted-foreground">{c.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
