"use client";

import Image from "next/image";

const SocialIcons = () => (
  <div className="card-actions h-5 gap-3">
    <a href="#" className="text-blue-600" aria-label="Facebook">
      <svg className="size-5.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    </a>
    <a href="#" className="text-sky-500" aria-label="Twitter">
      <svg className="size-5.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    </a>
    <a href="#" className="text-base-content" aria-label="GitHub">
      <svg className="size-5.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    </a>
    <a href="#" className="text-pink-500" aria-label="Instagram">
      <svg className="size-5.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    </a>
  </div>
);

const PROFESSEURS = [
  {
    img: "https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/team/team-6.png",
    name: "Prof. Ahmed Bennani",
    role: "Mathématiques — Analyse",
    description: "Spécialiste en analyse et équations différentielles.",
  },
  {
    img: "https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/team/team-7.png",
    name: "Prof. Fatima El Amrani",
    role: "Mathématiques — Algèbre",
    description: "Experte en algèbre linéaire et structures algébriques.",
  },
  {
    img: "https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/team/team-8.png",
    name: "Prof. Youssef Idrissi",
    role: "Physique — Mécanique",
    description: "Enseigne la mécanique classique et analytique.",
  },
  {
    img: "https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/team/team-5.png",
    name: "Prof. Karim Tazi",
    role: "Mathématiques — Probabilités",
    description: "Spécialiste en probabilités et statistiques.",
  },
];

export function TeamProfesseurs() {
  return (
    <div className="bg-base-100 py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16 lg:mb-24">
          <h2 className="text-base-content mb-4 text-2xl font-semibold md:text-3xl lg:text-4xl">
            Notre équipe pédagogique
          </h2>
          <p className="text-base-content/80 text-xl">
            Découvrez les professeurs passionnés de Maths & Physique qui accompagnent votre réussite.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-10 xl:grid-cols-4">
          {PROFESSEURS.map((prof) => (
            <div
              key={prof.name}
              className="card card-bordered h-max shadow-none transition hover:border-primary"
            >
              <figure className="bg-base-200 relative h-60 pt-6">
                <Image
                  src={prof.img}
                  alt={prof.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </figure>
              <div className="card-body gap-3">
                <h3 className="text-base-content text-lg font-medium">{prof.name}</h3>
                <div className="divider my-0"></div>
                <div>
                  <p className="text-base-content mb-1 font-medium">{prof.role}</p>
                  <p className="text-base-content/80">{prof.description}</p>
                </div>
                <SocialIcons />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamProfesseurs;
