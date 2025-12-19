import React from 'react';
import Link from 'next/link';
import Container from './Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-secondary border-t border-white/10 py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-heading-md font-bold text-gradient mb-4">
              TacticDev
            </h3>
            <p className="text-body-md text-foreground-secondary max-w-md">
              Building scalable systems at the intersection of AI, automation, and web development.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-label-lg text-foreground mb-4">Links</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="#about" 
                  className="text-body-sm text-foreground-secondary hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="#projects" 
                  className="text-body-sm text-foreground-secondary hover:text-foreground transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="https://github.com/Tactic-Dev" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-sm text-foreground-secondary hover:text-foreground transition-colors"
                >
                  GitHub
                </Link>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-label-lg text-foreground mb-4">Projects</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="https://github.com/Tactic-Dev/tux-chat" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-sm text-foreground-secondary hover:text-foreground transition-colors"
                >
                  Tux - Linux AI
                </Link>
              </li>
              <li>
                <Link 
                  href="https://forgeops.io" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-sm text-foreground-secondary hover:text-foreground transition-colors"
                >
                  ForgeOps
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-body-sm text-foreground-tertiary">
            © {currentYear} TacticDev. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link 
              href="https://github.com/tyy130" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-tertiary hover:text-foreground transition-colors"
            >
              <span className="text-body-sm">Tyler Hill</span>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
