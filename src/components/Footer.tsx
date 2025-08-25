import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, MapPin } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleAnchorClick = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 border-t border-dark-700">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">Nitish</h3>
            <p className="text-text-secondary mb-6 max-w-md">
              A passionate backend developer specializing in Java and Spring Boot, 
              currently expanding my skillset to include modern frontend technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Nitish-11k"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-secondary hover:text-accent-500 hover:bg-dark-800 rounded-full transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/nitish-11k"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-secondary hover:text-accent-500 hover:bg-dark-800 rounded-full transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:nitishk0014@gmail.com"
                className="p-2 text-text-secondary hover:text-accent-500 hover:bg-dark-800 rounded-full transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2 text-text-secondary">
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAnchorClick('about');
                  }}
                  className="hover:text-accent-500 transition-colors duration-200 cursor-pointer"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAnchorClick('skills');
                  }}
                  className="hover:text-accent-500 transition-colors duration-200 cursor-pointer"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAnchorClick('projects');
                  }}
                  className="hover:text-accent-500 transition-colors duration-200 cursor-pointer"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAnchorClick('experience');
                  }}
                  className="hover:text-accent-500 transition-colors duration-200 cursor-pointer"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAnchorClick('contact');
                  }}
                  className="hover:text-accent-500 transition-colors duration-200 cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4">Contact Info</h4>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-accent-500" />
                <span>nitishk0014@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} className="text-accent-500" />
                <span>Delhi, India</span>
              </li>
              <li className="flex items-center space-x-2">
                <Github size={16} className="text-accent-500" />
                <span>@Nitish-11k</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-dark-700">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-text-secondary text-sm mb-4 md:mb-0">
              © {currentYear} Nitish. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-text-secondary">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>using React & TypeScript</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-accent-500 text-dark-900 rounded-full shadow-lg hover:bg-accent-600 transition-all duration-300 transform hover:scale-110 hover:shadow-accent-500/25 z-50"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
