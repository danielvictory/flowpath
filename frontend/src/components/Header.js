import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="nav">
        <Link to="/">
            <div className="logo">
                flowpath
            </div>
        </Link>            
        <div className="links">
            <Link to="/flows">Flows</Link>
            <Link to="/asanas">Asanas</Link>
        </div>

    </nav>
  )
}

export default Header