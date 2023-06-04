import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
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
  React.useEffect(() => {
    Aos.init({
      duration: 1500,
      delay: 300,
    })
  }, [])
  return (
    <div>
      <div className="s:hidden">
        <ScrollToTop />
      </div>
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
