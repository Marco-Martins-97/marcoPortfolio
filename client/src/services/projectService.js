import { PROJECTS } from '../data/projects.js'

const VALID_TIERS = new Set(['primary', 'secondary'])
const VALID_CATEGORIES = new Set(['engineering', 'business-template'])

/**
 * Fetches projects sorted by `displayOrder`, with optional Stage 2-aligned filters.
 *
 * @param {object} [filters={}] - Optional query filters mirroring `GET /api/v1/projects`.
 * @param {'primary' | 'secondary'} [filters.tier] - Filter by showcase tier.
 * @param {'engineering' | 'business-template'} [filters.category] - Filter by project category.
 * @param {boolean} [filters.featured] - Filter by featured homepage flag.
 * @returns {Promise<Array<object>>} Promise resolving to matching project records.
 * @throws {Error} When an unsupported filter value is supplied.
 */
export async function getProjects(filters = {}) {
  if (filters !== null && typeof filters !== 'object') {
    throw new Error('getProjects filters must be an object.')
  }

  const { tier, category, featured } = filters ?? {}

  // Reject invalid enum values early so typos never masquerade as empty results
  if (tier !== undefined && !VALID_TIERS.has(tier)) {
    throw new Error(`Invalid project tier filter: "${tier}".`)
  }
  if (category !== undefined && !VALID_CATEGORIES.has(category)) {
    throw new Error(`Invalid project category filter: "${category}".`)
  }
  if (featured !== undefined && typeof featured !== 'boolean') {
    throw new Error('Invalid featured filter: expected a boolean.')
  }

  const filtered = PROJECTS.filter((project) => {
    if (tier !== undefined && project.tier !== tier) return false
    if (category !== undefined && project.category !== category) return false
    if (featured !== undefined && project.featured !== featured) return false
    return true
  })

  return [...filtered].sort((a, b) => a.displayOrder - b.displayOrder)
}

/**
 * Fetches a single project by its URL slug.
 *
 * @param {string} slug - Unique lowercase project slug.
 * @returns {Promise<object | null>} Matching project record, or `null` when not found.
 * @throws {Error} When `slug` is missing or not a non-empty string.
 */
export async function getProjectBySlug(slug) {
  if (typeof slug !== 'string' || slug.trim() === '') {
    throw new Error('getProjectBySlug requires a non-empty slug string.')
  }

  const normalizedSlug = slug.trim().toLowerCase()
  const match = PROJECTS.find((project) => project.slug === normalizedSlug)
  return match ?? null
}

/**
 * Resolves the previous and next projects around a given slug in displayOrder.
 * Only navigates across primary projects when the current project is primary,
 * keeping sequential browsing focused on detailed showcase builds.
 *
 * @param {string} slug - Current project slug.
 * @returns {Promise<{ prev: object | null, next: object | null }>} Adjacent project records.
 * @throws {Error} When `slug` is missing or not a non-empty string.
 */
export async function getAdjacentProjects(slug) {
  if (typeof slug !== 'string' || slug.trim() === '') {
    throw new Error('getAdjacentProjects requires a non-empty slug string.')
  }

  const normalizedSlug = slug.trim().toLowerCase()
  const ordered = [...PROJECTS].sort((a, b) => a.displayOrder - b.displayOrder)
  const current = ordered.find((project) => project.slug === normalizedSlug)
  if (!current) return { prev: null, next: null }

  const pool =
    current.tier === 'primary'
      ? ordered.filter((project) => project.tier === 'primary')
      : ordered
  const idx = pool.findIndex((project) => project.slug === normalizedSlug)

  return {
    prev: idx > 0 ? pool[idx - 1] : null,
    next: idx >= 0 && idx < pool.length - 1 ? pool[idx + 1] : null,
  }
}

