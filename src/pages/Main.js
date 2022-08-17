import React from 'react';
import { Routes, Route } from "react-router-dom";
import AboutUs from './AboutPage/AboutUs';
import Home from './Home/Home';
import Contact from './Contacts/Contact';
import Procurement from './Procurement/Procurement';
import Projects from './Projects/Projects';
import Technical_Page from './Technical Assistance/Technical_Page';
import StoryPage from './SuccessfulStory.js/StoryPage'
import News from './News/News';
import LoginForm from './LoginPage/LoginForm';
import Industries from './Industries/Industries';
import SinglePage from './SinglePage';
import { useSelector } from 'react-redux';



const Main = () => {
  const {singlePageInfo: {image1, pageTitle, image2, paragraph}} = useSelector(state => state)
  console.log(pageTitle, "hhh");
  return (
    <div>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='about-us' element={<AboutUs />} />
          <Route path='technical-assistance' element={<Technical_Page />} />
          <Route path='procurement' element={<Procurement />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contacts' element={<Contact />} />
          <Route path='successful-stories' element={<StoryPage />} />
          <Route path='industries' element={<Industries />} />
          <Route path='section' element={<SinglePage pageTitle={pageTitle} image1={image1} image2={image2} paragraph={paragraph} />} />
          <Route path='news' element={<News />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
    </div>
  )
}

export default Main