import Search from "../assets/search-talents-preview.png"

const HireTalents = () => {
    return (
        <>
            <section className="wrapper py-5">
                <div className="row justify-content-between">
                <div className="col-12 col-md-6">
                    <img src={Search} alt="screenshot of hireable talent listings" className="w-100" />
                </div>
                <div className="col-12 col-md-6 px-5 py-5">
                    <p className="text-muted pt-5 sub-heading">Find Freelancers</p>
                    <h2 className="pb-3">Hire Top Talents</h2>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h3 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <strong>Seamless Search</strong>
                                </button>
                            </h3>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Search for the perfect candidate with ease using our smooth and simple depository of hireable talents</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h3 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <strong>Hire Top Talents</strong>
                                </button>
                            </h3>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Search for the perfect candidate with ease using our smooth and simple depository of hireable talents</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="btn-homepage btn-primary my-4">Explore All</button>
                </div>
                </div>
            </section>
        </>
    )
}

export default HireTalents;