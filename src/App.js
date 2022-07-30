import Header from "./components/Header/Header";
import AboutUs from "./pages/AboutPage/AboutUs";
import Main from "./pages/Main";
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Main />
      </main>
      <Footer />
    </div>
  );
}

export default App;
