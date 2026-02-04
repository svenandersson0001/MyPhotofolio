'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import SkillCard from './SkillCard';

const categories = [
  'Web Development',
  'C++ / System Programming',
  'AI, Automation & Data',
  'DevOps & Cloud',
  'Game Development',
];

export default function SkillsSection() {
  const skillsByCategory = categories.map((category) => ({
    category,
    skills: skills.filter((skill) => skill.category === category),
  }));

  return (
    <section id="skills" className="section py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Core Skills
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="space-y-16">
          {skillsByCategory.map((categoryGroup, categoryIndex) => (
            <motion.div
              key={categoryGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
                {categoryGroup.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {categoryGroup.skills.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={categoryIndex * 10 + index}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
