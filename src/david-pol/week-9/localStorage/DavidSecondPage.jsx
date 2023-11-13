import React from 'react'
import Cookies from 'js-cookie';

const DavidSecondPage = () => {

    const name = Cookies.get("name");
    const hobbies = Cookies.get("hobbies");


  return (
    <>
        <div>
            <h3>Hello, there! My name is {name} and one of my hobbies is {hobbies}</h3>
        </div>
    </>
  )
}

export default DavidSecondPage









