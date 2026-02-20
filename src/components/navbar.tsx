"use client";

import React from "react";
import Link from "next/link";
import { Collapse, IconButton } from "@material-tailwind/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

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
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    const handleResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          {/* Logo - left */}
          <Link
            href="/"
            className="shrink-0 text-xl font-bold text-gray-900 transition hover:text-gray-700"
          >
            CPGE Horizon
          </Link>

          {/* Desktop menu - center */}
          <ul className="hidden flex-1 items-center justify-center gap-8 lg:flex">
            {NAV_MENU.map(({ name, href }) => (
              <li key={name}>
                <Link
                  href={href}
                  className="text-sm font-medium text-gray-600 transition hover:text-gray-900"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right: Connexion & Inscrire buttons */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Link
              href="/connexion"
              className="shrink-0 rounded-full border-2 border-sky-500 bg-white px-4 py-2 font-medium text-sky-600 transition hover:bg-sky-50 hover:border-sky-600 sm:px-6 sm:py-2.5"
            >
              Connexion
            </Link>
            <Link
              href="/inscrire"
              className="shrink-0 rounded-full bg-sky-600 px-4 py-2 font-medium text-white transition hover:bg-sky-700 sm:px-6 sm:py-2.5"
            >
              Inscrire
            </Link>
          </div>

          {/* Mobile menu button */}
          <IconButton
            variant="text"
            color="gray"
            onClick={handleOpen}
            className="ml-auto lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? (
              <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-6 w-6" />
            )}
          </IconButton>
        </div>
      </div>

      {/* Mobile menu */}
      <Collapse open={open}>
        <div className="border-t border-gray-100 bg-white px-4 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_MENU.map(({ name, href }) => (
              <li key={name}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2 px-4">
            <Link
              href="/connexion"
              onClick={() => setOpen(false)}
              className="w-full rounded-full border-2 border-sky-500 bg-white py-3 text-center font-medium text-sky-600 hover:bg-sky-50"
            >
              Connexion
            </Link>
            <Link
              href="/inscrire"
              onClick={() => setOpen(false)}
              className="w-full rounded-full bg-sky-600 py-3 text-center font-medium text-white hover:bg-sky-700"
            >
              Inscrire
            </Link>
          </div>
        </div>
      </Collapse>
    </nav>
  );
}

export default Navbar;
