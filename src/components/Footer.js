import Logo from "../assets/jobi-logo.svg";
import Facebook from "../assets/social-icons/facebook-f.svg";
import Instagram from "../assets/social-icons/instagram.svg";
import Linkedin from "../assets/social-icons/linkedin-in.svg";
import Pinterest from "../assets/social-icons/pinterest-p.svg";
import Twitter from "../assets/social-icons/twitter.svg";

const Footer = () => {
    return (
        <>
            <footer class="pt-5">
                <div class="wrapper">
                    <div class="row pb-4">
                        <div class="col-12 col-sm-4">
                            <img src={Logo} alt="Jobi logo" />
                            <p>support@jobi.com</p>
                            <div class="row col-6 col-sm-4">
                                <ul class="list-unstyled d-flex justify-content-between">
                                    <li class="">
                                        <img src={Facebook} alt="Facebook social icon" class="social-icon" />
                                    </li>
                                    <li class="">
                                        <img src={Twitter} alt="Twitter social icon" class="social-icon" />
                                    </li>
                                    <li class="">
                                        <img src={Linkedin} alt="Linkedin social icon" class="social-icon" />
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-12 col-sm-8">
                            <div class="row justify-content-end">
                                <div class="col-4 col-sm-4">
                                    <ul class="list-unstyled">
                                        <li class="pb-4"><strong>Links</strong></li>
                                        <li class="pb-2 text-muted">Pricing</li>
                                        <li class="pb-2 text-muted">About Us</li>
                                        <li class="pb-2 text-muted">Careers</li>
                                        <li class="pb-2 text-muted">Blog</li>
                                    </ul>
                                </div>
                                <div class="col-4 col-sm-4">
                                    <ul class="list-unstyled">
                                        <li class="pb-4"><strong>Products</strong></li>
                                        <li class="pb-2 text-muted">Take The Tour</li>
                                        <li class="pb-2 text-muted">Live Chat</li>
                                        <li class="pb-2 text-muted">Self Service</li>
                                        <li class="pb-2 text-muted">Mobile</li>
                                        <li class="pb-2 text-muted">Collaboration</li>
                                        <li class="pb-2 text-muted">Reviews</li>
                                    </ul>
                                </div>
                                <div class="col-4 col-sm-4">
                                    <ul class="list-unstyled">
                                        <li class="pb-4"><strong>Legal</strong></li>
                                        <li class="pb-2 text-muted">Terms of Use</li>
                                        <li class="pb-2 text-muted">Terms & Conditions</li>
                                        <li class="pb-2 text-muted">Privacy</li>
                                        <li class="pb-2 text-muted">Cookie Policy</li>
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
                                <li>
                                    <img src={Facebook} alt="Facebook social icon" class="social-icon-bottom" />
                                </li>
                                <li class="">
                                    <img src={Instagram} alt="Instagram social icon" class="social-icon-bottom" />
                                </li>
                                <li class="">
                                    <img src={Pinterest} alt="Pinterest social icon" class="social-icon-bottom" />
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