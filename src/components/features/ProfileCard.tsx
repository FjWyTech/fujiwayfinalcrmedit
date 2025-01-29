'use client';

import Image from 'next/image';
import { MapPin, Clock, Link as LinkIcon } from 'lucide-react';

interface ProfileCardProps {
  name: string;
  title: string;
  avatar: string;
  skills: string[];
  portfolio: string;
  location: string;
  experience: string;
}

const ProfileCard = ({
  name,
  title,
  avatar,
  skills,
  portfolio,
  location,
  experience,
}: ProfileCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4 mb-4">
        <Image
          src={avatar}
          alt={name}
          width={64}
          height={64}
          className="rounded-full"
        />
        <div>
          <h3 className="text-lg font-semibold text-[#1E2022]">{name}</h3>
          <p className="text-[#677788]">{title}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-sm bg-[#E7F0FF] text-[#0066FF] rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="space-y-2 text-sm text-[#677788]">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            <span>{experience}</span>
          </div>
          <div className="flex items-center">
            <LinkIcon className="w-4 h-4 mr-2" />
            <a
              href={portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0066FF] hover:underline"
            >
              View Portfolio
            </a>
          </div>
        </div>

        <button className="w-full px-4 py-2 text-sm text-[#0066FF] border border-[#0066FF] rounded-lg hover:bg-[#E7F0FF] transition-colors">
          Connect
        </button>
      </div>
    </div>
  );
};

export default ProfileCard; 