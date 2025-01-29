'use client'

import { useState } from 'react'
import { Trello, List, Filter, Plus } from 'lucide-react'
import ProjectCard from '@/components/features/ProjectCard'
import type { Project } from '@/components/features/ProjectCard'

const projects: Project[] = [
  {
    id: 1,
    name: 'Website Redesign',
    logo: 'https://picsum.photos/200/200?random=1',
    client: 'TechCorp Inc.',
    taskCount: 12,
    progress: 75,
    budget: 15000,
    startDate: '2024-01-01',
    endDate: '2024-03-31',
    status: 'In Progress',
    team: [
      { id: 1, name: 'John Doe', avatar: 'https://picsum.photos/200/200?random=10' },
      { id: 2, name: 'Jane Smith', avatar: 'https://picsum.photos/200/200?random=11' },
    ],
  },
  {
    id: 2,
    name: 'Mobile App Development',
    logo: 'https://picsum.photos/200/200?random=2',
    client: 'InnovateTech',
    taskCount: 24,
    progress: 45,
    budget: 45000,
    startDate: '2024-02-01',
    endDate: '2024-06-30',
    status: 'In Progress',
    team: [
      { id: 3, name: 'Mike Johnson', avatar: 'https://picsum.photos/200/200?random=12' },
      { id: 4, name: 'Sarah Wilson', avatar: 'https://picsum.photos/200/200?random=13' },
    ],
  },
  {
    id: 3,
    name: 'E-commerce Platform',
    logo: 'https://picsum.photos/200/200?random=3',
    client: 'ShopRight LLC',
    taskCount: 18,
    progress: 90,
    budget: 28000,
    startDate: '2024-01-15',
    endDate: '2024-04-15',
    status: 'Completed',
    team: [
      { id: 5, name: 'Alex Brown', avatar: 'https://picsum.photos/200/200?random=14' },
      { id: 6, name: 'Emily Davis', avatar: 'https://picsum.photos/200/200?random=15' },
    ],
  },
  {
    id: 4,
    name: 'CRM System',
    logo: 'https://picsum.photos/200/200?random=4',
    client: 'ServicePro Co.',
    taskCount: 8,
    progress: 15,
    budget: 35000,
    startDate: '2024-03-01',
    endDate: '2024-08-31',
    status: 'On Hold',
    team: [
      { id: 7, name: 'Chris Wilson', avatar: 'https://picsum.photos/200/200?random=16' },
      { id: 8, name: 'David Lee', avatar: 'https://picsum.photos/200/200?random=17' },
    ],
  },
]

const kanbanColumns = [
  { id: 'todo', title: 'To Do', color: 'bg-gray-100' },
  { id: 'inProgress', title: 'In Progress', color: 'bg-blue-50' },
  { id: 'review', title: 'Review', color: 'bg-yellow-50' },
  { id: 'completed', title: 'Completed', color: 'bg-green-50' },
]

export default function ProjectsPage() {
  const [viewMode, setViewMode] = useState<'kanban' | 'list'>('list')

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-[#333333]">Projects</h1>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 bg-[#F8F9FA] text-[#333333] rounded-lg hover:bg-gray-200 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <div className="flex items-center space-x-2 border border-[#E9ECEF] rounded-lg">
            <button
              onClick={() => setViewMode('kanban')}
              className={`p-2 ${
                viewMode === 'kanban'
                  ? 'bg-[#0D6EFD] text-white'
                  : 'bg-[#F8F9FA] text-[#6C757D]'
              } rounded-l-lg`}
            >
              <Trello className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 ${
                viewMode === 'list'
                  ? 'bg-[#0D6EFD] text-white'
                  : 'bg-[#F8F9FA] text-[#6C757D]'
              } rounded-r-lg`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-[#0D6EFD] text-white rounded-lg hover:bg-blue-600 transition-colors">
            <Plus className="w-4 h-4" />
            <span>New Project</span>
          </button>
        </div>
      </div>

      {viewMode === 'kanban' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kanbanColumns.map((column) => (
            <div key={column.id} className={`${column.color} rounded-xl p-4`}>
              <h3 className="font-medium text-[#333333] mb-4">{column.title}</h3>
              <div className="space-y-4">
                {projects
                  .filter((project) => {
                    if (column.id === 'todo') return project.progress === 0
                    if (column.id === 'inProgress') return project.progress > 0 && project.progress < 90
                    if (column.id === 'review') return project.progress >= 90 && project.progress < 100
                    return project.progress === 100
                  })
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  )
} 