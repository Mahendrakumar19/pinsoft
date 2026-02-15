import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="glass mt-20 relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-10 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-10 animate-pulse animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4 gradient-text">PinSoft</h3>
            <p className="text-gray-400">Enterprise software development for complex organisational challenges.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Solutions</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/solutions" className="hover:text-primary transition-colors">Enterprise Solutions</Link></li>
              <li><Link href="/solutions" className="hover:text-primary transition-colors">Business Automation</Link></li>
              <li><Link href="/solutions" className="hover:text-primary transition-colors">Digital Transformation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/projects" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Connect</h4>
            <p className="text-gray-400 mb-2">mahendra.mk174@gmail.com</p>
            <a href="https://wa.me/917905069943" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors inline-block flex items-center">
              <span className="mr-2">💬</span> WhatsApp: +91 7905069943
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500">
          <p>© 2024 PinSoft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
