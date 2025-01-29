'use client'

import { useState } from 'react'
import { Download, Plus, Search, Filter, Printer, MoreVertical } from 'lucide-react'

const invoices = [
  {
    id: 'INV-2024-001',
    client: 'TechCorp Inc.',
    date: '2024-02-01',
    dueDate: '2024-02-15',
    amount: 15000,
    status: 'Paid',
  },
  {
    id: 'INV-2024-002',
    client: 'InnovateTech',
    date: '2024-02-05',
    dueDate: '2024-02-19',
    amount: 8500,
    status: 'Pending',
  },
  {
    id: 'INV-2024-003',
    client: 'ShopRight LLC',
    date: '2024-02-10',
    dueDate: '2024-02-24',
    amount: 12000,
    status: 'Overdue',
  },
]

const stats = [
  { label: 'Total Invoices', value: '$35,500' },
  { label: 'Paid', value: '$15,000' },
  { label: 'Pending', value: '$8,500' },
  { label: 'Overdue', value: '$12,000' },
]

export default function InvoicePage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'bg-green-100 text-green-800'
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'Overdue':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-[#333333]">Invoices</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search invoices..."
              className="pl-10 pr-4 py-2 border border-[#E9ECEF] rounded-lg focus:outline-none focus:border-[#0D6EFD]"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6C757D]" />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-[#F8F9FA] text-[#333333] rounded-lg hover:bg-gray-200 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-[#0D6EFD] text-white rounded-lg hover:bg-blue-600 transition-colors">
            <Plus className="w-4 h-4" />
            <span>New Invoice</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl border border-[#E9ECEF] p-4">
            <p className="text-[#6C757D] text-sm">{stat.label}</p>
            <p className="text-2xl font-semibold text-[#333333] mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Invoices Table */}
      <div className="bg-white rounded-xl border border-[#E9ECEF] overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#F8F9FA]">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#6C757D] uppercase tracking-wider">Invoice ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#6C757D] uppercase tracking-wider">Client</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#6C757D] uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#6C757D] uppercase tracking-wider">Due Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#6C757D] uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#6C757D] uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#6C757D] uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E9ECEF]">
            {invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-[#333333]">
                  {invoice.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[#6C757D]">
                  {invoice.client}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[#6C757D]">
                  {new Date(invoice.date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[#6C757D]">
                  {new Date(invoice.dueDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-[#333333]">
                  ${invoice.amount.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(invoice.status)}`}>
                    {invoice.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-3">
                    <button className="p-1 hover:bg-[#F8F9FA] rounded text-[#6C757D]">
                      <Download className="w-4 h-4" />
                    </button>
                    <button className="p-1 hover:bg-[#F8F9FA] rounded text-[#6C757D]">
                      <Printer className="w-4 h-4" />
                    </button>
                    <button className="p-1 hover:bg-[#F8F9FA] rounded text-[#6C757D]">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
} 