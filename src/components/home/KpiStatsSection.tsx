"use client";

import { KpiCard } from "@/components/common/KpiCard";

const KPI_DATA = [
  {
    label: "Étudiants actifs",
    value: "2 047",
    deltaPct: 12,
    compareText: "up from 1 842",
    data: [42, 55, 48, 62, 58, 72, 65, 78, 82, 88, 85, 92],
  },
  {
    label: "Cours dispensés",
    value: "198",
    deltaPct: -3,
    compareText: "down from 204",
    data: [70, 68, 72, 65, 78, 75, 80, 72, 68, 75, 70, 65],
  },
  {
    label: "Taux de réussite",
    value: "94%",
    deltaPct: 5,
    compareText: "up from 89%",
    data: [80, 82, 85, 83, 88, 86, 90, 88, 92, 90, 94, 94],
  },
  {
    label: "Heures de support",
    value: "24/7",
    deltaPct: 0,
    compareText: "510",
    data: [50, 55, 52, 58, 60, 55, 62, 58, 60, 65, 62, 60],
  },
];

export function KpiStatsSection() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl lg:text-4xl">
            Nos chiffres en ligne
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-slate-500">
            Nous sommes fiers de notre engagement pour l&apos;excellence et de notre dévouement à votre réussite académique.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {KPI_DATA.map((kpi, index) => (
            <KpiCard
              key={index}
              label={kpi.label}
              value={kpi.value}
              deltaPct={kpi.deltaPct}
              compareText={kpi.compareText}
              data={kpi.data}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default KpiStatsSection;
