
import { Target, Eye, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-tech-darker">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="heading-lg">
                About <span className="text-tech-cyan">TechNova Solutions</span>
              </h2>
              <p className="body-lg">
                Dengan pengalaman lebih dari 8 tahun di industri teknologi, TechNova Solutions 
                telah menjadi mitra terpercaya bagi berbagai perusahaan dalam transformasi digital.
              </p>
              <p className="body-md">
                Kami mengombinasikan keahlian teknis tinggi dengan pemahaman mendalam tentang 
                kebutuhan bisnis untuk menghadirkan solusi yang tidak hanya inovatif, tetapi 
                juga praktis dan memberikan nilai tambah nyata.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="tech-card">
                <Target className="h-8 w-8 text-tech-cyan mb-4" />
                <h3 className="text-xl font-semibold text-tech-text mb-2">Misi Kami</h3>
                <p className="text-tech-text-muted">
                  Menghadirkan solusi teknologi terdepan yang memberdayakan bisnis untuk 
                  mencapai potensi maksimalnya.
                </p>
              </div>

              <div className="tech-card">
                <Eye className="h-8 w-8 text-tech-cyan mb-4" />
                <h3 className="text-xl font-semibold text-tech-text mb-2">Visi Kami</h3>
                <p className="text-tech-text-muted">
                  Menjadi perusahaan teknologi terkemuka yang mendorong inovasi dan 
                  transformasi digital di Indonesia.
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
                  <h3 className="text-2xl font-bold text-tech-text">Mengapa Memilih Kami?</h3>
                  <p className="text-tech-text-muted">Keunggulan yang membedakan kami</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tech-cyan rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-tech-text">Tim Expert Berpengalaman</h4>
                    <p className="text-tech-text-muted text-sm">Developer dan konsultan dengan sertifikasi internasional</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tech-cyan rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-tech-text">Teknologi Terdepan</h4>
                    <p className="text-tech-text-muted text-sm">Menggunakan framework dan tools terbaru untuk hasil optimal</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tech-cyan rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-tech-text">Dukungan 24/7</h4>
                    <p className="text-tech-text-muted text-sm">Layanan support dan maintenance berkelanjutan</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tech-cyan rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-tech-text">Harga Kompetitif</h4>
                    <p className="text-tech-text-muted text-sm">Solusi berkualitas tinggi dengan investasi yang efisien</p>
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
