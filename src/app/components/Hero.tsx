import React from 'react'
import hero from '../css_style/hero.module.css'
import Link from 'next/link'


const Hero = () => {
  return (
    <main>
        <h1 className={hero.h1tag}><span style={{color:'#D5006D',}}>Hey ! Ayesha Iqbal Here </span> <br /> I`m Front end Developer`  </h1>
        <p className={hero.peratag}>I'm a passionate and dedicated front-end developer with a keen eye for design. I am always eager to learn and grow as a developer.</p>
        <div className={hero.btntag}>
            <Link href="/contact">Contact Me</Link>
        </div>
        <div className={hero.imgtag}>
            <img src="/images/dol.avif" alt="Work" className={hero.img}/>
        </div>

    </main>
  )
}

export default Hero
