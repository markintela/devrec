import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const service = process.env.SUPABASE_SERVICE_ROLE_KEY;

const opcoes = { auth: { persistSession: false, autoRefreshToken: false } };

// Leitura pública (respeita o RLS: só projetos publicados).
export function supabasePublico() {
  return url && anon ? createClient(url, anon, opcoes) : null;
}

// Backoffice: só no servidor. Ignora o RLS, por isso as ações têm de verificar a sessão.
export function supabaseAdmin() {
  return url && service ? createClient(url, service, opcoes) : null;
}
