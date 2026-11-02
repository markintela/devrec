"use client";
import { useActionState } from "react";
import Logo from "../../components/Logo";
import { entrar } from "../actions";

export default function LoginForm() {
  const [estado, acao, aEnviar] = useActionState(entrar, {});

  return (
    <form className="form admin-login-box" action={acao}>
      <Logo size={30} mode="both" />
      <span className="mono" style={{ opacity: 0.6 }}>Backoffice da agência</span>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="username" required placeholder="nome@devrec.pt" />
      </div>
      <div className="field">
        <label htmlFor="password">Palavra-passe</label>
        <input id="password" name="password" type="password" autoComplete="current-password" required />
      </div>
      {estado?.erro && <p className="erro">{estado.erro}</p>}
      <button className="btn btn-red" disabled={aEnviar}>{aEnviar ? "A entrar…" : "Entrar"}</button>
    </form>
  );
}
