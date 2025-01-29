import {
  Users,
  Briefcase,
  BarChart3,
  DollarSign,
  ArrowUp,
  ArrowDown,
  Clock,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react'

const metrics = [
  {
    title: 'Total Users',
    value: '2,847',
    change: '+12.5%',
    isPositive: true,
    icon: Users,
  },
  {
    title: 'Active Projects',
    value: '24',
    change: '+3.2%',
    isPositive: true,
    icon: Briefcase,
  },
  {
    title: 'Revenue',
    value: '$45,678',
    change: '-2.4%',
    isPositive: false,
    icon: DollarSign,
  },
  {
    title: 'Completion Rate',
    value: '84%',
    change: '+6.8%',
    isPositive: true,
    icon: BarChart3,
  },
]

const activities = [
  {
    id: 1,
    title: 'Project X Milestone Completed',
    time: '2 hours ago',
    status: 'success',
  },
  {
    id: 2,
    title: 'New Team Member Added',
    time: '4 hours ago',
    status: 'info',
  },
  {
    id: 3,
    title: 'Budget Warning',
    time: '6 hours ago',
    status: 'warning',
  },
]

export default function DashboardsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-[#333333]">Dashboard Overview</h1>
      
      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => {
          const Icon = metric.icon
          return (
            <div key={metric.title} className="bg-white rounded-xl border border-[#E9ECEF] p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[#6C757D] text-sm">{metric.title}</p>
                  <h3 className="text-2xl font-semibold text-[#333333] mt-1">{metric.value}</h3>
                </div>
                <div className="p-2 bg-[#F8F9FA] rounded-lg">
                  <Icon className="w-5 h-5 text-[#0D6EFD]" />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                {metric.isPositive ? (
                  <ArrowUp className="w-4 h-4 text-green-500 mr-1" />
                ) : (
                  <ArrowDown className="w-4 h-4 text-red-500 mr-1" />
                )}
                <span className={`text-sm ${metric.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                  {metric.change}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Activity Timeline */}
      <div className="bg-white rounded-xl border border-[#E9ECEF] p-6">
        <h2 className="text-lg font-semibold text-[#333333] mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className={`p-2 rounded-lg ${
                activity.status === 'success' ? 'bg-green-100' :
                activity.status === 'warning' ? 'bg-yellow-100' : 'bg-blue-100'
              }`}>
                {activity.status === 'success' ? (
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                ) : activity.status === 'warning' ? (
                  <AlertCircle className="w-5 h-5 text-yellow-600" />
                ) : (
                  <Clock className="w-5 h-5 text-blue-600" />
                )}
              </div>
              <div>
                <p className="text-[#333333] font-medium">{activity.title}</p>
                <p className="text-sm text-[#6C757D]">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl border border-[#E9ECEF] p-6">
        <h2 className="text-lg font-semibold text-[#333333] mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="px-4 py-2 bg-[#0D6EFD] text-white rounded-lg hover:bg-blue-600 transition-colors">
            Create New Project
          </button>
          <button className="px-4 py-2 bg-[#F8F9FA] text-[#333333] rounded-lg hover:bg-gray-200 transition-colors">
            Generate Report
          </button>
          <button className="px-4 py-2 bg-[#F8F9FA] text-[#333333] rounded-lg hover:bg-gray-200 transition-colors">
            Schedule Meeting
          </button>
        </div>
      </div>
    </div>
  )
} 