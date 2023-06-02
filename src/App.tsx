import Header from './page/sections/Header'
import Home from './page/sections/Home'
import Universities from './page/sections/Universities'
import InfoMath from './page/sections/InfoMath'
import AprovMath from './page/sections/AprovMath'
import Plans from './page/sections/Plans'
import Testimonials from './page/sections/Testimonials'
import OurApp from './page/sections/OurApp'
import Footer from './page/sections/Footer'
import ScrollToTop from './page/components/ScrollToTop'

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Home />
      <Universities />
      <InfoMath />
      <AprovMath />
      <Plans />
      <Testimonials />
      <OurApp />
      <Footer />
    </div>
  )
}

export default App
