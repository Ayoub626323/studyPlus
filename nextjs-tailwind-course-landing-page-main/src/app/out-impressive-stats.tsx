"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
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
          <Typography variant="h2" color="blue-gray" className="mb-2 text-4xl">
            Nos chiffres en ligne
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 w-full !text-gray-500 lg:w-5/12"
          >
            Nous sommes fiers de notre engagement pour l&apos;excellence et de
            notre dévouement à votre réussite académique.
          </Typography>
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