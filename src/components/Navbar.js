import React from 'react'
import { Link } from "react-router-dom";
import "../styles/Navbar.css"
function Navbar() {
  return (
    <div className="navbar">
        <div className="togglebutton">
            <button>portfolio</button>
        </div>
        <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Experiences">Experiences</Link>
        </div>
    </div>
  )
}

export default Navbar;