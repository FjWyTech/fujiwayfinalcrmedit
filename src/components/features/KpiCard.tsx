'use client';

import { TrendingUp } from 'lucide-react';

interface KpiCardProps {
  title: string;
  data: {
    current: {
      value: string;
      change: string;
      target: string;
      progress: number;
    };
    history: number[];
  };
  color: string;
}

const KpiCard = ({ title, data, color }: KpiCardProps) => {
  const { current, history } = data;
  const normalizedHistory = history.map(
    (value) => ((value - Math.min(...history)) / (Math.max(...history) - Math.min(...history))) * 100
  );

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-[#677788]">{title}</h3>
        <div className="flex items-center">
          <TrendingUp
            className="w-4 h-4 mr-1"
            style={{ color }}
          />
          <span className="text-sm font-medium" style={{ color }}>
            {current.change}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-2xl font-semibold text-[#1E2022]">
            {current.value}
          </p>
          <p className="text-sm text-[#677788]">
            Target: {current.target}
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-[#677788]">Progress</span>
            <span className="font-medium text-[#1E2022]">
              {current.progress}%
            </span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all"
              style={{
                width: `${current.progress}%`,
                backgroundColor: color,
              }}
            />
          </div>
        </div>

        {/* Sparkline */}
        <div className="h-[40px] flex items-end justify-between">
          {normalizedHistory.map((value, index) => (
            <div
              key={index}
              className="w-[8%] rounded-sm transition-all"
              style={{
                height: `${value}%`,
                backgroundColor: color,
                opacity: 0.2 + (index / normalizedHistory.length) * 0.8,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KpiCard; 