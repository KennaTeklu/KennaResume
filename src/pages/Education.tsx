import React from 'react';
import { GraduationCap, Calendar, Award, MapPin, BookOpen, Star } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Business Administration',
      concentration: 'Management',
      minor: 'Computer Programming',
      school: 'Arizona Christian University',
      location: 'Glendale, Arizona',
      period: 'August 2022 - May 2026',
      achievements: [
        'FBLA State Champion in Finance Competition',
        'Bronze Medal in Marketing Competition',
        'Member of Arizona Christian University Business Group (ACUBG)',
        'Interdisciplinary focus on business strategy and technology'
      ]
    }
  ];

  const interests = [
    'Artificial Intelligence',
    'Blockchain Technology',
    'Psychology',
    'Political History',
    'Financial Literacy',
    'Business Strategy',
    'Technology Innovation',
    'Organizational Leadership'
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="cyber-title mb-8">Education & Interests</h1>
      
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="cyber-card transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h2 className="text-2xl font-semibold text-neon-blue">{edu.degree}</h2>
                <div className="text-xl text-gray-300 mt-1">
                  Concentration in {edu.concentration} • Minor in {edu.minor}
                </div>
                <div className="text-xl text-gray-300 mt-1">{edu.school}</div>
              </div>
              <div className="flex items-center mt-2 md:mt-0 text-gray-400">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{edu.period}</span>
              </div>
            </div>
            
            <div className="flex items-center text-gray-400 mb-4">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{edu.location}</span>
            </div>
            
            <h3 className="text-lg font-semibold mb-2 text-neon-purple">Key Achievements</h3>
            <ul className="space-y-2 mb-6">
              {edu.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start">
                  <Award className="h-5 w-5 mr-2 mt-1 text-neon-blue" />
                  <span className="text-gray-300">{achievement}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-2 text-neon-purple">Areas of Interest</h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-cyber-mid text-sm rounded-full text-neon-blue border border-neon-blue/20"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;