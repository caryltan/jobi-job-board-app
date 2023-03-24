import "./sass/partials/main.css";
import { Link, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.js";
import Footer from "./components/Footer.js"
import Header from "./components/Header.js"
import bootstrap from 'bootstrap'


function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={ <Home /> } /> 
      </Routes>

      <Footer />
    </>
  );
}

export default App;
