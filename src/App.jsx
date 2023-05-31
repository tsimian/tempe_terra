import DrawerAppBar from "./components/DrawerAppBar";
import HeroSection from "./components/HeroSection";
import PriceTiers from "./components/PriceTiers";
import "./App.css";

function App() {
  return (
    <div className="app">
      <DrawerAppBar />
      <main className="mainContent">
        <HeroSection />
        <PriceTiers />
      </main>
    </div>
  );
}

export default App;
