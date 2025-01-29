import { Metadata } from 'next';
import DashboardLayout from '@/components/layout/DashboardLayout';
import TeamGrid from '@/components/features/TeamGrid';

export const metadata: Metadata = {
  title: 'Teams - Fujiway',
  description: 'Manage your teams and collaborate with team members',
};

const teams = [
  {
    id: 1,
    name: 'Design Team',
    description: 'UI/UX and Product Design team',
    members: [
      { id: 1, name: 'Sarah Wilson', role: 'Lead Designer', avatar: 'https://picsum.photos/200/200?random=1' },
      { id: 2, name: 'Mike Chen', role: 'UI Designer', avatar: 'https://picsum.photos/200/200?random=2' },
      { id: 3, name: 'Emily Davis', role: 'UX Researcher', avatar: 'https://picsum.photos/200/200?random=3' },
    ],
    currentProject: 'Mobile App Redesign',
    progress: 75,
  },
  {
    id: 2,
    name: 'Development Team',
    description: 'Full-stack development team',
    members: [
      { id: 4, name: 'John Smith', role: 'Tech Lead', avatar: 'https://picsum.photos/200/200?random=4' },
      { id: 5, name: 'Lisa Wang', role: 'Frontend Dev', avatar: 'https://picsum.photos/200/200?random=5' },
      { id: 6, name: 'David Lee', role: 'Backend Dev', avatar: 'https://picsum.photos/200/200?random=6' },
    ],
    currentProject: 'API Integration',
    progress: 60,
  },
  {
    id: 3,
    name: 'Marketing Team',
    description: 'Digital marketing and growth team',
    members: [
      { id: 7, name: 'Alex Brown', role: 'Marketing Lead', avatar: 'https://picsum.photos/200/200?random=7' },
      { id: 8, name: 'Emma Wilson', role: 'Content Writer', avatar: 'https://picsum.photos/200/200?random=8' },
      { id: 9, name: 'Tom Harris', role: 'SEO Specialist', avatar: 'https://picsum.photos/200/200?random=9' },
    ],
    currentProject: 'Q2 Campaign',
    progress: 40,
  },
];

export default function TeamsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-[#1E2022]">Teams</h1>
        </div>

        <TeamGrid teams={teams} />
      </div>
    </DashboardLayout>
  );
} 