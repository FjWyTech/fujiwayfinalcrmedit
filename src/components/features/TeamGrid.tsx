'use client';

import Image from 'next/image';
import { MessageSquare, Users } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  avatar: string;
}

interface Team {
  id: number;
  name: string;
  description: string;
  members: TeamMember[];
  currentProject: string;
  progress: number;
}

interface TeamGridProps {
  teams: Team[];
}

const TeamGrid = ({ teams }: TeamGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {teams.map((team) => (
        <div key={team.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-[#1E2022]">{team.name}</h3>
            <div className="flex items-center space-x-2">
              <button className="p-2 text-[#677788] hover:text-[#1E2022] rounded-lg">
                <MessageSquare className="w-5 h-5" />
              </button>
              <button className="p-2 text-[#677788] hover:text-[#1E2022] rounded-lg">
                <Users className="w-5 h-5" />
              </button>
            </div>
          </div>

          <p className="text-[#677788] text-sm mb-4">{team.description}</p>

          <div className="flex -space-x-2 mb-4">
            {team.members.map((member) => (
              <div key={member.id} className="relative group">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white"
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                  {member.name} - {member.role}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#677788]">Current Project:</span>
              <span className="font-medium text-[#1E2022]">{team.currentProject}</span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#677788]">Progress</span>
                <span className="font-medium text-[#1E2022]">{team.progress}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#0066FF] rounded-full transition-all"
                  style={{ width: `${team.progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamGrid; 