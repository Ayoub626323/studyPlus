"use client";

import { Navbar, Footer } from "@/components";
import Image from "next/image";

export default function DemoDuSitePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-4xl">
          <h1 className="mb-4 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Demo du site
          </h1>
          <p className="mb-12 text-center text-lg text-gray-600">
            Découvrez une démonstration des fonctionnalités de CPGE Horizon.
          </p>

          <a
            href="#"
            className="block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6"
          >
            <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
              <div className="sm:order-last sm:shrink-0">
                <Image
                  alt=""
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160"
                  width={72}
                  height={72}
                  className="size-16 rounded-full object-cover sm:size-20"
                />
              </div>

              <div className="mt-4 sm:mt-0">
                <h3 className="text-lg font-medium text-pretty text-gray-900">
                  Chapitre — Polynômes : bases et méthodes essentielles prof Ayoub
                </h3>
                <p className="mt-1 text-sm text-gray-700">Prof Ayoub</p>

                <p className="mt-4 line-clamp-2 text-sm text-pretty text-gray-700">
                  Cours complet sur les polynômes : division euclidienne, racines,
                  factorisation et théorème de d&apos;Alembert, avec exemples détaillés et
                  exercices corrigés.
                </p>

                <p className="mt-4 text-sm text-gray-700">
                  📅 Niveau : Maths Sup (MPSI / PCSI)
                  <br />
                  📘 Support : Cours + exercices
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="#"
                    className="inline-block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-indigo-600"
                  >
                    Télécharger
                  </a>
                  <a
                    href="#"
                    className="inline-block rounded-sm border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 transition hover:bg-indigo-600 hover:text-white"
                  >
                    Voir exercices
                  </a>
                </div>
              </div>
            </div>

            <dl className="mt-6 flex gap-4 lg:gap-6">
              <div className="flex items-center gap-2">
                <dt className="text-gray-700">
                  <span className="sr-only">Date de publication</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>
                </dt>
                <dd className="text-xs text-gray-700">31/06/2025</dd>
              </div>

              <div className="flex items-center gap-2">
                <dt className="text-gray-700">
                  <span className="sr-only">Temps de lecture</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                </dt>
                <dd className="text-xs text-gray-700">12 minutes</dd>
              </div>
            </dl>
          </a>

          <a
            href="#"
            className="mt-6 block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6"
          >
            <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
              <div className="sm:order-last sm:shrink-0">
                <Image
                  alt=""
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160"
                  width={72}
                  height={72}
                  className="size-16 rounded-full object-cover sm:size-20"
                />
              </div>

              <div className="mt-4 sm:mt-0">
                <h3 className="text-lg font-medium text-pretty text-gray-900">
                  Chapitre — Suites : bases et astuces importantes
                </h3>
                <p className="mt-1 text-sm text-gray-700">Prof Ayoub</p>

                <p className="mt-4 line-clamp-2 text-sm text-pretty text-gray-700">
                  Maîtrisez les suites numériques : convergence, récurrence,
                  équivalents et méthodes de comparaison. Ce cours vous donne les
                  astuces essentielles pour résoudre les exercices types DS et concours.
                </p>

                <p className="mt-4 text-sm text-gray-700">
                  📅 Niveau : Maths Sup (MPSI / PCSI)
                  <br />
                  📘 Support : Cours + exercices
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="#"
                    className="inline-block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-indigo-600"
                  >
                    Télécharger
                  </a>
                  <a
                    href="#"
                    className="inline-block rounded-sm border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 transition hover:bg-indigo-600 hover:text-white"
                  >
                    Voir exercices
                  </a>
                </div>
              </div>
            </div>

            <dl className="mt-6 flex gap-4 lg:gap-6">
              <div className="flex items-center gap-2">
                <dt className="text-gray-700">
                  <span className="sr-only">Date de publication</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>
                </dt>
                <dd className="text-xs text-gray-700">15/07/2025</dd>
              </div>

              <div className="flex items-center gap-2">
                <dt className="text-gray-700">
                  <span className="sr-only">Temps de lecture</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                </dt>
                <dd className="text-xs text-gray-700">15 minutes</dd>
              </div>
            </dl>
          </a>

          {/* Video cards - same container width/alignment as section above */}
          <h2 className="mt-8 mb-6 text-center text-2xl font-bold text-gray-900 md:text-3xl">
            Cours vidéos
          </h2>
          <div className="flex w-full flex-col items-center justify-center gap-8 sm:flex-row sm:gap-6 lg:gap-8">
            <div className="w-full max-w-sm rounded-lg bg-white shadow-lg sm:order-2">
              <a href="#!">
                <video
                  width={320}
                  height={240}
                  controls
                  className="w-full rounded-t-lg"
                >
                  <source
                    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </a>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium text-gray-900">
                  Polynômes — Méthodes et exercices Sup / MPSI
                </h5>
                <p className="mb-4 text-base text-gray-700">
                  Vidéo de démonstration : division euclidienne, racines et
                  factorisation avec exemples corrigés pour la prépa.
                </p>
                <a
                  href="#"
                  className="inline-block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-indigo-600"
                >
                  Voir la vidéo
                </a>
              </div>
            </div>

            <div className="w-full max-w-sm rounded-lg bg-white shadow-lg sm:order-1">
              <a href="#!">
                <video
                  width={320}
                  height={240}
                  controls
                  className="w-full rounded-t-lg"
                >
                  <source
                    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </a>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium text-gray-900">
                  Suites — Convergence et récurrence Sup / MPSI
                </h5>
                <p className="mb-4 text-base text-gray-700">
                  Cours vidéo sur les suites numériques : convergence, théorèmes
                  de comparaison et démonstrations par récurrence.
                </p>
                <a
                  href="#"
                  className="inline-block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-indigo-600"
                >
                  Voir la vidéo
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
