"use client";

import React from "react";
import Image from "next/image";

import {
  GlobeEuropeAfricaIcon,
  MicrophoneIcon,
  PuzzlePieceIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

import CategoryCard from "@/components/category-card";


const CATEGORIES = [
  {
    img: "https://xapbm7c37i.cloudimg.io/https://sherpas.com/p/files/photos/maths/concepts-avances-analyse-algebre-2.webp?w=640&q=95",
    icon: HeartIcon,
    title: "Cours en analyse MP*/MPSI/PCSI/TSI",
    desc: "45 Cours",
  },
  {
    img: "https://www.maths-et-tiques.fr/images/M_images/Image-10164.jpg",
    icon: PuzzlePieceIcon,
    title: "Cours en algèbre MP*/MPSI/PCSI/TSI",
    desc: "38 Cours",
  },
  {
    img: "https://thumbs.dreamstime.com/b/une-main-lan%C3%A7ant-des-d%C3%A9s-en-l-air-repr%C3%A9sentant-le-concept-de-chance-et-probabilit%C3%A9-414118467.jpg",
    icon: GlobeEuropeAfricaIcon,
    title: "Cours en probabilités MP*/MPSI/PCSI/TSI",
    desc: "32 Cours",
  },
  {
img: "https://media1.ledevoir.com/images_galerie/originale_1742148_1355429/image.jpg?crop=3%3A2%2Csmart&width=1920",
           icon: MicrophoneIcon,
           title: "Cours en physique MP*/MPSI/PCSI/TSI",
    desc: "50 Cours",
  },
];

export function CoursesCategories() {
  return (
    <section className="container mx-auto overflow-hidden px-8 py-12 sm:py-16 lg:py-20">
      <div className="mb-20 grid place-items-center text-center">
        <h2 className="my-3 text-3xl font-bold text-blue-gray-900">
          Catégories de cours
        </h2>
        <p className="!text-gray-500 lg:w-6/12 text-lg">
          Une sélection complète de cours conçus pour vous donner les compétences nécessaires pour exceller dans vos études supérieures.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="relative grid h-full w-full place-items-center overflow-hidden rounded-xl bg-gray-900 text-center">
          <Image
            width={768}
            height={768}
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80"
            alt="Études supérieures"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
          <div className="relative w-full p-6">
            <p className="text-xs font-bold text-white opacity-50">
              Mathématiques & Sciences
            </p>
            <h4 className="mt-9 text-2xl font-bold text-white">
              Introduction aux études supérieures
            </h4>
            <p className="mt-4 mb-14 font-normal text-white opacity-50">
              Prêt à commencer votre parcours académique ?
            </p>
            <button
              type="button"
              className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-900"
            >
              Voir les packs
            </button>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(0, 2).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(2, 4).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoursesCategories;