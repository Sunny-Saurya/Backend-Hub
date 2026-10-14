import React from 'react'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className="mt-40 bg-[#0D0D0D] text-white px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10 pb-10 border-b border-[#2A2A2A]">

          {/* Brand */}
          <div className="max-w-sm">
            <h2 className="text-3xl font-bold tracking-tight">
              IdeasRoom<span className="text-orange-300">.</span>
            </h2>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Stories, thoughts and reflections about design,
              development, creativity, and everything in between.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/" className="hover:text-orange-300 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-orange-300 transition-colors">About</a></li>
              <li><a href="/blog" className="hover:text-orange-300 transition-colors">Blog</a></li>
              <li><a href="/contact" className="hover:text-orange-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer"
                  className="hover:text-orange-300 transition-colors">
                  GitHub ↗
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                  className="hover:text-orange-300 transition-colors">
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href="mailto:hello@ideasroom.com"
                  className="hover:text-orange-300 transition-colors">
                  Email ↗
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 text-sm text-gray-500">
          <p>© {currentYear} IdeasRoom. All rights reserved.</p>
          <p>Made with curiosity and a little bit of coffee ☕</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer