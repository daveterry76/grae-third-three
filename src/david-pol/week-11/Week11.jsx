import React from 'react'
import styles from '../week-11/styles.css'


const Week11 = () => {
  return (
    <>
        <div className='flex flex-col text-center items-center justify-center h-screen gap-6'>
            <h1 className="david">Hello, David!</h1>
            <button className="david__btn">
                This is David's button
            </button>

            <button className='bg-blue-800 hover:bg-blue-200 text-white rounded-2xl py-4 px-8 david__btn'>
                This is David's button
            </button>
        </div>
    </>
  )
}

export default Week11