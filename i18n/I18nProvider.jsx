"use client"

import { I18nextProvider } from "react-i18next";
import { useEffect } from "react";
import i18n, { RTL_LANGUAGES } from "./i18n";

function applyDocumentDirection(lng) {
  document.documentElement.lang = lng;
  document.documentElement.dir = RTL_LANGUAGES.includes(lng) ? "rtl" : "ltr";
}

export default function I18nProvider({ children }) {

  useEffect(() => {
    // Apply on mount (picks up whatever language was loaded from localStorage)
    applyDocumentDirection(i18n.language);

    // Re-apply whenever the user switches language
    const handleChange = (lng) => applyDocumentDirection(lng);
    i18n.on("languageChanged", handleChange);

    return () => i18n.off("languageChanged", handleChange);
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}