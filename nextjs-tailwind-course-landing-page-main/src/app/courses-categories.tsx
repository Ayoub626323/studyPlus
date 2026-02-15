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
    img: "https://universcosmologiephysique.home.blog/wp-content/uploads/2019/01/img0.png?w=584",
    icon: HeartIcon,
    title: "Cours en analyse",
    desc: "45 Cours",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjRI_nEoLYAnGbTTHzYvN4f26j7mEwveOh2w&s",
    icon: PuzzlePieceIcon,
    title: "Cours en algèbre",
    desc: "38 Cours",
  },
  {
    img: "https://leamymaths.ie/wp-content/uploads/2020/04/integration.jpg",
    icon: GlobeEuropeAfricaIcon,
    title: "Cours en probabilités",
    desc: "32 Cours",
  },
  {
    img: "https://universcosmologiephysique.home.blog/wp-content/uploads/2019/01/img0.png?w=584",
    icon: MicrophoneIcon,
    title: "Cours en physique",
    desc: "50 Cours",
  },
];

export function CoursesCategories() {
  return (
    <section className="container mx-auto px-8 py-36">
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
              S&apos;inscrire maintenant
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