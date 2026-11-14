/**
 * Public-safe site configuration and contact helpers.
 * Never store private PII (street address, phone number, DOB) here.
 */
export const SITE_CONFIG = Object.freeze({
    name: 'Marco Martins',
    role: {
        en: 'Full-Stack Developer & Web Studio',
        pt: 'Programador Full-Stack & Estúdio Web',
    },
    location: 'Esposende / Braga, Portugal',
    email: 'marcomartinswebdev@gmail.com',
    githubUrl: 'https://github.com/Marco-Martins-97',
    linkedinUrl: 'https://www.linkedin.com/in/marcomartins97',
})

/**
 * Builds a pre-filled mailto: URL with safely encoded query parameters.
 *
 * @param {string} subject - Pre-filled email subject line.
 * @param {string} [body=''] - Optional pre-filled email body text.
 * @returns {string} Valid mailto URI ready for an anchor href.
 * @throws {Error} When subject is missing or not a non-empty string.
 */
export function buildMailtoHref(subject, body = '') {
    if (typeof subject !== 'string' || subject.trim() === '') {
        throw new Error('buildMailtoHref requires a non-empty subject string.')
    }

    // URLSearchParams encodes spaces and Portuguese accents safely for mail clients
    const params = new URLSearchParams({ subject: subject.trim() })
    if (typeof body === 'string' && body.trim() !== '') {
        params.set('body', body.trim())
    }

    // Replace '+' with '%20' because some mail clients render '+' literally in subjects
    const query = params.toString().replace(/\+/g, '%20')
    return `mailto:${SITE_CONFIG.email}?${query}`
}