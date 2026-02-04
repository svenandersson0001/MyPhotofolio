'use client';

import { motion } from 'framer-motion';
import { Project } from '@/types';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';

// Note: For Next.js Image to work, you may need to configure next.config.js
// with the image domains or use unoptimized: true for local images

interface ProjectCardProps {
  project: Project;
  index: number;
  category: string;
}

export default function ProjectCard({ project, index, category }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
      whileHover={{ y: -10 }}
    >
      <div className="glass-dark rounded-lg overflow-hidden h-full flex flex-col card-3d">
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-gray-800">
          {project.preview ? (
            <Image
              src={project.preview}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              unoptimized
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-500/20 to-purple-500/20">
              <Github size={48} className="text-gray-600" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-400 mb-4 flex-1">{project.description}</p>

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs bg-primary-500/20 text-primary-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Links */}
          <div className="flex gap-4 items-center flex-wrap">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                data-cursor-hover
              >
                <Github size={20} />
                <span>GitHub</span>
              </motion.a>
            )}
            {category === 'Web' && project.website && (
              <motion.a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                data-cursor-hover
              >
                <ExternalLink size={20} />
                <span>Website</span>
              </motion.a>
            )}
            {!project.github && !(category === 'Web' && project.website) && (
              <span className="flex items-center gap-2 text-gray-500 text-sm">
                <Github size={20} />
                <span>Private</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
