import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiGitBranch, FiUsers } from 'react-icons/fi';
import { MdEmojiEvents, MdAutoAwesome, MdTrendingUp } from 'react-icons/md';

/**
 * Achievements Section Component
 * Display of key accomplishments and milestones
 */
const Achievements = () => {
  const achievements = [
    {
      icon: <MdTrendingUp className="w-8 h-8" />,
      title: 'DSA Mastery',
      description: '50+ problems solved on LeetCode and CodeChef with consistent practice and optimization',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <MdEmojiEvents className="w-8 h-8" />,
      title: 'Hackathon Finalist',
      description: 'Participated in 5+ hackathons, developed innovative solutions and gained real-world experience',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: 'Technical Leadership',
      description: 'Coordinated 10+ technical events and workshops, managing 150+ participants',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: <MdAutoAwesome className="w-8 h-8" />,
      title: 'AI & ML Enthusiast',
      description: 'Actively exploring AI agents, LLMs, and machine learning with hands-on projects',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: <FiCode className="w-8 h-8" />,
      title: 'Full-Stack Developer',
      description: 'Built 3+ full-stack applications with modern tech stack and best practices',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: <FiGitBranch className="w-8 h-8" />,
      title: 'Open Source Contributor',
      description: 'Contributing to open-source projects and building reusable components',
      color: 'from-yellow-500 to-orange-500',
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="achievements"
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
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-gray-400 text-lg">Milestones and accomplishments in my journey</p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, rotate: 2 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative p-6 glass-dark rounded-2xl overflow-hidden transition-all duration-300 hover:glass h-full flex flex-col">
                {/* Icon Container */}
                <div
                  className={`w-14 h-14 rounded-lg bg-gradient-to-br ${achievement.color} p-3 text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {achievement.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {achievement.description}
                </p>

                {/* Hover Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 -z-10`}
                ></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Projects', value: '5+' },
            { label: 'DSA Problems', value: '50+' },
            { label: 'Hackathons', value: '5+' },
            { label: 'Events Organized', value: '10+' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 glass-dark rounded-lg text-center group"
            >
              <h4 className="text-3xl sm:text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </h4>
              <p className="text-gray-400 text-sm group-hover:text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
