'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navigation/Navbar';
import CustomCursor from '@/components/Cursor/CustomCursor';
import HeroSection from '@/components/Hero/HeroSection';
import AboutSection from '@/components/About/AboutSection';
import SkillsSection from '@/components/Skills/SkillsSection';
import ExperienceSection from '@/components/Experience/ExperienceSection';
import ProjectsSection from '@/components/Projects/ProjectsSection';
import EducationSection from '@/components/Education/EducationSection';
import ContactSection from '@/components/Contact/ContactSection';
import ParallaxBackground from '@/components/Background/ParallaxBackground';
import ParticleBackground from '@/components/Hero/ParticleBackground';
// import dynamic from 'next/dynamic';

// Lazy load heavy components - uncomment if you want to enable 3D scene
// const ThreeScene = dynamic(() => import('@/components/Background/ThreeScene'), {
//   ssr: false,
// });

export default function Home() {
  useEffect(() => {
    // Disable default cursor on desktop
    if (window.innerWidth > 768) {
      document.body.style.cursor = 'none';
    }

    return () => {
      // Re-enable cursor on unmount
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <CustomCursor />
      <ParallaxBackground />
      <ParticleBackground />
      {/* ThreeScene can be enabled if needed - currently commented for performance */}
      {/* <ThreeScene /> */}
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
}
