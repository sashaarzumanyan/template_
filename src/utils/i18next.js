import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "../assets/locales/en/translation.json";
// import translationAM from "../../public/assets/locales/am/translation.json";
import translationRU from "../assets/locales/ru/translation.json";

const fallbackLng = ["en"];
const availableLanguages = ["en", "am", "ru"];

const resources = {
  en: {
    translation: translationEN
  },
  //   am: {
  //     translation: translationAM
  //   },
  ru: {
    translation: translationRU
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng,

    detection: {
      checkWhitelist: true
    },

    debug: false,

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
