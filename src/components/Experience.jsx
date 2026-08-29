import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiCalendar } from 'react-icons/fi';

/**
 * Experience Section
 * Vertical timeline, left-aligned, clean dots instead of emojis
 */
const Experience = () => {
  const ease = [0.16, 1, 0.3, 1];

  const experiences = [
    {
      id: 1,
      title: 'Executive Team Member',
      organization: 'TEDx BVCOE',
      duration: 'June 2025 - Present',
      location: 'BVCOE, Delhi, India',
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
      achievements: [
        'Organized and managed 5+ college-level hackathons with 200+ participants',
        'Coordinated technical workshops and coding competitions',
        'Led team of 15+ volunteers for event execution and logistics',
        'Managed sponsor relations and prize distribution for events',
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 sm:py-32 px-5 sm:px-6"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 mb-16"
        >
          Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-zinc-800" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease, delay: i * 0.08 }}
                className="relative pl-8"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-emerald-500 bg-zinc-950" />

                {/* Content */}
                <div>
                  <h3 className="text-base font-semibold text-zinc-100">
                    {exp.title}
                  </h3>
                  <p className="text-sm font-medium text-emerald-400 mt-0.5">
                    {exp.organization}
                  </p>

                  <div className="flex flex-wrap gap-4 mt-2 text-xs text-zinc-500">
                    <span className="inline-flex items-center gap-1.5">
                      <FiCalendar className="w-3 h-3" />
                      {exp.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <FiMapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-sm text-zinc-400 leading-relaxed"
                      >
                        <div className="w-1 h-1 rounded-full bg-zinc-600 mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
