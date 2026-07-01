import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Sun, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-navy-deep text-foreground/90">
      {/* Green top border accent */}
      <div className="bg-gradient-gold h-1 w-full" />

      <div className="container-x grid gap-12 py-16 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5">
            <img
              src={logo}
              alt="RK Solar Green Mount"
              className="h-12 w-auto object-contain flex-shrink-0"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <div className="leading-tight">
              <div className="font-display text-sm font-bold tracking-wide text-white">
                RK GREEN MOUNT
              </div>
              <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-gold">
                ENERGIES
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/60 leading-relaxed">
            Powering India's future with clean, reliable, and affordable solar energy solutions since 2019.
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-4 py-2 text-xs font-semibold text-white shadow-gold hover:scale-105 transition-transform"
          >
            Get Free Quote <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        {/* Explore */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-gold">
            Explore
          </h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
            <li><Link to="/projects" className="hover:text-gold transition-colors">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-gold">
            Services
          </h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><Link to="/services/$slug" params={{ slug: "residential" }} className="hover:text-gold transition-colors">Residential Solar</Link></li>
            <li><Link to="/services/$slug" params={{ slug: "commercial" }} className="hover:text-gold transition-colors">Commercial Solar</Link></li>
            <li><Link to="/services/$slug" params={{ slug: "industrial" }} className="hover:text-gold transition-colors">Industrial Solar</Link></li>
            <li><Link to="/services/$slug" params={{ slug: "pm-surya-ghar" }} className="hover:text-gold transition-colors">PM Surya Ghar</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-gold">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-gold flex-shrink-0" />
              <div className="flex flex-col gap-1">
                <a href="tel:+919347920454" className="hover:text-gold transition-colors">+91 93479 20454</a>
                <a href="tel:+919000272748" className="hover:text-gold transition-colors">+91 90002 72748</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-gold flex-shrink-0" />
              <a href="mailto:rkgreenmountenergies@gmail.com" className="hover:text-gold transition-colors break-all">rkgreenmountenergies@gmail.com</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-gold flex-shrink-0" />
              <span>HNO 5-5-51/18/3A, Opp Church, Prakash Nagar, Kukatpally, Hyderabad – 500072</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 md:flex-row">
          <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
            <p>© {new Date().getFullYear()} RK Green Mount Energies. All rights reserved.</p>
            <span className="hidden md:inline text-white/20">|</span>
            <p className="font-bold text-white/50">Developed by <a href="tel:+919014084396" className="hover:text-gold transition-colors text-white/90 font-extrabold">Babu (+91 90140 84396)</a></p>
          </div>
          <p className="flex items-center gap-2">
            <Sun className="h-3.5 w-3.5 text-gold" /> Powering a greener tomorrow.
          </p>
        </div>
      </div>
    </footer>
  );
}
