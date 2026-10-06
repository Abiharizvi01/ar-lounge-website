import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Services from './Components/Services';
import Gallery from './Components/Gallery';
import AboutContact from './Components/AboutContact';
// We will import Services, Gallery, About, Contact here next!

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* 1. Navbar stays fixed on top across the entire app */}
      <Navbar />

      {/* 2. Main content sections stacked vertically */}
      <main>
        <Hero />
        <Services />
        <Gallery />
        <AboutContact/>
        {/* <Contact /> */}
      </main>

      {/* 3. Footer will go here */}
    </div>
  );
}

export default App;