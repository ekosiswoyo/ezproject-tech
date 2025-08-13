
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Budi Santoso",
      position: "CEO",
      company: "PT Maju Bersama",
      rating: 5,
      text: "TechNova Solutions benar-benar memahami kebutuhan bisnis kami. Sistem ERP yang mereka kembangkan meningkatkan efisiensi operasional hingga 40%. Tim yang profesional dan support yang responsif.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Sari Wulandari",
      position: "IT Manager",
      company: "CV Digital Nusantara",
      rating: 5,
      text: "Aplikasi mobile yang dikembangkan TechNova sangat user-friendly dan performanya luar biasa. Proses development yang transparan dan hasil yang melampaui ekspektasi kami.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c2bd?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ahmad Rahman",
      position: "Direktur Operasional",
      company: "PT Teknologi Masa Depan",
      rating: 5,
      text: "Konsultasi IT dari TechNova membantu kami merencanakan roadmap digital transformation yang tepat. ROI yang signifikan dan implementasi yang smooth tanpa gangguan operasional.",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lisa Permata",
      position: "Founder",
      company: "Startup InnovateTech",
      rating: 5,
      text: "Sebagai startup, kami membutuhkan partner teknologi yang dapat tumbuh bersama kami. TechNova memberikan solusi scalable dengan budget yang reasonable. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Robert Tanama",
      position: "CTO",
      company: "PT Global Solutions",
      rating: 5,
      text: "Integrasi sistem yang kompleks menjadi mudah dengan expertise TechNova. Tim mereka sangat detail dalam planning dan execution. Support after-sales yang excellent.",
      avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section-padding bg-tech-dark">
      <div className="section-container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-lg">
            Testimoni <span className="text-tech-cyan">Klien</span> Kami
          </h2>
          <p className="body-lg max-w-3xl mx-auto">
            Dengarkan langsung dari klien-klien yang telah merasakan manfaat 
            solusi teknologi dari TechNova Solutions.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="tech-card p-12 text-center relative">
            {/* Rating Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl md:text-2xl text-tech-text mb-8 leading-relaxed">
              "{currentTestimonial.text}"
            </blockquote>

            {/* Avatar and Info */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-tech-cyan/20 rounded-full flex items-center justify-center overflow-hidden">
                <div className="w-12 h-12 bg-tech-cyan rounded-full"></div>
              </div>
              <div className="text-left">
                <div className="text-tech-text font-semibold text-lg">{currentTestimonial.name}</div>
                <div className="text-tech-text-muted">{currentTestimonial.position}</div>
                <div className="text-tech-cyan text-sm">{currentTestimonial.company}</div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-tech-blue/50 hover:bg-tech-cyan/20 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <ChevronLeft className="h-6 w-6 text-tech-cyan" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-tech-blue/50 hover:bg-tech-cyan/20 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <ChevronRight className="h-6 w-6 text-tech-cyan" />
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-tech-cyan' : 'bg-tech-blue'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonial Grid - Smaller Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="tech-card p-6">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-tech-text-muted text-sm mb-4 line-clamp-3">
                "{testimonial.text}"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-tech-cyan/20 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-tech-cyan rounded-full"></div>
                </div>
                <div>
                  <div className="text-tech-text font-medium text-sm">{testimonial.name}</div>
                  <div className="text-tech-text-muted text-xs">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="tech-card max-w-2xl mx-auto p-8">
            <h3 className="heading-sm mb-4">
              Bergabunglah dengan Klien-Klien Terpuas Kami
            </h3>
            <p className="body-md mb-6">
              Jadilah bagian dari lebih dari 200+ perusahaan yang telah mempercayakan 
              transformasi digital mereka kepada TechNova Solutions.
            </p>
            <button className="btn-glow">
              Konsultasi Gratis Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
