import Link from "next/link";
import { contacto } from "../data";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <h5>DevRec</h5>
            <p style={{ maxWidth: 340, opacity: 0.8 }}>
              Agência criativa em Portugal. Desenvolvemos websites e apps, e filmamos e fotografamos música, casamentos e eventos.
            </p>
          </div>
          <div>
            <h5>DEV</h5>
            <ul>
              <li><Link href="/dev#servicos">Websites</Link></li>
              <li><Link href="/dev#servicos">Web Apps</Link></li>
              <li><Link href="/dev#servicos">Apps Mobile</Link></li>
              <li><Link href="/portfolio/dev">Portfólio DEV</Link></li>
            </ul>
          </div>
          <div>
            <h5>REC</h5>
            <ul>
              <li><Link href="/rec#servicos">Videoclipes & Bandas</Link></li>
              <li><Link href="/rec#servicos">Casamentos</Link></li>
              <li><Link href="/rec#servicos">Eventos & 360°</Link></li>
              <li><Link href="/portfolio/rec">Portfólio REC</Link></li>
            </ul>
          </div>
          <div>
            <h5>Contacto</h5>
            <ul>
              <li><a href={`mailto:${contacto.email}`}>{contacto.email}</a></li>
              <li><a href={`tel:${contacto.telefone.replace(/\s/g, "")}`}>{contacto.telefone}</a></li>
              <li><a href={`https://instagram.com/${contacto.instagram.slice(1)}`}>{contacto.instagram}</a></li>
              <li>{contacto.morada}</li>
            </ul>
          </div>
        </div>

        <div className="footer-word" aria-hidden="true">
          <Logo size="1em" />
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} DevRec. Fotos e vídeos de exemplo: <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer">Pexels</a> e <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a>.</span>
          <span>
            <Link href="/dev">DEV</Link> · <Link href="/rec">REC</Link> · <Link href="/portfolio/dev">Portfólio</Link> · <Link href="/sobre">Sobre</Link> · <Link href="/contacto">Contacto</Link> · <Link href="/marca">Marca</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
