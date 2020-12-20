import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Footer } from './index';

describe('Footer', () => {
  it('snapshot', () => {
    render(
      <MemoryRouter>
        <Footer pages={[{ name: 'smart', slug: '/smart-page' }]} />
      </MemoryRouter>
    );
    expect(screen.getByTestId('footer').innerHTML).toMatchInlineSnapshot(
      `"<div class=\\"container\\"><div class=\\"brand-images\\"><div class=\\"brand-logo\\"><img src=\\"\\" alt=\\"Telekom Logo\\"><span class=\\"sr-only\\">Telekom Logo</span></div><div class=\\"brand-claim\\"><img src=\\"\\" alt=\\"Erleben, was verbindet\\"><span class=\\"sr-only\\">Brand Claim</span></div></div><div class=\\"footer-links\\"><div class=\\"pages-links\\"><a rel=\\"noopener noreferrer\\" class=\\"text-light\\" href=\\"/static_page//smart-page\\">smart</a></div><div class=\\"copyright\\"><p> © 2020 Deutsche Telekom AG </p></div></div></div>"`
    );
  });
});
