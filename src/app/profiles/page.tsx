import { Metadata } from 'next';
import ProfileCard from '@/components/features/ProfileCard';

export const metadata: Metadata = {
  title: 'Profiles - Fujiway',
  description: 'Browse and connect with professionals on Fujiway',
};

const profiles = [
  {
    id: 1,
    name: 'Sarah Wilson',
    title: 'Senior Product Designer',
    avatar: 'https://picsum.photos/200/200?random=1',
    skills: ['UI/UX', 'Figma', 'Product Design', 'User Research'],
    portfolio: 'https://portfolio.com/sarahwilson',
    location: 'San Francisco, CA',
    experience: '8+ years',
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'Full Stack Developer',
    avatar: 'https://picsum.photos/200/200?random=2',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
    portfolio: 'https://portfolio.com/michaelchen',
    location: 'New York, NY',
    experience: '5+ years',
  },
  {
    id: 3,
    name: 'Emily Davis',
    title: 'Marketing Manager',
    avatar: 'https://picsum.photos/200/200?random=3',
    skills: ['Digital Marketing', 'SEO', 'Content Strategy', 'Analytics'],
    portfolio: 'https://portfolio.com/emilydavis',
    location: 'London, UK',
    experience: '6+ years',
  },
];

export default function ProfilesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-[#1E2022]">Professional Profiles</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} {...profile} />
        ))}
      </div>
    </div>
  );
} 