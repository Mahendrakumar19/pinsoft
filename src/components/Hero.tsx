export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Software & Application <br />
          <span className="text-primary">Development</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Custom software solutions, mobile applications, and enterprise systems 
          designed to solve your business challenges. From concept to deployment, 
          we build scalable applications that drive growth.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="/contact" className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
            Start Your Project
          </a>
          <a href="tel:+917905069943" className="glass-blue px-8 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition">
            Call Now: +91 7905069943
          </a>
        </div>
        <div className="mt-6 text-gray-500 text-sm">
          <p>📧 Email: mahendra.mk174@gmail.com</p>
        </div>
      </div>
    </section>
  )
}
