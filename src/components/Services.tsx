
import { Globe, Smartphone, Settings, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Pembuatan Website",
      description: "Website responsif dan modern dengan teknologi terdepan untuk meningkatkan presence online bisnis Anda.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Secure & Reliable"]
    },
    {
      icon: Smartphone,
      title: "Pengembangan Aplikasi",
      description: "Aplikasi mobile dan desktop yang user-friendly dengan performa tinggi untuk semua platform.",
      features: ["Cross Platform", "Native Performance", "Intuitive UI/UX", "Cloud Integration"]
    },
    {
      icon: Settings,
      title: "Integrasi Sistem",
      description: "Mengintegrasikan berbagai sistem bisnis untuk meningkatkan efisiensi dan produktivitas operasional.",
      features: ["API Integration", "Data Synchronization", "Workflow Automation", "Real-time Monitoring"]
    },
    {
      icon: Users,
      title: "Konsultasi IT",
      description: "Konsultasi strategis untuk transformasi digital dan optimalisasi infrastruktur teknologi perusahaan.",
      features: ["Digital Strategy", "Technology Audit", "Infrastructure Planning", "Team Training"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-tech-dark">
      <div className="section-container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-lg">
            Layanan <span className="text-tech-cyan">Profesional</span> Kami
          </h2>
          <p className="body-lg max-w-3xl mx-auto">
            Kami menyediakan berbagai layanan teknologi komprehensif untuk mendukung 
            pertumbuhan dan transformasi digital bisnis Anda.
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
                <button className="text-tech-cyan font-semibold hover:text-tech-cyan-glow transition-colors duration-300 group">
                  Learn More
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="tech-card max-w-4xl mx-auto p-12">
            <h3 className="heading-sm mb-6">
              Siap untuk Transformasi Digital?
            </h3>
            <p className="body-md mb-8">
              Mari diskusikan bagaimana kami dapat membantu mengembangkan solusi teknologi 
              yang tepat untuk kebutuhan bisnis Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-glow">
                Konsultasi Gratis
              </button>
              <button className="btn-outline-glow">
                Lihat Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
