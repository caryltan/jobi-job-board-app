import "./sass/partials/main.css";
import { Link, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.js";
import Footer from "./components/Footer.js"
import Header from "./components/Header.js"
import bootstrap from 'bootstrap'
import JobList from "./pages/JobList";

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/explore" element={ <JobList /> } />  
      </Routes>

      <Footer />
    </>
  );
}

export default App;
