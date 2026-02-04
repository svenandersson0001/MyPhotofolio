'use client';

import { motion } from 'framer-motion';
import { Skill } from '@/types';
import { getSkillIcon } from '@/lib/skillIcons';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

interface CircularProgressProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
}

function CircularProgress({ percentage, size = 60, strokeWidth = 4, id }: CircularProgressProps & { id: string }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={`url(#gradient-${id})`}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          strokeDasharray={circumference}
        />
        <defs>
          <linearGradient id={`gradient-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#764ba2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  const Icon = getSkillIcon(skill.name);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="glass-dark rounded-lg p-4 hover:border-primary-500/50 transition-all flex flex-col items-center justify-center"
      whileHover={{ scale: 1.1, y: -5 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="relative mb-3">
        <CircularProgress percentage={skill.level} size={70} strokeWidth={5} id={skill.name.replace(/\s+/g, '-')} />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.5 }}
            className="text-primary-400"
          >
            <Icon size={28} />
          </motion.div>
        </div>
      </div>
      <h3 className="text-sm font-semibold text-white text-center">{skill.name}</h3>
    </motion.div>
  );
}
