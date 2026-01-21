'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import './animated-cta-button.css';

interface AnimatedCTAButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
}

export function AnimatedCTAButton({
  text = 'Reserve Now',
  onClick,
  className = '',
}: AnimatedCTAButtonProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      className={`animated-cta-button ${isAnimating ? 'animate-flow' : ''} ${className}`}
    >
      <div className="button-circle">
        <ArrowRight className="arrow-icon" size={20} />
      </div>
      <span className="button-text">{text}</span>
      <div className="flow-overlay"></div>
    </button>
  );
}
