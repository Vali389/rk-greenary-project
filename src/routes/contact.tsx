import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import bgContact from "@/assets/bg-contact.jpg";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact | RK Solar Green Mount" },
      { name: "description", content: "Get in touch for a free solar site survey and personalised quote within 24 hours." },
    ],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        image={bgContact}
        eyebrow="Contact"
        title="Let's plan your solar journey."
        subtitle="Free site survey, free quote, zero pressure. Our team will reach out within 24 hours."
      />

      <section className="py-24">
        <div className="container-x grid gap-12 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-5"
          >
            {[
              { icon: Phone, title: "Call us", line1: "+91 93479 20454", line2: "Mon–Sat, 9 AM – 7 PM" },
              { icon: Mail, title: "Email", line1: "rkgreenmountenergies@gmail.com", line2: "We reply within 24 hours" },
              { icon: MapPin, title: "Office", line1: "HNO 5-5-51/18/3A, Opp Church, Prakash Nagar, Kukatpally, Hyderabad – 500072", line2: "Serving pan-India" },
              { icon: Clock, title: "Response time", line1: "Under 24 hours", line2: "Free site survey included" },
            ].map((c) => (
              <div key={c.title} className="flex gap-5 rounded-2xl border border-border bg-card p-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-gold text-primary-foreground">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{c.title}</h3>
                  <p className="mt-1 text-sm">{c.line1}</p>
                  <p className="text-xs text-muted-foreground">{c.line2}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-3 rounded-2xl border border-gold/20 bg-card p-8"
          >
            <h2 className="text-2xl font-semibold">Request a free quote</h2>
            <p className="mt-2 text-sm text-muted-foreground">Tell us a bit about your project and we'll get back to you with a tailored proposal.</p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <Field label="Full name" name="name" />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Email" name="email" type="email" wide />
              <Field label="City" name="city" />
              <Select label="Property type" name="type" options={["Residential", "Commercial", "Industrial", "Society / Apartment"]} />
            </div>
            <div className="mt-5">
              <label className="text-xs font-semibold uppercase tracking-widest text-gold">Project details</label>
              <textarea
                rows={4}
                required
                className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-gold"
                placeholder="Tell us about your monthly bill, roof size, timeline..."
              />
            </div>
            <button
              type="submit"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-105"
            >
              {sent ? "Thanks! We'll be in touch." : <>Send request <Send className="h-4 w-4" /></>}
            </button>
          </motion.form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", wide }: { label: string; name: string; type?: string; wide?: boolean }) {
  return (
    <div className={wide ? "sm:col-span-2" : ""}>
      <label className="text-xs font-semibold uppercase tracking-widest text-gold">{label}</label>
      <input
        name={name}
        type={type}
        required
        className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-gold"
      />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div className="sm:col-span-2">
      <label className="text-xs font-semibold uppercase tracking-widest text-gold">{label}</label>
      <select name={name} className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-gold">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
