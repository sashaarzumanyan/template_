import Header from "./components/Header/Header";
import AboutUs from "./pages/AboutPage/AboutUs";
import Main from "./pages/Main";


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
