import HeadshotOne from "../assets/corporate-headshot-1.jpg";
import HeadshotTwo from "../assets/corporate-headshot-2.jpg";
import HeadshotThree from "../assets/corporate-headshot-3.jpg";

const LearnMore = () => {
    return (
        <>
        <div className="wrapper">
            <section className="pt-5">
                <div className="row">
                <div className="col-12 col-md-6">
                    <div className="d-flex">
                        <div className="container-fluid d-flex flex-column align-items-center justify-content-center">
                            <img src={HeadshotOne} alt="An entrepreneur reading a newspaper" className="w-100 h-auto" />
                        </div>

                        <div className="container-fluid d-flex flex-column">
                            <img src={HeadshotTwo} alt="Two business people having a conversation with each other" className="w-100" />
                            <img src={HeadshotThree} alt="Headshot of a young entrepreneur" className="w-50 pt-4" />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 px-5 d-flex justify-content-center">
                    <div>
                    <h2>Get the job of your dreams quickly.</h2>
                    <p className="text-muted">Explore our job listings and find the perfect job for you.</p>
                    <ul className="check-list py-3">
                        <li>
                            <p>Seamless searching</p>
                        </li>
                        <li>
                            <p>Protected payments, every time</p>
                        </li>
                        <li>
                            <p>Wide range of job categories</p>
                        </li>
                    </ul>
                    <div className="d-flex justify-content-sm-start justify-content-center">
                        <button type="button" className="btn btn-primary">Learn More</button>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section>
                <div className="row px-5 pt-5">
                    <div className="col-12 col-md-4 d-flex justify-content-center flex-column align-items-center">
                        <h2>7 Million</h2>
                        <p>Completed Jobs</p>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center flex-column align-items-center">
                        <h2>30k+</h2>
                        <p>Worldwide Clients</p>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center flex-column align-items-center">
                        <h2>$13 Billion</h2>
                        <p>Payout</p>
                    </div>
                    <div className="pt-2">
                        <hr />
                    </div>
                </div>
                
            </section>
            </div>
        </>
    )
}

export default LearnMore;