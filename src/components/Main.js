import React from 'react'
import Navbar from './Navbar'
import SocialLinks from './SocialLinks'



let Main = () => {
  return (
    <section id="hero">
      <Navbar />
      <div class="hero-body">
        <SocialLinks />
        <div class="hero-wrapper">
          <h1>Asiel Montes</h1>
          <h2>Web developer</h2>
        </div>
        {/* <div class="hero-right"></div> */}
      </div>
    </section>
  )
}

export default Main