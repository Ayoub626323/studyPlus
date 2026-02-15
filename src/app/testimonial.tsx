"use client";

import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";


function TESTIMONIAL() {
  return (
    <section className="px-8 py-40">
      <div className="container mx-auto">
        <Card color="transparent" shadow={false} className="">
          <CardBody className="overflow-visible flex flex-col gap-8">
            <div className="w-full max-h-[400px] overflow-hidden rounded-xl">
              <img
                src="/image/classe-prepa.jpg"
                alt="Classe préparatoire CPGE TSI - Lycée Le Corbusier"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full max-w-2xl">
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
