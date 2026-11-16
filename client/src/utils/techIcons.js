import { FiCode, FiCpu, FiDatabase, FiLayers } from 'react-icons/fi'
import {
  SiCloudinary,
  SiCss,
  SiDocker,
  SiEspressif,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJsonwebtokens,
  SiLeaflet,
  SiLinux,
  SiMongodb,
  SiMongoose,
  SiNginx,
  SiNodedotjs,
  SiOpenapiinitiative,
  SiPhp,
  SiPihole,
  SiPwa,
  SiRaspberrypi,
  SiReact,
  SiReactrouter,
  SiRedis,
  SiSocketdotio,
  SiSqlite,
  SiTailwindcss,
  SiVite,
  SiVitest,
  SiWordpress,
} from 'react-icons/si'

/**
 * Shared icon lookup keyed by normalized technology label.
 * Keeps tech badges consistent across /about, /projects, and /projects/:slug.
 */
const TECH_ICON_MAP = {
  react: SiReact,
  'react router': SiReactrouter,
  vite: SiVite,
  'tailwind css': SiTailwindcss,
  pwa: SiPwa,
  'node.js': SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  mongoose: SiMongoose,
  cloudinary: SiCloudinary,
  leaflet: SiLeaflet,
  vitest: SiVitest,
  jest: SiJest,
  'php / wordpress': SiWordpress,
  php: SiPhp,
  wordpress: SiWordpress,
  sql: FiDatabase,
  sqlite: SiSqlite,
  'socket.io': SiSocketdotio,
  redis: SiRedis,
  docker: SiDocker,
  linux: SiLinux,
  'raspberry pi': SiRaspberrypi,
  nginx: SiNginx,
  'pi-hole': SiPihole,
  esp32: SiEspressif,
  javascript: SiJavascript,
  'html5 canvas': SiHtml5,
  css3: SiCss,
  jwt: SiJsonwebtokens,
  openapi: SiOpenapiinitiative,
  'context api': FiLayers,
  dietpi: FiCpu,
}

/**
 * Resolves a `react-icons` component for a technology label.
 * Falls back to `FiCode` so unmapped tags still render cleanly.
 *
 * @param {string} name - Technology label (case-insensitive).
 * @returns {import('react-icons').IconType} Matching icon component.
 */
export function getTechIcon(name) {
  if (typeof name !== 'string') return FiCode
  return TECH_ICON_MAP[name.trim().toLowerCase()] ?? FiCode
}

