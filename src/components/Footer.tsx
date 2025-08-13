
import { Facebook, Twitter, Instagram, Linkedin, Github, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      "Pembuatan Website",
      "Aplikasi Mobile",
      "Aplikasi Desktop",
      "Integrasi Sistem",
      "Konsultasi IT"
    ],
    company: [
      "Tentang Kami",
      "Tim",
      "Karir",
      "Blog",
      "Kontak"
    ],
    resources: [
      "Portfolio",
      "Case Studies",
      "Dokumentasi",
      "Support",
      "FAQ"
    ],
    legal: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "SLA Agreement"
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
                TechNova
              </span>
              <p className="text-tech-text-muted mt-4 leading-relaxed">
                Empowering businesses with cutting-edge technology solutions. 
                Kami berkomitmen menghadirkan inovasi digital yang mendorong 
                pertumbuhan dan transformasi bisnis Anda.
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-tech-text font-semibold mb-4">Ikuti Kami</h4>
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
              <p className="text-tech-text font-semibold">Kontak Cepat</p>
              <p className="text-tech-text-muted text-sm">+62 21 5555 7777</p>
              <p className="text-tech-text-muted text-sm">info@technova.solutions</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-tech-text font-semibold mb-6">Layanan</h4>
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
            <h4 className="text-tech-text font-semibold mb-6">Perusahaan</h4>
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
            <h4 className="text-tech-text font-semibold mb-6">Resources</h4>
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
            <h4 className="text-tech-text font-semibold mb-6">Newsletter</h4>
            <p className="text-tech-text-muted text-sm mb-4">
              Dapatkan update terbaru tentang teknologi dan tips digital.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Email Anda"
                className="w-full px-4 py-2 bg-tech-blue/30 border border-tech-cyan/30 rounded-lg text-tech-text placeholder-tech-text-muted focus:border-tech-cyan focus:outline-none transition-colors duration-300 text-sm"
              />
              <button className="w-full btn-glow text-sm py-2">
                Subscribe
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
                © 2024 TechNova Solutions. All rights reserved.
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
