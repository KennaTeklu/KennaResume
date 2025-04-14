import React from 'react';
import { motion } from 'framer-motion';

interface VerifyButtonProps {
  certId: string;
}

const VerifyButton: React.FC<VerifyButtonProps> = ({ certId }) => {
  return (
    <a
      href={`https://certification.testout.com/verifycert/${certId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-block"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <button className="relative px-6 py-2 bg-cyber-dark text-neon-blue rounded-full border border-neon-blue/20 hover:bg-cyber-mid transition-all z-10">
        Verify Certificate
      </button>
    </a>
  );
};

export default VerifyButton;