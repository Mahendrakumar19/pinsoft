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
    <div className="pt-24 px-4 pb-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-center">Software Development Services</h1>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Professional software development services for custom applications, mobile solutions, and enterprise systems
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <GlassCard key={index} className="flex flex-col">
              <h3 className="text-2xl font-bold mb-3 text-primary">{service.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
              <div className="space-y-2 mb-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="text-sm flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {service.tech.map((tech, idx) => (
                  <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <a href="/contact" className="bg-accent text-white px-4 py-2 rounded-lg text-center hover:bg-opacity-90 transition block">
                Discuss Project
              </a>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  )
}
