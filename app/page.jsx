import Link from "next/link";
import { devServicos, recServicos, recPortfolio, devPortfolio, processo } from "./data";
import { Frame, Browser } from "./components/Frames";
import Cta from "./components/Cta";

export default function Home() {
  return (
    <>
      {/* ===== HERO: escolha do ambiente ===== */}
      <section className="split">
        <Link href="/dev" className="side side-dev">
          <div className="code-bg" />
          <pre className="code-lines" aria-hidden="true">
            <span className="k">const</span> devrec = {"{"}{"\n"}
            {"  "}web: <span className="s">"next.js"</span>,{"\n"}
            {"  "}apps: [<span className="s">"ios"</span>, <span className="s">"android"</span>],{"\n"}
            {"  "}feito_em: <span className="s">"Portugal"</span>,{"\n"}
            {"}"};{"\n"}
            <span className="k">await</span> lancar(devrec)<span className="cursor" />
          </pre>
          <div className="side-top">
            <span className="mono">01 — Desenvolvimento</span>
            <span className="mono">&lt;/&gt;</span>
          </div>
          <h1 className="display side-word">DEV</h1>
          <div className="side-bottom">
            <p>Websites, web apps e apps mobile — rápidos, bonitos e feitos para crescer com o seu negócio.</p>
            <div className="side-list">
              {["Websites", "Web Apps", "iOS & Android", "E-commerce"].map((t) => <span className="chip" key={t}>{t}</span>)}
            </div>
            <span className="side-enter"><span className="arrow">→</span> Entrar em DEV</span>
          </div>
        </Link>

        <Link href="/rec" className="side side-rec">
          <div className="rec-glow" />
          <div className="vf"><i /><i /><i /><i /></div>
          <div className="side-top">
            <span className="rec-badge">REC</span>
            <span className="timecode">00:02:14:08</span>
          </div>
          <h2 className="display side-word">REC</h2>
          <div className="side-bottom">
            <p>Videoclipes, bandas ao vivo, casamentos, eventos e fotografia 360° — histórias filmadas com intenção.</p>
            <div className="side-list">
              {["Videoclipes", "Casamentos", "Eventos", "Fotos 360°"].map((t) => <span className="chip" key={t}>{t}</span>)}
            </div>
            <span className="side-enter"><span className="arrow">→</span> Entrar em REC</span>
          </div>
        </Link>
      </section>

      {/* ===== MANIFESTO ===== */}
      <section className="section section-dark" style={{ borderTop: "1px solid var(--line-dark)" }}>
        <div className="wrap">
          <span className="eyebrow mono">O nosso ponto de vista</span>
          <p className="manifesto">
            Uma agência, <span className="serif red">dois ambientes.</span>{" "}
            <span className="dim">No DEV escrevemos o código que põe a sua marca online. No REC carregamos no botão vermelho e contamos a sua história em imagem.</span>{" "}
            Juntos, entregamos tudo o que precisa para ser visto.
          </p>
        </div>
      </section>

      {/* ===== DOIS MUNDOS ===== */}
      <section className="section">
        <div className="wrap">
          <div className="head-row">
            <h2 className="display h-lg">O que <span className="red">fazemos</span></h2>
            <p className="lead" style={{ maxWidth: 440 }}>Escolha um ambiente — ou combine os dois. Um site novo com o videoclipe de lançamento, ou o filme do casamento com uma página só vossa.</p>
          </div>

          <div className="worlds">
            <div className="world">
              <div className="world-head"><span className="mono">Ambiente 01</span><span className="mono">&lt;/&gt;</span></div>
              <h3 className="display">DEV</h3>
              <ul>
                {devServicos.map((s) => <li key={s.n}><span>{s.titulo}</span><span>{s.n}</span></li>)}
              </ul>
              <Link href="/dev" className="btn" style={{ justifySelf: "start" }}>Ver serviços DEV →</Link>
            </div>
            <div className="world">
              <div className="world-head"><span className="mono red">● Ambiente 02</span><span className="timecode">REC</span></div>
              <h3 className="display">REC<span className="red">.</span></h3>
              <ul>
                {recServicos.map((s) => <li key={s.n}><span>{s.titulo}</span><span>{s.n}</span></li>)}
              </ul>
              <Link href="/rec" className="btn btn-red" style={{ justifySelf: "start" }}>Ver serviços REC →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRABALHOS SELECIONADOS ===== */}
      <section className="section section-dark">
        <div className="wrap">
          <div className="head-row">
            <h2 className="display h-lg">Trabalho<br /><span className="serif" style={{ fontSize: "0.9em" }}>selecionado</span></h2>
            <div style={{ display: "flex", gap: 10 }}>
              <Link href="/portfolio/dev" className="btn">Portfólio DEV</Link>
              <Link href="/portfolio/rec" className="btn btn-red">Portfólio REC</Link>
            </div>
          </div>
          <div className="grid-2" style={{ alignItems: "start" }}>
            <div style={{ display: "grid", gap: 18 }}>
              <Frame item={recPortfolio[0]} ratio="tall" />
              <div className="dev-card">
                <Browser kind={devPortfolio[1].kind} url="agenda.studio" />
                <div className="dev-card-meta"><h4>{devPortfolio[1].titulo}</h4><span className="mono">DEV · {devPortfolio[1].tipo}</span></div>
              </div>
            </div>
            <div style={{ display: "grid", gap: 18, marginTop: "clamp(0px, 8vw, 120px)" }}>
              <div className="dev-card">
                <Browser kind={devPortfolio[0].kind} url="marealta.pt" />
                <div className="dev-card-meta"><h4>{devPortfolio[0].titulo}</h4><span className="mono">DEV · {devPortfolio[0].tipo}</span></div>
              </div>
              <Frame item={recPortfolio[1]} ratio="wide" />
              <Frame item={recPortfolio[2]} ratio="wide" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROCESSO ===== */}
      <section className="section section-dark" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="head-row">
            <h2 className="display h-lg">Como<br />trabalhamos</h2>
            <p className="lead" style={{ maxWidth: 420, opacity: 0.8 }}>O mesmo método para um site ou para um filme: três etapas, prazos claros e uma equipa que fala consigo.</p>
          </div>
          <div className="steps">
            {processo.map((p) => (
              <div className="step" key={p.n}>
                <span className="num">{p.n}</span>
                <h3>{p.titulo}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
