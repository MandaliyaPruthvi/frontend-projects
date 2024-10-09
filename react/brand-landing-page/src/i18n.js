import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files for each language
import enTranslation from './locale/en.json';
import frTranslation from './locale/fr.json';
// import deTranslation from './locale/de.json';
// import itTranslation from './locale/it.json';
// import faTranslation from './locale/fa.json';
// import esTranslation from './locale/es.json';

i18n
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources: {
      en: { translation: enTranslation },
      fr: { translation: frTranslation },
    //   de: { translation: deTranslation },
    //   it: { translation: itTranslation },
    //   fa: { translation: faTranslation },
    //   es: { translation: esTranslation },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if translation is missing
    interpolation: {
      escapeValue: false, // React already escapes values to prevent XSS
    },
  });

export default i18n;
