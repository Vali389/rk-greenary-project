import residential from "@/assets/svc-residential.jpg";
import commercial from "@/assets/svc-commercial.jpg";
import industrial from "@/assets/svc-industrial.jpg";
import maintenance from "@/assets/svc-maintenance.jpg";
import financing from "@/assets/svc-financing.jpg";
import suryaghar from "@/assets/svc-suryaghar.jpg";

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  description: string;
  features: string[];
  process: { title: string; text: string }[];
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
    slug: "maintenance",
    title: "Solar O&M",
    tagline: "Maximum uptime, every season",
    image: maintenance,
    description:
      "Operations & maintenance services to keep every kilowatt-hour flowing. Our certified technicians service systems of every size across India.",
    features: [
      "Quarterly preventive maintenance",
      "Module cleaning with deionised water",
      "Inverter diagnostics & firmware updates",
      "Thermal imaging & string testing",
      "24/7 remote monitoring",
      "AMC plans starting at low monthly cost",
    ],
    process: [
      { title: "Inspection", text: "Baseline health check of every component." },
      { title: "Monitoring", text: "Live dashboards with anomaly alerts." },
      { title: "Cleaning", text: "Scheduled cleaning for peak generation." },
      { title: "Repairs", text: "Rapid on-site response within 48 hours." },
      { title: "Reporting", text: "Monthly performance and savings reports." },
    ],
  },
  {
    slug: "financing",
    title: "Solar Financing",
    tagline: "Zero down. All sun.",
    image: financing,
    description:
      "Make solar affordable with our pan-India banking partnerships. Choose from subsidised residential loans, commercial EMI plans, or innovative PPA models.",
    features: [
      "Tie-ups with all major PSU banks",
      "Interest rates starting at 6%",
      "Tenures up to 10 years",
      "Subsidy facilitation under PM Surya Ghar",
      "OPEX / PPA models for businesses",
      "Quick approvals with minimal paperwork",
    ],
    process: [
      { title: "Eligibility", text: "We assess your profile and recommend the best lender." },
      { title: "Documentation", text: "Single-window paperwork handling." },
      { title: "Sanction", text: "Loan sanction within 7–10 working days." },
      { title: "Installation", text: "Project commissioning while bank disburses." },
      { title: "Repayment", text: "EMIs offset by your monthly solar savings." },
    ],
  },
  {
    slug: "pm-surya-ghar",
    title: "PM Surya Ghar",
    tagline: "Government subsidy. Free electricity.",
    image: suryaghar,
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
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
