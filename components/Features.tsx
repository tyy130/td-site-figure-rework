import React from 'react';
import Container from './Container';
import Card from './Card';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: '🤖',
    title: 'AI-Powered Tools',
    description: 'Building intelligent systems that understand context and execute tasks safely and efficiently.',
  },
  {
    icon: '⚡',
    title: 'Automation First',
    description: 'Removing friction from workflows with powerful automation frameworks and tools.',
  },
  {
    icon: '🎨',
    title: 'Design Systems',
    description: 'Creating reusable, scalable UI systems that maintain consistency across products.',
  },
  {
    icon: '🚀',
    title: 'Rapid Deployment',
    description: 'From concept to production with speed, precision, and creative control.',
  },
];

export default function Features() {
  return (
    <section id="about" className="py-32 bg-background-secondary">
      <Container>
        <div className="text-center mb-20">
          <h2 className="text-display-md mb-6 text-gradient">
            What We Do
          </h2>
          <p className="text-heading-md text-foreground-secondary max-w-3xl mx-auto">
            We design products and frameworks that let teams move from concept to deployment with speed and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              hover
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-heading-md mb-3">{feature.title}</h3>
              <p className="text-body-md text-foreground-secondary">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
