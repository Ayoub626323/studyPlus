"use client";

import Link from "next/link";

const AVATARS = [
  { src: "https://i.pravatar.cc/150?img=1", size: "w-12 h-12", position: "-top-4 -left-4", visible: "hidden sm:block" },
  { src: "https://i.pravatar.cc/150?img=3", size: "w-10 h-10", position: "-top-6 -right-2", visible: "hidden sm:block" },
  { src: "https://i.pravatar.cc/150?img=5", size: "w-14 h-14", position: "top-1/2 -left-6 -translate-y-1/2", visible: "hidden md:block" },
  { src: "https://i.pravatar.cc/150?img=8", size: "w-11 h-11", position: "top-1/2 -right-5 -translate-y-1/2", visible: "hidden md:block" },
  { src: "https://i.pravatar.cc/150?img=11", size: "w-12 h-12", position: "-bottom-4 -left-6", visible: "hidden sm:block" },
  { src: "https://i.pravatar.cc/150?img=13", size: "w-10 h-10", position: "-bottom-5 -right-4", visible: "hidden sm:block" },
  { src: "https://i.pravatar.cc/150?img=15", size: "w-9 h-9", position: "-top-2 left-1/4", visible: "hidden lg:block" },
  { src: "https://i.pravatar.cc/150?img=20", size: "w-10 h-10", position: "-bottom-2 right-1/3", visible: "hidden lg:block" },
];

export function FinalCtaSection() {
  return (
    <section className="relative overflow-visible py-12 md:py-16">
      <div className="relative mx-auto max-w-5xl px-6 py-16">
        {/* Floating avatars */}
        {AVATARS.map((avatar, index) => (
          <div
            key={index}
            className={`absolute ${avatar.position} ${avatar.visible} ${avatar.size}`}
          >
            <img
              src={avatar.src}
              alt="Student avatar"
              className={`${avatar.size} rounded-full object-cover ring-4 ring-white shadow-md`}
            />
          </div>
        ))}

        {/* CTA Card */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 px-6 py-12 text-center shadow-sm md:px-12 md:py-16">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Rejoignez la préparation CPGE Horizon
          </h2>
          <p className="mt-3 text-slate-600 md:text-lg">
            Accédez aux cours, annales CNC/Centrale/ENS et entraînez-vous comme en prépa.
          </p>
          <Link
            href="/inscrire"
            className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-sm transition hover:bg-blue-700"
            aria-label="Créer mon compte gratuit"
          >
            Créer mon compte gratuit
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FinalCtaSection;
