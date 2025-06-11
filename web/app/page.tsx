import React from "react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div style={{ textAlign: 'center', maxWidth: '600px' }}>
          <h1 style={{ 
            fontSize: '3.5rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            🎁 Gyft Ninja
          </h1>
          
          <p style={{ 
            fontSize: '1.5rem', 
            marginBottom: '2rem', 
            color: '#666',
            lineHeight: '1.6'
          }}>
            Discover <strong>unbelievable gift ideas</strong> with AI-powered intelligence that knows exactly what your loved ones want
          </p>

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

          <div className={styles.ctas}>
            <button 
              className={styles.primary}
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                border: 'none',
                fontSize: '1.1rem',
                fontWeight: '600',
                padding: '0 32px',
                height: '56px'
              }}
            >
              🎯 Find the Perfect Gift
            </button>
          </div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem', 
          marginTop: '4rem',
          maxWidth: '800px'
        }}>
          <div style={{ 
            textAlign: 'center', 
            padding: '2rem', 
            borderRadius: '12px', 
            background: 'var(--gray-alpha-100)',
            border: '1px solid var(--gray-alpha-200)'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🧠</div>
            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>AI-Powered Intelligence</h3>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>
              Advanced algorithms analyze personality traits and preferences
            </p>
          </div>

          <div style={{ 
            textAlign: 'center', 
            padding: '2rem', 
            borderRadius: '12px', 
            background: 'var(--gray-alpha-100)',
            border: '1px solid var(--gray-alpha-200)'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💝</div>
            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>Personalized Suggestions</h3>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>
              Tailored recommendations based on relationships and occasions
            </p>
          </div>

          <div style={{ 
            textAlign: 'center', 
            padding: '2rem', 
            borderRadius: '12px', 
            background: 'var(--gray-alpha-100)',
            border: '1px solid var(--gray-alpha-200)'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✨</div>
            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>Unforgettable Moments</h3>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>
              Create lasting memories with gifts that truly matter
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p style={{ color: '#888', fontSize: '0.9rem', textAlign: 'center' }}>
          © 2024 Gyft Ninja - Making gift-giving an art form
        </p>
      </footer>
    </div>
  );
}
