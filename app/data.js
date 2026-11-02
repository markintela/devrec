// Conteúdo do site — edite aqui textos, serviços e portfólio.

export const contacto = {
  email: "ola@devrec.pt",
  telefone: "+351 912 345 678",
  whatsapp: "351912345678",
  morada: "Oeiras · Lisboa, Portugal",
  instagram: "@devrec.pt",
  horario: "Seg–Sex · 10h–19h",
};

export const devServicos = [
  { n: "01", titulo: "Websites", desc: "Sites institucionais e portfólios rápidos, bonitos e fáceis de gerir. Next.js, SEO técnico e alojamento incluído.", tags: ["Next.js", "CMS", "SEO"] },
  { n: "02", titulo: "Web Apps", desc: "Plataformas à medida: áreas de cliente, reservas, dashboards e ferramentas internas.", tags: ["React", "APIs", "Base de dados"] },
  { n: "03", titulo: "Apps Mobile", desc: "Apps iOS e Android com uma só base de código, do protótipo à publicação nas lojas.", tags: ["React Native", "iOS", "Android"] },
  { n: "04", titulo: "E-commerce", desc: "Lojas online com pagamentos MB Way, Multibanco e cartão, faturação e gestão de stock.", tags: ["Shopify", "Stripe", "MB Way"] },
  { n: "05", titulo: "UI / UX Design", desc: "Pesquisa, wireframes e design de interface antes de escrever uma linha de código.", tags: ["Figma", "Protótipos"] },
  { n: "06", titulo: "Manutenção", desc: "Atualizações, segurança, backups e pequenas melhorias com um plano mensal simples.", tags: ["Suporte", "Performance"] },
];

export const recServicos = [
  { n: "01", titulo: "Videoclipes & Bandas", desc: "Conceito, realização e pós-produção de videoclipes. Filmagem de concertos, ensaios e sessões ao vivo.", tags: ["Videoclipe", "Live session", "Concertos"] },
  { n: "02", titulo: "Casamentos", desc: "Fotografia e filme do vosso dia: trailer, filme completo, same-day edit e sessões pré-casamento.", tags: ["Foto + Vídeo", "Drone", "Same-day edit"] },
  { n: "03", titulo: "Eventos", desc: "Cobertura de eventos corporativos, festivais, lançamentos e festas privadas, com entrega rápida para redes sociais.", tags: ["Aftermovie", "Reels", "Multicâmara"] },
  { n: "04", titulo: "Fotografia", desc: "Retrato, editorial, produto e promo de artistas — em estúdio ou em exterior.", tags: ["Retrato", "Produto", "Promo"] },
  { n: "05", titulo: "Fotos & Vídeo 360°", desc: "Fotografia 360°, tours virtuais e a cabine Photo Booth 360 para casamentos e eventos.", tags: ["Tour virtual", "Booth 360", "VR"] },
  { n: "06", titulo: "Conteúdo para marcas", desc: "Vídeos promocionais e conteúdo vertical para Instagram, TikTok e YouTube.", tags: ["Reels", "Ads", "YouTube"] },
];

// Fotos e vídeos de EXEMPLO (bancos gratuitos Pexels/Unsplash) até existirem trabalhos reais.
// img = imagem mostrada · video = mp4 que toca ao passar o rato · fonte = página original (crédito)
const px = (id, w = 1200) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const recPortfolio = [
  { titulo: "Noite Longa", cliente: "Banda Maré Alta", cat: "Videoclipes", ano: 2026, tone: "fire", ratio: "tall",
    img: "https://images.pexels.com/videos/852304/free-video-852304.jpg?auto=compress&w=1260&h=750&dpr=1",
    video: "https://videos.pexels.com/video-files/852304/852304-hd_1920_1080_24fps.mp4",
    autor: "BRoll.io · Pexels", fonte: "https://www.pexels.com/video/indie-band-plays-music-on-stage-852304/" },
  { titulo: "Inês & Tiago", cliente: "Quinta em Sintra", cat: "Casamentos", ano: 2026, tone: "dusk", ratio: "wide",
    img: "https://images.pexels.com/videos/34503193/pexels-photo-34503193.jpeg?auto=compress&w=1260&h=750&dpr=1",
    video: "https://videos.pexels.com/video-files/34503193/14619076_2560_1440_25fps.mp4",
    autor: "Marc Espejo · Pexels", fonte: "https://www.pexels.com/video/joyful-outdoor-wedding-kiss-in-scenic-setting-34503193/" },
  { titulo: "Lisboa Sound Fest", cliente: "Aftermovie", cat: "Eventos", ano: 2025, tone: "neon", ratio: "wide",
    img: "https://images.pexels.com/videos/35323903/annual-celebration-annual-event-art-event-asia-35323903.jpeg?auto=compress&w=1260&h=750&dpr=1",
    video: "https://videos.pexels.com/video-files/35323903/14966336_1080_1920_30fps.mp4",
    autor: "setengah lima sore · Pexels", fonte: "https://www.pexels.com/video/vibrant-outdoor-music-festival-at-night-35323903/" },
  { titulo: "Estúdio Alcântara", cliente: "Tour virtual 360°", cat: "360°", ano: 2026, tone: "steel", ratio: "square",
    img: px(39929205), autor: "Amar Preciado · Pexels", fonte: "https://www.pexels.com/photo/modern-360-degree-camera-on-tripod-39929205/" },
  { titulo: "Ao Vivo no Capitólio", cliente: "Live session", cat: "Videoclipes", ano: 2025, tone: "ember", ratio: "square",
    img: "https://images.pexels.com/videos/3636752/free-video-3636752.jpg?auto=compress&cs=tinysrgb&w=1200",
    video: "https://videos.pexels.com/video-files/3636752/3636752-hd_1920_1080_30fps.mp4",
    autor: "Adrian Hoparda · Pexels", fonte: "https://www.pexels.com/video/a-group-performing-on-the-stage-3636752/" },
  { titulo: "Marta & João", cliente: "Comporta", cat: "Casamentos", ano: 2025, tone: "sand", ratio: "tall",
    img: "https://images.pexels.com/videos/28952503/pexels-photo-28952503.jpeg?auto=compress&w=1260&h=750&dpr=1",
    video: "https://videos.pexels.com/video-files/28952503/12526932_1440_2560_30fps.mp4",
    autor: "Alexander Mass · Pexels", fonte: "https://www.pexels.com/video/romantic-wedding-couple-embracing-outdoors-28952503/" },
  { titulo: "Retratos de Artista", cliente: "Promo EP", cat: "Fotografia", ano: 2026, tone: "mono", ratio: "tall",
    img: px(30451501), autor: "Vinícius Vieira ft · Pexels", fonte: "https://www.pexels.com/photo/creative-portrait-of-man-in-red-light-30451501/" },
  { titulo: "Gala Tech Oeiras", cliente: "Booth 360", cat: "360°", ano: 2026, tone: "fire", ratio: "wide",
    img: px(35042461), autor: "Ernesto RƎIƎZ · Pexels", fonte: "https://www.pexels.com/photo/lavish-event-hall-with-elegant-dinner-setup-35042461/" },
];

