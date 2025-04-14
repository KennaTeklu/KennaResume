import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

interface ImageBoxProps {
  src: string;
  alt: string;
  size?: 'tiny' | 'medium' | 'large';
  className?: string;
}

const ImageBox: React.FC<ImageBoxProps> = ({ src, alt, size = 'medium', className = '' }) => {
  const sizeClasses = {
    tiny: 'w-20 h-20',
    medium: 'w-40 h-40',
    large: 'w-64 h-64'
  };

  return (
    <Tilt
      options={{
        max: 25,
        scale: 1.05,
        speed: 300
      }}
    >
      <motion.div
        className={`relative overflow-hidden rounded-lg bg-cyber-dark border border-neon-blue/20 ${sizeClasses[size]} ${className}`}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </Tilt>
  );
};

export default ImageBox;