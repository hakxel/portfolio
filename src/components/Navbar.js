import React from 'react'
import logo from '../images/logo-img.jpg'

let Navbar = () => {
  return (
    <header id="header">
      <nav class="nav-wrapper">
        <div class="nav-logo"><a href="/">
          <img id="logo-img" src={logo} alt="Asiel" /></a>
        </div>
        <div class="nav-items">
          <ul class="nav nav-pills">
            <li class="active"><a href="#top">Home</a></li>
            <li class=""><a href="#profile">Projects</a></li>
            <li class=""><a href="#bio">Bio</a></li>
          </ul>
        </div>
        <div class="nav-checkbox">
          <p>Music?</p>
          <label class="switch">
            <input type="checkbox"/>
              <span class="slider round"></span>
          </label>
        </div>
      </nav>         
    </header>
  )
}

export default Navbar