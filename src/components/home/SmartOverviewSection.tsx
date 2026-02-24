"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

// --- Types ---
type Track = "MPSI" | "PCSI";
type Level = "Sup" | "Spe";
type Concours = "CNC" | "Centrale" | "Mines-Ponts" | "ENS";

type CardId = "concours" | "programme" | "annales" | "niveau";

interface SmartOverviewCard {
  id: CardId;
  label: string;
  title: string;
  pillLeft: string;
  pillRight: string;
  primaryActionLabel: string;
  href: string;
  icon: React.ReactNode;
  actionVariant: "primary" | "secondary";
}

const STORAGE_KEY = "cpge-smart-overview-config";

// --- Icons ---
const BookIcon = () => (
  <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const DocumentIcon = () => (
  <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>
);

const ChartIcon = () => (
  <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

// --- Data generator ---
function getCardsForConfig(
  track: Track,
  level: Level,
  concours: Concours
): SmartOverviewCard[] {
  const programmeByConfig: Record<string, { title: string; pillLeft: string; pillRight: string }> = {
    "MPSI-Sup": { title: "Maths — Analyse & Algèbre (chapitres)", pillLeft: "2 chapitres en cours", pillRight: "DS: Samedi" },
    "PCSI-Sup": { title: "Physique/Chimie — Thermo & Réactions", pillLeft: "2 chapitres en cours", pillRight: "DS: Samedi" },
    "MPSI-Spe": { title: "Annales + Approfondissement", pillLeft: "Colles hebdo", pillRight: "Sujets type concours" },
    "PCSI-Spe": { title: "Annales + Approfondissement", pillLeft: "Colles hebdo", pillRight: "Sujets type concours" },
  };

  const niveauByLevel: Record<Level, { pillLeft: string; pillRight: string }> = {
    Sup: { pillLeft: "Méthodes + DS", pillRight: "Cible: 75%" },
    Spe: { pillLeft: "Sujets chronométrés", pillRight: "Admissibilité" },
  };

  const programme = programmeByConfig[`${track}-${level}`] ?? {
    title: `${track} ${level} — Programme en cours`,
    pillLeft: "Chapitres actifs",
    pillRight: "DS à venir",
  };

  const niveau = niveauByLevel[level];

  return [
    {
      id: "concours",
      label: "Concours",
      title: `Objectif : ${concours}`,
      pillLeft: "Échéance: Avril–Mai",
      pillRight: `${level === "Spe" ? "Spé" : level} • ${track}`,
      primaryActionLabel: "Voir",
      href: "#", // TODO: /concours when route exists
      icon: <BookIcon />,
      actionVariant: "primary",
    },
    {
      id: "programme",
      label: "Programme",
      title: programme.title,
      pillLeft: programme.pillLeft,
      pillRight: programme.pillRight,
      primaryActionLabel: "Voir",
      href: "#", // TODO: /programme when route exists
      icon: <CalendarIcon />,
      actionVariant: "secondary",
    },
    {
      id: "annales",
      label: "Annales",
      title: `Annales ${concours} — Sujet 2022`,
      pillLeft: "Session: 4h",
      pillRight: "Corrigé disponible",
      primaryActionLabel: "Accéder",
      href: "/sujets-concours", // Existing route
      icon: <DocumentIcon />,
      actionVariant: "primary",
    },
    {
      id: "niveau",
      label: "Statistiques",
      title: "Progression — Objectif admissibilité",
      pillLeft: "Score estimé: 62%",
      pillRight: niveau.pillRight,
      primaryActionLabel: "Voir",
      href: "#", // TODO: /progression when route exists
      icon: <ChartIcon />,
      actionVariant: "secondary",
    },
  ];
}

// --- Persistence ---
interface StoredConfig {
  track: Track;
  level: Level;
  concours: Concours;
}

function loadStoredConfig(): StoredConfig | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConfig;
    if (["MPSI", "PCSI"].includes(parsed.track) && ["Sup", "Spe"].includes(parsed.level) && ["CNC", "Centrale", "Mines-Ponts", "ENS"].includes(parsed.concours)) {
      return parsed;
    }
  } catch {
    // ignore
  }
  return null;
}

