
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Hubungi Kami",
      details: ["+62 21 5555 7777", "+62 811 9999 8888"],
      description: "Senin - Jumat: 09:00 - 18:00"
    },
    {
      icon: Mail,
      title: "Email Kami",
      details: ["info@technova.solutions", "support@technova.solutions"],
      description: "Response dalam 24 jam"
    },
    {
      icon: MapPin,
      title: "Kantor Pusat",
      details: ["Jl. Sudirman No. 123", "Jakarta Selatan 12190"],
      description: "Indonesia"
    }
  ];

  const services = [
    "Pembuatan Website",
    "Pengembangan Aplikasi Mobile",
    "Pengembangan Aplikasi Desktop",
    "Integrasi Sistem",
    "Konsultasi IT",
    "Maintenance & Support",
    "Lainnya"
  ];

  return (
    <section id="contact" className="section-padding bg-tech-darker">
      <div className="section-container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-lg">
            Hubungi <span className="text-tech-cyan">TechNova Solutions</span>
          </h2>
          <p className="body-lg max-w-3xl mx-auto">
            Siap untuk memulai proyek teknologi Anda? Mari diskusikan kebutuhan 
            bisnis Anda dengan tim expert kami.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="heading-sm mb-6">Informasi Kontak</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="tech-card p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-tech-cyan/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-tech-cyan" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-tech-text font-semibold mb-2">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-tech-cyan text-sm mb-1">{detail}</p>
                        ))}
                        <p className="text-tech-text-muted text-sm">{info.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="tech-card p-6">
              <h4 className="text-tech-text font-semibold mb-4 flex items-center">
                <MessageCircle className="h-5 w-5 text-tech-cyan mr-2" />
                Chat Langsung
              </h4>
              <p className="text-tech-text-muted text-sm mb-4">
                Butuh bantuan segera? Chat dengan tim support kami.
              </p>
              <button className="btn-outline-glow w-full text-sm">
                Mulai Chat
              </button>
            </div>

            <div className="tech-card p-6">
              <h4 className="text-tech-text font-semibold mb-4 flex items-center">
                <Clock className="h-5 w-5 text-tech-cyan mr-2" />
                Jam Operasional
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-tech-text-muted">Senin - Jumat</span>
                  <span className="text-tech-text">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-tech-text-muted">Sabtu</span>
                  <span className="text-tech-text">09:00 - 15:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-tech-text-muted">Minggu</span>
                  <span className="text-tech-text-muted">Tutup</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="tech-card p-8">
              <h3 className="heading-sm mb-6">Konsultasi Gratis</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-tech-text font-medium mb-2">Nama Lengkap *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-tech-blue/30 border border-tech-cyan/30 rounded-xl text-tech-text placeholder-tech-text-muted focus:border-tech-cyan focus:outline-none transition-colors duration-300"
                      placeholder="Masukkan nama lengkap"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-tech-text font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-tech-blue/30 border border-tech-cyan/30 rounded-xl text-tech-text placeholder-tech-text-muted focus:border-tech-cyan focus:outline-none transition-colors duration-300"
                      placeholder="nama@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-tech-text font-medium mb-2">Perusahaan</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-tech-blue/30 border border-tech-cyan/30 rounded-xl text-tech-text placeholder-tech-text-muted focus:border-tech-cyan focus:outline-none transition-colors duration-300"
                      placeholder="Nama perusahaan"
                    />
                  </div>
                  <div>
                    <label className="block text-tech-text font-medium mb-2">No. Telepon</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-tech-blue/30 border border-tech-cyan/30 rounded-xl text-tech-text placeholder-tech-text-muted focus:border-tech-cyan focus:outline-none transition-colors duration-300"
                      placeholder="+62 xxx xxxx xxxx"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-tech-text font-medium mb-2">Layanan yang Dibutuhkan *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-tech-blue/30 border border-tech-cyan/30 rounded-xl text-tech-text focus:border-tech-cyan focus:outline-none transition-colors duration-300"
                    required
                  >
                    <option value="">Pilih layanan</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-tech-text font-medium mb-2">Pesan *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-tech-blue/30 border border-tech-cyan/30 rounded-xl text-tech-text placeholder-tech-text-muted focus:border-tech-cyan focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Jelaskan kebutuhan proyek atau pertanyaan Anda..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-glow w-full group">
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="tech-card p-8">
            <h3 className="heading-sm mb-6 text-center">Lokasi Kantor Kami</h3>
            <div className="bg-tech-blue/20 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-tech-cyan mx-auto mb-4" />
                <p className="text-tech-text font-medium">Jl. Sudirman No. 123</p>
                <p className="text-tech-text-muted">Jakarta Selatan 12190, Indonesia</p>
                <button className="btn-outline-glow mt-4">
                  Lihat di Google Maps
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
