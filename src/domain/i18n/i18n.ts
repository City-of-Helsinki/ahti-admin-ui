import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import postProcessor from 'i18next-sprintf-postprocessor';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '../assets/translations/en.json';
import fi from '../assets/translations/fi.json';

i18n
  .use(postProcessor)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'fi',
    interpolation: {
      escapeValue: false
    },
    lng: 'fi',
    resources: {
      fi: {
        translation: fi
      },
      en: {
        translation: en
      }
    }
  });

export default i18n;
