import React from 'react';
import { motion } from 'framer-motion';
import ImageBox from './ImageBox';

interface AwardCardProps {
  title: string;
  organization: string;
  date: string;
  description: string;
  image: string;
}

const AwardCard: React.FC<AwardCardProps> = ({
  title,
  organization,
  date,
  description,
  image
}) => {
  return (
    <motion.div
      className="cyber-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row gap-6">
        <ImageBox src={image} alt={title} size="large" className="w-full md:w-1/2" />
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-neon-blue">{title}</h3>
          <p className="text-gray-300 mt-1">{organization}</p>
          <p className="text-gray-400 mt-2">{date}</p>
          <p className="text-gray-300 mt-4">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AwardCard;