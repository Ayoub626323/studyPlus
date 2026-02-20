"use client";

import { Navbar, Footer } from "@/components";
import Image from "next/image";

export default function SujetsConcoursPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Sujet Concours
          </h1>
          <p className="mb-12 text-center text-lg text-gray-600">
            Accédez au sujet des concours pour vous entraîner et préparer vos examens.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6">
              <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
                <div className="sm:order-last sm:shrink-0">
                  <Image
                    alt=""
                    src="https://www.sorbonne.fr/wp-content/uploads/ENS_Logo_TL.jpg"
                    width={72}
                    height={72}
                    className="size-16 rounded-full object-cover sm:size-20"
                  />
                </div>
                <div className="mt-4 sm:mt-0">
                  <h3 className="text-lg font-medium text-pretty text-gray-900">
                    Polytechnique – ENS, maths A
                  </h3>
                  <p className="mt-4 line-clamp-2 text-sm text-pretty text-gray-700">
                    Sujet d&apos;analyse et d&apos;algèbre des concours des grandes écoles.
                    Annale corrigée pour MPSI et MP.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <a
                  href="#"
                  className="inline-block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-indigo-600"
                >
                  Télécharger
                </a>
              </div>
              <dl className="mt-6 flex gap-4 lg:gap-6">
                <div className="flex items-center gap-2">
                  <dt className="text-gray-700">
                    <span className="sr-only">Date de publication</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                  </dt>
                  <dd className="text-xs text-gray-700">15/03/2025</dd>
                </div>
                <div className="flex items-center gap-2">
                  <dt className="text-gray-700">
                    <span className="sr-only">Temps de lecture</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                  </dt>
                  <dd className="text-xs text-gray-700">45 minutes</dd>
                </div>
              </dl>
            </div>

            <div className="block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6">
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
                    École Polytechnique, maths B
                  </h3>
                  <p className="mt-4 line-clamp-2 text-sm text-pretty text-gray-700">
                    Annale de physique des concours CCP, Polytechnique et Centrale.
                    Mécanique, électromagnétisme pour PCSI et PC.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <a
                  href="#"
                  className="inline-block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-indigo-600"
                >
                  Télécharger
                </a>
              </div>
              <dl className="mt-6 flex gap-4 lg:gap-6">
                <div className="flex items-center gap-2">
                  <dt className="text-gray-700">
                    <span className="sr-only">Date de publication</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                  </dt>
                  <dd className="text-xs text-gray-700">22/03/2025</dd>
                </div>
                <div className="flex items-center gap-2">
                  <dt className="text-gray-700">
                    <span className="sr-only">Temps de lecture</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                  </dt>
                  <dd className="text-xs text-gray-700">50 minutes</dd>
                </div>
              </dl>
            </div>

            <div className="block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6">
              <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
                <div className="sm:order-last sm:shrink-0">
                  <Image
                    alt=""
                    src="https://www.sorbonne.fr/wp-content/uploads/ENS_Logo_TL.jpg"
                    width={72}
                    height={72}
                    className="size-16 rounded-full object-cover sm:size-20"
                  />
                </div>
                <div className="mt-4 sm:mt-0">
                  <h3 className="text-lg font-medium text-pretty text-gray-900">
                    Polytechnique – ENS, maths A
                  </h3>
                  <p className="mt-4 line-clamp-2 text-sm text-pretty text-gray-700">
                    Sujet de mathématiques des concours Polytechnique et ENS.
                    Analyse, algèbre et géométrie pour MP et MP*.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <a
                  href="#"
                  className="inline-block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-indigo-600"
                >
                  Télécharger
                </a>
              </div>
              <dl className="mt-6 flex gap-4 lg:gap-6">
                <div className="flex items-center gap-2">
                  <dt className="text-gray-700">
                    <span className="sr-only">Date de publication</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                  </dt>
                  <dd className="text-xs text-gray-700">10/04/2025</dd>
                </div>
                <div className="flex items-center gap-2">
                  <dt className="text-gray-700">
                    <span className="sr-only">Temps de lecture</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                  </dt>
                  <dd className="text-xs text-gray-700">60 minutes</dd>
                </div>
              </dl>
            </div>

            <div className="block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6">
              <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
                <div className="sm:order-last sm:shrink-0">
                  <Image
                    alt="Centrale Casablanca"
                    src="/centrale-casablanca-logo.png"
                    width={72}
                    height={72}
                    className="size-16 rounded-full object-cover sm:size-20"
                  />
                </div>
                <div className="mt-4 sm:mt-0">
                  <h3 className="text-lg font-medium text-pretty text-gray-900">
                    Concours Centrale-Supélec, maths 1
                  </h3>
                  <p className="mt-4 line-clamp-2 text-sm text-pretty text-gray-700">
                    Sujet maths 1 du concours Centrale-Supélec. Algèbre linéaire,
                    analyse et probabilités pour MPSI, PCSI et MP.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <a
                  href="#"
                  className="inline-block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-indigo-600"
                >
                  Télécharger
                </a>
              </div>
              <dl className="mt-6 flex gap-4 lg:gap-6">
                <div className="flex items-center gap-2">
                  <dt className="text-gray-700">
                    <span className="sr-only">Date de publication</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                  </dt>
                  <dd className="text-xs text-gray-700">18/04/2025</dd>
                </div>
                <div className="flex items-center gap-2">
                  <dt className="text-gray-700">
                    <span className="sr-only">Temps de lecture</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                  </dt>
                  <dd className="text-xs text-gray-700">55 minutes</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
