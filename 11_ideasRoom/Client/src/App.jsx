
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

function AppLayout() {
  const location = useLocation()
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup"

  return (
    <>
      {!isAuthPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}

export default App
