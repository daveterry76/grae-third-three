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
        <div>
            <h3>Hello {name}!</h3>
            <h3>This is your dashboard as a part of the {track} track! 😁</h3>

            <p>You can always go back to the <Link to='/' className='underline'>Login</Link> page.</p>
        </div>
    </>
  )
}

export default Dashboard