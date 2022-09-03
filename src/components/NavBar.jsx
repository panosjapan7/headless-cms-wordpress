import React from 'react'
import "../styles/Navbar.css"

function NavBar() {
  return (
        <div className="navbar">
            <div className="nav-wrapper">
              <div className="logo">
                  <a href="/"><i className="fa fa-angellist"></i>WEBB21</a>
              </div>
              <ul id="menu">
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
              </ul>
          </div>
      </div>
  )
}

export default NavBar;