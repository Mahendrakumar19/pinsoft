import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="glass mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex justify-center mb-4">
              <div className="relative w-20 h-20">
                <Image 
                  src="/images/pinsoft-logo.png" 
                  alt="PinSoft Logo" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-gray-600 text-center">Enterprise software development for complex organisational challenges.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="/solutions">Enterprise Solutions</Link></li>
              <li><Link href="/solutions">Business Automation</Link></li>
              <li><Link href="/solutions">Digital Transformation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/projects">Case Studies</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <p className="text-gray-600 mb-2">mahendra.mk174@gmail.com</p>
            <a href="https://wa.me/917905069943" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-400 transition-colors inline-block">WhatsApp: +91 7905069943</a>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>© 2026 PinSoft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
