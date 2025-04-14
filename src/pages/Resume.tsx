import React from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-700">Professional Resume</h1>
      
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <Briefcase className="h-6 w-6 text-blue-400 mr-2" />
          <h2 className="text-2xl font-semibold">Work Experience</h2>
        </div>
        
        <div className="space-y-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-400">Senior Software Engineer</h3>
            <p className="text-gray-400">Tech Corp • 2020 - Present</p>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>• Led development of microservices architecture</li>
              <li>• Mentored junior developers and conducted code reviews</li>
              <li>• Improved application performance by 40%</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-400">Software Engineer</h3>
            <p className="text-gray-400">StartUp Inc • 2018 - 2020</p>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>• Developed and maintained React applications</li>
              <li>• Implemented CI/CD pipelines</li>
              <li>• Reduced build time by 50%</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <GraduationCap className="h-6 w-6 text-blue-400 mr-2" />
          <h2 className="text-2xl font-semibold">Education</h2>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-400">BSc in Computer Science</h3>
          <p className="text-gray-400">University of Technology • 2014 - 2018</p>
          <p className="mt-4 text-gray-300">
            Graduated with honors. Specialized in Software Engineering and Artificial Intelligence.
          </p>
        </div>
      </section>
      
      <section>
        <div className="flex items-center mb-6">
          <Award className="h-6 w-6 text-blue-400 mr-2" />
          <h2 className="text-2xl font-semibold">Skills</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker'].map((skill) => (
            <div key={skill} className="bg-gray-800 p-4 rounded-lg text-center">
              <span className="text-gray-300">{skill}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resume;