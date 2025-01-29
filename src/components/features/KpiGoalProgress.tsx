'use client';

import { Calendar, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

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

interface KpiGoalProgressProps {
  goal: Goal;
}

const statusConfig = {
  'On Track': {
    color: 'text-[#0066FF] bg-[#E7F0FF]',
    icon: Clock,
  },
  'At Risk': {
    color: 'text-red-600 bg-red-50',
    icon: AlertTriangle,
  },
  'Ahead': {
    color: 'text-green-600 bg-green-50',
    icon: CheckCircle,
  },
};

const KpiGoalProgress = ({ goal }: KpiGoalProgressProps) => {
  const StatusIcon = statusConfig[goal.status].icon;
  const statusColor = statusConfig[goal.status].color;

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getStatusColor = (status: GoalStatus) => {
    switch (status) {
      case 'On Track':
        return 'text-blue-700 bg-blue-100';
      case 'At Risk':
        return 'text-red-700 bg-red-100';
      case 'Ahead':
        return 'text-green-700 bg-green-100';
      default:
        return 'text-gray-700 bg-gray-100';
    }
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-medium text-[#1E2022] mb-1">{goal.name}</h3>
          <div className="flex items-center text-sm text-[#677788]">
            <Calendar className="w-4 h-4 mr-1" />
            <span>Due {formatDate(goal.dueDate)}</span>
          </div>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(goal.status)}`}
        >
          {goal.status}
        </span>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-[#677788] mb-1">Current</p>
            <p className="font-medium text-[#1E2022]">{goal.current}</p>
          </div>
          <div>
            <p className="text-sm text-[#677788] mb-1">Target</p>
            <p className="font-medium text-[#1E2022]">{goal.target}</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-[#677788]">Progress</span>
            <span className="font-medium text-[#1E2022]">{goal.progress}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all"
              style={{
                width: `${goal.progress}%`,
                backgroundColor: goal.status === 'At Risk' ? '#FF6B6B' :
                  goal.status === 'Ahead' ? '#00CC88' : '#0066FF',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KpiGoalProgress; 