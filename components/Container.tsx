import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'content' | 'prose';
}

export default function Container({ 
  children, 
  className = '', 
  size = 'default' 
}: ContainerProps) {
  const sizeClasses = {
    default: 'max-w-container',
    content: 'max-w-content',
    prose: 'max-w-prose',
  };

  return (
    <div className={`mx-auto px-6 md:px-8 lg:px-12 ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
}
