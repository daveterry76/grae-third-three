import React from 'react'
import { useState } from 'react'


import Cookies from 'js-cookie';

const DavidFirstPage = () => {
    const [name, setName] = useState('');
    const [hobbies, setHobbies] = useState('')

    const handleSubmit = () => {
        Cookies.set("name", name);
        Cookies.set("hobbies", hobbies);
    }

  return (
    <>
        <div>
            <label>Name:</label><br />
            <input value={name} onChange={(e) => setName(e.target.value)}></input>
            <label>Hobbies:</label><br />
            <input value={hobbies} onChange={(e) => setHobbies(e.target.value)}></input>
            <button onClick={handleSubmit}>SUBMIT</button>
        </div>
    </>
  )
}

export default DavidFirstPage







