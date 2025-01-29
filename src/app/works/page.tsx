import { Metadata } from 'next';
import WorkGallery from '@/components/features/WorkGallery';

export const metadata: Metadata = {
  title: 'Works - Fujiway',
  description: 'Explore our portfolio of work samples and case studies',
};

const works = [
  {
    id: 1,
    title: 'Mobile App UI Design',
    category: 'UI/UX Design',
    image: 'https://picsum.photos/800/600?random=1',
    description: 'Modern and intuitive mobile application interface design',
  },
  {
    id: 2,
    title: 'E-commerce Website',
    category: 'Web Development',
    image: 'https://picsum.photos/800/800?random=2',
    description: 'Full-stack e-commerce platform with payment integration',
  },
  {
    id: 3,
    title: 'Brand Identity Design',
    category: 'Branding',
    image: 'https://picsum.photos/800/500?random=3',
    description: 'Complete brand identity package for a tech startup',
  },
  {
    id: 4,
    title: 'Social Media Dashboard',
    category: 'UI/UX Design',
    image: 'https://picsum.photos/800/700?random=4',
    description: 'Analytics and management dashboard for social media',
  },
  {
    id: 5,
    title: 'Marketing Campaign',
    category: 'Marketing',
    image: 'https://picsum.photos/800/900?random=5',
    description: 'Integrated digital marketing campaign for product launch',
  },
  {
    id: 6,
    title: 'Mobile Game Development',
    category: 'Development',
    image: 'https://picsum.photos/800/600?random=6',
    description: 'Cross-platform mobile game with multiplayer features',
  },
];

export default function WorksPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-[#1E2022]">Portfolio Works</h1>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-sm text-[#677788] bg-white rounded-lg hover:bg-gray-50">
            All
          </button>
          <button className="px-4 py-2 text-sm text-[#0066FF] bg-[#E7F0FF] rounded-lg">
            UI/UX Design
          </button>
          <button className="px-4 py-2 text-sm text-[#677788] bg-white rounded-lg hover:bg-gray-50">
            Development
          </button>
          <button className="px-4 py-2 text-sm text-[#677788] bg-white rounded-lg hover:bg-gray-50">
            Marketing
          </button>
        </div>
      </div>

      <WorkGallery works={works} />
    </div>
  );
} 