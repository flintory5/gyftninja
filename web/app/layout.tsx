import React from "react";
import type { Metadata } from "next";
import "./globals.css";

/**
 * Application metadata configuration for SEO and social sharing.
 * 
 * Defines the page title and description that appear in:
 * - Browser tabs and bookmarks
 * - Search engine results
 * - Social media previews (when shared)
 * 
 * @public
 */
export const metadata: Metadata = {
  title: "Gyft Ninja - AI-Powered Gift Recommendations",
  description: "Discover unbelievable gift ideas with AI-powered intelligence. Stop guessing, start giving gifts that create unforgettable moments.",
};

/**
 * Props interface for the RootLayout component.
 * 
 * @interface RootLayoutProps
 */
interface RootLayoutProps {
  /** React children elements to be rendered within the layout */
  children: React.ReactNode;
}

/**
 * Root layout component that wraps all pages in the application.
 * 
 * This component provides the fundamental HTML structure including:
 * - HTML document structure with proper lang attribute for accessibility
 * - Body element that contains all page content
 * - Global CSS imports that apply across the entire application
 * 
 * The layout follows Next.js 13+ App Router conventions and serves as the
 * top-level wrapper for all routes in the application.
 * 
 * @component
 * @param props - The component props
 * @param props.children - React children to render within the layout
 * @returns The root HTML structure with children content
 * 
 * @example
 * ```tsx
 * // This component is automatically used by Next.js App Router
 * // and wraps all pages in the application
 * <RootLayout>
 *   <HomePage />
 * </RootLayout>
 * ```
 * 
 * @see {@link https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required | Next.js Root Layout Documentation}
 */
export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
