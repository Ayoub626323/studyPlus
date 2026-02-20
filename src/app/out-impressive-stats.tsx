"use client";

import React from "react";

const WorldIcon = () => (
  <svg className="size-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1.945m0 0a18.5 18.5 0 003.5-2.89m0 0A18.5 18.5 0 0012 3.055M18 20.055V18a2 2 0 00-2-2h-1.945m0 0a18.5 18.5 0 01-3.5 2.89m0 0A18.5 18.5 0 0112 20.945m0 0a18.5 18.5 0 01-3.5-2.89" />
  </svg>
);

const UsersIcon = () => (
  <svg className="size-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const BookIcon = () => (
  <svg className="size-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="size-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const STATS = [
  {
    icon: <WorldIcon />,
    title: "Étudiants",
    value: "2 000+",
    desc: "Prépa & Université",
  },
  {
    icon: <UsersIcon />,
    title: "Professeurs",
    value: "50+",
    desc: "Experts qualifiés",
  },
  {
    icon: <BookIcon />,
    title: "Cours en ligne",
    value: "200+",
    desc: "Maths & Physique",
  },
  {
    icon: <PhoneIcon />,
    title: "Support",
    value: "24/7",
    desc: "Disponible en permanence",
  },
];

export function OutImpressiveStats() {
  return (
    <section className="px-8 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto">
        <div className="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
          <h2 className="text-base-content text-2xl font-semibold md:text-3xl lg:text-4xl">
            Nos chiffres en ligne
          </h2>
          <p className="text-base-content/80 mx-auto max-w-2xl text-xl">
            Nous sommes fiers de notre engagement pour l&apos;excellence et de notre dévouement à votre réussite académique.
          </p>
        </div>
        <div className="stats w-full bg-base-100 shadow-sm">
          {STATS.map((stat, key) => (
            <div key={key} className="stat">
              <div className="stat-figure text-primary size-8">
                {stat.icon}
              </div>
              <div className="stat-title text-base-content/70">{stat.title}</div>
              <div className="stat-value text-base-content">{stat.value}</div>
              <div className="stat-desc text-base-content/60">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OutImpressiveStats;
