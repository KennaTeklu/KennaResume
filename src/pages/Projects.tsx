import React from 'react';
import { Youtube, Church, Trophy, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Science Explained YouTube Channel',
      description: 'Led strategic growth initiatives for educational YouTube channel, focusing on science communication and audience engagement.',
      role: 'Director of Operations & Strategy',
      achievements: [
        '4,900% subscriber growth',
        '10-member ambassador team',
        'Content optimization',
        'Marketing strategy'
      ],
      icon: Youtube,
      stats: { growth: '4,900%', team: 10 }
    },
    {
      title: 'Technical Support at Crosswinds',
      description: 'Manage and operate audio-visual equipment for church services, ensuring high-quality technical execution.',
      role: 'Technical Team Member',
      achievements: [
        'Equipment setup',
        'Live streaming',
        'Recording services',
        'Technical troubleshooting'
      ],
      icon: Church,
      stats: { experience: '2+ years', services: '100+' }
    },
    {
      title: 'FBLA State Competition',
      description: 'Represented Arizona Christian University in state-level business competitions, achieving top rankings.',
      role: 'Student Competitor',
      achievements: [
        'Finance Champion',
        'Marketing Bronze',
        'Business strategy',
        'Case analysis'
      ],
      icon: Trophy,
      stats: { rankings: 2, competitions: 2 }
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="cyber-title mb-8">Featured Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="cyber-card transform hover:scale-[1.02] transition-all duration-300"
          >
            <project.icon className="h-8 w-8 text-neon-blue mb-4" />
            <h2 className="text-2xl font-semibold text-neon-blue mb-2">{project.title}</h2>
            <p className="text-gray-400 mb-2">{project.role}</p>
            <p className="text-gray-300 mb-4">{project.description}</p>
            
            <div className="space-y-2 mb-4">
              {project.achievements.map((achievement, i) => (
                <div key={i} className="flex items-center">
                  <Star className="h-4 w-4 text-neon-purple mr-2" />
                  <span className="text-gray-300">{achievement}</span>
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-cyber-light/20">
              {Object.entries(project.stats).map(([key, value], i) => (
                <div key={i} className="text-gray-400">
                  <span className="text-neon-blue">{value}</span> {key}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;