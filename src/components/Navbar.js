import Logo from "../assets/jobi-logo.svg"
import Home from "../pages/home.js";
import { Link, Routes, Route } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const NavBar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light px-5">
                <div class="container container-fluid">
                    <a class="navbar-brand col-4" href="#">
                        <img src={Logo} alt="Jobi logo" />
                    </a>
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 col-6">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Job</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Explore</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Category</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pages</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav d-flex justify-content-end col-2">
                            <li class="nav-item pl-4">
                                <a class="nav-link" href="#">Login</a>
                            </li>
                            <li class="nav-item">
                                <button type="button" class="btn btn-primary">Register</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;