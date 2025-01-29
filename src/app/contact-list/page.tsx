'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Search, Filter, Plus, Mail, Phone, MapPin, Grid, List } from 'lucide-react'

const contacts = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Frontend Developer',
    email: 'john.doe@example.com',
    phone: '+1 234 567 890',
    location: 'New York, USA',
    avatar: 'https://picsum.photos/200/200?random=1',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'UI/UX Designer',
    email: 'jane.smith@example.com',
    phone: '+1 234 567 891',
    location: 'San Francisco, USA',
    avatar: 'https://picsum.photos/200/200?random=2',
    status: 'Active',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'Backend Developer',
    email: 'mike.johnson@example.com',
    phone: '+1 234 567 892',
    location: 'London, UK',
    avatar: 'https://picsum.photos/200/200?random=3',
    status: 'Away',
  },
  {
    id: 4,
    name: 'Sarah Wilson',
    role: 'Project Manager',
    email: 'sarah.wilson@example.com',
    phone: '+1 234 567 893',
    location: 'Toronto, Canada',
    avatar: 'https://picsum.photos/200/200?random=4',
    status: 'Offline',
  },
]

export default function ContactListPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800'
      case 'Away':
        return 'bg-yellow-100 text-yellow-800'
      case 'Offline':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-[#333333]">Contacts</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search contacts..."
              className="pl-10 pr-4 py-2 border border-[#E9ECEF] rounded-lg focus:outline-none focus:border-[#0D6EFD]"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6C757D]" />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-[#F8F9FA] text-[#333333] rounded-lg hover:bg-gray-200 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <div className="flex items-center space-x-2 border border-[#E9ECEF] rounded-lg">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 ${
                viewMode === 'grid'
                  ? 'bg-[#0D6EFD] text-white'
                  : 'bg-[#F8F9FA] text-[#6C757D]'
              } rounded-l-lg`}
            >
              <Grid className="w-5 h-5" />
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
            <span>Add Contact</span>
          </button>
        </div>
      </div>

      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contacts.map((contact) => (
            <div key={contact.id} className="bg-white rounded-xl border border-[#E9ECEF] p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={contact.avatar}
                      alt={contact.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#333333]">{contact.name}</h3>
                    <p className="text-sm text-[#6C757D]">{contact.role}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(contact.status)}`}>
                  {contact.status}
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-[#6C757D]">
                  <Mail className="w-4 h-4 mr-2" />
                  {contact.email}
                </div>
                <div className="flex items-center text-sm text-[#6C757D]">
                  <Phone className="w-4 h-4 mr-2" />
                  {contact.phone}
                </div>
                <div className="flex items-center text-sm text-[#6C757D]">
                  <MapPin className="w-4 h-4 mr-2" />
                  {contact.location}
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
                <th className="px-6 py-3 text-left text-xs font-medium text-[#6C757D] uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#6C757D] uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#6C757D] uppercase tracking-wider">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#6C757D] uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#6C757D] uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E9ECEF]">
              {contacts.map((contact) => (
                <tr key={contact.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <Image
                          src={contact.avatar}
                          alt={contact.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="font-medium text-[#333333]">{contact.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#6C757D]">{contact.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#6C757D]">{contact.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#6C757D]">{contact.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#6C757D]">{contact.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(contact.status)}`}>
                      {contact.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
} 