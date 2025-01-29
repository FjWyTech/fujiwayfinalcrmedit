import ProjectCard from '@/components/features/ProjectCard'
import type { Project } from '@/components/features/ProjectCard'

const projects: Project[] = [
  {
    id: 1,
    name: 'Website Redesign',
    logo: 'https://picsum.photos/200/200?random=1',
    client: 'TechCorp Inc.',
    taskCount: 12,
    progress: 75,
    budget: 15000,
    startDate: '2024-01-01',
    endDate: '2024-03-31',
    status: 'In Progress' as const,
    team: [
      { id: 1, name: 'John Doe', avatar: 'https://picsum.photos/200/200?random=10' },
      { id: 2, name: 'Jane Smith', avatar: 'https://picsum.photos/200/200?random=11' },
      { id: 3, name: 'Mike Johnson', avatar: 'https://picsum.photos/200/200?random=12' },
      { id: 4, name: 'Sarah Wilson', avatar: 'https://picsum.photos/200/200?random=13' },
    ],
  },
  {
    id: 2,
    name: 'Mobile App Development',
    logo: 'https://picsum.photos/200/200?random=2',
    client: 'InnovateTech',
    taskCount: 24,
    progress: 45,
    budget: 45000,
    startDate: '2024-02-01',
    endDate: '2024-06-30',
    status: 'In Progress' as const,
    team: [
      { id: 5, name: 'Alex Brown', avatar: 'https://picsum.photos/200/200?random=14' },
      { id: 6, name: 'Emily Davis', avatar: 'https://picsum.photos/200/200?random=15' },
      { id: 7, name: 'Chris Wilson', avatar: 'https://picsum.photos/200/200?random=16' },
    ],
  },
  {
    id: 3,
    name: 'E-commerce Platform',
    logo: 'https://picsum.photos/200/200?random=3',
    client: 'ShopRight LLC',
    taskCount: 18,
    progress: 90,
    budget: 28000,
    startDate: '2024-01-15',
    endDate: '2024-04-15',
    status: 'Completed' as const,
    team: [
      { id: 8, name: 'David Lee', avatar: 'https://picsum.photos/200/200?random=17' },
      { id: 9, name: 'Lisa Chen', avatar: 'https://picsum.photos/200/200?random=18' },
      { id: 10, name: 'Tom Harris', avatar: 'https://picsum.photos/200/200?random=19' },
    ],
  },
]

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-[#333333] mb-6">Projects Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
