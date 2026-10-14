import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="h-16 site-nav" aria-label="Primary navigation">
      <Link className="site-brand" to="/" aria-label="IdeasRoom home">
        IdeasRoom
      </Link>

      <div className="site-nav__links">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blog">Blog</Link>
        <button className="search-button" type="button" aria-label="Search">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
            <circle cx="10.8" cy="10.8" r="6.8" />
            <path d="m16 16 5 5" />
          </svg>
        </button>
        <Link className="bg-[#dd8a6b] hover:bg-[#c3724d] text-black py-2 px-4 rounded-md" to="/login" >
          Login
        </Link>
      </div>
    </nav>
  )
}

export default Navbar