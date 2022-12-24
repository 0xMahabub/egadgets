import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { SearchInput } from '../SearchInput';

const mockFn = vi.fn();

describe('SearchInput Component', () => {
  test('SearchInput component rendering test', () => {
    render(<SearchInput searchFn={mockFn} />);
    expect(screen.getByPlaceholderText('Search ...')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search ...')).toHaveValue('');
  });

  test('SearchInput component input test', () => {
    render(<SearchInput searchFn={mockFn} />);
    expect(screen.getByPlaceholderText('Search ...')).toBeVisible();
    fireEvent.change(screen.getByPlaceholderText('Search ...'), {
      target: { value: 'iPhone' },
    });
    expect(screen.getByPlaceholderText('Search ...')).toHaveValue('iPhone');
  });
});
