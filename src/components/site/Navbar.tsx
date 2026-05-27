import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Sun } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-navy-deep/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="RK Solar" className="h-11 w-11 rounded-md object-contain" />
          <div className="leading-tight">
            <div className="font-display text-xl text-foreground">RK Solar</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-gold">Green Mount</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => {
            const active = location.pathname === l.to || (l.to !== "/" && location.pathname.startsWith(l.to));
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative text-sm font-medium tracking-wide transition-colors ${
                  active ? "text-gold" : "text-foreground/80 hover:text-gold"
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute -bottom-2 left-0 h-px w-full bg-gold" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-105"
          >
            <Sun className="h-4 w-4" /> Get a Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-md p-2 text-foreground"
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-navy-deep/95 backdrop-blur">
          <div className="container-x flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-md px-3 py-3 text-foreground/90 hover:bg-secondary hover:text-gold"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 rounded-md bg-gradient-gold px-3 py-3 text-center font-semibold text-primary-foreground"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
