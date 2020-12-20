import { render, screen } from '@testing-library/react';
import React from 'react';
import { Thing } from './index';

describe('Thing', () => {
  it('snapshot', () => {
    render(<Thing>Facebook</Thing>);
    expect(screen.getByTestId('main').innerHTML).toMatchInlineSnapshot(
      `"Facebook"`
    );
  });
});
