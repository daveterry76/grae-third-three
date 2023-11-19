import React from 'react'


const LandingPage = () => {



  return (
    <>
        <div className='w-full flex flex-col justify-center text-center'>
            <div className='bg-slate-800 h-screen text-center flex flex-col items-center justify-center'>
                <h1 className='font-mono text-white text-2xl lg:text-5xl transform transition-transform duration-300 ease-out delay-100 hover:rotate-180'>Hello! My name is David</h1>

                <p className='text-base text-white mt-40'>And I can rotate 😇 hover over the sentence above using a mouse to see the effects</p>
            </div>
            <div className='bg-slate-100 h-screen text-center flex flex-col items-center justify-center'>
                <h3 className='text-2xl lg:text-3xl'>These are the technologies I use as a Frontend Engineer at graeseed!</h3>
                <ul className='flex flex-col gap-5 py-6'>
                    <li className='text-xl transition duration-400 ease-linear delay-300 hover:translate-x-[100px]'>React</li>
                    <li className='text-xl transition duration-200 ease-in delay-700 hover:translate-x-[-400px]'>TypeScript</li>
                    <li className='text-xl transition duration-700 ease-in-out delay-100 hover:translate-y-[-300px]'>TailwindCSS</li>
                </ul>
                <p className='text-base text-black mt-40'>And I can move 😇 hover over the items above using a mouse to see the effects</p>
            </div>
            <div className='bg-slate-900 h-screen text-center flex flex-col items-center justify-center'>
                <h3 className='text-2xl lg:text-5xl font-sans text-white transition duration-1000 ease-out delay-300 hover:skew-y-12'>Hope to be a badass software engineer some day. 😎</h3>
            
                <p className='text-base text-white mt-40'>And I can be askew 😇 hover over the sentence above using a mouse to see the effects</p>
            </div>
        </div>
    </>
  )
}

export default LandingPage