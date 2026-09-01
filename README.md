# Patas Felizes 🐾

Landing page de um **petshop & clínica veterinária**, construída com **Next.js 16** (App Router), **React 19**, **TypeScript** e **TailwindCSS 4**.

Site institucional de uma única página apresentando o negócio: hero de apresentação, lista de serviços (banho & tosa, consultas veterinárias, hospedagem, pet shop, adestramento, táxi dog), chamada para agendamento e rodapé com contato.

## Stack

| Camada        | Tecnologia                                              |
| ------------- | -------------------------------------------------------- |
| Framework     | Next.js `16.3.3` (App Router, Server Components first)   |
| UI            | React `19.2.8`, TailwindCSS `4` (`@tailwindcss/postcss`) |
| Linguagem     | TypeScript `5` (`strict`), alias de import `@/*`         |
| Lint          | ESLint `9` + `eslint-config-next` (flat config)          |
| Fontes        | Geist / Geist Mono via `next/font/google`                |

Planejado para as próximas fases (ver `CLAUDE.md`): shadcn/ui, React Hook Form + Zod, Supabase, Stripe.

## Pré-requisitos

- Node.js `>=18.18` (recomendado `22.x`)
- npm `>=10`

## Getting Started

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000). A edição de `app/page.tsx` recarrega a página automaticamente.

## Scripts

| Comando         | Descrição                          |
| --------------- | ----------------------------------- |
| `npm run dev`   | Servidor de desenvolvimento (3000)  |
| `npm run build` | Build de produção                   |
| `npm run start` | Servir o build de produção          |
| `npm run lint`  | ESLint em todo o projeto            |

> O `CLAUDE.md` referencia `npm run type-check` e `npm run test` — ainda não configurados. Enquanto isso, use `npx tsc --noEmit` para checagem de tipos.

## Estrutura

```
projeto-1/
├── app/                       # App Router — rota única, layout, estilos globais
│   ├── layout.tsx             # RootLayout + metadata + fontes Geist
│   ├── page.tsx                # rota / — monta as seções da landing
│   └── globals.css            # Tailwind + design tokens (@theme)
├── components/                 # componentes de feature da landing page
│   ├── site-header.tsx        # cabeçalho / navegação
│   ├── hero-section.tsx       # seção de destaque com CTA e estatísticas
│   ├── services-section.tsx   # grade de serviços oferecidos
│   ├── cta-section.tsx        # chamada final para agendamento
│   └── site-footer.tsx        # rodapé com contato
├── public/                     # assets estáticos
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── postcss.config.mjs
├── CLAUDE.md                   # instruções de arquitetura para agentes
└── AGENTS.md                   # regras do Next.js 16 (geradas pelo `next dev`)
```

### Convenções (conforme `CLAUDE.md`)

- **Server Components por padrão** — adicionar `'use client'` só ao usar hooks, eventos ou APIs de browser.
- Rotas em `app/`, agrupadas por `(grupo)/`.
- Mutações via **Server Actions** em `actions/` — nunca acessar o DB direto em Client Components.
- `components/ui/` para primitivos (shadcn); `components/` para componentes de feature.
- `lib/` para helpers e clients; `types/` para tipos globais e schemas Zod compartilhados.
- Arquivos em `kebab-case`, componentes em `PascalCase`.
- Proibido `any` explícito — usar `unknown` + type guard. Somente Tailwind, sem CSS inline.
- Novos design tokens vão em `app/globals.css` (bloco `@theme`) antes de serem usados.

## Variáveis de Ambiente

- Copiar `.env.example` para `.env.local` ao clonar (arquivo `.env.example` ainda não criado).
- `NEXT_PUBLIC_*` apenas para valores seguros no client.
- Segredos (DB, API keys) apenas em Server Actions ou Route Handlers.

## Deploy

Deploy recomendado na [Vercel](https://vercel.com/new). Ver a [documentação de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying).
