import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import App from './App';

describe('App Testing', () => {
  // test('should be 1+1 = 2', () => {
  //   expect(1 + 1).toBe(2);
  // });

  test('App rendering', () => {
    render(<App />);

    expect(screen.debug());
  });
});
