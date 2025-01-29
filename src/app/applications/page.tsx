'use client'

import { useState } from 'react'
import { LayoutGrid, List, Server, Cpu, Database, Activity } from 'lucide-react'

const applications = [
  {
    id: 1,
    name: 'Frontend App',
    status: 'Running',
    type: 'Web Application',
    cpu: '23%',
    memory: '1.2GB',
    lastDeployed: '2 hours ago',
  },
  {
    id: 2,
    name: 'Backend API',
    status: 'Running',
    type: 'API Service',
    cpu: '45%',
    memory: '2.8GB',
    lastDeployed: '1 day ago',
  },
  {
    id: 3,
    name: 'Database Service',
    status: 'Warning',
    type: 'Database',
    cpu: '78%',
    memory: '5.4GB',
    lastDeployed: '5 days ago',
  },
  {
    id: 4,
    name: 'Cache Server',
    status: 'Stopped',
    type: 'Cache Service',
    cpu: '0%',
    memory: '0GB',
    lastDeployed: '1 week ago',
  },
]

export default function ApplicationsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Running':
        return 'bg-green-100 text-green-800'
      case 'Warning':
        return 'bg-yellow-100 text-yellow-800'
      case 'Stopped':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-[#333333]">Applications</h1>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg ${
              viewMode === 'grid'
                ? 'bg-[#0D6EFD] text-white'
                : 'bg-[#F8F9FA] text-[#6C757D]'
            }`}
          >
            <LayoutGrid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg ${
              viewMode === 'list'
                ? 'bg-[#0D6EFD] text-white'
                : 'bg-[#F8F9FA] text-[#6C757D]'
            }`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>

      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app) => (
            <div key={app.id} className="bg-white rounded-xl border border-[#E9ECEF] p-4">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-[#333333]">{app.name}</h3>
                  <p className="text-sm text-[#6C757D]">{app.type}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(app.status)}`}>
                  {app.status}
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-[#6C757D]">
                  <Cpu className="w-4 h-4 mr-2" />
                  CPU Usage: {app.cpu}
                </div>
                <div className="flex items-center text-sm text-[#6C757D]">
                  <Database className="w-4 h-4 mr-2" />
                  Memory: {app.memory}
                </div>
                <div className="flex items-center text-sm text-[#6C757D]">
                  <Activity className="w-4 h-4 mr-2" />
                  Last Deployed: {app.lastDeployed}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-[#E9ECEF] overflow-hidden">
          <table className="w-full">
            <thead className="bg-[#F8F9FA]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#6C757D] uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#6C757D] uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#6C757D] uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#6C757D] uppercase tracking-wider">CPU</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#6C757D] uppercase tracking-wider">Memory</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#6C757D] uppercase tracking-wider">Last Deployed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E9ECEF]">
              {applications.map((app) => (
                <tr key={app.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-[#333333]">{app.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(app.status)}`}>
                      {app.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#6C757D]">{app.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#6C757D]">{app.cpu}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#6C757D]">{app.memory}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#6C757D]">{app.lastDeployed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
} 