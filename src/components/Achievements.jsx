import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiGitBranch, FiUsers } from 'react-icons/fi';
import { MdEmojiEvents, MdAutoAwesome, MdTrendingUp } from 'react-icons/md';

/**
 * Achievements Section
 * Compact 2-column layout, no duplicate stats
 */
const Achievements = () => {
  const ease = [0.16, 1, 0.3, 1];

  const achievements = [
    {
      icon: <MdTrendingUp className="w-5 h-5" />,
      title: 'DSA Mastery',
      description: '50+ problems solved on LeetCode and CodeChef with consistent practice and optimization',
    },
    {
      icon: <MdEmojiEvents className="w-5 h-5" />,
      title: 'Hackathon Finalist',
      description: 'Participated in 5+ hackathons, developed innovative solutions and gained real-world experience',
    },
    {
      icon: <FiUsers className="w-5 h-5" />,
      title: 'Technical Leadership',
      description: 'Coordinated 10+ technical events and workshops, managing 150+ participants',
    },
    {
      icon: <MdAutoAwesome className="w-5 h-5" />,
      title: 'AI & ML Enthusiast',
      description: 'Actively exploring AI agents, LLMs, and machine learning with hands-on projects',
    },
    {
      icon: <FiCode className="w-5 h-5" />,
      title: 'Full-Stack Developer',
      description: 'Built 3+ full-stack applications with modern tech stack and best practices',
    },
    {
      icon: <FiGitBranch className="w-5 h-5" />,
      title: 'Open Source Contributor',
      description: 'Contributing to open-source projects and building reusable components',
    },
  ];

  return (
    <section
      id="achievements"
      className="py-24 sm:py-32 px-5 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 mb-16"
        >
          Achievements
        </motion.h2>

        {/* 2-column compact grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {achievements.map((achievement, i) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease, delay: i * 0.06 }}
              className="flex gap-4"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-zinc-800/60 border border-white/[0.04] flex items-center justify-center text-emerald-400 flex-shrink-0">
                {achievement.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-base font-semibold text-zinc-100 mb-1">
                  {achievement.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
