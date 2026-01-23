'use client';

import { useState } from 'react';
import { Globe } from 'lucide-react';
import { useLocale } from '@/lib/i18n/LocaleProvider';
import { locales, localeNames, Locale } from '@/lib/i18n/config';


const LanguageSwitcher = () => {
  const { locale, changeLocale } = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const handleLocaleChange = (newLocale: Locale) => {
    changeLocale(newLocale);
    setIsOpen(false);
    // يمكنك إضافة منطق لتحديث النصوص هنا
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-secondary transition-colors"
        aria-label="تغيير اللغة"
      >
        <Globe className="w-5 h-5" />
        <span className="text-sm font-medium">{localeNames[locale]}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-background border rounded-lg shadow-lg py-2 min-w-[120px] z-50">
          {locales.map((lang) => (
            <button
              key={lang}
              onClick={() => handleLocaleChange(lang)}
              className={`w-full px-4 py-2 text-right hover:bg-secondary transition-colors ${
                locale === lang ? 'bg-primary/10 text-primary' : ''
              }`}
            >
              {localeNames[lang]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;