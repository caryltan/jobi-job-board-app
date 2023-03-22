import Search from "../assets/search-talents-preview.png"

const HireTalents = () => {
    return (
        <>
            <section class="row px-5 pt-5">
                <div class="col-12 col-md-6">
                    <img src={Search} alt="screenshot of hireable talent listings" class="w-100" />
                </div>
                <div class="col-12 col-md-6">
                    <p>Find Freelancers</p>
                    <h2>Hire Top Talents</h2>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item border-light">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Seamless Search
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>Search for the perfect candidate with ease using our smooth and simple depository of hireable talents</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item border-light">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Hire Top Talents
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>Search for the perfect candidate with ease using our smooth and simple depository of hireable talents</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary">Explore All</button>
                </div>
            </section>
        </>
    )
}

export default HireTalents;