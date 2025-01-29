'use client';

import { Search, Filter, Plus } from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 pl-10 text-sm bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0066FF]"
            />
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center px-4 py-2 text-sm text-[#677788] bg-gray-100 rounded-lg hover:bg-gray-200">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </button>
            <button className="flex items-center px-4 py-2 text-sm text-white bg-[#0066FF] rounded-lg hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Add New
            </button>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
};

export default DashboardLayout; 