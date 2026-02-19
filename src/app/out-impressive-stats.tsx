"use client";

import React from "react";

const STATS = [
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    ),
    title: "Étudiants",
    value: "2 000+",
    desc: "Prépa & Université",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
      />
    ),
    title: "Professeurs",
    value: "50+",
    desc: "Experts qualifiés",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    ),
    title: "Cours en ligne",
    value: "200+",
    desc: "Maths & Physique",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    ),
    title: "Support",
    value: "24/7",
    desc: "Disponible en permanence",
  },
];

export function OutImpressiveStats() {
  return (
    <section className="px-8 pt-12">
      <div className="container mx-auto text-center lg:text-left">
        <div className="grid place-items-center text-center">
          <h2 className="mb-2 text-4xl font-bold text-blue-gray-900">
            Nos chiffres en ligne
          </h2>
          <p className="mx-auto mb-24 w-full !text-gray-500 lg:w-5/12 text-lg">
            Nous sommes fiers de notre engagement pour l&apos;excellence et de
            notre dévouement à votre réussite académique.
          </p>
        </div>
        <div className="stats w-full bg-white shadow">
          {STATS.map((stat, key) => (
            <div key={key} className="stat">
              <div className="stat-figure text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current"
                >
                  {stat.icon}
                </svg>
              </div>
              <div className="stat-title text-gray-600">{stat.title}</div>
              <div className="stat-value text-gray-900">{stat.value}</div>
              <div className="stat-desc text-gray-500">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default OutImpressiveStats;
