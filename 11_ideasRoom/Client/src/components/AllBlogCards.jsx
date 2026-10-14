import { Link } from 'react-router-dom'
import BlogCard from './BlogCard'

const AllBlogCards = () => {
  const posts = [
    {
      category: 'Design',
      date: 'Oct 12, 2026',
      readTime: '6 min read',
      title: 'The evolution of design thinking: insights and perspectives',
      description: 'How design thinking is evolving and reshaping creativity, problem-solving, and digital experiences.',
      image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=900&q=80',
    },
    {
      category: 'Development',
      date: 'Oct 08, 2026',
      readTime: '8 min read',
      title: 'Building products that stay simple as they grow',
      description: 'A practical look at making thoughtful technical decisions without losing momentum.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80',
    },
    {
      category: 'Creativity',
      date: 'Sep 29, 2026',
      readTime: '5 min read',
      title: 'Making room for better ideas',
      description: 'Small habits that help turn scattered thoughts into useful creative work.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80',
    },
  ]

  return (
    <section className="mx-auto mt-20 max-w-7xl px-6 pb-10 sm:mt-28">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-[#FFB88C]">From the journal</p>
          <h2 className="mt-2 font-serif text-3xl text-white sm:text-4xl">Recent ideas</h2>
        </div>
        <span className="hidden text-sm text-gray-500 sm:block">Read, think, make</span>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.title} post={post} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link className="inline-flex rounded-full border border-[#444] px-5 py-2.5 text-sm text-gray-300 transition hover:border-[#FFB88C] hover:text-[#FFB88C]" to="/blog">
          Explore all posts <span className="ml-2">→</span>
        </Link>
      </div>
    </section>
  )
}
export default AllBlogCards