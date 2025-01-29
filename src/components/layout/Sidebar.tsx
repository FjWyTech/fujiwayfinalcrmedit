'use client';

import { 
  Users, 
  FolderKanban, 
  Briefcase, 
  Network, 
  Activity, 
  User, 
  Lock,
  Boxes,
  LineChart,
  Target,
  LogOut
} from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createBrowserClient } from '@supabase/ssr';

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUserEmail(user?.email ?? null);
    };

    getUser();
  }, [supabase.auth]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/auth/signin');
  };

  const navItems = [
    { href: '/kpi', label: 'KPI Monitor', icon: Target },
    { href: '/metrics', label: 'Metrics', icon: LineChart },
    { href: '/profiles', label: 'Profiles', icon: Users },
    { href: '/projects', label: 'Projects', icon: FolderKanban },
    { href: '/works', label: 'Works', icon: Briefcase },
    { href: '/teams', label: 'Teams', icon: Users },
    { href: '/network', label: 'Network', icon: Network },
    { href: '/activity', label: 'Activity', icon: Activity },
    { href: '/account', label: 'My Account', icon: User },
    { href: '/auth', label: 'Authentication', icon: Lock },
    { href: '/spaces', label: 'Spaces', icon: Boxes },
  ];

  return (
    <aside className="fixed top-0 left-0 w-[240px] h-screen bg-card shadow-sm">
      <div className="px-6 py-5 border-b">
        <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
          Fujiway
        </h1>
      </div>

      <div className="px-4 py-4 border-b">
        <div className="flex items-center space-x-3 px-2">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="w-4 h-4 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">
              {userEmail}
            </p>
          </div>
        </div>
      </div>

      <nav className="flex flex-col py-6 px-4 space-y-1.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-all duration-200 font-medium ${
                isActive 
                  ? 'bg-primary/10 text-primary shadow-sm' 
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              <Icon className={`w-[18px] h-[18px] ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
              <span className="text-sm">{item.label}</span>
            </Link>
          );
        })}

        <button
          onClick={handleSignOut}
          className="flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-all duration-200 font-medium text-destructive hover:bg-destructive/10 w-full"
        >
          <LogOut className="w-[18px] h-[18px]" />
          <span className="text-sm">Sign out</span>
        </button>
      </nav>
    </aside>
  );
} 