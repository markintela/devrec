import Link from "next/link";
import { supabaseAdmin } from "../../lib/supabase";
import { lados } from "../../lib/categorias";
import BotaoApagar from "../BotaoApagar";

const filtros = [
  { id: "todos", label: "Todos" },
  { id: "dev", label: lados.dev },
  { id: "rec", label: lados.rec },
];

export default async function Projetos({ searchParams }) {
  const { lado = "todos" } = await searchParams;
  const sb = supabaseAdmin();

  let projetos = [];
  let erro = null;
  if (sb) {
    let q = sb.from("portfolio").select("*").order("criado_em", { ascending: false });
    if (lado === "dev" || lado === "rec") q = q.eq("lado", lado);
    const res = await q;
    projetos = res.data || [];
    erro = res.error?.message;
  }

  return (
    <>
      <div className="admin-head">
        <div>
          <span className="mono" style={{ opacity: 0.6 }}>Portfólio</span>
          <h1>Projetos</h1>
        </div>
        <Link href={`/admin/projeto/novo${lado === "dev" || lado === "rec" ? `?lado=${lado}` : ""}`} className="btn btn-red">
          + Novo projeto
        </Link>
      </div>

      {!sb && (
        <p className="admin-aviso">
          Supabase não configurado. Copie <code>.env.local.example</code> para <code>.env.local</code>, preencha as chaves
          e execute <code>supabase/schema.sql</code> no SQL Editor do Supabase.
        </p>
      )}
      {erro && <p className="admin-aviso">Erro ao ler os projetos: {erro}</p>}

      <div className="filters" style={{ marginBottom: 24 }}>
        {filtros.map((f) => (
          <Link key={f.id} href={`/admin?lado=${f.id}`} className={`filter ${lado === f.id ? "on" : ""}`}>
            {f.label}
          </Link>
        ))}
      </div>

      {sb && !erro && projetos.length === 0 ? (
        <p style={{ opacity: 0.7 }}>
          Ainda não há projetos aqui. Enquanto a tabela estiver vazia, o site mostra os exemplos de <code>app/data.js</code>.
        </p>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th />
                <th>Título</th>
                <th>Lado</th>
                <th>Categoria</th>
                <th className="opc">Cliente</th>
                <th className="opc">Ano</th>
                <th>Estado</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {projetos.map((p) => (
                <tr key={p.id}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <td>{p.img ? <img src={p.img} alt="" /> : <span className="admin-thumb" />}</td>
                  <td><strong>{p.titulo}</strong></td>
                  <td className="mono">{lados[p.lado]}</td>
                  <td>{p.categoria}</td>
                  <td className="opc">{p.cliente || "—"}</td>
                  <td className="opc">{p.ano || "—"}</td>
                  <td className="mono">{p.publicado ? "Publicado" : <span style={{ opacity: 0.5 }}>Rascunho</span>}</td>
                  <td>
                    <div className="admin-acoes">
                      <Link href={`/admin/projeto/${p.id}`} className="admin-link">Editar</Link>
                      <BotaoApagar id={p.id} titulo={p.titulo} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
