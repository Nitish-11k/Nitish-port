import React, { useEffect, useState, useRef } from 'react';
import { GraduationCap, Code, Lightbulb, MapPin, Github } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.2; // Reduced parallax speed to prevent merging
        setScrollY(rate);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Final Year Student",
      description: "Pursuing my degree with a strong focus on software engineering and backend development"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Backend Developer",
      description: "Specializing in Java, Spring Framework, and building robust server-side applications"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Learning Frontend",
      description: "Currently expanding my skillset to include React, TypeScript, and modern web technologies"
    }
  ];

  return (
    <section id="about" className="section-padding dark-section-alt relative overflow-hidden smooth-element">
      {/* Parallax Background */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${scrollY}px)`,
          willChange: 'transform'
        }}
      >
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        
        {/* Multiple Overlay Layers for Depth - Reduced opacity for better image visibility */}
        <div className="absolute inset-0 bg-dark-900/50"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900/60 via-dark-800/40 to-dark-700/50"></div>
        
        {/* Floating Tech Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent-500/15 rounded-full blur-3xl animate-pulse opacity-40"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-primary-500/15 rounded-full blur-2xl animate-pulse opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-500/15 rounded-full blur-3xl animate-pulse opacity-40" style={{ animationDelay: '4s' }}></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #fca311 1px, transparent 0)`,
              backgroundSize: '60px 60px',
              transform: `translateY(${scrollY * 0.05}px)` // Reduced movement
            }}
          ></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="container-max relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-6">
            My programming journey started with Java, and I've since become proficient in Spring Framework, JWT authentication, and building scalable REST APIs.
          </p>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            While I'm primarily focused on backend development, I'm actively expanding my skillset to include frontend technologies like React and TypeScript. I believe in writing clean, maintainable code and creating robust systems that can handle real-world challenges.
          </p>
        </div>

        {/* Main Content Grid - Left Side Cards + Right Side Stats */}
        <div className={`grid lg:grid-cols-2 gap-16 mb-20 transition-all duration-1000 ease-out delay-200 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Left Side - Three Highlight Cards */}
          <div className="space-y-8">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-dark-800/90 to-dark-700/90 backdrop-blur-xl rounded-2xl p-8 border border-dark-600/70 shadow-xl hover:shadow-2xl hover:shadow-accent-500/20 transition-all duration-500 transform hover:scale-105"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-accent-500/20 rounded-lg flex items-center justify-center border border-accent-500/30">
                    <div className="text-accent-500">
                      {highlight.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-text-primary">{highlight.title}</h3>
                </div>
                <p className="text-lg text-text-secondary leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>

          {/* Right Side - Statistics Panel */}
          <div className="bg-gradient-to-r from-dark-800/90 to-dark-700/90 backdrop-blur-xl rounded-2xl p-6 border border-dark-600/70 shadow-xl">
            <h3 className="text-xl font-semibold text-text-primary mb-4 text-center">Quick Stats</h3>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="text-center p-3 bg-dark-600/50 backdrop-blur-sm rounded-lg border border-dark-500/50 hover:border-accent-500/30 transition-all duration-300">
                <div className="text-lg font-bold text-accent-500">3+</div>
                <div className="text-xs text-text-secondary">Years Coding</div>
              </div>
              <div className="text-center p-3 bg-dark-600/50 backdrop-blur-sm rounded-lg border border-dark-500/50 hover:border-accent-500/30 transition-all duration-300">
                <div className="text-lg font-bold text-accent-500">20+</div>
                <div className="text-xs text-text-secondary">GitHub Repos</div>
              </div>
              <div className="text-center p-3 bg-dark-600/50 backdrop-blur-sm rounded-lg border border-dark-500/50 hover:border-accent-500/30 transition-all duration-300">
                <div className="text-lg font-bold text-accent-500">5+</div>
                <div className="text-xs text-text-secondary">Technologies</div>
              </div>
              <div className="text-center p-3 bg-dark-600/50 backdrop-blur-sm rounded-lg border border-dark-500/50 hover:border-accent-500/30 transition-all duration-300">
                <div className="text-lg font-bold text-accent-500">100%</div>
                <div className="text-xs text-text-secondary">Dedication</div>
              </div>
            </div>

            {/* Location and GitHub */}
            <div className="text-center pt-3 border-t border-dark-500/50">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <MapPin className="w-4 h-4 text-accent-500" />
                <span className="text-xs text-text-secondary">Delhi, India</span>
              </div>
              <a
                href="https://github.com/Nitish-11k"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-accent-500 hover:text-accent-400 transition-colors duration-200"
              >
                <Github className="w-4 h-4" />
                <span className="text-xs font-medium">@Nitish-11k</span>
              </a>
              
              {/* Resume Download */}
              <div className="mt-2">
                <div className="text-center mb-2">
                  <span className="text-sm text-accent-400 animate-pulse">Choose your option</span>
                  <div className="text-accent-500 text-lg">↓</div>
                </div>
                
                {/* View Online Button */}
                <a
                  href="/Nitish_backend_resume_page-0001.jpeg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-accent-500 hover:text-accent-400 transition-colors duration-200 hover:scale-105 transform mb-2 w-full justify-center"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">View Resume Online</span>
                </a>
                
                {/* Download Button */}
                <a
                  href="/Nitish_backend_resume_page-0001.jpeg"
                  download="Nitish_Backend_Resume.jpeg"
                  className="inline-flex items-center space-x-2 text-accent-500 hover:text-accent-400 transition-colors duration-200 hover:scale-105 transform w-full justify-center"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">Download Resume</span>
                </a>
              </div>
              
              {/* Inspirational Quote */}
              <div className="mt-3 pt-3 border-t border-dark-500/50 flex-1 flex items-center justify-center min-h-[80px]">
                <div className="text-center">
                  <p className="text-sm text-text-secondary italic font-cursive leading-relaxed px-2">
                    "Code may build products,<br />
                    but curiosity builds developers."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Development Philosophy Box */}
        <div 
          className={`text-center transition-all duration-1000 ease-out delay-600 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-gradient-to-r from-dark-800/90 to-dark-700/90 backdrop-blur-xl rounded-2xl p-8 border border-dark-600/70 shadow-xl">
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              My Development Philosophy
            </h3>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-6">
              I believe in writing clean, maintainable code that solves real problems. Every project is an opportunity 
              to learn something new and push the boundaries of what's possible with technology.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-accent-500/20 text-accent-400 rounded-lg border border-accent-500/30 backdrop-blur-sm">
              <Code className="w-5 h-5 mr-2" />
              <span className="font-medium">Code with Purpose, Build with Passion</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
