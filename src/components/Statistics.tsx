
import { useEffect, useState, useRef } from "react";
import { useLanguage } from '@/contexts/LanguageContext';

const Statistics = () => {
  const { t } = useLanguage();
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    satisfaction: 0
  });
  
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const finalValues = {
    projects: 500,
    clients: 200,
    experience: 8,
    satisfaction: 98
  };

  const animateCounter = (key: keyof typeof counters, finalValue: number) => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepValue = finalValue / steps;
    let currentValue = 0;
    
    const timer = setInterval(() => {
      currentValue += stepValue;
      if (currentValue >= finalValue) {
        currentValue = finalValue;
        clearInterval(timer);
      }
      
      setCounters(prev => ({
        ...prev,
        [key]: Math.floor(currentValue)
      }));
    }, duration / steps);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Start animations with slight delays
          setTimeout(() => animateCounter('projects', finalValues.projects), 100);
          setTimeout(() => animateCounter('clients', finalValues.clients), 200);
          setTimeout(() => animateCounter('experience', finalValues.experience), 300);
          setTimeout(() => animateCounter('satisfaction', finalValues.satisfaction), 400);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const stats = [
    {
      key: 'projects' as keyof typeof counters,
      label: t('hero.stats.projects'),
      suffix: "+",
      icon: "🚀"
    },
    {
      key: 'clients' as keyof typeof counters,
      label: t('hero.stats.clients'),
      suffix: "+",
      icon: "👥"
    },
    {
      key: 'experience' as keyof typeof counters,
      label: t('hero.stats.experience'),
      suffix: "+",
      icon: "⭐"
    },
    {
      key: 'satisfaction' as keyof typeof counters,
      label: t('hero.stats.satisfaction'),
      suffix: "%",
      icon: "💯"
    }
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-tech-darker">
      <div className="section-container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-lg">
            {t('statistics.title')} <span className="text-tech-cyan">EzProject</span>
          </h2>
          <p className="body-lg max-w-3xl mx-auto">
            {t('statistics.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="tech-card text-center group">
              <div className="mb-6">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-5xl md:text-6xl font-bold text-tech-cyan mb-2 font-mono">
                  {counters[stat.key]}{stat.suffix}
                </div>
                <h3 className="text-xl font-semibold text-tech-text">{stat.label}</h3>
              </div>
              
              {/* Progress Bar Animation */}
              <div className="w-full bg-tech-blue rounded-full h-2 overflow-hidden">
                <div 
                  className="h-2 bg-gradient-to-r from-tech-cyan to-tech-cyan-glow rounded-full transition-all duration-2000 ease-out"
                  style={{
                    width: hasAnimated ? '100%' : '0%',
                    transitionDelay: `${index * 100}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Achievement Section */}
        <div className="mt-20 tech-card p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="heading-sm">Prestasi & Sertifikasi</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-tech-cyan rounded-full"></div>
                  <span className="text-tech-text">Microsoft Certified Azure Solutions Architect</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-tech-cyan rounded-full"></div>
                  <span className="text-tech-text">AWS Certified DevOps Engineer</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-tech-cyan rounded-full"></div>
                  <span className="text-tech-text">Google Cloud Professional Architect</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-tech-cyan rounded-full"></div>
                  <span className="text-tech-text">ISO 27001 Information Security Certified</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="heading-sm">Penghargaan</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-tech-cyan/20 rounded-lg flex items-center justify-center">
                    <span className="text-tech-cyan text-sm">🏆</span>
                  </div>
                  <div>
                    <div className="text-tech-text font-semibold">Best IT Solution Provider 2023</div>
                    <div className="text-tech-text-muted text-sm">Indonesia Technology Awards</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-tech-cyan/20 rounded-lg flex items-center justify-center">
                    <span className="text-tech-cyan text-sm">⭐</span>
                  </div>
                  <div>
                    <div className="text-tech-text font-semibold">Top Rated Software Company</div>
                    <div className="text-tech-text-muted text-sm">Clutch.co Reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
