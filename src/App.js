import "./sass/partials/main.css";
import {
  Link,
  Routes,
  Route,
  useParams,
} from 'react-router-dom';
import Home from "./pages/home"
import Footer from "./components/Footer.js"
import Header from "./components/Header.js"
import bootstrap from 'bootstrap'
import JobList from "./pages/JobList";
import JobPageIndv from "./pages/JobPageIndv";

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/explore" element={ <JobList /> } /> 
        <Route path="/job-listings/:jobListingID" element={ <JobPageIndv /> } />   
      </Routes>

      <Footer />
    </>
  );
}

export default App;
