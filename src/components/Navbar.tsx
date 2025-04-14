import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FileText, Home, Mail, Newspaper, Briefcase, GraduationCap, Award, Trophy, BookOpen, AlignCenterVertical as Certificate, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/experience', icon: Briefcase, label: 'Experience' },
    { path: '/education', icon: GraduationCap, label: 'Education' },
    { path: '/skills', icon: Award, label: 'Skills' },
    { path: '/projects', icon: Trophy, label: 'Projects' },
    { path: '/certifications', icon: Certificate, label: 'Certifications' },
    { path: '/publications', icon: BookOpen, label: 'Publications' },
    { path: '/blog', icon: Newspaper, label: 'Blog' },
    { path: '/contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-effect">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center space-x-2 text-xl font-bold group">
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Kenna Teklu
            </span>
          </NavLink>
          
          <button 
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-neon-blue hover:bg-cyber-mid/50 transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;