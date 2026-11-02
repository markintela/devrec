import { notFound } from "next/navigation";
import { supabaseAdmin } from "../../../../lib/supabase";
import ProjetoForm from "../../../ProjetoForm";

export default async function EditarProjeto({ params }) {
  const { id } = await params;
  const sb = supabaseAdmin();
  if (!sb) notFound();

  const { data: projeto } = await sb.from("portfolio").select("*").eq("id", id).maybeSingle();
  if (!projeto) notFound();

  return (
    <>
      <div className="admin-head">
        <div>
          <span className="mono" style={{ opacity: 0.6 }}>Editar projeto</span>
          <h1>{projeto.titulo}</h1>
        </div>
      </div>
      <ProjetoForm projeto={projeto} />
    </>
  );
}
