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
    <header className="border-base-content/20 bg-base-100 fixed top-0 z-10 w-full border-b py-1">
      <nav className="navbar mx-auto max-w-7xl rounded-b-xl px-4 sm:px-6 lg:px-8">
        <div className="w-full lg:flex lg:items-center lg:gap-2">
          <div className="navbar-start items-center justify-between max-lg:w-full">
            <Link
              href="/"
              className="text-base-content flex items-center gap-3 text-xl font-bold"
            >
              CPGE Horizon
            </Link>
            <div className="flex items-center gap-3 lg:hidden">
              <Link href="/connexion" className="btn btn-ghost btn-sm">
                Connexion
              </Link>
              <Link href="/inscrire" className="btn btn-primary btn-sm">
                Inscrire
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="btn btn-outline btn-secondary btn-square"
                aria-controls="navbar-block-4"
                aria-label="Toggle navigation"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? (
                  <svg
                    className="size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                ) : (
                  <svg
                    className="size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 12h18" />
                    <path d="M3 6h18" />
                    <path d="M3 18h18" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            id="navbar-block-4"
            className={`lg:navbar-center transition-all duration-300 overflow-hidden font-medium lg:flex ${
              mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 lg:max-h-none lg:opacity-100"
            }`}
          >
            <div className="text-base-content flex gap-6 text-base max-lg:mt-4 max-lg:flex-col lg:items-center">
              {NAV_MENU.map(({ name, href }) => (
                <Link
                  key={name}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-primary"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
          <div className="navbar-end max-lg:hidden flex items-center gap-2">
            <Link href="/connexion" className="btn btn-ghost btn-sm">
              Connexion
            </Link>
            <Link href="/inscrire" className="btn btn-primary btn-sm">
              Inscrire
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
