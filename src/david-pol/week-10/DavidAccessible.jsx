/* eslint-disable jsx-a11y/aria-role */
import React from 'react'
import { useRef } from 'react'

const DavidAccessible = () => {

    const inputRef = useRef();

    const handleFocus = () => {
        inputRef.current.focus();
    }



    const handleAction = () => {
        console.log("Yes, I can execute for both mouse and keyboard events")
    }

    const handleClick = () => {
        handleAction();
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter') {
            handleAction();
        }
    }



  return (
    <>
        {/* tabIndex */}

        {/* <h1 
            className='text-3xl font-bold mb-4 text-center' 
            tabIndex={0}
        >
            Welcome to the web application!
        </h1>
        <p 
            className='text-xl text-slate-500 my-3'
            tabIndex={1}>We're pleased to have you here!
        </p>
        <button 
            className='rounded-md px-3 py-1 bg-purple-900 text-white'
            tabIndex={2}
            onClick={handleClick} 
            onKeyDown={handleKeyPress}
            role="btn"
            aria-label="Button clicked to check if accessibility works"
        >
            Click me or Press Enter
        </button> */}


        {/* autofocus & focus() */}

        <input
            className='rounded-md px-4 py-2 border'
            autoFocus
            role='input'
            aria-label='normal input'
        />
        <button
            className='bg-blue-900 text-white rounded-md px-4 py-3 my-8'
            role="btn"
            aria-label="Make input focus"
            onClick={handleFocus}
        >
            Make the input below focused
        </button>
        <input
            ref={inputRef}
            className='rounded-md px-4 py-2 border'
            role='input'
            aria-label='normal input'
        />
    </>  
  )
}

export default DavidAccessible





