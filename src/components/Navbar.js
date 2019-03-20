import React from 'react'

let Navbar = () => {
  return (
    <header id="header">
      <nav className="nav-wrapper">
        <div className="nav-items">
          <ul className="nav nav-pills">
            <li className="active"><a href="#top">Home</a></li>
            <li className=""><a href="#bio">Bio</a></li>
            <li className=""><a href="#projects">Projects</a></li>
          </ul>
        </div>
      </nav>         
    </header>
  )
}

export default Navbar