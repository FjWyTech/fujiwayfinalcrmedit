'use client'

import { useState } from 'react'
import {
  LineChart,
  BarChart,
  Activity,
  Users,
  ShoppingCart,
  DollarSign,
  ArrowUp,
  ArrowDown,
  Calendar,
  Filter
} from 'lucide-react'

interface MetricCard {
  title: string
  value: string
  change: number
  icon: typeof Activity
  chartData?: number[]
}

const metrics: MetricCard[] = [
  {
    title: 'Total Revenue',
    value: '$54,239',
    change: 12.5,
    icon: DollarSign,
    chartData: [35, 45, 20, 67, 89, 54, 78]
  },
  {
    title: 'Active Users',
    value: '2,345',
    change: -3.2,
    icon: Users,
    chartData: [45, 23, 56, 78, 34, 65, 43]
  },
  {
    title: 'Orders',
    value: '456',
    change: 8.7,
    icon: ShoppingCart,
    chartData: [23, 45, 67, 34, 56, 78, 89]
  },
  {
    title: 'Conversion Rate',
    value: '3.45%',
    change: 2.1,
    icon: Activity,
    chartData: [45, 67, 34, 23, 56, 78, 45]
  }
]

const chartData = {
  revenue: [
    { date: 'Jan', value: 2400 },
    { date: 'Feb', value: 1398 },
    { date: 'Mar', value: 9800 },
    { date: 'Apr', value: 3908 },
    { date: 'May', value: 4800 },
    { date: 'Jun', value: 3800 },
    { date: 'Jul', value: 4300 }
  ],
  users: [
    { date: 'Jan', value: 1200 },
    { date: 'Feb', value: 998 },
    { date: 'Mar', value: 1500 },
    { date: 'Apr', value: 2908 },
    { date: 'May', value: 2800 },
    { date: 'Jun', value: 3300 },
    { date: 'Jul', value: 3600 }
  ]
}

export default function AnalyticsPage() {
  const [dateRange, setDateRange] = useState('7d')

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-[#333333]">Analytics Overview</h1>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-[#E9ECEF] rounded-lg text-[#6C757D] hover:bg-[#F8F9FA]">
            <Calendar className="w-4 h-4" />
            <span>Last {dateRange}</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-[#E9ECEF] rounded-lg text-[#6C757D] hover:bg-[#F8F9FA]">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon
          const isPositive = metric.change > 0
          return (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-[#E9ECEF]"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-[#6C757D]">{metric.title}</p>
                  <h3 className="text-2xl font-semibold mt-1 text-[#333333]">
                    {metric.value}
                  </h3>
                </div>
                <div className="p-3 bg-[#F8F9FA] rounded-lg">
                  <Icon className="w-5 h-5 text-[#0D6EFD]" />
                </div>
              </div>
              <div className="mt-4 flex items-center space-x-2">
                {isPositive ? (
                  <ArrowUp className="w-4 h-4 text-green-500" />
                ) : (
                  <ArrowDown className="w-4 h-4 text-red-500" />
                )}
                <span
                  className={`text-sm ${
                    isPositive ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {Math.abs(metric.change)}%
                </span>
                <span className="text-sm text-[#6C757D]">vs last period</span>
              </div>
              {metric.chartData && (
                <div className="mt-4 h-[40px] flex items-end space-x-1">
                  {metric.chartData.map((value, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-[#0D6EFD] bg-opacity-20 rounded-t"
                      style={{ height: `${value}%` }}
                    />
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white p-6 rounded-xl border border-[#E9ECEF]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-[#333333]">Revenue Overview</h3>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#0D6EFD] rounded-full" />
                <span className="text-sm text-[#6C757D]">Revenue</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#6C757D] rounded-full" />
                <span className="text-sm text-[#6C757D]">Expenses</span>
              </div>
            </div>
          </div>
          <div className="h-[300px] flex items-end space-x-2">
            {chartData.revenue.map((item, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-[#0D6EFD] rounded-t"
                  style={{ height: `${(item.value / 10000) * 100}%` }}
                />
                <span className="text-xs text-[#6C757D] mt-2">{item.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Users Chart */}
        <div className="bg-white p-6 rounded-xl border border-[#E9ECEF]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-[#333333]">User Activity</h3>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#0D6EFD] rounded-full" />
                <span className="text-sm text-[#6C757D]">Active Users</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#6C757D] rounded-full" />
                <span className="text-sm text-[#6C757D]">New Users</span>
              </div>
            </div>
          </div>
          <div className="h-[300px] flex items-end space-x-2">
            {chartData.users.map((item, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-[#0D6EFD] rounded-t"
                  style={{ height: `${(item.value / 4000) * 100}%` }}
                />
                <span className="text-xs text-[#6C757D] mt-2">{item.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 