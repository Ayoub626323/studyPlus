"use client";

import React from "react";
import Link from "next/link";

const NAV_MENU = [
  { name: "Accueil", href: "/" },
  { name: "Demo du site", href: "/demo-du-site" },
  { name: "Blog", href: "/blog" },
  { name: "CPGE", href: "#" },
  { name: "Contact", href: "#" },
  { name: "À Propos", href: "#" },
  { name: "Sujet Concours", href: "/sujets-concours" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50">
      <nav className="border-gray-200 bg-white px-4 py-2.5 shadow-sm dark:bg-gray-800 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              CPGE Horizon
            </span>
          </Link>

          <div className="flex items-center lg:order-2">
            <Link
              href="/connexion"
              className="mr-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 lg:px-5 lg:py-2.5"
            >
              Connexion
            </Link>
            <Link
              href="/inscrire"
              className="mr-2 rounded-lg bg-indigo-700 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 lg:px-5 lg:py-2.5"
            >
              Inscrire
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="ml-1 inline-flex rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
              aria-controls="mobile-menu-2"
              aria-expanded={mobileOpen}
            >
              <span className="sr-only">Ouvrir le menu</span>
              {mobileOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>

          <div
            className={`${
              mobileOpen ? "block" : "hidden"
            } w-full items-center justify-between lg:order-1 lg:flex lg:w-auto`}
            id="mobile-menu-2"
          >
            <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
              {NAV_MENU.map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-indigo-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
