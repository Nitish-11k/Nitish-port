import React from 'react';
import { GraduationCap, Code, Award, Calendar, MapPin, BookOpen } from 'lucide-react';

const Experience: React.FC = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Delhi Technological University",
      duration: "2020 - 2024",
      location: "Delhi, India",
      description: "Specialized in Software Engineering with focus on Backend Development and Database Systems",
      achievements: ["CGPA: 8.5/10", "Data Structures & Algorithms", "Database Management Systems", "Software Engineering"]
    }
  ];

  const experience = [
    {
      role: "Backend Developer Intern",
      company: "TechCorp Solutions",
      duration: "May 2023 - Aug 2023",
      location: "Delhi, India",
      description: "Developed and maintained RESTful APIs using Java and Spring Boot, implemented JWT authentication, and optimized database queries.",
      achievements: [
        "Built 3 REST APIs handling 10K+ requests daily",
        "Reduced API response time by 40% through query optimization",
        "Implemented JWT authentication for 1000+ users",
        "Collaborated with frontend team using Git and Agile methodologies"
      ]
    },
    {
      role: "Full Stack Developer (Freelance)",
      company: "Various Clients",
      duration: "Jan 2023 - Present",
      location: "Remote",
      description: "Developed full-stack web applications using modern technologies, focusing on scalable backend solutions and responsive frontends.",
      achievements: [
        "Delivered 5+ client projects on time and within budget",
        "Built e-commerce platform with 500+ products",
        "Implemented real-time chat system using WebSockets",
        "Created responsive admin dashboards with data visualization"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding dark-section">
      <div className="container-max">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-500/20 rounded-full mb-4">
            <BookOpen className="w-8 h-8 text-accent-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Education & Experience
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            My academic journey and professional development experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 bg-accent-500/20 rounded-full">
                <GraduationCap className="w-6 h-6 text-accent-500" />
              </div>
              <h3 className="text-2xl font-semibold text-text-primary">
                Education
              </h3>
            </div>

            {education.map((edu, index) => (
              <div key={index} className="dark-card p-6 mb-6 hover:border-accent-500/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-text-primary mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-accent-500 font-medium mb-1">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 text-text-secondary text-sm mb-1">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-text-secondary text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {edu.description}
                </p>
                
                <div className="grid grid-cols-2 gap-2">
                  {edu.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <Award className="w-4 h-4 text-accent-500 flex-shrink-0" />
                      <span className="text-text-secondary">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Experience Section */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 bg-accent-500/20 rounded-full">
                <Code className="w-6 h-6 text-accent-500" />
              </div>
              <h3 className="text-2xl font-semibold text-text-primary">
                Development Experience
              </h3>
            </div>

            {experience.map((exp, index) => (
              <div key={index} className="dark-card p-6 mb-6 hover:border-accent-500/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-text-primary mb-2">
                      {exp.role}
                    </h4>
                    <p className="text-accent-500 font-medium mb-1">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 text-text-secondary text-sm mb-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-text-secondary text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-text-secondary">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-dark-800 to-dark-700 rounded-2xl p-8 border border-dark-600">
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              Current Focus Areas
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-500 mb-2">Backend</div>
                <p className="text-text-secondary">Java, Spring Boot, Microservices</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-500 mb-2">Frontend</div>
                <p className="text-text-secondary">React, TypeScript, Modern CSS</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-500 mb-2">DevOps</div>
                <p className="text-text-secondary">Docker, CI/CD, Cloud Platforms</p>
              </div>
            </div>
            <p className="text-text-secondary">
              Continuously learning and expanding my skillset to become a well-rounded full-stack developer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
