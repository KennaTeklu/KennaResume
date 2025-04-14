import React from 'react';
import { motion } from 'framer-motion';
import ImageBox from './ImageBox';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  link
}) => {
  return (
    <motion.div
      className="cyber-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ImageBox src={image} alt={title} size="large" className="w-full h-48" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-neon-blue">{title}</h3>
        <p className="text-gray-300 mt-2">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-neon-blue hover:text-neon-purple transition-colors"
          >
            Learn More →
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;