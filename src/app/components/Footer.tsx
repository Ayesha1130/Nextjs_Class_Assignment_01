import foot from '../css_style/foot.module.css'
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className={foot.foottag}>
      <h2 className={foot.h1}>Create By GIAIC Student Ayesha Iqbal</h2>
  
      <p>�� 2023 NextJS Class Assignment 01. All rights reserved.</p>

      <ul className={foot.ul}>
            <li><Link href="https://www.linkedin.com/in/ayesha-iqbal-2613402b4/"><CiLinkedin className='size-10'/>
            </Link></li>

            <li><Link href="https://github.com/Ayesha1130"><FaGithubSquare className='size-10'/>
            </Link></li>

            <li><Link href="ayeshaiqbal771@gmail.com"></Link><MdEmail className='size-10'/>
            </li>
         </ul>
    </footer>
  );
};

export default Footer;
