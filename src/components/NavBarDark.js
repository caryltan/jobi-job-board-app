import LogoLight from "../assets/jobi-logo-light.svg"
import Home from "../pages/Home.js";
import { Link, Routes, Route } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-brand-dark px-5">
                <div className="container container-fluid">
                    <Link className="navbar-brand col-4" to="/">
                        <img src={LogoLight} alt="Jobi logo" />
                    </Link>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-6">
                            <li className="nav-item">
                                <Link 
                                className="nav-link active text-white" 
                                aria-current="page"
                                to={`/`}>
                                    Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Job</a>
                            </li>
                            <li className="nav-item">
                                <Link 
                                className="nav-link text-white" 
                                to={`/explore`}>
                                    Explore</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Category</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Pages</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav d-flex justify-content-end col-2">
                            <li className="nav-item pl-4">
                                <a className="nav-link text-white" href="#">Login</a>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-primary">Register</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;