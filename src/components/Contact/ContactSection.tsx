'use client';

import { motion } from 'framer-motion';
import { profile, languages } from '@/lib/data';
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check, Languages } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      action: copyEmail,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: profile.location,
    },
  ];

  return (
    <section id="contact" className="section py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or
            just having a chat about technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-dark rounded-lg p-6 hover:border-primary-500/50 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-500/20 rounded-lg">
                      <Icon className="text-primary-400" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm text-gray-400 mb-1">{item.label}</h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-white hover:text-primary-400 transition-colors block"
                          data-cursor-hover
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white">{item.value}</p>
                      )}
                      {item.action && (
                        <button
                          onClick={item.action}
                          className="mt-2 flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-colors"
                          data-cursor-hover
                        >
                          {copied ? (
                            <>
                              <Check size={16} />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy size={16} />
                              <span>Copy email</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-dark rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
              <div className="flex gap-4">
                <motion.a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  data-cursor-hover
                >
                  <Github size={24} className="text-white" />
                </motion.a>
                <motion.a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  data-cursor-hover
                >
                  <Linkedin size={24} className="text-white" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-dark rounded-lg p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary-500/20 rounded-lg">
                <Languages className="text-primary-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Languages</h3>
            </div>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-between"
                >
                  <span className="text-gray-300 text-lg">{lang.name}</span>
                  <span className="text-primary-400 font-semibold">{lang.level}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16 pt-8 border-t border-gray-800"
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} Sven Andersson. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
