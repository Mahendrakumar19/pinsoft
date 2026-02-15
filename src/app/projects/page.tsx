import { Metadata } from 'next';
import GlassCard from '@/components/GlassCard'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Real implementations delivering measurable results. Case studies of successful software deployments for various industries.',
  openGraph: {
    title: 'Projects | PinSoft - Complete Software Solutions',
    description: 'Real implementations delivering measurable results. Case studies of successful software deployments for various industries.',
    type: 'website',
  },
}

export default function ProjectsPage() {
  const projects = [
    {
      title: 'SmartTechnic',
      client: 'Enterprise Resource Management',
      overview: 'Developed comprehensive ERP solution for complex organizational needs',
      impact: ['Improved operational efficiency', 'Enhanced business agility', 'Streamlined processes'],
      tech: ['Next.js', 'PostgreSQL', 'AWS', 'Redis'],
    },
    {
      title: 'Crew In Touch',
      client: 'Fleet Management Solution',
      overview: 'Created real-time fleet tracking and management platform',
      impact: ['Real-time operational visibility', 'Reduced administrative overhead', 'Improved fleet utilization'],
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    },
    {
      title: 'Pi-Tech',
      client: 'Industrial IoT Platform',
      overview: 'Implemented IoT solution for industrial automation and monitoring',
      impact: ['Increased operational efficiency', 'Predictive maintenance capabilities', 'Cost reduction'],
      tech: ['TypeScript', 'GraphQL', 'MQTT', 'InfluxDB'],
    },
  ]

  return (
    <div className="pt-24 px-4 pb-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-center">Case Studies</h1>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Real implementations delivering measurable results
        </p>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <GlassCard key={index}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold mb-2 text-primary">{project.title}</h2>
                  <p className="text-gray-500 mb-4">{project.client}</p>
                  <p className="text-lg text-gray-700 mb-6">{project.overview}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Impact</h3>
                  <div className="space-y-3">
                    {project.impact.map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <span className="text-accent mr-3 text-xl">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  )
}
