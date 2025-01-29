'use client';

import { Search, Menu } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-[60px] bg-white border-b border-gray-200 z-50">
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center space-x-4">
          <button className="lg:hidden">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
          <Link href="/" className="text-xl font-bold text-[#0066FF]">
            MetronicCloud
          </Link>
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          <Link href="/profiles" className="text-[#677788] hover:text-[#1E2022]">Profiles</Link>
          <Link href="/projects" className="text-[#677788] hover:text-[#1E2022]">Projects</Link>
          <Link href="/works" className="text-[#677788] hover:text-[#1E2022]">Works</Link>
          <Link href="/teams" className="text-[#677788] hover:text-[#1E2022]">Teams</Link>
          <Link href="/network" className="text-[#677788] hover:text-[#1E2022]">Network</Link>
          <Link href="/activity" className="text-[#677788] hover:text-[#1E2022]">Activity</Link>
          <Link href="/more" className="text-[#677788] hover:text-[#1E2022]">More</Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search (⌘ + /)"
              className="w-64 px-4 py-2 pl-10 text-sm bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0066FF]"
            />
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>
          <button className="px-4 py-2 text-sm text-white bg-[#0066FF] rounded-lg hover:bg-blue-700">
            Connect
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 