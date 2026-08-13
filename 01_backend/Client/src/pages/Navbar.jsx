import React from 'react'
import { Link } from 'react-router-dom'
import {useState} from 'react'
import { useAuth } from "../context/AuthContext";
const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = "/login"; 
  }
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/80 bg-black/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold tracking-tight text-white"
          >
            My<span className="text-zinc-400">App</span>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/dashboard"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Dashboard
            </Link>

            <Link
              to="/about"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Auth Buttons */}
          {
            isLoggedIn?(
               <button
              to="/logout"
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-medium text-zinc-300 bg-red-500 hover:text-white transition-colors">
              Logout
            </button>
            ):(
              <div className="flex items-center gap-3">
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 text-sm font-semibold bg-white text-black rounded-lg hover:bg-zinc-200 transition-all active:scale-95"
                >
                  Sign up
                </Link>
              </div>
            )
            
          }

        </div>
      </div>
    </nav>
  )
}

export default Navbar