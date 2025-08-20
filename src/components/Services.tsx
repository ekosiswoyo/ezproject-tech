
import { Globe, Smartphone, Settings, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from '@/contexts/LanguageContext';
import RotatingLogos from "./ui/rotating-logos";


const Services = () => {
  const { t } = useLanguage();
  const services = [
    {
      icon: Globe,
      title: t('services.website.title'),
      description: t('services.website.description'),
      features: [
        t('services.website.features.responsive'),
        t('services.website.features.seo'),
        t('services.website.features.fast'),
        t('services.website.features.secure')
      ],
      slug: "pembuatan-website"
    },
    {
      icon: Smartphone,
      title: t('services.app.title'),
      description: t('services.app.description'),
      features: [
        t('services.app.features.crossPlatform'),
        t('services.app.features.performance'),
        t('services.app.features.ui'),
        t('services.app.features.cloud')
      ],
      slug: "pengembangan-aplikasi"
    },
    {
      icon: Settings,
      title: t('services.integration.title'),
      description: t('services.integration.description'),
      features: [
        t('services.integration.features.api'),
        t('services.integration.features.sync'),
        t('services.integration.features.automation'),
        t('services.integration.features.monitoring')
      ],
      slug: "integrasi-sistem"
    },
    {
      icon: Users,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      features: [
        t('services.consulting.features.strategy'),
        t('services.consulting.features.audit'),
        t('services.consulting.features.planning'),
        t('services.consulting.features.training')
      ],
      slug: "konsultasi-it"
    }
  ];

  return (
    <section id="services" className="section-padding bg-tech-dark">
      <div className="section-container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-lg">
            {t('services.title')} <span className="text-tech-cyan">{t('services.titleHighlight')}</span> {t('services.titleSuffix')}
          </h2>
          <p className="body-lg max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="tech-card group h-full">
              <div className="mb-6">
                <div className="w-16 h-16 bg-tech-cyan/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-tech-cyan" />
                </div>
                <h3 className="text-xl font-bold text-tech-text mb-3">{service.title}</h3>
                <p className="text-tech-text-muted mb-6">{service.description}</p>
              </div>

              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-tech-cyan rounded-full flex-shrink-0"></div>
                    <span className="text-tech-text-muted text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Link
                  to={`/service/${service.slug}`}
                  className="text-tech-cyan font-semibold hover:text-tech-cyan-glow transition-colors duration-300 group inline-flex items-center"
                >
                  {t('services.learnMore')}
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="tech-card max-w-4xl mx-auto p-12">
            <h3 className="heading-sm mb-6">
              {t('services.cta.title')}
            </h3>
            <p className="body-md mb-8">
              {t('services.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-glow">
                {t('services.cta.consultation')}
              </a>
              <Link to="/portfolio" className="btn-outline-glow">
                {t('services.cta.portfolio')}
              </Link>
            </div>
          </div>
        </div>
        {/*User Product*/}

        {/* Client Logos Carousel */}
        <div className="text-center mt-20">
          <div className="tech-card max-w-5xl mx-auto px-12 py-6">
            <h3 className="heading-sm mb-4">
              {t('services.carousel.user')}
            </h3>
            <div className="mt-8">
              <RotatingLogos />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
