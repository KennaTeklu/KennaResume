import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: 'Microsoft Office 365 (Office Pro)',
      organization: 'TestOut Corp',
      date: 'December 2023',
      credentialId: '6-1C6-VAS2TJ',
      scores: [
        { name: 'Microsoft Word', score: '100%' },
        { name: 'Microsoft PowerPoint', score: '100%' },
        { name: 'Microsoft Excel', score: '95%' }
      ]
    },
    {
      name: 'Digital Marketing Certification',
      organization: 'Google Digital Garage',
      date: 'December 2022',
      credentialId: 'ZY3 V9L K46',
      skills: [
        'Search Engine Optimization (SEO)',
        'Online Advertising',
        'Digital Marketing Strategy'
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="cyber-title mb-8">Professional Certifications</h1>
      
      <div className="grid gap-6">
        {certifications.map((cert, index) => (
          <div key={index} className="cyber-card transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-start">
              <Award className="h-8 w-8 text-neon-blue mr-4 mt-1" />
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-neon-blue">{cert.name}</h2>
                <div className="text-gray-300 mt-1">{cert.organization}</div>
                
                <div className="flex items-center text-gray-400 mt-2">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{cert.date}</span>
                </div>
                
                <div className="text-gray-400 mt-2">
                  Credential ID: {cert.credentialId}
                </div>
                
                {cert.scores && (
                  <div className="mt-4 space-y-2">
                    {cert.scores.map((score, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-gray-300">{score.name}</span>
                        <span className="text-neon-purple">{score.score}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                {cert.skills && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-cyber-mid text-sm rounded-full text-neon-blue border border-neon-blue/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;