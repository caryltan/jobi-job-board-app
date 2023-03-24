import BlogComputer from "../assets/blog-1.jpg";
import BlogCity from "../assets/blog-2.jpg";
import BlogCorporate from "../assets/blog-3.jpg";

const BlogSection = () => {
    return (
        <>
            <section class="album bg-light py-5">
                <div class="wrapper">
                <div class="container">
                    <div>
                        <h2 class="text-center">Our Blog</h2>
                    </div>
                    <div class="row pt-5">

                        {/* <div class="container-sm shadow p-3 mb-5 bg-white rounded category-card h-50 px-4"> */}
                        <div class="col-12 col-lg-4 ">
                            <div class="card mb-4 bg-white border-0 blog">
                                <div class="card-body">
                                    <div class="card-img-top">
                                        <img src={BlogComputer} alt="Work desk displaying a computer" class="img-fluid" />
                                    </div>
                                    <div class="card-text">
                                        <p class="text-muted pt-4">23 APR, 2020</p>
                                        <h5 class="pb-4">Working From Home: Exploring The Impact on Productivity and Innovation</h5>
                                        <button type="button" class="btn btn-primary">Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-4 ">
                            <div class="card mb-4 bg-white border-0 blog">
                                <div class="card-body">
                                    <div class="card-img-top">
                                        <img src={BlogCity} alt="Upward shot of city skyscrapers" class="img-fluid" />
                                    </div>
                                    <div class="card-text">
                                        <p class="text-muted pt-4">23 APR, 2020</p>
                                        <h5 class="pb-4">Unlocking Your Potential: Strategies and Tips for Job Seekers</h5>
                                        <button type="button" class="btn btn-primary">Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-4 ">
                            <div class="card mb-4 bg-white border-0 blog">
                                <div class="card-body">
                                    <div class="card-img-top">
                                        <img src={BlogCorporate} alt="Group of employees in a corporate work setting" class="img-fluid" />
                                    </div>
                                    <div class="card-text">
                                        <p class="text-muted pt-4">23 APR, 2020</p>
                                        <h5 class="pb-4">Mastering the Job Search: Strategies and Tips for Landing Your Dream Career</h5>
                                        <button type="button" class="btn btn-primary">Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default BlogSection;