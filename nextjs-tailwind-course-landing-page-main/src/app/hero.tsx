"use client";

import Image from "next/image";
import { Button } from "@material-tailwind/react";

function Hero() {
  return (
    <section
      className="relative w-full overflow-visible bg-[#1f3b7a] py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          {/* Text content - left */}
          <div className="flex flex-1 flex-col text-center lg:text-left">
            <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl xl:text-6xl">
              Cours de soutien supérieur pour les BAC+1 , BAC+2
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white md:text-xl">
              Progressez à votre rythme avec des cours adaptés, des exercices corrigés et un accompagnement personnalisé pour réussir vos examens.
            </p>
            <div className="mt-10 flex justify-center lg:justify-start">
              <Button
                className="rounded-full bg-orange-500 px-8 py-3.5 text-base font-semibold text-white hover:bg-orange-600"
              >
                Inscrivez-vous Maintenant !
              </Button>
            </div>
          </div>

          {/* Image grid - right */}
          <div className="relative w-full flex-1 lg:max-w-lg xl:max-w-xl">
            {/* Orange decorative shape - centered between images */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-2xl border-4 border-orange-500 sm:h-16 sm:w-16"
              aria-hidden
            />
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80",
                "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80",
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80",
                "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80",
              ].map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-square overflow-hidden rounded-2xl"
                >
                  <Image
                    width={300}
                    height={300}
                    src={src}
                    alt={`Soutien scolaire ${i + 1}`}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* White wave shape - bottom */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 h-16 w-full sm:h-20 md:h-24"
        aria-hidden
      >
        <path
          fill="white"
          d="M0,64 C360,100 720,20 1080,64 C1260,86 1380,86 1440,64 L1440,120 L0,120 Z"
        />
      </svg>
    </section>
  );
}

export default Hero;
