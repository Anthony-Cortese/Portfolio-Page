import React from 'react'
import './Home.css'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {MdKeyboardArrowLeft} from 'react-icons/md'

function Home() {
    return (
        <div className='home-div'>

            
            <div className='designer-info'>
            <h1 className='code' data-text='coder'><span className='arr'><MdKeyboardArrowLeft className='arr' /></span> coder <MdKeyboardArrowRight className='arr' /> </h1>
                <p>Front-End Developer who focuses on writing clean, elegant, and efficient code</p>
            </div>

            
        <div className='top-box'>
        <div className='name-div'>
                    <h1 className='name'><MdKeyboardArrowLeft className='arrow' /><span className='tag'>h1</span> <span className='class'>className=</span><span className='bronze'>"name"</span><MdKeyboardArrowRight className='arrow' /><span className='my-name'>Anthony Cortese</span> <MdKeyboardArrowLeft className='arrow' /><span className='tag'><span className='slash'>/</span>h1</span> <MdKeyboardArrowRight className='arrow'  /></h1>
                    <h2 className='para'><MdKeyboardArrowLeft className='arrow' /><span className='tag'>h2</span> <MdKeyboardArrowRight className='arrow' /><br/> <span className='my-name'>Front-End Web Developer </span><MdKeyboardArrowLeft className='arrow' /><span className='tag'><span className='slash'>/</span>h2</span> <MdKeyboardArrowRight className='arrow'  /></h2>
                </div> 
            
            <div className='image-div'>
                    <h3 className='img-tag'><MdKeyboardArrowLeft className='arrow' /><span className='tag'>img</span> <span className='class'>src=</span><span className='bronze'>"https://anthony-cortese.img"</span> <span className='class'>alt=</span><span className='bronze'>"akc"</span><span className='slash'>/</span> <MdKeyboardArrowRight className='arrow'  /></h3>
                    
                    <div className='card'>
                        <div className='box'>
                            <div className='img-box'>
                    
                
            
                                <img className='tony' src="https://i.ibb.co/qjTtC6D/Portfolio.png" alt="Portfolio" border="0"/>

                            </div>
                            <div className='contentBox'>
                                <div>
                                <h1 className='code1'><MdKeyboardArrowLeft /> coder <MdKeyboardArrowRight /> </h1> 
                <h1 className='des1' data-text='designer1'>designer</h1>
                                    {/* <h2 className='ternary'>Anthony Cortese ? Coder : Designer</h2> */}
                                    
                                </div>
                            </div>

                        
                        </div>

                    </div>
                {/* <img className='tony' src="https://i.ibb.co/qjTtC6D/Portfolio.png" alt="Portfolio" border="0"/>  */}
            </div>
        </div>
        

            <div className='coder-info'>
                
                <h1 className ='designer'data-text='designer'>designer</h1>
                <p>A Front-End designer with a passion for designing beautiful and functional user experiences</p>
            </div>
            
        </div>
    )
}

export default Home
