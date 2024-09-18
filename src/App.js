import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";


function App() {
  return (
    <div>
        <Navbar/>
        <main className=''>
        <Hero />
        <About />
        <Service />
        <Projects />
        <Contact />
        </main>
        <Footer />
    </div>
  );
}

export default App;
