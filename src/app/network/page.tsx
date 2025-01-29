import { Metadata } from 'next';
import NetworkFeed from '@/components/features/NetworkFeed';

export const metadata: Metadata = {
  title: 'Network - Fujiway',
  description: 'Connect and network with professionals',
};

const connections = [
  {
    id: 1,
    name: 'Alex Thompson',
    title: 'Product Manager',
    company: 'Tech Innovations Inc.',
    avatar: 'https://picsum.photos/200/200?random=1',
    mutualConnections: 12,
    isOnline: true,
  },
  {
    id: 2,
    name: 'Maria Garcia',
    title: 'UX Designer',
    company: 'Design Studio Co.',
    avatar: 'https://picsum.photos/200/200?random=2',
    mutualConnections: 8,
    isOnline: false,
  },
  {
    id: 3,
    name: 'James Wilson',
    title: 'Software Engineer',
    company: 'Cloud Systems Ltd.',
    avatar: 'https://picsum.photos/200/200?random=3',
    mutualConnections: 15,
    isOnline: true,
  },
];

const events = [
  {
    id: 1,
    title: 'Tech Meetup 2024',
    date: '2024-02-15',
    time: '18:00',
    location: 'San Francisco, CA',
    attendees: 120,
    category: 'Networking',
  },
  {
    id: 2,
    title: 'Design Workshop',
    date: '2024-02-20',
    time: '14:00',
    location: 'Online',
    attendees: 50,
    category: 'Workshop',
  },
];

const groups = [
  {
    id: 1,
    name: 'UX/UI Designers',
    members: 1250,
    category: 'Design',
    image: 'https://picsum.photos/200/200?random=4',
  },
  {
    id: 2,
    name: 'Tech Entrepreneurs',
    members: 3400,
    category: 'Business',
    image: 'https://picsum.photos/200/200?random=5',
  },
];

export default function NetworkPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <NetworkFeed
          connections={connections}
          events={events}
          groups={groups}
        />
      </div>
      
      <aside className="space-y-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-[#1E2022] mb-4">
            Upcoming Events
          </h2>
          {events.map((event) => (
            <div key={event.id} className="mb-4 last:mb-0">
              <h3 className="font-medium text-[#1E2022]">{event.title}</h3>
              <p className="text-sm text-[#677788]">
                {event.date} at {event.time}
              </p>
              <p className="text-sm text-[#677788]">{event.location}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-[#1E2022] mb-4">
            Suggested Groups
          </h2>
          {groups.map((group) => (
            <div key={group.id} className="mb-4 last:mb-0">
              <h3 className="font-medium text-[#1E2022]">{group.name}</h3>
              <p className="text-sm text-[#677788]">
                {group.members.toLocaleString()} members
              </p>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
} 