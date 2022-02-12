import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import Form from "./components/Form.js";
import Services from "./components/Services.js";
import Login from "./components/Login.js";

import "./Styling/global.css";
import "./Styling/style.css";
import "./Styling/form.css";
import "./Styling/responsive.css";
import "./Styling/side-nav.css";

import "./Styling/index.css";
import NotFound from "./components/NotFound.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer.js";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" exact element={<Hero />} />
          <Route path="/form" exact element={<Form />} />
          <Route path="/services" exact element={<Services />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

class Person {
  getname() {}
}

class Moses extends Person {}
