import React from 'react'
import contact from '../css_style/contact.module.css'
import Link from 'next/link'
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";




const Contact = () => {
  return (
    <div className={contact.dev}>
        <h1 className={contact.h1}>Contact Me</h1>
          
         

         
         <ul className={contact.ul}>
            <li><Link href="https://www.linkedin.com/in/ayesha-iqbal-2613402b4/"><CiLinkedin className='size-10'/>
            </Link></li>

            <li><Link href="https://github.com/Ayesha1130"><FaGithubSquare className='size-10'/>
            </Link></li>

            <li><Link href="ayeshaiqbal771@gmail.com"></Link><MdEmail className='size-10'/>
            </li>
         </ul>

         
 

        
        <p className={contact.pera}>For any inquiries or questions, feel free to reach out.</p>
       
  
      
    </div>
  )
}

export default Contact
