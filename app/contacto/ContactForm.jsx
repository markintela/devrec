"use client";
import { useState, useEffect } from "react";
import { contacto } from "../data";

const opcoes = {
  dev: ["Website", "Web App", "App Mobile", "E-commerce", "UI/UX", "Manutenção"],
  rec: ["Videoclipe / Banda", "Casamento", "Evento", "Fotografia", "Fotos 360° / Booth", "Conteúdo para marca"],
};

export default function ContactForm() {
  const [tipo, setTipo] = useState("rec");
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get("tipo");
    if (t === "dev" || t === "rec" || t === "ambos") setTipo(t);
  }, []);

  const lista = tipo === "ambos" ? [...opcoes.dev, ...opcoes.rec] : opcoes[tipo];

  // Sem backend: abre o email do visitante com a mensagem preenchida.
  // Para envio direto, ligue a um serviço (Resend, Formspree) numa API route.
  function enviar(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const corpo = `Ambiente: ${tipo.toUpperCase()}\nServiço: ${f.get("servico")}\nData/prazo: ${f.get("data") || "-"}\nNome: ${f.get("nome")}\nEmail: ${f.get("email")}\n\n${f.get("mensagem")}`;
    window.location.href = `mailto:${contacto.email}?subject=${encodeURIComponent("Pedido de orçamento — " + f.get("servico"))}&body=${encodeURIComponent(corpo)}`;
    setEnviado(true);
  }

  return (
    <form className="form" onSubmit={enviar}>
      <div className="field">
        <label>O seu projeto é</label>
        <div className="seg">
          <button type="button" className={`btn btn-sq ${tipo === "dev" ? "on" : ""}`} onClick={() => setTipo("dev")}>&gt;DEV</button>
          <button type="button" className={`btn btn-sq rec ${tipo === "rec" ? "on" : ""}`} onClick={() => setTipo("rec")}>●REC</button>
          <button type="button" className={`btn btn-sq ${tipo === "ambos" ? "on" : ""}`} onClick={() => setTipo("ambos")}>Os dois</button>
        </div>
      </div>
      <div className="field">
        <label htmlFor="servico">Serviço</label>
        <select id="servico" name="servico" required>
          {lista.map((o) => <option key={o}>{o}</option>)}
        </select>
      </div>
      <div className="grid-2" style={{ gap: 22 }}>
        <div className="field">
          <label htmlFor="nome">Nome</label>
          <input id="nome" name="nome" required placeholder="O seu nome" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required placeholder="nome@email.com" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="data">{tipo === "dev" ? "Prazo pretendido" : "Data do evento / filmagem"}</label>
        <input id="data" name="data" placeholder={tipo === "dev" ? "ex.: lançamento em março" : "ex.: 14 junho 2027, Sintra"} />
      </div>
      <div className="field">
        <label htmlFor="mensagem">Conte-nos mais</label>
        <textarea id="mensagem" name="mensagem" required placeholder="Ideia, referências, orçamento aproximado…" />
      </div>
      <button className="btn btn-red" type="submit" style={{ justifySelf: "start" }}>Enviar pedido →</button>
      {enviado && <p className="sent">Obrigado! Abrimos o seu email com a mensagem pronta a enviar.</p>}
    </form>
  );
}
