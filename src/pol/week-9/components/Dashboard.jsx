import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const navigate = useNavigate()

    const name = localStorage.getItem('name');
    const track = localStorage.getItem('track');

    if (name === '' && track === '') {
        navigate('/');
    }
    
  return (
    <>
        <div class="flex font-mono flex-col items-center justify-center h-screen">
          <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
            <h2 class="text-3xl font-bold text-center mb-6 text-blue-600">Dashboard</h2>
            <h3 class="text-xl text-center text-gray-700">Hello, <span className='font-bold'>{name}</span>!</h3>
            <h3 class="text-xl text-center text-gray-700">We're happy that you're part of the <span className='font-bold'>{track}</span> track on graeseed! 😁</h3>
            <p class="text-center mt-8">
              You can always go back to the
              <Link to="/" class="text-blue-500 underline hover:text-blue-700 ml-1">Login</Link> page.
            </p>
          </div>
        </div>

    </>
  )
}

export default Dashboard