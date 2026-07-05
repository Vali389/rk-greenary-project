import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, Zap, Shield, Users, Leaf, BadgeCheck, Sun,
  Quote, Star, Award, Wallet, MapPin,
} from "lucide-react";
import imgCedarValley from "@/assets/100kwp-soloar-rooftop-system.jpeg";
import imgGeethaMadhuri1 from "@/assets/15kwp - geetha madhuri.jpeg";
import imgNuway1 from "@/assets/nuway-heattransferpvtltd-indrakaran-60kwat.jpeg";
import bgHome from "@/assets/bg-home.jpg";
import heroIllustration from "@/assets/hero_home_pano.png";
import { services } from "@/data/services";
import familySolarBanner from "@/assets/rk_family_solar_banner.png";
// Client logos
import logoNatureValley from "@/assets/nature-vallry-resorts.png";
import logoCedarValley from "@/assets/cedar valley international school.avif";
import logoEcoVillage from "@/assets/eco-villago-resorts.png";
import logoEeshaHospital from "@/assets/eesha-hospitals.png";
import logoHarvestSchool from "@/assets/harvest-publicshool.png";
import logoHarvestSpring from "@/assets/harvest-spring-leaf.png";
import logoKarthikeya from "@/assets/karthikeya-constryctions.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "RK Solar Green Mount | Solar Energy: The Power of Nature" },
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
    img: imgCedarValley,
    kw: "100 kWp",
    type: "Commercial",
    client: "Cedar Valley International School",
    location: "Khammam, Telangana",
    saving: "70% bill reduction",
  },
  {
    img: imgGeethaMadhuri1,
    kw: "15 kWp",
    type: "Residential",
    client: "Singer Geetha Madhuri's Residence",
    location: "Hyderabad, Telangana",
    saving: "95% bill reduction",
  },
  {
    img: imgNuway1,
    kw: "60 kWp",
    type: "Industrial",
    client: "Nu-way Heat Transfer Pvt. Ltd.",
    location: "Indrakaran, Telangana",
    saving: "₹85K monthly savings",
  }
];

// Our Clients — logo marquee data
const clientLogos = [
  { src: logoNatureValley, name: "Nature Valley Resorts" },
  { src: logoCedarValley, name: "Cedar Valley International School" },
  { src: logoEcoVillage, name: "Eco Village Resorts" },
  { src: logoEeshaHospital, name: "Eesha Hospitals" },
  { src: logoHarvestSchool, name: "Harvest Public School" },
  { src: logoHarvestSpring, name: "Harvest Spring Leaf" },
  { src: logoKarthikeya, name: "Karthikeya Constructions" },
];

// Hero marquee items
const heroMarqueeItems = [
  "MNRE", "TSREDCO", "TGREDCO", "MSME", "PM Surya Ghar",
  "SBI Solar", "ICICI Solar", "Canara Bank", "Bank of Baroda",
  "MNRE", "TSREDCO", "TGREDCO", "MSME", "PM Surya Ghar",
  "SBI Solar", "ICICI Solar", "Canara Bank", "Bank of Baroda",
];

// Stagger variants for headline
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};
const wordVariants = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

