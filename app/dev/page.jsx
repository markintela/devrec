import Link from "next/link";
import { devServicos, devPortfolio, processo } from "../data";
import { Browser } from "../components/Frames";
import ServiceList from "../components/ServiceList";
import Cta from "../components/Cta";

export const metadata = { title: "DEV — Websites & Apps" };

const urls = ["marealta.pt", "agenda.studio", "ateliersal.pt", "treinomais.app"];

export default function Dev() {
  return (
    <>
      <section className="page-hero">
        <div className="code-bg" />
        <div className="wrap">
          <span className="eyebrow mono">Ambiente 01 — Desenvolvimento</span>
          <h1 className="display h-xl">
            Código que<br />põe a sua marca<br /><span className="red">online</span><span className="cursor" style={{ height: "0.8em", width: "0.35em", marginLeft: "0.08em" }} />
          </h1>
          <div className="hero-foot">
            <p className="lead" style={{ opacity: 0.85 }}>
              Desenhamos e desenvolvemos websites, web apps e apps mobile para marcas, artistas e empresas em Portugal — com design de autor e tecnologia moderna.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link href="#portfolio" className="btn">Ver projetos</Link>
              <Link href="/contacto?tipo=dev" className="btn btn-light">Orçamento DEV</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="servicos">
        <div className="wrap">
          <div className="head-row">
            <h2 className="display h-lg">Serviços<br /><span className="serif">DEV</span></h2>
            <p className="lead" style={{ maxWidth: 440 }}>Do primeiro wireframe ao lançamento — e depois disso.</p>
          </div>
          <ServiceList items={devServicos} />
        </div>
      </section>

      <section className="section section-dark" id="portfolio">
        <div className="wrap">
          <div className="head-row">
            <h2 className="display h-lg">Portfólio<br /><span className="red">DEV</span></h2>
            <span className="mono" style={{ opacity: 0.6 }}>{devPortfolio.length} projetos selecionados</span>
          </div>
          <div className="dev-grid">
            {devPortfolio.map((p, i) => (
              <article className="dev-card" key={p.titulo}>
                <Browser kind={p.kind} url={urls[i]} />
                <div className="dev-card-meta">
                  <h4>{p.titulo}</h4>
                  <span className="mono" style={{ opacity: 0.7 }}>{p.tipo} · {p.ano}</span>
                </div>
                <span className="mono" style={{ opacity: 0.5 }}>{p.stack}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" style={{ paddingTop: 0 }}>
        <div className="wrap grid-2">
          <div>
            <span className="eyebrow mono">Tecnologia</span>
            <h2 className="display h-md" style={{ marginBottom: 28 }}>As ferramentas certas<br />para cada projeto</h2>
            <div className="stack">
              {["Next.js", "React", "React Native", "Node.js", "TypeScript", "PostgreSQL", "Shopify", "Stripe", "Figma", "Vercel"].map((t) => <span key={t}>{t}</span>)}
            </div>
          </div>
          <div className="steps" style={{ gridTemplateColumns: "1fr" }}>
            {processo.map((p) => (
              <div className="step" key={p.n} style={{ gridTemplateColumns: "90px 1fr", alignItems: "start", padding: "28px" }}>
                <span className="num" style={{ fontSize: 64 }}>{p.n}</span>
                <div><h3>{p.titulo}</h3><p>{p.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Cta title="Tem um projeto digital?" sub="Site, app ou loja online — envie-nos a ideia e preparamos uma proposta em 48 horas." />
    </>
  );
}
