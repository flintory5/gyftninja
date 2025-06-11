import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('Landing Page', () => {
  it('renders the headline', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders the subheadline', () => {
    render(<Home />);
    expect(screen.getByText(/unbelievable gift ideas/i)).toBeInTheDocument();
  });

  it('renders the CTA button', () => {
    render(<Home />);
    expect(screen.getByRole('button', { name: /find the perfect gift/i })).toBeInTheDocument();
  });
}); 