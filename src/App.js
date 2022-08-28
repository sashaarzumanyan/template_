import { useScroll } from 'framer-motion';
import { useEffect } from "react";
import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header";
import Main from "./pages/Main";
import { useSelector } from 'react-redux'




function App() {
  const { scrollY } = useScroll();
  const { singlePageInfo } = useSelector(state => state);
  const pathname = window.location.pathname;

  const offsetY = [0, 300];

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname, singlePageInfo])
  // const marginTop = useTransform(scrollY, offsetY, offsetY);

  return (
    <div className="App" style={{position: "relative"}}>
      <Header offsetY={offsetY} scrollY={scrollY} />
      <main>
        <Main />
      </main>
      <Footer />
    </div>
  );
}

export default App;
