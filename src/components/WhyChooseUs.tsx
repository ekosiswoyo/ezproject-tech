
import { Shield, Zap, Users, Trophy, Clock, Headphones } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Keamanan Terjamin",
      description: "Implementasi standar keamanan tinggi dengan enkripsi dan protokol keamanan terdepan untuk melindungi data bisnis Anda."
    },
    {
      icon: Zap,
      title: "Performa Tinggi",
      description: "Optimisasi performa maksimal dengan teknologi caching dan CDN untuk memastikan aplikasi berjalan cepat dan responsif."
    },
    {
      icon: Users,
      title: "Tim Expert",
      description: "Tim developer berpengalaman dengan sertifikasi internasional dan expertise di berbagai teknologi modern."
    },
    {
      icon: Trophy,
      title: "Kualitas Premium",
      description: "Standar kualitas tinggi dengan testing menyeluruh dan quality assurance untuk memastikan hasil yang sempurna."
    },
    {
      icon: Clock,
      title: "Tepat Waktu",
      description: "Komitmen menyelesaikan proyek sesuai timeline yang disepakati dengan project management yang terstruktur."
    },
    {
      icon: Headphones,
      title: "Support 24/7",
      description: "Layanan support berkelanjutan dengan response time cepat untuk memastikan sistem selalu berjalan optimal."
    }
  ];

  return (
    <section className="section-padding bg-tech-dark">
      <div className="section-container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-lg">
            Mengapa Memilih <span className="text-tech-cyan">TechNova Solutions</span>?
          </h2>
          <p className="body-lg max-w-3xl mx-auto">
            Kami berkomitmen memberikan solusi teknologi terbaik dengan pendekatan 
            yang profesional dan hasil yang melampaui ekspektasi.
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
              Siap Memulai Proyek Bersama Kami?
            </h3>
            <p className="body-md mb-8 max-w-2xl mx-auto">
              Konsultasikan kebutuhan teknologi bisnis Anda dengan tim expert kami. 
              Dapatkan solusi yang tepat untuk mengakselerasi pertumbuhan perusahaan.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-tech-cyan mb-2">500+</div>
                <div className="text-tech-text-muted">Proyek Selesai</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-tech-cyan mb-2">98%</div>
                <div className="text-tech-text-muted">Tingkat Kepuasan</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-tech-cyan mb-2">24/7</div>
                <div className="text-tech-text-muted">Support Service</div>
              </div>
            </div>

            <button className="btn-glow">
              Mulai Konsultasi Gratis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
