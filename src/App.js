import { useScroll } from 'framer-motion';
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { Route, Routes } from "react-router-dom";
import AdminMain from './pages/Admin';
import Main from "./pages/Main";





function App() {
  const { scrollY } = useScroll();
  const { singlePageInfo } = useSelector(state => state);
  const pathname = window.location.pathname;

  const offsetY = [0, 300];

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname, singlePageInfo])

  return (
    <div className="App" style={{ position: "relative" }}>
      <main>
        <Routes>
          <Route path='*' element={<Main />} />
          <Route path='admin/*' element={<AdminMain />} />
        </Routes>

      </main>
    </div>
  );
}

export default App;
