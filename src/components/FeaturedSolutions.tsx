import GlassCard from './GlassCard'

export default function FeaturedSolutions() {
  const solutions = [
    { title: 'Custom Software Development', description: 'Tailored applications for your business needs', icon: '💻' },
    { title: 'Mobile App Development', description: 'iOS and Android applications with modern UX', icon: '📱' },
    { title: 'Web Application Development', description: 'Responsive web solutions for any platform', icon: '🌐' },
    { title: 'Enterprise Systems', description: 'Scalable solutions for complex business requirements', icon: '🏢' },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Software Development Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <GlassCard key={index} className="hover:scale-105 transition-transform will-change-transform">
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </GlassCard>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Ready to discuss your project?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:mahendra.mk174@gmail.com" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
              Email: mahendra.mk174@gmail.com
            </a>
            <a href="tel:+917905069943" className="glass-blue px-6 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition">
              Call: +91 7905069943
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
