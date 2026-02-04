'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ProjectsData, ProjectCategory } from '@/types';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  const [projectsData, setProjectsData] = useState<ProjectsData | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await fetch('/projects.json');
        if (response.ok) {
          const data = await response.json();
          setProjectsData(data);
        }
      } catch (error) {
        console.error('Failed to load projects:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const getCategoryCount = (categoryName: string): number => {
    if (!projectsData) return 0;
    if (categoryName === 'All') {
      return projectsData.categories.reduce((total, cat) => total + cat.projects.length, 0);
    }
    return projectsData.categories.find((cat) => cat.category === categoryName)?.projects.length || 0;
  };

  const categories = projectsData
    ? ['All', ...projectsData.categories.map((cat) => cat.category)]
    : ['All'];

  const filteredProjects = projectsData
    ? selectedCategory === 'All'
      ? projectsData.categories.flatMap((cat) => cat.projects)
      : projectsData.categories
          .find((cat) => cat.category === selectedCategory)
          ?.projects || []
    : [];

  if (loading) {
    return (
      <section id="projects" className="section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-gray-400">Loading projects...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="section py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Projects
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const count = getCategoryCount(category);
              return (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-lg transition-all flex items-center gap-2 ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-cursor-hover
                >
                  <span>{category}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                    selectedCategory === category
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-700 text-gray-400'
                  }`}>
                    {count}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData && selectedCategory === 'All'
              ? projectsData.categories.flatMap((cat) =>
                  cat.projects.map((project, index) => (
                    <ProjectCard
                      key={`${cat.category}-${project.title}`}
                      project={project}
                      index={index}
                      category={cat.category}
                    />
                  ))
                )
              : projectsData &&
                projectsData.categories
                  .find((cat) => cat.category === selectedCategory)
                  ?.projects.map((project, index) => (
                    <ProjectCard
                      key={project.title}
                      project={project}
                      index={index}
                      category={selectedCategory}
                    />
                  ))}
          </div>
        ) : (
          <div className="text-center text-gray-400 py-20">
            <p>No projects found in this category.</p>
            <p className="mt-2 text-sm">
              Add projects to <code className="bg-gray-800 px-2 py-1 rounded">public/projects.json</code>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
