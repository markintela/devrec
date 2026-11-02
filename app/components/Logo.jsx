// Logo DevRec — letra lisa estilo ecrã de câmara de vídeo + prompt de terminal.
// ">" = prompt do DEV · "●" = luz de gravação do REC
export default function Logo({ size = 28, mode = "both", osd = false, className = "" }) {
  const dim = (m) => (mode === "both" || mode === m ? 1 : 0.3);
  const mark = (
    <span className={`logo ${className}`} style={{ fontSize: size }} aria-label="DevRec">
      <span className="logo-prompt" style={{ opacity: dim("dev") }}>&gt;</span>
      <span style={{ opacity: dim("dev") }}>DEV</span>
      <span className="logo-dot" aria-hidden="true" />
      <span style={{ opacity: dim("rec") }}>REC</span>
    </span>
  );
  if (!osd) return mark;
  // Versão "ecrã de câmara": cantos de visor + linha de estado
  return (
    <span className="logo-osd" style={{ fontSize: size }}>
      <i /><i /><i /><i />
      <span className="osd-row"><span>SP</span><span>▶ PLAY</span></span>
      {mark}
      <span className="osd-row"><span>00:00:00</span><span>PT</span></span>
    </span>
  );
}