export const showreel = {
  titulo: "Showreel 2026", cliente: "Videoclipes · Casamentos · Eventos", cat: "Videoclipes", ano: 2026, tone: "fire",
  img: "https://images.pexels.com/videos/34059094/pexels-photo-34059094.jpeg?auto=compress&w=1260&h=750&dpr=1",
  video: "https://videos.pexels.com/video-files/34059094/14445520_1920_1080_30fps.mp4",
  autor: "WeStarMoney Rec · Pexels", fonte: "https://www.pexels.com/video/energetic-concert-crowd-under-vibrant-red-lights-34059094/",
};

export const casamentoDestaque = {
  titulo: "Cerimónia", cliente: "Filme de casamento", cat: "Casamentos", ano: 2026, tone: "dusk",
  img: "https://images.pexels.com/videos/8776110/pexels-photo-8776110.jpeg?auto=compress&w=1260&h=750&dpr=1",
  video: "https://videos.pexels.com/video-files/8776110/8776110-uhd_2560_1440_25fps.mp4",
  autor: "Pavel Danilyuk · Pexels", fonte: "https://www.pexels.com/video/video-of-a-wedding-ceremony-8776110/",
};

export const sobreFoto = {
  cat: "Fotografia", tone: "ember",
  img: "https://images.unsplash.com/photo-1617405169156-4cf26e70605c?fm=jpg&q=70&w=1400&auto=format&fit=crop",
  autor: "Adedotun Adegborioye · Unsplash", fonte: "https://unsplash.com/photos/people-standing-on-stage-with-lights-turned-on-during-night-time-xdC1UrzmYiA",
};

export const equipa = [
  { nome: "Nome Apelido", papel: "Fundador · Realizador", lado: "REC", tone: "mono", img: px(39570857, 900), autor: "Sanket Mishra · Pexels", fonte: "https://www.pexels.com/photo/portrait-of-a-smiling-videographer-holding-camera-equipment-39570857/" },
  { nome: "Nome Apelido", papel: "Lead Developer", lado: "DEV", tone: "steel", img: px(5926393, 900), autor: "Sora Shimazaki · Pexels", fonte: "https://www.pexels.com/photo/crop-faceless-programmer-working-on-laptop-in-studio-5926393/" },
  { nome: "Nome Apelido", papel: "Fotógrafa · Editora", lado: "REC", tone: "sand", img: px(19046407, 900), autor: "Vika Glitter · Pexels", fonte: "https://www.pexels.com/photo/young-woman-holding-a-camera-19046407/" },
];

export const devPortfolio = [
  { titulo: "Maré Alta — site da banda", tipo: "Website", stack: "Next.js · CMS", ano: 2026, kind: "site", url: "marealta.pt" },
  { titulo: "Agenda Studio", tipo: "Web App", stack: "React · Node · Postgres", ano: 2026, kind: "dash", url: "agenda.studio" },
  { titulo: "Loja Atelier Sal", tipo: "E-commerce", stack: "Shopify · MB Way", ano: 2025, kind: "shop", url: "ateliersal.pt" },
  { titulo: "Treino+", tipo: "App Mobile", stack: "React Native", ano: 2025, kind: "app", url: "treinomais.app" },
];

export const processo = [
  { n: "01", titulo: "Ouvir", desc: "Começamos com uma conversa sobre o projeto, o público e o orçamento. Saem daí objetivos claros e uma proposta fechada." },
  { n: "02", titulo: "Criar", desc: "Código ou câmara — construímos a direção, partilhamos versões cedo e ajustamos convosco em cada etapa." },
  { n: "03", titulo: "Entregar", desc: "Site publicado, app nas lojas ou filme pronto para estrear. E continuamos por perto depois da entrega." },
];
