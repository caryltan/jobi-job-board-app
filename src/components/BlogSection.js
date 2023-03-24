import BlogComputer from "../assets/blog-1.jpg";
import BlogCity from "../assets/blog-2.jpg";
import BlogCorporate from "../assets/blog-3.jpg";

const BlogSection = () => {
    return (
        <>
            <section className="album bg-light py-5">
                <div className="wrapper">
                <div className="container">
                    <div>
                        <h2 className="text-center">Our Blog</h2>
                    </div>
                    <div className="row pt-5">

                        {/* <div className="container-sm shadow p-3 mb-5 bg-white rounded category-card h-50 px-4"> */}
                        <div className="col-12 col-lg-4 ">
                            <div className="card mb-4 bg-white border-0 blog">
                                <div className="card-body">
                                    <div className="card-img-top">
                                        <img src={BlogComputer} alt="Work desk displaying a computer" className="img-fluid" />
                                    </div>
                                    <div className="card-text">
                                        <p className="text-muted pt-4">23 APR, 2020</p>
                                        <h5 className="pb-4">Working From Home: Exploring The Impact on Productivity and Innovation</h5>
                                        <button type="button" className="btn btn-primary">Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 ">
                            <div className="card mb-4 bg-white border-0 blog">
                                <div className="card-body">
                                    <div className="card-img-top">
                                        <img src={BlogCity} alt="Upward shot of city skyscrapers" className="img-fluid" />
                                    </div>
                                    <div className="card-text">
                                        <p className="text-muted pt-4">23 APR, 2020</p>
                                        <h5 className="pb-4">Unlocking Your Potential: Strategies and Tips for Job Seekers</h5>
                                        <button type="button" className="btn btn-primary">Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 ">
                            <div className="card mb-4 bg-white border-0 blog">
                                <div className="card-body">
                                    <div className="card-img-top">
                                        <img src={BlogCorporate} alt="Group of employees in a corporate work setting" className="img-fluid" />
                                    </div>
                                    <div className="card-text">
                                        <p className="text-muted pt-4">23 APR, 2020</p>
                                        <h5 className="pb-4">Mastering the Job Search: Strategies and Tips for Landing Your Dream Career</h5>
                                        <button type="button" className="btn btn-primary">Read More</button>
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