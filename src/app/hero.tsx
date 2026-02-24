"use client";

import Link from "next/link";
import Image from "next/image";

function Hero() {
  return (
    <div className="bg-white">
      <section className="min-h-screen">
        <div className="flex h-full flex-col justify-between gap-16 overflow-x-hidden pt-32 md:gap-20 md:pt-36 lg:gap-24 lg:pt-40">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 justify-self-center px-4 text-center sm:px-6 lg:px-8">
            <div className="bg-base-200 border-base-content/20 flex w-fit items-center gap-2.5 rounded-full border px-3 py-2">
              <span className="badge badge-primary shrink-0 rounded-full text-sm">
                Formation CPGE
              </span>
              <span className="text-base-content/80 text-base">
                Solution pour la réussite en prépa scientifique
              </span>
            </div>
            <h1 className="text-base-content relative z-10 text-4xl font-bold leading-[1.15] max-md:text-3xl md:max-w-3xl md:text-balance lg:text-5xl">
              <span>Commencez votre réussite en prépa scientifique</span>
              <svg
                width="223"
                height="12"
                viewBox="0 0 223 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -bottom-1.5 left-10 -z-10 max-lg:left-4 max-md:hidden"
              >
                <path
                  d="M1.30466 10.7431C39.971 5.28788 76.0949 3.02 115.082 2.30401C143.893 1.77489 175.871 0.628649 204.399 3.63102C210.113 3.92052 215.332 4.91391 221.722 6.06058"
                  stroke="url(#paint0_linear_hero)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_hero"
                    x1="19.0416"
                    y1="4.03539"
                    x2="42.8362"
                    y2="66.9459"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.2" stopColor="var(--p)" />
                    <stop offset="1" stopColor="var(--pc)" />
                  </linearGradient>
                </defs>
              </svg>
            </h1>
            <p className="text-base-content/80 max-w-3xl text-xl">
              Des cours structurés, des exercices corrigés et des méthodes claires
              pour réussir vos concours et vos DS.
            </p>

            <Link
              href="/paiement"
              className="btn btn-primary btn-lg inline-flex items-center gap-2"
            >
              Commencer maintenant
              <svg
                className="size-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </div>

          <div className="relative w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80"
              alt="Étudiants en prépa - CPGE Horizon"
              width={1200}
              height={400}
              className="h-56 w-full object-cover md:h-64 lg:h-72"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
