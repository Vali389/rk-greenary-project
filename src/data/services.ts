import residential from "@/assets/svc_residential.png";
import commercial from "@/assets/svc_commercial.png";
import industrial from "@/assets/svc_industrial.png";
import financing from "@/assets/solar-financing.jpeg";
import suryaghar from "@/assets/pmsuryaghar.jpeg";
import pmkusum from "@/assets/svc_pmkusum.png";
import epc from "@/assets/svc_epc.png";

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  imagePosition?: string;
  description: string;
  features: string[];
  process: { title: string; text: string }[];
  brochure?: string;
};

export const services: Service[] = [
  {
    slug: "residential",
    title: "Residential Solar",
    tagline: "Power your home with the sun",
    image: residential,
    description:
      "End-to-end rooftop solar systems designed for Indian homes, villas, and apartments. Cut your electricity bill by up to 90% while increasing the value of your property.",
    features: [
      "Eligible for MNRE residential subsidy",
      "Zero down-payment loan options",
      "Low interest financing from 6%",
      "MNRE-approved Tier-1 panels",
      "25-year panel performance warranty",
      "Free site survey & feasibility report",
    ],
    process: [
      { title: "Site Survey", text: "Our engineers evaluate your roof and energy needs at no cost." },
      { title: "Custom Design", text: "Tailored layout & inverter sizing for maximum generation." },
      { title: "Approvals", text: "We handle DISCOM, subsidy and net-metering paperwork." },
      { title: "Installation", text: "Professional installation in 5–7 days with safety compliance." },
      { title: "After-care", text: "Lifetime support, monitoring, and annual cleaning." },
    ],
  },
  {
    slug: "commercial",
    title: "Commercial Solar",
    tagline: "Smart energy for smart businesses",
    image: commercial,
    description:
      "Reduce operational costs and meet your sustainability goals with grid-tied or hybrid solar systems for offices, malls, hospitals and educational institutions.",
    features: [
      "Zero down-payment EMI financing",
      "Accelerated depreciation tax benefits",
      "Custom CAPEX & OPEX models",
      "Remote monitoring dashboards",
      "ESG & green building certification",
      "Fast project execution",
    ],
    process: [
      { title: "Energy Audit", text: "We map your load curve and tariff slabs." },
      { title: "Financial Modelling", text: "ROI, payback and IRR projections for your CFO." },
      { title: "Engineering", text: "MNRE-approved structures, panels and inverters." },
      { title: "Execution", text: "Turnkey installation with zero downtime to operations." },
      { title: "O&M", text: "24/7 monitoring with guaranteed uptime SLAs." },
    ],
  },
  {
    slug: "industrial",
    title: "Industrial Solar",
    tagline: "Megawatt-scale, mission-critical",
    image: industrial,
    description:
      "High-capacity rooftop and ground-mount systems for factories, refineries and manufacturing plants. Engineered to power heavy industrial loads with unmatched reliability.",
    features: [
      "100 kWp – 10 MWp installations",
      "Shed-mounted & ground-mount expertise",
      "Hybrid storage integration",
      "Open-access & wheeling consultancy",
      "PPA and third-party investor models",
      "Compliance with CEA standards",
    ],
    process: [
      { title: "Feasibility", text: "Detailed structural and electrical feasibility study." },
      { title: "Design", text: "PVsyst-based simulation and yield projections." },
      { title: "Procurement", text: "Globally sourced Tier-1 modules and inverters." },
      { title: "EPC", text: "Safe, on-time, on-budget execution." },
      { title: "Long-term O&M", text: "Predictive maintenance and performance guarantees." },
    ],
  },
  {
    slug: "financing",
    title: "Solar Financing Support",
    tagline: "Easy solar loan and EMI options",
    image: financing,
    layout: "split",
    imagePosition: "top",
    description:
      "We help customers get solar loan and EMI support through trusted finance partners for rooftop solar installation.",
    features: [
      "Funding from top green NBFCs & fintech partners",
      "Up to 100% funding options available",
      "Interest rates starting at competitive slabs",
      "Subsidised loan support under PM Surya Ghar",
      "Quick approvals with minimal paperwork",
    ],
    process: [
      { title: "Eligibility Assessment", text: "We analyze your documents, profile, and credit score to guide you to the best lender." },
      { title: "Lender Approval", text: "Single-window documentation submission and approval tracking." },
      { title: "Disbursal & Setup", text: "Disbursal of funds directly linked with our installation schedule." },
    ],
  },
  {
    slug: "pm-surya-ghar",
    title: "PM Surya Ghar",
    tagline: "Government subsidy. Free electricity.",
    image: suryaghar,
    layout: "split",
    imagePosition: "top",
    description:
      "Get up to ₹78,000 in central government subsidy under the PM Surya Ghar Muft Bijli Yojana. We handle every step of your application — from registration to subsidy credit.",
    features: [
      "End-to-end subsidy registration",
      "DISCOM and net-metering coordination",
      "MNRE-vendor authorised installer",
      "Free upto 300 units monthly",
      "Subsidy credited to your account",
      "Available across all Indian states",
    ],
    process: [
      { title: "Register", text: "We onboard you on the official PM Surya Ghar portal." },
      { title: "Feasibility", text: "DISCOM technical feasibility approval." },
      { title: "Install", text: "Certified installation with MNRE-approved gear." },
      { title: "Inspect", text: "Joint inspection and net-meter installation." },
      { title: "Subsidy", text: "Subsidy credited directly to your bank account." },
    ],
  },
  {
    slug: "pm-kusum",
    title: "PM-KUSUM Scheme (PPA)",
    tagline: "Solar Energy: The Power of Nature",
    image: pmkusum,
    description:
      "Transition to solar energy with zero upfront costs using our Power Purchase Agreement (PPA) model. Under the PM-KUSUM scheme, RK Green Mount Energies handles all financing, design, and execution. You simply enjoy the benefits of cleaner, low-cost electricity with no initial investment required, providing a hassle-free strategy to slash operational expenses and reduce your carbon footprint.",
    features: [
      "No upfront capital investment required",
      "Pay only for the electricity consumed at lower tariff rates",
      "Guaranteed long-term Power Purchase Agreement (PPA)",
      "Zero operational and maintenance concerns for the client",
      "Seamless integration with existing power generation systems",
      "Significantly reduces carbon footprint and energy expenses",
    ],
    process: [
      { title: "PPA Agreement", text: "We sign a formal Power Purchase Agreement outlining lower tariff rates with no upfront cost to you." },
      { title: "System Engineering", text: "Custom shadow-free site designs optimized for maximum solar harvest." },
      { title: "Turnkey Installation", text: "RK Green Mount Energies manages the complete procurement and construction phases." },
      { title: "Operations & Maintenance", text: "We handle continuous system operation, monitoring, and regular maintenance." },
    ],
  },
  {
    slug: "epc-contract",
    title: "EPC Contract",
    tagline: "Engineering, Procurement & Construction",
    image: epc,
    description:
      "RK Green Mount Energies offers full-service Engineering, Procurement, and Construction (EPC) solutions. We provide complete end-to-end project management for your solar installations. Our certified EPC services ensure that your customized solar system is designed and executed with precision, maximum efficiency, and the highest standards of structural and electrical quality.",
    features: [
      "Full end-to-end solar project management",
      "Customized engineering to meet your unique site requirements",
      "Procurement of high-efficiency Tier-1 solar panels & inverters",
      "Professional site construction executed with high precision",
      "Full DISCOM coordination, structural design, and approvals",
      "Guaranteed execution to the highest standards of safety and quality",
    ],
    process: [
      { title: "Detailed Engineering", text: "Designing solar solutions customized to different capacities as per your unique needs." },
      { title: "Quality Procurement", text: "Sourcing certified high-efficiency panels, inverters, and BOS components." },
      { title: "Precise Construction", text: "Handling all structure fabrication, installation, electrical routing, and commissioning." },
      { title: "System Handoff", text: "Rigorous testing and grid connection before transferring full operational status." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
