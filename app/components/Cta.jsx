import Link from "next/link";

export default function Cta({ title = "Vamos criar algo juntos?", sub = "Conte-nos o que tem em mente — respondemos em menos de 24 horas." }) {
  return (
    <section className="section section-red">
      <div className="wrap cta">
        <span className="eyebrow mono">Contacto</span>
        <h2 className="display h-xl">
          <Link href="/contacto">{title} →</Link>
        </h2>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 24, flexWrap: "wrap", alignItems: "center" }}>
          <p className="lead">{sub}</p>
          <Link href="/contacto" className="btn btn-light">Pedir orçamento</Link>
        </div>
      </div>
    </section>
  );
}
