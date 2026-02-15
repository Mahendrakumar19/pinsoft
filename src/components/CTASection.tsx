export default function CTASection() {
  return (
    <section className="py-20 px-4 relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse floating-element"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="glass rounded-3xl p-1 border border-white/20">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-12 text-center will-change-transform">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Ready to Build Your Software Solution?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Custom software development, mobile applications, and enterprise systems 
              designed to solve your business challenges and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a href="/contact" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl inline-block">
                Start Your Project
              </a>
              <a href="tel:+917905069943" className="glass px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all transform hover:scale-105 border border-white/20 inline-block">
                Call Now: +91 7905069943
              </a>
            </div>
            <div className="text-gray-400 text-sm flex items-center justify-center gap-2">
              <span>📧</span>
              <span>Email:</span>
              <a href="mailto:mahendra.mk174@gmail.com" className="hover:text-white transition text-accent">
                mahendra.mk174@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
