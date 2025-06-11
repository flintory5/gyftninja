import React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gyft Ninja - AI-Powered Gift Recommendations",
  description: "Discover unbelievable gift ideas with AI-powered intelligence. Stop guessing, start giving gifts that create unforgettable moments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
