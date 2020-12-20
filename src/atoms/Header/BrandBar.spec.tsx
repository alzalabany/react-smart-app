import { render, screen } from '@testing-library/react';
import React from 'react';
import BrandBar from './index';

describe('BrandBar', () => {
  it('renders correctly with no props', () => {
    render(<BrandBar />);

    expect(screen.getByTestId('appheader').innerHTML).toMatchInlineSnapshot(
      `"<div class=\\"container\\"><div class=\\"brand-logo\\"><a href=\\"/\\"><img src=\\"\\" alt=\\"Telekom Logo\\"><span class=\\"sr-only\\">Telekom Logo</span></a></div><div class=\\"brand-claim\\"><img src=\\"\\" alt=\\"Brand Claim\\"><span class=\\"sr-only\\">Brand Claim</span></div></div>"`
    );
  });
});
