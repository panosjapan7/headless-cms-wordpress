import React from 'react'
import "../styles/Navbar.css"

function NavBar() {
  return (
        <div className="navbar">
            <div className="nav-wrapper">
              <div className="logo">
                  <a href="/"><i className="fa fa-angellist"></i>WEBB21</a>
              </div>
              <div id="menu">
                  <a href="/">Home</a>
                  <a href="/about">About</a>
              </div>
          </div>
      </div>
  )
}

export default NavBar;