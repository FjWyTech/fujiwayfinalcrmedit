'use client';

import Image from 'next/image';
import { Users, Calendar, MessageSquare } from 'lucide-react';

interface Connection {
  id: number;
  name: string;
  title: string;
  company: string;
  avatar: string;
  mutualConnections: number;
  isOnline: boolean;
}

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  category: string;
}

interface Group {
  id: number;
  name: string;
  members: number;
  category: string;
  image: string;
}

interface NetworkFeedProps {
  connections: Connection[];
  events: Event[];
  groups: Group[];
}

const NetworkFeed = ({ connections, events, groups }: NetworkFeedProps) => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-[#1E2022]">
            Suggested Connections
          </h2>
          <button className="text-sm text-[#0066FF] hover:underline">
            View All
          </button>
        </div>

        <div className="space-y-4">
          {connections.map((connection) => (
            <div
              key={connection.id}
              className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50"
            >
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Image
                    src={connection.avatar}
                    alt={connection.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  {connection.isOnline && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                  )}
                </div>
                <div>
                  <h3 className="font-medium text-[#1E2022]">{connection.name}</h3>
                  <p className="text-sm text-[#677788]">{connection.title}</p>
                  <p className="text-sm text-[#677788]">{connection.company}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button className="p-2 text-[#677788] hover:text-[#1E2022] rounded-lg">
                  <MessageSquare className="w-5 h-5" />
                </button>
                <button className="px-4 py-2 text-sm text-[#0066FF] border border-[#0066FF] rounded-lg hover:bg-[#E7F0FF]">
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-[#1E2022]">
            Recommended Groups
          </h2>
          <button className="text-sm text-[#0066FF] hover:underline">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {groups.map((group) => (
            <div
              key={group.id}
              className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50"
            >
              <Image
                src={group.image}
                alt={group.name}
                width={64}
                height={64}
                className="rounded-lg"
              />
              <div>
                <h3 className="font-medium text-[#1E2022]">{group.name}</h3>
                <p className="text-sm text-[#677788]">
                  <Users className="inline w-4 h-4 mr-1" />
                  {group.members.toLocaleString()} members
                </p>
                <button className="mt-2 px-3 py-1 text-sm text-[#0066FF] bg-[#E7F0FF] rounded-full">
                  {group.category}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-[#1E2022]">
            Upcoming Events
          </h2>
          <button className="text-sm text-[#0066FF] hover:underline">
            View All
          </button>
        </div>

        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#E7F0FF] rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-[#0066FF]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#1E2022]">{event.title}</h3>
                  <p className="text-sm text-[#677788]">
                    {event.date} at {event.time}
                  </p>
                  <p className="text-sm text-[#677788]">{event.location}</p>
                </div>
              </div>

              <button className="px-4 py-2 text-sm text-white bg-[#0066FF] rounded-lg hover:bg-blue-700">
                Join
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NetworkFeed; 