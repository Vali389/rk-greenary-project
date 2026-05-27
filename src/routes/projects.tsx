import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import bgProjects from "@/assets/bg-projects.jpg";
import svcIndustrial from "@/assets/svc-industrial.jpg";
import svcCommercial from "@/assets/svc-commercial.jpg";
import svcResidential from "@/assets/svc-residential.jpg";
import svcSurya from "@/assets/svc-suryaghar.jpg";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects | RK Solar Green Mount" },
      { name: "description", content: "Featured solar installations across India — schools, industries, housing societies and homes." },
    ],
  }),
});

const projects = [
  { img: svcCommercial, title: "100 kWp Rooftop System", client: "Cedar Valley International School, Khammam", text: "Clean electricity reducing grid dependency and lowering annual bills by 70%." },
  { img: svcIndustrial, title: "56 kWp Industrial Rooftop", client: "Airco Fin Tubes Pvt. Ltd., Isnapur", text: "High-efficiency system with advanced inverter technology for maximum yield." },
  { img: svcResidential, title: "40 kWp Shed-Mounted", client: "Divino Villas, Tellapur", text: "Powers common-area utilities, lowering maintenance costs for the society." },
  { img: svcSurya, title: "20 kWp Residential Cluster", client: "Aparna Western Meadows", text: "Subsidy-backed installation across multiple homes in the community." },
  { img: svcIndustrial, title: "72 kWp Industrial Roof", client: "Nu-way Heat Transfer Pvt. Ltd.", text: "Engineering-grade execution delivering significant monthly energy savings." },
  { img: svcCommercial, title: "30 kWp Commercial", client: "Private Hospital, Hyderabad", text: "Continuous power with hybrid storage backup for critical loads." },
];

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
        <div className="container-x grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="group overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="h-56 overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold transition-colors group-hover:text-gold">{p.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-widest text-gold">{p.client}</p>
                <p className="mt-3 text-sm text-muted-foreground">{p.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="bg-navy py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Testimonials</p>
            <h2 className="mt-4 text-4xl font-semibold">What our clients say.</h2>
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
