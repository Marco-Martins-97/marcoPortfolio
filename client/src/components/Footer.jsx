import { SITE_CONFIG } from '../data/siteConfig.js';
import { useLanguage } from '../hooks/useLanguage.js';

/**
 * Minimal bilingual site footer displaying a centered copyright notice.
 *
 * @returns {JSX.Element} Semantic footer landmark.
 */
export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/60">
      <div className="mx-auto max-w-5xl px-4 py-8 text-center text-xs text-muted sm:px-6">
        <p>
          &copy; {currentYear} {SITE_CONFIG.name}.{' '}
          {t({
            en: 'All rights reserved.',
            pt: 'Todos os direitos reservados.',
          })}
        </p>
      </div>
    </footer>
  );
}
