"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { COOKIE, exigirSessao } from "./sessao";
import { supabaseAdmin } from "../lib/supabase";
import { categorias, formatos } from "../lib/categorias";

const SEM_SUPABASE =
  "Supabase não configurado: defina NEXT_PUBLIC_SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY em .env.local.";

/* ---------- Login ---------- */

// TEMPORÁRIO: aceita qualquer email e palavra-passe.
// Para login real, trocar por supabase.auth.signInWithPassword({ email, password }).
export async function entrar(_prev, formData) {
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");
  if (!email || !password) return { erro: "Preencha o email e a palavra-passe." };

  (await cookies()).set(COOKIE, email, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });
  redirect("/admin");
}

export async function sair() {
  (await cookies()).delete(COOKIE);
  redirect("/admin/login");
}

/* ---------- Portfólio ---------- */

const texto = (fd, nome) => String(fd.get(nome) || "").trim();

function revalidarSite() {
  revalidatePath("/portfolio/dev");
  revalidatePath("/portfolio/rec");
  revalidatePath("/rec");
  revalidatePath("/admin");
}

// Cria (sem id) ou atualiza (com id) um projeto.
export async function guardarProjeto(_prev, formData) {
  await exigirSessao();
  const sb = supabaseAdmin();
  if (!sb) return { erro: SEM_SUPABASE };

  const id = texto(formData, "id");
  const lado = texto(formData, "lado");
  const categoria = texto(formData, "categoria");
  const titulo = texto(formData, "titulo");

  if (!categorias[lado]) return { erro: "Escolha o portfólio: DEV ou REC." };
  if (!categorias[lado].includes(categoria))
    return { erro: `A categoria "${categoria}" não existe no portfólio ${lado.toUpperCase()}.` };
  if (!titulo) return { erro: "O título é obrigatório." };

  let ano = null;
  const anoTxt = texto(formData, "ano");
  if (anoTxt) {
    ano = Number(anoTxt);
    if (!Number.isInteger(ano) || ano < 1990 || ano > 2100) return { erro: "Ano inválido (1990–2100)." };
  }

  // imagem: upload tem prioridade sobre o URL escrito
  let img = texto(formData, "img");
  const ficheiro = formData.get("ficheiro");
  if (ficheiro && typeof ficheiro === "object" && ficheiro.size > 0) {
    if (!ficheiro.type.startsWith("image/")) return { erro: "O ficheiro tem de ser uma imagem." };
    const ext = (ficheiro.name.match(/\.([a-z0-9]+)$/i)?.[1] || "jpg").toLowerCase();
    const caminho = `${lado}/${crypto.randomUUID()}.${ext}`;
    const { error } = await sb.storage.from("portfolio").upload(caminho, ficheiro, { contentType: ficheiro.type });
    if (error) return { erro: `Falha no upload da imagem: ${error.message}` };
    img = sb.storage.from("portfolio").getPublicUrl(caminho).data.publicUrl;
  }

  const formato = texto(formData, "formato");
  const linha = {
    lado,
    categoria,
    titulo,
    cliente: texto(formData, "cliente") || null,
    ano,
    descricao: texto(formData, "descricao") || null,
    img: img || null,
    link: texto(formData, "link") || null,
    video: lado === "rec" ? texto(formData, "video") || null : null,
    stack: lado === "dev" ? texto(formData, "stack") || null : null,
    formato: lado === "rec" && formatos[formato] ? formato : "wide",
    publicado: formData.get("publicado") === "on",
  };

  const { error } = id
    ? await sb.from("portfolio").update(linha).eq("id", id)
    : await sb.from("portfolio").insert(linha);
  if (error) return { erro: error.message };

  revalidarSite();
  redirect(`/admin?lado=${lado}`);
}

export async function apagarProjeto(formData) {
  await exigirSessao();
  const sb = supabaseAdmin();
  if (!sb) return;
  await sb.from("portfolio").delete().eq("id", texto(formData, "id"));
  revalidarSite();
}
