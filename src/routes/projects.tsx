import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Quote, Star, MapPin, Zap, ArrowRight, ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import heroImage from "@/assets/hero_projects_new.png";
import bgProjectsCta from "@/assets/bg-projects-cta.png";

// Real project assets (New)
import imgCedarValley from "@/assets/100kwp-soloar-rooftop-system.jpeg";

import imgGeethaMadhuri1 from "@/assets/15kwp - geetha madhuri.jpeg";
import imgGeethaMadhuri2 from "@/assets/15kwp - geetha madhuri-img-1.jpeg";
import imgGeethaMadhuri3 from "@/assets/15kwp - geetha madhuri-img-2.jpeg";
import imgGeethaMadhuri4 from "@/assets/15kwp - geetha madhuri-img-3-customed-soloar-fordomestic.jpeg";
import imgGeethaMadhuri5 from "@/assets/15kwp - geetha madhuri-img-4.jpeg";
import imgGeethaMadhuri6 from "@/assets/15kwp - geetha madhuri-img-5.jpeg";

import imgEeshaHospital1 from "@/assets/Eesha-hospital-50kwap-vikrarabah.jpeg";
import imgEeshaHospital2 from "@/assets/Eesha-hospital-50kwap-vikrarabah-img-2.jpeg";
import imgEeshaHospital3 from "@/assets/Eesha-hospital-50kwap-vikrarabah-img-3.jpeg";
import imgEeshaHospital4 from "@/assets/Eesha-hospital-50kwap-vikrarabah-img-4.jpeg";
import imgEeshaHospital5 from "@/assets/Eesha-hospital-50kwap-vikrarabah-img-5.jpeg";

import imgNuway1 from "@/assets/nuway-heattransferpvtltd-indrakaran-60kwat.jpeg";
import imgNuway2 from "@/assets/nuway-heattransferpvtltd-indrakaran-60kwat-img2.jpeg";
import imgNuway3 from "@/assets/nuway-heattransferpvtltd-indrakaran-60kwat-img-3.jpeg";
import imgNuway4 from "@/assets/nuway-heattransferpvtltd-indrakaran-60kwat-img-4.jpeg";
import imgNuway5 from "@/assets/nuway-heattransferpvtltd-indrakaran-60kwat-img-5.jpeg";

import imgAparnaCarParking1 from "@/assets/solar-car-parking-30kwp(aparna-westren-meadows-welfare-society)-mokilla.jpeg";
import imgAparnaCarParking2 from "@/assets/solar-car-parking-30kwp(aparna-westren-meadows-welfare-society)-mokilla-img-2.jpeg";
import imgAparnaCarParking3 from "@/assets/solar-car-parking-30kwp(aparna-westren-meadows-welfare-society)-mokilla-img-3.jpeg";

import imgRealBioTech1 from "@/assets/Real-bio-tech-komapally-30kwat.jpeg";
import imgRealBioTech2 from "@/assets/Real-bio-tech-komapally-30kwat-img-2.jpeg";
import imgRealBioTech3 from "@/assets/Real-bio-tech-komapally-30kwat-img-3.jpeg";

import imgMeghaAqua1 from "@/assets/megha-aqua-industrues-40kwp-khammam.jpeg";
import imgMeghaAqua2 from "@/assets/megha-aqua-industrues-40kwp-khammam-img-2.jpeg";
import imgMeghaAqua3 from "@/assets/megha-aqua-industrues-40kwp-khammam-img-3.jpeg";
import imgMeghaAqua4 from "@/assets/megha-aqua-industrues-40kwp-khammam-img-4.jpeg";

import imgSpringLeaf1 from "@/assets/spring-leaf-school-40kwat.jpeg";
import imgSpringLeaf2 from "@/assets/spring-leaf-school-40kwat-img1.jpeg";

import imgSereneView from "@/assets/20kwp-serene-view-association-apartments-chandanagar.jpeg";

// Old project assets (Restored)
import img49kwp from "@/assets/49kwpsolarshedmountedsytsem.jpeg";

import img6kwp from "@/assets/6kwpsolorrooftopsytem.jpeg";
import svcResidential from "@/assets/svc-residential.jpg";
import svcSurya from "@/assets/svc-suryaghar.jpg";
import svcCommercial from "@/assets/svc-commercial.jpg";
import svcIndustrial from "@/assets/svc-industrial.jpg";

