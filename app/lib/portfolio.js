import { devPortfolio, recPortfolio } from "../data";
import { supabasePublico } from "./supabase";
import { kindPorCategoria, tomPorCategoria } from "./categorias";

// Converte uma linha da tabela "portfolio" no formato usado pelos componentes.
function paraItem(r) {
  const base = { id: r.id, titulo: r.titulo, cliente: r.cliente, ano: r.ano, descricao: r.descricao, img: r.img };
  if (r.lado === "dev") {
    return { ...base, tipo: r.categoria, stack: r.stack, url: r.link, kind: kindPorCategoria[r.categoria] || "site" };
  }
  return { ...base, cat: r.categoria, video: r.video, fonte: r.link, ratio: r.formato, tone: tomPorCategoria[r.categoria] || "fire" };
}

// Projetos de um lado ("dev" | "rec").
// Sem Supabase configurado, ou com a tabela vazia, mostra os exemplos de data.js.
export async function getPortfolio(lado) {
  const sb = supabasePublico();
  if (sb) {
    const { data, error } = await sb
      .from("portfolio")
      .select("*")
      .eq("lado", lado)
      .order("ano", { ascending: false, nullsFirst: false })
      .order("criado_em", { ascending: false });
    if (error) console.error("[portfolio]", error.message);
    else if (data.length) return data.map(paraItem);
  }
  return lado === "dev" ? devPortfolio : recPortfolio;
}
