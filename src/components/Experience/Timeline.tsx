'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Experience } from '@/types';

interface TimelineProps {
  experience: Experience;
  index: number;
  isLast: boolean;
}

export default function Timeline({ experience, index, isLast }: TimelineProps) {
  return (
    <div className="relative flex gap-8">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-transparent" />
      )}

      {/* Timeline Dot */}
      <div className="relative z-10 flex-shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center border-4 border-gray-900"
        >
          <Briefcase className="text-white" size={18} />
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="flex-1 pb-12"
      >
        <div className="glass-dark rounded-lg p-6 hover:border-primary-500/50 transition-all">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                {experience.title}
              </h3>
              <p className="text-primary-400 font-semibold text-lg">
                {experience.company}
              </p>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm md:text-base mt-2 md:mt-0">
              <Calendar size={16} />
              <span>{experience.startDate} – {experience.endDate}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-400 mb-4">
            <MapPin size={16} />
            <span>{experience.location}</span>
          </div>
          <ul className="space-y-2">
            {experience.description.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-300">
                <span className="text-primary-400 mt-1.5">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
