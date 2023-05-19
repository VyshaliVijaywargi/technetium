import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <>
    <div className="first-nav">
    </div>
      <div className="main-Nav">
        <ul>
            <li className="icons">
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Projects</a>
            </li>
            <li>
                <a href="#">Videos</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        
        </ul>
        
      </div>
      <div className="last-nav">
      <button>Login</button>
      </div>
    </>
  )
}

export default Navbar
