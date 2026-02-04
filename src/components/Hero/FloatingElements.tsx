'use client';

import { motion } from 'framer-motion';

const shapes = [
  { size: 60, x: '10%', y: '20%', duration: 8 },
  { size: 80, x: '80%', y: '30%', duration: 10 },
  { size: 50, x: '20%', y: '70%', duration: 12 },
  { size: 70, x: '75%', y: '80%', duration: 9 },
  { size: 40, x: '50%', y: '10%', duration: 11 },
];

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-lg bg-gradient-to-br from-primary-500/20 to-purple-500/20 backdrop-blur-sm border border-primary-500/30"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
