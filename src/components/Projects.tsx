import React, { useEffect, useState } from 'react';
import { ExternalLink, Github, Star, GitBranch, Calendar, Code } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  stars: number;
  forks: number;
  lastUpdated: string;
  category: string;
}

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "Retro Arcade",
      description: "A nostalgic gaming platform built with TypeScript and React, featuring classic arcade games with modern web technologies.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["TypeScript", "React", "HTML5 Canvas", "CSS3", "Local Storage"],
      features: ["Multiple classic games", "Responsive design", "Score tracking", "Sound effects", "Mobile optimized"],
      githubUrl: "https://github.com/Nitish-11k/retroarcade",
      liveUrl: "https://retroarcade.in",
      stars: 15,
      forks: 8,
      lastUpdated: "2024-01-15",
      category: "Frontend"
    },
    {
      id: 2,
      title: "Spring Boot E-Commerce API",
      description: "A robust RESTful API for e-commerce applications built with Spring Boot, featuring JWT authentication and microservices architecture.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL", "Maven"],
      features: ["User authentication", "Product management", "Order processing", "Payment integration", "Admin dashboard"],
      githubUrl: "https://github.com/Nitish-11k/ecommerce-api",
      stars: 23,
      forks: 12,
      lastUpdated: "2024-02-20",
      category: "Backend"
    },
    {
      id: 3,
      title: "MongoDB Analytics Dashboard",
      description: "Real-time analytics dashboard for MongoDB databases with interactive charts and data visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["MongoDB", "Express.js", "Node.js", "Chart.js", "Socket.io", "Docker"],
      features: ["Real-time monitoring", "Custom queries", "Performance metrics", "Alert system", "Export functionality"],
      githubUrl: "https://github.com/Nitish-11k/mongodb-dashboard",
      stars: 18,
      forks: 9,
      lastUpdated: "2024-01-30",
      category: "Full Stack"
    },
    {
      id: 4,
      title: "Firebase Authentication System",
      description: "Complete authentication system with Firebase, featuring social login, email verification, and role-based access control.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["Firebase", "React", "TypeScript", "Tailwind CSS", "React Router"],
      features: ["Social login", "Email verification", "Password reset", "Role management", "Secure routes"],
      githubUrl: "https://github.com/Nitish-11k/firebase-auth",
      stars: 12,
      forks: 6,
      lastUpdated: "2024-02-10",
      category: "Frontend"
    },
    {
      id: 5,
      title: "Supabase Real-time Chat",
      description: "Real-time chat application built with Supabase, featuring instant messaging, file sharing, and user presence.",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["Supabase", "React", "TypeScript", "Tailwind CSS", "Real-time subscriptions"],
      features: ["Instant messaging", "File sharing", "User presence", "Message history", "Push notifications"],
      githubUrl: "https://github.com/Nitish-11k/supabase-chat",
      stars: 9,
      forks: 4,
      lastUpdated: "2024-02-05",
      category: "Full Stack"
    },
    {
      id: 6,
      title: "Java Microservices Architecture",
      description: "Scalable microservices architecture using Spring Cloud, Docker, and Kubernetes for enterprise applications.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["Java", "Spring Cloud", "Docker", "Kubernetes", "Apache Kafka", "Redis"],
      features: ["Service discovery", "Load balancing", "Circuit breaker", "Distributed tracing", "Auto-scaling"],
      githubUrl: "https://github.com/Nitish-11k/microservices-arch",
      stars: 31,
      forks: 18,
      lastUpdated: "2024-02-25",
      category: "Backend"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Frontend': return 'text-blue-400';
      case 'Backend': return 'text-green-400';
      case 'Full Stack': return 'text-purple-400';
      default: return 'text-accent-400';
    }
  };

  const getCategoryBg = (category: string) => {
    switch (category) {
      case 'Frontend': return 'bg-blue-500/20 border-blue-500/30';
      case 'Backend': return 'bg-green-500/20 border-green-500/30';
      case 'Full Stack': return 'bg-purple-500/20 border-purple-500/30';
      default: return 'bg-accent-500/20 border-accent-500/30';
    }
  };

  return (
    <section id="projects" className="section-padding dark-section-alt relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-20 left-10 w-32 h-32 bg-accent-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '0s' }}
        ></div>
        <div 
          className="absolute top-40 right-20 w-24 h-24 bg-primary-500/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
        <div 
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '4s' }}
        ></div>
        
        {/* Floating Tech Icons */}
        <div className="absolute top-1/4 right-1/4 text-6xl opacity-5 animate-float">☕</div>
        <div className="absolute top-1/3 left-1/3 text-5xl opacity-5 animate-float" style={{ animationDelay: '1s' }}>🍃</div>
        <div className="absolute bottom-1/3 right-1/3 text-4xl opacity-5 animate-float" style={{ animationDelay: '2s' }}>⚡</div>
        <div className="absolute bottom-1/4 left-1/4 text-5xl opacity-5 animate-float" style={{ animationDelay: '3s' }}>🐳</div>
      </div>

      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-500/20 rounded-full mb-4">
            <Code className="w-8 h-8 text-accent-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A showcase of my development work, from backend APIs to full-stack applications
          </p>
        </div>

        {/* Projects Grid with Parallax */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group dark-card hover:border-accent-500/50 transition-all duration-700 transform hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Image with Parallax Effect */}
              <div className="relative overflow-hidden rounded-t-xl h-64">
                <div 
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                  style={{ 
                    backgroundImage: `url(${project.image})`,
                    transform: `translateY(${index * 10}px)`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/40 to-transparent" />
                
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium border ${getCategoryBg(project.category)} ${getCategoryColor(project.category)}`}>
                  {project.category}
                </div>
                
                {/* Project Stats Overlay */}
                <div className="absolute bottom-4 right-4 flex items-center space-x-4 text-text-primary text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <GitBranch className="w-4 h-4 text-blue-400" />
                    <span>{project.forks}</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-500 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-dark-700 text-text-secondary text-xs rounded-md border border-dark-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-text-primary mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-text-secondary text-sm flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent-500 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Links */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-dark-700 text-text-secondary hover:text-accent-500 hover:bg-dark-600 rounded-lg transition-all duration-300 border border-dark-600"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-accent-500 text-dark-900 hover:bg-accent-600 rounded-lg transition-all duration-300 font-medium"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                  
                  <div className="text-right text-xs text-text-muted">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(project.lastUpdated).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-500 to-primary-500 text-dark-900 font-semibold rounded-lg hover:from-accent-600 hover:to-primary-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-accent-500/25">
            <Code className="w-5 h-5 mr-2" />
            View More Projects on GitHub
          </div>
          <p className="text-text-secondary mt-4">
            Explore my complete portfolio of open-source contributions and personal projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
