import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';

/**
 * Projects Section Component
 * Showcase of key projects with technologies and links
 */
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'NexChain - AI Powered logistics agent',
      description:
        'An AI agent that automates logistics operations using LLMs, optimizing routes and managing inventory with real-time data.',
      technologies: ['Python', 'LLMs', 'FastAPI', 'React', 'Docker'],
      image: '/nexchain.png',
      github: 'https://github.com/udayy11/hackStack',
      live: 'https://nexchain-p1e4.onrender.com/',
      live2: 'https://hackstack-76mn.onrender.com/',
      featured: true,
    },
    {
      id: 2,
      title: 'GameVerse',
      description:
        'A real-time multiplayer gaming platform built with Socket.io, featuring user authentication, game lobbies, and interactive gameplay.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'JWT'],
      image: '/gameverse.png',
      github: 'https://github.com/udayy11/GameVerse',
      live: 'https://gameverse-b7sx.onrender.com/home.html',
      featured: true,
    },
    {
      id: 3,
      title: 'HackBVP - Hackathon Website for BVCOE',
      description:
        'Official website for BVCOE hackathon 2026, featuring event details, registration, and live updates with a modern design.',
      technologies: ['React', 'Express.js', 'PostgreSQL', 'JavaScript', 'Tailwind CSS'],
      image: '/hackbvp.png',
      github: 'https://github.com/udayy11/HackBVP-7.0',
      live: 'https://hack-bvp-7-0.vercel.app/',
      featured: false,
    },
    {
      id: 4,
      title: 'Linux Automation Toolkit',
      description:
        '~UNDER DEVELOPMENT~: Bash scripts and Python utilities for automating common Linux system tasks and server management operations.',
      technologies: ['Bash', 'Python', 'Linux', 'Shell Scripting'],
      image: '/linux_automation.jpg',
      github: 'https://github.com/udayy11/linux-auto',
      live: 'https://github.com/udayy11/linux-auto',
      featured: false,
    },
    // {
    //   id: 5,
    //   title: 'AI Resume Analyzer',
    //   description:
    //     'Intelligent resume parsing tool using NLP to extract information, score resumes, and provide improvement suggestions.',
    //   technologies: ['Python', 'NLP', 'Machine Learning', 'React', 'FastAPI'],
    //   image: '📄',
    //   github: '#',
    //   live: '#',
    //   featured: true,
    // },
    {
      id: 5,
      title: 'Portfolio Website',
      description:
        'Modern, responsive portfolio showcasing projects and skills with smooth animations and interactive UI elements.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      image: '/portfolio.png',
      github: 'https://github.com/udayy11/uday_portfolio',
      live: '#',
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">Explore some of my latest work and contributions</p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              {/* Card Container */}
              <div className="relative glass-dark p-6 rounded-2xl h-full flex flex-col transition-all duration-300 hover:glass">
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-900 text-xs font-bold rounded-full">
                    Featured
                  </div>
                )}

                {/* Image Placeholder */}
                <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                />

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-400 rounded-md border border-emerald-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="space-y-3">
                  {/* For NexChain: Show both frontend and backend links */}
                  {project.id === 1 && (
                    <div className="text-xs text-gray-400 bg-slate-700/30 p-2 rounded border border-slate-600">
                      ⚡ Start backend first before accessing frontend
                    </div>
                  )}
                  
                  <div className="flex gap-4 flex-wrap">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 min-w-[80px] flex items-center justify-center space-x-2 px-3 py-2 bg-slate-700/50 hover:bg-emerald-500/20 text-gray-300 hover:text-emerald-400 rounded-lg font-medium transition-colors text-sm"
                    >
                      <FiGithub className="w-4 h-4" />
                      <span>Code</span>
                    </motion.a>

                    {/* Backend link for NexChain */}
                    {project.id === 1 && project.live2 && (
                      <motion.a
                        href={project.live2}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Backend - Start this first"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 min-w-[90px] flex items-center justify-center space-x-2 px-3 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 hover:text-cyan-300 rounded-lg font-medium transition-colors border border-cyan-500/30 text-sm"
                      >
                        <FiExternalLink className="w-4 h-4" />
                        <span>Backend</span>
                      </motion.a>
                    )}

                    {/* Demo/Frontend link */}
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={project.id === 1 ? "Frontend - Start after backend" : "Live Demo"}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 min-w-[85px] flex items-center justify-center space-x-2 px-3 py-2 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 hover:text-emerald-300 rounded-lg font-medium transition-colors border border-emerald-500/30 text-sm"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      <span>{project.id === 1 ? 'Frontend' : 'Demo'}</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <motion.a
            href="https://github.com/udayy11"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-slate-700/50 hover:bg-emerald-500/20 text-gray-300 hover:text-emerald-400 rounded-lg font-semibold transition-colors border border-slate-600 hover:border-emerald-500/50"
          >
            <FiCode className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
