'use client';

import React from 'react';
import Container from './Container';
import Button from './Button';

interface HeroProps {
  videoSrc?: string;
  videoYouTubeId?: string;
}

export default function Hero({ videoSrc, videoYouTubeId }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      {videoSrc && (
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover opacity-30"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        </div>
      )}

      {/* Gradient Background (fallback) */}
      {!videoSrc && (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          </div>
        </div>
      )}

      {/* Content */}
      <Container className="relative z-10 text-center py-32">
        <div className="animate-fade-in-up">
          <h1 className="text-display-lg md:text-display-xl mb-6 text-gradient">
            Scalable Systems<br />at the Intersection of<br />AI & Automation
          </h1>
          <p className="text-heading-md md:text-heading-lg text-foreground-secondary max-w-3xl mx-auto mb-12">
            Building elegant systems that turn complex technology into usable, scalable solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="#projects" variant="primary" size="lg">
              Explore Projects
            </Button>
            {videoYouTubeId && (
              <Button 
                href={`https://www.youtube.com/watch?v=${videoYouTubeId}`}
                variant="secondary" 
                size="lg"
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Full Video
              </Button>
            )}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-foreground-tertiary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </Container>
    </section>
  );
}
