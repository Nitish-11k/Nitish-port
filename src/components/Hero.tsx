import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden dark-section pt-20 lg:pt-24 smooth-element"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #fca311 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            {/* Main Heading with Staggered Animation */}
            <div className={`transition-all duration-1000 ease-out transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary mb-4 lg:mb-6 leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text animate-glow">Nitish</span>
              </h1>
            </div>
            
            {/* Subtitle with Delay */}
            <div className={`transition-all duration-1000 ease-out delay-200 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-text-secondary mb-4 lg:mb-8">
                Backend Developer & Final Year Student
              </h2>
            </div>
            
            {/* Description with Delay */}
            <div className={`transition-all duration-1000 ease-out delay-400 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <p className="text-base sm:text-lg lg:text-xl text-text-secondary mb-8 lg:mb-12 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                Specialized in building robust backend applications with Java and Spring Boot. 
                Currently expanding my skillset to include modern frontend technologies and working towards becoming a full-stack developer.
              </p>
            </div>

            {/* CTA Buttons with Delay */}
            <div className={`transition-all duration-1000 ease-out delay-600 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 lg:mb-16">
                <button
                  onClick={scrollToAbout}
                  className="px-8 py-4 bg-accent-500 text-dark-900 font-semibold rounded-lg hover:bg-accent-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-accent-500/50 animate-glow"
                >
                  Learn More About Me
                </button>
                <a
                  href="#projects"
                  className="px-8 py-4 border-2 border-accent-500 text-accent-500 font-semibold rounded-lg hover:bg-accent-500 hover:text-dark-900 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  View My Work
                </a>
              </div>
            </div>

            {/* Social Links with Delay */}
            <div className={`transition-all duration-1000 ease-out delay-800 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <div className="flex justify-center lg:justify-start space-x-6 mb-8 lg:mb-12">
                <a
                  href="https://github.com/Nitish-11k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-text-secondary hover:text-accent-500 hover:bg-dark-800 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/nitish-11k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-text-secondary hover:text-accent-500 hover:bg-dark-800 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:nitishk0014@gmail.com"
                  className="p-3 text-text-secondary hover:text-accent-500 hover:bg-dark-800 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className={`transition-all duration-1000 ease-out delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
            }`}>
              <div className="relative">
                {/* Glowing Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-primary-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                
                {/* Main Image Container */}
                <div className="relative bg-dark-800 rounded-full p-2 shadow-2xl hover:shadow-accent-500/50 transition-all duration-500 transform hover:scale-105 border border-dark-600">
                  <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-dark-700 shadow-xl">
                    <img
                      src="/ine.jpeg"
                      alt="Nitish - Backend Developer"
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                      }`}
                      onLoad={() => setImageLoaded(true)}
                    />
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-500 rounded-full animate-bounce"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute top-1/2 -left-6 w-4 h-4 bg-accent-400 rounded-full animate-ping"></div>
                </div>
                
                {/* Floating Tech Icons */}
                <div className="absolute -top-8 -left-8 bg-dark-800 rounded-lg p-3 shadow-lg animate-float border border-dark-600">
                  <span className="text-2xl">☕</span>
                </div>
                <div className="absolute -bottom-8 -right-8 bg-dark-800 rounded-lg p-3 shadow-lg animate-float border border-dark-600" style={{ animationDelay: '1s' }}>
                  <span className="text-2xl">🍃</span>
                </div>
                <div className="absolute top-1/3 -right-12 bg-dark-800 rounded-lg p-3 shadow-lg animate-float border border-dark-600" style={{ animationDelay: '2s' }}>
                  <span className="text-2xl">⚡</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator with Animation */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out delay-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <button
            onClick={scrollToAbout}
            className="p-2 text-text-secondary hover:text-accent-500 transition-colors duration-300 animate-bounce-slow"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
