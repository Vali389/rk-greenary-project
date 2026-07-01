import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-border"
          : "bg-white shadow-sm"
      }`}
    >
      {/* Top accent strip */}
      <div className="bg-gradient-gold h-1 w-full" />

      <div className="container-x flex items-center justify-between py-3">
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative flex-shrink-0">
            <div className="absolute -inset-1 rounded-lg bg-gold/15 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            <img
              src={logo}
              alt="RK Green Mount Energies"
              className="relative h-12 w-auto object-contain"
            />
          </div>
          <div className="leading-tight">
            <div className="font-display text-sm font-bold tracking-wide text-navy-deep">
              RK GREEN MOUNT
            </div>
            <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-gold">
              ENERGIES
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => {
            const active =
              location.pathname === l.to ||
              (l.to !== "/" && location.pathname.startsWith(l.to));
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative text-sm font-medium tracking-wide transition-colors ${
                  active
                    ? "text-gold"
                    : "text-foreground/80 hover:text-gold"
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gold rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-105"
          >
            Get a Quote
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-md p-2 text-foreground"
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-white shadow-lg">
          <div className="container-x flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground/90 hover:bg-secondary hover:text-gold transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 rounded-full bg-gradient-gold px-3 py-3 text-center text-sm font-semibold text-primary-foreground shadow-gold"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
