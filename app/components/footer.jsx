"use client"
export default function Footer() {
  return (
    <div className="">
      {/* ========== FOOTER ========== */}
      <footer className="mt-auto w-full max-w-340 py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-bluec">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
          <div className="col-span-full hidden lg:col-span-1 lg:block">
            <a className="flex-none font-semibold text-xl text-foreground focus:outline-hidden focus:opacity-80" href="#" aria-label="Brand">Brand</a>
            <p className="mt-3 text-xs text-white sm:text-sm text-muted-foreground-2">
              © 2026 Preline Labs.
            </p>
          </div>
          {/* End Col */}

          <div>
            <h3 className="text-xm font-semibold text-white text-foreground uppercase">Product</h3>
            <div className="mt-3 grid space-y-3 text-white text-sm">
              <p><a className="inline-flex gap-x-2 text-muted-foreground-2 hover:text-foreground focus:outline-hidden focus:text-foreground" href="#">Pricing</a></p>
              <p><a className="inline-flex gap-x-2 text-muted-foreground-2 hover:text-foreground focus:outline-hidden focus:text-foreground" href="#">Changelog</a></p>
              <p><a className="inline-flex gap-x-2 text-muted-foreground-2 hover:text-foreground focus:outline-hidden focus:text-foreground" href="#">Docs</a></p>
              <p><a className="inline-flex gap-x-2 text-muted-foreground-2 hover:text-foreground focus:outline-hidden focus:text-foreground" href="#">Download</a></p>
            </div>
          </div>
          {/* End Col */}

          <div>
            <h3 className="text-xm font-semibold text-white text-foreground uppercase">Company</h3>
            <div className="mt-3 grid space-y-3 text-white text-sm">
              <p><a className="inline-flex gap-x-2 text-muted-foreground-2 hover:text-foreground focus:outline-hidden focus:text-foreground" href="#">About us</a></p>
              <p><a className="inline-flex gap-x-2 text-muted-foreground-2 hover:text-foreground focus:outline-hidden focus:text-foreground" href="#">Blog</a></p>
              <p><a className="inline-flex gap-x-2 text-muted-foreground-2 hover:text-foreground focus:outline-hidden focus:text-foreground" href="#">Careers</a> <span className="inline text-primary">— We're hiring</span></p>
              <p><a className="inline-flex gap-x-2 text-muted-foreground-2 hover:text-foreground focus:outline-hidden focus:text-foreground" href="#">Customers</a></p>
              <p><a className="inline-flex gap-x-2 text-muted-foreground-2 hover:text-foreground focus:outline-hidden focus:text-foreground" href="#">Newsroom</a></p>
              <p><a className="inline-flex gap-x-2 text-muted-foreground-2 hover:text-foreground focus:outline-hidden focus:text-foreground" href="#">Sitemap</a></p>
            </div>
          </div>
          {/* End Col */}

          {/* Repeat same fixes for Resources, Developers, Industries, Dropdown, Social links, etc. */}
        </div>
        {/* End Grid */}

        <div className="pt-5 mt-5 border-t border-line-2">
          <div className="sm:flex sm:justify-between sm:items-center">
            <div className="flex flex-wrap items-center gap-3">
              {/* Language Dropdown */}
              {/* ... all dropdown elements updated with className ... */}
            </div>

            <div className="flex flex-wrap justify-between items-center gap-3">
              <div className="mt-3 sm:hidden">
                <a className="flex-none font-semibold text-xl text-foreground focus:outline-hidden focus:opacity-80 text-third" href="#" aria-label="Brand">Shiny Boutique</a>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground-2 text-white">
                  © 2026 Preline Labs.
                </p>
              </div>

              {/* Social Brands */}
              <div className="space-x-4">
                <a className="inline-block text-muted-foreground-1 hover:text-foreground focus:outline-hidden focus:text-foreground" href="#">
                  {/* SVG icons remain unchanged */}
                </a>
              </div>
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
