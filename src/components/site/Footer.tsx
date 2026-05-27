import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Sun } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-navy-deep">
      <div className="container-x grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-10 w-10 rounded object-contain" />
            <div>
              <div className="font-display text-lg">RK Solar</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold">Green Mount</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Powering India's future with clean, reliable, and affordable solar energy solutions.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/projects" className="hover:text-gold">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services/$slug" params={{ slug: "residential" }} className="hover:text-gold">Residential Solar</Link></li>
            <li><Link to="/services/$slug" params={{ slug: "commercial" }} className="hover:text-gold">Commercial Solar</Link></li>
            <li><Link to="/services/$slug" params={{ slug: "industrial" }} className="hover:text-gold">Industrial Solar</Link></li>
            <li><Link to="/services/$slug" params={{ slug: "pm-surya-ghar" }} className="hover:text-gold">PM Surya Ghar</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 text-gold" /> +91 93479 20454</li>
            <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 text-gold" /> info@rksolar.in</li>
            <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-gold" /> Hyderabad, Telangana, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} RK Solar Green Mount. All rights reserved.</p>
          <p className="flex items-center gap-2"><Sun className="h-3.5 w-3.5 text-gold" /> Powering a greener tomorrow.</p>
        </div>
      </div>
    </footer>
  );
}
