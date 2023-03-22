import ProfileImg from "../assets/profile-image.png";
import Rating from "../assets/rating.svg";

const TestimonialsSection = () => {
    return (
        <>
            <section class="row testimonial-section">
                <div class="col-12 col-xl-4 px-5 py-5">
                    <div>
                        <p>TESTIMONIALS</p>
                        <h2>Clients love Jobi</h2>
                    </div>
                    <div>
                        <h3>A+ Rating</h3>
                        <p>4.8 avg rating makes us your best market place</p>
                    </div>
                </div>
                <div class="col-12 col-xl-3 bg-light px-5 py-5 h-50 mx-5 my-5">
                    <div>
                        <h3>Impressive!</h3>
                        <img src={Rating} alt="Rating Star 5/5" />
                        <p>"This is absolutely unique and clean and what I'm looking for. Also, the code quality is great!"</p>
                        <hr />
                        <div class="d-flex flex-row">
                            <div>
                                <img src={ProfileImg} alt="Headshot of user profile" />
                            </div>
                            <div>
                                <h4>Zubayer Al Hasan</h4>
                                <p>Canada</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-xl-3 bg-light px-5 py-5 h-50 mx-5 my-5">
                    <div>
                        <h3>Impressive!</h3>
                        <img src={Rating} alt="Rating Star 5/5" />
                        <p>"This is absolutely unique and clean and what I'm looking for. Also, the code quality is great!"</p>
                        <hr />
                        <div class="d-flex flex-row">
                            <div>
                                <img src={ProfileImg} alt="Headshot of user profile" />
                            </div>
                            <div>
                                <h4>Zubayer Al Hasan</h4>
                                <p>Canada</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TestimonialsSection;