import React from 'react';
import { motion } from 'framer-motion';
import useSound from 'use-sound';

interface FlashCardProps {
  title: string;
  description: string;
  image?: string;
}

const FlashCard: React.FC<FlashCardProps> = ({ title, description, image }) => {
  const [playThump] = useSound('/thump.mp3', { volume: 0.5 });

  return (
    <motion.div
      className="cyber-card"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        onComplete: () => playThump()
      }}
    >
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-neon-blue mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default FlashCard;