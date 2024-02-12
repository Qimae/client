import React from 'react'
import Navigation from '../Navigation/Navigation'
import Header from '../Header/Header'
import Features from '../Features/Features'
import Faq from '../FAQ/Faq'
import Tutorial from '../Tutorial/Tutorial'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
        <Navigation />
        <Header />
        <Features />
        <Tutorial />
        <Faq />
        <Footer />
    </div>
  )
}

export default Home