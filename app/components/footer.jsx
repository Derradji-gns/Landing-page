"use client"

import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="">
      {/* ========== FOOTER ========== */}
      <footer className="mt-auto w-full max-w-340 py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-bluec">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
          <div className="col-span-full hidden lg:col-span-1 lg:block">
            <a className="flex-none font-semibold text-xl text-third text-foreground focus:outline-hidden focus:opacity-80" href="#" aria-label="Brand">Shiny Boutique</a>
            <p className="mt-3 text-xs text-white sm:text-sm text-muted-foreground-2">
              {t("footer.copyright")}
            </p>
          </div>
          {/* End Col */}

          <div>
            <h3 className="text-xm font-semibold text-white text-foreground uppercase">{t("footer.product")}</h3>
            <div className="mt-3 grid space-y-3 text-white text-sm">
              <p><a className="inline-flex gap-x-2 text-muted-foreground-2 hover:text-foreground focus:outline-hidden focus:text-foreground" href="#">{t("footer.pricing")}</a></p>
              <p><a className="inline-flex gap-x-2 text-muted-foreground-2 hover:text-foreground focus:outline-hidden focus:text-foreground" href="#">{t("footer.changelog")}</a></p>
              <p><a className="inline-flex gap-x-2 text-muted-foreground-2 hover:text-foreground focus:outline-hidden focus:text-foreground" href="#">{t("footer.docs")}</a></p>
              <p><a className="inline-flex gap-x-2 text-muted-foreground-2 hover:text-foreground focus:outline-hidden focus:text-foreground" href="#">{t("footer.download")}</a></p>
            </div>
          </div>
          {/* End Col */}

          <div>
            <h3 className="text-xm font-semibold text-white text-foreground uppercase">{t("footer.company")}</h3>
            <div className="mt-3 grid space-y-3 text-white text-sm">
              <p><a className="inline-flex gap-x-2 text-muted-foreground-2 hover:text-foreground focus:outline-hidden focus:text-foreground" href="#">{t("footer.aboutUs")}</a></p>
              <p><a className="inline-flex gap-x-2 text-muted-foreground-2 hover:text-foreground focus:outline-hidden focus:text-foreground" href="#">{t("footer.blog")}</a></p>
              <p><a className="inline-flex gap-x-2 text-muted-foreground-2 hover:text-foreground focus:outline-hidden focus:text-foreground" href="#">{t("footer.careers")}</a> <span className="inline text-primary">— {t("footer.hiring")}</span></p>
              <p><a className="inline-flex gap-x-2 text-muted-foreground-2 hover:text-foreground focus:outline-hidden focus:text-foreground" href="#">{t("footer.customers")}</a></p>
              <p><a className="inline-flex gap-x-2 text-muted-foreground-2 hover:text-foreground focus:outline-hidden focus:text-foreground" href="#">{t("footer.newsroom")}</a></p>
              <p><a className="inline-flex gap-x-2 text-muted-foreground-2 hover:text-foreground focus:outline-hidden focus:text-foreground" href="#">{t("footer.sitemap")}</a></p>
            </div>
          </div>
          {/* End Col */}

          {/* Add Resources / Developers / Industries columns here later, following the same t("footer.xxx") pattern */}
        </div>
        {/* End Grid */}

        <div className="pt-5 mt-5 border-t border-line-2">
          <div className="sm:flex sm:justify-between sm:items-center">
            <div className="flex flex-wrap items-center gap-3">
              {/* Language switcher lives in Nav — intentionally not duplicated here.
                  If you want a footer language switcher too, reuse the same
                  <select>/dropdown pattern from Nav.jsx, calling i18n.changeLanguage(). */}
            </div>

            <div className="flex flex-wrap justify-between items-center gap-3">
              <div className="mt-3 sm:hidden">
                <a className="flex-none font-semibold text-xl text-foreground focus:outline-hidden focus:opacity-80 text-third" href="#" aria-label="Brand">Shiny Boutique</a>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground-2 text-white">
                  {t("footer.copyright")}
                </p>
              </div>

              {/* Social Brands */}
              
              {/* End Social Brands */}
            </div>
            {/* End Col */}
          </div>
        </div>
      </footer>
      {/* ========== END FOOTER ========== */}
    </div>
  )
}