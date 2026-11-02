import Link from "next/link";
import { notFound } from "next/navigation";
import { getPortfolio } from "../../lib/portfolio";
import { Browser } from "../../components/Frames";
import RecPortfolio from "../../rec/RecPortfolio";
import Cta from "../../components/Cta";

// volta a ler o Supabase no máximo a cada minuto (o backoffice também força a atualização)
export const revalidate = 60;

const host = (url) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

export function generateStaticParams() {
  return [{ lado: "dev" }, { lado: "rec" }];
}

export async function generateMetadata({ params }) {
  const { lado } = await params;
  return { title: lado === "rec" ? "Portfólio REC" : "Portfólio DEV" };
}

export default async function PortfolioLado({ params }) {
  const { lado } = await params;
  if (lado !== "dev" && lado !== "rec") notFound();
  const dev = lado === "dev";
  const items = await getPortfolio(lado);

  return (
    <>
      <section className={`page-hero ${dev ? "" : "rec"}`}>
        {dev ? <div className="code-bg" /> : <div className="vf"><i /><i /><i /><i /></div>}
        <div className="wrap">
          <span className="eyebrow mono">Portfólio</span>
          <h1 className="display h-xl">
            Trabalho<br />
            <span className={`serif ${dev ? "" : "red"}`} style={{ fontSize: "0.9em" }}>{dev ? "em código." : "em imagem."}</span>
          </h1>
          <div className="hero-foot">
            <div className="pf-switch" role="tablist" aria-label="Escolher portfólio">
              <Link href="/portfolio/dev" role="tab" aria-selected={dev} className={`btn ${dev ? "on" : ""}`} scroll={false}>&gt;DEV</Link>
              <Link href="/portfolio/rec" role="tab" aria-selected={!dev} className={`btn ${dev ? "" : "on"}`} scroll={false}>●REC</Link>
            </div>
            <p className="lead" style={{ opacity: 0.85, maxWidth: 460 }}>
              {dev
                ? `${items.length} projetos digitais: websites, web apps, lojas online e apps mobile.`
                : `${items.length} trabalhos em vídeo e fotografia: videoclipes, casamentos, eventos e 360°. Passe o rato por cima para ver os vídeos.`}
            </p>
          </div>
        </div>
      </section>

      <section className="section section-dark" style={{ borderTop: "1px solid var(--line-dark)" }}>
        <div className="wrap">
          {dev ? (
            <div className="dev-grid">
              {items.map((p) => (
                <article className="dev-card" key={p.id || p.titulo}>
                  <Browser kind={p.kind} url={p.url ? host(p.url) : undefined} img={p.img} />
                  <div className="dev-card-meta">
                    <h4>
                      {p.url?.startsWith("http") ? <a href={p.url} target="_blank" rel="noopener noreferrer">{p.titulo} ↗</a> : p.titulo}
                    </h4>
                    <span className="mono" style={{ opacity: 0.7 }}>{[p.tipo, p.ano].filter(Boolean).join(" · ")}</span>
                  </div>
                  {p.descricao && <p className="dev-card-desc">{p.descricao}</p>}
                  {(p.cliente || p.stack) && (
                    <span className="mono" style={{ opacity: 0.5 }}>{[p.cliente, p.stack].filter(Boolean).join(" · ")}</span>
                  )}
                </article>
              ))}
            </div>
          ) : (
            <RecPortfolio items={items} />
          )}
        </div>
      </section>

      {dev ? (
        <Cta title="Tem um projeto digital?" sub="Site, app ou loja online: envie-nos a ideia e preparamos uma proposta em 48 horas." />
      ) : (
        <Cta title="Vamos gravar?" sub="Diga-nos a data, o local e o que imagina. Respondemos em menos de 24 horas." />
      )}
    </>
  );
}
