import React from 'react';
import { motion } from 'framer-motion';
import ImageBox from './ImageBox';
import VerifyButton from './VerifyButton';

interface CertificationCardProps {
  title: string;
  organization: string;
  date: string;
  credentialId: string;
  image: string;
  verifyLink?: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  organization,
  date,
  credentialId,
  image,
  verifyLink
}) => {
  return (
    <motion.div
      className="cyber-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start space-x-4">
        <ImageBox src={image} alt={title} size="medium" />
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-neon-blue">{title}</h3>
          <p className="text-gray-300 mt-1">{organization}</p>
          <p className="text-gray-400 mt-2">Issued: {date}</p>
          <p className="text-gray-400">Credential ID: {credentialId}</p>
          {verifyLink && <VerifyButton certId={credentialId} />}
        </div>
      </div>
    </motion.div>
  );
};

export default CertificationCard;