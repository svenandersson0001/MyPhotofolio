'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/lib/data';
import ParticleBackground from './ParticleBackground';
import FloatingElements from './FloatingElements';

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = profile.title;
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="section flex items-center justify-center relative min-h-screen">
      <ParticleBackground />
      <FloatingElements />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text">{profile.name}</span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl lg:text-3xl mb-8 min-h-[3rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-gray-300">
              {displayedText}
              {isTyping && <span className="animate-pulse">|</span>}
            </span>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {profile.summary}
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-primary-500 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              data-cursor-hover
            >
              <Github size={20} />
              <span>GitHub</span>
            </motion.a>
            <motion.a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-primary-500 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              data-cursor-hover
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </motion.a>
            <motion.a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 px-6 py-3 bg-primary-600 rounded-lg hover:bg-primary-700 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              data-cursor-hover
            >
              <Mail size={20} />
              <span>Contact</span>
            </motion.a>
          </motion.div>

          <motion.div
            className="flex justify-center w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button
              onClick={scrollToAbout}
              className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors"
              whileHover={{ y: 5 }}
              data-cursor-hover
            >
              <span className="text-sm">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown size={24} />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
