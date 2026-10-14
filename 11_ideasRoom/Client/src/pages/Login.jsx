import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage('')
    setIsSubmitting(true)

    fetch('/auth/v1/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(async (response) => {
        const data = await response.json().catch(() => ({}))
        if (!response.ok) {
          throw new Error(data.message || 'Unable to log in. Please try again.')
        }
        sessionStorage.setItem('ideasroom_token', data.token)
        setMessage('Login successful.')
      })
      .catch((error) => {
        setMessage(error.message)
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D0D0D] px-4 py-10 text-white">
      <div className="w-full max-w-md rounded-3xl border border-[#292929] bg-[#141414] p-8 shadow-2xl sm:p-10">

        {/* Logo */}
        <div className="mb-8 text-center">
          <Link to="/" className="text-3xl font-bold tracking-tight">
            IdeasRoom<span className="text-[#FFB88C]">.</span>
          </Link>

          <h1 className="mt-6 text-2xl font-semibold">
            Welcome back!
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Log in to continue exploring new ideas.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
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

          {/* Password */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label htmlFor="password" className="text-sm text-gray-300">
                Password
              </label>

              <a
                href="/forgot-password"
                className="text-xs text-[#FFB88C] hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-[#333] bg-[#1E1E1E] px-4 py-3 text-sm outline-none transition placeholder:text-gray-500 focus:border-[#FFB88C]"
            />
          </div>

          {/* Remember Me */}
          <label className="flex items-center gap-2 text-sm text-gray-400">
            <input
              type="checkbox"
              className="accent-[#FFB88C]"
            />
            Remember me
          </label>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-[#FFB88C] py-3 font-semibold text-black transition hover:bg-[#FFA875] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? 'Logging in...' : 'Login to your account'}
          </button>

          {message && (
            <p className="text-center text-sm text-[#FFB88C]" role="status">
              {message}
            </p>
          )}

        </form>

        {/* Signup Link */}
        <p className="mt-7 text-center text-sm text-gray-400">
          Don't have an account?{' '}
          <Link
            to="/signup"
            className="font-medium text-[#FFB88C] hover:underline"
          >
            Sign up
          </Link>
        </p>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <Link
            to="/"
            className="text-xs text-gray-500 transition hover:text-white"
          >
            ← Back to Home
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Login