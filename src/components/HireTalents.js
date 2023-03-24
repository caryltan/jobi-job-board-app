import Search from "../assets/search-talents-preview.png"

const HireTalents = () => {
    return (
        <>
            <section class="wrapper py-5">
                <div class="row justify-content-between">
                <div class="col-12 col-md-6">
                    <img src={Search} alt="screenshot of hireable talent listings" class="w-100" />
                </div>
                <div class="col-12 col-md-6 px-5 py-5">
                    <p class="text-muted pt-5 sub-heading">Find Freelancers</p>
                    <h2 class="pb-3">Hire Top Talents</h2>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h3 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <strong>Seamless Search</strong>
                                </button>
                            </h3>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>Search for the perfect candidate with ease using our smooth and simple depository of hireable talents</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h3 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <strong>Hire Top Talents</strong>
                                </button>
                            </h3>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>Search for the perfect candidate with ease using our smooth and simple depository of hireable talents</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary my-4">Explore All</button>
                </div>
                </div>
            </section>
        </>
    )
}

export default HireTalents;