'use client';

import { TrendingUp, Users, Target, ShoppingCart } from 'lucide-react';

interface MetricsOverviewProps {
  data: {
    totalRevenue: string;
    revenueGrowth: string;
    activeUsers: string;
    userGrowth: string;
    conversionRate: string;
    conversionGrowth: string;
    averageOrderValue: string;
    orderValueGrowth: string;
  };
}

const MetricsOverview = ({ data }: MetricsOverviewProps) => {
  const metrics = [
    {
      label: 'Total Revenue',
      value: data.totalRevenue,
      growth: data.revenueGrowth,
      icon: TrendingUp,
      color: 'text-blue-600 bg-blue-100',
    },
    {
      label: 'Active Users',
      value: data.activeUsers,
      growth: data.userGrowth,
      icon: Users,
      color: 'text-green-600 bg-green-100',
    },
    {
      label: 'Conversion Rate',
      value: data.conversionRate,
      growth: data.conversionGrowth,
      icon: Target,
      color: 'text-purple-600 bg-purple-100',
    },
    {
      label: 'Average Order Value',
      value: data.averageOrderValue,
      growth: data.orderValueGrowth,
      icon: ShoppingCart,
      color: 'text-orange-600 bg-orange-100',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        return (
          <div
            key={metric.label}
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${metric.color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium text-green-600">
                {metric.growth}
              </span>
            </div>
            <h3 className="text-sm font-medium text-[#677788] mb-1">
              {metric.label}
            </h3>
            <p className="text-2xl font-semibold text-[#1E2022]">
              {metric.value}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default MetricsOverview; 