import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  style?: React.CSSProperties;
}

export default function Card({ children, className = '', hover = false, style }: CardProps) {
  const hoverClass = hover ? 'hover-lift cursor-pointer' : '';
  
  return (
    <div className={`glass rounded-2xl p-8 ${hoverClass} ${className}`} style={style}>
      {children}
    </div>
  );
}
