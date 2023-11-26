import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import DOMPurify from 'dompurify'

const DavidSecure = () => {

    const [userInput, setUserInput] = useState('');
    const [userOutput, setUserOutput] = useState('');

    const handleSubmit = () => {
        setUserOutput(DOMPurify.sanitize(userInput));
        console.log(userOutput);
    }
    
    return (
        <>
            <div className='flex flex-col'>
                <label className='text-2xl' htmlFor='userInput'>
                    User Input:
                </label>
                <input
                    className='border rounded-md w-full py-2 my-3'
                    type='text'
                    id='userInput'
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
                <button onClick={handleSubmit} className='border rounded-md my-6 bg-blue-400 py-3 px-2'>
                    Submit
                </button>

                <h1 className='text-2xl' dangerouslySetInnerHTML={{__html: userOutput}} />

            </div>
        </>
    )
}





// export const DOMXSS = () => {
//     useEffect(() => {
//         const userInput = new URLSearchParams(window.location.search).get('input');

//         // This code introduces vulnerability
//         document.getElementById('userInputContainer').innerHTML = userInput;
//     }, []);

//     return (
//         <div id='userInputContainer'>
//             {/* Code goes here */}
//         </div>
//     )
// }


export default DavidSecure