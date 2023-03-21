import "./sass/partials/main.css";
import { Link, Routes, Route } from 'react-router-dom';
import Home from "./pages/home.js";
import Navbar from "./components/Navbar.js"
import Footer from "./components/Footer.js"


function App() {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={ <Home /> } /> 
      </Routes>

      <Footer />
    </>
  );
}

export default App;
