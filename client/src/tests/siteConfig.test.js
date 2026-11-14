import { describe, it, expect } from 'vitest'
import { SITE_CONFIG, buildMailtoHref } from '../data/siteConfig.js'

describe('siteConfig & buildMailtoHref', () => {
  it('builds a properly encoded mailto URI with subject and body', () => {
    const href = buildMailtoHref('Website Inquiry', 'Olá Marco, preciso de um site.')

    expect(href).toBe(
      `mailto:${SITE_CONFIG.email}?subject=Website%20Inquiry&body=Ol%C3%A1%20Marco%2C%20preciso%20de%20um%20site.`
    )
  })

  it('omits the body parameter when body is empty or whitespace', () => {
    const href = buildMailtoHref('Job Opportunity', '   ')

    expect(href).toBe(`mailto:${SITE_CONFIG.email}?subject=Job%20Opportunity`)
  })

  it('throws an error when subject is empty or invalid', () => {
    expect(() => buildMailtoHref('')).toThrow(
      'buildMailtoHref requires a non-empty subject string.'
    )
    expect(() => buildMailtoHref(null)).toThrow(
      'buildMailtoHref requires a non-empty subject string.'
    )
  })
})

