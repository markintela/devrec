"use client";
import { useActionState, useState } from "react";
import Link from "next/link";
import { guardarProjeto } from "./actions";
import { categorias, lados, formatos } from "../lib/categorias";

const opc = <small> (opcional)</small>;

// Formulário de novo projeto / edição. `projeto` = linha da tabela ao editar.
export default function ProjetoForm({ projeto, ladoInicial = "dev" }) {
  const [estado, acao, aGuardar] = useActionState(guardarProjeto, {});
  const [lado, setLado] = useState(projeto?.lado || ladoInicial);
  const [categoria, setCategoria] = useState(projeto?.categoria || categorias[lado][0]);
  const dev = lado === "dev";

  function mudarLado(novo) {
    setLado(novo);
    setCategoria(categorias[novo][0]);
  }

  return (
    <form className="form admin-form" action={acao}>
      {projeto && <input type="hidden" name="id" value={projeto.id} />}
      <input type="hidden" name="lado" value={lado} />

      <div className="field">
        <label>Portfólio</label>
        <div className="seg">
          {Object.entries(lados).map(([id, label]) => (
            <button key={id} type="button" className={`btn btn-sq ${id === "rec" ? "rec" : ""} ${lado === id ? "on" : ""}`} onClick={() => mudarLado(id)}>
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="field">
        <label htmlFor="categoria">Categoria</label>
        <select id="categoria" name="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)} required>
          {categorias[lado].map((c) => <option key={c}>{c}</option>)}
        </select>
      </div>

      <div className="field">
        <label htmlFor="titulo">Título</label>
        <input id="titulo" name="titulo" required defaultValue={projeto?.titulo} placeholder={dev ? "ex.: Loja Atelier Sal" : "ex.: Inês & Tiago"} />
      </div>

      <div className="grid-2" style={{ gap: 22 }}>
        <div className="field">
          <label htmlFor="cliente">Cliente{opc}</label>
          <input id="cliente" name="cliente" defaultValue={projeto?.cliente || ""} placeholder="Nome do cliente" />
        </div>
        <div className="field">
          <label htmlFor="ano">Ano{opc}</label>
          <input id="ano" name="ano" type="number" min="1990" max="2100" defaultValue={projeto?.ano || ""} placeholder={String(new Date().getFullYear())} />
        </div>
      </div>

      <div className="field">
        <label htmlFor="descricao">Descrição{opc}</label>
        <textarea id="descricao" name="descricao" defaultValue={projeto?.descricao || ""} placeholder="Uma ou duas frases sobre o projeto." />
      </div>

      <div className="grid-2" style={{ gap: 22 }}>
        <div className="field">
          <label htmlFor="ficheiro">Imagem — enviar ficheiro{opc}</label>
          <input id="ficheiro" name="ficheiro" type="file" accept="image/*" />
        </div>
        <div className="field">
          <label htmlFor="img">…ou URL da imagem{opc}</label>
          <input id="img" name="img" type="url" defaultValue={projeto?.img || ""} placeholder="https://" />
        </div>
      </div>

      {dev ? (
        <div className="grid-2" style={{ gap: 22 }}>
          <div className="field">
            <label htmlFor="link">Endereço do site{opc}</label>
            <input id="link" name="link" type="url" defaultValue={projeto?.link || ""} placeholder="https://cliente.pt" />
          </div>
          <div className="field">
            <label htmlFor="stack">Tecnologias{opc}</label>
            <input id="stack" name="stack" defaultValue={projeto?.stack || ""} placeholder="Next.js · Supabase" />
          </div>
        </div>
      ) : (
        <>
          <div className="grid-2" style={{ gap: 22 }}>
            <div className="field">
              <label htmlFor="video">Vídeo mp4 (toca ao passar o rato){opc}</label>
              <input id="video" name="video" type="url" defaultValue={projeto?.video || ""} placeholder="https://…/video.mp4" />
            </div>
            <div className="field">
              <label htmlFor="link">Link do original (YouTube, Vimeo…){opc}</label>
              <input id="link" name="link" type="url" defaultValue={projeto?.link || ""} placeholder="https://" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="formato">Formato na grelha</label>
            <select id="formato" name="formato" defaultValue={projeto?.formato || "wide"}>
              {Object.entries(formatos).map(([id, label]) => <option key={id} value={id}>{label}</option>)}
            </select>
          </div>
        </>
      )}

      <label className="admin-check">
        <input type="checkbox" name="publicado" defaultChecked={projeto ? projeto.publicado : true} />
        Publicado no site
      </label>

      {estado?.erro && <p className="erro">{estado.erro}</p>}

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <button className="btn btn-red" disabled={aGuardar}>
          {aGuardar ? "A guardar…" : projeto ? "Guardar alterações" : "Adicionar ao portfólio"}
        </button>
        <Link href="/admin" className="btn">Cancelar</Link>
      </div>
    </form>
  );
}
