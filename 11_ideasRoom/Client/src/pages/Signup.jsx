import React, { useState } from 'react'

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!')
      return
    }

    console.log('Signup data:', formData)
    // Connect your signup API here
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D0D0D] px-4 py-10 text-white">
      <div className="w-full max-w-md rounded-3xl border border-[#292929] bg-[#141414] p-8 shadow-2xl sm:p-10">

        {/* Logo */}
        <div className="mb-8 text-center">
          <a href="/" className="text-3xl font-bold tracking-tight">
            IdeasRoom<span className="text-[#FFB88C]">.</span>
          </a>

          <h1 className="mt-6 text-2xl font-semibold">
            Create your account
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Join IdeasRoom and share your ideas with the world.
          </p>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-gray-300">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-[#333] bg-[#1E1E1E] px-4 py-3 text-sm outline-none transition placeholder:text-gray-500 focus:border-[#FFB88C]"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-gray-300">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-[#333] bg-[#1E1E1E] px-4 py-3 text-sm outline-none transition placeholder:text-gray-500 focus:border-[#FFB88C]"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm text-gray-300">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Create a password"
              autoComplete="new-password"
              minLength={8}
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-[#333] bg-[#1E1E1E] px-4 py-3 text-sm outline-none transition placeholder:text-gray-500 focus:border-[#FFB88C]"
            />
            <p className="mt-2 text-xs text-gray-500">
              Use at least 8 characters.
            </p>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="mb-2 block text-sm text-gray-300">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              autoComplete="new-password"
              minLength={8}
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-[#333] bg-[#1E1E1E] px-4 py-3 text-sm outline-none transition placeholder:text-gray-500 focus:border-[#FFB88C]"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-[#FFB88C] py-3 font-semibold text-black transition hover:bg-[#FFA875] active:scale-[0.99]"
          >
            Create Account
          </button>

        </form>

        {/* Login Link */}
        <p className="mt-7 text-center text-sm text-gray-400">
          Already have an account?{' '}
          <a href="/login" className="font-medium text-[#FFB88C] hover:underline">
            Login
          </a>
        </p>

        <div className="mt-6 text-center">
          <a href="/" className="text-xs text-gray-500 transition hover:text-white">
            ← Back to Home
          </a>
        </div>

      </div>
    </div>
  )
}

export default Signup