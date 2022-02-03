import "./styles/style.css";
import "./styles/global.css";
import "./styles/responsive.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <div className="glass"></div>
      <div className="z-index">
        <Nav />
        <Hero />
      </div>
    </div>
  );
}

export default App;
