"use client";
import { useRef, useState, useEffect } from "react";

// Painel de imagem/vídeo do portfólio.
// - item.img  → foto mostrada
// - item.video → mp4 que toca (sem som) ao passar o rato; com autoplay toca sempre
// - sem img   → cena gerada em CSS (fallback)
const scene = {
  Videoclipes: <><div className="lights" /><div className="subject" /></>,
  Casamentos: <><div className="horizon" /><div className="subject duo" /></>,
  Eventos: <><div className="lights" /><div className="crowd" /></>,
  "360°": <div className="sphere" />,
  Fotografia: <div className="subject" />,
};

export function Frame({ item, ratio, showMeta = true, autoplay = false, credit = true }) {
  const vid = useRef(null);
  const img = useRef(null);
  const [failed, setFailed] = useState(false);
  // se a foto não carregar (offline, link partido), mostra a cena em CSS
  useEffect(() => {
    const el = img.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, []);
  const media = item?.img && !failed;
  const play = () => { const v = vid.current; if (v) v.play().catch(() => {}); };
  const stop = () => { const v = vid.current; if (v && !autoplay) { v.pause(); } };

  return (
    <figure
      className={`frame tone-${item?.tone || "fire"} ratio-${ratio || item?.ratio || "wide"} ${media ? "has-media" : ""}`}
      onMouseEnter={play}
      onMouseLeave={stop}
    >
      {media ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img ref={img} onError={() => setFailed(true)} className="frame-media" src={item.img} alt={[item.titulo, item.cliente].filter(Boolean).join(" — ")} loading="lazy" decoding="async" />
          {item.video && (
            <video
              ref={vid}
              className="frame-media frame-video"
              src={item.video}
              poster={item.img}
              muted
              loop
              playsInline
              preload="none"
              autoPlay={autoplay}
              aria-hidden="true"
            />
          )}
        </>
      ) : (
        scene[item?.cat]
      )}

      {showMeta && item?.titulo && (
        <>
          <div className="frame-top">
            <span className="mono">{item.cat}</span>
            <span className="mono">{[item.video ? "▶ Vídeo" : "Foto", item.ano].filter(Boolean).join(" · ")}</span>
          </div>
          <figcaption className="frame-meta">
            <div>
              <h4>{item.titulo}</h4>
              {item.cliente && <span className="mono" style={{ opacity: 0.75 }}>{item.cliente}</span>}
              {item.descricao && <p className="frame-desc">{item.descricao}</p>}
            </div>
            {item.fonte ? (
              <a className="frame-link mono" href={item.fonte} target="_blank" rel="noopener noreferrer" aria-label={`Abrir original de ${item.titulo}`}>
                {item.video ? "Ver vídeo ↗" : "Ver foto ↗"}
              </a>
            ) : (
              <span className="mono">▶</span>
            )}
          </figcaption>
        </>
      )}
      {credit && media && item?.autor && <span className="frame-credit">Exemplo: {item.autor}</span>}
    </figure>
  );
}

// img = captura de ecrã real; sem img mostra a maquete do `kind`
export function Browser({ kind, url = "devrec.pt", img }) {
  return (
    <div className="browser">
      <div className="browser-bar">
        <i /><i /><i />
        <span>{url}</span>
      </div>
      <div className="browser-body">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {img && <img className="browser-shot" src={img} alt="" loading="lazy" decoding="async" />}
        {!img && kind === "site" && (
          <div className="mock mock-site">
            <div className="bar" />
            <div className="big">Maré<br />Alta<span style={{ color: "var(--red)" }}>.</span></div>
            <div className="row">
              <div className="tone-fire" />
              <div className="tone-mono" />
              <div className="tone-ember" />
            </div>
          </div>
        )}
        {!img && kind === "dash" && (
          <div className="mock mock-dash">
            <div className="sb"><i /><i /><i /><i /><i /></div>
            <div className="main">
              <div className="kpis"><div>128</div><div style={{ color: "var(--red)" }}>+24%</div><div>9,4k</div></div>
              <div className="chart">
                {[40, 62, 48, 80, 56, 70, 92, 64, 78, 58, 88, 96].map((h, i) => (
                  <b key={i} style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        )}
        {!img && kind === "shop" && (
          <div className="mock mock-shop">
            <div className="h">Atelier Sal</div>
            <div className="p" /><div className="p" /><div className="p" />
            <div className="price" /><div className="price" /><div className="price" />
          </div>
        )}
        {!img && kind === "app" && (
          <div className="mock mock-app">
            <div className="phone"><i /><div className="ring" /><i /><i style={{ width: "60%" }} /><i /></div>
            <div className="phone alt"><i /><i /><i /><i /><i /><i style={{ width: "40%" }} /></div>
          </div>
        )}
      </div>
    </div>
  );
}
