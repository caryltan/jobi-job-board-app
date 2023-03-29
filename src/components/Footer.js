import Logo from "../assets/jobi-logo.svg";
import Facebook from "../assets/social-icons/facebook-f.svg";
import Instagram from "../assets/social-icons/instagram.svg";
import Linkedin from "../assets/social-icons/linkedin-in.svg";
import Pinterest from "../assets/social-icons/pinterest-p.svg";
import Twitter from "../assets/social-icons/twitter.svg";
import JobPortalSection from "./JobPortalSection";

const Footer = () => {
    return (
        <>
        <JobPortalSection />
            <footer className="pt-4">
                <div className="wrapper">
                    <div className="row pb-4">
                        <div className="col-12 col-sm-4 flex-column justify-content-end">

                            <div className="d-flex flex-column">
                                <div className="justify-content-center justify-content-sm-start d-flex">
                                    <img src={Logo} alt="Jobi logo" className="logo-footer w-100" />
                                </div>
                                <div className="justify-content-center justify-content-sm-start d-flex">
                                    <p>support@jobi.com</p>
                                </div>
                            </div>

                            <div className="row col-12 col-sm-4">
                                <div className="justify-content-center justify-content-sm-start d-flex">
                                    <ul className="list-unstyled d-flex justify-content-between">
                                        <li className="pr-3">
                                            <img src={Facebook} alt="Facebook social icon" className="social-icon" />
                                        </li>
                                        <li className="px-3">
                                            <img src={Twitter} alt="Twitter social icon" className="social-icon" />
                                        </li>
                                        <li className="pl-3">
                                            <img src={Linkedin} alt="Linkedin social icon" className="social-icon" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-8 pt-5">
                            <div className="row justify-content-end">
                                <div className="col-12 col-sm-4 justify-content-center justify-content-sm-start d-flex">
                                    <ul className="list-unstyled">
                                        <li className="pb-4 text-center text-sm-start"><strong>Links</strong></li>
                                        <li className="pb-2 text-muted text-center text-sm-start">Pricing</li>
                                        <li className="pb-2 text-muted text-center text-sm-start">About Us</li>
                                        <li className="pb-2 text-muted text-center text-sm-start">Careers</li>
                                        <li className="pb-2 text-muted text-center text-sm-start">Blog</li>
                                    </ul>
                                </div>
                                <div className="col-12 col-sm-4 justify-content-center justify-content-sm-start d-flex">
                                    <ul className="list-unstyled">
                                        <li className="pb-4 text-center text-sm-start"><strong>Products</strong></li>
                                        <li className="pb-2 text-muted text-center text-sm-start">Take The Tour</li>
                                        <li className="pb-2 text-muted text-center text-sm-start">Live Chat</li>
                                        <li className="pb-2 text-muted text-center text-sm-start">Self Service</li>
                                        <li className="pb-2 text-muted text-center text-sm-start">Mobile</li>
                                        <li className="pb-2 text-muted text-center text-sm-start">Collaboration</li>
                                        <li className="pb-2 text-muted text-center text-sm-start">Reviews</li>
                                    </ul>
                                </div>
                                <div className="col-12 col-sm-4 justify-content-center justify-content-sm-start d-flex">
                                    <ul className="list-unstyled">
                                        <li className="pb-4 text-center text-sm-start"><strong>Legal</strong></li>
                                        <li className="pb-2 text-muted text-center text-sm-start">Terms of Use</li>
                                        <li className="pb-2 text-muted text-center text-sm-start">Terms & Conditions</li>
                                        <li className="pb-2 text-muted text-center text-sm-start">Privacy</li>
                                        <li className="pb-2 text-muted text-center text-sm-start">Cookie Policy</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex py-3 flex-sm-column flex-md-row flex-wrap">
                        <div className="col-12 d-flex flex-row col-md-4 ">
                            <p>Privacy & Terms</p>
                            <p className="px-4">Contact Us</p>
                        </div>
                        <div className="col-12 flex-lg-row col-md-4 flex-sm-column">
                            <div className="d-flex justify-content-lg-center justify-content-sm-start">
                                <p className="text-muted">Copyright ©2023 Jobi Inc.</p>
                            </div>
                        </div>
                        <div className="row col-12 col-md-4">
                            <ul className="list-unstyled d-flex flex-row justify-content-lg-end justify-content-sm-start">
                                <li className="pr-3">
                                    <img src={Facebook} alt="Facebook social icon" className="social-icon" />
                                </li>
                                <li className="px-3">
                                    <img src={Instagram} alt="Instagram social icon" className="social-icon" />
                                </li>
                                <li>
                                    <img src={Pinterest} alt="Pinterest social icon" className="social-icon" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;