import { IconType } from 'react-icons';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiGraphql,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiCplusplus,
  SiQt,
  SiFfmpeg,
  SiOpencv,
  SiPython,
  SiPytorch,
  SiKeras,
  SiHuggingface,
  SiOpenai,
  SiDocker,
  SiKubernetes,
  SiAmazon,
  SiGooglecloud,
  SiN8N,
  SiPhp,
  SiLaravel,
  SiUnity,
} from 'react-icons/si';
import { FaCode } from 'react-icons/fa';

// Map skill names to their corresponding icons
export const skillIconMap: Record<string, IconType> = {
  // Web Development
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript,
  'React': SiReact,
  'Next.js': SiNextdotjs,
  'Node.js': SiNodedotjs,
  'GraphQL': SiGraphql,
  'MySQL': SiMysql,
  'MongoDB': SiMongodb,
  'PostgreSQL': SiPostgresql,
  'Tailwind CSS': SiTailwindcss,
  'PHP': SiPhp,
  'Laravel': SiLaravel,
  'Inertia.js': FaCode, // Inertia doesn't have a specific icon, using generic code icon
  'Express.js': SiNodedotjs,
  'Socket.io': FaCode, // Socket.io doesn't have a specific icon
  'YOLO': SiOpencv,
  'OpenAI API': SiOpenai,
  
  // C++ / System Programming
  'C++': SiCplusplus,
  'Qt': SiQt,
  'FFmpeg': SiFfmpeg,
  'OpenCV': SiOpencv,
  'Multithreading': FaCode,
  'Luxand SDK': FaCode,
  
  // AI, Automation & Data
  'Python': SiPython,
  'PyTorch': SiPytorch,
  'Keras': SiKeras,
  'CNN, RNN, LSTM': SiKeras,
  'Yolo': SiOpencv,
  'LangChain': FaCode,
  'N8N': SiN8N,
  'Hugging Face': SiHuggingface,
  'OpenAI': SiOpenai,
  
  // DevOps & Cloud
  'Docker': SiDocker,
  'Kubernetes': SiKubernetes,
  'AWS': SiAmazon,
  'GCP': SiGooglecloud,
  
  // Game Development
  'Unity': SiUnity,
};

// Get icon for a skill name, returns a default icon if not found
export const getSkillIcon = (skillName: string): IconType => {
  return skillIconMap[skillName] || FaCode;
};
