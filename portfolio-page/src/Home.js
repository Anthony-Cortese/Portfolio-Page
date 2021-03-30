import React from 'react'
import './Home.css'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {MdKeyboardArrowLeft} from 'react-icons/md'

function Home() {
    return (
        <div className='home-div'>
            <div className='designer-info'>
                <h1 className='des'>designer</h1>
                <p>UI/UX designer with a passion for designing beautiful and functional user experiences</p>
            </div>

            <div className='image-div'>
                <img className='tony' src="https://i.ibb.co/tZwGsww/newimg3-copy.png" alt="newimg3-copy" border="0" /> 
            </div>

            <div className='coder-info'>
                <h1 className='code'><MdKeyboardArrowLeft /> coder <MdKeyboardArrowRight /> </h1>
                <p>Front-End Developer who focuses on writing clean, elegant, and efficient</p>
            </div>
            
        </div>
    )
}

export default Home
