import type { Metadata } from 'next';
import DashboardLayout from '@/components/layout/DashboardLayout';
import MetricsOverview from '@/components/features/MetricsOverview';
import MetricsChart from '@/components/features/MetricsChart';

export const metadata: Metadata = {
  title: 'Metrics Hub - Fujiway',
  description: 'Track and analyze your business metrics',
};

const metrics = {
  overview: {
    totalRevenue: '$124,563.00',
    revenueGrowth: '+12.5%',
    activeUsers: '2,845',
    userGrowth: '+8.2%',
    conversionRate: '3.2%',
    conversionGrowth: '+1.1%',
    averageOrderValue: '$245.00',
    orderValueGrowth: '+5.4%',
  },
  performance: {
    daily: [
      { date: '2024-01-01', revenue: 4200, users: 150, orders: 45 },
      { date: '2024-01-02', revenue: 4500, users: 165, orders: 52 },
      { date: '2024-01-03', revenue: 4100, users: 145, orders: 48 },
      { date: '2024-01-04', revenue: 4800, users: 172, orders: 58 },
      { date: '2024-01-05', revenue: 5200, users: 185, orders: 62 },
      { date: '2024-01-06', revenue: 4900, users: 178, orders: 55 },
      { date: '2024-01-07', revenue: 5100, users: 182, orders: 59 },
    ],
  },
  segments: [
    { name: 'Enterprise', value: 45, growth: '+15%', color: '#0066FF' },
    { name: 'SMB', value: 35, growth: '+8%', color: '#00CC88' },
    { name: 'Consumer', value: 20, growth: '+5%', color: '#FFB100' },
  ],
  topProducts: [
    {
      name: 'Product Analytics Suite',
      revenue: '$45,234',
      growth: '+12%',
      users: 450,
    },
    {
      name: 'Team Collaboration Pro',
      revenue: '$38,123',
      growth: '+8%',
      users: 380,
    },
    {
      name: 'Security Enterprise',
      revenue: '$32,456',
      growth: '+15%',
      users: 320,
    },
  ],
};

export default function MetricsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-[#1E2022]">Metrics Hub</h1>
          <div className="flex items-center space-x-3">
            <select className="px-3 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#0066FF]">
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
            <button className="px-4 py-2 text-sm text-white bg-[#0066FF] rounded-lg hover:bg-blue-700">
              Download Report
            </button>
          </div>
        </div>

        <MetricsOverview data={metrics.overview} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-[#1E2022] mb-6">Performance Trends</h2>
              <MetricsChart data={metrics.performance.daily} />
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-[#1E2022] mb-4">Segment Distribution</h2>
              <div className="space-y-4">
                {metrics.segments.map((segment) => (
                  <div key={segment.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#677788]">{segment.name}</span>
                      <span className="text-sm font-medium text-[#1E2022]">{segment.value}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{ width: `${segment.value}%`, backgroundColor: segment.color }}
                      />
                    </div>
                    <span className="text-xs text-green-600">{segment.growth}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-[#1E2022] mb-4">Top Products</h2>
              <div className="space-y-4">
                {metrics.topProducts.map((product) => (
                  <div key={product.name} className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-[#1E2022]">{product.name}</h3>
                      <p className="text-sm text-[#677788]">{product.users} active users</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-[#1E2022]">{product.revenue}</p>
                      <p className="text-sm text-green-600">{product.growth}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 