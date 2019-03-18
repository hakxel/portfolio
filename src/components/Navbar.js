import React from 'react'

let Navbar = () => {
  return (
    <header id="header">
      <nav class="nav-wrapper">
        <div class="nav-items">
          <ul class="nav nav-pills">
            <li class="active"><a href="#top">Home</a></li>
            <li class=""><a href="#profile">Projects</a></li>
            <li class=""><a href="#bio">Bio</a></li>
          </ul>
        </div>
      </nav>         
    </header>
  )
}

export default Navbar