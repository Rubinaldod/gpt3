import React from 'react'
import logo from '../../assets/logo.svg'
import {Rimenu3Line, RiCloselin} from 'react-icons/ri'
import './navbar.css'

function Navbar() {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-link'>
        <div className='gpt3__navbar-links_logo'>
          <image src={logo} alt="Logo"/>
        </div>
      </div>
    </div>
  )
}

export default Navbar