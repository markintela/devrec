# DevRec — site (Next.js)

Agência com dois ambientes:
- **DEV** (`/dev`) — websites, web apps, apps mobile, e-commerce, UI/UX, manutenção
- **REC** (`/rec`) — videoclipes e bandas, casamentos, eventos, fotografia, fotos/vídeo 360°
- **Portfólio** (`/portfolio/dev` e `/portfolio/rec`), com seletor DEV/REC
- Comum: **Início** (`/`, escolha do ambiente), **Sobre** (`/sobre`), **Contacto** (`/contacto`), **Marca** (`/marca`)

## Correr
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Onde editar
- Textos, serviços, portfólio, contactos: `app/data.js`
- Cores e tipografia: variáveis no topo de `app/globals.css` (`--ink`, `--paper`, `--red`)
- Logo: `app/components/Logo.jsx`
- Formulário: `app/contacto/ContactForm.jsx` (abre o email do visitante; para envio direto ligue a Resend/Formspree)

## Fotos e vídeos
O portfólio REC, o showreel, a página Sobre e a equipa usam **fotos e vídeos de exemplo** de bancos
gratuitos (Pexels e Unsplash, licenças que permitem uso comercial). Estão todos em `app/data.js`:
- `img` — foto mostrada
- `video` — mp4 que toca sem som ao passar o rato (o showreel toca sempre)
- `autor` / `fonte` — crédito e link para o original

Para usar trabalhos reais: ponha os ficheiros em `public/` (ex.: `public/portfolio/noite-longa.mp4`)
e troque os links em `app/data.js` por `/portfolio/noite-longa.mp4`. Pode também apontar para
vídeos alojados no Vimeo/YouTube no campo `fonte`.
Se uma foto não carregar, o painel mostra uma cena desenhada em CSS em vez de uma imagem partida.

Links com `?tipo=dev` ou `?tipo=rec` pré-selecionam o ambiente no formulário de contacto.
