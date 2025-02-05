'use client';

import { LayoutGrid, List } from 'lucide-react';
import ProjectCard from '@/components/features/ProjectCard';

const projects = [
  {
    id: 1,
    title: 'Revuze',
    description: 'AI-powered consumer insights and product analytics platform',
    status: 'In Progress' as const,
    duration: '6 months',
    location: 'Remote',
    rate: '$95/hour',
    logoUrl: 'https://picsum.photos/200/200?random=1',
    teamMembers: [
      { id: 1, name: 'John Doe', avatar: 'https://picsum.photos/200/200?random=2' },
      { id: 2, name: 'Jane Smith', avatar: 'https://picsum.photos/200/200?random=3' },
      { id: 3, name: 'Mike Johnson', avatar: 'https://picsum.photos/200/200?random=4' },
    ],
  },
  {
    id: 2,
    title: 'FastFlo',
    description: 'Automated workflow and business process optimization platform',
    status: 'Completed' as const,
    duration: '4 months',
    location: 'New York',
    rate: '$90/hour',
    logoUrl: 'https://picsum.photos/200/200?random=5',
    teamMembers: [
      { id: 4, name: 'Sarah Wilson', avatar: 'https://picsum.photos/200/200?random=6' },
      { id: 5, name: 'Tom Brown', avatar: 'https://picsum.photos/200/200?random=7' },
    ],
  },
  {
    id: 3,
    title: 'ElexorAI',
    description: 'Enterprise AI solutions for predictive analytics and automation',
    status: 'Upcoming' as const,
    duration: '8 months',
    location: 'San Francisco',
    rate: '$110/hour',
    logoUrl: 'https://picsum.photos/200/200?random=8',
    teamMembers: [
      { id: 6, name: 'Emily Davis', avatar: 'https://picsum.photos/200/200?random=9' },
      { id: 7, name: 'David Lee', avatar: 'https://picsum.photos/200/200?random=10' },
      { id: 8, name: 'Lisa Chen', avatar: 'https://picsum.photos/200/200?random=11' },
    ],
  },
];

const ProjectGrid = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-[#1E2022]">
          {projects.length} Projects
        </h2>
        <div className="flex items-center space-x-2">
          <button className="p-2 text-[#0066FF] bg-[#E7F0FF] rounded-lg">
            <LayoutGrid className="w-5 h-5" />
          </button>
          <button className="p-2 text-[#677788] hover:text-[#1E2022] rounded-lg">
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid; 