import React from 'react'
import Navbar from './Navbar'
import Main from './Main'
import Projects from './Projects'
import Resume from './Resume'
import Contact from './Contact'
import Footer from './Footer'


let Home = () => {
  return (
    <div>
      <Navbar />
      <article class="container-fluid">
        <Main />
        <Projects />
        <Resume />
        <Contact />

      </article>
      <Footer />
    </div>
  )
}

export default Home