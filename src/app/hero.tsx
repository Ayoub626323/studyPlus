"use client";

import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className="relative w-full overflow-visible border-b border-slate-200 bg-white pt-8 pb-20 md:pt-10 md:pb-28 lg:pt-12 lg:pb-36 shadow-md">
      <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <h1 className="block text-3xl font-bold text-gray-900 sm:text-4xl lg:text-6xl lg:leading-tight">
              Commencez votre réussite avec{" "}
              <span className="text-blue-600">CPGE Horizon</span>
            </h1>
            <p className="mt-3 text-lg text-gray-700">
              Des cours structurés, des exercices corrigés et des méthodes
              claires pour réussir vos concours et vos DS en prépa.
            </p>

            {/* Buttons */}
            <div className="mt-7 grid w-full gap-3 sm:inline-flex sm:flex-wrap">
              <a
                className="inline-flex items-center justify-center gap-x-2 rounded-lg border border-blue-600 bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                Acheter maintenant
                <svg
                  className="h-4 w-4 shrink-0"
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
              </a>
              <Link
                href="/connexion"
                className="inline-flex items-center justify-center gap-x-2 rounded-lg border border-sky-500 bg-sky-500 px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              >
                Connexion
              </Link>
              <Link
                href="/inscrire"
                className="inline-flex items-center justify-center gap-x-2 rounded-lg border-2 border-sky-600 bg-sky-600 px-4 py-3 text-sm font-medium text-white hover:bg-sky-700 hover:border-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              >
                Inscrire
              </Link>
              <a
                className="inline-flex items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                Contacter l&apos;équipe
              </a>
            </div>
          </div>

          <div className="relative ms-4 h-[340px] sm:h-[420px] lg:h-[520px]">
            <Image
              className="h-full w-full rounded-md object-cover object-center"
              src="https://citl.news.niu.edu/wp-content/uploads/sites/14/2025/01/iStock-1588289974-800x500.jpg"
              alt="Étudiants en cours - CPGE Horizon"
              width={800}
              height={600}
            />
            <div
              className="absolute -bottom-4 -left-4 -right-4 -top-4 -z-10 rounded-md bg-gradient-to-tr from-blue-100 via-transparent to-transparent lg:-bottom-6 lg:-left-6 lg:-right-6 lg:-top-6"
              aria-hidden
            />

            {/* SVG decoration */}
            <div className="absolute bottom-0 start-0">
              <svg
                className="ms-auto h-auto w-2/3 text-blue-100"
                width="630"
                height="451"
                viewBox="0 0 630 451"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="531" y="352" width="99" height="99" fill="currentColor" />
                <rect x="140" y="352" width="106" height="99" fill="currentColor" />
                <rect x="482" y="402" width="64" height="49" fill="currentColor" />
                <rect x="433" y="402" width="63" height="49" fill="currentColor" />
                <rect x="384" y="352" width="49" height="50" fill="currentColor" />
                <rect x="531" y="328" width="50" height="50" fill="currentColor" />
                <rect x="99" y="303" width="49" height="58" fill="currentColor" />
                <rect x="99" y="352" width="49" height="50" fill="currentColor" />
                <rect x="99" y="392" width="49" height="59" fill="currentColor" />
                <rect x="44" y="402" width="66" height="49" fill="currentColor" />
                <rect x="234" y="402" width="62" height="49" fill="currentColor" />
                <rect x="334" y="303" width="50" height="49" fill="currentColor" />
                <rect x="581" width="49" height="49" fill="currentColor" />
                <rect x="581" width="49" height="64" fill="currentColor" />
                <rect x="482" y="123" width="49" height="49" fill="currentColor" />
                <rect x="507" y="124" width="49" height="24" fill="currentColor" />
                <rect x="531" y="49" width="99" height="99" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
