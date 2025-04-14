import React from 'react';
import { Trophy, Calendar, Star, Award } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      title: 'FBLA State Champion - Finance',
      organization: 'FBLA Collegiate State Conference',
      date: '2023',
      description: 'Secured first place in the Finance Case Competition, representing Arizona Christian University Business Group',
      highlights: [
        'Demonstrated exceptional financial analysis skills',
        'Applied strategic business thinking to complex scenarios',
        'Contributed to ACU\'s recognition as an elite FBLA competitor',
        'Showcased practical application of business knowledge'
      ]
    },
    {
      title: 'Marketing Competition - Bronze Medal',
      organization: 'FBLA Collegiate State Conference',
      date: '2023',
      description: 'Achieved third place in the Marketing Competition, showcasing strategic marketing expertise',
      highlights: [
        'Developed comprehensive marketing strategies',
        'Applied innovative solutions to marketing challenges',
        'Demonstrated strong presentation skills',
        'Enhanced ACU\'s competitive standing'
      ]
    },
    {
      title: 'YouTube Channel Growth Achievement',
      organization: 'Science Explained',
      date: '2021 - Present',
      description: 'Led strategic growth initiatives resulting in exceptional channel expansion',
      highlights: [
        '4,900% subscriber growth (1,000 to 50,000+)',
        'Built and managed 10-member ambassador team',
        'Implemented successful marketing campaigns',
        'Optimized content strategy and audience engagement'
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="cyber-title mb-8">Awards & Achievements</h1>
      
      <div className="space-y-8">
        {awards.map((award, index) => (
          <div key={index} className="cyber-card transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-start">
              <Trophy className="h-8 w-8 text-neon-purple mr-4 mt-1" />
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-neon-blue">{award.title}</h2>
                <div className="text-gray-300 mt-1">{award.organization}</div>
                
                <div className="flex items-center text-gray-400 mt-2">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{award.date}</span>
                </div>
                
                <p className="text-gray-300 mt-4">
                  {award.description}
                </p>
                
                <div className="mt-4 space-y-2">
                  {award.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start">
                      <Star className="h-5 w-5 text-neon-blue mr-2 mt-1" />
                      <span className="text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;