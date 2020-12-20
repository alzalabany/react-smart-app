import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Button } from './index';

describe('Button', () => {
  it('snapshot', () => {
    render(
      <MemoryRouter>
        <Button>Test string Button</Button>
      </MemoryRouter>
    );
    expect(screen.getByTestId('button').innerHTML).toMatchInlineSnapshot(
      `"Test string Button"`
    );
  });
  it('render default message if no children', () => {
    render(
      <MemoryRouter>
        <Button />
      </MemoryRouter>
    );
    expect(screen.getByTestId('button').innerHTML).toMatchInlineSnapshot(
      `"the snozzberries taste like snozzberries"`
    );
  });
});
