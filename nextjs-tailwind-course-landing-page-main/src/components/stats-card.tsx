import React from "react";

interface StatsCardProps {
  icon: React.ElementType;
  count: string;
  title: string;
}

export function StatsCard({ icon: Icon, count, title }: StatsCardProps) {
  return (
    <div className="flex flex-col items-center">
      <Icon className="h-7 w-7 text-gray-900" />
      <span className="mb-2 mt-4 text-5xl font-bold text-blue-gray-900">
        {count}
      </span>
      <span className="mb-2 font-normal text-blue-gray-500">
        {title}
      </span>
    </div>
  );
}

export default StatsCard;
