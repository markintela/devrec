import Link from "next/link";
import Logo from "../../components/Logo";
import { exigirSessao } from "../sessao";
import { sair } from "../actions";

export const metadata = { title: "Backoffice", robots: { index: false } };

export default async function PainelLayout({ children }) {
  const email = await exigirSessao();

  return (
    <div className="admin">
      <header className="admin-bar">
        <div className="wrap">
          <Link href="/admin" aria-label="Backoffice — projetos">
            <Logo size={24} mode="both" />
          </Link>
          <nav>
            <Link href="/admin">Projetos</Link>
            <Link href="/" target="_blank">Ver site ↗</Link>
            <span className="admin-user">{email}</span>
            <form action={sair}>
              <button className="admin-link">Sair</button>
            </form>
          </nav>
        </div>
      </header>
      <div className="wrap admin-main">{children}</div>
    </div>
  );
}
