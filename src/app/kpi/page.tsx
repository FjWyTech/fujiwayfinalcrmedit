import { Metadata } from 'next';
import DashboardLayout from '@/components/layout/DashboardLayout';
import KpiCard from '@/components/features/KpiCard';
import KpiGoalProgress from '@/components/features/KpiGoalProgress';

export const metadata: Metadata = {
  title: 'KPI Monitor - Fujiway',
  description: 'Track and monitor your key performance indicators',
};

type GoalStatus = 'On Track' | 'At Risk' | 'Ahead';

interface Goal {
  id: number;
  name: string;
  target: string;
  current: string;
  progress: number;
  status: GoalStatus;
  dueDate: string;
}

const kpis = {
  sales: {
    current: {
      value: '$856,432',
      change: '+23.5%',
      target: '$1,000,000',
      progress: 85.6,
    },
    history: [45, 62, 58, 63, 71, 84, 86],
  },
  customerSatisfaction: {
    current: {
      value: '4.8/5.0',
      change: '+0.3',
      target: '4.9/5.0',
      progress: 98,
    },
    history: [92, 94, 93, 95, 96, 97, 98],
  },
  employeeProductivity: {
    current: {
      value: '94%',
      change: '+5%',
      target: '95%',
      progress: 99,
    },
    history: [88, 90, 89, 91, 93, 94, 94],
  },
  marketShare: {
    current: {
      value: '28.5%',
      change: '+2.5%',
      target: '30%',
      progress: 95,
    },
    history: [82, 84, 87, 89, 91, 93, 95],
  },
};

const goals: Goal[] = [
  {
    id: 1,
    name: 'Q1 Sales Target',
    target: '$1,000,000',
    current: '$856,432',
    progress: 85.6,
    status: 'On Track',
    dueDate: '2024-03-31',
  },
  {
    id: 2,
    name: 'Customer Retention Rate',
    target: '95%',
    current: '92%',
    progress: 96.8,
    status: 'Ahead',
    dueDate: '2024-03-31',
  },
  {
    id: 3,
    name: 'New Market Expansion',
    target: '5 Regions',
    current: '3 Regions',
    progress: 60,
    status: 'At Risk',
    dueDate: '2024-03-31',
  },
  {
    id: 4,
    name: 'Product Launch Success',
    target: '50,000 Units',
    current: '42,500 Units',
    progress: 85,
    status: 'On Track',
    dueDate: '2024-02-28',
  },
];

export default function KpiPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-[#1E2022]">KPI Monitor</h1>
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 text-sm text-[#0066FF] bg-[#E7F0FF] rounded-lg hover:bg-blue-100">
              Set New Goals
            </button>
            <button className="px-4 py-2 text-sm text-white bg-[#0066FF] rounded-lg hover:bg-blue-700">
              Export Report
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KpiCard
            title="Total Sales"
            data={kpis.sales}
            color="#0066FF"
          />
          <KpiCard
            title="Customer Satisfaction"
            data={kpis.customerSatisfaction}
            color="#00CC88"
          />
          <KpiCard
            title="Employee Productivity"
            data={kpis.employeeProductivity}
            color="#FFB100"
          />
          <KpiCard
            title="Market Share"
            data={kpis.marketShare}
            color="#FF6B6B"
          />
        </div>

        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-[#1E2022]">
              Q1 2024 Goals Progress
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {goals.map((goal) => (
                <KpiGoalProgress key={goal.id} goal={goal} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 