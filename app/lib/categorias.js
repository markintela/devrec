// Categorias do portfólio por lado.
// Manter igual à restrição "categoria_valida" em supabase/schema.sql.
export const categorias = {
  dev: ["Website", "Web App", "E-commerce", "App Mobile", "UI / UX"],
  rec: ["Videoclipes", "Casamentos", "Eventos", "Fotografia", "360°"],
};

export const lados = { dev: ">DEV", rec: "●REC" };

// DEV: maquete mostrada no browser quando não há imagem
export const kindPorCategoria = {
  Website: "site",
  "Web App": "dash",
  "E-commerce": "shop",
  "App Mobile": "app",
  "UI / UX": "site",
};

// REC: tom de cor usado enquanto a imagem carrega (ou se falhar)
export const tomPorCategoria = {
  Videoclipes: "fire",
  Casamentos: "dusk",
  Eventos: "neon",
  Fotografia: "mono",
  "360°": "steel",
};

export const formatos = { wide: "Horizontal", tall: "Vertical", square: "Quadrado" };
