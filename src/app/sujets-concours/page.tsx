"use client";

import { Navbar, Footer } from "@/components";

export default function SujetsConcoursPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Sujets Concours
          </h1>
          <p className="mb-12 text-lg text-gray-600">
            Accédez aux sujets des concours pour vous entraîner et préparer vos examens.
          </p>

          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
            <p className="text-center text-gray-500">
              Les sujets de concours seront bientôt disponibles.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
