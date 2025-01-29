'use client';

import Image from 'next/image';
import { Clock, MapPin, DollarSign } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  status: 'In Progress' | 'Upcoming' | 'Completed';
  duration: string;
  location: string;
  rate: string;
  logoUrl: string;
  teamMembers: Array<{
    id: number;
    name: string;
    avatar: string;
  }>;
}

const statusColors = {
  'In Progress': 'bg-[#E7F0FF] text-[#0066FF]',
  'Upcoming': 'bg-[#F5F6FA] text-[#677788]',
  'Completed': 'bg-[#E8FFF3] text-green-600',
};

const ProjectCard = ({
  title,
  description,
  status,
  duration,
  location,
  rate,
  logoUrl,
  teamMembers,
}: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <Image
          src={logoUrl}
          alt={title}
          width={48}
          height={48}
          className="rounded-lg"
        />
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[status]}`}>
          {status}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-[#1E2022] mb-2">{title}</h3>
      <p className="text-[#677788] text-sm mb-4">{description}</p>

      <div className="flex -space-x-2 mb-4">
        {teamMembers.map((member) => (
          <Image
            key={member.id}
            src={member.avatar}
            alt={member.name}
            width={32}
            height={32}
            className="rounded-full border-2 border-white"
          />
        ))}
      </div>

      <div className="space-y-2 text-sm text-[#677788]">
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-2" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{location}</span>
        </div>
        <div className="flex items-center">
          <DollarSign className="w-4 h-4 mr-2" />
          <span>{rate}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 