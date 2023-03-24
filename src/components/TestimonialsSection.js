import ProfileImg from "../assets/profile-image.png";
import Rating from "../assets/rating.svg";

const TestimonialsSection = () => {
    return (
        <>
            <section className="bg-light">
                <div className="wrapper">
                    <div className="testimonial-section">
                        <div className="row justify-content-between">

                            <div className="col-12 col-lg-4 py-5">
                                <div>
                                    <p className="text-muted sub-heading">TESTIMONIALS</p>
                                    <h2>Clients love Jobi</h2>
                                </div>
                                <div>
                                    <h3>A+ Rating</h3>
                                    <p className="text-muted">4.8 avg rating makes us your best market place</p>
                                </div>
                            </div>


                            <div className="col-12 col-lg-8 ">
                                <div id="carouselExampleIndicators" className="carousel slide">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="d-flex flex-column flex-sm-row justify-content-between pt-5 col-12 col-xl-12">
                                                <div className="col-12 col-sm-6">
                                                    <div className="card border-light mx-2 my-2">
                                                        <div className="card-body">
                                                            <div className="card-text">
                                                                <h3>Impressive!</h3>
                                                                <img src={Rating} alt="Rating Star 5/5" />
                                                                <p>"This is absolutely unique and clean and what I'm looking for. Also, the code quality is great!"</p>
                                                            </div>
                                                            <div className="card-footer bg-transparent">
                                                                <div className="d-flex flex-row">
                                                                    <div className="pe-3">
                                                                        <img src={ProfileImg} alt="Headshot of user profile" />
                                                                    </div>
                                                                    <div>
                                                                        <h4>Zubayer Al Hasan</h4>
                                                                        <p className="text-muted">Canada</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-sm-6">
                                                    <div className="card border-light mx-2 my-2">
                                                        <div className="card-body">
                                                            <div className="card-text">
                                                                <h3>Impressive!</h3>
                                                                <img src={Rating} alt="Rating Star 5/5" />
                                                                <p>"This is absolutely unique and clean and what I'm looking for. Also, the code quality is great!"</p>
                                                            </div>
                                                            <div className="card-footer bg-transparent">
                                                                <div className="d-flex flex-row">
                                                                    <div className="pe-3">
                                                                        <img src={ProfileImg} alt="Headshot of user profile" />
                                                                    </div>
                                                                    <div>
                                                                        <h4>Zubayer Al Hasan</h4>
                                                                        <p className="text-muted">Canada</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                        <div className="d-flex flex-column flex-sm-row justify-content-between pt-5 col-12 col-xl-12">
                                                <div className="col-12 col-sm-6">
                                                    <div className="card border-light mx-2 my-2">
                                                        <div className="card-body">
                                                            <div className="card-text">
                                                                <h3>Impressive!</h3>
                                                                <img src={Rating} alt="Rating Star 5/5" />
                                                                <p>"This is absolutely unique and clean and what I'm looking for. Also, the code quality is great!"</p>
                                                            </div>
                                                            <div className="card-footer bg-transparent">
                                                                <div className="d-flex flex-row">
                                                                    <div className="pe-3">
                                                                        <img src={ProfileImg} alt="Headshot of user profile" />
                                                                    </div>
                                                                    <div>
                                                                        <h4>Zubayer Al Hasan</h4>
                                                                        <p className="text-muted">Canada</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-sm-6">
                                                    <div className="card border-light mx-2 my-2">
                                                        <div className="card-body">
                                                            <div className="card-text">
                                                                <h3>Impressive!</h3>
                                                                <img src={Rating} alt="Rating Star 5/5" />
                                                                <p>"This is absolutely unique and clean and what I'm looking for. Also, the code quality is great!"</p>
                                                            </div>
                                                            <div className="card-footer bg-transparent">
                                                                <div className="d-flex flex-row">
                                                                    <div className="pe-3">
                                                                        <img src={ProfileImg} alt="Headshot of user profile" />
                                                                    </div>
                                                                    <div>
                                                                        <h4>Zubayer Al Hasan</h4>
                                                                        <p className="text-muted">Canada</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                        <div className="d-flex flex-column flex-sm-row justify-content-between pt-5 col-12 col-xl-12">
                                                <div className="col-12 col-sm-6">
                                                    <div className="card border-light mx-2 my-2">
                                                        <div className="card-body">
                                                            <div className="card-text">
                                                                <h3>Impressive!</h3>
                                                                <img src={Rating} alt="Rating Star 5/5" />
                                                                <p>"This is absolutely unique and clean and what I'm looking for. Also, the code quality is great!"</p>
                                                            </div>
                                                            <div className="card-footer bg-transparent">
                                                                <div className="d-flex flex-row">
                                                                    <div className="pe-3">
                                                                        <img src={ProfileImg} alt="Headshot of user profile" />
                                                                    </div>
                                                                    <div>
                                                                        <h4>Zubayer Al Hasan</h4>
                                                                        <p className="text-muted">Canada</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-sm-6">
                                                    <div className="card border-light mx-2 my-2">
                                                        <div className="card-body">
                                                            <div className="card-text">
                                                                <h3>Impressive!</h3>
                                                                <img src={Rating} alt="Rating Star 5/5" />
                                                                <p>"This is absolutely unique and clean and what I'm looking for. Also, the code quality is great!"</p>
                                                            </div>
                                                            <div className="card-footer bg-transparent">
                                                                <div className="d-flex flex-row">
                                                                    <div className="pe-3">
                                                                        <img src={ProfileImg} alt="Headshot of user profile" />
                                                                    </div>
                                                                    <div>
                                                                        <h4>Zubayer Al Hasan</h4>
                                                                        <p className="text-muted">Canada</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                    {/* <button className="carousel-control-prev btn-primary" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="">Next</span>
                        </button> */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TestimonialsSection;