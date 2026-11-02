-- DevRec — esquema do portfólio.
-- Correr uma vez no Supabase: Dashboard → SQL Editor → colar e executar.

create table if not exists public.portfolio (
  id         uuid primary key default gen_random_uuid(),
  lado       text not null check (lado in ('dev', 'rec')),
  categoria  text not null,
  titulo     text not null,
  cliente    text,                                    -- opcional
  ano        smallint check (ano between 1990 and 2100), -- opcional
  descricao  text,                                    -- opcional
  img        text,                                    -- URL da imagem (upload ou externa)
  video      text,                                    -- REC: mp4 que toca ao passar o rato
  link       text,                                    -- DEV: site publicado · REC: vídeo/galeria original
  stack      text,                                    -- DEV: tecnologias
  formato    text not null default 'wide' check (formato in ('wide', 'tall', 'square')),
  publicado  boolean not null default true,
  criado_em  timestamptz not null default now(),

  -- cada lado só aceita as suas categorias (manter igual a app/lib/categorias.js)
  constraint categoria_valida check (
    (lado = 'dev' and categoria in ('Website', 'Web App', 'E-commerce', 'App Mobile', 'UI / UX')) or
    (lado = 'rec' and categoria in ('Videoclipes', 'Casamentos', 'Eventos', 'Fotografia', '360°'))
  )
);

create index if not exists portfolio_lado_idx on public.portfolio (lado, ano desc);

-- O site público só lê projetos publicados.
-- As escritas do backoffice usam a service role key (no servidor), que ignora o RLS.
alter table public.portfolio enable row level security;

drop policy if exists "portfolio publico" on public.portfolio;
create policy "portfolio publico" on public.portfolio
  for select using (publicado);

-- Bucket público para as imagens enviadas pelo backoffice.
insert into storage.buckets (id, name, public)
values ('portfolio', 'portfolio', true)
on conflict (id) do nothing;
