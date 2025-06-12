import React from "react";
import styles from "./page.module.css";



/**
 * Landing page component for the Gyft Ninja application.
 * 
 * This is the main entry point and home page that introduces users to the
 * AI-powered gift recommendation platform. The component implements a modern
 * landing page design with:
 * 
 * **Key Sections:**
 * - Hero section with brand identity and value proposition
 * - Call-to-action button for user engagement
 * - Feature showcase highlighting core platform benefits
 * - Footer with copyright and branding information
 * 
 * **Design Features:**
 * - Gradient brand title with emoji for visual appeal
 * - Responsive grid layout for feature cards
 * - CSS modules for scoped styling
 * - Inline styles for dynamic gradient effects
 * - Semantic HTML structure for accessibility
 * 
 * **Accessibility:**
 * - Proper heading hierarchy (h1, h3)
 * - Semantic HTML elements (main, footer)
 * - High contrast colors for readability
 * - Descriptive text content for screen readers
 * 
 * @component
 * @returns The complete landing page JSX structure
 * 
 * @example
 * ```tsx
 * // This component is automatically rendered at the root route "/"
 * // by Next.js App Router when users visit the homepage
 * <Home />
 * ```
 * 
 * @see {@link https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages | Next.js Pages Documentation}
 */
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Hero Section - Brand introduction and value proposition */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          {/* Brand title with gradient effect and emoji for visual appeal */}
          <h1 style={{ 
            fontSize: '3.5rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #2ecc40 0%, #ffd700 60%, #e74c3c 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 2px 12px rgba(255, 215, 0, 0.18)'
          }}>
            🎁 Gyft Ninja
          </h1>
          
          {/* Primary value proposition with emphasis on key benefits */}
          <p style={{ 
            fontSize: '1.5rem', 
            marginBottom: '2rem', 
            color: '#666',
            lineHeight: '1.6'
          }}>
            Discover <strong>unbelievable gift ideas</strong> with AI-powered intelligence that knows exactly what your loved ones want
          </p>

          {/* Detailed description explaining the platform's approach */}
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ 
              fontSize: '1.1rem', 
              color: '#888', 
              marginBottom: '2rem',
              lineHeight: '1.7'
            }}>
              Stop guessing. Start giving gifts that create unforgettable moments. 
              Our intelligent platform analyzes personalities, interests, and relationships 
              to suggest the perfect gift every time.
            </p>
          </div>

          {/* Call-to-action section with primary button */}
          <div className={styles.ctas}>
            <button 
              className={styles.primary}
              style={{
                background: 'linear-gradient(135deg, #ffd700 0%, #2ecc40 60%, #e74c3c 100%)',
                border: 'none',
                fontSize: '1.1rem',
                fontWeight: '700',
                padding: '0 32px',
                height: '56px',
                color: '#1a1a1a',
                boxShadow: '0 4px 24px 0 rgba(255, 215, 0, 0.18), 0 1.5px 6px 0 rgba(46, 204, 64, 0.10), 0 1.5px 6px 0 rgba(231, 76, 60, 0.10)',
                borderRadius: '32px',
                letterSpacing: '0.02em'
              }}
            >
              Find the Perfect Gift
            </button>
          </div>
        </div>

        {/* Features Section - Three-column grid showcasing key platform benefits */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem', 
          marginTop: '4rem',
          maxWidth: '800px'
        }}>
          {/* Feature Card 1: AI Intelligence */}
          <div style={{ 
            textAlign: 'center', 
            padding: '2rem', 
            borderRadius: '16px', 
            background: 'linear-gradient(120deg, #fffbe9 60%, #ffd700 100%)',
            border: '1.5px solid #ffd700',
            boxShadow: '0 4px 24px 0 rgba(255, 215, 0, 0.18), 0 1.5px 6px 0 rgba(46, 204, 64, 0.10), 0 1.5px 6px 0 rgba(231, 76, 60, 0.10)',
            color: '#1a1a1a'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🧠</div>
            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>AI-Powered Intelligence</h3>
            <p style={{ color: '#14532d', fontSize: '0.9rem', fontWeight: 600 }}>
              Advanced algorithms analyze personality traits and preferences
            </p>
          </div>

          {/* Feature Card 2: Personalization */}
          <div style={{ 
            textAlign: 'center', 
            padding: '2rem', 
            borderRadius: '16px', 
            background: 'linear-gradient(120deg, #fffbe9 60%, #ffd700 100%)',
            border: '1.5px solid #ffd700',
            boxShadow: '0 4px 24px 0 rgba(255, 215, 0, 0.18), 0 1.5px 6px 0 rgba(46, 204, 64, 0.10), 0 1.5px 6px 0 rgba(231, 76, 60, 0.10)',
            color: '#1a1a1a'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💝</div>
            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>Personalized Suggestions</h3>
            <p style={{ color: '#7f1d1d', fontSize: '0.9rem', fontWeight: 600 }}>
              Tailored recommendations based on relationships and occasions
            </p>
          </div>

          {/* Feature Card 3: Memorable Experiences */}
          <div style={{ 
            textAlign: 'center', 
            padding: '2rem', 
            borderRadius: '16px', 
            background: 'linear-gradient(120deg, #fffbe9 60%, #ffd700 100%)',
            border: '1.5px solid #ffd700',
            boxShadow: '0 4px 24px 0 rgba(255, 215, 0, 0.18), 0 1.5px 6px 0 rgba(46, 204, 64, 0.10), 0 1.5px 6px 0 rgba(231, 76, 60, 0.10)',
            color: '#1a1a1a'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✨</div>
            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>Unforgettable Moments</h3>
            <p style={{ color: '#bfa100', fontSize: '0.9rem', fontWeight: 600 }}>
              Create lasting memories with gifts that truly matter
            </p>
          </div>
        </div>
      </main>

      {/* Footer Section - Copyright and branding information */}
      <footer className={styles.footer}>
        <p style={{ color: '#888', fontSize: '0.9rem', textAlign: 'center' }}>
          © 2024 Gyft Ninja - Making gift-giving an art form
        </p>
      </footer>
    </div>
  );
}
