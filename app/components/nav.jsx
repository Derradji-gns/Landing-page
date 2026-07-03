"use client"

import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "ar", label: "العربية" },
];

export default function Nav() {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // ✅ new state for mobile menu
  const { t, i18n } = useTranslation();

  const currentLang = LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

  return (
    <div>
      <header className="flex flex-wrap sm:justify-start w-full py-3 bg-bluec border-b border-gray-200">
        <nav className="max-w-[1360px] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between">
          <a
            className="sm:order-1 flex-none text-xl font-semibold text-third focus:outline-none focus:opacity-80"
            href="#"
          >
            {t("nav.brand")}
          </a>

          <div className="sm:order-3 flex items-center gap-x-2">
            {/* Language switcher */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangMenuOpen((prev) => !prev)}
                className="py-2 px-3 inline-flex items-center gap-x-1.5 text-sm font-medium rounded-lg bg-white border text-bluec shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                aria-expanded={langMenuOpen}
                aria-label="Change language"
              >
                <Globe className="size-4" />
                {currentLang.label}
              </button>

              {langMenuOpen && (
                <div
                  className="absolute end-0 mt-2 w-36 rounded-lg bg-white border border-gray-200 shadow-md py-1 z-10"
                  role="menu"
                >
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => {
                        i18n.changeLanguage(lang.code);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-start px-3 py-2 text-sm hover:bg-gray-50 ${
                        lang.code === currentLang.code
                          ? "font-semibold text-third"
                          : "text-bluec"
                      }`}
                      role="menuitem"
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile toggle */}
            
          </div>

          
        </nav>
      </header>
    </div>
  );
}
