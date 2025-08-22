
import { Shield, Zap, Users, Trophy, Clock, Headphones } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const WhyChooseUs = () => {
  const { t } = useLanguage();
  const features = [
    {
      icon: Shield,
      title: t('whyChoose.security.title'),
      description: t('whyChoose.security.description')
    },
    {
      icon: Zap,
      title: t('whyChoose.performance.title'),
      description: t('whyChoose.performance.description')
    },
    {
      icon: Users,
      title: t('whyChoose.expert.title'),
      description: t('whyChoose.expert.description')
    },
    {
      icon: Trophy,
      title: t('whyChoose.quality.title'),
      description: t('whyChoose.quality.description')
    },
    {
      icon: Clock,
      title: t('whyChoose.onTime.title'),
      description: t('whyChoose.onTime.description')
    },
    {
      icon: Headphones,
      title: t('whyChoose.support.title'),
      description: t('whyChoose.support.description')
    }
  ];

  return (
    <section className="section-padding bg-tech-dark">
      <div className="section-container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-lg">
            {t('whyChoose.title')} <span className="text-tech-cyan">EzProject</span>?
          </h2>
          <p className="body-lg max-w-3xl mx-auto">
            {t('whyChoose.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="tech-card group text-center">
              <div className="mb-6">
                <div className="w-20 h-20 bg-tech-cyan/20 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-tech-cyan/30 transition-all duration-300">
                  <feature.icon className="h-10 w-10 text-tech-cyan" />
                </div>
                <h3 className="text-xl font-bold text-tech-text mb-3">{feature.title}</h3>
                <p className="text-tech-text-muted">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-20">
          <div className="tech-card p-12 text-center">
            <h3 className="heading-sm mb-6">
              {t('about.whyChooseUs.consultation.title')}
            </h3>
            <p className="body-md mb-8 max-w-2xl mx-auto">
              {t('about.whyChooseUs.consultation.description')}
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-tech-cyan mb-2">15+</div>
                <div className="text-tech-text-muted">{t('about.whyChooseUs.consultation.project')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-tech-cyan mb-2">100%</div>
                <div className="text-tech-text-muted">{t('about.whyChooseUs.consultation.satisfaction')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-tech-cyan mb-2">24/7</div>
                <div className="text-tech-text-muted">{t('about.whyChooseUs.consultation.support')}</div>
              </div>
            </div>

            <a href="#contact" className="btn-glow">
              {t('about.whyChooseUs.consultation.start')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
