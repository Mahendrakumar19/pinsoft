import GlassCard from './GlassCard'

export default function FeaturedSolutions() {
  const solutions = [
    { title: 'Custom Software Development', description: 'Tailored applications for your business needs', icon: '💻' },
    { title: 'Mobile App Development', description: 'iOS and Android applications with modern UX', icon: '📱' },
    { title: 'Web Application Development', description: 'Responsive web solutions for any platform', icon: '🌐' },
    { title: 'Enterprise Systems', description: 'Scalable solutions for complex business requirements', icon: '🏢' },
  ]

  return (
    <section className="py-20 px-4 relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-10 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-10 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-10 animate-pulse animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 neon-border p-1 inline-block rounded-lg">Software Development Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <GlassCard key={index} className="group hover:scale-105 transition-all duration-300 will-change-transform relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">{solution.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{solution.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{solution.description}</p>
              </div>
            </GlassCard>
          ))}
        </div>
        <div className="text-center mt-16">
          <div className="inline-block p-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
            <div className="bg-gray-900 dark:bg-gray-800 rounded-lg px-8 py-6">
              <p className="text-xl text-gray-300 mb-6 font-medium">Ready to discuss your project?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:mahendra.mk174@gmail.com" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105">
                  Email: mahendra.mk174@gmail.com
                </a>
                <a href="tel:+917905069943" className="glass-blue px-6 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition-all transform hover:scale-105 border border-white/20">
                  Call: +91 7905069943
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
