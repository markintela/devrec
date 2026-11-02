import "@fontsource/anton/400.css";
import "@fontsource-variable/inter";
import "@fontsource/instrument-serif/400-italic.css";
import "@fontsource/share-tech-mono/400.css";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SoSite from "./components/SoSite";

export const metadata = {
  title: { default: "DevRec — Desenvolvimento & Produção Audiovisual", template: "%s · DevRec" },
  description:
    "DevRec é uma agência em Portugal com dois ambientes: DEV (websites e apps) e REC (videoclipes, casamentos, eventos, fotografia e 360°).",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-PT" data-theme="dark" suppressHydrationWarning>
      <head>
        {/* aplica o tema guardado antes de pintar a página (evita "flash") */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("devrec-theme");if(t)document.documentElement.dataset.theme=t}catch(e){}`,
          }}
        />
      </head>
      <body>
        <SoSite><Header /></SoSite>
        <main>{children}</main>
        <SoSite><Footer /></SoSite>
      </body>
    </html>
  );
}
