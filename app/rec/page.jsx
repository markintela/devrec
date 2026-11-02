import Link from "next/link";
import { recServicos, recPortfolio, showreel } from "../data";
import { Frame } from "../components/Frames";
import ServiceList from "../components/ServiceList";
import RecPortfolio from "./RecPortfolio";
import Cta from "../components/Cta";
import { getPortfolio } from "../lib/portfolio";

export const metadata = { title: "REC — Vídeo & Fotografia" };
export const revalidate = 60;

const pacotes = [
  { nome: "Essencial", preco: "950€", nota: "fotografia", itens: ["Até 6 horas de cobertura", "1 fotógrafo", "300+ fotos editadas", "Galeria online privada"] },
  { nome: "Foto + Filme", preco: "1.890€", nota: "o mais completo", hot: true, itens: ["Dia completo", "Fotógrafo + videógrafo", "Trailer 3 min + filme 20 min", "Imagens de drone", "Entrega em 6 semanas"] },
  { nome: "Música", preco: "750€", nota: "videoclipe", itens: ["Reunião de conceito", "1 dia de filmagem", "Edição e color grading", "Versão vertical para Reels/TikTok"] },
];

export default async function Rec() {
  const portfolio = await getPortfolio("rec");
  return (
    <>
      <section className="page-hero rec">
        <div className="vf"><i /><i /><i /><i /></div>
        <div className="wrap">
          <div className="hero-osd">
            <span className="rec-badge">REC · Ambiente 02</span>
            <span className="timecode">4K · 25FPS · 00:01:12:20</span>
          </div>
          <h1 className="display h-xl">
            Histórias que<br />merecem ser<br /><span className="serif red" style={{ fontSize: "0.92em" }}>filmadas.</span>
          </h1>
          <div className="hero-foot">
            <p className="lead" style={{ opacity: 0.85 }}>
              Videoclipes, bandas ao vivo, casamentos, eventos e fotografia 360°. Realização, filmagem e edição com uma equipa só.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link href="#portfolio" className="btn">Ver trabalhos</Link>
              <Link href="/contacto?tipo=rec" className="btn btn-red">Reservar data</Link>
            </div>
          </div>
          <div className="big-frame">
            <Frame item={showreel} ratio="wide" autoplay />
          </div>
        </div>
      </section>

      <section className="section" id="servicos">
        <div className="wrap">
          <div className="head-row">
            <h2 className="display h-lg">Serviços<br /><span className="serif red">REC</span></h2>
            <p className="lead" style={{ maxWidth: 440 }}>Do palco ao altar — estamos lá com câmara, luz e ouvido para a música.</p>
          </div>
          <ServiceList items={recServicos} />
        </div>
      </section>

      <section className="section section-dark" id="portfolio">
        <div className="wrap">
          <div className="head-row">
            <h2 className="display h-lg">Portfólio<br /><span className="red">● REC</span></h2>
            <p className="lead" style={{ maxWidth: 420, opacity: 0.8 }}>Filtre por tipo de trabalho.</p>
          </div>
          <RecPortfolio items={portfolio} />
        </div>
      </section>

      <section className="section section-dark" style={{ paddingTop: 0 }}>
        <div className="wrap grid-2" style={{ alignItems: "center" }}>
          <Frame item={recPortfolio[3]} ratio="square" showMeta={false} />
          <div>
            <span className="eyebrow mono">Novo · 360°</span>
            <h2 className="display h-lg" style={{ marginBottom: 24 }}>Veja tudo.<br /><span className="red">Em volta.</span></h2>
            <p className="lead" style={{ opacity: 0.8, marginBottom: 28 }}>
              Fotografia 360° para tours virtuais de espaços, e a cabine Photo Booth 360 para casamentos e eventos — vídeos em câmara lenta prontos a partilhar no momento.
            </p>
            <div className="side-list">
              {["Tours virtuais", "Booth 360", "Partilha imediata", "Google Street View"].map((t) => <span className="chip" key={t}>{t}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="head-row">
            <h2 className="display h-lg">Pacotes</h2>
            <p className="lead" style={{ maxWidth: 440 }}>Valores de referência. Cada proposta é ajustada ao vosso dia ou projeto.</p>
          </div>
          <div className="packs">
            {pacotes.map((p) => (
              <div className={`pack ${p.hot ? "hot" : ""}`} key={p.nome}>
                <span className="mono" style={{ opacity: 0.6 }}>{p.nota}</span>
                <h3>{p.nome}</h3>
                <div className="price">{p.preco}<small>desde</small></div>
                <ul>{p.itens.map((i) => <li key={i}>{i}</li>)}</ul>
                <Link href="/contacto?tipo=rec" className={`btn ${p.hot ? "btn-red" : ""}`} style={{ justifySelf: "start" }}>Pedir proposta</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Cta title="Vamos gravar?" sub="Diga-nos a data, o local e o que imagina. Respondemos em menos de 24 horas." />
    </>
  );
}
