import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Github, ArrowLeft, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Platform e-commerce lengkap dengan sistem pembayaran terintegrasi dan dashboard admin yang comprehensive. Dilengkapi dengan fitur inventory management, customer analytics, dan multi-payment gateway.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis", "AWS"],
      link: "#",
      github: "#",
      duration: "6 bulan",
      client: "PT. Digital Commerce Indonesia",
      year: "2024"
    },
    {
      id: 2,
      title: "Healthcare Management App",
      category: "Mobile Development",
      description: "Aplikasi mobile untuk manajemen rumah sakit dengan fitur appointment booking dan telemedicine. Terintegrasi dengan sistem EMR dan payment gateway untuk kemudahan pasien.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Firebase", "PostgreSQL", "WebRTC", "Push Notifications"],
      link: "#",
      github: "#",
      duration: "8 bulan",
      client: "RS. Teknologi Medis",
      year: "2024"
    },
    {
      id: 3,
      title: "ERP System Integration",
      category: "System Integration",
      description: "Integrasi sistem ERP dengan berbagai platform eksternal untuk mengoptimalkan workflow perusahaan manufaktur. Mencakup inventory, production planning, dan financial reporting.",
      image: "/api/placeholder/600/400",
      technologies: ["Java", "Oracle", "REST API", "Microservices", "Docker", "Kubernetes"],
      link: "#",
      github: "#",
      duration: "12 bulan",
      client: "PT. Manufaktur Teknologi",
      year: "2023"
    },
    {
      id: 4,
      title: "Data Analytics Dashboard",
      category: "Data Visualization",
      description: "Dashboard analytics real-time untuk monitoring performa bisnis dengan visualisasi data yang interaktif. Dilengkapi dengan predictive analytics dan automated reporting.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "D3.js", "PostgreSQL", "Docker", "Tableau", "Apache Kafka"],
      link: "#",
      github: "#",
      duration: "4 bulan",
      client: "PT. Analytics Solutions",
      year: "2024"
    },
    {
      id: 5,
      title: "IoT Monitoring System",
      category: "IoT Development",
      description: "Sistem monitoring IoT untuk smart building dengan sensor terintegrasi dan alert system otomatis. Mencakup energy management, security monitoring, dan environmental control.",
      image: "/api/placeholder/600/400",
      technologies: ["Arduino", "MQTT", "React", "InfluxDB", "Grafana", "Node-RED"],
      link: "#",
      github: "#",
      duration: "10 bulan",
      client: "Smart Building Corp",
      year: "2023"
    },
    {
      id: 6,
      title: "Digital Banking App",
      category: "Fintech",
      description: "Aplikasi mobile banking dengan fitur keamanan tinggi dan user experience yang optimal. Dilengkapi dengan biometric authentication, QR payment, dan investment features.",
      image: "/api/placeholder/600/400",
      technologies: ["Flutter", "Blockchain", "Kubernetes", "AWS", "Biometric SDK", "Encryption"],
      link: "#",
      github: "#",
      duration: "14 bulan",
      client: "Bank Digital Nusantara",
      year: "2023"
    },
    {
      id: 7,
      title: "Learning Management System",
      category: "Web Development",
      description: "Platform pembelajaran online dengan fitur video streaming, quiz interaktif, dan progress tracking. Mendukung live class, assignment submission, dan certificate generation.",
      image: "/api/placeholder/600/400",
      technologies: ["Vue.js", "Laravel", "MySQL", "WebRTC", "FFmpeg", "Redis"],
      link: "#",
      github: "#",
      duration: "7 bulan",
      client: "EduTech Indonesia",
      year: "2024"
    },
    {
      id: 8,
      title: "Supply Chain Management",
      category: "System Integration",
      description: "Sistem manajemen supply chain end-to-end dengan tracking real-time dan predictive analytics. Terintegrasi dengan supplier portal dan logistics management.",
      image: "/api/placeholder/600/400",
      technologies: ["Spring Boot", "PostgreSQL", "Apache Kafka", "Elasticsearch", "Docker"],
      link: "#",
      github: "#",
      duration: "9 bulan",
      client: "PT. Logistik Teknologi",
      year: "2023"
    },
    {
      id: 9,
      title: "Food Delivery App",
      category: "Mobile Development",
      description: "Aplikasi food delivery dengan fitur real-time tracking, multiple payment options, dan rating system. Dilengkapi dengan driver app dan merchant dashboard.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io", "Google Maps API"],
      link: "#",
      github: "#",
      duration: "5 bulan",
      client: "FoodTech Startup",
      year: "2024"
    }
  ];

  const categories = ["All", "Web Development", "Mobile Development", "System Integration", "Data Visualization", "IoT Development", "Fintech"];

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
      <section className="section-padding bg-tech-darker">
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
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
            {filteredProjects.map((project) => (
              <div key={project.id} className="tech-card group overflow-hidden">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-xl mb-6 bg-tech-blue/30 h-48">
                  <div className="absolute inset-0 bg-gradient-to-br from-tech-cyan/20 to-tech-blue/40 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-tech-cyan/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <div className="w-8 h-8 bg-tech-cyan rounded-lg"></div>
                      </div>
                      <p className="text-tech-text font-medium">{project.category}</p>
                    </div>
                  </div>
                  
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
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-tech-cyan text-sm font-medium">{project.category}</span>
                      <span className="text-tech-text-muted text-xs">{project.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-tech-text mb-3">{project.title}</h3>
                    <p className="text-tech-text-muted text-sm mb-4">{project.description}</p>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-tech-text-muted">Klien:</span>
                      <span className="text-tech-text">{project.client}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-tech-text-muted">Durasi:</span>
                      <span className="text-tech-text">{project.duration}</span>
                    </div>
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