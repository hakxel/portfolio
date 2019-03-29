import React from 'react'
import Main from './Main'
import Transition1 from './Transition1'
import Bio from './Bio'
import Projects from './Projects'
import Transition2 from './Transition2'
import Contact from './Contact'
import Footer from './Footer'


let Home = () => {
  return (
    <main>
      <article className="container-fluid">
        <Main />
        <Transition1 />
        <Projects />
        <Bio />
        <Transition2 />
        <Contact />
      </article>
      <Footer />
    </main>
  )
}

export default Home