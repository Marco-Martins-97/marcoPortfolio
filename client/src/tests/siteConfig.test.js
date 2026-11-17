import { describe, it, expect } from 'vitest'
import {
  EMAIL_TEMPLATES,
  SITE_CONFIG,
  buildGmailComposeHref,
  buildMailtoHref,
} from '../data/siteConfig.js'

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
    expect(() => buildGmailComposeHref('')).toThrow(
      'buildGmailComposeHref requires a non-empty subject string.'
    )
  })

  it('builds a valid Gmail web compose URL and defines 4 bilingual templates', () => {
    const gmailUrl = buildGmailComposeHref('Website Inquiry', 'Olá Marco')

    expect(gmailUrl).toContain('https://mail.google.com/mail/?view=cm&fs=1')
    expect(gmailUrl).toContain(encodeURIComponent(SITE_CONFIG.email))
    expect(gmailUrl).toContain('su=Website+Inquiry')
    expect(EMAIL_TEMPLATES.map((item) => item.id)).toEqual([
      'business',
      'webapp',
      'hiring',
      'general',
    ])
  })
})

