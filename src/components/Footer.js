import Logo from "../assets/jobi-logo.svg";
import Facebook from "../assets/social-icons/facebook-f.svg";
import Instagram from "../assets/social-icons/instagram.svg";
import Linkedin from "../assets/social-icons/linkedin-in.svg";
import Pinterest from "../assets/social-icons/pinterest-p.svg";
import Twitter from "../assets/social-icons/twitter.svg";

const Footer = () => {
    return (
        <>
            <footer class="pt-4">
                <div class="wrapper">
                    <div class="row pb-4">
                        <div class="col-12 col-sm-4 flex-column justify-content-end">

                            <div class="d-flex flex-column">
                                <div class="justify-content-center justify-content-sm-start d-flex">
                                    <img src={Logo} alt="Jobi logo" class="logo-footer w-100" />
                                </div>
                                <div class="justify-content-center justify-content-sm-start d-flex">
                                    <p>support@jobi.com</p>
                                </div>
                            </div>

                            <div class="row col-12 col-sm-4">
                                <div class="justify-content-center justify-content-sm-start d-flex">
                                    <ul class="list-unstyled d-flex justify-content-between">
                                        <li class="pr-5">
                                            <img src={Facebook} alt="Facebook social icon" class="social-icon" />
                                        </li>
                                        <li class="px-5">
                                            <img src={Twitter} alt="Twitter social icon" class="social-icon" />
                                        </li>
                                        <li class="pl-5">
                                            <img src={Linkedin} alt="Linkedin social icon" class="social-icon" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-8 pt-5">
                            <div class="row justify-content-end">
                                <div class="col-12 col-sm-4 justify-content-center justify-content-sm-start d-flex">
                                    <ul class="list-unstyled">
                                        <li class="pb-4 text-center text-sm-start"><strong>Links</strong></li>
                                        <li class="pb-2 text-muted text-center text-sm-start">Pricing</li>
                                        <li class="pb-2 text-muted text-center text-sm-start">About Us</li>
                                        <li class="pb-2 text-muted text-center text-sm-start">Careers</li>
                                        <li class="pb-2 text-muted text-center text-sm-start">Blog</li>
                                    </ul>
                                </div>
                                <div class="col-12 col-sm-4 justify-content-center justify-content-sm-start d-flex">
                                    <ul class="list-unstyled">
                                        <li class="pb-4 text-center text-sm-start"><strong>Products</strong></li>
                                        <li class="pb-2 text-muted text-center text-sm-start">Take The Tour</li>
                                        <li class="pb-2 text-muted text-center text-sm-start">Live Chat</li>
                                        <li class="pb-2 text-muted text-center text-sm-start">Self Service</li>
                                        <li class="pb-2 text-muted text-center text-sm-start">Mobile</li>
                                        <li class="pb-2 text-muted text-center text-sm-start">Collaboration</li>
                                        <li class="pb-2 text-muted text-center text-sm-start">Reviews</li>
                                    </ul>
                                </div>
                                <div class="col-12 col-sm-4 justify-content-center justify-content-sm-start d-flex">
                                    <ul class="list-unstyled">
                                        <li class="pb-4 text-center text-sm-start"><strong>Legal</strong></li>
                                        <li class="pb-2 text-muted text-center text-sm-start">Terms of Use</li>
                                        <li class="pb-2 text-muted text-center text-sm-start">Terms & Conditions</li>
                                        <li class="pb-2 text-muted text-center text-sm-start">Privacy</li>
                                        <li class="pb-2 text-muted text-center text-sm-start">Cookie Policy</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex py-3 flex-sm-column flex-md-row flex-wrap">
                        <div class="col-12 d-flex flex-row col-md-4 ">
                            <p>Privacy & Terms</p>
                            <p class="px-4">Contact Us</p>
                        </div>
                        <div class="col-12 flex-lg-row col-md-4 flex-sm-column">
                            <div class="d-flex justify-content-lg-center justify-content-sm-start">
                                <p class="text-muted">Copyright ©2023 Jobi Inc.</p>
                            </div>
                        </div>
                        <div class="row col-12 col-md-4">
                            <ul class="list-unstyled d-flex flex-row justify-content-lg-end justify-content-sm-start">
                                <li class="pr-3">
                                    <img src={Facebook} alt="Facebook social icon" class="social-icon" />
                                </li>
                                <li class="px-3">
                                    <img src={Instagram} alt="Instagram social icon" class="social-icon" />
                                </li>
                                <li>
                                    <img src={Pinterest} alt="Pinterest social icon" class="social-icon" />
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