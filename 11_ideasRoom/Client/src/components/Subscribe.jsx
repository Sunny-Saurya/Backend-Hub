import { useState } from 'react'

const Subscribe = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="mx-auto flex max-w-xl flex-col items-center gap-4 px-6">
      <form
        className="flex w-full items-center rounded-2xl border border-[#333333] bg-[#222222] p-1.5 shadow-lg"
        onSubmit={handleSubmit}
      >
        <label className="sr-only" htmlFor="newsletter-email">Email address</label>
        <input
          id="newsletter-email"
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value)
            setSubmitted(false)
          }}
          required
          className="min-w-0 flex-1 bg-transparent px-5 py-3 text-white placeholder-gray-400 outline-none"
        />
        <button
          type="submit"
          className="shrink-0 rounded-xl bg-[#FFB88C] px-5 py-3 font-medium text-black transition-colors hover:bg-[#FFA875] focus:outline-none focus:ring-2 focus:ring-[#FFB88C] focus:ring-offset-2 focus:ring-offset-[#222222]"
        >
          Subscribe
        </button>
      </form>
      <p className="text-center text-sm text-gray-500" role={submitted ? 'status' : undefined}>
        {submitted ? 'You are on the list. Thanks for subscribing!' : 'No spam, just certified good stuff.'}
      </p>
    </section>
  )
}

export default Subscribe