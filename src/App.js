import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import React, { useRef } from "react";
import Pagos from "./Pagos";
function App() {
  const Landing = () => {
    const navigate = useNavigate();
    const nav = (arg) => {
      navigate(`/pagos/${arg}`);
    };

    return (
      <>
        <h2>La diferencia entre ambos forms se encuentran en el último paso</h2>
        <button onClick={() => nav("argentinos")}>Form Argentinos</button>
        <button onClick={() => nav("extranjeros")}>Form Extranjeros</button>
      </>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pagos/:method" element={<Pagos />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
