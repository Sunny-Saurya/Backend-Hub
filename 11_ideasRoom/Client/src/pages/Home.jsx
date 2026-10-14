import Heading from '../components/Heading'
import Subscribe from '../components/Subscribe'
import AllBlogCards from '../components/AllBlogCards'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="home-page">
      <main>
        <Heading />
        <Subscribe />
        <AllBlogCards />
      </main>
      <Footer />
    </div>
  )
}

export default Home