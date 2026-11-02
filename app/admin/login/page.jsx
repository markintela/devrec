import { redirect } from "next/navigation";
import { sessao } from "../sessao";
import LoginForm from "./LoginForm";

export const metadata = { title: "Backoffice", robots: { index: false } };

export default async function Login() {
  if (await sessao()) redirect("/admin");
  return (
    <div className="admin admin-login">
      <LoginForm />
    </div>
  );
}
