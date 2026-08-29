import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';

/**
 * Projects Section
 * Featured projects get large cards, others get compact rows
 */
const Projects = () => {
  const ease = [0.16, 1, 0.3, 1];

  const projects = [
    {
      id: 1,
      title: 'NexChain',
      subtitle: 'AI Powered Logistics Agent',
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
      subtitle: 'Real-time Multiplayer Platform',
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
      title: 'HackBVP',
      subtitle: 'Hackathon Website for BVCOE',
      description:
        'Official website for BVCOE hackathon 2026, featuring event details, registration, and live updates.',
      technologies: ['React', 'Express.js', 'PostgreSQL', 'Tailwind CSS'],
      image: '/hackbvp.png',
      github: 'https://github.com/udayy11/HackBVP-7.0',
      live: 'https://hack-bvp-7-0.vercel.app/',
      featured: false,
    },
    {
      id: 4,
      title: 'Linux Automation Toolkit',
      subtitle: 'System Task Automation',
      description:
        'Bash scripts and Python utilities for automating common Linux system tasks and server management.',
      technologies: ['Bash', 'Python', 'Linux', 'Shell Scripting'],
      image: '/linux_automation.jpg',
      github: 'https://github.com/udayy11/linux-auto',
      live: 'https://github.com/udayy11/linux-auto',
      featured: false,
    },
    {
      id: 5,
      title: 'Neo Evolution',
      subtitle: 'Space Exploration Platform',
      description:
        'A space exploration website providing real-time data on celestial bodies and space missions.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'NASA APIs'],
      image: '/neoEvo.png',
      github: 'https://github.com/udayy11/neoEvoRena',
      live: 'https://github.com/udayy11/neoEvoRena',
      featured: false,
    },
    {
      id: 6,
      title: 'Portfolio Website',
      subtitle: 'This Site',
      description:
        'Modern, responsive portfolio showcasing projects and skills with smooth animations.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      image: '/portfolio.png',
      github: 'https://github.com/udayy11/uday_portfolio',
      live: '#',
      featured: false,
    },
  ];

  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 px-5 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
            Projects
          </h2>
          <a
            href="https://github.com/udayy11"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-emerald-400 transition-colors"
          >
            <FiCode className="w-4 h-4" />
            <span>View all on GitHub</span>
          </a>
        </motion.div>

        {/* Featured Projects: large cards with image */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease, delay: i * 0.1 }}
              className="group relative rounded-xl overflow-hidden border border-white/[0.06] bg-zinc-900/40"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-zinc-100 mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-500 mb-3">{project.subtitle}</p>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs text-zinc-400 bg-zinc-800/60 rounded border border-white/[0.04]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-emerald-400 transition-colors"
                  >
                    <FiGithub className="w-4 h-4" />
                    <span>Code</span>
                  </a>

                  {project.id === 1 && project.live2 && (
                    <a
                      href={project.live2}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Backend"
                      className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-emerald-400 transition-colors"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      <span>Backend</span>
                    </a>
                  )}

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={project.id === 1 ? 'Frontend' : 'Live Demo'}
                    className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-emerald-400 transition-colors"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    <span>{project.id === 1 ? 'Frontend' : 'Demo'}</span>
                  </a>
                </div>

                {/* NexChain note */}
                {project.id === 1 && (
                  <p className="mt-3 text-xs text-zinc-600">
                    Start backend before accessing frontend
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects: compact rows */}
        <div className="border-t border-white/[0.06]">
          {other.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, ease, delay: i * 0.05 }}
              className="group grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 py-5 border-b border-white/[0.06] items-center"
            >
              <div>
                <div className="flex items-baseline gap-3 mb-1">
                  <h3 className="text-base font-medium text-zinc-200 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-zinc-600">{project.subtitle}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-zinc-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-emerald-400 transition-colors"
                  aria-label={`${project.title} code`}
                >
                  <FiGithub className="w-4 h-4" />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-emerald-400 transition-colors"
                  aria-label={`${project.title} demo`}
                >
                  <FiExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
