import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { ThemeSwitch } from '../Header';

describe('ThemeSwitch Component', () => {
  test('Theme toggle button should be in document', () => {
    render(<ThemeSwitch />);
    expect(screen.getByTestId('theme-switch')).toBeInTheDocument();
    expect(screen.getByTestId('theme-switch')).toBeVisible();
  });

  test('Theme Toggle check', () => {
    render(<ThemeSwitch />);
    // before click
    expect(screen.getByTestId('theme-switch').querySelector('i')).toHaveClass(
      'bx-moon',
    );
    // toggle theme test
    fireEvent.click(screen.getByTestId('theme-switch'));
    expect(screen.getByTestId('theme-switch').querySelector('i')).toHaveClass(
      'bxs-moon',
    );
  });
});
