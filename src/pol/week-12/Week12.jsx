import React, { useEffect } from 'react'
import DavidSecurePOL from './DavidSecurePOL.jsx';

const Week12 = () => {

    useEffect(() => {
        document.title = 'David Secure Frontend'
    }, []);

    return (
        <>
             <div className='flex flex-col justify-center items-center h-screen px-12 my-20'>
                <DavidSecurePOL />
             </div>
        </>
    )
    
}

export default Week12