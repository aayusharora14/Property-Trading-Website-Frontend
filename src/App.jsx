import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Franchise from "./components/Franchise/Franchise";
import Value from './components/Value/Value';
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Companies />
      <Residencies />
      <Franchise />
      <GetStarted />
      <Value />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
