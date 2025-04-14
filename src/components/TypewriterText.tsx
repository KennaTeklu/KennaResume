import React from 'react';
import { TypeAnimation } from 'react-type-animation';

interface TypewriterTextProps {
  text: string;
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, className = '' }) => {
  return (
    <TypeAnimation
      sequence={[text]}
      wrapper="p"
      speed={50}
      className={`text-gray-300 ${className}`}
      cursor={false}
    />
  );
};

export default TypewriterText;