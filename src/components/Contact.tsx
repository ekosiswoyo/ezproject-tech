
import { useLanguage } from '@/contexts/LanguageContext';
import { AlertCircle, CheckCircle, Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";
import { API_ENDPOINTS } from '@/config/api';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch(API_ENDPOINTS.CONSULTATION, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus({
          type: 'success',
          message: result.message
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message || t('contact.form.error')
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: t('contact.form.serverError')
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.info.phone.title'),
      details: ["+62 21 5555 7777", "+62 811 9999 8888"],
      description: t('contact.info.phone.description')
    },
    {
      icon: Mail,
      title: t('contact.info.email.title'),
      details: ["noreply@ezproject.tech", "support@ezproject.tech"],
      description: t('contact.info.email.description')
    },
    {
      icon: MapPin,
      title: t('contact.info.office.title'),
      details: ["Jl. Sudirman No. 123", "Jakarta Selatan 12190"],
      description: "Indonesia"
    }
  ];

  const services = [
    t('contact.services.website'),
    t('contact.services.mobile'),
    t('contact.services.desktop'),
    t('contact.services.integration'),
    t('contact.services.consulting'),
    t('contact.services.maintenance'),
    t('contact.services.other')
  ];

  return (
    <section id="contact" className="section-padding bg-tech-darker">
      <div className="section-container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-lg">
            {t("contact.title")}{" "}
            <span className="text-tech-cyan">EzProject</span>
          </h2>
          <p className="body-lg max-w-3xl mx-auto">{t("contact.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="heading-sm mb-6">{t("contact.info.title")}</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="tech-card p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-tech-cyan/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-tech-cyan" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-tech-text font-semibold mb-2">
                          {info.title}
                        </h4>
                        {info.details.map((detail, detailIndex) => (
                          <p
                            key={detailIndex}
                            className="text-tech-cyan text-sm mb-1"
                          >
                            {detail}
                          </p>
                        ))}
                        <p className="text-tech-text-muted text-sm">
                          {info.description}
                        </p>
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
                {t("contact.chat.title")}
              </h4>
              <p className="text-tech-text-muted text-sm mb-4">
                {t("contact.chat.description")}
              </p>
              <button
                className="btn-outline-glow w-full text-sm"
                onClick={() => {
                  const phoneNumber = "085712386288";
                  const message = t("contact.chat.whatsappMessage");
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    message
                  )}`;
                  window.open(whatsappUrl, "_blank");
                }}
              >
                {t("contact.chat.button")}
              </button>
            </div>

            <div className="tech-card p-6">
              <h4 className="text-tech-text font-semibold mb-4 flex items-center">
                <Clock className="h-5 w-5 text-tech-cyan mr-2" />
                {t("contact.hours.title")}
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-tech-text-muted">
                    {t("contact.hours.weekdays")}
                  </span>
                  <span className="text-tech-text">09:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-tech-text-muted">
                    {t("contact.hours.saturday")}
                  </span>
                  <span className="text-tech-text">09:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-tech-text-muted">
                    {t("contact.hours.sunday")}
                  </span>
                  <span className="text-tech-text">09:00 - 18:00</span>
                  {/* <span className="text-tech-text-muted">{t('contact.hours.closed')}</span> */}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="tech-card p-8">
              <h3 className="heading-sm mb-6">{t("contact.form.title")}</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-tech-text font-medium mb-2">
                      {t("contact.form.name")} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-tech-blue/30 border border-tech-cyan/30 rounded-xl text-tech-text placeholder-tech-text-muted focus:border-tech-cyan focus:outline-none transition-colors duration-300"
                      placeholder={t("contact.form.namePlaceholder")}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-tech-text font-medium mb-2">
                      {t("contact.form.email")} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-tech-blue/30 border border-tech-cyan/30 rounded-xl text-tech-text placeholder-tech-text-muted focus:border-tech-cyan focus:outline-none transition-colors duration-300"
                      placeholder={t("contact.form.emailPlaceholder")}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-tech-text font-medium mb-2">
                      {t("contact.form.company")}
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-tech-blue/30 border border-tech-cyan/30 rounded-xl text-tech-text placeholder-tech-text-muted focus:border-tech-cyan focus:outline-none transition-colors duration-300"
                      placeholder={t("contact.form.companyPlaceholder")}
                    />
                  </div>
                  <div>
                    <label className="block text-tech-text font-medium mb-2">
                      {t("contact.form.phone")}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-tech-blue/30 border border-tech-cyan/30 rounded-xl text-tech-text placeholder-tech-text-muted focus:border-tech-cyan focus:outline-none transition-colors duration-300"
                      placeholder={t("contact.form.phonePlaceholder")}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-tech-text font-medium mb-2">
                    {t("contact.form.service")} *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-tech-blue/30 border border-tech-cyan/30 rounded-xl text-tech-text focus:border-tech-cyan focus:outline-none transition-colors duration-300"
                    required
                  >
                    <option value="">
                      {t("contact.form.servicePlaceholder")}
                    </option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-tech-text font-medium mb-2">
                    {t("contact.form.message")} *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-tech-blue/30 border border-tech-cyan/30 rounded-xl text-tech-text placeholder-tech-text-muted focus:border-tech-cyan focus:outline-none transition-colors duration-300 resize-none"
                    placeholder={t("contact.form.messagePlaceholder")}
                    required
                  ></textarea>
                </div>

                {/* Status Message */}
                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-xl flex items-center space-x-3 ${
                      submitStatus.type === "success"
                        ? "bg-green-500/20 border border-green-500/30"
                        : "bg-red-500/20 border border-red-500/30"
                    }`}
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                    )}
                    <p
                      className={`text-sm ${
                        submitStatus.type === "success"
                          ? "text-green-300"
                          : "text-red-300"
                      }`}
                    >
                      {submitStatus.message}
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-glow w-full group transition-all duration-300 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="mr-2 h-5 w-5 border-2 border-tech-cyan border-t-transparent rounded-full animate-spin"></div>
                      {t("contact.form.buttons.sending")}
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      {t("contact.form.buttons.send")}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="tech-card p-8">
            <h3 className="heading-sm mb-6 text-center">
              {t("contact.map.title")}
            </h3>
            <div className="bg-tech-blue/20 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-tech-cyan mx-auto mb-4" />
                <p className="text-tech-text font-medium">
                  Jl. Sudirman No. 123
                </p>
                <p className="text-tech-text-muted">
                  Jakarta Selatan 12190, Indonesia
                </p>
                <button className="btn-outline-glow mt-4">
                  {t("contact.map.button")}
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
