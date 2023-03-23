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
                    <div class="row">
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
                            <div class="row">
                                <div class="col-4 col-sm-3">
                                    <ul class="list-unstyled">
                                        <li class="pb-4"><strong>Links</strong></li>
                                        <li class="pb-2">Pricing</li>
                                        <li class="pb-2">About Us</li>
                                        <li class="pb-2">Careers</li>
                                        <li class="pb-2">Blog</li>
                                    </ul>
                                </div>
                                <div class="col-4 col-sm-3">
                                    <ul class="list-unstyled">
                                        <li class="pb-4"><strong>Products</strong></li>
                                        <li class="pb-2">Take The Tour</li>
                                        <li class="pb-2">Live Chat</li>
                                        <li class="pb-2">Self Service</li>
                                        <li class="pb-2">Mobile</li>
                                        <li class="pb-2">Collaboration</li>
                                        <li class="pb-2">Reviews</li>
                                    </ul>
                                </div>
                                <div class="col-4 col-sm-3">
                                    <ul class="list-unstyled">
                                        <li class="pb-4"><strong>Legal</strong></li>
                                        <li class="pb-2">Terms of Use</li>
                                        <li class="pb-2">Terms & Conditions</li>
                                        <li class="pb-2">Privacy</li>
                                        <li class="pb-2">Cookie Policy</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;