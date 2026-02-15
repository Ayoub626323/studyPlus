"use client";

import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";


function TESTIMONIAL() {
  return (
    <section className="px-8 py-40">
      <div className="container mx-auto">
        <Card color="transparent" shadow={false} className="">
          <CardBody className="col-span-full gap-10 place-items-center overflow-visible grid grid-cols-1 lg:grid-cols-4">
            <div className="w-full xl:w-[600px] flex items-center overflow-hidden rounded-xl justify-center col-span-2 h-full">
              <Image
                width={768}
                height={768}
                src="/image/blogs/blog6.svg"
                alt="testimonial image"
                className="w-full h-full scale-110 object-cover"
              />
            </div>
            <div className="col-span-2 w-full min-w-0">
              <Typography variant="h6" color="blue" className="mb-4">
                COURS EN LIGNE
              </Typography>
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold break-words"
              >
                Maths & Physique — Prépa & Université
              </Typography>
              <Typography className="mb-1 w-full font-normal !text-gray-500 break-words">
                Progressez avec des cours structurés, des exercices corrigés et des méthodes claires pour réussir vos examens et concours.
              </Typography>
              <div className="grid mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-gray-500 rounded-full shrink-0" />
                  <Typography className="w-full font-normal !text-gray-500 break-words">
                    Cours par chapitres + fiches PDF
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-gray-500 rounded-full shrink-0" />
                  <Typography className="w-full font-normal !text-gray-500 break-words">
                    Exercices corrigés + quiz d&apos;entraînement
                  </Typography>
                </div>
              </div>
              <div className="flex items-center mt-8 gap-4">
                <Avatar
                  variant="circular"
                  src="/image/avatar3.jpg"
                  alt="Équipe pédagogique"
                  size="md"
                />
                <div className="min-w-0">
                  <Typography variant="h6" color="blue-gray" className="mb-0.5 break-words">
                    Équipe pédagogique
                  </Typography>
                  <Typography
                    variant="small"
                    className="font-normal !text-gray-500 break-words"
                  >
                    Professeurs de Maths & Physique
                  </Typography>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default TESTIMONIAL;
