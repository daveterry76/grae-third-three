import React from 'react'
import { useEffect } from 'react'
import ProductsGallery from './ProductsGallery'

const Week10 = () => {

  useEffect(() => {
    document.title = 'Products Gallery';
  }, []);

  return (
    <>
        <div className='px-20 text-center'>
            <h1 className='font-bold text-xl md:text-2xl lg:text-3xl my-6'>Accessible Products</h1>
            <ProductsGallery />
            <p className='text-sm text-slate-500 my-10'>click the product above and then move left or right to see the power of accessibility. 🤗</p>
        </div>
    </>
  )
}

export default Week10