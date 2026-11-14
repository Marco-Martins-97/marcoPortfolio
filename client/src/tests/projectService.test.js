import { describe, it, expect } from 'vitest'
import { getProjectBySlug, getProjects } from '../services/projectService.js'

describe('projectService', () => {
  it('returns all 10 projects sorted by displayOrder', async () => {
    const projects = await getProjects()

    expect(projects).toHaveLength(10)
    expect(projects[0].slug).toBe('root-studio-fitness')
    expect(projects[9].slug).toBe('tribal-wars-replica')

    for (let i = 1; i < projects.length; i += 1) {
      expect(projects[i].displayOrder).toBeGreaterThanOrEqual(projects[i - 1].displayOrder)
    }
  })

  it('filters projects by tier, category, and featured flag', async () => {
    const primary = await getProjects({ tier: 'primary' })
    const secondary = await getProjects({ tier: 'secondary' })
    const featured = await getProjects({ featured: true })
    const business = await getProjects({ category: 'business-template' })

    expect(primary).toHaveLength(4)
    expect(secondary).toHaveLength(6)
    expect(featured).toHaveLength(3)
    expect(business.map((item) => item.slug)).toEqual([
      'root-studio-fitness',
      'schema-generator',
    ])
  })

  it('fetches a project by slug (case-insensitive) and returns null for unknown slugs', async () => {
    const root = await getProjectBySlug('Root-Studio-Fitness')
    const homelab = await getProjectBySlug('homelab')
    const missing = await getProjectBySlug('does-not-exist')

    expect(root).not.toBeNull()
    expect(root.title).toBe('Root Studio Fitness')
    expect(root.repoUrl).toBeNull()
    expect(homelab.projectStatus).toBe('planning')
    expect(homelab.screenshots).toEqual([])
    expect(missing).toBeNull()
  })

  it('throws clear errors for invalid filter or slug inputs', async () => {
    await expect(getProjects({ tier: 'invalid' })).rejects.toThrow(/Invalid project tier/)
    await expect(getProjects({ category: 'other' })).rejects.toThrow(/Invalid project category/)
    await expect(getProjects({ featured: 'yes' })).rejects.toThrow(/Invalid featured filter/)
    await expect(getProjectBySlug('')).rejects.toThrow(/non-empty slug/)
    await expect(getProjectBySlug(null)).rejects.toThrow(/non-empty slug/)
  })
})

