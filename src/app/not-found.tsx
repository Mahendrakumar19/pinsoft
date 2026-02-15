'use client'

import Link from 'next/link'
import { ArrowLeft, Home, Search, MessageCircle } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* 404 Number */}
        <div className="text-9xl font-bold text-white mb-6 relative">
          <span className="relative z-10">404</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 blur-3xl"></div>
        </div>

        {/* Message */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-8">
          <div className="glass rounded-lg p-4 flex items-center">
            <Search className="text-gray-400 mr-3" size={20} />
            <input
              type="text"
              placeholder="Search our site..."
              className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="glass-blue px-8 py-4 rounded-lg font-semibold text-white hover:bg-opacity-80 transition-all flex items-center justify-center space-x-2"
          >
            <Home size={20} />
            <span>Back to Home</span>
          </Link>
          
          <Link
            href="/contact"
            className="glass px-8 py-4 rounded-lg font-semibold text-white hover:bg-white/20 transition-all flex items-center justify-center space-x-2"
          >
            <ArrowLeft size={20} />
            <span>Contact Us</span>
          </Link>
          
          <a
            href="https://wa.me/917905069943"
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-8 py-4 rounded-lg font-semibold text-white hover:bg-white/20 transition-all flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600"
          >
            <MessageCircle size={20} />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Help Links */}
        <div className="mt-12">
          <p className="text-gray-400 mb-4">Popular pages:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/solutions" className="text-blue-400 hover:text-blue-300 transition-colors">
              Solutions
            </Link>
            <Link href="/products" className="text-blue-400 hover:text-blue-300 transition-colors">
              Products
            </Link>
            <Link href="/projects" className="text-blue-400 hover:text-blue-300 transition-colors">
              Projects
            </Link>
            <Link href="/about" className="text-blue-400 hover:text-blue-300 transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}