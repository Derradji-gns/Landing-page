"use client"

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Landing", href: "#", current: true },
    { label: "Account", href: "#" },
    { label: "Work", href: "#" },
    { label: "Blog", href: "#" },
  ];

  return (
    <div>
      <header className="flex flex-wrap sm:justify-start  w-full py-3 bg-bluec border-b border-gray-200">
        <nav className="max-w-[1360px] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between">
          <a
            className="sm:order-1 flex-none text-xl font-semibold text-third focus:outline-none focus:opacity-80"
            href="#"
          >
            Shiny Boutique
          </a>

          <div className="sm:order-3 flex items-center gap-x-2">
            

            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-white border  text-bluec shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            >
              English
            </button>
          </div>

          <div
            id="navbar-menu"
            className={`overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2 ${
              open ? "block" : "hidden"
            }`}
          >
            
          </div>
        </nav>
      </header>
    </div>
  );
}