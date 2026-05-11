import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiCalendar, FiUsers } from 'react-icons/fi';

/**
 * Experience Section Component
 * Timeline-style experience cards with organization details
 */
const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Executive Team Member',
      organization: 'TEDx BVCOE',
      duration: 'June 2025 - Present',
      location: 'BVCOE, Delhi, India',
      icon: '🎤',
      achievements: [
        'Managing senior speaker coordination and event operations',
        'Leading team collaboration for TEDx Talk 2026 flagship event',
        'Coordinating with international speakers and organizing logistics',
        'Ensuring seamless event execution and participant engagement',
      ],
    },
    {
      id: 2,
      title: 'Active Member',
      organization: 'IEEE BVCOE',
      duration: 'June 2025 - Present',
      location: 'Delhi, India',
      icon: '⚡',
      achievements: [
        'Organizing FUNIEEE technical events and competitions',
        'Managing BVEST workshop series for skill development',
        'Coordinating SPECTRUM technical talk series',
        'Leading logistics, promotions, and registration for 7+ events',
      ],
    },
    {
      id: 3,
      title: 'Development',
      organization: 'Self-Directed Projects',
      duration: 'May 2024 - Present',
      location: 'Remote',
      icon: '💻',
      achievements: [
        'Developed multiple full-stack applications and AI tools',
        'Contributed to open-source projects and communities',
        'Participated in 4+ hackathons and coding competitions',
        'Built portfolio of production-ready projects',
      ],
    },
        {
      id: 4,
      title: 'Hackathon Organizer & Coordinator',
      organization: 'BVCOE College Events',
      duration: 'January 2024 - Present',
      location: 'BVCOE, Delhi, India',
      icon: '🏆',
      achievements: [
        'Organized and managed 5+ college-level hackathons with 200+ participants',
        'Coordinated technical workshops and coding competitions',
        'Led team of 15+ volunteers for event execution and logistics',
        'Managed sponsor relations and prize distribution for events',
      ],
    },
  ];

  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg">Journey and roles in organizations</p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 relative"
        >
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-transparent transform md:-translate-x-1/2"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              className={`relative md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-x-1/2 md:translate-x-0">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-8 h-8 bg-slate-900 border-4 border-emerald-500 rounded-full flex items-center justify-center text-lg"
                >
                  {experience.icon}
                </motion.div>
              </div>

              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 pl-16' : 'md:pl-16 pl-16'}`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-dark rounded-2xl p-6 hover:glass transition-all duration-300"
                >
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-2xl font-bold text-white group hover:text-emerald-400">
                        {experience.title}
                      </h3>
                    </div>
                    <p className="text-emerald-400 font-semibold text-lg mb-2">
                      {experience.organization}
                    </p>
                  </div>

                  {/* Meta Information */}
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <FiCalendar className="w-4 h-4" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FiMapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3">
                    {experience.achievements.map((achievement, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm leading-relaxed">{achievement}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
