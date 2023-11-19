import './App.css';


import { BrowserRouter as Router } from 'react-router-dom';


import { Routes, Route } from 'react-router-dom';

// import { useState } from 'react';


// import Home from './david-pol/week-9/pages/Home';
// import About from './david-pol/week-9/pages/About';
// import Clients from './david-pol/week-9/pages/Clients';
// import Services from './david-pol/week-9/pages/Services';
// import Contact from './david-pol/week-9/pages/Contact';
// import NoPage from './david-pol/week-9/pages/404';
// import Dashboard from './pol/week-9/components/Dashboard';
// import Login from './pol/week-9/components/Login';


// import Week10 from './david-pol/week-10/Week10';
// import Week10 from './pol/week-10/Week10';
// import Week11 from './david-pol/week-11/Week11';
import Week11 from './pol/week-11/Week11';


function App() {
  // const [name, setName] = useState('');
  // const [track, setTrack] = useState('');


  return (
    <>
      {/* <div className='flex justify-center flex-col items-center h-screen'> */}
      <div>
        <Router>
          <Routes>
            {/* <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/clients' element={<Clients />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} /> */}


            {/* <Route path='*' element={<NoPage />} /> */}

            {/* <Route path='/' element={<Login name={name} setName={setName} track={track} setTrack={setTrack} />} /> */}
            {/* <Route path='/dashboard' element={<Dashboard name={name} setName={setName} track={track} setTrack={setTrack} />} /> */}


            {/* <Route path='/' element={<Week10 />} /> */}
            {/* <Route path='/' element={<Week11 />} /> */}
            <Route path='/' element={<Week11 />} />

          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
