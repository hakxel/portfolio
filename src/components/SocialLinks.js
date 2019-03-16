import React from 'react'
import linkedin from '../images/icons-linkedin.svg'
import twitter from '../images/icons-twitter.svg'
import github from '../images/icons-github.svg'

let SocialLinks = () => {
  return (
    <aside class="hero-left">
      <a href="https://www.linkedin.com/in/asiel-montes-27b95612a/" target="_blank" rel="noopener noreferrer"><img id="linkedin-icon" src={linkedin} alt="Linkedin icon" /></a>
      <a href="https://twitter.com/Hakxell" target="_blank" rel="noopener noreferrer"><img id="twitter-icon" src={twitter} alt="Twitter icon" /></a>
      <a href="https://github.com/Hakxel" target="_blank" rel="noopener noreferrer"><img id="github-icon" src={github} alt="Github icon" /></a>
    </aside>
  )
}

export default SocialLinks