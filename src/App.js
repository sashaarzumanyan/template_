import { useScroll } from 'framer-motion';
import { useEffect } from "react";
import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header";
import Main from "./pages/Main";
import { useSelector } from 'react-redux'
import AdminMain from './pages/Admin';
import { Routes, Route } from "react-router-dom";





function App() {
  const { scrollY } = useScroll();
  const { singlePageInfo } = useSelector(state => state);
  const pathname = window.location.pathname;

  const offsetY = [0, 300];

  useEffect(() => {
    window.scrollTo(0, 0)
    // debugger
  }, [pathname, singlePageInfo])
  // const marginTop = useTransform(scrollY, offsetY, offsetY);

  return (
    <div className="App" style={{position: "relative"}}>
     {pathname === "/admin" ? null : <Header offsetY={offsetY} scrollY={scrollY} />}
      <main>
        <Routes>
          <Route path='' element={<Main />} />
          <Route path='admin'  element={<AdminMain />}/>
        </Routes>
        
        
      </main>
      {pathname === "/admin"? null : <Footer />}
    </div>
  );
}

export default App;
