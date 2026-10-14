import { Link } from 'react-router-dom'

const BlogCard = ({ post }) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[#292929] bg-[#141414] transition-all duration-300 hover:-translate-y-1 hover:border-[#555]">

      {/* Cover Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={post.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Meta */}
        <div className="mb-3 flex items-center gap-2 text-xs text-gray-500">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold leading-snug tracking-tight text-white transition-colors group-hover:text-orange-200">
          {post.title}
        </h2>

        {/* Description */}
        <p className="mt-3 text-sm leading-6 text-gray-400">
          {post.description}
        </p>

        {/* Author and Read More */}
        <div className="mt-6 flex items-center justify-between border-t border-[#292929] pt-4">

          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80"
              alt="Author"
              className="h-9 w-9 rounded-full object-cover"
            />

            <div>
              <p className="text-sm font-medium text-gray-200">IdeasRoom team</p>
              <p className="text-xs text-gray-500">Author</p>
            </div>
          </div>

          <Link
            to="/blog"
            className="text-sm font-medium text-orange-200 transition-colors hover:text-orange-100"
          >
            Read more ↗
          </Link>

        </div>
      </div>
    </article>
  )
}

export default BlogCard