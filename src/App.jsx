import DrawerAppBar from "./components/DrawerAppBar";
import HeroSection from "./components/HeroSection";
import Mission from "./components/Mission";
import PriceTiers from "./components/PriceTiers";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import GoTop from "./components/GoTop";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <DrawerAppBar />
      <main className="main-content">
        <HeroSection />
        <Mission />
        <PriceTiers />
        <About />
        <Testimonials />
        <GoTop />
      </main>
      <Footer />
    </div>
  );
}

export default App;
