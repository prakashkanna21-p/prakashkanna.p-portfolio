// src/components/LoadingAnimation.jsx
import React from 'react';
import { motion } from 'framer-motion';

const LoadingAnimation = () => {
  return (
    <div className="fixed inset-0 bg-dark-bg z-50 flex items-center justify-center">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-20 h-20 border-4 border-primary border-t-transparent rounded-full"
      />
    </div>
  );
};

export default LoadingAnimation;