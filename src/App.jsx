import DrawerAppBar from "./components/DrawerAppBar";
import HeroSection from "./components/HeroSection";
import PriceTiers from "./components/PriceTiers";
import About from "./components/About";
import GoTop from "./components/GoTop";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <DrawerAppBar />
      <main className="main-content">
        <HeroSection />
        <PriceTiers />
        <About />
        <GoTop />
      </main>
      <Footer />
    </div>
  );
}

export default App;
