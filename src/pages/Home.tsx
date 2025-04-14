import React from 'react';
import { Github, Linkedin, Mail, Code2, Trophy, Star, BookOpen, Brain } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Business & Tech',
      description: 'Business Administration major with Computer Programming minor',
      link: '/education'
    },
    {
      icon: Trophy,
      title: 'FBLA Champion',
      description: '1st Place in Finance, 3rd in Marketing at State Conference',
      link: '/awards'
    },
    {
      icon: Brain,
      title: 'Technical Support',
      description: 'Audio-visual setup and technical team member at Crosswinds',
      link: '/experience'
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="relative h-screen max-h-[800px] flex items-center">
        <div className="absolute inset-0 bg-mesh-gradient opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <motion.div 
              className="flex items-center space-x-6 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D5635AQFY_hI0vTB8Yw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1725396051712?e=1744603200&v=beta&t=YYdtJdHmDfnIQWddXZtvQhth8qgbf0sG0hSTANdRhP8"
                alt="Profile"
                className="w-32 h-32 rounded-2xl object-cover ring-4 ring-neon-blue/30 animate-float"
              />
              <div>
                <motion.div 
                  className="flex items-center space-x-2 mb-2"
                  {...fadeInUp}
                >
                  <Star className="h-5 w-5 text-neon-blue" />
                  <span className="text-neon-blue font-medium">Business & Computer Science Student</span>
                </motion.div>
                <motion.h1 
                  className="text-5xl font-bold mb-2 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent"
                  {...fadeInUp}
                >
                  Kenna Teklu
                </motion.h1>
                <motion.h2 
                  className="text-2xl text-gray-300"
                  {...fadeInUp}
                >
                  Arizona Christian University
                </motion.h2>
              </div>
            </motion.div>

            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed"
              {...fadeInUp}
            >
              Business Administration student with a focus on Management and Computer Programming. 
              FBLA State Champion in Finance. Technical team member at Crosswinds Presbyterian Church.
              Passionate about bridging business strategy with technological innovation.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              {...fadeInUp}
            >
              <Link to="/experience" className="cyber-button">
                View Experience
                <Code2 className="ml-2 inline-block" />
              </Link>
              <Link to="/contact" className="cyber-button-alt">
                Get in Touch
                <Mail className="ml-2 inline-block" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                to={highlight.link} 
                className="cyber-card group hover:bg-cyber-mid/50 transition-all duration-300"
              >
                <highlight.icon className="h-8 w-8 text-neon-blue group-hover:text-neon-purple transition-colors" />
                <h3 className="text-xl font-semibold mt-4 mb-2 text-white group-hover:text-neon-blue transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-gray-400">{highlight.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="py-8">
        <div className="flex justify-center space-x-6">
          {[
            { icon: Linkedin, href: 'https://www.linkedin.com/in/kenna-teklu', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:kennateklu@gmail.com', label: 'Email' }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              className="group flex flex-col items-center"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="cyber-card p-3 rounded-xl group-hover:bg-cyber-mid/80 transition-all duration-300">
                <social.icon className="h-6 w-6 text-gray-300 group-hover:text-neon-blue transition-colors" />
              </div>
              <span className="text-sm text-gray-400 mt-2 group-hover:text-neon-blue transition-colors">
                {social.label}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;