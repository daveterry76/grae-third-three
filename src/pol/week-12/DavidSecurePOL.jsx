import React from 'react'
import { useState } from 'react';
import DOMPurify, { sanitize } from 'dompurify';

const DavidSecurePOL = () => {

    // Unsanitized input states
    const [unUserInput, setUnUserInput] = useState('');
    const [unUserOutput, setUnUserOutput] = useState('');


    // Sanitized input states
    const [saUserInput, setSaUserInput] = useState('');
    const [saUserOutput, setSaUserOutput] = useState('');
    const [successful, setSuccessful] = useState('');


    // Unsanitized submit 
    const handleUnSubmit = () => {
        setUnUserOutput(unUserInput);
        console.log(unUserInput);
    }

    // Sanitized submit 
    const handleSaSubmit = () => {
        setSaUserOutput(DOMPurify.sanitize(saUserInput));
        setSuccessful(saUserInput)
    }


  return (
    <>
        <div className='flex flex-col'>
                <label className='text-2xl' htmlFor='unUserInput'>
                    Unsanitized User Input:
                </label>
                <p className='text-sm my-2'>{`Type this in the field below and see what happens: <img src onerror="alert('Youre about to get hacked! 😈')" />`}</p>
                <input
                    className='border rounded-md w-full py-2 my-3'
                    type='text'
                    id='unUserInput'
                    value={unUserInput}
                    onChange={(e) => setUnUserInput(e.target.value)}
                />
                <button onClick={handleUnSubmit} className='border rounded-md my-6 bg-blue-400 py-3 px-2'>
                    Submit
                </button>

                <h1 className='text-2xl' dangerouslySetInnerHTML={{__html: unUserOutput}} />

                <hr className='my-5' />

                <label className='text-2xl' htmlFor='saUserInput'>
                    Sanitized User Input:
                </label>
                <p className='text-sm my-2'>{`Type this in the field below and see what happens: <img src onerror="alert('Youre about to get hacked! 😈')" />`}</p>
                <input
                    className='border rounded-md w-full py-2 my-3'
                    type='text'
                    id='saUserInput'
                    value={saUserInput}
                    onChange={(e) => setSaUserInput(e.target.value)}
                />
                <button onClick={handleSaSubmit} className='border rounded-md my-6 bg-blue-400 py-3 px-2'>
                    Submit
                </button>

                <h1 className='text-2xl' dangerouslySetInnerHTML={{__html: saUserOutput}} />
                <h4 className='text-sm'>{successful}</h4>
                
            </div>
    </>
  )
}

export default DavidSecurePOL