function Index() {
  return (
    <>
      {/* ══════════════════════════════════════════════
          HERO — Faithful EcoVolta-style Replica
          White bg · full-width illustration · floating badges
          ══════════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative overflow-hidden bg-white"
        style={{ paddingTop: "72px", minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        {/* Animated Background Gradients & Grid */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Subtle Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />
          {/* Animated Glowing Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[10%] left-[10%] h-[45rem] w-[45rem] rounded-full bg-[#e6f5e6] blur-[100px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute right-[5%] top-[20%] h-[40rem] w-[40rem] rounded-full bg-[#f0faf0] blur-[120px]"
          />
          {/* Base bottom glow */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(45,106,45,0.08) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* ──── Upper: Centered Text Content ──── */}
        <div className="relative z-20 mx-auto flex max-w-5xl flex-col items-center px-4 pt-10 text-center sm:pt-14">
          {/* Top badge pill */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-gray-600 shadow-sm backdrop-blur-sm"
          >
            <span>☀️</span>
            <span className="h-1 w-1 rounded-full bg-gray-300" />
            <span className="font-medium text-[#2d6a2d]">Delivering power innovate</span>
            <span className="h-1 w-1 rounded-full bg-gray-300" />
            <span>🌿</span>
          </motion.div>

          {/* Staggered Headline */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="mt-6 font-display text-[2.75rem] font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl md:text-[4rem]"
            style={{ textShadow: "0 0 20px rgba(255,255,255,1), 0 0 40px rgba(255,255,255,1), 0 0 60px rgba(255,255,255,1)" }}
          >
            {["Solar Energy:", "The Power of Nature"].map((line) => (
              <motion.span key={line} variants={wordVariants} className="block">
                {line}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-5 max-w-xl text-[16px] leading-relaxed text-gray-500 sm:text-[17px]"
          >
            Sustainable Energy Platform. Engineering, deploying, and servicing solar
            arrays for homes, businesses, and large-scale operations across India.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              id="hero-cta-quote"
              className="group inline-flex items-center gap-2 rounded-full bg-[#2d6a2d] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:scale-[1.04] hover:bg-[#245824] hover:shadow-[0_8px_28px_-6px_rgba(45,106,45,0.5)]"
            >
              <Sun className="h-4.5 w-4.5" />
              Explore Options
              <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              id="hero-cta-services"
              className="group inline-flex items-center gap-3 text-sm font-semibold text-gray-700 transition-colors hover:text-[#2d6a2d]"
            >
              Start Network
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white transition-all group-hover:border-[#2d6a2d] group-hover:bg-[#f0faf0]">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* ──── Full Screen Background Image with Smooth Bottom Fade ──── */}
        <div
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to top, transparent, black 15%)',
            WebkitMaskImage: 'linear-gradient(to top, transparent, black 15%)'
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full"
          >
            <motion.div
              animate={{ scale: [1, 1.10, 1] }}
              transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
              className="h-full w-full origin-center"
            >
              <motion.img
                src={heroIllustration}
                alt="Solar panels and wind turbines on a green hill"
                className="h-full w-full object-cover object-[center_30%] mix-blend-multiply opacity-90 origin-center block"
                draggable={false}
                loading="eager"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* ──── Floating UI Badges (Bottom Layer) ──── */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex h-[75vh] flex-col justify-end">

          {/* ── Badge: Location pin (bottom-left) ── */}
          <motion.div
            initial={{ opacity: 0, x: -40, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2, ease: "easeOut" }}
            className="pointer-events-auto absolute bottom-[12%] left-4 z-20 flex items-center gap-3 rounded-2xl border border-gray-100/50 bg-white/90 px-4 py-2.5 shadow-xl backdrop-blur-md sm:left-12 lg:left-24"
          >
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#eaf5ea]">
              <MapPin className="h-4.5 w-4.5 text-[#2d6a2d]" />
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Office</p>
              <p className="text-xs font-bold text-gray-800">Kukatpally, Hyderabad</p>
            </div>
          </motion.div>

          {/* ── Badge: Play / Live indicator (bottom-center) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.4, ease: "easeOut" }}
            className="pointer-events-auto absolute bottom-[8%] left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 rounded-full border border-gray-100/50 bg-white/90 px-5 py-2.5 shadow-xl backdrop-blur-md"
          >
            <span className="relative flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#2d6a2d]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2d6a2d] opacity-40" />
              <svg viewBox="0 0 12 12" className="relative h-3.5 w-3.5 fill-white">
                <polygon points="3,2 10,6 3,10" />
              </svg>
            </span>
            <span className="whitespace-nowrap text-sm font-semibold text-gray-700">Clean Power System</span>
          </motion.div>

          {/* ── Badge: Client stats (bottom-right) ── */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 1.6, ease: "easeOut" }}
            className="pointer-events-auto absolute bottom-[12%] right-4 z-20 flex items-center gap-3 rounded-2xl border border-gray-100/50 bg-white/90 px-4 py-2.5 shadow-xl backdrop-blur-md sm:right-12 lg:right-24"
          >
            <div className="flex -space-x-2">
              {["#1a4d1a", "#2d6a2d", "#5a9a5a", "#a8d5a8"].map((c, i) => (
                <div key={i} className="h-8 w-8 rounded-full border-2 border-white" style={{ backgroundColor: c }} />
              ))}
            </div>
            <div>
              <p className="text-sm font-bold leading-none text-gray-800">4,000+</p>
              <p className="mt-1 text-[10px] font-medium text-gray-500">Happy Clients</p>
            </div>
          </motion.div>
        </div>

        {/* ──── Partner Marquee ──── */}
        <div className="relative z-30 overflow-hidden border-t border-gray-100 bg-white/80 py-4 backdrop-blur-md mt-auto">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
          <div
            className="flex hover:[animation-play-state:paused]"
            style={{ animation: "marquee 40s linear infinite", width: "max-content", gap: "4rem" }}
          >
            {heroMarqueeItems.map((item, i) => (
              <span key={i} className="flex-shrink-0 text-[13px] font-bold uppercase tracking-[0.25em] text-gray-400">
                {item}
              </span>
            ))}
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
                  <div className="relative h-60 overflow-hidden flex-shrink-0">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
                    {popularSlugs.has(s.slug) && (
                      <span className="absolute right-4 top-4 rounded-full bg-gradient-gold px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground shadow-gold">
                        Popular
                      </span>
                    )}
                    <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white leading-tight drop-shadow-lg">
                      {s.title}
                    </h3>
                  </div>
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
              Featured <span className="text-gradient-gold">Solar Projects.</span>
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
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.client}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-gradient-gold px-3 py-1 text-xs font-bold text-white shadow-gold">
                    {p.kw}
                  </span>
                  <span className="absolute right-4 top-4 rounded-full bg-black/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                    {p.type}
                  </span>
                </div>
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

      {/* ══════════════════════════════════════════════
          LEADERSHIP BANNER — RKGME Ranks Top 3
          ══════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-navy-deep p-8 md:p-14 lg:p-16 text-white shadow-2xl">
            {/* Background Image - Stretched full screen behind the entire text block */}
            <div className="absolute inset-0 z-0">
              <img
                src={familySolarBanner}
                alt="Happy Indian Family with Solar Panels"
                className="h-full w-full object-cover object-center opacity-60"
              />
              {/* Radial overlay to keep text readable on top of the image */}
              <div className="absolute inset-0 bg-navy-deep/55" />
            </div>

            <div className="relative z-10 grid gap-10 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Info & Stats */}
              <div className="lg:col-span-8 space-y-6">
                {/* Ranking Badge tag */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold"
                >
                  <span className="flex h-2 w-2 rounded-full bg-gold animate-pulse" />
                  <span>NATIONAL RECOGNITION</span>
                </motion.div>

                {/* Heading */}
                <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}>
                  RK Green Mount Energies Ranks among India's <br />
                  <span className="text-gradient-gold text-4xl sm:text-5xl md:text-6xl block mt-2">Top 3 Solar Brands</span>
                </h2>

                <p className="max-w-xl text-sm md:text-base text-white/90 leading-relaxed" style={{ textShadow: "0 1px 5px rgba(0,0,0,0.8)" }}>
                  We are incredibly proud to bring zero-compromise green energy infrastructure closer to families and businesses across India.
                </p>

                {/* Stats board */}
                <div className="grid grid-cols-3 gap-4 rounded-2xl border border-white/25 bg-[#0a140a]/85 p-6 backdrop-blur-md max-w-lg shadow-lg">
                  <div className="text-center border-r border-white/20">
                    <p className="text-xl md:text-3xl font-extrabold text-gold">4,000+</p>
                    <p className="mt-1 text-[10px] md:text-xs font-medium text-white/80 uppercase tracking-wider">Customers</p>
                  </div>
                  <div className="text-center border-r border-white/20">
                    <p className="text-xl md:text-3xl font-extrabold text-gold">Pan-India</p>
                    <p className="mt-1 text-[10px] md:text-xs font-medium text-white/80 uppercase tracking-wider">Presence</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl md:text-3xl font-extrabold text-gold">50+ MW</p>
                    <p className="mt-1 text-[10px] md:text-xs font-medium text-white/80 uppercase tracking-wider">Projects</p>
                  </div>
                </div>
              </div>

              {/* Award seal floating right */}
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col items-center justify-center rounded-full bg-gradient-gold p-8 w-44 h-44 shadow-gold text-primary-foreground text-center"
                >
                  <span className="text-5xl">🏆</span>
                  <span className="mt-2 text-3xl font-extrabold leading-none">TOP 3</span>
                  <span className="mt-1 text-[10px] font-bold uppercase tracking-widest leading-none opacity-90">Residential Brand</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          VIDEO SHOWCASE — Google Drive Presentations
          ══════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">See Us In Action</p>
            <h2 className="mt-4 text-4xl font-bold text-[#1a1a2e] md:text-5xl">
              Project <span className="text-gradient-gold">Showcase & Walkthroughs</span>
            </h2>
            <p className="mt-5 text-lg text-gray-500">
              Watch our detailed installations, execution methodologies, and the impact of clean energy systems we deliver.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Video 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-3xl border border-gray-200 bg-white p-4 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-inner">
                {/* Embed player for Google Drive Video 1 */}
                <iframe
                  src="https://docs.google.com/get_video_info?docid=1wH4t8EmHq-I1g3MA7QnYZB4cLF-N3U-u&amp;authuser="
                  className="hidden"
                  title="Google Drive Video Stream Precheck"
                ></iframe>
                <iframe
                  src="https://drive.google.com/file/d/1wH4t8EmHq-I1g3MA7QnYZB4cLF-N3U-u/preview"
                  className="h-full w-full border-none"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>

            {/* Video 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="group overflow-hidden rounded-3xl border border-gray-200 bg-white p-4 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-inner">
                {/* Embed player for Google Drive Video 2 */}
                <iframe
                  src="https://drive.google.com/file/d/19h4oXIIs_6mV4el3rF2Yz5Hz0fIkXeI-/preview"
                  className="h-full w-full border-none"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="relative bg-white py-28 border-t border-gray-100">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Why Choose Us</p>
            <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
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
                className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:bg-gradient-gold hover:border-transparent hover:shadow-gold hover:-translate-y-1"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-white group-hover:text-[#2d6a2d]">
                  <w.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-navy-deep">{w.title}</h3>
                <p className="mt-3 text-sm text-gray-500 transition-colors duration-300 group-hover:text-navy-deep/85">{w.text}</p>
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

      {/* ══════════════════════════════════════════════
          OUR CLIENTS — auto-scrolling logo strip
          ══════════════════════════════════════════════ */}
      <section className="overflow-hidden bg-white py-20 border-y border-gray-100">
        <div className="container-x mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Trusted By</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Our <span className="text-gradient-gold">Clients.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">
              Powering homes, schools, hospitals, resorts, and industries across India with clean solar energy.
            </p>
          </motion.div>
        </div>

        {/* Single Row — scrolls left */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white to-transparent" />
          <div
            className="flex items-center gap-4 hover:[animation-play-state:paused]"
            style={{ animation: "marquee 28s linear infinite", width: "max-content" }}
          >
            {[...clientLogos, ...clientLogos, ...clientLogos].map((c, i) => (
              <div
                key={i}
                className="group flex h-28 w-52 flex-shrink-0 items-center justify-center rounded-2xl border border-gray-100 bg-white p-2 transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-emerald-50 hover:to-green-100 hover:border-green-200 hover:shadow-lg hover:shadow-green-200/40"
              >
                <img
                  src={c.src}
                  alt={c.name}
                  title={c.name}
                  className="max-h-20 max-w-[90%] object-contain transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          OUR BRANDS — partner brand marquee
          ══════════════════════════════════════════════ */}
      <section className="overflow-hidden bg-white py-16 border-b border-gray-100">
        <div className="container-x mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">We Work With</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Our <span className="text-gradient-gold">Brands.</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-gray-500">
              We use only Tier-1 panels, inverters, cables and BOS components from globally trusted manufacturers.
            </p>
          </motion.div>
        </div>

        {/* Single scrolling row */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white to-transparent" />
          <div
            className="flex items-center gap-4 hover:[animation-play-state:paused]"
            style={{ animation: "marquee 35s linear infinite", width: "max-content" }}
          >
            {[
              { src: "/brands/adani-solar.png", name: "Adani Solar", category: "Panels" },
              { src: "/brands/rayzon-solar.png", name: "Rayzon Solar", category: "Panels" },
              { src: "/brands/premier-energies.png", name: "Premier Energies", category: "Panels" },
              { src: "/brands/vikram-solar.png", name: "Vikram Solar", category: "Panels" },
              { src: "/brands/fronius.png", name: "Fronius", category: "Inverters" },
              { src: "/brands/polycab.png", name: "Polycab", category: "Cables & BOS" },
              { src: "/brands/growatt.png", name: "Growatt", category: "Inverters" },
              { src: "/brands/poweronemicro.png", name: "Power One Microsystems", category: "Inverters" },
              { src: "/brands/solis.png", name: "Solis", category: "Inverters" },
              // duplicate for seamless loop
              { src: "/brands/adani-solar.png", name: "Adani Solar", category: "Panels" },
              { src: "/brands/rayzon-solar.png", name: "Rayzon Solar", category: "Panels" },
              { src: "/brands/premier-energies.png", name: "Premier Energies", category: "Panels" },
              { src: "/brands/vikram-solar.png", name: "Vikram Solar", category: "Panels" },
              { src: "/brands/fronius.png", name: "Fronius", category: "Inverters" },
              { src: "/brands/polycab.png", name: "Polycab", category: "Cables & BOS" },
              { src: "/brands/growatt.png", name: "Growatt", category: "Inverters" },
              { src: "/brands/poweronemicro.png", name: "Power One Microsystems", category: "Inverters" },
              { src: "/brands/solis.png", name: "Solis", category: "Inverters" },
            ].map((b, i) => (
              <div
                key={i}
                className="group flex h-28 w-52 flex-shrink-0 items-center justify-center rounded-2xl border border-gray-100 bg-white p-2 transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-emerald-50 hover:to-green-100 hover:border-green-200 hover:shadow-lg hover:shadow-green-200/40"
              >
                <img
                  src={b.src}
                  alt={b.name}
                  title={b.name}
                  className="max-h-20 max-w-[90%] object-contain transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0">
          <img src={bgHome} alt="" className="h-full w-full object-cover animate-ken-burns" loading="lazy" />
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
