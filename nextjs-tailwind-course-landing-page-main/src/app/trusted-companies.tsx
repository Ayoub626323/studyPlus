"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const COMPANIES = [
  {
    name: "Classes prépas",
    img: "https://media.licdn.com/dms/image/v2/D4E0BAQHd79qsWkdXXw/company-logo_200_200/company-logo_200_200/0/1703509097930/classes_prepas_logo?e=2147483647&v=beta&t=tjwd7yWcBxRUj4H2znpu9mD6KSBcnDg3XLtZvNTuDNU",
  },
  {
    name: "Partenaire",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiFFDd82kDq4ZhpkehJehmQOSno_XzhSmiCg&s",
  },
  {
    name: "Arts et Métiers",
    img: "https://www.sorbonne.fr/wp-content/uploads/Arts_et_m%C3%A9tiers_Logo_couleur_FR.png",
  },
  {
    name: "FST Maroc",
    img: "https://fst-maroc.com/guest/img/logo/logo.png",
  },
];

function TrustedCompany() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto grid items-center place-items-center">
        <div className="text-center">
          <Typography variant="h6" className="mb-4 uppercase !text-gray-500">
            COMMUNAUTÉ ACADÉMIQUE
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-12">
            Partenaires et établissements de confiance
          </Typography>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {COMPANIES.map((company, key) => (
            <Image
              width={200}
              height={200}
              key={key}
              src={company.img}
              alt={company.name}
              className="w-32 h-32 object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedCompany;
