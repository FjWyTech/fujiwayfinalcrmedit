'use client';

import Image from 'next/image';
import {
  MessageSquare,
  FileText,
  CheckCircle,
  Flag,
  AlertCircle,
} from 'lucide-react';

interface User {
  name: string;
  avatar: string;
}

interface Activity {
  id: number;
  type: 'project_update' | 'team_message' | 'task_completed' | 'comment' | 'file_upload';
  user: User;
  project?: string;
  team?: string;
  action?: string;
  details?: string;
  message?: string;
  task?: string;
  comment?: string;
  files?: string[];
  timestamp: string;
  priority: 'high' | 'medium' | 'normal';
}

interface ActivityFeedProps {
  activities: Activity[];
}

const priorityColors = {
  high: 'text-red-600 bg-red-50',
  medium: 'text-orange-600 bg-orange-50',
  normal: 'text-blue-600 bg-blue-50',
};

const ActivityIcon = ({ type }: { type: Activity['type'] }) => {
  switch (type) {
    case 'project_update':
      return <Flag className="w-5 h-5 text-[#0066FF]" />;
    case 'team_message':
      return <MessageSquare className="w-5 h-5 text-purple-500" />;
    case 'task_completed':
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    case 'comment':
      return <MessageSquare className="w-5 h-5 text-orange-500" />;
    case 'file_upload':
      return <FileText className="w-5 h-5 text-blue-500" />;
    default:
      return <AlertCircle className="w-5 h-5 text-gray-500" />;
  }
};

const ActivityContent = ({ activity }: { activity: Activity }) => {
  switch (activity.type) {
    case 'project_update':
      return (
        <p className="text-[#677788]">
          <span className="font-medium text-[#1E2022]">{activity.project}</span>
          {' - '}
          {activity.action} {activity.details}
        </p>
      );
    case 'team_message':
      return (
        <p className="text-[#677788]">
          <span className="font-medium text-[#1E2022]">{activity.team}</span>
          {' - '}
          {activity.message}
        </p>
      );
    case 'task_completed':
      return (
        <p className="text-[#677788]">
          Completed task{' '}
          <span className="font-medium text-[#1E2022]">{activity.task}</span>
          {' in '}
          {activity.project}
        </p>
      );
    case 'comment':
      return (
        <p className="text-[#677788]">
          Commented on{' '}
          <span className="font-medium text-[#1E2022]">{activity.project}</span>
          {': '}
          {activity.comment}
        </p>
      );
    case 'file_upload':
      return (
        <div className="text-[#677788]">
          <p>
            Uploaded files to{' '}
            <span className="font-medium text-[#1E2022]">{activity.project}</span>
          </p>
          <div className="mt-2 space-y-1">
            {activity.files?.map((file) => (
              <div
                key={file}
                className="flex items-center space-x-2 text-sm text-[#0066FF]"
              >
                <FileText className="w-4 h-4" />
                <span>{file}</span>
              </div>
            ))}
          </div>
        </div>
      );
    default:
      return null;
  }
};

const ActivityFeed = ({ activities }: ActivityFeedProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-[#1E2022]">Activity Feed</h2>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 text-sm text-[#0066FF] bg-[#E7F0FF] rounded-full">
              All
            </button>
            <button className="px-3 py-1 text-sm text-[#677788] hover:bg-gray-100 rounded-full">
              Projects
            </button>
            <button className="px-3 py-1 text-sm text-[#677788] hover:bg-gray-100 rounded-full">
              Tasks
            </button>
          </div>
        </div>
      </div>

      <div className="divide-y divide-gray-200">
        {activities.map((activity) => (
          <div key={activity.id} className="p-6">
            <div className="flex items-start space-x-4">
              <Image
                src={activity.user.avatar}
                alt={activity.user.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-[#1E2022]">
                    {activity.user.name}
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-[#677788]">
                      {activity.timestamp}
                    </span>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        priorityColors[activity.priority]
                      }`}
                    >
                      {activity.priority}
                    </span>
                  </div>
                </div>
                <div className="mt-1 flex items-center space-x-2">
                  <div className="p-1 bg-gray-100 rounded">
                    <ActivityIcon type={activity.type} />
                  </div>
                  <ActivityContent activity={activity} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed; 