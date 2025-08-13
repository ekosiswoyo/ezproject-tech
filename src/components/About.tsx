
import { Target, Eye, Award } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="section-padding bg-tech-darker">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="heading-lg">
                {t('about.title')} <span className="text-tech-cyan">EzProject</span>
              </h2>
              <p className="body-lg">
                {t('about.description1')}
              </p>
              <p className="body-md">
                {t('about.description2')}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="tech-card">
                <Target className="h-8 w-8 text-tech-cyan mb-4" />
                <h3 className="text-xl font-semibold text-tech-text mb-2">{t('about.mission.title')}</h3>
                <p className="text-tech-text-muted">
                  {t('about.mission.description')}
                </p>
              </div>

              <div className="tech-card">
                <Eye className="h-8 w-8 text-tech-cyan mb-4" />
                <h3 className="text-xl font-semibold text-tech-text mb-2">{t('about.vision.title')}</h3>
                <p className="text-tech-text-muted">
                  {t('about.vision.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="tech-card p-8 space-y-6">
              <div className="flex items-center space-x-4">
                <Award className="h-12 w-12 text-tech-cyan" />
                <div>
                  <h3 className="text-2xl font-bold text-tech-text">{t('about.whyChooseUs.title')}</h3>
                  <p className="text-tech-text-muted">{t('about.whyChooseUs.subtitle')}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tech-cyan rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-tech-text">{t('about.advantages.expert.title')}</h4>
                    <p className="text-tech-text-muted text-sm">{t('about.advantages.expert.description')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tech-cyan rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-tech-text">{t('about.advantages.technology.title')}</h4>
                    <p className="text-tech-text-muted text-sm">{t('about.advantages.technology.description')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tech-cyan rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-tech-text">{t('about.advantages.support.title')}</h4>
                    <p className="text-tech-text-muted text-sm">{t('about.advantages.support.description')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tech-cyan rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-tech-text">{t('about.advantages.pricing.title')}</h4>
                    <p className="text-tech-text-muted text-sm">{t('about.advantages.pricing.description')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-tech-cyan/10 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-tech-cyan/5 rounded-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
