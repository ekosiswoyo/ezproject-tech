import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Github, ArrowLeft, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from '@/contexts/LanguageContext';
import work1 from '@/assets/images/portfolio/work1.png';
import work2 from '@/assets/images/portfolio/work2.png';
import work3 from '@/assets/images/portfolio/work3.png';
import work4 from '@/assets/images/portfolio/work4.png';
import work5 from '@/assets/images/portfolio/work5.png';
import work6 from '@/assets/images/portfolio/work6.png';
import work7 from '@/assets/images/portfolio/work7.png';
import work8 from '@/assets/images/portfolio/work8.png';
import work9 from '@/assets/images/portfolio/work9.png';
import work10 from '@/assets/images/portfolio/work10.png';
import work11 from '@/assets/images/portfolio/work11.png';
import work12 from '@/assets/images/portfolio/work12.png';
import work13 from '@/assets/images/portfolio/work13.png';
import work14 from '@/assets/images/portfolio/work14.png';
import work15 from '@/assets/images/portfolio/work15.png';
import work16 from '@/assets/images/portfolio/work16.png';
import work17 from '@/assets/images/portfolio/work17.png';
import work18 from '@/assets/images/portfolio/work18.png';

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const { t } = useLanguage();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      title: t('portfolio.projects.migration.title'),
      category: t('portfolio.projects.migration.category'),
      description: t('portfolio.projects.migration.description'),
      image: work1,
      technologies: ["Pentaho Data Integration", "DB2", "Oracle"],
      link: "#",
      github: "#"
    },
    {
      title: t('portfolio.projects.bprmaa.title'),
      category: t('portfolio.projects.bprmaa.category'),
      description: t('portfolio.projects.bprmaa.description'),
      image: work2,
      technologies: ["Wordpress", "MySql"],
      link: "#",
      github: "#"
    },
    {
      title: t('portfolio.projects.bprmaainternal.title'),
      category: t('portfolio.projects.bprmaainternal.category'),
      description: t('portfolio.projects.bprmaainternal.description'),
      image: work3,
      technologies: ["Laravel", "MySql", "centOs"],
      link: "#",
      github: "#"
    },
    {
      title: t('portfolio.projects.taskmanagement.title'),
      category: t('portfolio.projects.taskmanagement.category'),
      description: t('portfolio.projects.taskmanagement.description'),
      image: work4,
      technologies: ["Laravel", "MySql", "centOS"],
      link: "#",
      github: "#"
    },
    {
      title: t('portfolio.projects.stock.title'),
      category: t('portfolio.projects.stock.category'),
      description: t('portfolio.projects.stock.description'),
      image: work5,
      technologies: ["Laravel", "MySql", "centOS"],
      link: "#",
      github: "#"
    },
    {
      title: t('portfolio.projects.lelang.title'),
      category: t('portfolio.projects.lelang.category'),
      description: t('portfolio.projects.lelang.description'),
      image: work6,
      technologies: ["Laravel", "MySql", "centOS"],
      link: "#",
      github: "#"
    },
    {
      title: t('portfolio.projects.filesharing.title'),
      category: t('portfolio.projects.filesharing.category'),
      description: t('portfolio.projects.filesharing.description'),
      image: work7,
      technologies: ["Nextcloud", "MySql", "centOS"],
      link: "#",
      github: "#"
    },
    {
      title: t('portfolio.projects.kpi.title'),
      category: t('portfolio.projects.kpi.category'),
      description: t('portfolio.projects.kpi.description'),
      image: work8,
      technologies: ["Laravel", "MySql", "centOS"],
      link: "#",
      github: "#"
    },
    {
      title: t('portfolio.projects.zimbra.title'),
      category: t('portfolio.projects.zimbra.category'),
      description: t('portfolio.projects.zimbra.description'),
      image: work9,
      technologies: ["ZImbra", "MySql", "centOS"],
      link: "#",
      github: "#"
    },
    {
      title: t('portfolio.projects.leave.title'),
      category: t('portfolio.projects.leave.category'),
      description: t('portfolio.projects.leave.description'),
      image: work10,
      technologies: ["Laravel", "MySql", "centOS"],
      link: "#",
      github: "#"
    },
    {
      title: t('portfolio.projects.recruitment.title'),
      category: t('portfolio.projects.recruitment.category'),
      description: t('portfolio.projects.recruitment.description'),
      image: work11,
      technologies: ["Laravel", "MySql", "centOS"],
      link: "#",
      github: "#"
    },
    {
      title: t('portfolio.projects.disabilities.title'),
      category: t('portfolio.projects.disabilities.category'),
      description: t('portfolio.projects.disabilities.description'),
      image: work12,
      technologies: ["React Native", "Laravel", "MySql", "centOS"],
      link: "#",
      github: "#"
    },
    {
      title: t('portfolio.projects.smk.title'),
      category: t('portfolio.projects.smk.category'),
      description: t('portfolio.projects.smk.description'),
      image: work13,
      technologies: ["Laravel", "MySql", "centOS"],
      link: "#",
      github: "#"
    },
    {
      title: t('portfolio.projects.roman.title'),
      category: t('portfolio.projects.roman.category'),
      description: t('portfolio.projects.roman.description'),
      image: work14,
      technologies: ["Laravel", "MySql", "centOS"],
      link: "#",
      github: "#"
    },
    {
      title: t('portfolio.projects.roma.title'),
      category: t('portfolio.projects.roma.category'),
      description: t('portfolio.projects.roma.description'),
      image: work15,
      technologies: ["Laravel", "MySql", "centOS"],
      link: "#",
      github: "#"
    },
    {
      title: t('portfolio.projects.sijitu.title'),
      category: t('portfolio.projects.sijitu.category'),
      description: t('portfolio.projects.sijitu.description'),
      image: work16,
      technologies: ["Python", "Artificial Intelligence"],
      link: "#",
      github: "#"
    },
    {
      title: t('portfolio.projects.kosman.title'),
      category: t('portfolio.projects.kosman.category'),
      description: t('portfolio.projects.kosman.description'),
      image: work17,
      technologies: ["Laravel", "MySql"],
      link: "#",
      github: "#"
    },
    {
      title: t('portfolio.projects.barbershop.title'),
      category: t('portfolio.projects.barbershop.category'),
      description: t('portfolio.projects.barbershop.description'),
      image: work18,
      technologies: ["Laravel", "MySql"],
      link: "#",
      github: "#"
    },
  ];

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category)))
  ];

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-tech-dark">
      <Navbar />

      {/* Hero Section */}
      <section id="portfolio" className="section-padding bg-tech-darker">
        <div className="section-container">
          <div className="flex items-center mb-8">
            <Link to="/" className="flex items-center text-tech-cyan hover:text-tech-cyan/80 transition-colors mr-6">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Kembali ke Beranda
            </Link>
          </div>

          <div className="text-center mb-16 space-y-4">
            <h1 className="heading-xl">
              Portfolio <span className="text-tech-cyan">Lengkap</span> Kami
            </h1>
            <p className="body-lg max-w-4xl mx-auto">
              Jelajahi koleksi lengkap proyek-proyek yang telah kami selesaikan dengan berbagai teknologi terdepan.
              Setiap proyek mencerminkan komitmen kami terhadap kualitas, inovasi, dan kepuasan klien.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center text-tech-text mr-4">
              <Filter className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Filter:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                  ? "bg-tech-cyan text-tech-dark"
                  : "bg-tech-blue/30 text-tech-text hover:bg-tech-cyan/20 hover:text-tech-cyan"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="tech-card group overflow-hidden">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-xl mb-6 h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-tech-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a href={project.link} className="w-12 h-12 bg-tech-cyan rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <ExternalLink className="h-5 w-5 text-tech-dark" />
                    </a>
                    <a href={project.github} className="w-12 h-12 bg-tech-cyan rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <Github className="h-5 w-5 text-tech-dark" />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="text-tech-cyan text-sm font-medium">{project.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-tech-text mb-3">{project.title}</h3>
                    <p className="text-tech-text-muted text-sm mb-4">{project.description}</p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-tech-cyan/20 text-tech-cyan text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid md:grid-cols-4 gap-8 text-center">
            <div className="tech-card">
              <div className="text-3xl font-bold text-tech-cyan mb-2">{projects.length}+</div>
              <div className="text-tech-text-muted">Proyek Selesai</div>
            </div>
            <div className="tech-card">
              <div className="text-3xl font-bold text-tech-cyan mb-2">{categories.length - 1}</div>
              <div className="text-tech-text-muted">Kategori Layanan</div>
            </div>
            <div className="tech-card">
              <div className="text-3xl font-bold text-tech-cyan mb-2">100%</div>
              <div className="text-tech-text-muted">Kepuasan Klien</div>
            </div>
            <div className="tech-card">
              <div className="text-3xl font-bold text-tech-cyan mb-2">24/7</div>
              <div className="text-tech-text-muted">Support</div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="tech-card max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-tech-text mb-4">
                Siap Memulai Proyek <span className="text-tech-cyan">Anda?</span>
              </h3>
              <p className="text-tech-text-muted mb-6">
                Mari diskusikan kebutuhan proyek Anda dengan tim expert kami.
                Konsultasi gratis untuk menentukan solusi terbaik.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/#contact" className="btn-glow">
                  Konsultasi Gratis
                </Link>
                <Link to="/#services" className="btn-outline-glow">
                  Lihat Layanan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;