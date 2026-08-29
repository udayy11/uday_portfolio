import React from 'react';
import { motion } from 'framer-motion';

/**
 * Skills Section
 * Grouped list layout: category labels left, skill pills right
 * No progress bars, no identical cards
 */
const Skills = () => {
  const ease = [0.16, 1, 0.3, 1];

  const skillGroups = [
    {
      category: 'Languages',
      skills: ['Python', 'JavaScript', 'C++', 'C', 'SQL', 'Java'],
    },
    {
      category: 'Web Development',
      skills: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'REST APIs', 'HTML/CSS'],
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'MongoDB', 'Firebase', 'SQLite'],
    },
    {
      category: 'AI & ML',
      skills: ['Machine Learning', 'LLMs', 'AI Agents', 'NLP', 'Deep Learning', 'Scikit-learn', 'PyTorch'],
    },
    {
      category: 'Core CS',
      skills: ['DSA', 'OOP', 'DBMS', 'System Design', 'Networking', 'Operating Systems'],
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git/GitHub', 'Linux', 'Docker', 'VS Code', 'Vercel'],
    },
  ];

  return (
    <section
      id="skills"
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
          Skills & Expertise
        </motion.h2>

        {/* Grouped list */}
        <div className="space-y-0 border-t border-white/[0.06]">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease, delay: i * 0.05 }}
              className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8 py-6 border-b border-white/[0.06] items-start"
            >
              {/* Category label */}
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider pt-1">
                {group.category}
              </p>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm text-zinc-300 bg-zinc-800/60 rounded-lg border border-white/[0.04] hover:border-emerald-500/30 hover:text-emerald-400 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
