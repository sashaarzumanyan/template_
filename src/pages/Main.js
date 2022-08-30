import React, { useEffect, useState } from 'react';
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
import Jobs from './Jobs/Jobs';
import SingleJob from './Jobs/SingleJob';
import { useNavigate } from 'react-router-dom';



const Main = () => {
  const navigate = useNavigate();
  const [jobId, setJobId] = useState(1);
  const { singlePageInfo: { image1, section, image2, resource, pageTitle } } = useSelector(state => state);

  const handleClick = (id) => {
    navigate("/job")
    setJobId(id)
    // debugger
  };



  // const checkJob = (job) => {
  //   if (job === []) {
  //     debugger
  //     // navigate("careers")
  //   }
  // }

  return (
    <div style={{ width: '100%', height: 'auto' }}>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='about-us' element={<AboutUs />} />
        <Route path='technical-assistance' element={<Technical_Page />} />
        <Route path='procurement' element={<Procurement />} />
        <Route path='projects' element={<Projects />} />
        <Route path='contacts' element={<Contact />} />
        <Route path='successful-stories' element={<StoryPage />} />
        <Route path='services' element={<Industries />} />
        <Route path='details' element={<SinglePage section={section} image1={image1} image2={image2} resource={resource} pageTitle={pageTitle} />} />
        <Route path='news' element={<News />} />
        <Route path='careers' element={<Jobs handleClick={handleClick} />} />
        <Route path="job" element={<SingleJob jobId={jobId}  />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  )
}

export default Main