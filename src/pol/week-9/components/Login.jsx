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
      <div className="w-full max-w-xs mx-auto mt-10">
        <h2 className="text-2xl text-center font-semibold">Login Page</h2>
        <div className="mt-4">
          <label className="block text-sm">Name:</label>
          <input
            className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm">Track:</label>
          <input
            className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            value={track}
            onChange={(e) => setTrack(e.target.value)}
          />
        </div>
        <button
          className="w-full py-2 mt-6 font-semibold text-white bg-blue-500 rounded-lg focus:outline-none hover:bg-blue-600"
          onClick={handleLogin}
        >
          LOGIN
        </button>
      </div>
    </>
  );
}

export default Login