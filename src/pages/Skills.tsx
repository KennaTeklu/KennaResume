import React from 'react';
import { Brain, Award, TrendingUp, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      title: 'Technical Skills',
      icon: Code2,
      skills: [
        { name: 'Microsoft Word', level: 100 },
        { name: 'Microsoft PowerPoint', level: 100 },
        { name: 'Microsoft Excel', level: 95 },
        { name: 'Python Programming', level: 85 }
      ]
    },
    {
      title: 'Business & Management',
      icon: Brain,
      skills: [
        { name: 'Digital Marketing', level: 90 },
        { name: 'Financial Analysis', level: 85 },
        { name: 'Business Ethics', level: 85 },
        { name: 'Project Management', level: 80 }
      ]
    },
    {
      title: 'Core Competencies',
      icon: Award,
      skills: [
        { name: 'Problem Solving', level: 90 },
        { name: 'Team Collaboration', level: 90 },
        { name: 'Communication', level: 85 },
        { name: 'Leadership', level: 85 }
      ]
    },
    {
      title: 'Technical Support',
      icon: TrendingUp,
      skills: [
        { name: 'Audio-Visual Equipment', level: 90 },
        { name: 'Live Streaming', level: 85 },
        { name: 'Technical Troubleshooting', level: 85 },
        { name: 'Equipment Setup', level: 90 }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="cyber-title mb-12">Professional Skills</h1>
      
      <div 
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="cyber-card"
          >
            <h2 className="text-xl font-semibold mb-6 text-neon-blue flex items-center">
              <category.icon className="h-6 w-6 mr-2" />
              {category.title}
            </h2>
            
            <div className="space-y-6">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-neon-blue">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-cyber-mid rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: skillIndex * 0.1 }}
                      className="bg-neon-blue h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;