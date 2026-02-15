import { Metadata } from 'next';
import GlassCard from '@/components/GlassCard'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Professional software development services including custom applications, mobile development, web solutions, and enterprise systems. Contact us for your software needs.',
  openGraph: {
    title: 'Services | PinSoft - Software Development Services',
    description: 'Professional software development services including custom applications, mobile development, web solutions, and enterprise systems. Contact us for your software needs.',
    type: 'website',
  },
}

export default function ProductsPage() {
  const services = [
    {
      title: 'Custom Software Development',
      description: 'Tailored applications built for your specific business requirements',
      features: ['Full-stack development', 'Architecture design', 'Agile methodology', 'Quality assurance'],
      tech: ['Next.js', 'Node.js', 'MongoDB', 'TypeScript'],
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      features: ['Native development', 'Cross-platform solutions', 'UI/UX design', 'App store deployment'],
      tech: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    },
    {
      title: 'Web Application Development',
      description: 'Modern, responsive web applications for any business need',
      features: ['Responsive design', 'Progressive Web Apps', 'Performance optimization', 'SEO friendly'],
      tech: ['React', 'Vue.js', 'Angular', 'Tailwind CSS'],
    },
    {
      title: 'Enterprise Software Solutions',
      description: 'Scalable systems for complex business requirements',
      features: ['Enterprise architecture', 'Integration services', 'Data management', 'Security compliance'],
      tech: ['Microservices', 'Cloud', 'Docker', 'Kubernetes'],
    },
    {
      title: 'API Development & Integration',
      description: 'Connect your systems with robust API solutions',
      features: ['RESTful APIs', 'GraphQL', 'Third-party integrations', 'Microservices'],
      tech: ['Node.js', 'Python', 'API Gateway', 'OAuth'],
    },
    {
      title: 'DevOps & Cloud Services',
      description: 'Modern deployment and infrastructure solutions',
      features: ['CI/CD pipelines', 'Cloud migration', 'Infrastructure as Code', 'Monitoring'],
      tech: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
    },
  ]

  return (
    <div className="pt-24 px-4 pb-20 relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-5 animate-pulse floating-element"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-5 animate-pulse animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-5xl font-bold mb-6 text-center neon-border p-2 rounded-xl inline-block">Software Development Services</h1>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          Professional software development services for custom applications, mobile solutions, and enterprise systems
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <GlassCard key={index} className="flex flex-col group hover:scale-[1.02] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-3">
                  <h3 className="text-2xl font-bold text-primary group-hover:text-blue-400 transition-colors">{service.title}</h3>
                  <div className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <p className="text-gray-400 mb-4 flex-grow group-hover:text-gray-300 transition-colors">{service.description}</p>
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="text-sm flex items-start">
                      <span className="text-accent mr-2 mt-1">✓</span>
                      <span className="group-hover:text-gray-200 transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tech.map((tech, idx) => (
                    <span key={idx} className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded border border-blue-700/30">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="/contact" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-3 rounded-lg text-center hover:from-blue-600 hover:to-purple-700 transition-all block transform hover:scale-105 shadow-lg">
                  Discuss Project
                </a>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  )
}
