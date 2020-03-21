import React from 'react'
import linkedin from '../images/icons-linkedin.svg'
import twitter from '../images/icons-twitter.svg'
import github from '../images/icons-github.svg'

let SocialLinks = () => {
  return (
    <aside className="hero-left">
      <div className="icon-wrapper">
        <a href="https://www.linkedin.com/in/asiel-montes/" target="_blank" rel="noopener noreferrer"><img className="linkedin icon" src={linkedin} alt="Linkedin icon" /></a>
      </div>
      <div className="icon-wrapper">
        <a href="https://github.com/Hakxel" target="_blank" rel="noopener noreferrer"><img className="github icon" src={github} alt="Github icon" /></a>
      </div>
    </aside>
  )
}

export default SocialLinks