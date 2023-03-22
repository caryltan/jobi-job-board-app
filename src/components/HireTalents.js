import Search from "../assets/search-talents-preview.png"

const HireTalents = () => {
    return (
        <>
        <section class="row px-5 pt-5">
            <div class="col-12 col-md-6">
                <img src={Search} alt="screenshot of hireable talent listings" class="w-100"/>
            </div>
            <div class="col-12 col-md-6">
                <p>Find Freelancers</p>
                <h2>Hire Top Talents</h2>
                <div>
                    <h4>Seamless Search</h4>
                    <p>Search for the perfect candidate with ease using our smooth and simple depository of hireable talents</p>
                </div>
                <div>
                    <h4>Hire Top Talents</h4>
                    <p>Search for the perfect candidate with ease using our smooth and simple depository of hireable talents</p>
                </div>
                <button type="button" class="btn btn-primary">Explore All</button>
            </div>
        </section>
        </>
    )
}

export default HireTalents;