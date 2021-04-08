import React, {useState, useEffect} from 'react'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {MdKeyboardArrowLeft} from 'react-icons/md'
import {AiFillGithub} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import './Projects.css'


function Projects() {
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
      if (clicked) {
        window.location.assign('http://netflix.com')
      }
    })
    return (
        <div className='projects-div'>
            <div className='projects-name'>
                <h1 className='name'><MdKeyboardArrowLeft className='arrow' /><span className='tag'>h1</span> <span className='class'>className=</span><span className='bronze'>"projects-page"</span><MdKeyboardArrowRight className='arrow' /><span className='my-name'>Projects</span> <MdKeyboardArrowLeft className='arrow' /><span className='tag'><span className='slash'>/</span>h1</span> <MdKeyboardArrowRight className='arrow'  /></h1>
            </div>
        
            <ul id="categories" className="clr">
  <li className="pusher"></li>
	<li>
      <div className='first'>
      
    <img onClick={() => setClicked(true)}src="https://i.ibb.co/9Ywhg1s/MovieApp.jpg" alt="MovieApp" border="0"/>
        
        <h1>AKC Movie App</h1>
        <p>First project I built on my own. Used two different API's</p>
        
        
    </div>
  </li>
    <li>
      <div>
      <img src="https://i.ibb.co/rpDCsjw/unnamed.jpg" alt="unnamed" border="0"/>
        <h1>Netflix Clone</h1>
        <p>Some sample text about the article this hexagon leads to</p>
    </div>
  </li>
  <li>
      <div>
      <img src="https://i.ibb.co/9tnbV9v/IMDB.png" alt="IMDB" border="0"/>
        <h1>IMDB CLONE</h1>
        <p>Some sample text about the article this hexagon leads to</p>
    </div>
  </li>
  <li>
      <div>
      <img src="https://i.ibb.co/s2TX6jN/unnamed-1.png" alt="unnamed-1" border="0"/>
        <h1>InstaClone</h1>
        <p>Some sample text about the article this hexagon leads to</p>
    </div>
  </li>
  <li className="pusher"></li>
  <li>
      <div>
      <img src="https://i.ibb.co/SKV0p29/gray-background-7131-96d780fd18d4eaf58a7331d45573204e-1x.jpg" alt="gray-background-7131-96d780fd18d4eaf58a7331d45573204e-1x" border="0"/>
        <h1>This is a title</h1>
        <p>Some sample text about the article this hexagon leads to</p>
    </div>
  </li>
  
  <li>
      <div>
      <img src="https://i.ibb.co/SKV0p29/gray-background-7131-96d780fd18d4eaf58a7331d45573204e-1x.jpg" alt="gray-background-7131-96d780fd18d4eaf58a7331d45573204e-1x" border="0"/>
        <h1>This is a title</h1>
        <p>Some sample text about the article this hexagon leads to</p>
    </div>
  </li>
  <li className="pusher"></li>
  <li>
      <div>
      <img src="https://i.ibb.co/SKV0p29/gray-background-7131-96d780fd18d4eaf58a7331d45573204e-1x.jpg" alt="gray-background-7131-96d780fd18d4eaf58a7331d45573204e-1x" border="0"/>
        <h1>This is a title</h1>
        <p>Some sample text about the article this hexagon leads to</p>
    </div>
  </li>
  
</ul>
        </div>
    )
}

export default Projects
