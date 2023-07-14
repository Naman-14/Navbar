import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <>
        <nav className='container'>
        <div className='content'>
            <p><Link className="nav-link" to="/Nick1">Home</Link></p>
            <p><Link className="nav-link" to="/Nick2">Contact</Link></p>      
            <p><Link className="nav-link" to="/Nick3">Details</Link></p>
        </div>
        </nav>
    </>
  )
}

export default Navbar