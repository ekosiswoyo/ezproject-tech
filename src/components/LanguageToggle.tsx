import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-tech-blue/30 hover:bg-tech-blue/50 border border-tech-cyan/30 hover:border-tech-cyan/50 transition-all duration-300 text-tech-text hover:text-tech-cyan"
      title={language === 'en' ? 'Switch to Indonesian' : 'Ganti ke Bahasa Inggris'}
    >
      <Globe size={16} />
      <span className="text-sm font-medium">
        {language === 'en' ? 'ID' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageToggle;