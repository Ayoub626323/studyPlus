"use client";

import { Navbar, Footer } from "@/components";
import Image from "next/image";

const ArrowRightIcon = () => (
  <svg className="size-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="bg-base-100 py-8 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
              <p className="text-primary text-sm font-medium uppercase">Blog list</p>
              <h2 className="text-base-content text-2xl font-semibold md:text-3xl lg:text-4xl">
                Blog CPGE Horizon
              </h2>
              <p className="text-base-content/80 text-xl">
                Articles, conseils et actualités pour réussir en maths et physique en prépa.
              </p>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Blog Card 1 */}
              <div className="card card-bordered shadow-none">
                <figure>
                  <Image
                    src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/blog/blog-36.png"
                    alt="Polynômes et analyse"
                    width={400}
                    height={250}
                    className="h-48 w-full object-cover"
                  />
                </figure>
                <div className="card-body gap-3">
                  <h5 className="card-title text-xl">
                    Polynômes : bases et méthodes essentielles
                  </h5>
                  <p className="mb-5">
                    Maîtrisez la division euclidienne, les racines et la factorisation.
                    Découvrez le théorème de d&apos;Alembert avec des exemples détaillés pour la prépa.
                  </p>
                  <div className="card-actions">
                    <a href="#" className="btn btn-primary">
                      Lire plus
                      <ArrowRightIcon />
                    </a>
                  </div>
                </div>
              </div>

              {/* Blog Card 2 */}
              <div className="card card-bordered shadow-none">
                <figure>
                  <Image
                    src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/blog/blog-37.png"
                    alt="Suites numériques"
                    width={400}
                    height={250}
                    className="h-48 w-full object-cover"
                  />
                </figure>
                <div className="card-body gap-3">
                  <h5 className="card-title text-xl">
                    Suites : convergence et récurrence
                  </h5>
                  <p className="mb-5">
                    Comprendre les suites numériques, les théorèmes de comparaison et
                    les démonstrations par récurrence. Indispensable pour les DS et concours.
                  </p>
                  <div className="card-actions">
                    <a href="#" className="btn btn-primary">
                      Lire plus
                      <ArrowRightIcon />
                    </a>
                  </div>
                </div>
              </div>

              {/* Blog Card 3 */}
              <div className="card card-bordered shadow-none">
                <figure>
                  <Image
                    src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/blog/blog-38.png"
                    alt="Algèbre linéaire"
                    width={400}
                    height={250}
                    className="h-48 w-full object-cover"
                  />
                </figure>
                <div className="card-body gap-3">
                  <h5 className="card-title text-xl">
                    Algèbre linéaire : espaces vectoriels
                  </h5>
                  <p className="mb-5">
                    Les bases de l&apos;algèbre linéaire : espaces vectoriels, matrices et déterminants.
                    Un cours essentiel pour exceller en MPSI et PCSI.
                  </p>
                  <div className="card-actions">
                    <a href="#" className="btn btn-primary">
                      Lire plus
                      <ArrowRightIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
