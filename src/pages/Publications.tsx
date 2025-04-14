import React from 'react';
import { BookOpen, Youtube, ExternalLink } from 'lucide-react';

const Publications = () => {
  const content = [
    {
      title: 'Science Explained YouTube Channel',
      role: 'Director of Operations & Strategy',
      description: 'Leading content strategy and channel growth for educational science content.',
      metrics: [
        'Over 50,000 subscribers',
        'Consistent growth in viewership',
        'High engagement rates',
        'Strong community building'
      ],
      link: 'https://www.youtube.com/@ScienceExplained'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="cyber-title mb-8">Content & Publications</h1>
      
      <div className="space-y-8">
        {content.map((item, index) => (
          <div key={index} className="cyber-card transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-start">
              <Youtube className="h-8 w-8 text-neon-purple mr-4 mt-1" />
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-neon-blue">{item.title}</h2>
                <div className="text-gray-300 mt-1">{item.role}</div>
                
                <p className="text-gray-300 mt-4">
                  {item.description}
                </p>
                
                <div className="mt-4 space-y-2">
                  {item.metrics.map((metric, i) => (
                    <div key={i} className="flex items-start">
                      <BookOpen className="h-5 w-5 text-neon-blue mr-2 mt-1" />
                      <span className="text-gray-300">{metric}</span>
                    </div>
                  ))}
                </div>
                
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-neon-blue hover:text-neon-purple transition-colors"
                >
                  <span>Visit Channel</span>
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;