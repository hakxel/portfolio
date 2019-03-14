import React from 'react'
import SocialLinks from './SocialLinks'



let Main = () => {
  return (
    <div>
      <section id="hero">
        <SocialLinks />
        <div class="hero-wrapper">
          <div id="intro-phrase">
            <h4>“Un homme est toujours la proie de ses vérités. Une fois reconnues, il ne saurait s'en détacher.” -A. Camus</h4></div>
          <h1>Asiel Montes</h1>
          <h2>Web developer</h2>
        </div>
        <div class="hero-right"></div>
      </section>
    </div>
  )
}

export default Main