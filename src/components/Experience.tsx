import React, { useEffect, useState, useRef } from 'react';
import { GraduationCap, Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
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

    const element = document.getElementById('experience');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.15; // Gentle parallax effect
        setScrollY(rate);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Delhi Technical Campus",
      duration: "2022 - 2026",
      location: "Delhi, India",
      description: "Specialized in software engineering with focus on backend development, algorithms, and system design.",
      achievements: ["CGPA: 6.5/10", "Member of Coding Club", "Completed 20+ projects"]
    },
    {
      degree: "High School",
      institution: "Commercial Senior Secondary School",
      duration: "2020 - 2022",
      location: "New Delhi, India",
      description: "Science stream with Mathematics and Biology as core subjects.",
      achievements: ["Percentage: 67%"]
    }
  ];

  const experience = [
    {
      role: "Backend Developer Intern",
      company: "She&Soul",
      duration: "Jun 2025 - Aug 2025",
      location: "Remote",
      description: "Developed RESTful APIs using Java Spring Boot, implemented JWT authentication, and worked with MongoDB.",
      technologies: ["Java", "Spring Boot", "MongoDB", "JWT", "Docker"],
      achievements: ["Reduced API response time by 40%", "Implemented automated testing with 90% coverage"]
    },
    {
      role: "Freelance Developer",
      company: "Self-Employed",
      duration: "Jan 2023 - Present",
      location: "Remote",
      description: "Building custom web applications for clients, specializing in backend development and API design.",
      technologies: ["Java", "Spring Framework", "PostgreSQL", "React", "TypeScript"],
      achievements: ["Completed 15+ client projects", "Maintained 100% client satisfaction rate"]
    }
  ];

  return (
    <section id="experience" className="section-padding dark-section-alt relative overflow-hidden">
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
            backgroundImage: `url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        
        {/* Multiple Overlay Layers for Depth */}
        <div className="absolute inset-0 bg-dark-900/60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900/70 via-dark-800/50 to-dark-700/60"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent-500/20 rounded-full blur-3xl animate-pulse opacity-50"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl animate-pulse opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse opacity-50" style={{ animationDelay: '4s' }}></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-15">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #fca311 1px, transparent 0)`,
              backgroundSize: '60px 60px',
              transform: `translateY(${scrollY * 0.03}px)`
            }}
          ></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="container-max relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
            <span className="gradient-text">Education</span> & Experience
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            My academic journey and professional experience that have shaped me into the developer I am today.
          </p>
        </div>

        {/* Education Section */}
        <div className={`mb-20 transition-all duration-1000 ease-out delay-200 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-text-primary mb-4 flex items-center justify-center">
              <GraduationCap className="w-8 h-8 mr-3 text-accent-500" />
              Education
            </h3>
            <p className="text-lg text-text-secondary">My academic foundation and learning journey</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-dark-800/95 to-dark-700/95 backdrop-blur-xl rounded-2xl p-8 border border-dark-600/70 shadow-xl hover:shadow-2xl hover:shadow-accent-500/20 transition-all duration-500 transform hover:scale-105"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-accent-500/20 rounded-lg flex items-center justify-center border border-accent-500/30">
                    <GraduationCap className="w-6 h-6 text-accent-500" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-accent-500 font-medium">{edu.duration}</div>
                    <div className="text-xs text-text-secondary">{edu.location}</div>
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold text-text-primary mb-2">{edu.degree}</h4>
                <p className="text-accent-400 font-medium mb-3">{edu.institution}</p>
                <p className="text-text-secondary mb-4 leading-relaxed">{edu.description}</p>
                
                <div className="space-y-2">
                  {edu.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center text-sm text-text-secondary">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className={`transition-all duration-1000 ease-out delay-400 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-text-primary mb-4 flex items-center justify-center">
              <Briefcase className="w-8 h-8 mr-3 text-accent-500" />
              Professional Experience
            </h3>
            <p className="text-lg text-text-secondary">My journey in software development and technology</p>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-dark-800/95 to-dark-700/95 backdrop-blur-xl rounded-2xl p-8 border border-dark-600/70 shadow-xl hover:shadow-2xl hover:shadow-accent-500/20 transition-all duration-500 transform hover:scale-105"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                    <div className="w-12 h-12 bg-accent-500/20 rounded-lg flex items-center justify-center border border-accent-500/30">
                      <Briefcase className="w-6 h-6 text-accent-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-text-primary">{exp.role}</h4>
                      <p className="text-accent-400 font-medium">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center justify-end space-x-2 mb-1">
                      <Calendar className="w-4 h-4 text-accent-500" />
                      <span className="text-sm text-accent-500 font-medium">{exp.duration}</span>
                    </div>
                    <div className="flex items-center justify-end space-x-2">
                      <MapPin className="w-4 h-4 text-text-secondary" />
                      <span className="text-xs text-text-secondary">{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-text-secondary mb-6 leading-relaxed">{exp.description}</p>
                
                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-text-primary mb-3">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-accent-500/20 text-accent-400 text-sm rounded-full border border-accent-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h5 className="text-sm font-semibold text-text-primary mb-3">Key Achievements:</h5>
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center text-sm text-text-secondary">
                        <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div 
          className={`text-center mt-20 transition-all duration-1000 ease-out delay-600 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-gradient-to-r from-dark-800/95 to-dark-700/95 backdrop-blur-xl rounded-2xl p-8 border border-dark-600/70 shadow-xl">
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              Ready for the Next Chapter
            </h3>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-6">
              I'm always looking for new opportunities to learn, grow, and contribute to exciting projects. 
              Let's connect and build something amazing together!
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-accent-500/25"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
