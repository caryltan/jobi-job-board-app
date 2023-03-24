import Navbar from "./Navbar.js"
import CorporateImage from "../assets/corporate-couple.png"

const Header = () => {
    return (
        <>

            <Navbar />
            <div class="bg-light">
                <div class="wrapper">
                    <header class="container-fluid">
                        <div class="container-fluid mx-auto row curved">
                            <div class="col-md-6">
                                <div class="w-75 mx-auto d-flex flex-column align-items-center">
                                    <h1>Find & Hire Top 3% of experts on Jobi</h1>
                                    <p>With the largest professional creative community online, simply search through our website</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <img class="img-fluid" src={CorporateImage} alt="Two young people in corporate attire holding mobile devices" />
                            </div>
                        </div>
                    </header>
                </div>
            </div>
        </>
    )
}

export default Header;