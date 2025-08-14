
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden parallax-bg"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-tech-cyan rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-tech-cyan rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 pt-20">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-tech-blue/50 border border-tech-cyan/30 rounded-full">
                  <span className="text-tech-cyan text-sm font-medium">
                    🚀 {t("hero.badge")}
                  </span>
                </div>

                <h1 className="heading-xl">
                  {t("hero.title")}
                  <span className="block bg-gradient-to-r from-tech-cyan to-tech-cyan-glow bg-clip-text text-transparent">
                    {t("hero.titleHighlight")}
                  </span>
                </h1>

                <p className="body-lg max-w-xl">{t("hero.subtitle")}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="btn-glow group"
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {t("hero.cta")}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                {/* <button className="btn-outline-glow group">
                  <Play className="mr-2 h-5 w-5" />
                  {t("hero.watchDemo")}
                </button> */}
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-8 pb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-tech-cyan">500+</div>
                  <div className="text-tech-text-muted text-sm">
                    {t("hero.stats.projects")}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tech-cyan">200+</div>
                  <div className="text-tech-text-muted text-sm">
                    {t("hero.stats.clients")}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tech-cyan">8+</div>
                  <div className="text-tech-text-muted text-sm">
                    {t("hero.stats.experience")}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Tech Illustration */}
            <div className="relative">
              <div className="relative z-10 float-animation">
                <div className="w-full h-96 bg-gradient-to-br from-tech-cyan/20 to-tech-blue/20 rounded-3xl backdrop-blur-sm border border-tech-cyan/30 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-tech-cyan/20 rounded-2xl flex items-center justify-center mx-auto glow-effect">
                      <div className="w-12 h-12 bg-tech-cyan rounded-xl"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-tech-cyan/50 rounded w-32 mx-auto"></div>
                      <div className="h-2 bg-tech-cyan/30 rounded w-24 mx-auto"></div>
                      <div className="h-2 bg-tech-cyan/20 rounded w-28 mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div
                className="absolute -top-4 -right-4 w-20 h-20 bg-tech-cyan/20 rounded-2xl backdrop-blur-sm border border-tech-cyan/30 float-animation"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-tech-cyan/20 rounded-xl backdrop-blur-sm border border-tech-cyan/30 float-animation"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-tech-cyan/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-tech-cyan rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
