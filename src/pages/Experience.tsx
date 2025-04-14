import React from 'react';
import { Briefcase, Calendar, MapPin, Youtube, Church, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Director of Operations & Strategy',
      company: 'Science Explained (YouTube)',
      location: 'Arizona, United States',
      period: '2021 - Present',
      description: [
        'Spearheaded growth strategies resulting in 4,900% subscriber increase (1k to 50k+)',
        'Built and mentored a 10-member ambassador team to amplify channel reach',
        'Refined branding and optimized audience engagement strategies',
        'Designed marketing campaigns to differentiate content in a saturated space'
      ],
      technologies: ['Content Strategy', 'Team Leadership', 'Growth Marketing', 'Brand Development']
    },
    {
      title: 'Technical Team Member',
      company: 'Crosswinds Presbyterian Church',
      location: 'Arizona, United States',
      period: 'September 2022 - Present',
      description: [
        'Assist with technical setup and recording of church services',
        'Ensure smooth operation of audio-visual equipment',
        'Contribute to the technical aspects of worship services',
        'Collaborate with team members for seamless execution'
      ],
      technologies: ['Audio Equipment', 'Video Recording', 'Technical Support', 'Team Collaboration']
    },
    {
      title: 'Business Administration Student',
      company: 'Arizona Christian University',
      location: 'Glendale, Arizona',
      period: 'August 2022 - May 2026',
      description: [
        'Major in Business Administration with concentration in Management',
        'Minor in Computer Programming',
        'FBLA State Champion in Finance Competition',
        'Active member of Arizona Christian University Business Group (ACUBG)'
      ],
      technologies: ['Business Strategy', 'Financial Analysis', 'Computer Programming', 'Management']
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="cyber-title mb-8">Professional Experience</h1>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="cyber-card transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h2 className="text-2xl font-semibold text-neon-blue">{exp.title}</h2>
                <div className="text-xl text-gray-300 mt-1">{exp.company}</div>
              </div>
              <div className="flex items-center mt-2 md:mt-0 text-gray-400">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{exp.period}</span>
              </div>
            </div>
            
            <div className="flex items-center text-gray-400 mb-4">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{exp.location}</span>
            </div>
            
            <ul className="space-y-2 mb-4">
              {exp.description.map((item, i) => (
                <li key={i} className="flex items-start">
                  <Briefcase className="h-5 w-5 mr-2 mt-1 text-neon-blue" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {exp.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-cyber-mid text-sm rounded-full text-neon-blue border border-neon-blue/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;