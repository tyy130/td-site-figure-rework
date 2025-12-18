'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Container from './Container';
import Button from './Button';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-heading-md font-bold text-gradient hover:opacity-80 transition-opacity"
          >
            TacticDev
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="#about" 
              className="text-body-md text-foreground-secondary hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link 
              href="#projects" 
              className="text-body-md text-foreground-secondary hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <Link 
              href="https://github.com/Tactic-Dev" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-md text-foreground-secondary hover:text-foreground transition-colors"
            >
              GitHub
            </Link>
            <Button href="#contact" variant="primary" size="sm">
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </Container>
    </nav>
  );
}
