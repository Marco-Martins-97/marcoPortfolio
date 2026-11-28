import homelabCover from '../assets/projects/homelab/cover.webp'
import obeliskCover from '../assets/projects/obelisk/cover.webp'
import obeliskV01DevBiomeDesktop from '../assets/projects/obelisk/v01-dev-biome-desktop.webp'
import obeliskV01DevElevationDesktop from '../assets/projects/obelisk/v01-dev-elevation-desktop.webp'
import obeliskV01DevGoldDesktop from '../assets/projects/obelisk/v01-dev-gold-desktop.webp'
import obeliskV01DevMoistureDesktop from '../assets/projects/obelisk/v01-dev-moisture-desktop.webp'
import obeliskV01DevStoneDesktop from '../assets/projects/obelisk/v01-dev-stone-desktop.webp'
import obeliskV01GameplayDesktop from '../assets/projects/obelisk/v01-gameplay-desktop.webp'
import obeliskV02MainHallModalDesktop from '../assets/projects/obelisk/v02-main-hall-modal-desktop.webp'
import obeliskV02OnlineContinentDesktop from '../assets/projects/obelisk/v02-online-continent-desktop.webp'
import obeliskV02OnlineTerritoryDesktop from '../assets/projects/obelisk/v02-online-territory-desktop.webp'
import obeliskV02TileActionMenuDesktop from '../assets/projects/obelisk/v02-tile-action-menu-desktop.webp'
import obeliskV03AbandonedVillageDesktop from '../assets/projects/obelisk/v03-abandoned-village-desktop.webp'
import obeliskV03ActiveTimerDebuffDesktop from '../assets/projects/obelisk/v03-active-timer-debuff-desktop.webp'
import obeliskV03BuildMenuDesktop from '../assets/projects/obelisk/v03-build-menu-desktop.webp'
import obeliskV03HowToPlayDesktop from '../assets/projects/obelisk/v03-how-to-play-desktop.webp'
import obeliskV03OfflineHudDesktop from '../assets/projects/obelisk/v03-offline-hud-desktop.webp'
import obeliskV04CopperMainHallDesktop from '../assets/projects/obelisk/v04-copper-main-hall-desktop.webp'
import obeliskV04OfflineHudDesktop from '../assets/projects/obelisk/v04-offline-hud-desktop.webp'
import obeliskV04OrchardDesktop from '../assets/projects/obelisk/v04-orchard-desktop.webp'
import obeliskV04SmithyToolsDesktop from '../assets/projects/obelisk/v04-smithy-tools-desktop.webp'
import obeliskV04StockpileModalDesktop from '../assets/projects/obelisk/v04-stockpile-modal-desktop.webp'
import obeliskV04TileMenuProspectDesktop from '../assets/projects/obelisk/v04-tile-menu-prospect-desktop.webp'
import obeliskV05BronzeMainHallDesktop from '../assets/projects/obelisk/v05-bronze-main-hall-desktop.webp'
import obeliskV05BronzeStockpileDesktop from '../assets/projects/obelisk/v05-bronze-stockpile-desktop.webp'
import obeliskV05BronzeTerritoryDesktop from '../assets/projects/obelisk/v05-bronze-territory-desktop.webp'
import obeliskV05CropFieldNpkDesktop from '../assets/projects/obelisk/v05-crop-field-npk-desktop.webp'
import obeliskV05MineRepairDestroyDesktop from '../assets/projects/obelisk/v05-mine-repair-destroy-desktop.webp'
import portfolioAboutDesktop from '../assets/projects/portfolio/about-desktop.webp'
import portfolioCover from '../assets/projects/portfolio/cover.webp'
import portfolioHomeMobile from '../assets/projects/portfolio/home-mobile.webp'
import portfolioProjectsDesktop from '../assets/projects/portfolio/projects-desktop.webp'
import rootV01AboutMobile from '../assets/projects/root/v01-about-mobile.webp'
import rootV01HomeDesktop from '../assets/projects/root/v01-home-desktop.webp'
import rootV01HomeMobile from '../assets/projects/root/v01-home-mobile.webp'
import rootV01PlansDesktop from '../assets/projects/root/v01-plans-desktop.webp'
import rootV01PlansMobile from '../assets/projects/root/v01-plans-mobile.webp'
import rootV1AdminDesktop from '../assets/projects/root/v1-admin-desktop.webp'
import rootV1DashboardDesktop from '../assets/projects/root/v1-dashboard-desktop.webp'
import rootV1ExerciseModalMobile from '../assets/projects/root/v1-exercise-modal-mobile.webp'
import rootV1ExercisesDesktop from '../assets/projects/root/v1-exercises-desktop.webp'
import rootV1MaintDesktop from '../assets/projects/root/v1-maint-desktop.webp'
import rootV1WorkoutDesktop from '../assets/projects/root/v1-workout-desktop.webp'
import rootV1WorkoutMobile from '../assets/projects/root/v1-workout-mobile.webp'

/**
 * Stage 1 project seed catalog mirroring the Stage 2 Mongoose `Project` schema.
 * Keeping identical field names and `{ en, pt }` shapes lets `projectService.js`
 * swap to `/api/v1/projects` in Stage 2 without modifying UI components.
 */
