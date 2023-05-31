import DrawerAppBar from "./components/DrawerAppBar";
import HeroSection from "./components/HeroSection";
import "./App.css";

function App() {
  return (
    <div className="app">
      <DrawerAppBar />
      <main className="mainContent">
        <HeroSection />
      </main>
    </div>
  );
}

export default App;