function saveConfig(config: StoredConfig) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch {
    // ignore
  }
}

// --- Component ---
const TRACKS: Track[] = ["MPSI", "PCSI"];
const LEVELS: { value: Level; label: string }[] = [
  { value: "Sup", label: "Sup" },
  { value: "Spe", label: "Spé" },
];
const CONCOURS_OPTIONS: { value: Concours; label: string }[] = [
  { value: "CNC", label: "CNC" },
  { value: "Centrale", label: "Centrale" },
  { value: "Mines-Ponts", label: "Mines-Ponts" },
  { value: "ENS", label: "ENS" },
];

export function SmartOverviewSection() {
  const [track, setTrack] = useState<Track>("MPSI");
  const [level, setLevel] = useState<Level>("Sup");
  const [concours, setConcours] = useState<Concours>("CNC");

  useEffect(() => {
    const stored = loadStoredConfig();
    if (stored) {
      setTrack(stored.track);
      setLevel(stored.level);
      setConcours(stored.concours);
    }
  }, []);

  const persist = useCallback(() => {
    saveConfig({ track, level, concours });
  }, [track, level, concours]);

  useEffect(() => {
    persist();
  }, [persist]);

  const cards = getCardsForConfig(track, level, concours);

  return (
    <section
      id="smart-overview"
      className="relative min-h-[500px] w-full overflow-hidden py-12 md:py-16"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl space-y-6 px-4 sm:px-6 lg:px-8">
        {/* Selector row */}
        <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl sm:p-5">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {/* Track */}
            <div className="flex rounded-xl bg-white/5 p-1">
              {TRACKS.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTrack(t)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                    track === t
                      ? "bg-white/15 text-white ring-1 ring-white/20"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                  aria-pressed={track === t}
                  aria-label={`Filière ${t}`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Level */}
            <div className="flex rounded-xl bg-white/5 p-1">
              {LEVELS.map(({ value, label }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setLevel(value)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                    level === value
                      ? "bg-white/15 text-white ring-1 ring-white/20"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                  aria-pressed={level === value}
                  aria-label={`Niveau ${label}`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Concours dropdown */}
            <div className="relative">
              <label htmlFor="concours-select" className="sr-only">
                Concours cible
              </label>
              <select
                id="concours-select"
                value={concours}
                onChange={(e) => setConcours(e.target.value as Concours)}
                className="appearance-none rounded-xl border border-white/15 bg-white/10 px-4 py-2 pr-10 text-sm font-medium text-white outline-none transition focus:ring-2 focus:ring-white/20 [&>option]:bg-gray-800 [&>option]:text-white"
                aria-label="Sélectionner le concours cible"
              >
                {CONCOURS_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/70">
                <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.id}
              className="group relative min-h-[200px] overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-xl transition-transform hover:scale-[1.01] active:scale-[0.99]"
            >
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"
                aria-hidden
              />

              <div className="relative flex h-full flex-col">
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex items-center gap-2 text-white/90">
                    <span className="flex items-center justify-center text-white/80">
                      {card.icon}
                    </span>
                    <span className="text-sm font-medium">{card.label}</span>
                  </div>
                  <a
                    href={card.href}
                    className={`flex size-9 shrink-0 items-center justify-center rounded-full transition-transform hover:scale-105 active:scale-95 ${
                      card.actionVariant === "primary"
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500"
                        : "bg-white/10 text-white/80 ring-1 ring-white/20 hover:bg-white/20"
                    }`}
                    aria-label={`${card.primaryActionLabel} ${card.label}`}
                  >
                    <ArrowIcon />
                  </a>
                </div>

                <h3 className="mb-4 text-lg font-bold text-white">
                  {card.title}
                </h3>

                <div className="mt-auto flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-sm text-white">
                    <span className="font-semibold">{card.pillLeft}</span>
                  </span>
                  <span className="text-sm text-white/70">{card.pillRight}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SmartOverviewSection;
