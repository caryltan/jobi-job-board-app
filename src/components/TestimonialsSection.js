import ProfileImg from "../assets/profile-image.png";
import Rating from "../assets/rating.svg";

const TestimonialsSection = () => {
    return (
        <>
            <div class="container">
    <h2>Scrolling Card UI With CSS Grid</h2>
    <ul class="cards">
        <li class="card">
            <div>
                <h3 class="card-title">Service 1</h3>
                <div class="card-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div class="card-link-wrapper">
                <a href="" class="card-link">Learn More</a>
            </div>
        </li>
        <li class="card">
            <div>
                <h3 class="card-title">Service 2</h3>
                <div class="card-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repudiandae magnam harum natus fuga et repellat in maiores.</p>
                </div>
            </div>
            <div class="card-link-wrapper">
                <a href="" class="card-link">Learn More</a>
            </div>
        </li>
        <li class="card">
            <div>
                <h3 class="card-title">Service 3</h3>
                <div class="card-content">
                    <p>Phasellus ultrices lorem vel bibendum ultricies. In hendrerit nulla a ante dapibus pulvinar eu eget quam.</p>
                </div>
            </div>
            <div class="card-link-wrapper">
                <a href="" class="card-link">Learn More</a>
            </div>
        </li>
        <li class="card">
            <div>
                <h3 class="card-title">Service 4</h3>
                <div class="card-content">
                    <p>Aenean posuere mauris quam, pellentesque auctor mi bibendum nec. Sed scelerisque lacus nisi, quis auctor lorem ornare vel.</p>
                </div>
            </div>
            <div class="card-link-wrapper">
                <a href="" class="card-link">Learn More</a>
            </div>
        </li>
        <li class="card">
            <div>
                <h3 class="card-title">Service 5</h3>
                <div class="card-content">
                    <p>Vestibulum pharetra fringilla felis sit amet tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras et arcu sit amet est consequat feugiat. Nam ut sapien pulvinar.</p>
                </div>
            </div>
            <div class="card-link-wrapper">
                <a href="" class="card-link">Learn More</a>
            </div>
        </li>
        <li class="card">
            <div>
                <h3 class="card-title">Service 6</h3>
                <div class="card-content">
                    <p>Donec ut tincidunt nisl. Vivamus eget eros id elit feugiat mollis. Nam sed sem quis libero finibus tempor.</p>
                </div>
            </div>
            <div class="card-link-wrapper">
                <a href="" class="card-link">Learn More</a>
            </div>
        </li>
        <li class="card">
            <div>
                <h3 class="card-title">Service 7</h3>
                <div class="card-content">
                    <p>Aliquam eget nisl auctor, sollicitudin ipsum at, dignissim ligula. Donec tincidunt in elit et pellentesque. Integer posuere metus ac massa mollis euismod.</p>
                </div>
            </div>
            <div class="card-link-wrapper">
                <a href="" class="card-link">Learn More</a>
            </div>
        </li>
        <li class="card">
            <div>
                <h3 class="card-title">Service 8</h3>
                <div class="card-content">
                    <p> Vivamus eget eros id elit feugiat mollis. Nam sed sem quis libero finibus tempor.</p>
                </div>
            </div>
            <div class="card-link-wrapper">
                <a href="" class="card-link">Learn More</a>
            </div>
        </li>
        <li class="card">
            <div>
                <h3 class="card-title">Service 9</h3>
                <div class="card-content">
                    <p>Duis id congue turpis. Donec sodales porta felis, nec ultricies ante. Nam placerat vitae metus sit amet tempor. Aliquam ac dictum est.</p>
                </div>
            </div>
            <div class="card-link-wrapper">
                <a href="" class="card-link">Learn More</a>
            </div>
        </li>
        <li class="card">
            <div>
                <h3 class="card-title">Service 10</h3>
                <div class="card-content">
                    <p>Pellentesque eget eros eget justo efficitur fermentum.</p>
                </div>
            </div>
            <div class="card-link-wrapper">
                <a href="" class="card-link">Learn More</a>
            </div>
        </li>
        <li class="card">
            <div>
                <h3 class="card-title">Service 11</h3>
                <div class="card-content">
                    <p>Phasellus posuere nec nibh ut tincidunt. Aenean mollis turpis non eros posuere, at luctus leo hendrerit. Integer non libero sapien.</p>
                </div>
            </div>
            <div class="card-link-wrapper">
                <a href="" class="card-link">Learn More</a>
            </div>
        </li>
        <li class="card">
            <div>
                <h3 class="card-title">Service 12</h3>
                <div class="card-content">
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ornare metus ac lectus scelerisque volutpat.</p>
                </div>
            </div>
            <div class="card-link-wrapper">
                <a href="" class="card-link">Learn More</a>
            </div>
        </li>
    </ul>
</div>


            {/* <section class="row testimonial-section">
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


                <div class="col-6 col-xl-3 ">
                    <div class="card mb-4 shadow bg-white border-light">
                        <div class="card-body">
                            <div class="card-text">
                                <h3>Impressive!</h3>
                                <img src={Rating} alt="Rating Star 5/5" />
                                <p>"This is absolutely unique and clean and what I'm looking for. Also, the code quality is great!"</p>
                            </div>
                            <div class="card-footer bg-transparent">
                                <div class="d-flex flex-row">
                                    <div class="pe-3">
                                        <img src={ProfileImg} alt="Headshot of user profile" />
                                    </div>
                                    <div>
                                        <h4>Zubayer Al Hasan</h4>
                                        <p class="text-muted">Canada</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-6 col-xl-3 ">
                    <div class="card mb-4 shadow bg-white border-light">
                        <div class="card-body">
                            <div class="card-text">
                                <h3>Impressive!</h3>
                                <img src={Rating} alt="Rating Star 5/5" />
                                <p>"This is absolutely unique and clean and what I'm looking for. Also, the code quality is great!"</p>
                            </div>
                            <div class="card-footer bg-transparent">
                                <div class="d-flex flex-row">
                                    <div class="pe-3">
                                        <img src={ProfileImg} alt="Headshot of user profile" />
                                    </div>
                                    <div>
                                        <h4>Zubayer Al Hasan</h4>
                                        <p class="text-muted">Canada</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section> */}
        </>
    )
}

export default TestimonialsSection;