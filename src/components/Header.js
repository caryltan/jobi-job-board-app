import Navbar from "./Navbar.js";
import CorporateImage from "../assets/corporate-couple-clipped.png";
import BottomHeader from "../assets/header-bg-bottom.png";
import HomeMinSearch from "./HomeMinSearch.js";

const Header = () => {
    return (
        <>

            <Navbar />
            {/* <div className="bg-brand-light header-bg"> */}
            <div className="bg-brand-light-header header-bg">
                <div className="wrapper">
                    <header className="container-fluid">
                        <div className="container-fluid mx-auto row curved">
                            <div className="col-md-6">
                                <div className="w-75 mx-auto d-flex flex-column align-items-center">
                                    <h1>Find & Hire Top 3% of experts on Jobi</h1>
                                    <p>With the largest professional creative community online, simply search through our website</p>
                                </div>
                                <div>
                                    <HomeMinSearch />
                                </div>
                            </div>
                            <div className="col-md-6 header-image-container">
                                <img className="header-image" src={CorporateImage} alt="Two young people in corporate attire holding mobile devices" />
                            </div>

                        </div>
                    </header>
                </div>
            </div>
            <div className=" col-12 d-flex flex-row">
                <div className="col-12">
                    <img className="img-fluid" src={BottomHeader} alt="" />
                </div>
            </div>
        </>
    )
}

export default Header;