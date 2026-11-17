/**
 * Public-safe site configuration and contact helpers.
 * Never store private PII (street address, phone number, DOB) here.
 */
export const SITE_CONFIG = Object.freeze({
    name: 'Marco Martins',
    role: {
        en: 'Full-Stack Web Developer',
        pt: 'Desenvolvimento Web Full-Stack',
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

/**
 * Builds a pre-filled Gmail web compose URL as a browser-friendly fallback
 * for visitors who do not have a desktop mailto client configured.
 *
 * @param {string} subject - Pre-filled email subject line.
 * @param {string} [body=''] - Optional pre-filled email body text.
 * @returns {string} Valid Gmail web compose URL.
 * @throws {Error} When subject is missing or not a non-empty string.
 */
export function buildGmailComposeHref(subject, body = '') {
    if (typeof subject !== 'string' || subject.trim() === '') {
        throw new Error('buildGmailComposeHref requires a non-empty subject string.')
    }

    const params = new URLSearchParams({
        view: 'cm',
        fs: '1',
        to: SITE_CONFIG.email,
        su: subject.trim(),
    })
    if (typeof body === 'string' && body.trim() !== '') {
        params.set('body', body.trim())
    }

    return `https://mail.google.com/mail/?${params.toString()}`
}

/**
 * Bilingual email templates shared between the Home and About contact modals.
 */
export const EMAIL_TEMPLATES = Object.freeze([
    {
        id: 'business',
        title: { en: 'Business Website', pt: 'Website para Negócio' },
        hint: {
            en: 'Company site / landing page',
            pt: 'Site institucional / landing page',
        },
        subject: {
            en: 'Project Inquiry — Business Website',
            pt: 'Pedido de Orçamento — Website para Negócio',
        },
        body: {
            en: 'Hi Marco,\n\nI would like to discuss building a website for my business.\n\n• Name / Business: \n• Industry: \n• Main goal (e.g., online presence, leads, bookings): \n• Desired timeline or examples: \n\nThanks!',
            pt: 'Olá Marco,\n\nGostaria de falar sobre a criação de um website para o meu negócio.\n\n• Nome / Empresa: \n• Ramo de atividade: \n• Objetivo principal (ex.: presença online, contactos, marcações): \n• Referências ou prazo pretendido: \n\nObrigado!',
        },
    },
    {
        id: 'webapp',
        title: { en: 'Custom Web Tool / App', pt: 'Aplicação / Ferramenta Web' },
        hint: {
            en: 'Portal, dashboard, custom system',
            pt: 'Portal, área de cliente, API',
        },
        subject: {
            en: 'Project Inquiry — Custom Web Application',
            pt: 'Novo Projeto — Aplicação / Sistema Web à Medida',
        },
        body: {
            en: 'Hi Marco,\n\nI need a custom web tool to streamline my workflow.\n\n• Name / Business: \n• Key features needed: \n• User types (e.g., clients, staff, admin): \n• Target timeline: \n\nThanks!',
            pt: 'Olá Marco,\n\nPreciso de uma ferramenta web à medida para agilizar processos.\n\n• Nome / Empresa: \n• O que o sistema precisa de fazer: \n• Utilizadores previstos (ex.: clientes, equipa, admin): \n• Prazo estimado: \n\nObrigado!',
        },
    },
    {
        id: 'hiring',
        title: { en: 'Full-Stack Role / Hiring', pt: 'Oportunidade Full-Stack' },
        hint: {
            en: 'Recruiting / engineering team',
            pt: 'Recrutamento / entrevista técnica',
        },
        subject: {
            en: 'Full-Stack Developer Role — Opportunity',
            pt: 'Oportunidade Full-Stack Developer — Contacto',
        },
        body: {
            en: 'Hi Marco,\n\nWe reviewed your portfolio and would like to chat about an engineering role on our team.\n\n• Company / Team: \n• Role & core stack: \n• Setup (remote / hybrid / on-site): \n• Availability for a short call: \n\nBest regards!',
            pt: 'Olá Marco,\n\nVimos o teu portfólio e gostaríamos de conversar sobre uma oportunidade na nossa equipa.\n\n• Empresa / Equipa: \n• Função e stack principal: \n• Modelo (remoto / híbrido / presencial): \n• Disponibilidade para uma breve chamada: \n\nCumprimentos!',
        },
    },
    {
        id: 'general',
        title: { en: 'General Question', pt: 'Contacto Geral' },
        hint: {
            en: 'Quick question',
            pt: 'Dúvida rápida',
        },
        subject: {
            en: 'Contact via BuiltByMarco.dev',
            pt: 'Contacto via BuiltByMarco.dev',
        },
        body: {
            en: "Hi Marco,\n\nI'm reaching out through your portfolio regarding:\n\n[Write your message here]\n\nThanks!",
            pt: 'Olá Marco,\n\nEntro em contacto através do teu portfólio para falar sobre:\n\n[Escreve a tua mensagem aqui]\n\nObrigado!',
        },
    },
])