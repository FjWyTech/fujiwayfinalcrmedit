import { Metadata } from 'next';
import DashboardLayout from '@/components/layout/DashboardLayout';
import ProjectGrid from '@/components/layout/ProjectGrid';

export const metadata: Metadata = {
  title: 'Projects - Fujiway',
  description: 'Manage and track your projects on Fujiway',
};

export default function ProjectsPage() {
  return (
    <DashboardLayout>
      <ProjectGrid />
    </DashboardLayout>
  );
} 