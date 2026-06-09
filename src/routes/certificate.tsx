import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FileText, Download, Eye, ShieldCheck, FileSpreadsheet, ClipboardList } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import bgAbout from "@/assets/bg-about.jpg";
import warrantyCert from "@/assets/waranty-certificte.pdf";
import invoiceDoc from "@/assets/RKGME INVOICE -documnet.pdf";
import quotationDoc from "@/assets/quotation proposal and design document.pdf";

export const Route = createFileRoute("/certificate")({
  component: CertificatePage,
  head: () => ({
    meta: [
      { title: "Certificate & Documents | RK Green Mount Energies" },
      {
        name: "description",
        content:
          "View and download official documents from RK Green Mount Energies — warranty certificate, invoice, and project quotation.",
      },
    ],
  }),
});

const documents = [
  {
    id: "warranty",
    icon: ShieldCheck,
    category: "Warranty",
    title: "Solar Warranty Certificate",
    subtitle: "RK Green Mount Energies — Official Warranty Document",
    description:
      "Our comprehensive solar plant warranty covering 5-year workmanship guarantee, 25-year panel performance warranty, and 5-year Annual Maintenance Contract (AMC). Issued under our company seal.",
    highlights: [
      "5-year workmanship & components warranty",
      "25-year panel linear performance warranty",
      "5-year AMC included",
      "Grid-tie inverter coverage",
    ],
    file: warrantyCert,
    downloadName: "RK-Green-Mount-Energies-Warranty-Certificate.pdf",
    color: "from-green-500 to-emerald-600",
    borderColor: "border-green-200",
    bgColor: "bg-green-50",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    id: "invoice",
    icon: FileSpreadsheet,
    category: "Invoice",
    title: "Tax Invoice",
    subtitle: "RKGME/TS/25-26/94 — Official GST Invoice",
    description:
      "Official GST tax invoice issued by RK Greenmount Energies for solar rooftop power plant supply, installation, and commissioning. Includes full itemized breakdown with HSN codes and tax details.",
    highlights: [
      "GST-compliant tax invoice",
      "HSN codes for all line items",
      "CGST & SGST breakdowns",
      "Authorised signatory stamp",
    ],
    file: invoiceDoc,
    downloadName: "RK-Green-Mount-Energies-Tax-Invoice.pdf",
    color: "from-blue-500 to-indigo-600",
    borderColor: "border-blue-200",
    bgColor: "bg-blue-50",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    id: "quotation",
    icon: ClipboardList,
    category: "Quotation",
    title: "Project Quotation & Design Proposal",
    subtitle: "40 kWp Solar Shed-Mounted System — Detailed Proposal",
    description:
      "Comprehensive solar project proposal including system specifications, block diagrams, pricing breakdowns, ROI calculations, year-wise savings projections, payment terms and full warranty conditions.",
    highlights: [
      "Complete system specifications",
      "ROI & payback calculations",
      "Year-wise 25-year savings forecast",
      "Payment terms & conditions",
    ],
    file: quotationDoc,
    downloadName: "RK-Green-Mount-Energies-Quotation-Proposal.pdf",
    color: "from-amber-500 to-orange-600",
    borderColor: "border-amber-200",
    bgColor: "bg-amber-50",
    badgeColor: "bg-amber-100 text-amber-700",
  },
];

function CertificatePage() {
  return (
    <>
      <PageHero
        image={bgAbout}
        eyebrow="Official Documents"
        title="Certificates & Documents"
        subtitle="View and download all official documents from RK Green Mount Energies — warranties, invoices and project proposals."
      />

      <section className="py-24">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">Our Documents</p>
            <h2 className="mt-4 text-4xl font-semibold">
              Transparency you can{" "}
              <span className="text-gradient-gold">trust.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every document is official, signed, and available to view or download below.
            </p>
          </motion.div>

          <div className="space-y-8">
            {documents.map((doc, i) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`overflow-hidden rounded-2xl border-2 bg-white shadow-sm hover:shadow-lg transition-shadow ${doc.borderColor}`}
              >
                <div className="grid gap-0 lg:grid-cols-3">
                  {/* Left: Color accent panel */}
                  <div className={`flex flex-col items-center justify-center p-10 bg-gradient-to-br ${doc.color} text-white`}>
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20">
                      <doc.icon className="h-10 w-10" />
                    </div>
                    <span className="mt-4 rounded-full bg-white/20 px-4 py-1 text-xs font-bold uppercase tracking-widest">
                      {doc.category}
                    </span>
                    <h3 className="mt-3 text-center text-2xl font-bold leading-tight">{doc.title}</h3>
                    <p className="mt-2 text-center text-sm opacity-80">{doc.subtitle}</p>
                  </div>

                  {/* Right: Details + Actions */}
                  <div className="col-span-2 flex flex-col justify-between p-8">
                    <div>
                      <p className="text-muted-foreground leading-relaxed">{doc.description}</p>
                      <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                        {doc.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-sm">
                            <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-border pt-6">
                      <a
                        href={doc.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-white shadow-gold transition-transform hover:scale-105"
                      >
                        <Eye className="h-4 w-4" />
                        View Document
                      </a>
                      <a
                        href={doc.file}
                        download={doc.downloadName}
                        className="inline-flex items-center gap-2 rounded-full border-2 border-gold px-6 py-3 text-sm font-semibold text-gold transition-all hover:bg-gold hover:text-white"
                      >
                        <Download className="h-4 w-4" />
                        Download PDF
                      </a>
                      <span className={`ml-auto rounded-full px-4 py-1 text-xs font-semibold ${doc.badgeColor}`}>
                        <FileText className="inline h-3.5 w-3.5 mr-1" />
                        PDF Document
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