// Client logos for marquee
import logoNatureValley from "@/assets/nature-vallry-resorts.png";
import logoCedarValley from "@/assets/cedar valley international school.avif";
import logoEcoVillage from "@/assets/eco-villago-resorts.png";
import logoEeshaHospital from "@/assets/eesha-hospitals.png";
import logoHarvestSchool from "@/assets/harvest-publicshool.png";
import logoHarvestSpring from "@/assets/harvest-spring-leaf.png";
import logoKarthikeya from "@/assets/karthikeya-constryctions.png";

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
  // --- NEW MULTI-IMAGE PROJECTS ---
  {
    images: [imgCedarValley],
    title: "100 kWp Academic Rooftop Grid",
    client: "Cedar Valley International School",
    location: "Khammam, Telangana",
    saving: "70% bill reduction",
    type: "Commercial",
    matter: "A high-capacity institutional solar deployment engineered to power digital classrooms, labs, and school administration. The grid utilizes premium monocrystalline panels to offset heavy daytime air-conditioning and lighting loads.",
  },
  {
    images: [
      imgGeethaMadhuri1, imgGeethaMadhuri2, imgGeethaMadhuri3, 
      imgGeethaMadhuri4, imgGeethaMadhuri5, imgGeethaMadhuri6
    ],
    title: "15 kWp Premium Domestic Solar",
    client: "Singer Geetha Madhuri's Residence",
    location: "Hyderabad, Telangana",
    saving: "95% bill reduction",
    type: "Residential",
    matter: "Custom-designed domestic solar plant providing near total grid independence for a high-profile residence. Features high-load hybrid inverters for seamless backup during grid outages and high-efficiency panels to maximize small roof space.",
  },
  {
    images: [
      imgEeshaHospital1, imgEeshaHospital2, imgEeshaHospital3, 
      imgEeshaHospital4, imgEeshaHospital5
    ],
    title: "50 kWp Critical Care Solar Plant",
    client: "Eesha Hospitals",
    location: "Vikarabad, Telangana",
    saving: "₹65K+ monthly savings",
    type: "Commercial",
    matter: "Solar grid integration for medical infrastructure. Deployed to provide stable, clean power offsets for diagnostic equipment, ventilator units, and operation theaters, coupled with priority grid backup systems.",
  },
  {
    images: [
      imgNuway1, imgNuway2, imgNuway3, imgNuway4, imgNuway5
    ],
    title: "60 kWp Heavy Industrial Shed Solar",
    client: "Nu-way Heat Transfer Pvt. Ltd.",
    location: "Indrakaran, Telangana",
    saving: "₹85K monthly savings",
    type: "Industrial",
    matter: "Industrial shed-mounted solar panels engineered to withstand heavy vibration and storm loads. Direct integration offsets machine starter current surges, lowering peak demand penalties from utilities.",
  },
  {
    images: [
      imgAparnaCarParking1, imgAparnaCarParking2, imgAparnaCarParking3
    ],
    title: "30 kWp Solar Car Parking Canopy",
    client: "Aparna Western Meadows Welfare Society",
    location: "Mokilla, Hyderabad",
    saving: "Common area grid-independent",
    type: "Residential",
    matter: "Dual-utility solar architecture creating shaded vehicle parking while harvesting clean energy. Deployed to power apartment lifts, common lighting grid, and water pump systems automatically.",
  },
  {
    images: [
      imgRealBioTech1, imgRealBioTech2, imgRealBioTech3
    ],
    title: "30 kWp Commercial Rooftop Shed",
    client: "Real Bio-Tech",
    location: "Kompally, Hyderabad",
    saving: "₹40K+ monthly savings",
    type: "Commercial",
    matter: "Commercial rooftop shed-mounted system supporting bio-technical equipment and temperature-controlled laboratory cold storage. Designed with high-durability mounting structures for maximum storm resistance.",
  },
  {
    images: [
      imgMeghaAqua1, imgMeghaAqua2, imgMeghaAqua3, imgMeghaAqua4
    ],
    title: "40 kWp Shed-Mounted Solar Grid",
    client: "Megha Aqua Industries",
    location: "Khammam, Telangana",
    saving: "₹50K monthly savings",
    type: "Industrial",
    matter: "High-load industrial shed solar system for water purification and bottling lines. Deployed a 40 kWp monocrystalline array to offset purification machine power demands, resulting in clean, cost-efficient production.",
  },
  {
    images: [
      imgSpringLeaf1, imgSpringLeaf2
    ],
    title: "40 kWp Educational Rooftop System",
    client: "Spring Leaf School",
    location: "Hyderabad, Telangana",
    saving: "85% bill reduction",
    type: "Commercial",
    matter: "Sustainable educational project designed to cover classroom air conditioning loads. This 40 kWp rooftop solar installation helps Spring Leaf School transition to a green campus while slashing seasonal peak electricity bills.",
  },
  {
    images: [imgSereneView],
    title: "20 kWp Residential Society Grid",
    client: "Serene View Association Apartments",
    location: "Chandanagar, Hyderabad",
    saving: "Net-metering credits",
    type: "Residential",
    matter: "A residential society project powering common area water pumps, lifts, and perimeter lighting. The 20 kWp array runs under net metering, returning excess solar energy to the grid during low-demand daytime hours.",
  },
  
  // --- RESTORED PREVIOUS PROJECTS ---
  {
    images: [img6kwp],
    title: "6 kWp Rooftop System",
    client: "Nature Valley Resorts",
    location: "Hyderabad, Telangana",
    saving: "90% bill reduction",
    type: "Commercial",
    matter: "Compact commercial rooftop system deployed for a luxury resort to offset primary operational power loads."
  },
  {
    images: [img49kwp],
    title: "49 kWp Shed-Mounted System",
    client: "Industrial Client",
    location: "Hyderabad, Telangana",
    saving: "₹45K+ monthly savings",
    type: "Industrial",
    matter: "High-yield shed-mounted monocrystalline grid supporting continuous heavy industrial machinery operations."
  },

  {
    images: [img6kwp],
    title: "6 kWp Residential System",
    client: "Mr. Pochadri Ariga",
    location: "Tellapur, RC Puram, Hyderabad",
    saving: "90% bill reduction",
    type: "Residential",
    matter: "Reliable domestic grid-tied solar system delivering near complete energy independence for the household."
  },
  {
    images: [svcResidential],
    title: "40 kWp Shed-Mounted",
    client: "Divino Villas Society",
    location: "Tellapur, Hyderabad",
    saving: "Common area powered",
    type: "Residential",
    matter: "Community solar project providing 100% sustainable power for shared amenities, street lighting, and clubhouse operations."
  },
  {
    images: [svcSurya],
    title: "20 kWp Residential Cluster",
    client: "Aparna Western Meadows",
    location: "Hyderabad, Telangana",
    saving: "PM Surya Ghar subsidy",
    type: "PM Surya Ghar",
    matter: "Subsidized cluster deployment enabling affordable clean energy access for multiple residential units under the PM Surya Ghar scheme."
  },
  {
    images: [svcCommercial],
    title: "30 kWp Commercial",
    client: "Private Hospital",
    location: "Hyderabad, Telangana",
    saving: "Hybrid storage backup",
    type: "Commercial",
    matter: "Critical medical infrastructure backup solar plant ensuring round-the-clock uninterrupted power for sensitive life-saving equipment."
  },
];

