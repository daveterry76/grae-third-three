import React from 'react'
import { Link } from 'react-router-dom'

const NoPage = () => {
  return (
    <>
        <div className='text-center'>
            <h2 className='text-red-500 font-bold text-3xl mb-4'>404 Page Not Found!</h2>

            <p>Please, go to <Link to='/' className='underline'>Home</Link></p>
        </div>
    </>
  )
}

export default NoPage



