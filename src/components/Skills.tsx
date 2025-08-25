import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Star, Github, ExternalLink, Code } from 'lucide-react';

interface Repository {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  html_url: string;
}

interface SkillData {
  name: string;
  level: number;
  icon: string;
  experience: string;
  repos: number;
  lastUsed: string;
  category: string;
}

interface GitHubStats {
  repositories: number;
  followers: number;
  stars: number;
  focus: string;
}

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<SkillData[]>([]);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [githubStats, setGitHubStats] = useState<GitHubStats>({
    repositories: 0,
    followers: 0,
    stars: 0,
    focus: 'Backend Development'
  });

  const parallaxRef = useRef<HTMLDivElement>(null);

  const fetchGitHubData = async () => {
    try {
      const [reposResponse, userResponse] = await Promise.all([
        fetch('https://api.github.com/users/Nitish-11k/repos?sort=updated&per_page=100'),
        fetch('https://api.github.com/users/Nitish-11k')
      ]);

      if (reposResponse.ok && userResponse.ok) {
        const reposData = await reposResponse.json();
        const userData = await userResponse.json();

        setRepositories(reposData);
        setGitHubStats({
          repositories: userData.public_repos,
          followers: userData.followers,
          stars: reposData.reduce((sum: number, repo: any) => sum + repo.stargazers_count, 0),
          focus: 'Backend Development with Java & Spring'
        });

        // Process skills from repositories
        const skillMap = new Map<string, { repos: number; lastUsed: string; languages: string[] }>();
        
        reposData.forEach((repo: any) => {
          if (repo.language) {
            const existing = skillMap.get(repo.language);
            if (existing) {
              existing.repos++;
              if (new Date(repo.updated_at) > new Date(existing.lastUsed)) {
                existing.lastUsed = repo.updated_at;
              }
            } else {
              skillMap.set(repo.language, {
                repos: 1,
                lastUsed: repo.updated_at,
                languages: [repo.language]
              });
            }
          }
        });

        // Convert to skill data with icons and categories
        const skillsData: SkillData[] = Array.from(skillMap.entries()).map(([language, data]) => {
          const skillInfo = getSkillInfo(language);
          const daysSinceUpdate = Math.floor((Date.now() - new Date(data.lastUsed).getTime()) / (1000 * 60 * 60 * 24));
          
          return {
            name: language,
            level: Math.min(100, Math.max(20, 100 - daysSinceUpdate + data.repos * 5)),
            icon: skillInfo.icon,
            experience: skillInfo.experience,
            repos: data.repos,
            lastUsed: data.lastUsed,
            category: skillInfo.category
          };
        });

        // Sort by level and repos
        skillsData.sort((a, b) => b.level - a.level || b.repos - a.repos);
        setSkills(skillsData);
      }
    } catch (error) {
      console.error('Error fetching GitHub data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3; // Smooth parallax speed
        setScrollY(rate);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);



  const getSkillInfo = (language: string) => {
    const skillMap: { [key: string]: { icon: string; experience: string; category: string } } = {
      'Java': { icon: '☕', experience: '3+ years', category: 'Backend' },
      'JavaScript': { icon: '⚡', experience: '2+ years', category: 'Frontend' },
      'TypeScript': { icon: '🔷', experience: '1+ year', category: 'Frontend' },
      'Python': { icon: '🐍', experience: '2+ years', category: 'Backend' },
      'HTML': { icon: '🌐', experience: '2+ years', category: 'Frontend' },
      'CSS': { icon: '🎨', experience: '2+ years', category: 'Frontend' },
      'SQL': { icon: '🗄️', experience: '2+ years', category: 'Database' },
      'Shell': { icon: '🐚', experience: '1+ year', category: 'DevOps' },
      'Dockerfile': { icon: '🐳', experience: '1+ year', category: 'DevOps' },
      'YAML': { icon: '📄', experience: '1+ year', category: 'DevOps' }
    };
    
    return skillMap[language] || { icon: '💻', experience: '1+ year', category: 'Other' };
  };

  const getFallbackSkills = (): SkillData[] => [
    { name: 'Java', level: 95, icon: '☕', experience: '3+ years', repos: 8, lastUsed: new Date().toISOString(), category: 'Backend' },
    { name: 'Spring Boot', level: 90, icon: '🍃', experience: '2+ years', repos: 6, lastUsed: new Date().toISOString(), category: 'Backend' },
    { name: 'JavaScript', level: 75, icon: '⚡', experience: '2+ years', repos: 5, lastUsed: new Date().toISOString(), category: 'Frontend' },
    { name: 'TypeScript', level: 70, icon: '🔷', experience: '1+ year', repos: 4, lastUsed: new Date().toISOString(), category: 'Frontend' },
    { name: 'MongoDB', level: 80, icon: '🍃', experience: '2+ years', repos: 4, lastUsed: new Date().toISOString(), category: 'Database' },
    { name: 'React', level: 65, icon: '⚛️', experience: '1+ year', repos: 3, lastUsed: new Date().toISOString(), category: 'Frontend' }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  };

  // Typography-style Skill Progress Component
  const TypographySkillProgress: React.FC<{ skill: SkillData; index: number }> = ({ skill, index }) => {
    const barHeight = (skill.level / 100) * 120; // Max height 120px
    const isEven = index % 2 === 0;
    
    return (
      <div className={`relative group transition-all duration-500 hover:scale-105 ${
        isEven ? 'animate-float' : 'animate-float'
      }`} style={{ animationDelay: `${index * 0.2}s` }}>
        {/* Progress Bar Container */}
        <div className="relative">
          {/* Background Bar */}
          <div className="w-16 h-32 bg-dark-600 rounded-lg border border-dark-500">
            {/* Progress Fill */}
            <div 
              className="w-full bg-gradient-to-t from-accent-500 to-accent-400 rounded-lg transition-all duration-1000 ease-out"
              style={{ height: `${barHeight}px` }}
            />
            
            {/* Progress Line with Arrow */}
            <div className="absolute bottom-0 left-0 w-full">
              <svg 
                width="64" 
                height="128" 
                viewBox="0 0 64 128" 
                className="absolute inset-0"
              >
                {/* Trend Line */}
                <path
                  d={`M 8 ${128 - barHeight + 20} Q 32 ${128 - barHeight + 10} 56 ${128 - barHeight}`}
                  stroke="#fca311"
                  strokeWidth="3"
                  fill="none"
                  className="animate-pulse"
                />
                {/* Arrow */}
                <path
                  d={`M 56 ${128 - barHeight} L 50 ${128 - barHeight - 8} L 56 ${128 - barHeight - 16}`}
                  stroke="#fca311"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </div>
          </div>
          
          {/* Climbing Figure */}
          <div className="absolute -right-2 -bottom-2 transform rotate-12">
            <div className="w-8 h-8 bg-dark-800 rounded-full border-2 border-accent-500 flex items-center justify-center">
              <span className="text-xs text-accent-500 font-bold">👨‍💻</span>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-3 -left-3 w-6 h-6 bg-accent-500 rounded-full animate-bounce opacity-80"></div>
          <div className="absolute -bottom-3 -right-3 w-4 h-4 bg-primary-500 rounded-full animate-ping"></div>
        </div>
        
        {/* Skill Info */}
        <div className="mt-4 text-center">
          <div className="text-2xl mb-2">{skill.icon}</div>
          <div className="font-semibold text-text-primary text-sm mb-1">{skill.name}</div>
          <div className="text-lg font-bold text-accent-500">{skill.level}%</div>
          <div className="text-xs text-text-secondary">{skill.repos} repos</div>
          <div className="text-xs text-text-muted mt-1">{skill.category}</div>
        </div>
        
        {/* Glow Effect on Hover */}
        <div className="absolute inset-0 bg-accent-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
      </div>
    );
  };

  return (
    <section id="skills" className="section-padding dark-section relative overflow-hidden">
      {/* Animated Background with Parallax */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${scrollY}px)`,
          willChange: 'transform'
        }}
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-80"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        
        {/* Gradient Overlay - Much lighter for better image visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900/20 via-dark-800/15 to-dark-700/20"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #fca311 1px, transparent 0)`,
              backgroundSize: '80px 80px',
              transform: `translateY(${scrollY * 0.1}px)`
            }}
          ></div>
        </div>
        
        {/* Floating Tech Icons with Parallax */}
        <div className="absolute top-20 left-10 text-6xl opacity-5 animate-float" style={{ transform: `translateY(${scrollY * 0.2}px)` }}>☕</div>
        <div className="absolute top-1/3 left-1/4 text-5xl opacity-5 animate-float" style={{ transform: `translateY(${scrollY * 0.3}px)`, animationDelay: '1s' }}>🍃</div>
        <div className="absolute bottom-1/3 right-1/4 text-4xl opacity-5 animate-float" style={{ transform: `translateY(${scrollY * 0.25}px)`, animationDelay: '2s' }}>⚡</div>
        <div className="absolute bottom-1/4 left-1/4 text-5xl opacity-5 animate-float" style={{ transform: `translateY(${scrollY * 0.35}px)`, animationDelay: '3s' }}>🐳</div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-accent-500/30 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                transform: `translateY(${scrollY * (0.1 + Math.random() * 0.2)}px)`
              }}
            />
          ))}
        </div>
        
        {/* Moving Waves Effect */}
        <div className="absolute bottom-0 left-0 w-full h-32 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="#fca311"
              opacity="0.3"
              style={{
                transform: `translateX(${scrollY * 0.1}px)`,
                willChange: 'transform'
              }}
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.46,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              fill="#fca311"
              opacity="0.2"
              style={{
                transform: `translateX(${scrollY * 0.15}px)`,
                willChange: 'transform'
              }}
            />
          </svg>
        </div>
      </div>

      {/* Content Container */}
      <div className="container-max relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-500/20 rounded-full mb-4 backdrop-blur-sm border border-accent-500/30">
            <Code className="w-8 h-8 text-accent-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            My technical skills dynamically fetched from GitHub, showing real-time expertise levels and project activity
          </p>
        </div>

        {/* GitHub Stats Overview */}
        <div className={`bg-gradient-to-r from-dark-800/90 to-dark-700/90 backdrop-blur-xl rounded-2xl p-8 mb-16 border border-dark-600/70 shadow-2xl transition-all duration-1000 ease-out delay-200 transform ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-500/20 rounded-full mb-4">
              <TrendingUp className="w-8 h-8 text-accent-500" />
            </div>
            <h3 className="text-2xl font-semibold text-text-primary mb-2">
              GitHub Profile Overview
            </h3>
            <p className="text-text-secondary">
              Real metrics from my development journey
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-500 mb-2">{githubStats.repositories}</div>
              <div className="text-sm text-text-secondary">Repositories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-500 mb-2">{githubStats.followers}</div>
              <div className="text-sm text-text-secondary">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-500 mb-2">{githubStats.stars}</div>
              <div className="text-sm text-text-secondary">Stars</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-500 mb-2">🇮🇳</div>
              <div className="text-sm text-text-secondary">Delhi, India</div>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-accent-400 font-medium">
              🎯 {githubStats.focus}
            </p>
          </div>
        </div>

        {/* Typography-style Skills Visualization */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-500/20 rounded-full mb-4">
              <Github className="w-8 h-8 text-accent-500 animate-spin" />
            </div>
            <p className="text-text-secondary">Fetching skills from GitHub...</p>
          </div>
        ) : (
          <div className={`mb-16 transition-all duration-1000 ease-out delay-400 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold text-text-primary mb-4">
                Typography Skills Progress
              </h3>
              <p className="text-text-secondary">
                Interactive progress bars showing my expertise levels with climbing figures
              </p>
            </div>
            
            {/* Typography Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-items-center">
              {skills.slice(0, 15).map((skill, index) => (
                <div 
                  key={index} 
                  className={`transition-all duration-700 ease-out transform ${
                    isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-75'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <TypographySkillProgress skill={skill} index={index} />
                </div>
              ))}
            </div>
            
            {/* Skills Summary */}
            <div className={`mt-12 text-center transition-all duration-1000 ease-out delay-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}>
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-500 to-primary-500 text-dark-900 rounded-lg">
                <Star className="w-5 h-5 mr-2" />
                <span className="font-medium">
                  {skills.length} Skills • {skills.reduce((sum, skill) => sum + skill.repos, 0)} Total Repositories
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Top Repositories */}
        {repositories.length > 0 && (
          <div className={`bg-gradient-to-r from-dark-800/90 to-dark-700/90 backdrop-blur-xl rounded-2xl p-8 mb-16 border border-dark-600/70 shadow-2xl transition-all duration-1000 ease-out delay-600 transform ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-500/20 rounded-full mb-4">
                <Star className="w-8 h-8 text-accent-500" />
              </div>
              <h3 className="text-2xl font-semibold text-text-primary mb-2">
                Top Repositories
              </h3>
              <p className="text-text-secondary">
                My most active and popular projects
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {repositories.slice(0, 6).map((repo, index) => (
                <div
                  key={index}
                  className={`bg-dark-600/50 backdrop-blur-sm rounded-lg p-6 border border-dark-500 hover:bg-dark-600 hover:border-accent-500/50 transition-all duration-500 transform hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-text-primary text-lg">
                      {repo.name}
                    </h4>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-500 hover:text-accent-400 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  
                  {repo.description && (
                    <p className="text-text-secondary text-sm mb-3 line-clamp-2">
                      {repo.description}
                    </p>
                  )}
                  
                  <div className="flex items-center justify-between text-sm text-text-muted">
                    <div className="flex items-center space-x-4">
                      {repo.language && (
                        <span className="flex items-center space-x-1">
                          <span className="w-3 h-3 bg-accent-500 rounded-full"></span>
                          <span>{repo.language}</span>
                        </span>
                      )}
                      <span>⭐ {repo.stargazers_count}</span>
                      <span>🍴 {repo.forks_count}</span>
                    </div>
                    <span>{formatDate(repo.updated_at)}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-6">
              <a
                href="https://github.com/Nitish-11k?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-accent-500 text-dark-900 font-semibold rounded-lg hover:bg-accent-600 transition-all duration-300"
              >
                <Github className="w-5 h-5 mr-2" />
                View All Repositories
              </a>
            </div>
          </div>
        )}

        {/* Learning Journey */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-text-primary mb-4">
            Always Learning & Growing
          </h3>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-6">
            Currently diving into <strong className="text-accent-500">Frontend Development</strong> with React and TypeScript, while continuing to 
            expand my knowledge in cloud architecture, microservices, and advanced Java patterns. Working towards 
            becoming a full-stack developer!
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-accent-500/20 text-accent-400 rounded-lg border border-accent-500/30">
            <Star className="w-5 h-5 mr-2" />
            <span className="font-medium">Focusing on Backend Development using Java</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
