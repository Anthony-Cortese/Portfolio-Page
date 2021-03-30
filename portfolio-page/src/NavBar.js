import React from 'react'
import './NavBar.css'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

function NavBar() {
    return (
        <div className='main-nav'>
          <div className='nav-img'>
            <img className='spinner' src="https://i.ibb.co/HpDh4Qj/kisspng-north-south-arah-hotel-location-inception-clip-free-download-on-new-vitruvian-5d18448e24cf02.png" alt="spinner" border="0"/>   
          </div>

          <div className='nav-links'>
            <nav>about me</nav>
            <nav>projects</nav>
            <nav>contact</nav>
            <nav>resume</nav>
          </div>

            <div className='nav-icons'>
                <a href="https://www.linkedin.com/in/anthony-cortese/"> <AiFillLinkedin className='icons'/></a>
                <a href="https://github.com/Anthony-Cortese"><AiFillGithub className='icons' /> </a>
            </div>      
        </div>
    )
}

export default NavBar
