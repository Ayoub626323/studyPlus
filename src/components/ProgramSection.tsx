"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

function ProgramSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 sm:py-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT: Single big image */}
        <div className="relative w-full h-[320px] overflow-hidden rounded-2xl shadow-xl md:h-[420px]">
          <Image
            width={800}
            height={525}
            src="https://myschool-maroc.com/wp-content/uploads/2023/11/young-man-listening-music-during-study-session-1024x683.jpg"
            alt="CPGE Horizon - soutien scolaire"
            className="h-full w-full rounded-2xl object-cover shadow-xl"
          />
        </div>

        {/* RIGHT: Text content */}
        <div className="flex flex-col min-w-0">
          <Typography
            variant="h3"
            className="mb-4 text-2xl font-bold text-base-content md:text-3xl lg:text-4xl break-words"
          >
            Programme d&apos;excellence CPGE Horizon
          </Typography>
          <Typography className="mb-4 text-base font-medium text-base-content/70 md:text-lg">
            CPGE Horizon : Cours de soutien en Maths & Physique pour la prépa.
          </Typography>
          <Typography className="mb-6 text-base-content/70 break-words">
            Un accompagnement structuré avec des cours clairs, des exercices corrigés et un suivi personnalisé pour progresser rapidement et réussir vos DS.
          </Typography>
          <ul className="mb-8 grid gap-3">
            {[
              "Profs experts",
              "Encadrement personnalisé",
              "Cours complet + exercices",
              "Problèmes + extraits des anciens concours",
              "100% en ligne via tableau blanc",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span className="text-base-content/80">{item}</span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="w-fit rounded-xl bg-primary px-8 py-4 font-semibold text-primary-content shadow transition hover:bg-primary/90"
          >
            Lire plus
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProgramSection;
