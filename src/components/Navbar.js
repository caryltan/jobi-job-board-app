import Logo from "../assets/jobi-logo.svg"
import Home from "../pages/home.js";
import { Link, Routes, Route } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-brand-light-header px-5 pb-5">
                <div className="container container-fluid">
                    <Link className="navbar-brand col-4" to="/">
                        <img src={Logo} alt="Jobi logo" />
                    </Link>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-6">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Job</a>
                            </li>
                            <li className="nav-item">
                                <Link 
                                className="nav-link" 
                                to={`/explore`}>
                                    Explore</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Category</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pages</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav d-flex justify-content-end col-2">
                            <li className="nav-item pl-4">
                                <a className="nav-link" href="#">Login</a>
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