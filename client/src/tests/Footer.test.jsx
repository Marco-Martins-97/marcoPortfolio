import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';
import { Footer } from '../components/Footer.jsx';
import { LanguageProvider } from '../context/LanguageContext.jsx';
import { SITE_CONFIG } from '../data/siteConfig.js';
import { useLanguage } from '../hooks/useLanguage.js';

/**
 * Minimal test harness exposing the language toggle alongside Footer.
 *
 * @returns {JSX.Element} Toggle button and Footer under test.
 */
function FooterHarness() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div>
      <button type="button" onClick={toggleLanguage}>
        Lang: {language}
      </button>
      <Footer />
    </div>
  );
}

describe('Footer', () => {
  beforeEach(() => {
    window.localStorage.clear();
    window.localStorage.setItem('portfolio_lang', 'en');
  });

  it('renders English copyright notice by default', () => {
    render(
      <LanguageProvider>
        <Footer />
      </LanguageProvider>,
    );

    const year = new Date().getFullYear();
    expect(
      screen.getByText(`© ${year} ${SITE_CONFIG.name}. All rights reserved.`),
    ).toBeTruthy();
  });

  it('translates copyright text when language switches to Portuguese', async () => {
    const user = userEvent.setup();
    render(
      <LanguageProvider>
        <FooterHarness />
      </LanguageProvider>,
    );

    await user.click(screen.getByRole('button', { name: 'Lang: en' }));

    const year = new Date().getFullYear();
    expect(
      screen.getByText(`© ${year} ${SITE_CONFIG.name}. Todos os direitos reservados.`),
    ).toBeTruthy();
  });

  it('renders no links, buttons, location, or email contact elements', () => {
    render(
      <LanguageProvider>
        <Footer />
      </LanguageProvider>,
    );

    expect(screen.queryAllByRole('link')).toHaveLength(0);
    expect(screen.queryByRole('button')).toBeNull();
    expect(screen.queryByText(SITE_CONFIG.location)).toBeNull();
    expect(screen.queryByText(SITE_CONFIG.email)).toBeNull();
  });
});
