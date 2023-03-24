import Navbar from "./Navbar.js"
import CorporateImage from "../assets/corporate-couple.png"

const Header = () => {
    return (
        <>

            <Navbar />
            <div className="bg-light">
                <div className="wrapper">
                    <header className="container-fluid">
                        <div className="container-fluid mx-auto row curved">
                            <div className="col-md-6">
                                <div className="w-75 mx-auto d-flex flex-column align-items-center">
                                    <h1>Find & Hire Top 3% of experts on Jobi</h1>
                                    <p>With the largest professional creative community online, simply search through our website</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img className="img-fluid" src={CorporateImage} alt="Two young people in corporate attire holding mobile devices" />
                            </div>
                        </div>
                    </header>
                </div>
            </div>
        </>
    )
}

export default Header;