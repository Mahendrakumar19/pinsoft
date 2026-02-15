export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse floating-element"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="mb-4">
          <span className="inline-block px-4 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium mb-4 animate-pulse">
            Premium Software Solutions
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="block">Software & Application</span>
          <span className="hero-gradient bg-clip-text text-transparent block mt-2">Development</span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Custom software solutions, mobile applications, and enterprise systems 
          designed to solve your business challenges. From concept to deployment, 
          we build scalable applications that drive growth.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a href="/contact" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
            Start Your Project
          </a>
          <a href="tel:+917905069943" className="glass-blue px-8 py-4 rounded-xl font-semibold hover:bg-opacity-80 transition-all transform hover:scale-105 border border-white/20">
            Call Now: +91 7905069943
          </a>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <div className="flex items-center text-gray-400">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            <span>24/7 Support</span>
          </div>
          <div className="flex items-center text-gray-400">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
            <span>Hyderabad, India</span>
          </div>
          <div className="flex items-center text-gray-400">
            <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
            <span>Expert Team</span>
          </div>
        </div>
      </div>
    </section>
  )
}
