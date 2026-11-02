import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const COOKIE = "devrec-admin";

// Email de quem entrou, ou null.
export async function sessao() {
  return (await cookies()).get(COOKIE)?.value || null;
}

// Usar no início de cada página e ação do backoffice.
export async function exigirSessao() {
  const email = await sessao();
  if (!email) redirect("/admin/login");
  return email;
}
