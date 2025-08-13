import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { Globe, Smartphone, Settings, Users, ArrowLeft, Check, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const ServiceDetail = () => {
  const { t } = useLanguage();
  const { serviceId } = useParams();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  const servicesData = {
    "pembuatan-website": {
      icon: Globe,
      title: t('serviceDetail.website.title'),
      subtitle: t('serviceDetail.website.subtitle'),
      description: t('serviceDetail.website.description'),
      features: [
        t('serviceDetail.website.features.responsive'),
        t('serviceDetail.website.features.seo'),
        t('serviceDetail.website.features.fast'),
        t('serviceDetail.website.features.secure'),
        t('serviceDetail.website.features.cms'),
        t('serviceDetail.website.features.ecommerce'),
        t('serviceDetail.website.features.analytics'),
        t('serviceDetail.website.features.social')
      ],
      benefits: [
        t('serviceDetail.website.benefits.credibility'),
        t('serviceDetail.website.benefits.reach'),
        t('serviceDetail.website.benefits.automation'),
        t('serviceDetail.website.benefits.analytics')
      ],
      technologies: ["React", "Next.js", "WordPress", "Shopify", "Laravel", "Node.js"],
      process: [
        t('serviceDetail.website.process.consultation'),
        t('serviceDetail.website.process.design'),
        t('serviceDetail.website.process.development'),
        t('serviceDetail.website.process.launch')
      ],
      pricing: t('serviceDetail.website.pricing'),
      timeline: t('serviceDetail.website.timeline')
    },
    "pengembangan-aplikasi": {
      icon: Smartphone,
      title: t('serviceDetail.app.title'),
      subtitle: t('serviceDetail.app.subtitle'),
      description: "Kami mengembangkan aplikasi mobile dan desktop yang user-friendly dengan performa tinggi untuk semua platform. Dari konsep hingga deployment, kami pastikan aplikasi Anda memberikan pengalaman terbaik.",
      features: [
        "Cross Platform",
        "Native Performance",
        "Intuitive UI/UX",
        "Cloud Integration",
        "Offline Capability",
        "Push Notifications",
        "In-App Purchases",
        "Real-time Sync"
      ],
      benefits: [
        "Akses mudah untuk pelanggan",
        "Engagement yang lebih tinggi",
        "Proses bisnis yang efisien",
        "Data insights yang valuable"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Electron", "Firebase"],
      process: [
        "Research & Planning",
        "Prototype & Design",
        "Development & Testing",
        "Deployment & Support"
      ],
      pricing: "Mulai dari Rp 15.000.000",
      timeline: "3-8 minggu"
    },
    "integrasi-sistem": {
      icon: Settings,
      title: "Integrasi Sistem",
      subtitle: "Koneksi Seamless Antar Sistem Bisnis",
      description: "Mengintegrasikan berbagai sistem bisnis untuk meningkatkan efisiensi dan produktivitas operasional. Kami memastikan semua sistem Anda bekerja harmonis untuk mendukung pertumbuhan bisnis.",
      features: [
        "API Integration",
        "Data Synchronization",
        "Workflow Automation",
        "Real-time Monitoring",
        "Legacy System Integration",
        "Cloud Migration",
        "Database Optimization",
        "Security Implementation"
      ],
      benefits: [
        "Efisiensi operasional meningkat",
        "Reduksi error manual",
        "Visibilitas data real-time",
        "Skalabilitas yang lebih baik"
      ],
      technologies: ["REST API", "GraphQL", "Microservices", "Docker", "Kubernetes", "AWS"],
      process: [
        "System Analysis",
        "Integration Design",
        "Implementation & Testing",
        "Monitoring & Optimization"
      ],
      pricing: "Mulai dari Rp 20.000.000",
      timeline: "4-12 minggu"
    },
    "konsultasi-it": {
      icon: Users,
      title: "Konsultasi IT",
      subtitle: "Strategic IT Consulting untuk Transformasi Digital",
      description: "Konsultasi strategis untuk transformasi digital dan optimalisasi infrastruktur teknologi perusahaan. Tim expert kami siap membantu merencanakan roadmap teknologi yang tepat untuk bisnis Anda.",
      features: [
        "Digital Strategy",
        "Technology Audit",
        "Infrastructure Planning",
        "Team Training",
        "Security Assessment",
        "Performance Optimization",
        "Cost Analysis",
        "Risk Management"
      ],
      benefits: [
        "Strategi IT yang terarah",
        "Optimalisasi budget IT",
        "Mitigasi risiko teknologi",
        "Peningkatan produktivitas tim"
      ],
      technologies: ["Cloud Platforms", "DevOps", "Security Tools", "Analytics", "AI/ML", "IoT"],
      process: [
        "Current State Assessment",
        "Strategy Development",
        "Implementation Planning",
        "Ongoing Support"
      ],
      pricing: "Mulai dari Rp 10.000.000",
      timeline: "2-4 minggu"
    }
  };

  const service = servicesData[serviceId as keyof typeof servicesData];

  if (!service) {
    return (
      <div className="min-h-screen bg-tech-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-tech-text mb-4">Service Not Found</h1>
          <Link to="/" className="btn-glow">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen bg-tech-dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="section-container">
          <Link to="/" className="inline-flex items-center text-tech-cyan hover:text-tech-cyan-glow transition-colors duration-300 mb-8">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Kembali ke Beranda
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="w-20 h-20 bg-tech-cyan/20 rounded-3xl flex items-center justify-center">
                <IconComponent className="h-10 w-10 text-tech-cyan" />
              </div>
              
              <div>
                <h1 className="heading-lg mb-4">{service.title}</h1>
                <p className="text-xl text-tech-cyan mb-6">{service.subtitle}</p>
                <p className="body-lg">{service.description}</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/#contact" className="btn-glow">
                  Konsultasi Gratis
                </Link>
                <Link to="/portfolio" className="btn-outline-glow">
                  Lihat Portfolio
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="tech-card p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-tech-cyan mb-2">{service.pricing}</div>
                    <div className="text-tech-text-muted">Starting Price</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-tech-cyan mb-2">{service.timeline}</div>
                    <div className="text-tech-text-muted">Timeline</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-tech-darker">
        <div className="section-container">
          <h2 className="heading-md text-center mb-12">Fitur & Layanan</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, index) => (
              <div key={index} className="tech-card p-6 text-center">
                <Check className="h-8 w-8 text-tech-cyan mx-auto mb-4" />
                <h3 className="text-tech-text font-semibold">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-md mb-8">Manfaat untuk Bisnis Anda</h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <Star className="h-6 w-6 text-tech-cyan flex-shrink-0 mt-1" />
                    <p className="text-tech-text">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="tech-card p-8">
              <h3 className="text-xl font-bold text-tech-text mb-6">Teknologi yang Kami Gunakan</h3>
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech, index) => (
                  <span key={index} className="px-4 py-2 bg-tech-cyan/20 text-tech-cyan rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-tech-darker">
        <div className="section-container">
          <h2 className="heading-md text-center mb-12">Proses Pengerjaan</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-tech-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-tech-cyan">{index + 1}</span>
                </div>
                <h3 className="text-tech-text font-semibold mb-2">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="tech-card max-w-4xl mx-auto p-12 text-center">
            <h2 className="heading-md mb-6">Siap Memulai Proyek Anda?</h2>
            <p className="body-lg mb-8">
              Mari diskusikan kebutuhan {service.title.toLowerCase()} Anda dengan tim expert kami. 
              Konsultasi gratis untuk menentukan solusi terbaik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact" className="btn-glow">
                Konsultasi Gratis Sekarang
              </Link>
              <Link to="/#contact" className="btn-outline-glow">
                Hubungi Tim Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;