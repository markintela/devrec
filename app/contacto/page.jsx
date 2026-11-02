import { contacto } from "../data";
import ContactForm from "./ContactForm";

export const metadata = { title: "Contacto" };

export default function Contacto() {
  return (
    <section className="page-hero" style={{ paddingBottom: "clamp(80px, 10vw, 140px)" }}>
      <div className="wrap">
        <span className="eyebrow mono">Contacto</span>
        <h1 className="display h-xl" style={{ marginBottom: 64 }}>
          Fale<br />connosco<span className="red">.</span>
        </h1>
        <div className="contact-grid">
          <div style={{ display: "grid", gap: 36 }}>
            <p className="lead" style={{ opacity: 0.85 }}>
              Um site, uma app, um videoclipe ou o vosso casamento — diga-nos o que tem em mente e respondemos em menos de 24 horas.
            </p>
            <div className="info-list">
              <div><span>Email</span><a href={`mailto:${contacto.email}`}>{contacto.email}</a></div>
              <div><span>Telefone</span><a href={`tel:${contacto.telefone.replace(/\s/g, "")}`}>{contacto.telefone}</a></div>
              <div><span>WhatsApp</span><a href={`https://wa.me/${contacto.whatsapp}`}>Enviar mensagem</a></div>
              <div><span>Instagram</span><a href={`https://instagram.com/${contacto.instagram.slice(1)}`}>{contacto.instagram}</a></div>
              <div><span>Estúdio</span><span>{contacto.morada}</span></div>
              <div><span>Horário</span><span>{contacto.horario}</span></div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
