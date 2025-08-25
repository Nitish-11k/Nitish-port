import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', isAnchor: false },
    { name: 'About', href: '/#about', isAnchor: true },
    { name: 'Skills', href: '/#skills', isAnchor: true },
    { name: 'Projects', href: '/#projects', isAnchor: true },
    { name: 'Experience', href: '/#experience', isAnchor: true },
    { name: 'Contact', href: '/#contact', isAnchor: true }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-dark-900/95 backdrop-blur-xl border-b border-dark-700/50 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="container-max">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo/Brand */}
          <a 
            href="/" 
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-2xl lg:text-3xl font-bold gradient-text cursor-pointer font-cursive"
          >
            <span className="text-4xl lg:text-5xl">P</span>ortfolio
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-text-secondary hover:text-accent-500 transition-colors duration-200 font-medium relative group cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  if (item.name === 'Home') {
                    // Always navigate to home page and scroll to top
                    navigate('/');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else if (item.isAnchor) {
                    // For anchor links, navigate to home first then scroll to section
                    if (location.pathname !== '/') {
                      navigate('/');
                      setTimeout(() => {
                        const section = item.href.split('#')[1];
                        const element = document.getElementById(section);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }, 100);
                    } else {
                      const section = item.href.split('#')[1];
                      const element = document.getElementById(section);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  } else {
                    navigate(item.href);
                  }
                }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-text-secondary hover:text-accent-500 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-dark-900/95 backdrop-blur-xl border-t border-dark-700/50">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    if (item.name === 'Home') {
                      // Always navigate to home page and scroll to top
                      navigate('/');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else if (item.isAnchor) {
                      // For anchor links, navigate to home first then scroll to section
                      if (location.pathname !== '/') {
                        navigate('/');
                        setTimeout(() => {
                          const section = item.href.split('#')[1];
                          const element = document.getElementById(section);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }, 100);
                      } else {
                        const section = item.href.split('#')[1];
                        const element = document.getElementById(section);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    } else {
                      navigate(item.href);
                    }
                  }}
                  className="block px-4 py-3 text-text-secondary hover:text-accent-500 hover:bg-dark-800/50 transition-all duration-200 rounded-lg font-medium cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
