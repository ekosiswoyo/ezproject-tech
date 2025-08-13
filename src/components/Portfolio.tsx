
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Platform e-commerce lengkap dengan sistem pembayaran terintegrasi dan dashboard admin yang comprehensive.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      github: "#"
    },
    {
      title: "Healthcare Management App",
      category: "Mobile Development",
      description: "Aplikasi mobile untuk manajemen rumah sakit dengan fitur appointment booking dan telemedicine.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Firebase", "PostgreSQL"],
      link: "#",
      github: "#"
    },
    {
      title: "ERP System Integration",
      category: "System Integration",
      description: "Integrasi sistem ERP dengan berbagai platform eksternal untuk mengoptimalkan workflow perusahaan manufaktur.",
      image: "/api/placeholder/600/400",
      technologies: ["Java", "Oracle", "REST API", "Microservices"],
      link: "#",
      github: "#"
    },
    {
      title: "Data Analytics Dashboard",
      category: "Data Visualization",
      description: "Dashboard analytics real-time untuk monitoring performa bisnis dengan visualisasi data yang interaktif.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "D3.js", "PostgreSQL", "Docker"],
      link: "#",
      github: "#"
    },
    {
      title: "IoT Monitoring System",
      category: "IoT Development",
      description: "Sistem monitoring IoT untuk smart building dengan sensor terintegrasi dan alert system otomatis.",
      image: "/api/placeholder/600/400",
      technologies: ["Arduino", "MQTT", "React", "InfluxDB"],
      link: "#",
      github: "#"
    },
    {
      title: "Digital Banking App",
      category: "Fintech",
      description: "Aplikasi mobile banking dengan fitur keamanan tinggi dan user experience yang optimal.",
      image: "/api/placeholder/600/400",
      technologies: ["Flutter", "Blockchain", "Kubernetes", "AWS"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-tech-darker">
      <div className="section-container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-lg">
            Portfolio <span className="text-tech-cyan">Terbaru</span> Kami
          </h2>
          <p className="body-lg max-w-3xl mx-auto">
            Lihat berbagai proyek yang telah kami selesaikan dengan teknologi terdepan 
            dan standar kualitas tinggi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="tech-card group overflow-hidden">
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

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-outline-glow">
            Lihat Semua Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
