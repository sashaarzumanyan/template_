import Header from "./components/Header/Header";
import AboutUs from "./pages/AboutPage/AboutUs";
import Main from "./pages/Main";
import Footer from './components/Footer/Footer'
import { useTransform, motion, useScroll } from 'framer-motion';



function App() {
  const { scrollY } = useScroll();

  const offsetY = [0, 300];
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
