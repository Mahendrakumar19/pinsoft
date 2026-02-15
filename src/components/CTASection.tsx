export default function CTASection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto glass-blue rounded-3xl p-12 text-center will-change-transform">
        <h2 className="text-4xl font-bold mb-4">Ready to Build Your Software Solution?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Custom software development, mobile applications, and enterprise systems 
          designed to solve your business challenges and drive growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a href="/contact" className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition inline-block">
            Start Your Project
          </a>
          <a href="tel:+917905069943" className="glass px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition inline-block">
            Call Now: +91 7905069943
          </a>
        </div>
        <div className="text-gray-300 text-sm">
          <p>📧 Email: <a href="mailto:mahendra.mk174@gmail.com" className="hover:text-white transition">mahendra.mk174@gmail.com</a></p>
        </div>
      </div>
    </section>
  )
}
