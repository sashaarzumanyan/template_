import React from 'react';
import { Routes, Route } from "react-router-dom";
import AboutUs from './AboutPage/AboutUs';
import Home from './Home/Home';
import Contact from './Contacts/Contact';
import Procurement from './Procurement/Procurement';
import Projects from './Projects/Projects';
import Technical_Page from './Technical Assistance/Technical_Page';
import StoryPage from './SuccessfulStory.js/StoryPage'



const Main = () => {
  return (
    <div>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path='about-us' element={<AboutUs />} />
          <Route path='technical-assistance' element={<Technical_Page />} />
          <Route path='procurement' element={<Procurement />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contacts' element={<Contact />} />
          <Route path='successful-stories' element={<StoryPage />} />
        </Routes>
    </div>
  )
}

export default Main