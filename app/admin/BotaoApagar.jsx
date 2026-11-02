"use client";
import { apagarProjeto } from "./actions";

export default function BotaoApagar({ id, titulo }) {
  return (
    <form
      action={apagarProjeto}
      onSubmit={(e) => {
        if (!confirm(`Apagar "${titulo}" do portfólio?`)) e.preventDefault();
      }}
    >
      <input type="hidden" name="id" value={id} />
      <button className="admin-link perigo">Apagar</button>
    </form>
  );
}