export const PROJECTS = [
  {
    id: 'root-studio-fitness',
    slug: 'root-studio-fitness',
    title: 'Root Studio Fitness',
    tier: 'primary',
    category: 'business-template',
    projectStatus: 'live',
    meta: {
      role: { en: 'Full-Stack Developer', pt: 'Full-Stack Developer' },
      hosting: 'Vercel · Render · Atlas · Cloudinary · Pi Keepalive',
      timeline: { en: 'Jun 2026 - Nov 2026', pt: 'Jun 2026 - Nov 2026' },
    },
    summary: {
      en: 'Production SEO/AIEO business website and full-stack member/staff/admin PWA for a fitness studio in Esposende.',
      pt: 'Website empresarial com SEO/AIEO e PWA full-stack para membros, equipa e administração de um estúdio de treino em Esposende.',
    },
    description: {
      en: 'Built from the ground up in two milestones: a public SEO/AIEO site showcasing training plans, team, and interactive map, followed by v1.0.0-a full-stack Progressive Web App with role-based portals for members, trainers, admins, and super-admin. Features a live workout player with rest timer, +650 exercise library, internal mailbox/support tickets, stateful SHA-256 cookie sessions with device-fingerprint binding, JSON database backups, and a Raspberry Pi keepalive service.',
      pt: 'Desenvolvido de raiz em duas fases: um site público otimizado para SEO/AIEO com planos, equipa e mapa interativo, seguido pela v1.0.0-uma Progressive Web App full-stack com portais por função para membros, treinadores, administradores e super-admin. Inclui reprodutor de treino em tempo real, biblioteca de +650 exercícios, caixa de correio/tickets interna, sessões por cookie SHA-256 com validação de dispositivo, backups JSON da base de dados e serviço keepalive em Raspberry Pi.',
    },
    highlights: [
      {
        en: '4-Tier RBAC (member, staff, admin, super_admin) with a single super-admin invariant enforced at both Mongoose schema and service levels',
        pt: 'RBAC em 4 níveis (member, staff, admin, super_admin) com invariante de super-admin único garantido no schema Mongoose e na camada de serviço',
      },
      {
        en: 'Stateful SHA-256 HttpOnly cookie sessions (no JWTs) bound to device fingerprint-replays immediately terminate the session and log a forensic SecurityIncident',
        pt: 'Sessões stateful em cookie HttpOnly SHA-256 (sem JWTs) ligadas ao dispositivo-tentativas de sequestro terminam a sessão e registam um SecurityIncident forense',
      },
      {
        en: 'Live PWA workout player supporting single exercises & circuits, set-by-set load (kg) logging, circular rest timer, and 24h auto-completion',
        pt: 'Reprodutor de treino PWA em tempo real para exercícios e circuitos, registo de carga (kg) por série, temporizador de descanso e fecho automático às 24h',
      },
      {
        en: '+650 exercise library with start/peak photos & Cloudinary videos, reusable staff templates, and in-app support ticketing (/mail)',
        pt: 'Biblioteca com +650 exercícios, fotos e vídeos no Cloudinary, templates reutilizáveis para treinadores e sistema interno de tickets (/mail)',
      },
      {
        en: 'Raspberry Pi systemd keepalive service pinging Render every 12m to prevent cold starts + full JSON database backup/restore',
        pt: 'Serviço keepalive em Raspberry Pi (systemd) a pingar o Render a cada 12m contra cold starts + backup e restauro integral da BD em JSON',
      },
      {
        en: '226 automated backend tests across 9 suites using Vitest 5, Supertest, and mongodb-memory-server',
        pt: '226 testes automatizados de backend em 9 suites com Vitest 5, Supertest e mongodb-memory-server',
      },
    ],
    techStack: [
      'React',
      'Vite',
      'Tailwind CSS',
      'PWA',
      'Node.js',
      'Express',
      'MongoDB',
      'Cloudinary',
      'Leaflet',
      'Vitest',
    ],
    thumbnail: rootV01HomeDesktop,
    screenshots: [],
    versions: [
      {
        version: 'v1.0.0',
        title: { en: 'Full-Stack PWA', pt: 'PWA Full-Stack' },
        date: 'Nov 2026',
        changes: [
          {
            en: 'Added member, trainer, admin, and super-admin portals (/dashboard, /workout, /workouts, /exercises, /mail)',
            pt: 'Adicionados portais de membro, treinador, admin e super-admin (/dashboard, /workout, /workouts, /exercises, /mail)',
          },
          {
            en: 'Implemented stateful SHA-256 sessions, hijack forensic audit, invite QR codes, and JSON database backup/restore',
            pt: 'Implementadas sessões stateful SHA-256, auditoria forense de sequestro, códigos QR de registo e backup/restauro JSON',
          },
        ],
        screenshots: [
          {
            src: rootV1WorkoutDesktop,
            device: 'desktop',
            route: '/workout',
            label: { en: 'Live Player', pt: 'Sessão Ativa' },
            caption: {
              en: 'Live workout player with session progress and timer',
              pt: 'Reprodutor de treino em direto com progresso e cronómetro',
            },
          },
          {
            src: rootV1WorkoutMobile,
            device: 'mobile',
            route: '/workout',
            label: { en: 'Rest Timer', pt: 'Temporizador' },
            caption: {
              en: 'PWA set tracking and floating rest timer',
              pt: 'Registo de séries PWA e temporizador de descanso flutuante',
            },
          },
          {
            src: rootV1ExerciseModalMobile,
            device: 'mobile',
            route: '/workout',
            label: { en: 'Exercise Guide', pt: 'Guia Exercício' },
            caption: {
              en: 'Step-by-step exercise instructions and target muscle groups',
              pt: 'Instruções passo a passo e grupos musculares alvo',
            },
          },
          {
            src: rootV1DashboardDesktop,
            device: 'desktop',
            route: '/dashboard',
            label: { en: 'Overview', pt: 'Painel' },
            caption: {
              en: 'Role-aware dashboard for members and trainers',
              pt: 'Painel adaptado por função para membros e treinadores',
            },
          },
          {
            src: rootV1ExercisesDesktop,
            device: 'desktop',
            route: '/exercises',
            label: { en: '+650 Library', pt: '+650 Exercícios' },
            caption: {
              en: 'Illustrated +650 exercise library with muscle and equipment filters',
              pt: 'Catálogo ilustrado de +650 exercícios com filtros por músculo e equipamento',
            },
          },
          {
            src: rootV1AdminDesktop,
            device: 'desktop',
            route: '/admin-dashboard',
            label: { en: 'RBAC & Users', pt: 'RBAC & Contas' },
            caption: {
              en: 'Admin user management and 4-tier RBAC role badges',
              pt: 'Gestão de utilizadores e níveis RBAC em 4 camadas',
            },
          },
          {
            src: rootV1MaintDesktop,
            device: 'desktop',
            route: '/maintenence',
            label: { en: 'Security', pt: 'Segurança' },
            caption: {
              en: 'Forensic session hijack audit and JSON backup/restore',
              pt: 'Auditoria forense de sequestro de sessão e backup/restauro JSON',
            },
          },
        ],
      },
      {
        version: 'v0.1.0',
        title: { en: 'Public Launch', pt: 'Lançamento Público' },
        date: 'Jun 2026',
        changes: [
          {
            en: 'Released public Home, Plans, and About pages with SEO/AIEO structure, interactive Leaflet map, and studio schedule',
            pt: 'Lançamento público das páginas Início, Planos e Sobre com estrutura SEO/AIEO, mapa Leaflet interativo e horários',
          },
        ],
        screenshots: [
          {
            src: rootV01HomeDesktop,
            device: 'desktop',
            route: '/',
            label: { en: 'Public Hero', pt: 'Hero Público' },
            caption: {
              en: 'Public studio homepage hero on desktop',
              pt: 'Página inicial pública do estúdio em desktop',
            },
          },
          {
            src: rootV01HomeMobile,
            device: 'mobile',
            route: '/',
            label: { en: 'Mobile Nav', pt: 'Nav Mobile' },
            caption: {
              en: 'Public homepage with mobile bottom navigation',
              pt: 'Página inicial pública com barra de navegação inferior mobile',
            },
          },
          {
            src: rootV01PlansDesktop,
            device: 'desktop',
            route: '/plans',
            label: { en: 'Personal Training', pt: 'Treino Pessoal' },
            caption: {
              en: 'Personal training and modality overview on desktop',
              pt: 'Apresentação de treino personalizado e modalidades em desktop',
            },
          },
          {
            src: rootV01PlansMobile,
            device: 'mobile',
            route: '/plans',
            label: { en: 'Group Classes', pt: 'Aulas Grupo' },
            caption: {
              en: 'Group classes schedule and specialty tags on mobile',
              pt: 'Horários de aulas de grupo e especialidades em mobile',
            },
          },
          {
            src: rootV01AboutMobile,
            device: 'mobile',
            route: '/about',
            label: { en: 'Map & Hours', pt: 'Mapa & Horários' },
            caption: {
              en: 'Interactive Leaflet map, studio contacts, and opening hours',
              pt: 'Mapa Leaflet interativo, contactos e horários do estúdio',
            },
          },
        ],
      },
    ],
    liveUrl: 'https://www.rootstudiofitness.com',
    repoUrl: null,
    featured: true,
    displayOrder: 1,
  },
  {
    id: 'marco-portfolio',
    slug: 'marco-portfolio',
    title: 'BuiltByMarco.dev',
    tier: 'primary',
    category: 'engineering',
    projectStatus: 'live',
    meta: {
      role: { en: 'Full-Stack Developer', pt: 'Full-Stack Developer' },
      hosting: 'Vercel',
      timeline: { en: 'Nov 2026 - Present', pt: 'Nov 2026 - Presente' },
    },
    summary: {
      en: 'Bilingual dark-mode developer portfolio and freelance web studio built with an API-ready two-stage architecture.',
      pt: 'Portfólio bilingue em modo escuro e estúdio web freelance construído com arquitetura em duas fases pronta para API.',
    },
    description: {
      en: 'Dual-purpose platform serving both hiring teams and small-business clients. Stage 1 delivers a fast, accessible React + Vite + Tailwind CSS v4 frontend backed by an async service adapter whose schemas mirror the Stage 2 Express and MongoDB Atlas API-complete with bilingual EN/pt-PT support, SEO/AIEO structured data, and automated UI/service testing.',
      pt: 'Plataforma com duplo objetivo para recrutadores e pequenos negócios. A Fase 1 entrega um frontend rápido e acessível em React + Vite + Tailwind CSS v4 sobre uma camada de serviço assíncrona alinhada com a API Express e MongoDB Atlas da Fase 2-com suporte bilingue EN/pt-PT, dados estruturados SEO/AIEO e testes automatizados de UI e serviço.',
    },
    highlights: [
      {
        en: 'Two-stage API-ready architecture: async service layer in Stage 1 mirroring Stage 2 Mongoose schemas for zero-rewrite Express integration',
        pt: 'Arquitetura em duas fases pronta para API: camada de serviço assíncrona na Fase 1 alinhada aos esquemas Mongoose da Fase 2 para integração Express sem reescrita',
      },
      {
        en: 'Zero-dependency bilingual (EN / pt-PT) React Context with schema-mirrored { en, pt } content objects and persistent local preference',
        pt: 'Contexto React bilingue (EN / pt-PT) sem dependências externas, com objetos de conteúdo { en, pt } e preferência persistente',
      },
      {
        en: 'Strict mobile-first responsive system scaling from 320px phones up to 4K (2200px+) viewports with WCAG 2.2 AA Pure Cobalt dark tokens',
        pt: 'Sistema responsivo mobile-first rigoroso de ecrãs 320px até 4K (2200px+) com tokens escuros Pure Cobalt em contraste WCAG 2.2 AA',
      },
      {
        en: 'SEO & AIEO readiness: dynamic canonical/description meta sync, llms.txt, JSON-LD @graph (Person, ProfessionalService, ItemList), and <noscript> fallback',
        pt: 'Otimização SEO & AIEO: sincronização dinâmica de canonical/meta description, llms.txt, JSON-LD @graph e fallback semântico em <noscript>',
      },
      {
        en: 'Automated quality gate with ESLint, Vite production bundling, and 28 Vitest + Testing Library unit and accessibility tests',
        pt: 'Controlo de qualidade automatizado com ESLint, build de produção Vite e 28 testes unitários e de acessibilidade em Vitest + Testing Library',
      },
    ],
    techStack: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Vitest'],
    thumbnail: portfolioCover,
    screenshots: [],
    versions: [
      {
        version: 'v1.0.0',
        title: { en: 'Stage 1 Static Launch', pt: 'Lançamento Público Fase 1' },
        date: 'Nov 2026',
        changes: [
          {
            en: 'Launched Home, Projects catalog, versioned Project Details with <dialog> lightbox, About, and 404 routes in EN & pt-PT',
            pt: 'Lançamento das páginas Início, Projetos, Detalhes com galeria <dialog>, Sobre e 404 em EN e pt-PT',
          },
          {
            en: 'Configured builtbymarco.dev SEO/AIEO metadata, OpenGraph banner, llms.txt, sitemap.xml, and Vercel SPA rewrites',
            pt: 'Configurados metadados SEO/AIEO para builtbymarco.dev, banner OpenGraph, llms.txt, sitemap.xml e rewrites SPA na Vercel',
          },
        ],
        screenshots: [
          {
            src: portfolioCover,
            device: 'desktop',
            route: '/',
            label: { en: 'Home & Services', pt: 'Início & Serviços' },
            caption: {
              en: 'BuiltByMarco.dev bilingual dark-mode homepage and service cards on desktop',
              pt: 'Página inicial bilingue em modo escuro e cartões de serviço da BuiltByMarco.dev em desktop',
            },
          },
          {
            src: portfolioHomeMobile,
            device: 'mobile',
            route: '/',
            label: { en: 'Mobile Hero', pt: 'Hero Mobile' },
            caption: {
              en: 'Mobile-first homepage hero, 50/50 CTAs, and stacked service cards',
              pt: 'Hero mobile-first, botões 50/50 e cartões de serviço empilhados',
            },
          },
          {
            src: portfolioProjectsDesktop,
            device: 'desktop',
            route: '/projects',
            label: { en: 'Projects Grid', pt: 'Grelha Projetos' },
            caption: {
              en: 'Two-column full-bleed project cards with status badges and uniform tech grids',
              pt: 'Cartões de projeto em duas colunas com imagem completa, estados e grelha de tecnologias',
            },
          },
          {
            src: portfolioAboutDesktop,
            device: 'desktop',
            route: '/about',
            label: { en: 'About & Stack', pt: 'Sobre & Stack' },
            caption: {
              en: 'Profile portrait, experience, education, and react-icons technology stack',
              pt: 'Retrato de perfil, experiência, formação e tecnologias com react-icons',
            },
          },
        ],
      },
    ],
    liveUrl: null,
    repoUrl: 'https://github.com/Marco-Martins-97/marcoPortfolio',
    featured: true,
    displayOrder: 4,
  },
  {
    id: 'homelab',
    slug: 'homelab',
    title: 'HomeLab',
    tier: 'primary',
    category: 'engineering',
    projectStatus: 'planning',
    meta: {
      role: { en: 'Systems & Hardware Builder', pt: 'Sistemas & Hardware' },
      hosting: 'Raspberry Pi Zero 2 W · DietPi',
      timeline: { en: '2026 - Ongoing', pt: '2026 - Em Curso' },
    },
    summary: {
      en: 'Low-cost self-hosted server on Raspberry Pi Zero 2 W running DietPi, Pi-hole, FileBrowser, Node/Nginx, and ESP32 sensors.',
      pt: 'Servidor self-hosted de baixo custo em Raspberry Pi Zero 2 W com DietPi, Pi-hole, FileBrowser, Node/Nginx e sensores ESP32.',
    },
    description: {
      en: 'Personal daily-use home infrastructure project designed to learn hardware and systems engineering on constrained hardware: Raspberry Pi Zero 2 W with DietPi (8 GB OS microSD + 32 GB external storage), running Pi-hole DNS filtering, FileBrowser, a Node.js + Nginx web server, and planned ESP32 environmental/RF telemetry experiments.',
      pt: 'Projeto pessoal de infraestrutura doméstica para aprender engenharia de sistemas e hardware em equipamento económico: Raspberry Pi Zero 2 W com DietPi (microSD de 8 GB para SO + 32 GB de armazenamento externo), a correr Pi-hole, FileBrowser, servidor web Node.js + Nginx e futuras integrações com sensores ESP32.',
    },
    highlights: [
      {
        en: 'Designed around ultra-low-power hardware (Raspberry Pi Zero 2 W + DietPi)',
        pt: 'Desenhado para hardware de baixíssimo consumo (Raspberry Pi Zero 2 W + DietPi)',
      },
      {
        en: 'Combines network services (Pi-hole, Nginx, FileBrowser) with ESP32 hardware sensors',
        pt: 'Combina serviços de rede (Pi-hole, Nginx, FileBrowser) com sensores físicos ESP32',
      },
    ],
    techStack: ['Raspberry Pi', 'DietPi', 'Linux', 'Nginx', 'Node.js', 'Pi-hole', 'ESP32'],
    thumbnail: homelabCover,
    screenshots: [],
    liveUrl: null,
    repoUrl: null,
    featured: true,
    displayOrder: 3,
  },
  {
    id: 'obelisk',
    slug: 'obelisk',
    title: 'Obelisk',
    tier: 'primary',
    category: 'engineering',
    projectStatus: 'building',
    meta: {
      role: { en: 'Game & Full-Stack Developer', pt: 'Game & Full-Stack Developer' },
      hosting: 'Vercel · Desktop Browser · Monorepo (React + Vite)',
      timeline: { en: 'Nov 2026 - Present', pt: 'Nov 2026 - Presente' },
    },
    summary: {
      en: 'Asynchronous desktop browser MMORTS inspired by Tribal Wars & TerraFirmaCraft—featuring a deterministic world engine and Stone, Copper & Bronze Ages.',
      pt: 'MMORTS assíncrono para navegador desktop inspirado em Tribal Wars e TerraFirmaCraft—com motor determinístico e Idades da Pedra, Cobre e Bronze.',
    },
    description: {
      en: 'Asynchronous, desktop-browser MMORTS combining Tribal Wars-style world exploration and marketplace trading with TerraFirmaCraft-inspired geological scarcity, prospecting, and seasonal survival. v0.5.0 completes the Bronze Age vertical slice alongside Stone & Copper Ages: Workshop, Smokehouse, Bronze Forge, Bloomery, Watchtower 3×3 aura, Port, Barracks, 2-tab Market & multi-colony Sandbox, dynamic City/Wall canvas overlays, timed unit recruitment, HUD threshold warnings, and a 10% task cancel window—backed by 70 automated Vitest tests.',
      pt: 'MMORTS assíncrono para navegador desktop que combina exploração e comércio ao estilo Tribal Wars com escassez geológica, prospeção e sobrevivência sazonal inspiradas no TerraFirmaCraft. A v0.5.0 conclui o vertical slice da Idade do Bronze em conjunto com as Idades da Pedra e do Cobre: Workshop, Smokehouse, Bronze Forge, Bloomery, aura 3×3 da Watchtower, Port, Barracks, Mercado em 2 abas, multi-colónias no Sandbox, overlays de Cidade/Muralha, recrutamento cronometrado e janela de cancelamento de 10%—com 70 testes Vitest.',
    },
    highlights: [
      {
        en: 'Strict seeded determinism (zero Math.random(), enforced by ESLint) using Mulberry32 PRNG, FNV-1a, and 2D Perlin/fBm noise',
        pt: 'Determinismo estrito por seed (zero Math.random(), validado por ESLint) com PRNG Mulberry32, FNV-1a e ruído Perlin/fBm 2D',
      },
      {
        en: '25× Scale Law: derives 6,250,000 territory sub-tiles on demand from tileSeed with Fog-of-War-safe neighbor interpolation',
        pt: 'Lei de Escala 25×: gera 6.250.000 sub-tiles on-demand a partir do tileSeed com interpolação segura para Fog of War',
      },
      {
        en: 'Bronze Age & multi-colony systems: Workshop, Smokehouse, Bronze Forge, Bloomery, Watchtower (3×3 aura), Port, Barracks, 2-tab Market, and + Spawn Colony',
        pt: 'Sistemas da Idade do Bronze: Workshop, Smokehouse, Bronze Forge, Bloomery, Watchtower (aura 3×3), Port, Barracks, Mercado em 2 abas e + Spawn Colony',
      },
      {
        en: 'Copper Age & survival: Smithy 6-tool split, Prospector deposits, N/P/K farming, FEFO feeding & spoilage, 5-stage starvation, and building degradation/repair',
        pt: 'Idade do Cobre e sobrevivência: 6 ferramentas no Smithy, depósitos contínuos, agricultura N/P/K, consumo FEFO, 5 níveis de fome e degradação/reparação',
      },
      {
        en: 'HTML5 Canvas with dynamic City/Watchtower/Wall overlays, timed unit recruitment, HUD threshold warnings, 10% task cancel window, and Gameplay/Dev heatmaps',
        pt: 'HTML5 Canvas com overlays de Cidade/Torre/Muralha, recrutamento cronometrado, alertas no HUD, janela de cancelamento de 10% e mapas Gameplay/Dev',
      },
      {
        en: 'Verified by 70 automated Vitest tests across 7 suites (determinism, invariants, Stone/Copper/Bronze Age math, and benchmarks)',
        pt: 'Verificado por 70 testes automatizados Vitest em 7 suites (determinismo, invariantes, matemática das Idades da Pedra/Cobre/Bronze e benchmarks)',
      },
    ],
    techStack: [
      'React',
      'React Router',
      'Vite',
      'Tailwind CSS',
      'HTML5 Canvas',
      'Vitest',
      'Node.js',
      'Express',
      'MongoDB',
      'Socket.io',
    ],
    thumbnail: obeliskCover,
    screenshots: [],
    versions: [
      {
        version: 'v0.5.0',
        title: {
          en: 'Bronze Age, City/Wall Overlays & Timed Recruitment',
          pt: 'Idade do Bronze, Overlays de Cidade & Recrutamento',
        },
        date: 'Nov 2026',
        changes: [
          {
            en: 'Added Bronze Age vertical slice: Workshop, Smokehouse, Bronze Forge, Bloomery, Watchtower (3×3 aura), Port, Barracks military units, 2-tab Market, and Sandbox + Spawn Colony switcher',
            pt: 'Adicionado o vertical slice da Idade do Bronze: Workshop, Smokehouse, Bronze Forge, Bloomery, Watchtower (aura 3×3), Port, unidades militares no Barracks, Mercado em 2 abas e multi-colónias no Sandbox',
          },
          {
            en: 'Added dynamic City/Watchtower/Wall canvas overlays, timed unit recruitment, HUD storage/food/water/pop threshold warnings, and a 10% elapsed task cancel window',
            pt: 'Adicionados overlays dinâmicos de Cidade/Watchtower/Muralha no Canvas, recrutamento cronometrado de unidades, alertas de limiar no HUD e janela de cancelamento de 10% nas tarefas',
          },
        ],
        screenshots: [
          {
            src: obeliskV05BronzeTerritoryDesktop,
            device: 'desktop',
            route: '/sandbox',
            label: { en: 'Bronze Territory & Overlays', pt: 'Território Bronze & Overlays' },
            caption: {
              en: 'Bronze Age Territory (Colony 2) with City/Watchtower overlays, Port, Barracks, Bloomery, and military unit roster',
              pt: 'Território da Idade do Bronze (Colónia 2) com overlays de Cidade/Watchtower, Porto, Quartel, Forja e unidades militares',
            },
          },
          {
            src: obeliskV05BronzeStockpileDesktop,
            device: 'desktop',
            route: '/sandbox?modal=stockpile',
            label: { en: 'Bronze & Iron Stockpile', pt: 'Stockpile Bronze & Ferro' },
            caption: {
              en: 'Categorized Stockpile modal displaying Copper/Bronze Ingots, Tin Nuggets, Iron Ore, Stone Blocks, Planks, and Uncut Gems',
              pt: 'Modal de Stockpile categorizado com lingotes de Cobre/Bronze, pepitas de Estanho, minério de Ferro, blocos de pedra e gemas',
            },
          },
          {
            src: obeliskV05BronzeMainHallDesktop,
            device: 'desktop',
            route: '/sandbox?modal=main-hall',
            label: { en: 'Bronze Age Main Hall', pt: 'Salão Idade do Bronze' },
            caption: {
              en: 'Tier 3 (Bronze Age) Main Village Hall with timed unit recruitment, City Wall (Tier 2 Lv 2), and Iron Age advancement gate',
              pt: 'Salão Principal Tier 3 (Idade do Bronze) com recrutamento cronometrado, Muralha (Tier 2 Nv 2) e avanço para a Idade do Ferro',
            },
          },
          {
            src: obeliskV05MineRepairDestroyDesktop,
            device: 'desktop',
            route: '/sandbox?modal=mine',
            label: { en: 'Mine Repair & Destroy', pt: 'Reparação & Demolição' },
            caption: {
              en: 'Mine Shaft modal showing building condition (98%), Repair action, continuous Flux/Gems output, and guarded Destroy Building',
              pt: 'Modal da Mina mostrando condição (98%), reparação, produção contínua de Flux/Gemas e botão protegido de demolição',
            },
          },
          {
            src: obeliskV05CropFieldNpkDesktop,
            device: 'desktop',
            route: '/sandbox?modal=crop-field',
            label: { en: 'N/P/K Crop Field Ready', pt: 'Campo N/P/K Pronto' },
            caption: {
              en: '8×8 Crop Field showing Nitrogen/Phosphorus/Potassium levels, Wheat/Grain growth (60/60d), and Harvest Crop action',
              pt: 'Campo de Cultivo 8×8 com níveis de Azoto/Fósforo/Potássio, crescimento de Trigo (60/60d) e ação de colheita',
            },
          },
        ],
      },
      {
        version: 'v0.4.0',
        title: {
          en: 'Copper Age, N/P/K Farming & Degradation',
          pt: 'Idade do Cobre, Agricultura N/P/K & Degradação',
        },
        date: 'Nov 2026',
        changes: [
          {
            en: 'Added Copper Age vertical slice: Smithy 6-tool split, Prospector surveying, continuous deposits (Mine, Timber Camp, Quarry, Clay Pit, Well), N/P/K Crop Fields, Orchards, Animal Pens, and Vessels/Baskets',
            pt: 'Adicionado o vertical slice da Idade do Cobre: 6 ferramentas no Smithy, prospeção, depósitos contínuos (Mina, Madeireiro, Pedreira, Poço), agricultura N/P/K, Pomares, Currais e Vasos/Cestos',
          },
          {
            en: 'Added building degradation & Repair/City Wall defense, forest Wolf/Bear encounters, Continent Expeditions, real-time HH:MM:SS timers, idle unit dismissal (-1), and header Stockpile/Technologies/Log modals',
            pt: 'Adicionada degradação e reparação de edifícios/Muralha, encontros com lobos/ursos, expedições continentais, temporizadores HH:MM:SS, dispensa de unidades (-1) e modais de Stockpile/Tecnologias/Registo',
          },
        ],
        screenshots: [
          {
            src: obeliskV04OfflineHudDesktop,
            device: 'desktop',
            route: '/',
            label: { en: 'v0.4 HUD & Unit Dismissal', pt: 'HUD v0.4 & Dispensa' },
            caption: {
              en: 'Updated HUD with Production (/day), Prospector/Scout/Caravan slots, -1 idle unit dismissal, header modals, and real-time timers',
              pt: 'HUD atualizado com Produção (/dia), Prospetor/Batedor/Caravana, dispensa -1, modais no cabeçalho e temporizadores em tempo real',
            },
          },
          {
            src: obeliskV04StockpileModalDesktop,
            device: 'desktop',
            route: '/?modal=stockpile',
            label: { en: 'Categorized Stockpile', pt: 'Armazém Categorizado' },
            caption: {
              en: 'Header Stockpile modal with All, Materials, Food, Ores, and Ingots category filters',
              pt: 'Modal de Stockpile no cabeçalho com filtros por Tudo, Materiais, Comida, Minérios e Lingotes',
            },
          },
          {
            src: obeliskV04TileMenuProspectDesktop,
            device: 'desktop',
            route: '/?action=tile-menu',
            label: { en: 'Prospect & Smithy Menu', pt: 'Prospeção & Smithy' },
            caption: {
              en: 'Right-click tile menu featuring Prospect Tile surveying and Smithy construction with real-time HH:MM:SS build durations',
              pt: 'Menu contextual por clique direito com Prospeção de Tile e construção de Smithy com duração HH:MM:SS em tempo real',
            },
          },
          {
            src: obeliskV04SmithyToolsDesktop,
            device: 'desktop',
            route: '/sandbox?modal=smithy',
            label: { en: 'Smithy 6-Tool Split', pt: 'Smithy: 6 Ferramentas' },
            caption: {
              en: 'Smithy research tree splitting Stone/Bone starter tools and Copper upgrades across Axe, Pickaxe, Hoe, Spear, Shovel, and Hammer',
              pt: 'Árvore de pesquisa do Smithy dividindo ferramentas de Pedra/Osso e Cobre entre Machado, Picareta, Enxada, Lança, Pá e Martelo',
            },
          },
          {
            src: obeliskV04OrchardDesktop,
            device: 'desktop',
            route: '/sandbox?modal=orchard',
            label: { en: 'Orchard & Farming', pt: 'Pomar & Agricultura' },
            caption: {
              en: 'Farmstead-adjacent Orchard managing 9 Apple Tree slots with sapling planting and seasonal Summer/Autumn harvests',
              pt: 'Pomar adjacente à Quinta com 9 espaços para macieiras, plantação de mudas e colheitas sazonais de Verão/Outono',
            },
          },
          {
            src: obeliskV04CopperMainHallDesktop,
            device: 'desktop',
            route: '/sandbox?modal=main-hall',
            label: { en: 'Copper Age Main & Wall', pt: 'Salão Cobre & Muralha' },
            caption: {
              en: 'Tier 2 (Copper Age) Main Village Hall showing City Wall defense/degradation reduction and Bronze Age advancement gate',
              pt: 'Salão Principal Tier 2 (Idade do Cobre) mostrando defesa/redução de degradação da Muralha e avanço para a Idade do Bronze',
            },
          },
        ],
      },
      {
        version: 'v0.3.0',
        title: {
          en: 'Stone Age Survival, Spoilage & Offline Mode',
          pt: 'Sobrevivência, Deterioração & Modo Offline',
        },
        date: 'Nov 2026',
        changes: [
          {
            en: 'Added FEFO auto-feeding, fractional spoilage, Firepit Salt boiling, Drying Rack cured rations, Warehouse pooled storage, and 5-stage Hunger → Death/Abandoned debuffs',
            pt: 'Adicionados consumo FEFO, deterioração fracionária, produção de sal no Firepit, secagem no Drying Rack, armazém partilhado e 5 níveis de debuffs Fome → Morte/Abandono',
          },
          {
            en: 'Replaced Online route with Offline (6×) mode, Celsius ambient climate, real-time wall-clock Conclusion timers, scrollable sidebar panels, and How to Play guide modal',
            pt: 'Substituída a rota Online pelo modo Offline (6×), temperatura em Celsius, temporizadores com hora de conclusão real, painéis laterais com scroll e guia How to Play',
          },
        ],
        screenshots: [
          {
            src: obeliskV03OfflineHudDesktop,
            device: 'desktop',
            route: '/',
            label: { en: 'Offline 6× HUD', pt: 'HUD Offline 6×' },
            caption: {
              en: 'Offline (6×) mode with Celsius climate, Healthy status badge, pooled storage, and food spoilage indicators',
              pt: 'Modo Offline (6×) com temperatura em Celsius, estado Healthy, armazém partilhado e indicadores de deterioração',
            },
          },
          {
            src: obeliskV03HowToPlayDesktop,
            device: 'desktop',
            route: '/?guide=how-to-play',
            label: { en: 'How to Play Guide', pt: 'Guia How to Play' },
            caption: {
              en: 'Built-in Stone Age Guide modal covering missions, FEFO auto-feeding, starvation debuffs, and desktop browser controls',
              pt: 'Modal integrado do Guia da Idade da Pedra com missões, consumo FEFO, penalizações de fome e controlos para navegador desktop',
            },
          },
          {
            src: obeliskV03BuildMenuDesktop,
            device: 'desktop',
            route: '/sandbox?action=build',
            label: { en: 'Warehouse & Drying Rack', pt: 'Armazém & Drying Rack' },
            caption: {
              en: 'Updated Build menu featuring Warehouse pooled storage and Drying Rack food preservation with material requirements',
              pt: 'Menu Build atualizado com armazém partilhado (Warehouse) e secagem de alimentos (Drying Rack) com requisitos de materiais',
            },
          },
          {
            src: obeliskV03ActiveTimerDebuffDesktop,
            device: 'desktop',
            route: '/sandbox?state=debuff',
            label: { en: 'Active Timer & Death Debuff', pt: 'Temporizador & Debuff' },
            caption: {
              en: 'Death (-80% eff) starvation state alongside real-time wall-clock Conclusion timer and 218/625 explored Fog of War',
              pt: 'Estado Death (-80% eff) por fome com temporizador em hora real de conclusão e 218/625 de Fog of War explorado',
            },
          },
          {
            src: obeliskV03AbandonedVillageDesktop,
            device: 'desktop',
            route: '/sandbox?state=abandoned',
            label: { en: 'Abandoned Village & House', pt: 'Aldeia Abandonada & Casa' },
            caption: {
              en: 'Abandoned Village recovery banner when max population drops to 0, showing built House sprite (H) and discovered water tile',
              pt: 'Banner de Aldeia Abandonada quando a população máxima chega a 0, mostrando o sprite de Casa (H) e água descoberta',
            },
          },
        ],
      },
      {
        version: 'v0.2.0',
        title: {
          en: 'Stone Age Playable Vertical Slice',
          pt: 'Vertical Slice Jogável da Idade da Pedra',
        },
        date: 'Nov 2026',
        changes: [
          {
            en: 'Split Online (/) and Sandbox (/sandbox) routes via React Router with strict Online Fog of War (7×7 territory, 1 continent tile) and 1×–3600× speed controls',
            pt: 'Separadas as rotas Online (/) e Sandbox (/sandbox) com React Router, Fog of War estrito no Online (7×7 território, 1 tile continental) e controlo de velocidade 1×–3600×',
          },
          {
            en: 'Implemented MAIN Hall modal (unit training, level upgrades, Age advancement), right-click TileActionMenu, persistent Tech Tree, and multi-unit Team dispatch',
            pt: 'Implementados o modal MAIN Hall (treino de unidades, evolução de nível, avanço de Era), menu TileActionMenu por clique direito, Árvore Tecnológica persistente e envio de equipas',
          },
        ],
        screenshots: [
          {
            src: obeliskV02OnlineTerritoryDesktop,
            device: 'desktop',
            route: '/',
            label: { en: 'Online Territory HUD', pt: 'HUD Território Online' },
            caption: {
              en: 'Online Territory view (7×7 explored Fog of War) with VillageHud, Active Timers, Units, Stockpile, Unlocked Technologies, and Village Log',
              pt: 'Vista de Território Online (Fog of War 7×7 explorado) com VillageHud, Temporizadores, Unidades, Stockpile, Tecnologias e Registo da Aldeia',
            },
          },
          {
            src: obeliskV02OnlineContinentDesktop,
            device: 'desktop',
            route: '/?map=continent',
            label: { en: 'Online Continent Fog', pt: 'Fog Continental Online' },
            caption: {
              en: 'Continent (100×100) map in Online mode starting with 1 explored village tile and Fit Explored / Fit All zoom controls',
              pt: 'Mapa Continental (100×100) em modo Online a iniciar com 1 tile de aldeia explorado e controlos Fit Explored / Fit All',
            },
          },
          {
            src: obeliskV02MainHallModalDesktop,
            device: 'desktop',
            route: '/?modal=main-hall',
            label: { en: 'Main Village Hall', pt: 'Salão Principal (MAIN)' },
            caption: {
              en: 'Main Village Hall modal for training Gatherers, Hunters, and Builders, upgrading storage/population levels, and advancing village Age',
              pt: 'Modal do Salão Principal para treino de Recoletores, Caçadores e Construtores, melhoria de armazém/população e avanço de Era',
            },
          },
          {
            src: obeliskV02TileActionMenuDesktop,
            device: 'desktop',
            route: '/?action=tile-menu',
            label: { en: 'Tile Action & Build Menu', pt: 'Menu de Ação & Construção' },
            caption: {
              en: 'Right-click tile context menu supporting quick Gather/Hunt dispatch, Smart Role Team composition, and tech-gated building construction',
              pt: 'Menu contextual por clique direito com envio rápido de Recolha/Caça, composição de Equipa inteligente e construção condicionada por tecnologia',
            },
          },
        ],
      },
      {
        version: 'v0.1.0',
        title: {
          en: 'Deterministic World Engine & Canvas Sandbox',
          pt: 'Motor de Mundo Determinístico & Sandbox Canvas',
        },
        date: 'Nov 2026',
        changes: [
          {
            en: 'Built isomorphic @obelisk/shared deterministic 100×100 Continent and 25×25 Territory generators with Voronoi geology, BFS moisture, and ore prospecting fields',
            pt: 'Construído o motor isomórfico @obelisk/shared para continentes 100×100 e territórios 25×25 com geologia Voronoi, humidade BFS e campos de prospeção de minérios',
          },
          {
            en: 'Shipped interactive HTML5 Canvas Dev Sandbox with frustum culling, cursor-anchored zoom, Gameplay/Dev toggle, and hex tileSeed inspection',
            pt: 'Lançado o Sandbox Dev interativo em HTML5 Canvas com frustum culling, zoom ancorado no cursor, alternância Gameplay/Dev e inspeção de tileSeed',
          },
        ],
        screenshots: [
          {
            src: obeliskV01GameplayDesktop,
            device: 'desktop',
            route: '/',
            label: { en: 'Gameplay View', pt: 'Vista Gameplay' },
            caption: {
              en: 'Gameplay canvas with cached 16×16 biome sprites, central 7×7 settlement footprint, and 100×100 continent minimap',
              pt: 'Canvas Gameplay com sprites 16×16 em cache, zona central de 7×7 e minimapa continental 100×100',
            },
          },
          {
            src: obeliskV01DevBiomeDesktop,
            device: 'desktop',
            route: '/?view=dev&layer=biome',
            label: { en: 'Dev: Biome & Inspector', pt: 'Dev: Bioma & Inspetor' },
            caption: {
              en: 'Dev mode biome layer with live Tile Inspector showing elevation, temperature, moisture, and hex tileSeed',
              pt: 'Camada de bioma em modo Dev com Inspetor de Tile mostrando elevação, temperatura, humidade e tileSeed em hex',
            },
          },
          {
            src: obeliskV01DevElevationDesktop,
            device: 'desktop',
            route: '/?view=dev&layer=elevation',
            label: { en: 'Dev: Elevation', pt: 'Dev: Elevação' },
            caption: {
              en: 'Grayscale elevation heatmap with 10× local contrast amplification across territory and continent canvases',
              pt: 'Mapa de calor de elevação em escala de cinzentos com amplificação de contraste local 10×',
            },
          },
          {
            src: obeliskV01DevMoistureDesktop,
            device: 'desktop',
            route: '/?view=dev&layer=moisture',
            label: { en: 'Dev: BFS Moisture', pt: 'Dev: Humidade BFS' },
            caption: {
              en: 'Multi-source BFS moisture gradient radiating from local territory lakes and rivers',
              pt: 'Gradiente de humidade por BFS multi-origem a partir dos lagos e rios do território',
            },
          },
          {
            src: obeliskV01DevStoneDesktop,
            device: 'desktop',
            route: '/?view=dev&layer=stone',
            label: { en: 'Dev: Stone Provinces', pt: 'Dev: Províncias Rochosas' },
            caption: {
              en: 'Domain-warped Voronoi stone provinces distributing all 7 rock types across the continent',
              pt: 'Províncias rochosas Voronoi com domain-warping a distribuir os 7 tipos de rocha pelo continente',
            },
          },
          {
            src: obeliskV01DevGoldDesktop,
            device: 'desktop',
            route: '/?view=dev&layer=ore-gold',
            label: { en: 'Dev: Gold Prospecting', pt: 'Dev: Prospeção de Ouro' },
            caption: {
              en: 'Rarity-scaled gold ore density field hosted within granite bedrock for prospector triangulation',
              pt: 'Campo de densidade de ouro escalado por raridade em rocha granítica para triangulação por prospetores',
            },
          },
        ],
      },
    ],
    liveUrl: 'https://obelisk.builtbymarco.dev/',
    repoUrl: 'https://github.com/Marco-Martins-97/obelisk',
    featured: false,
    displayOrder: 2,
  },
  {
    id: 'expense-tracker-node',
    slug: 'expense-tracker-node',
    title: 'Expense Tracker API',
    tier: 'secondary',
    category: 'engineering',
    projectStatus: 'live',
    summary: {
      en: 'RESTful personal finance API with JWT authentication, Mongoose models, and category filtering.',
      pt: 'API REST de finanças pessoais com autenticação JWT, modelos Mongoose e filtragem por categoria.',
    },
    description: null,
    highlights: [],
    techStack: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT'],
    thumbnail: null,
    screenshots: [],
    liveUrl: null,
    repoUrl: 'https://github.com/Marco-Martins-97/expense-tracker-node',
    featured: false,
    displayOrder: 5,
  },
  {
    id: 'workout-traker-node',
    slug: 'workout-traker-node',
    title: 'Workout Tracker API',
    tier: 'secondary',
    category: 'engineering',
    projectStatus: 'live',
    summary: {
      en: 'Express + SQLite workout logging API documented with OpenAPI and tested with Jest & Supertest.',
      pt: 'API Express + SQLite para registo de treinos documentada em OpenAPI e testada com Jest e Supertest.',
    },
    description: null,
    highlights: [],
    techStack: ['Node.js', 'Express', 'SQLite', 'JWT', 'Jest', 'Supertest', 'OpenAPI'],
    thumbnail: null,
    screenshots: [],
    liveUrl: null,
    repoUrl: 'https://github.com/Marco-Martins-97/workout-traker-node',
    featured: false,
    displayOrder: 6,
  },
  {
    id: 'weather-api-node',
    slug: 'weather-api-node',
    title: 'Weather API',
    tier: 'secondary',
    category: 'engineering',
    projectStatus: 'live',
    summary: {
      en: 'Containerized Node.js weather proxy API with Redis response caching and rate limiting.',
      pt: 'API proxy de meteorologia em Node.js com cache Redis em Docker e controlo de pedidos.',
    },
    description: null,
    highlights: [],
    techStack: ['Node.js', 'Express', 'Redis', 'Docker'],
    thumbnail: null,
    screenshots: [],
    liveUrl: null,
    repoUrl: 'https://github.com/Marco-Martins-97/weather-api-node',
    featured: false,
    displayOrder: 7,
  },
  {
    id: 'movie-browser',
    slug: 'movie-browser',
    title: 'Movie Browser',
    tier: 'secondary',
    category: 'engineering',
    projectStatus: 'live',
    summary: {
      en: 'Responsive React movie discovery app with Context state management and external REST API search.',
      pt: 'Aplicação React responsiva para pesquisa de filmes com Context API e integração REST.',
    },
    description: null,
    highlights: [],
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Context API', 'REST API'],
    thumbnail: null,
    screenshots: [],
    liveUrl: null,
    repoUrl: 'https://github.com/Marco-Martins-97/MovieBrowser',
    featured: false,
    displayOrder: 8,
  },
  {
    id: 'schema-generator',
    slug: 'schema-generator',
    title: 'Schema Generator',
    tier: 'secondary',
    category: 'business-template',
    projectStatus: 'live',
    summary: {
      en: 'WordPress & Elementor plugin generating structured Schema.org JSON-LD for SEO and AIEO.',
      pt: 'Plugin WordPress e Elementor para gerar dados estruturados Schema.org JSON-LD para SEO e AIEO.',
    },
    description: null,
    highlights: [],
    techStack: ['PHP', 'WordPress', 'Elementor', 'Schema.org'],
    thumbnail: null,
    screenshots: [],
    liveUrl: null,
    repoUrl: 'https://github.com/Marco-Martins-97/schemaGenerator',
    featured: false,
    displayOrder: 9,
  },
  {
    id: 'tribal-wars-replica',
    slug: 'tribal-wars-replica',
    title: 'Tribal Wars Replica',
    tier: 'secondary',
    category: 'engineering',
    projectStatus: 'live',
    summary: {
      en: 'Browser strategy prototype built with HTML5 Canvas, vanilla JavaScript, and LocalStorage persistence.',
      pt: 'Protótipo de jogo de estratégia em navegador com HTML5 Canvas, JavaScript puro e LocalStorage.',
    },
    description: null,
    highlights: [],
    techStack: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'LocalStorage'],
    thumbnail: null,
    screenshots: [],
    liveUrl: null,
    repoUrl: 'https://github.com/Marco-Martins-97/TribalWarsReplica',
    featured: false,
    displayOrder: 10,
  },
]

