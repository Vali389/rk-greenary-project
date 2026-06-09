import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Quote, Star, MapPin, Zap } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import bgProjects from "@/assets/bg-projects.jpg";
import svcIndustrial from "@/assets/svc-industrial.jpg";
import svcCommercial from "@/assets/svc-commercial.jpg";
import svcResidential from "@/assets/svc-residential.jpg";
import svcSurya from "@/assets/svc-suryaghar.jpg";
import img100kwp from "@/assets/100kwp-soloar-rooftop-system.jpeg";
import img49kwp from "@/assets/49kwpsolarshedmountedsytsem.jpeg";
import img56kwp from "@/assets/56kwpsoloar-rooftop-system.jpeg";
import img6kwp from "@/assets/6kwpsolorrooftopsytem.jpeg";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects | RK Green Mount Energies" },
      { name: "description", content: "Featured solar installations across India — schools, industries, housing societies and homes." },
    ],
  }),
});

const projects = [
  {
    img: img100kwp,
    title: "100 kWp Rooftop System",
    client: "Cedar Valley International School",
    location: "Khammam, Telangana",
    saving: "70% bill reduction",
    type: "Commercial",
  },
  {
    img: img49kwp,
    title: "49 kWp Shed-Mounted System",
    client: "Industrial Client",
    location: "Hyderabad, Telangana",
    saving: "₹45K+ monthly savings",
    type: "Industrial",
  },
  {
    img: img56kwp,
    title: "56 kWp Rooftop System",
    client: "Airco Fin Tubes Pvt. Ltd.",
    location: "Isnapur, Telangana",
    saving: "₹80K monthly savings",
    type: "Industrial",
  },
  {
    img: img6kwp,
    title: "6 kWp Residential System",
    client: "Mr. Pochadri Ariga",
    location: "Tellapur, RC Puram, Hyderabad",
    saving: "90% bill reduction",
    type: "Residential",
  },
  {
    img: svcResidential,
    title: "40 kWp Shed-Mounted",
    client: "Divino Villas Society",
    location: "Tellapur, Hyderabad",
    saving: "Common area powered",
    type: "Residential",
  },
  {
    img: svcSurya,
    title: "20 kWp Residential Cluster",
    client: "Aparna Western Meadows",
    location: "Hyderabad, Telangana",
    saving: "PM Surya Ghar subsidy",
    type: "PM Surya Ghar",
  },
  {
    img: svcIndustrial,
    title: "72 kWp Industrial Roof",
    client: "Nu-way Heat Transfer Pvt. Ltd.",
    location: "Hyderabad, Telangana",
    saving: "Significant monthly savings",
    type: "Industrial",
  },
  {
    img: svcCommercial,
    title: "30 kWp Commercial",
    client: "Private Hospital",
    location: "Hyderabad, Telangana",
    saving: "Hybrid storage backup",
    type: "Commercial",
  },
];

const typeColors: Record<string, string> = {
  "Commercial": "bg-blue-500/80",
  "Industrial": "bg-orange-500/80",
  "Residential": "bg-green-600/80",
  "PM Surya Ghar": "bg-gold/90",
};

const testimonials = [
  { name: "Parvathi Reddy", role: "Cedar Valley International School", text: "RK Solar handled everything from site inspection to installation smoothly. Our electricity bill dropped by almost 70% in just two months." },
  { name: "Kavitha Madam", role: "Aparna Western Meadows", text: "I really appreciated how clearly they explained every part of the process. Installation was neat, quick, and the team was polite." },
  { name: "Karthik Vuppala", role: "Housing Association Treasurer", text: "The 40 kWp system drastically reduced our community's common-area electricity expenses. Residents are very happy." },
];

function ProjectsPage() {
  return (
    <>
      <PageHero
        image={bgProjects}
        eyebrow="Projects"
        title="Real installations. Real savings."
        subtitle="A glimpse of how we've powered schools, factories, housing societies and homes across India."
      />

      <section className="py-24">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-14"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Our Portfolio</p>
            <h2 className="mt-4 text-4xl font-semibold">
              Installations across <span className="text-gradient-gold">India.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every project is delivered with MNRE-approved equipment, certified engineers, and our promise of lifetime support.
            </p>
          </motion.div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {projects.map((p, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="relative h-52 overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className={`absolute right-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur ${typeColors[p.type] ?? "bg-black/50"}`}>
                    {p.type}
                  </span>
                  <div className="absolute bottom-3 left-3">
                    <span className="rounded-full bg-gradient-gold px-3 py-1 text-xs font-bold text-white shadow-gold">
                      {p.title.split(" ").slice(0, 2).join(" ")}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold leading-snug transition-colors group-hover:text-gold">{p.title}</h3>
                  <p className="mt-1 text-xs font-medium text-foreground/80">{p.client}</p>
                  <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3 text-gold flex-shrink-0" />
                    {p.location}
                  </div>
                  <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                    <Zap className="h-3 w-3" /> {p.saving}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Testimonials</p>
            <h2 className="mt-4 text-4xl font-semibold text-white">What our clients say.</h2>
          </div>
          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <Quote className="h-8 w-8 text-gold" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-1 text-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <div className="mt-4">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
