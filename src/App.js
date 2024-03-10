import Hero from "./components/Hero";
import Brand from "./components/Brand";
import Stat from "./components/Stat";
import About from "./components/About";
import Service from "./components/StandOut";
import Gallery from "./components/Gallery";
import CallToAction from "./components/CallToAction";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Service />
      <Stat />
      <Gallery />
      <Brand />
      <Portfolio />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
