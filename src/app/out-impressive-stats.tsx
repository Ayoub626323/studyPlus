"use client";

import React from "react";
import {
  DocumentTextIcon,
  PlayCircleIcon,
  PencilSquareIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/react/24/solid";

import StatsCard from "@/components/stats-card";


const STATS = [
  {
    icon: DocumentTextIcon,
    count: "2 000+",
    title: "Étudiants",
  },
  {
    icon: PlayCircleIcon,
    count: "50+",
    title: "Professeurs",
  },
  {
    icon: PencilSquareIcon,
    count: "200+",
    title: "Cours en ligne",
  },
  {
    icon: PhoneArrowDownLeftIcon,
    count: "24/7",
    title: "Support",
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
        <div className="grid gap-y-16 gap-x-10 md:grid-cols-2 lg:grid-cols-4">
          {STATS.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default OutImpressiveStats;