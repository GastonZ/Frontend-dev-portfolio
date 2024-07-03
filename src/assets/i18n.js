import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
      // Aquí defines tus traducciones para cada idioma
      en: {
        translation: {
            SERVICES: 'Services',
            WORK: 'Work',
            PROJECTS: 'Projects',
            INTERESTS: 'Interests',
            SOFT_DEV: 'Software developer and ',
            WEB_DEV: 'Web developer'
        },
      },
      es: {
        translation: {
            SERVICES: 'Servicios',
            WORK: 'Trabajemos',
            PROJECTS: 'Proyectos',
            INTERESTS: 'Intereses',
            SOFT_DEV: 'Desarrollador de Software y',
            WEB_DEV: 'Desarrollador Web'
        },
      },
    },
    lng: 'en', 
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false, 
    },
  });
  
  export default i18n;
  