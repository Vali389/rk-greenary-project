import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, AlertCircle } from "lucide-react";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import heroImage from "@/assets/hero_contact.png";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact | RK Solar Green Mount" },
      { name: "description", content: "Get in touch for a free solar site survey and personalised quote within 24 hours." },
    ],
  }),
});

const WHATSAPP_NUMBER = "919347920454"; // country code + number, no +

type FormData = {
  name: string;
  phone: string;
  email: string;
  city: string;
  type: string;
  details: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Full name is required.";
  } else if (data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!data.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^[6-9]\d{9}$/.test(data.phone.trim())) {
    errors.phone = "Enter a valid 10-digit Indian mobile number.";
  }

  if (!data.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!data.city.trim()) {
    errors.city = "City is required.";
  }

  if (!data.details.trim()) {
    errors.details = "Please share some project details.";
  } else if (data.details.trim().length < 10) {
    errors.details = "Please provide at least 10 characters.";
  }

  return errors;
}

function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    city: "",
    type: "Residential",
    details: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    // Re-validate the field live while typing if it already has an error
    if (errors[field]) {
      const updated = { ...form, [field]: value };
      const errs = validate(updated);
      setErrors((prev) => ({ ...prev, [field]: errs[field] }));
    }
  }

  function handleBlur(field: keyof FormData) {
    // Validate only this field when user leaves it
    const errs = validate(form);
    setErrors((prev) => ({ ...prev, [field]: errs[field] }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    // Build WhatsApp message
    const msg = [
      `🌞 *New Solar Enquiry – RK Green Mount Energies*`,
      ``,
      `👤 *Name:* ${form.name.trim()}`,
      `📞 *Phone:* ${form.phone.trim()}`,
      `📧 *Email:* ${form.email.trim()}`,
      `🏙️ *City:* ${form.city.trim()}`,
      `🏠 *Property Type:* ${form.type}`,
      ``,
      `📋 *Project Details:*`,
      form.details.trim(),
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    setSubmitted(true);
    window.open(url, "_blank");
  }

  return (
    <>
      <PageHero
        image={heroImage}
        eyebrow="Contact"
        title="Let's plan your solar journey."
        subtitle="Free site survey, free quote, zero pressure. Our team will reach out within 24 hours."
      />

      <section className="py-24">
        <div className="container-x grid gap-12 lg:grid-cols-5">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-5"
          >
            {[
              { icon: Phone, title: "Call us", line1: "+91 93479 20454  |  +91 90002 72748", line2: "Mon–Sat, 9 AM – 7 PM" },
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

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            noValidate
            className="lg:col-span-3 rounded-2xl border border-gold/20 bg-card p-8"
          >
            <h2 className="text-2xl font-semibold">Request a free quote</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill in the details below — we'll send your enquiry directly to our WhatsApp team.
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              {/* Name */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-gold">Full Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                  placeholder="Enter your full name"
                  className={`mt-2 w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus:border-gold bg-background ${errors.name ? "border-red-400" : "border-input"}`}
                />
                {errors.name && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                    <AlertCircle className="h-3 w-3" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-gold">Phone Number</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  onBlur={() => handleBlur("phone")}
                  placeholder="Enter your 10-digit mobile number"
                  maxLength={10}
                  className={`mt-2 w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus:border-gold bg-background ${errors.phone ? "border-red-400" : "border-input"}`}
                />
                {errors.phone && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                    <AlertCircle className="h-3 w-3" /> {errors.phone}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-gold">Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  placeholder="Enter your email address"
                  className={`mt-2 w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus:border-gold bg-background ${errors.email ? "border-red-400" : "border-input"}`}
                />
                {errors.email && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                    <AlertCircle className="h-3 w-3" /> {errors.email}
                  </p>
                )}
              </div>

              {/* City */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-gold">City</label>
                <input
                  type="text"
                  value={form.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                  onBlur={() => handleBlur("city")}
                  placeholder="Enter your city"
                  className={`mt-2 w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus:border-gold bg-background ${errors.city ? "border-red-400" : "border-input"}`}
                />
                {errors.city && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                    <AlertCircle className="h-3 w-3" /> {errors.city}
                  </p>
                )}
              </div>

              {/* Property Type */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-gold">Property Type</label>
                <select
                  value={form.type}
                  onChange={(e) => handleChange("type", e.target.value)}
                  className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-gold"
                >
                  {["Residential", "Commercial", "Industrial", "Society / Apartment"].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Project Details */}
            <div className="mt-5">
              <label className="text-xs font-semibold uppercase tracking-widest text-gold">Project Details</label>
              <textarea
                rows={4}
                value={form.details}
                onChange={(e) => handleChange("details", e.target.value)}
                onBlur={() => handleBlur("details")}
                placeholder="Enter your project details (monthly bill, roof size, capacity needed, timeline...)"
                className={`mt-2 w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus:border-gold bg-background resize-none ${errors.details ? "border-red-400" : "border-input"}`}
              />
              {errors.details && (
                <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                  <AlertCircle className="h-3 w-3" /> {errors.details}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold transition-all hover:scale-105 hover:shadow-xl"
            >
              {submitted ? (
                <>✅ Enquiry sent via WhatsApp!</>
              ) : (
                <>
                  {/* WhatsApp icon */}
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Send via WhatsApp <Send className="h-4 w-4" />
                </>
              )}
            </button>

            {submitted && (
              <p className="mt-3 text-xs text-green-600 font-medium">
                ✓ WhatsApp opened with your enquiry. Our team will respond shortly!
              </p>
            )}
          </motion.form>
        </div>
      </section>
    </>
  );
}
