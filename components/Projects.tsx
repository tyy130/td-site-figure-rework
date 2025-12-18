import React from 'react';
import Container from './Container';
import Card from './Card';
import Button from './Button';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  emoji: string;
}

const projects: Project[] = [
  {
    title: 'Tux - Linux Custodian AI',
    description: 'A secure, LLM-powered Linux system administrator that executes commands through natural language with a 4-layer security model.',
    tags: ['AI', 'Security', 'Linux', 'Python'],
    link: 'https://github.com/Tactic-Dev/tux-chat',
    emoji: '🐧',
  },
  {
    title: 'ForgeOps',
    description: 'DevOps automation and workflow orchestration platform for modern teams.',
    tags: ['DevOps', 'Automation', 'Infrastructure'],
    link: 'https://forgeops.io',
    emoji: '⚙️',
  },
  {
    title: 'TacticDev Hub',
    description: 'Central hub for exploring our tools, design systems, and experimental automation projects.',
    tags: ['Web', 'Design System', 'Next.js'],
    link: 'https://tacticdev.com',
    emoji: '🌐',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-background">
      <Container>
        <div className="text-center mb-20">
          <h2 className="text-display-md mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-heading-md text-foreground-secondary max-w-3xl mx-auto">
            Open-source tools and frameworks that embody our philosophy of powerful automation without compromising security.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              hover
              className="flex flex-col h-full animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` } as React.CSSProperties}
            >
              <div className="text-5xl mb-4">{project.emoji}</div>
              <h3 className="text-heading-lg mb-3">{project.title}</h3>
              <p className="text-body-md text-foreground-secondary mb-6 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-3 py-1 bg-white/10 rounded-full text-label-sm text-foreground-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button 
                href={project.link}
                variant="ghost" 
                size="sm"
                className="w-full"
              >
                Learn More →
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