const testimonials = [
  { name: "Parvathi Reddy", role: "Cedar Valley International School", text: "RK Solar handled everything from site inspection to installation smoothly. Our electricity bill dropped by almost 70% in just two months." },
  { name: "Kavitha Madam", role: "Aparna Western Meadows", text: "I really appreciated how clearly they explained every part of the process. Installation was neat, quick, and the team was polite." },
  { name: "Karthik Vuppala", role: "Housing Association Treasurer", text: "The 40 kWp system drastically reduced our community's common-area electricity expenses. Residents are very happy." },
];

// Project Gallery matches the Archistrux UI: A large top image with a scrollable row of smaller thumbnails below.
function ProjectGallery({ project, onImageClick }: { project: any, onImageClick: (idx: number) => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const images = project.images;
  const [mainIdx, setMainIdx] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = 300;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
    }
  };

  const TopImageHoverOverlay = () => (
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none flex flex-col justify-end p-6 lg:p-8 z-20">
      <div className="transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-75">
        <span className="inline-block bg-[#dfac2c] text-black px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] rounded-md shadow-lg mb-3">
          {project.type}
        </span>
        <h4 className="text-3xl font-extrabold text-white leading-[1.1] tracking-tight drop-shadow-lg">
          {project.title}
        </h4>
      </div>
    </div>
  );

  if (images.length === 1) {
    return (
      <div 
        className="relative w-full h-[350px] lg:h-[450px] overflow-hidden rounded-[1.5rem] group cursor-pointer shadow-2xl isolate"
        onClick={() => onImageClick(0)}
      >
        <img src={images[0]} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <TopImageHoverOverlay />
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-3 lg:gap-4">
      {/* Top large image */}
      <div 
        className="relative w-full h-[280px] lg:h-[380px] overflow-hidden rounded-[1.5rem] group cursor-pointer shadow-xl isolate"
        onClick={() => onImageClick(mainIdx)}
      >
        <img src={images[mainIdx]} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <TopImageHoverOverlay />
      </div>
      
      {/* Bottom row of thumbnails (Archistrux style) */}
      <div className="relative group/scroll">
        <div 
          ref={scrollRef}
          className="flex gap-3 lg:gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((img: string, idx: number) => (
            <div 
              key={idx} 
              className={`relative w-32 lg:w-40 h-24 lg:h-28 flex-shrink-0 overflow-hidden rounded-xl snap-start cursor-pointer shadow-lg isolate transition-all duration-300 ${
                idx === mainIdx ? 'ring-2 ring-gold opacity-100' : 'opacity-50 hover:opacity-100'
              }`}
              onClick={() => setMainIdx(idx)}
            >
              <img src={img} alt={`${project.title} - ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
            </div>
          ))}
        </div>

        {/* Scroll Navigation Arrows */}
        {images.length > 3 && (
          <>
            <button 
              onClick={(e) => { e.stopPropagation(); scroll('left'); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-sm text-white opacity-0 group-hover/scroll:opacity-100 transition-all z-20 hover:bg-gold hover:text-black border border-white/10 shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); scroll('right'); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-sm text-white opacity-0 group-hover/scroll:opacity-100 transition-all z-20 hover:bg-gold hover:text-black border border-white/10 shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}


function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [lightbox, setLightbox] = useState<{ images: string[], currentIndex: number } | null>(null);

  const categories = ["All", "Commercial", "Industrial", "Residential", "PM Surya Ghar"];

  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter(p => p.type === activeTab);

  // Handle escape key for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <PageHero
        image={heroImage}
        eyebrow="Projects"
        title="Real installations. Real savings."
        subtitle="A glimpse of how we've powered schools, factories, housing societies and homes across India."
      />

      <section className="py-28 bg-[#070707] text-white overflow-hidden">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gold font-black">Our Portfolio</p>
            <h2 className="mt-4 text-4xl font-extrabold text-white leading-tight">
              Premium Solar <span className="text-gradient-gold">Execution.</span>
            </h2>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed font-light">
              We handle everything from custom structural woodwork to premium monocrystalline arrays, delivering highly functional energy spaces tailored exactly to the client's vision.
            </p>
          </motion.div>

          {/* Interactive Category Tabs (Glassmorphism dark theme) */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-24">
            {categories.map((cat) => {
              const count = cat === "All" 
                ? projects.length 
                : projects.filter(p => p.type === cat).length;
              const isActive = activeTab === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`group flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full border transition-all duration-300 ${
                    isActive 
                      ? "bg-gradient-gold text-navy-deep border-transparent shadow-lg shadow-gold/10" 
                      : "bg-[#111] border-[#222] text-gray-400 hover:border-gold hover:text-gold hover:bg-gold/5"
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`px-2 py-0.5 text-[9px] rounded-full font-black transition-colors ${
                    isActive 
                      ? "bg-navy-deep/20 text-[#0c180c]" 
                      : "bg-[#1a1a1a] text-gray-500 group-hover:bg-gold/10 group-hover:text-gold"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Animated Split Cards Container (Pitch black background, spacing-y-32) */}
          <motion.div 
            layout 
            className="space-y-32 lg:space-y-40 max-w-6xl mx-auto"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p, i) => {
                const isReversed = i % 2 === 1;

                return (
                  <motion.article
                    layout
                    key={p.client + p.title + i}
                    initial={{ opacity: 0, y: 40, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 40, scale: 0.98 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className={`group flex flex-col md:flex-row ${
                      isReversed ? "md:flex-row-reverse" : ""
                    } items-center gap-12 lg:gap-20 overflow-visible bg-transparent`}
                  >
                    {/* Image Column with Multi-Image Grid */}
                    <div className="w-full md:w-7/12 relative flex-shrink-0 z-10">
                      <ProjectGallery 
                        project={p} 
                        onImageClick={(idx) => setLightbox({ images: p.images, currentIndex: idx })} 
                      />
                    </div>

                    {/* Content Column (No background card, text is floating on black) */}
                    <div className="w-full md:w-5/12 relative flex flex-col justify-center py-4">
                      {/* Large background sequence number */}
                      <div className="absolute -top-16 -left-10 text-[14rem] font-black text-[#141414] select-none pointer-events-none z-0 tracking-tighter leading-none">
                        0{i + 1}
                      </div>

                      <div className="relative z-10">
                        {/* Gold location flag */}
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gold">
                          <MapPin className="h-3.5 w-3.5 text-gold flex-shrink-0" />
                          <span>{p.location}</span>
                        </div>

                        {/* Title */}
                        <h3 className="mt-5 text-4xl lg:text-[2.75rem] font-bold tracking-tight text-white leading-[1.15] group-hover:text-gold transition-colors duration-500">
                          {p.title}
                        </h3>

                        {/* Client details & Description */}
                        <p className="mt-6 text-sm text-gray-400 leading-relaxed font-light">
                          {p.matter}
                        </p>
                        
                        <div className="mt-8 mb-8 border-t border-[#1f1f1f] w-12" />

                        <div className="flex flex-col gap-5">
                          {/* Tag & Save layout */}
                          <div className="flex items-center gap-3 flex-wrap">
                            <span className="rounded-full border border-gold/40 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-gold bg-transparent">
                              {p.type}
                            </span>
                            <div className="flex items-center gap-1.5 rounded-xl bg-emerald-950/40 border border-emerald-800/30 px-3.5 py-1.5 text-xs font-bold text-emerald-400">
                              <Zap className="h-3.5 w-3.5 text-emerald-400 fill-emerald-400/20" />
                              <span>{p.saving}</span>
                            </div>
                          </div>

                          <Link 
                            to="/contact"
                            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-white hover:text-gold transition-colors w-fit group/link"
                          >
                            Inquire Setup <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Fullscreen Lightbox Overlay */}
      <AnimatePresence>
        {lightbox && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
          >
            <button 
              onClick={() => setLightbox(null)} 
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 hover:text-gold transition-colors z-[110]"
            >
              <X className="w-6 h-6" />
            </button>

            {lightbox.images.length > 1 && (
              <>
                <button 
                  onClick={() => setLightbox(prev => prev ? { ...prev, currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length } : null)}
                  className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 text-white hover:bg-white/15 hover:text-gold transition-colors z-[110]"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                
                <button 
                  onClick={() => setLightbox(prev => prev ? { ...prev, currentIndex: (prev.currentIndex + 1) % prev.images.length } : null)}
                  className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 text-white hover:bg-white/15 hover:text-gold transition-colors z-[110]"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}

            {/* Main Lightbox Image */}
            <div className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center">
              <motion.img 
                key={lightbox.currentIndex}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.3 }}
                src={lightbox.images[lightbox.currentIndex]} 
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl relative z-[105]"
              />
            </div>
            
            {/* Thumbnails row at bottom of Lightbox */}
            {lightbox.images.length > 1 && (
              <div className="absolute bottom-4 md:bottom-8 left-0 right-0 z-[110] flex flex-col items-center gap-3">
                <div className="flex gap-2 overflow-x-auto px-4 max-w-[90vw] md:max-w-4xl pb-2 scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {lightbox.images.map((img, idx) => (
                    <div 
                      key={idx}
                      onClick={(e) => { e.stopPropagation(); setLightbox(prev => prev ? { ...prev, currentIndex: idx } : null); }}
                      className={`relative w-16 h-12 md:w-20 md:h-14 flex-shrink-0 rounded-md overflow-hidden cursor-pointer transition-all duration-300 ${
                        idx === lightbox.currentIndex ? 'ring-2 ring-gold opacity-100 scale-105' : 'opacity-50 hover:opacity-100'
                      }`}
                    >
                      <img src={img} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="px-4 py-1 rounded-full bg-white/10 backdrop-blur-md text-white/80 text-[10px] font-bold tracking-widest uppercase shadow-md">
                  {lightbox.currentIndex + 1} / {lightbox.images.length}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>


      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0">
          <img src={bgProjectsCta} alt="" className="h-full w-full object-cover animate-ken-burns" loading="lazy" />
          <div className="absolute inset-0 bg-navy-deep/30" />
        </div>
        <div className="container-x relative z-10 text-center">
          <h2 className="mx-auto max-w-3xl text-4xl font-bold text-white md:text-5xl" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}>
            Ready to start your <span className="text-gradient-gold">solar project?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}>
            Get a free site survey and personalised engineering quote within 24 hours.
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

export default ProjectsPage;
