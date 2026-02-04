'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import { profile } from '@/lib/data';

export default function AboutSection() {
  return (
    <section id="about" className="section py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              {profile.summary}
            </p>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">
                What I Bring Together:
              </h3>
              <ul className="space-y-3">
                {profile.highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="text-primary-400 mt-1">▸</span>
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-dark rounded-2xl p-8 space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary-500/20 rounded-lg mt-1">
                    <MapPin className="text-primary-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-primary-400 font-semibold mb-2">Location</h4>
                    <p className="text-gray-300">{profile.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary-500/20 rounded-lg mt-1">
                    <Mail className="text-primary-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-primary-400 font-semibold mb-2">Email</h4>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-gray-300 hover:text-primary-400 transition-colors"
                      data-cursor-hover
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary-500/20 rounded-lg mt-1">
                    <Phone className="text-primary-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-primary-400 font-semibold mb-2">Phone</h4>
                    <a
                      href={`tel:${profile.phone}`}
                      className="text-gray-300 hover:text-primary-400 transition-colors"
                      data-cursor-hover
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              className="absolute -z-10 inset-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-2xl blur-xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
