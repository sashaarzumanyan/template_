import React from 'react';
import { Routes, Route } from "react-router-dom";
import AboutUs from './AboutPage/AboutUs';



const Main = () => {
  return (
    <div>
        <Routes>
          <Route path='about-us' element={<AboutUs />} />
        </Routes>
    </div>
  )
}

export default Main