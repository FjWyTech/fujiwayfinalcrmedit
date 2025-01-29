import { Metadata } from 'next';
import DashboardLayout from '@/components/layout/DashboardLayout';
import ActivityFeed from '@/components/features/ActivityFeed';

export const metadata: Metadata = {
  title: 'Activity - Fujiway',
  description: 'Track your team and project activities',
};

type ActivityType = 'project_update' | 'team_message' | 'task_completed' | 'comment' | 'file_upload';

interface Activity {
  id: number;
  type: ActivityType;
  user: {
    name: string;
    avatar: string;
  };
  project?: string;
  action?: string;
  details?: string;
  team?: string;
  message?: string;
  task?: string;
  comment?: string;
  files?: string[];
  timestamp: string;
  priority: 'high' | 'medium' | 'normal';
}

const activities: Activity[] = [
  {
    id: 1,
    type: 'project_update',
    user: {
      name: 'Sarah Wilson',
      avatar: 'https://picsum.photos/200/200?random=1',
    },
    project: 'Mobile App Redesign',
    action: 'completed a milestone',
    details: 'UI Components Library',
    timestamp: '2 hours ago',
    priority: 'high',
  },
  {
    id: 2,
    type: 'team_message',
    user: {
      name: 'Mike Chen',
      avatar: 'https://picsum.photos/200/200?random=2',
    },
    team: 'Design Team',
    message: 'Shared new design resources for the dashboard',
    timestamp: '4 hours ago',
    priority: 'medium',
  },
  {
    id: 3,
    type: 'task_completed',
    user: {
      name: 'Emily Davis',
      avatar: 'https://picsum.photos/200/200?random=3',
    },
    task: 'User Research Report',
    project: 'E-commerce Platform',
    timestamp: '1 day ago',
    priority: 'normal',
  },
  {
    id: 4,
    type: 'comment',
    user: {
      name: 'Alex Thompson',
      avatar: 'https://picsum.photos/200/200?random=4',
    },
    project: 'Marketing Campaign',
    comment: 'Great progress on the social media strategy!',
    timestamp: '1 day ago',
    priority: 'normal',
  },
  {
    id: 5,
    type: 'file_upload',
    user: {
      name: 'Lisa Wang',
      avatar: 'https://picsum.photos/200/200?random=5',
    },
    files: ['Q1 Report.pdf', 'Analytics Dashboard.fig'],
    project: 'Quarterly Review',
    timestamp: '2 days ago',
    priority: 'high',
  },
];

const analytics = {
  totalActivities: 156,
  completedTasks: 42,
  activeProjects: 8,
  teamMembers: 15,
};

export default function ActivityPage() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-sm font-medium text-[#677788] mb-2">Total Activities</h3>
          <p className="text-2xl font-semibold text-[#1E2022]">{analytics.totalActivities}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-sm font-medium text-[#677788] mb-2">Completed Tasks</h3>
          <p className="text-2xl font-semibold text-[#1E2022]">{analytics.completedTasks}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-sm font-medium text-[#677788] mb-2">Active Projects</h3>
          <p className="text-2xl font-semibold text-[#1E2022]">{analytics.activeProjects}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-sm font-medium text-[#677788] mb-2">Team Members</h3>
          <p className="text-2xl font-semibold text-[#1E2022]">{analytics.teamMembers}</p>
        </div>
      </div>

      <ActivityFeed activities={activities} />
    </DashboardLayout>
  );
} 