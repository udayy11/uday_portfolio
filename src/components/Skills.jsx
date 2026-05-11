import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SiPython, SiReact, SiDocker } from 'react-icons/si';
import { FaDatabase, FaCode, FaBrain } from 'react-icons/fa';

/**
 * Skills Section Component
 * Categorized skill cards with hover animations
 */
const Skills = () => {

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <SiPython className="w-8 h-8" />,
      skills: ['Python', 'JavaScript', 'C++', 'C', 'SQL' , 'Java'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Web Development',
      icon: <SiReact className="w-8 h-8" />,
      skills: ['HTML/CSS', 'React.js', 'Node.js', 'Express.js', 'REST APIs', 'Next.js', 'Tailwind CSS', 'MERN Stack'],
      color: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Databases',
      icon: <FaDatabase className="w-8 h-8" />,
      skills: ['MySQL', 'MongoDB', 'Firebase', 'SQLite'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Core CS',
      icon: <FaCode className="w-8 h-8" />,
      skills: ['DSA', 'OOP', 'DBMS', 'System Design', 'Networking', 'Operating Systems'],
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'AI & ML',
      icon: <FaBrain className="w-8 h-8" />,
      skills: ['Machine Learning', 'LLMs', 'AI Agents', 'NLP', 'Deep Learning','Scikit-learn', 'PyTorch'],
      color: 'from-violet-500 to-purple-500',
    },
    {
      title: 'Tools & Platforms',
      icon: <SiDocker className="w-8 h-8" />,
      skills: ['Git/GitHub', 'Linux', 'VS Code', 'Vercel', 'Docker'],
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative"
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
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg">Technologies and tools I work with</p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative h-full"
            >
              {/* Card */}
              <div className="relative p-6 glass-dark rounded-2xl overflow-hidden transition-all duration-300 hover:glass h-full">
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}
                ></div>

                {/* Icon */}
                <div className="text-5xl mb-4">{category.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                  {category.title}
                </h3>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="px-3 py-1 text-xs font-medium bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30 hover:border-emerald-500 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Hover Effect Border */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300 -z-20 blur`}
                ></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Proficiency */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 p-8 glass-dark rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-8 text-white">Proficiency Levels</h3>

          {[
            { name: 'React & JavaScript', level: 90 },
            { name: 'Python & ML', level: 85 },
            { name: 'Databases & SQL', level: 80 },
            { name: 'System Design', level: 75 },
            { name: 'AI Agent Development', level: 60 },
          ].map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-300 font-medium">{skill.name}</span>
                <span className="text-emerald-400 font-bold">{skill.level}%</span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"
                ></motion.div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
