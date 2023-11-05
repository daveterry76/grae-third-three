import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({ name, setName, track, setTrack }) => {

    const navigate = useNavigate();


    const handleLogin = () => {
        if (name !== '' && track !== '') {
            localStorage.setItem('name', name);
            localStorage.setItem('track', track);
            navigate('/dashboard');
        } else return null
    }



  return (
    <>
        <div>
            <h2>This is the Login Page:</h2>

            <label>Name:</label> <br />
            <input className='border' value={name} onChange={(e) => setName(e.target.value)} /> <br />
            <label>Track:</label> <br />
            <input className='border' value={track} onChange={(e) => setTrack(e.target.value)} /> <br />

            <button className='border' onClick={handleLogin}>LOGIN</button>
        </div>
    </>
  )
}

export default Login