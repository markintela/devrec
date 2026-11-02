export default function ServiceList({ items }) {
  return (
    <div className="svc">
      {items.map((s) => (
        <div className="svc-row" key={s.n}>
          <span className="mono red">{s.n}</span>
          <h3>{s.titulo}</h3>
          <p>{s.desc}</p>
          <div className="svc-tags">
            {s.tags.map((t) => (
              <span className="chip chip-dark" key={t}>{t}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
