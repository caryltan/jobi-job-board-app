import Navbar from "./Navbar.js";
import CorporateImage from "../assets/corporate-couple-clipped.png";
import HeaderBottom from "../assets/header-bottom.png";
import HomeMinSearch from "./HomeMinSearch.js";

const Header = () => {
    return (
        <>

            <Navbar />
            {/* <div className="bg-brand-light header-bg"> */}
            <div className="bg-brand-light-header header-bg py-5">
                <div className="wrapper">
                    <header className="container-fluid">
                        <div className="container-fluid mx-auto row curved">
                            <div className="col-12 col-xl-6">
                                <div className="d-flex flex-column align-items-center">
                                    <h1 className="header-h1 mb-4 text-center text-xl-start">Find & Hire Top 3% of experts on Jobi</h1>
                                    <p>With the largest professional creative community online, simply search through our website</p>
                                </div>
                                <div>
                                    <HomeMinSearch />
                                </div>
                            </div>
                            <div className="col-12 col-xl-6 header-image-container">
                                <img className="header-image" src={CorporateImage} alt="Two young people in corporate attire holding mobile devices" />
                            </div>

                        </div>
                    </header>
                </div>
            </div>
            
                <div className="col-12">
                    <img className="bottom-header" src={HeaderBottom} alt="" />
                </div>
            
        </>
    )
}

export default Header;