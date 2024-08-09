import React from 'react'
import {Link} from 'react-router-dom'
import './App.css'

const Navbar = () => {
  return (
    <div>
        <ul>
            <Link to='/home'><li>HOME</li></Link>
            <Link to='/location'><li>LOCATION</li></Link>
            <Link to='/ceo'><li>CEO</li></Link>
            <Link to='/hr'><li>HR</li></Link>
        </ul>
    </div>
  )
}

export default Navbar