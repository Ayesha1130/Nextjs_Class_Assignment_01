import React from 'react'
import service from '../css_style/service.module.css'
import Link from 'next/link'

const Services = () => {
  return (
    <div className={service.div}>
        <h1 className={service.h1}>Services</h1>
        <img src="/images/dol.avif"  className={service.img}/>
        <div className={service.dev}>
      <h2 className={service.h2}>Web Design</h2>
      <p className={service.p}>Web design services include creating engaging and user-friendly websites.
        We offer various web design options, including the ability to create new sites 
        from scratch, or customize existing websites to meet your specific needs.
      

      </p>
      <Link href={'/services/webdesign'} className='bg-rose-300 rounded-md p-4 font-bold '>Click Here</Link>
      
    </div>
    </div>
  )
}

export default Services
