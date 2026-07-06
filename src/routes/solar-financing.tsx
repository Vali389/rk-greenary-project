import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, ArrowRight, Wallet, Shield, Zap, Sparkles, PhoneCall } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import heroImage from "@/assets/solar-financing.jpeg";

// Import partner logos
import logoEcofy from "@/assets/logo-ecofy.png";
import logoCreditFair from "@/assets/logo-creditfair.png";
import logoJioFinance from "@/assets/logo-jiofinance.png";
import logoPsuBanks from "@/assets/logo-psubanks.png";
import logoEfl from "@/assets/logo-efl.png";

export const Route = createFileRoute("/solar-financing")({
  head: () => ({
    meta: [
      { title: "Solar Financing | RK Green Mount Energies" },
      { name: "description", content: "Get easy solar financing options and EMI loan support up to 100% through trusted partners." },
    ],
  }),
  component: SolarFinancingPage,
});

const partners = [
  {
    name: "Ecofy",
    logo: logoEcofy,
    badge: "100% Funding*",
    color: "#1a6b3a",
    description: "Green finance partner offering rooftop solar loan support with quick paperless flow.",
    note: "Up to 100% funding based on customer profile.",
  },
  {
    name: "Credit Fair",
    logo: logoCreditFair,
    badge: "100% Funding*",
    color: "#1a3c8f",
    description: "Solar financing with easy EMI options for eligible residential & MSME customers.",
    note: "Loan approval depends on eligibility.",
  },
  {
    name: "Jio Finance",
    logo: logoJioFinance,
    badge: "100% Funding*",
    color: "#003087",
    description: "Flexible solar finance & leasing options for residential and commercial customers.",
    note: "Funding depends on document verification.",
  },
  {
    name: "EFL (Electronica Finance)",
    logo: logoEfl,
    badge: "100% Funding*",
    color: "#059669",
    description: "Fast-tracked green energy financing specializing in MSME and rooftop solar.",
    note: "Up to 100% funding with quick processing.",
  },
  {
    name: "Nationalized Banks",
    logo: logoPsuBanks,
    badge: "Up to 90% Funding",
    color: "#7c3aed",
    description: "Concessional solar loan schemes (SBI, PNB, BoB) with low interest rates.",
    note: "Loan amount depends on bank rules.",
  },
];

const benefits = [
  {
    icon: Wallet,
    title: "Easy EMI Options",
    text: "Convert your solar installation cost into affordable monthly payments that offset your power bills.",
  },
  {
    icon: Sparkles,
    title: "Low Upfront Payment",
    text: "Get started with minimal initial payment. Up to 100% funding options available for qualified customers.",
  },
  {
    icon: Zap,
    title: "Quick Paperless Process",
    text: "Instant eligibility assessments and completely digital end-to-end documentation journeys.",
  },
  {
    icon: Shield,
    title: "Approved Partner Schemes",
    text: "Access low-interest solar finance options through central government aligned banking schemes.",
  },
];

const documents = [
  "Aadhaar Card",
  "PAN Card",
  "Latest Electricity Bill",
  "Last 6 Months Bank Statement",
  "Income Proof (Salary Slip or ITR)",
  "Property or Roof Ownership Proof",
  "Solar System Quotation & Design Plan",
  "Passport-size Photograph",
];

function SolarFinancingPage() {
  return (
    <>
      <PageHero
        image={heroImage}
        eyebrow="Financing"
        title="Solar Financing Solutions"
        subtitle="Rooftop solar made affordable with easy loans & EMI options."
        layout="split"
      />

      {/* Overview */}
      <section className="bg-white py-24">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Overview</p>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
                Go Solar Today, Pay Later with <span className="text-gradient-gold">Easy Finance.</span>
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                RK Green Mount Energies helps residential, commercial, and industrial customers transition to solar energy smoothly. We provide end-to-end loan assistance and EMI options through India's leading green lenders, climate fintechs, and nationalized banks.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                With options for up to 100% funding and flexible repayment tenures, your monthly EMI can be fully offset by the savings on your electricity bill.
              </p>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-3.5 text-sm font-bold text-white shadow-gold hover:opacity-95 transition-opacity"
                >
                  <PhoneCall className="h-4.5 w-4.5" />
                  Get Expert Finance Advisory
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl bg-gray-50 p-8 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-4">Required Documents</h3>
              <ul className="mt-5 space-y-3">
                {documents.map((doc) => (
                  <li key={doc} className="flex items-start gap-3 text-sm text-gray-700">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl bg-gold/5 p-4 border border-gold/20 text-[11px] text-gold font-semibold leading-relaxed">
                💡 Note: Single-window digital processing handles all the documentation securely for your peace of mind.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Finance Partners */}
      <section className="bg-gray-50 py-24 border-y border-gray-200">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Trusted Lenders</p>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">Our Financing Partners</h2>
            <p className="mt-3 text-sm text-gray-500">Choose the partner that fits your financial goals</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 pt-9 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Top accent color bar */}
                <div className="absolute inset-x-0 top-0 h-1.5" style={{ backgroundColor: p.color }} />

                {/* Absolute Badge */}
                <div className="absolute top-5 right-5">
                  <span
                    className="rounded-full px-3 py-1 text-[10px] font-bold text-white shadow whitespace-nowrap"
                    style={{ backgroundColor: p.color }}
                  >
                    {p.badge}
                  </span>
                </div>

                <div>
                  {/* Logo */}
                  <div className="flex items-center justify-start bg-transparent mb-6">
                    <img
                      src={p.logo}
                      alt={`${p.name} logo`}
                      className="h-20 w-auto max-w-[220px] object-contain"
                    />
                  </div>

                  <h3 className="text-base font-bold text-gray-900 group-hover:text-gold transition-colors">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{p.description}</p>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-100 text-xs font-semibold text-gray-400 group-hover:text-gold transition-colors">
                  {p.note}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Key Advantages</p>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">Why Choose Solar Financing?</h2>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold mb-5">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900">{b.title}</h3>
                <p className="mt-2.5 text-xs text-gray-500 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Note & Disclaimer */}
      <section className="bg-navy-deep py-20 text-white border-t border-gold/20">
        <div className="container-x max-w-4xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-gold">Eligibility & Conditions</h3>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              Customers can check eligibility instantly. Up to 100% funding is available depending on applicant profile, CIBIL score status, income stability, documentation completeness, and finance partner clearance.
            </p>

            <div className="mt-8 pt-6 border-t border-white/15">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white/60">⚠️ Important Disclaimer</h4>
              <p className="mt-2 text-xs text-white/50 leading-relaxed">
                Final loan approval, interest rate, EMI, processing fee, and funding amount depend on the finance partner’s eligibility check, customer profile, CIBIL score, income proof, documents, and lender policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
