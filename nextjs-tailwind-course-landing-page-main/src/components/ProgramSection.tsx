"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

function ProgramSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT: Single big image */}
        <div className="relative w-full h-[320px] overflow-hidden rounded-2xl shadow-xl md:h-[420px]">
          <Image
            width={800}
            height={525}
            src="https://myschool-maroc.com/wp-content/uploads/2023/11/young-man-listening-music-during-study-session-1024x683.jpg"
            alt="StudyPlus - soutien scolaire"
            className="h-full w-full rounded-2xl object-cover shadow-xl"
          />
        </div>

        {/* RIGHT: Text content */}
        <div className="flex flex-col min-w-0">
          <Typography
            variant="h3"
            className="mb-4 text-2xl font-bold text-[#1f3b7a] md:text-3xl lg:text-4xl break-words"
          >
            Programme d&apos;excellence StudyPlus
          </Typography>
          <Typography className="mb-4 text-base font-medium text-gray-600 md:text-lg">
            StudyPlus : Cours de soutien en Maths & Physique pour collège, lycée, prépa et université.
          </Typography>
          <Typography className="mb-6 text-gray-500 break-words">
            Un accompagnement structuré avec des cours clairs, des exercices corrigés et un suivi personnalisé pour progresser rapidement et réussir vos examens.
          </Typography>
          <ul className="mb-8 grid gap-3">
            {[
              "Test de niveau gratuit (orientation)",
              "Cours en direct + replays",
              "Exercices corrigés + quiz",
              "100% en ligne, accessible partout",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="w-fit rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white shadow transition hover:bg-orange-600"
          >
            Lire plus
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProgramSection;
