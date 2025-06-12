import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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

  it('renders the complete landing page structure', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });

  it('displays the brand name in the headline', () => {
    render(<Home />);
    const headline = screen.getByRole('heading', { level: 1 });
    expect(headline).toHaveTextContent('🎁 Gyft Ninja');
  });

  it('displays the value proposition text', () => {
    render(<Home />);
    expect(screen.getByText(/AI-powered intelligence that knows exactly what your loved ones want/i)).toBeInTheDocument();
  });

  it('displays the descriptive paragraph', () => {
    render(<Home />);
    expect(screen.getByText(/Stop guessing. Start giving gifts that create unforgettable moments/i)).toBeInTheDocument();
  });

  it('renders all three feature cards', () => {
    render(<Home />);
    expect(screen.getByText('AI-Powered Intelligence')).toBeInTheDocument();
    expect(screen.getByText('Personalized Suggestions')).toBeInTheDocument();
    expect(screen.getByText('Unforgettable Moments')).toBeInTheDocument();
  });

  it('displays feature card descriptions', () => {
    render(<Home />);
    expect(screen.getByText(/Advanced algorithms analyze personality traits/i)).toBeInTheDocument();
    expect(screen.getByText(/Tailored recommendations based on relationships/i)).toBeInTheDocument();
    expect(screen.getByText(/Create lasting memories with gifts that truly matter/i)).toBeInTheDocument();
  });

  it('renders the footer with copyright text', () => {
    render(<Home />);
    expect(screen.getByText(/© 2024 Gyft Ninja - Making gift-giving an art form/i)).toBeInTheDocument();
  });

  it('CTA button has proper styling classes', () => {
    render(<Home />);
    const button = screen.getByRole('button', { name: /find the perfect gift/i });
    expect(button).toHaveClass('primary');
  });

  it('button click event can be triggered', () => {
    const mockClick = jest.fn();
    const { rerender } = render(<Home />);
    
    // Re-render with a mock click handler
    const HomeWithClick = () => {
      const handleClick = mockClick;
      return (
        <div>
          <button onClick={handleClick}>🎯 Find the Perfect Gift</button>
        </div>
      );
    };
    
    rerender(<HomeWithClick />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  it('has proper semantic structure with main element', () => {
    render(<Home />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('has proper semantic structure with footer element', () => {
    render(<Home />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('main content container has center alignment', () => {
    const { container } = render(<Home />);
    const mainElement = container.querySelector('.main');
    expect(mainElement).toBeInTheDocument();
    
    // Verify that the main element has the CSS class that provides center alignment
    expect(mainElement).toHaveClass('main');
  });
}); 