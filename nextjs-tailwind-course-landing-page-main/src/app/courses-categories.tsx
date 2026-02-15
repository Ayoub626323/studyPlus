"use client";

import React from "react";
import Image from "next/image";
import {
  Button,
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";

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
        <Typography variant="h2" color="blue-gray" className="my-3">
          Catégories de cours
        </Typography>
        <Typography variant="lead" className="!text-gray-500 lg:w-6/12">
          Une sélection complète de cours conçus pour vous donner les compétences nécessaires pour exceller dans vos études supérieures.
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card
          color="gray"
          className="relative grid h-full w-full place-items-center overflow-hidden text-center"
        >
          <Image
            width={768}
            height={768}
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80"
            alt="Études supérieures"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
          <CardBody className="relative w-full">
            <Typography color="white" className="text-xs font-bold opacity-50">
              Mathématiques & Sciences
            </Typography>
            <Typography variant="h4" className="mt-9" color="white">
              Introduction aux études supérieures
            </Typography>
            <Typography
              color="white"
              className="mt-4 mb-14 font-normal opacity-50"
            >
              Prêt à commencer votre parcours académique ?
            </Typography>
            <Button size="sm" color="white">
              S'inscrire maintenant
            </Button>
          </CardBody>
        </Card>
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