import React from 'react';
import { Routes, Route } from "react-router-dom";
import AboutUs from './AboutPage/AboutUs';
import Technical_Page from './Technical Assistance/Technical_Page';



const Main = () => {
  return (
    <div>
        <Routes>
          <Route path='about-us' element={<AboutUs />} />
          <Route path='technical-assistance' element={<Technical_Page />} />
        </Routes>
    </div>
  )
}

export default Main