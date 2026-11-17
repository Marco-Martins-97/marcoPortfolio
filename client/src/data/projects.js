import homelabCover from '../assets/projects/homelab/cover.webp'
import obeliskCover from '../assets/projects/obelisk/cover.webp'
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
    displayOrder: 2,
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
    projectStatus: 'planning',
    meta: {
      role: { en: 'Game & Full-Stack Developer', pt: 'Game & Full-Stack Developer' },
      hosting: 'MERN · Socket.io · HTML5 Canvas',
      timeline: { en: 'In Design', pt: 'Em Planeamento' },
    },
    summary: {
      en: 'Fantasy web strategy game focused on exploration, commerce, climate biomes, and ancient ruins progression.',
      pt: 'Jogo web de estratégia e fantasia focado em exploração, comércio, biomas climáticos e progressão tecnológica em ruínas.',
    },
    description: {
      en: 'Browser-based strategy game inspired by Tribal Wars and the TerraFirmaCraft mod. Shifts focus from pure warfare to world exploration, trade, and technological evolution across seasons, elevation, temperature, humidity, and diverse biomes-discovering lost technologies in ruins and magical knowledge at the Obelisk.',
      pt: 'Jogo de estratégia no navegador inspirado em Tribal Wars e no mod TerraFirmaCraft. Muda o foco da guerra pura para exploração, comércio e evolução tecnológica através de estações do ano, elevação, temperatura, humidade e biomas-descobrindo tecnologias perdidas em ruínas e magia no Obelisco.',
    },
    highlights: [
      {
        en: 'Procedural world layers combining elevation, temperature, humidity, and seasons',
        pt: 'Camadas de mapa combinando elevação, temperatura, humidade e estações do ano',
      },
      {
        en: 'Dual progression tree: lost technologies from ruins and arcane tech from the Obelisk',
        pt: 'Árvore de progressão dupla: tecnologias perdidas em ruínas e magia no Obelisco',
      },
    ],
    techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.io', 'HTML5 Canvas', 'Tailwind CSS'],
    thumbnail: obeliskCover,
    screenshots: [],
    liveUrl: null,
    repoUrl: null,
    featured: false,
    displayOrder: 4,
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

