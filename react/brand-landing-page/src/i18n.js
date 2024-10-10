import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files for each language
import enTranslation from './locale/en.json';
import frTranslation from './locale/fr.json';
import gbTranslation from './locale/gb.json';
import itTranslation from './locale/it.json';
import spTranslation from './locale/sp.json';

i18n
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources: {
      en: { translation: enTranslation },
      fr: { translation: frTranslation },
      gb: { translation: gbTranslation },
      it: { translation: itTranslation },
      sp: { translation: spTranslation },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if translation is missing
    interpolation: {
      escapeValue: false, // React already escapes values to prevent XSS
    },
  });

export default i18n;
