import Logo from "../assets/jobi-logo.svg"
import Home from "../pages/home.js";
import { Link, Routes, Route } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <nav>
                <div>
                    <img src={Logo} alt="Jobi logo" />
                </div>
                <ul>
                    <li>
                        <Link
                            to={`/`}
                            element={<Home />}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={`/`}
                            element={<Home />}>
                            Job
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={`/`}
                            element={<Home />}>
                            Explore
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={`/`}
                            element={<Home />}>
                            Category
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={`/`}
                            element={<Home />}>
                            Pages
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link
                            to={`/`}
                            element={<Home />}>
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="menu-link"
                            to={`/`}
                            element={<Home />}>
                            Register
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;