"use client";

function dataToPath(data: number[], width = 120, height = 36): string {
  if (data.length === 0) return "";
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const stepX = data.length > 1 ? width / (data.length - 1) : 0;
  const points = data.map((v, i) => {
    const x = i * stepX;
    const y = height - ((v - min) / range) * height;
    return `${x},${y}`;
  });
  return `M ${points.join(" L ")}`;
}

const UpIcon = () => (
  <svg className="size-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
  </svg>
);

const DownIcon = () => (
  <svg className="size-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
);

export interface KpiCardProps {
  label: string;
  value: string | number;
  deltaPct: number;
  compareText: string;
  data: number[];
}

export function KpiCard({ label, value, deltaPct, compareText, data }: KpiCardProps) {
  const path = dataToPath(data);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <p className="text-[12px] font-medium uppercase tracking-wider text-slate-500">
            {label}
          </p>
          <p className="mt-1 text-4xl font-semibold text-slate-900">
            {value}
          </p>
        </div>
        {path && (
          <div className="shrink-0 w-28 sm:w-36" style={{ height: 36 }}>
            <svg
              viewBox="0 0 120 36"
              className="h-full w-full text-blue-600"
              preserveAspectRatio="none"
            >
              <path
                d={path}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-900">
          {deltaPct > 0 && <UpIcon />}
          {deltaPct < 0 && <DownIcon />}
          {deltaPct > 0 && "+"}
          {deltaPct}%
        </span>
        <span className="text-sm text-slate-500">{compareText}</span>
      </div>
    </div>
  );
}

export default KpiCard;
