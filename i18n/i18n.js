import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import fr from "./locales/fr.json";
import ar from "./locales/ar.json";

const STORAGE_KEY = "app-language";
export const RTL_LANGUAGES = ["ar"];

// Next.js renders Client Components on the server for the initial HTML pass,
// where `window`/`localStorage` don't exist — guard against that.
const savedLang =
  typeof window !== "undefined"
    ? localStorage.getItem(STORAGE_KEY) || "en"
    : "en";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      ar: { translation: ar },
    },
    lng: savedLang,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

if (typeof window !== "undefined") {
  i18n.on("languageChanged", (lng) => {
    localStorage.setItem(STORAGE_KEY, lng);
  });
}

export default i18n;