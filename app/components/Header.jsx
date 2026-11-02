"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", match: "/", label: "Início" },
  { href: "/portfolio/dev", match: "/portfolio", label: "Portfólio" },
  { href: "/sobre", match: "/sobre", label: "Sobre" },
  { href: "/contacto", match: "/contacto", label: "Contacto" },
];

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);

  const lado = path.startsWith("/dev") || path === "/portfolio/dev" ? "dev"
    : path.startsWith("/rec") || path === "/portfolio/rec" ? "rec" : "both";

  return (
    <header className="header">
      <div className="wrap header-in">
        <Link href="/" aria-label="DevRec — início">
          <Logo size={30} mode={lado} />
        </Link>

        <nav className="nav" aria-label="Principal">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`btn btn-sq nav-link ${(l.match === "/" ? path === "/" : path.startsWith(l.match)) ? "on" : ""}`}>
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
          <button
            type="button"
            className="btn btn-sq menu-btn"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "Fechar" : "Menu"}
          </button>
        </nav>
      </div>
      {open && (
        <div className="wrap mobile-menu" id="mobile-menu">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="btn btn-sq">{l.label}</Link>
          ))}
        </div>
      )}
    </header>
  );
}
