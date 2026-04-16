# L2Detona Landing: Conversão para Lançamento de Servidor

Landing page de alta conversão para lançamento de servidor de game, construída para reduzir atrito entre descoberta, cadastro e download de cliente pesado (4GB+).

Em uma frase: este projeto transforma tráfego frio em jogadores prontos para entrar no servidor com CTAs claros, prova social e janela de download controlada.

## Problema e Solução

**Problema:** páginas de lançamento costumam dispersar atenção, gerar dúvidas sobre data/hora e liberar download cedo demais, reduzindo engajamento no momento de pico.

**Solução:** uma experiência única e objetiva com:
- contagem regressiva em tempo real;
- bloqueio de download por horário (time-gate);
- links espelhados para arquivos grandes (resiliência);
- CTA para cadastro e comunidade (Discord).

## Funcionalidades

- Hero com proposta de valor e CTAs primários (`CREATE ACCOUNT` e `DOWNLOAD NOW`).
- Countdown com atualização por segundo para data de abertura.
- Modal de download com múltiplas fontes (MediaFire, Google Drive e Mega).
- Gate de liberação: botão exibe tempo restante até habilitar o download.
- Seção informativa do servidor (rates, VIP, buffs, enchant).
- Integração com Discord para aquisição de comunidade.
- Imagens otimizadas com `NuxtImg`.

## Arquitetura (visão rápida)

```text
Nuxt 4 (SSR/SPA ready)
  ├─ app/app.vue               -> página principal e lógica de UI
  ├─ app/assets/css/main.css   -> Tailwind + tema custom DaisyUI
  ├─ public/*                  -> assets estáticos da campanha
  └─ nuxt.config.ts            -> head, módulos e config global
```

## Decisões Técnicas

- **Nuxt 4 + Vue 3:** entrega rápida com base moderna e pronta para escalar.
- **Tailwind CSS v4 + DaisyUI:** velocidade de construção com consistência visual.
- **Tema custom (`l2detona`):** identidade própria sem custo alto de design system.
- **`@nuxt/image`:** otimização de mídia para melhorar carregamento e conversão.
- **Lógica de gate no frontend:** simplicidade para campanha; baixa complexidade operacional.
- **CTAs orientados a funil:** cadastro, comunidade e download no mesmo fluxo.

## Como Rodar

### Pré-requisitos

- Node.js 20+
- npm 10+ (ou pnpm/yarn/bun)

### Desenvolvimento

```bash
npm install
npm run dev
```

Aplicação em: `http://localhost:3000`

### Build e preview

```bash
npm run build
npm run preview
```

## Possíveis Melhorias

- Mover links de download para API/backend (evita exposição e facilita rotação).
- Salvar data de abertura em variável de ambiente/CMS para ajuste sem deploy.
- Adicionar analytics de funil (clique em CTA, abertura de modal, conversão).
- Internacionalização (PT/EN/ES) para aquisição global.
- Testes E2E de fluxo crítico (countdown -> gate -> download).
- SEO avançado (Open Graph dinâmico e schema markup de evento).
