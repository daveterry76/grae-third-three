import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import axios from 'axios';


const ProductsGallery = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const productRef = useRef();

  const handleFocus = () => {
    productRef.current.focus();
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try{
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.products)
      } catch (error){
        console.log("An error occured:", error)
      }

      // Fetch the products using this API endpoint: 
      // https://dummyjson.com/products
      // Use the try-catch statement
    };

    fetchProducts();
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight' && currentIndex < products.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div ref={productRef} onClick={handleFocus} onKeyDown={handleKeyDown} tabIndex="0" style={{ outline: 'none' }}>
      {products?.map((product, index) => (
        <div key={product?.id} 
          style={{
            display: index === currentIndex ? 'block' : 'none',
            border: '1px solid #ddd',
            padding: '10px',
            marginBottom: '10px',
            cursor: 'pointer'
          }}
          >
            <img className='rounded-lg h-56 lg:h-72 w-full' src={product?.images[0]} alt="product img" />
            <h3 className='mt-6 text-lg font-bold'>{product?.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default ProductsGallery;
