import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import userEvent from '@testing-library/user-event';
import { ThemeSwitch } from '../Header';

describe('ThemeSwitch Component', () => {
  test('Toggle theme-mode check', () => {
    const { container } = render(<ThemeSwitch />);
    // expect(screen.debug());
    const themeToggler = screen.getByRole('button');
    const iconEl = container.querySelector('i');
    expect(themeToggler).toBeInTheDocument();
    expect(iconEl).toBeInTheDocument();
    expect(iconEl).toHaveClass('bx bx-moon'); // in light mood by default
    userEvent.click(themeToggler); // toggler
    // expect(iconEl).toHaveClass('bx bxs-moon'); // in dark mood after the toggle
    expect(iconEl?.classList.contains('bxs-moon') === true);
    userEvent.click(themeToggler); // toggler
    // expect(iconEl).toHaveClass('bx bx-moon'); // again, toggled back to => light mood
    expect(iconEl?.classList.contains('bx-moon'));
    expect(iconEl?.classList.contains('bxs-moon') === false);
  });
});
