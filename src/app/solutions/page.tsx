import { Metadata } from 'next';
import GlassCard from '@/components/GlassCard'

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'Enterprise software solutions for complex organisational challenges, improving operational efficiency and agility.',
  openGraph: {
    title: 'Solutions | PinSoft - Complete Software Solutions',
    description: 'Enterprise software solutions for complex organisational challenges, improving operational efficiency and agility.',
    type: 'website',
  },
}

export default function SolutionsPage() {
  const categories = [
    {
      title: 'Enterprise Solutions',
      description: 'Addressing complex organisational challenges',
      features: ['Custom ERP systems', 'Resource planning', 'Organizational management', 'Integration solutions'],
    },
    {
      title: 'Business Process Automation',
      description: 'Improving operational efficiency',
      features: ['Workflow automation', 'Process optimization', 'Digital transformation', 'Efficiency tools'],
    },
    {
      title: 'Operational Intelligence',
      description: 'Data-driven insights for better decisions',
      features: ['Real-time analytics', 'Performance dashboards', 'Operational metrics', 'Business intelligence'],
    },
    {
      title: 'Digital Transformation',
      description: 'Enhancing business agility',
      features: ['Legacy modernization', 'Cloud migration', 'System integration', 'Change management'],
    },
  ]

  return (
    <div className="pt-24 px-4 pb-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-center">Our Solutions</h1>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Comprehensive software solutions tailored to your industry and needs
        </p>
        <div className="space-y-12">
          {categories.map((category, index) => (
            <GlassCard key={index} className="hover:scale-105 transition-transform">
              <h2 className="text-3xl font-bold mb-4 text-primary">{category.title}</h2>
              <p className="text-lg text-gray-600 mb-6">{category.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <span className="text-accent mr-2">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  )
}
