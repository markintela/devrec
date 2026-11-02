"use client";
import { useState } from "react";
import { Frame } from "../components/Frames";
import { categorias } from "../lib/categorias";

const cats = ["Todos", ...categorias.rec];

export default function RecPortfolio({ items: todos }) {
  const [cat, setCat] = useState("Todos");
  const items = cat === "Todos" ? todos : todos.filter((p) => p.cat === cat);

  return (
    <>
      <div className="filters" style={{ marginBottom: 32 }}>
        {cats.map((c) => (
          <button key={c} className={`filter ${cat === c ? "on" : ""}`} onClick={() => setCat(c)}>
            {c}
          </button>
        ))}
      </div>
      <div className="masonry">
        {items.map((p) => <Frame key={p.id || p.titulo} item={p} />)}
      </div>
    </>
  );
}
