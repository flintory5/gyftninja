import React from 'react';
import { render } from '@testing-library/react';
import RootLayout, { metadata } from '../app/layout';

describe('Layout', () => {
  it('has correct metadata title', () => {
    expect(metadata.title).toBe('Gyft Ninja - AI-Powered Gift Recommendations');
  });

  it('has correct metadata description', () => {
    expect(metadata.description).toBe('Discover unbelievable gift ideas with AI-powered intelligence. Stop guessing, start giving gifts that create unforgettable moments.');
  });

  it('metadata title contains brand name', () => {
    expect(metadata.title).toContain('Gyft Ninja');
  });

  it('metadata title contains key feature', () => {
    expect(metadata.title).toContain('AI-Powered');
  });

  it('metadata description contains value proposition', () => {
    expect(metadata.description).toContain('unbelievable gift ideas');
  });

  it('metadata description contains AI mention', () => {
    expect(metadata.description).toContain('AI-powered intelligence');
  });

  it('metadata description contains call to action', () => {
    expect(metadata.description).toContain('Stop guessing');
  });

  it('metadata has both title and description', () => {
    expect(metadata.title).toBeDefined();
    expect(metadata.description).toBeDefined();
    expect(typeof metadata.title).toBe('string');
    expect(typeof metadata.description).toBe('string');
  });

  it('metadata title is not empty', () => {
    expect(metadata.title).not.toBe('');
    expect(String(metadata.title).length).toBeGreaterThan(0);
  });

  it('metadata description is not empty', () => {
    expect(metadata.description).not.toBe('');
    expect(String(metadata.description).length).toBeGreaterThan(0);
  });


}); 