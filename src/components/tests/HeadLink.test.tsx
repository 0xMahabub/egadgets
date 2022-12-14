import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { HeadLink } from '../HeadLink';

describe('HeadLink Component', () => {
  test('HeadLink component rendering test', () => {
    render(
      <BrowserRouter>
        <HeadLink link='/' label='shop' />
      </BrowserRouter>,
    );
    expect(screen.findByDisplayValue('shop'));
  });
});
