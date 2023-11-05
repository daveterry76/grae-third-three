import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <>
        <h1 className='font-bold text-3xl mb-3'>SERVICES</h1>
        <p className='italic text-xl mb-3'>This is the Services Page. 😀</p>

        Go to:
        <div className='flex gap-3 underline'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/clients'>Clients</Link>
          <Link to='/services'>Services</Link>
          <Link to='/contact'>Contact</Link>
        </div> 
    </>  )
}

export default Services