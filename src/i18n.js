import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import enTranslation from './locales/en/translation.json';
import frTranslation from './locales/fr/translation.json';
import arTranslation from './locales/ar/translation.json'; // Arabic translations

const savedLanguage = localStorage.getItem('language') || 'en';
// Initialize i18n
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      fr: {
        translation: frTranslation
      },
      ar: {
        translation: arTranslation
      }
    },
    lng: savedLanguage, // Set the saved language or default to 'en'
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false
    },
    debug: true
  });

export default i18n;
