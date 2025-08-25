import React, { useEffect, useState } from 'react';
import { ExternalLink, Github, Code, ArrowLeft, Sparkles, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsPage: React.FC = () => {
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

    const element = document.getElementById('projects-page');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Retro Arcade",
      description: "A nostalgic gaming platform built with TypeScript and React, featuring classic arcade games with modern web technologies. This project was built collaboratively with a team, showcasing my ability to work in team environments and deliver complex gaming applications.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["TypeScript", "React", "HTML5 Canvas", "CSS3", "Local Storage", "Team Collaboration"],
      features: ["Multiple classic games", "Responsive design", "Score tracking", "Sound effects", "Mobile optimized", "Team development"],
      githubUrl: "https://github.com/Nitish-11k/retroarcade",
      liveUrl: "https://retroarcade.in",
      status: "Completed",
      statusColor: "text-green-400",
      statusBg: "bg-green-500/20",
      statusIcon: <CheckCircle className="w-5 h-5" />,
      futurePlans: "Project completed successfully with team collaboration"
    },
    {
      id: 2,
      title: "Remake Agency",
      description: "A modern agency website showcasing creative services and portfolio work. Currently functional with a clean, professional design that demonstrates my ability to create business-focused websites.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Modern CSS", "Responsive Design"],
      features: ["Professional design", "Responsive layout", "Modern UI/UX", "Business focused", "Clean codebase"],
      githubUrl: "https://github.com/Nitish-11k/remake-agency",
      liveUrl: "https://remake-agency.vercel.app/",
      status: "In Development",
      statusColor: "text-yellow-400",
      statusBg: "bg-yellow-500/20",
      statusIcon: <Clock className="w-5 h-5" />,
      futurePlans: "Planning to add advanced animations and micro-interactions as I learn new techniques"
    },
    {
      id: 3,
      title: "Culture Explore",
      description: "A cultural exploration platform that showcases different cultures and traditions. Currently in active development with a focus on creating an engaging and educational user experience.",
      image: "/CE.jpg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Cultural Content", "Educational Design"],
      features: ["Cultural content", "Educational platform", "Interactive elements", "Responsive design", "Learning focused"],
      githubUrl: "https://github.com/Nitish-11k/culture-explore",
      liveUrl: "https://culture-explore.vercel.app/",
      status: "Active Development",
      statusColor: "text-blue-400",
      statusBg: "bg-blue-500/20",
      statusIcon: <Code className="w-5 h-5" />,
      futurePlans: "Adding animations and making it more unique as I learn advanced frontend techniques"
    },
    {
      id: 4,
      title: "NSquare Five",
      description: "A business and technology platform currently under development. This project represents my ongoing learning journey in frontend development and modern web technologies.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["React", "TypeScript", "Modern Web Tech", "Business Focus", "Learning Platform"],
      features: ["Business platform", "Technology focus", "Modern architecture", "Scalable design", "Learning implementation"],
      githubUrl: "https://github.com/Nitish-11k/nsquare-five",
      liveUrl: "https://nsquare-five.vercel.app/",
      status: "Learning & Building",
      statusColor: "text-purple-400",
      statusBg: "bg-purple-500/20",
      statusIcon: <Sparkles className="w-5 h-5" />,
      futurePlans: "Continuously learning and implementing new features as I expand my frontend skills"
    }
  ];

  return (
    <section id="projects-page" className="section-padding dark-section-alt relative overflow-hidden min-h-screen">
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
      </div>

      <div className="container-max relative z-10">
        {/* Header with Back Button */}
        <div className="flex items-center justify-between mb-12">
          <Link 
            to="/"
            className="inline-flex items-center px-4 py-2 bg-dark-700 text-text-secondary hover:text-accent-500 hover:bg-dark-600 rounded-lg transition-all duration-300 border border-dark-600"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
          
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              My <span className="gradient-text">Frontend Work</span>
            </h1>
            <p className="text-lg text-text-secondary">
              A showcase of my current projects and learning journey
            </p>
          </div>
          
          <div className="w-24"></div> {/* Spacer for centering */}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group dark-card hover:border-accent-500/50 transition-all duration-700 transform hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-xl h-64">
                <div 
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                  style={{ 
                    backgroundImage: `url(${project.image})`,
                    transform: `translateY(${index * 10}px)`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/40 to-transparent" />
                
                {/* Status Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium border ${project.statusBg} ${project.statusColor} flex items-center space-x-1`}>
                  {project.statusIcon}
                  <span>{project.status}</span>
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

                {/* Future Plans */}
                <div className="mb-6 p-4 bg-dark-700/50 rounded-lg border border-dark-600">
                  <h4 className="text-sm font-semibold text-text-primary mb-2 flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-accent-500" />
                    Future Plans
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {project.futurePlans}
                  </p>
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
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-accent-500 text-dark-900 hover:bg-accent-600 rounded-lg transition-all duration-300 font-medium"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Site
                    </a>
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
            Always Learning & Building
          </div>
          <p className="text-text-secondary mt-4">
            These projects represent my ongoing journey in frontend development
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
