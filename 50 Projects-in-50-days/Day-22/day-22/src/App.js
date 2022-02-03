import "./styles/style.css";
import "./styles/global.css";
import "./styles/responsive.css";
import "./styles/form.css";
import Home from "./components/Home";
import Form from "./components/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
