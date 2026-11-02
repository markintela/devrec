import Logo from "../components/Logo";

export const metadata = { title: "Marca" };

const cores = [
  { n: "Preto", hex: "#121212", bg: "#121212", c: "#f2efe8" },
  { n: "Creme", hex: "#F2EFE8", bg: "#f2efe8", c: "#121212", b: true },
  { n: "Stone", hex: "#8B857C", bg: "#8b857c", c: "#f2efe8" },
  { n: "REC Red", hex: "#E3261B", bg: "#e3261b", c: "#ffffff" },
];

export default function Marca() {
  return (
    <section className="section">
      <div className="wrap" style={{ display: "grid", gap: 56 }}>
        <div className="head-row" style={{ marginBottom: 0 }}>
          <h1 className="display h-lg">Identidade<br /><span className="red">DevRec</span></h1>
          <p className="lead" style={{ maxWidth: 480 }}>
            Letra lisa inspirada no ecrã das câmaras de vídeo antigas e nos terminais. O <b>&gt;</b> é o prompt do DEV e o <b>●</b> é a luz de gravação do REC.
          </p>
        </div>
        <div className="brand-board">
          <div className="brand-tile" style={{ background: "#121212", color: "#f2efe8", gridColumn: "1 / -1", minHeight: 400 }}>
            <span className="mono">Principal · tema preto</span>
            <Logo size={150} osd />
          </div>
          <div className="brand-tile" style={{ background: "#f2efe8", color: "#121212", gridColumn: "1 / -1", minHeight: 400, border: "1px solid rgba(18,18,18,.16)" }}>
            <span className="mono">Principal · tema claro</span>
            <Logo size={150} osd />
          </div>
          <div className="brand-tile" style={{ background: "#121212", color: "#f2efe8" }}>
            <span className="mono">Só marca</span><Logo size={96} />
          </div>
          <div className="brand-tile" style={{ background: "#f2efe8", color: "#121212", border: "1px solid rgba(18,18,18,.16)" }}>
            <span className="mono">Só marca</span><Logo size={96} />
          </div>
          <div className="brand-tile" style={{ background: "#121212", color: "#f2efe8" }}>
            <span className="mono">Ambiente DEV</span><Logo size={96} mode="dev" />
          </div>
          <div className="brand-tile" style={{ background: "#f2efe8", color: "#121212", border: "1px solid rgba(18,18,18,.16)" }}>
            <span className="mono">Ambiente REC</span><Logo size={96} mode="rec" />
          </div>
        </div>
        <div className="swatches">
          {cores.map((c) => (
            <div className="swatch" key={c.n} style={{ background: c.bg, color: c.c, border: c.b ? "1px solid rgba(18,18,18,.16)" : "none" }}>
              <b style={{ fontFamily: "var(--f-display)", fontSize: 28, fontWeight: 400 }}>{c.n}</b>{c.hex}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
