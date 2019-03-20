import React from 'react'
import Main from './Main'
import Projects from './Projects'
import Resume from './Resume'
import Contact from './Contact'
import Footer from './Footer'


let Home = () => {
  return (
    <main>
      <article class="container-fluid">
        <Main />
        <Resume />
        <Projects />
        <Contact />
      </article>
      <Footer />
    </main>
  )
}

export default Home