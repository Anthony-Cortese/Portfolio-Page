import React from 'react'
import './NavBar.css'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <div className='main-nav'>
          <nav className='spinner1'><img className='spinner' src="https://i.ibb.co/HpDh4Qj/kisspng-north-south-arah-hotel-location-inception-clip-free-download-on-new-vitruvian-5d18448e24cf02.png" alt="spinner" border="0"/></nav> 
  

          <div className='nav-links'>
          <Link to='/'><nav>home</nav></Link>
            <Link to='/AboutMe'><nav>about me</nav></Link>
              <Link to='/Projects'><nav>projects</nav></Link> 
            {/* <Link to='/Contact'><nav>contact</nav></Link> */}
            <nav>resume</nav>
            <a href="https://www.linkedin.com/in/anthony-cortese/"> <AiFillLinkedin className='icons'/></a>
            <a href="https://github.com/Anthony-Cortese"><AiFillGithub className='icons' /> </a>
          </div>

            <div className='nav-icons'>
                
            </div>      
        </div>
    )
}

export default NavBar
