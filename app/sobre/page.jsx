import { Frame } from "../components/Frames";
import { equipa, sobreFoto } from "../data";
import Logo from "../components/Logo";
import Cta from "../components/Cta";

export const metadata = { title: "Sobre" };

const valores = [
  { t: "Ofício", d: "Tratamos cada linha de código e cada frame com o mesmo cuidado. O detalhe é o que se nota." },
  { t: "Proximidade", d: "Uma equipa pequena, um contacto direto. Sem intermediários nem respostas automáticas." },
  { t: "Prazos reais", d: "Datas claras desde a proposta e atualizações regulares até à entrega." },
  { t: "Tudo num lugar", d: "Site, app, vídeo e fotografia com a mesma linguagem visual — a sua marca, coerente em todo o lado." },
];

export default function Sobre() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow mono">Sobre nós</span>
          <h1 className="display h-xl">
            Programadores<br />e realizadores.<br /><span className="serif red" style={{ fontSize: "0.9em" }}>Na mesma sala.</span>
          </h1>
          <div className="hero-foot">
            <p className="lead" style={{ opacity: 0.85 }}>
              A DevRec nasceu da ideia de que uma marca precisa de ser vista em todo o lado — no ecrã do telemóvel, no palco e no dia mais importante da vida de alguém.
            </p>
            <Logo size={44} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid-2" style={{ alignItems: "center" }}>
          <Frame item={sobreFoto} ratio="tall" showMeta={false} />
          <div style={{ display: "grid", gap: 28 }}>
            <span className="eyebrow mono" style={{ marginBottom: 0 }}>A nossa história</span>
            <h2 className="display h-md">Dois ofícios,<br />uma só equipa</h2>
            <p className="lead">
              Começámos a filmar bandas e casamentos em Lisboa. Os clientes pediam-nos também o site, a loja online, a app do evento. Em vez de recomendar outra agência, juntámos as duas equipas.
            </p>
            <p style={{ opacity: 0.75 }}>
              Hoje trabalhamos em dois ambientes: <b>DEV</b>, onde desenhamos e desenvolvemos produtos digitais, e <b>REC</b>, onde produzimos vídeo e fotografia. Pode contratar um, ou juntar os dois num só projeto.
            </p>
          </div>
        </div>
        <div className="wrap" style={{ marginTop: 80 }}>
          <div className="stats">
            {[["120+", "projetos entregues"], ["60+", "casamentos filmados"], ["35", "videoclipes"], ["2", "ambientes, 1 equipa"]].map(([n, l]) => (
              <div className="stat" key={l}><b>{n}</b><span className="mono" style={{ opacity: 0.6 }}>{l}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap">
          <div className="head-row">
            <h2 className="display h-lg">O que nos<br /><span className="red">move</span></h2>
          </div>
          <div className="values">
            {valores.map((v, i) => (
              <div className="value" key={v.t}>
                <span className="mono red">0{i + 1}</span>
                <h3>{v.t}</h3>
                <p>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="head-row">
            <h2 className="display h-lg">Equipa</h2>
            <p className="lead" style={{ maxWidth: 420 }}>Nomes e fotografias de exemplo, a substituir pela equipa real.</p>
          </div>
          <div className="team">
            {equipa.map((m, i) => (
              <div className="member" key={i}>
                <Frame item={m} ratio="tall" showMeta={false} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <h4>{m.nome}</h4>
                  <span className={`mono ${m.lado === "REC" ? "red" : ""}`}>{m.lado === "REC" ? "● REC" : "</> DEV"}</span>
                </div>
                <span className="mono" style={{ opacity: 0.6 }}>{m.papel}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
