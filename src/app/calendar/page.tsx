'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react'

const events = [
  {
    id: 1,
    title: 'Team Meeting',
    date: '2024-02-15',
    time: '10:00 AM',
    type: 'meeting',
  },
  {
    id: 2,
    title: 'Project Deadline',
    date: '2024-02-20',
    time: '5:00 PM',
    type: 'deadline',
  },
  {
    id: 3,
    title: 'Client Call',
    date: '2024-02-15',
    time: '2:00 PM',
    type: 'call',
  },
]

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date())

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDay = firstDay.getDay()
    
    const days = []
    
    // Add empty days for previous month
    for (let i = 0; i < startingDay; i++) {
      days.push(null)
    }
    
    // Add days of current month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i))
    }
    
    return days
  }

  const getEventsByDate = (date: Date) => {
    if (!date) return []
    const dateString = date.toISOString().split('T')[0]
    return events.filter(event => event.date === dateString)
  }

  const getEventColor = (type: string) => {
    switch (type) {
      case 'meeting':
        return 'bg-blue-100 text-blue-800'
      case 'deadline':
        return 'bg-red-100 text-red-800'
      case 'call':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const days = getDaysInMonth(currentDate)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-semibold text-[#333333]">Calendar</h1>
          <div className="flex items-center space-x-2">
            <button
              onClick={prevMonth}
              className="p-2 hover:bg-[#F8F9FA] rounded-lg text-[#6C757D]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-lg font-medium text-[#333333]">
              {months[currentDate.getMonth()]} {currentDate.getFullYear()}
            </span>
            <button
              onClick={nextMonth}
              className="p-2 hover:bg-[#F8F9FA] rounded-lg text-[#6C757D]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-[#0D6EFD] text-white rounded-lg hover:bg-blue-600 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add Event</span>
        </button>
      </div>

      <div className="bg-white rounded-xl border border-[#E9ECEF] overflow-hidden">
        {/* Calendar Header */}
        <div className="grid grid-cols-7 border-b border-[#E9ECEF]">
          {daysOfWeek.map((day) => (
            <div
              key={day}
              className="px-2 py-3 text-center text-sm font-medium text-[#6C757D]"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 divide-x divide-y divide-[#E9ECEF]">
          {days.map((date, index) => {
            const isToday = date && date.toDateString() === new Date().toDateString()
            const events = date ? getEventsByDate(date) : []

            return (
              <div
                key={index}
                className={`min-h-[120px] p-2 ${
                  date ? 'bg-white' : 'bg-[#F8F9FA]'
                }`}
              >
                {date && (
                  <>
                    <span className={`inline-flex w-6 h-6 items-center justify-center rounded-full text-sm ${
                      isToday
                        ? 'bg-[#0D6EFD] text-white'
                        : 'text-[#333333]'
                    }`}>
                      {date.getDate()}
                    </span>
                    <div className="mt-2 space-y-1">
                      {events.map((event) => (
                        <div
                          key={event.id}
                          className={`px-2 py-1 rounded text-xs font-medium ${getEventColor(event.type)}`}
                        >
                          <div className="font-medium truncate">{event.title}</div>
                          <div className="text-xs opacity-75">{event.time}</div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
} 