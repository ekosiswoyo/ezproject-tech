
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowUp, Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      t('footer.services.website'),
      t('footer.services.mobile'),
      t('footer.services.desktop'),
      t('footer.services.integration'),
      t('footer.services.consulting')
    ],
    company: [
      t('footer.company.about'),
      t('footer.company.team'),
      t('footer.company.career'),
      t('footer.company.blog'),
      t('footer.company.contact')
    ],
    resources: [
      t('footer.resources.portfolio'),
      t('footer.resources.caseStudies'),
      t('footer.resources.documentation'),
      t('footer.resources.support'),
      t('footer.resources.faq')
    ],
    legal: [
      t('footer.legal.privacy'),
      t('footer.legal.terms'),
      t('footer.legal.cookie'),
      t('footer.legal.sla')
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" }
  ];

  return (
    <footer className="bg-tech-darker border-t border-tech-cyan/20">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <span className="text-3xl font-bold bg-gradient-to-r from-tech-cyan to-tech-cyan-glow bg-clip-text text-transparent">
                ezproject              </span>
              <p className="text-tech-text-muted mt-4 leading-relaxed">
                {t('footer.description')}
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-tech-text font-semibold mb-4">{t('footer.followUs')}</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-tech-blue/50 hover:bg-tech-cyan/20 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-tech-cyan group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <p className="text-tech-text font-semibold">{t('footer.quickContact')}</p>
              <p className="text-tech-text-muted text-sm">+62 21 5555 7777</p>
              <p className="text-tech-text-muted text-sm">noreply@ezproject.tech</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-tech-text font-semibold mb-6">{t('footer.sections.services')}</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-tech-text-muted hover:text-tech-cyan transition-colors duration-300 text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-tech-text font-semibold mb-6">{t('footer.sections.company')}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-tech-text-muted hover:text-tech-cyan transition-colors duration-300 text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-tech-text font-semibold mb-6">{t('footer.sections.resources')}</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-tech-text-muted hover:text-tech-cyan transition-colors duration-300 text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-tech-text font-semibold mb-6">{t('footer.sections.newsletter')}</h4>
            <p className="text-tech-text-muted text-sm mb-4">
              {t('footer.newsletter.description')}
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="w-full px-4 py-2 bg-tech-blue/30 border border-tech-cyan/30 rounded-lg text-tech-text placeholder-tech-text-muted focus:border-tech-cyan focus:outline-none transition-colors duration-300 text-sm"
              />
              <button className="w-full btn-glow text-sm py-2">
                {t('footer.newsletter.subscribe')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-tech-cyan/20">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <p className="text-tech-text-muted">
                {t('footer.copyright')}
              </p>
              <div className="flex space-x-4">
                {footerLinks.legal.map((link, index) => (
                  <a key={index} href="#" className="text-tech-text-muted hover:text-tech-cyan transition-colors duration-300">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-tech-cyan/20 hover:bg-tech-cyan/30 rounded-lg flex items-center justify-center transition-colors duration-300 group"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5 text-tech-cyan group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
