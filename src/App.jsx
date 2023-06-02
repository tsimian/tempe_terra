import DrawerAppBar from "./components/DrawerAppBar";
import HeroSection from "./components/HeroSection";
import PriceTiers from "./components/PriceTiers";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <div className="app">
      <DrawerAppBar />
      <main className="mainContent">
        <HeroSection />
        <PriceTiers />
        <About />
      </main>
    </div>
  );
}

export default App;
