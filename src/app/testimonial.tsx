"use client";

import React from "react";
import Image from "next/image";

const TABS = [
  {
    id: "tab-1",
    icon: (
      <>
        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
        <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
        <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
        <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
        <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
      </>
    ),
    title: "Cours structurés",
    description:
      "Progressez avec des cours par chapitres, des fiches PDF et des méthodes claires pour réussir vos examens et concours.",
    image:
      "https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80",
  },
  {
    id: "tab-2",
    icon: (
      <>
        <path d="m12 14 4-4" />
        <path d="M3.34 19a10 10 0 1 1 17.32 0" />
      </>
    ),
    title: "Exercices & Quiz",
    description:
      "Des exercices corrigés et des quiz d'entraînement pour consolider vos acquis et vous préparer aux concours ENS, Centrale et CNC.",
    image:
      "https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80",
  },
  {
    id: "tab-3",
    icon: (
      <>
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        <path d="M5 3v4" />
        <path d="M19 17v4" />
        <path d="M3 5h4" />
        <path d="M17 19h4" />
      </>
    ),
    title: "Accompagnement personnalisé",
    description:
      "Un suivi pédagogique adapté à votre rythme avec tableau blanc interactif et une équipe de professeurs de Maths & Physique.",
    image:
      "https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80",
  },
];

function Testimonial() {
  const [activeTab, setActiveTab] = React.useState("tab-1");

  return (
    <section className="overflow-hidden bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Image - left on desktop */}
          <div className="relative w-full shrink-0 lg:w-1/2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-lg">
              {TABS.map((tab) => (
                <div
                  key={tab.id}
                  role="tabpanel"
                  className={`absolute inset-0 ${
                    activeTab === tab.id ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-300`}
                >
                  <Image
                    src={tab.image}
                    alt={tab.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Tabs - right on desktop */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Maths & Physique — Prépa & Université
            </h2>

            <nav
              className="mt-6 flex flex-col gap-4 sm:mt-8"
              aria-label="Tabs"
              role="tablist"
            >
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full rounded-xl border p-4 text-left transition-all sm:p-5 ${
                    activeTab === tab.id
                      ? "border-transparent bg-white shadow-md"
                      : "border-gray-200 bg-white/80 hover:bg-white hover:shadow-sm"
                  }`}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                >
                  <span className="flex gap-4 sm:gap-6">
                    <svg
                      className={`h-6 w-6 shrink-0 sm:h-7 sm:w-7 ${
                        activeTab === tab.id
                          ? "text-orange-500"
                          : "text-gray-600"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {tab.icon}
                    </svg>
                    <span className="min-w-0 flex-1">
                      <span
                        className={`block text-lg font-semibold ${
                          activeTab === tab.id
                            ? "text-orange-500"
                            : "text-gray-900"
                        }`}
                      >
                        {tab.title}
                      </span>
                      <span className="mt-1 block text-sm text-gray-600">
                        {tab.description}
                      </span>
                    </span>
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
