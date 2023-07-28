import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    
  return (
    <nav className="Navbar">
      <img className='nav-logo' src="https://jdmgroupcompany.com/wp-content/uploads/2021/06/jdm-group-company-logo-1.png" alt="" />
      <div className={`nav-items ${isOpen && "open"}`}>
        
        <Link to='/' >employees</Link>
        <Link to='/computers' >computers</Link>
        <Link to='/accesories' >accesories</Link>
        <Link to='/aboutme' >about me</Link>
        <Link to='/projects' >projets</Link>
        
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </nav>
  )
}

export default Navbar