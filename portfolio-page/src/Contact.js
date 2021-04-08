import React from 'react'
import {FiPhoneCall} from 'react-icons/fi'
import {AiOutlineMail} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {MdKeyboardArrowLeft} from 'react-icons/md'
import './Contact.css'
function Contact() {
    return (
        <div className='contact-div'>
            <div className='header'>
            <h1 className='name1'><MdKeyboardArrowLeft className='arrow' /><span className='tag'>h1</span> <span className='class'>className=</span><span className='bronze'>"contact-page"</span><MdKeyboardArrowRight className='arrow' /><span className='my-name'>Contact</span> <MdKeyboardArrowLeft className='arrow' /><span className='tag'><span className='slash'>/</span>h1</span> <MdKeyboardArrowRight className='arrow'  /></h1>
            </div>
            
            <div className='contact-icons'>
                <div className='con-icon'><FiPhoneCall className='icon' /> <p className='info'>801-472-7524</p></div>
                    {/* <p>801-472-7524</p> */}
                    <div className='con-icon'><AiOutlineMail className='icon' /><p className='info'>anthonykcortese@gmail.com</p></div>
                    <div className='con-icon'><AiFillLinkedin className='icon' /><p className='info'>Linked In</p></div>            
            </div>
            
            <div className='contact-form'>
                <form>
                <input className="form__field" type="text" name="query"
                  placeholder="YOUR NAME"
                  />
                <input className="form__field" type="text" name="query"
                  placeholder="YOUR EMAIL"
                  />
                 
                </form>

            </div>
            <div className='contact-input'>
                 <input className="form__field1" type="text" name="query"
                  placeholder="YOUR INPUT"
                  />
                 <button className='send'>SEND</button>  
            </div>      
            
        </div>
    )
}

export default Contact
