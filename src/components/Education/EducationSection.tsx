'use client';

import { motion } from 'framer-motion';
import { education, certifications } from '@/lib/data';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="section py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary-500/20 rounded-lg">
                <GraduationCap className="text-primary-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            <div className="glass-dark rounded-lg p-6">
              <h4 className="text-xl font-semibold text-white mb-2">
                {education.degree}
              </h4>
              <p className="text-primary-400 font-semibold mb-2">
                {education.institution}
              </p>
              <div className="flex items-center gap-2 text-gray-400 mb-2">
                <MapPin size={16} />
                <span>{education.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Calendar size={16} />
                <span>{education.startDate} – {education.endDate}</span>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary-500/20 rounded-lg">
                <Award className="text-primary-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-dark rounded-lg p-4"
                >
                  <h4 className="text-lg font-semibold text-white mb-1">
                    {cert.name}
                  </h4>
                  <p className="text-primary-400 text-sm">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm">{cert.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
