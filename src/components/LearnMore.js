import HeadshotOne from "../assets/corporate-headshot-1.jpg";
import HeadshotTwo from "../assets/corporate-headshot-2.jpg";
import HeadshotThree from "../assets/corporate-headshot-3.jpg";

const LearnMore = () => {
    return (
        <>
        <section class="row px-5 pt-5">
            <div class="col-12 col-md-6">
                <div class="d-flex">
                    <div class="container-fluid d-flex flex-column align-items-center justify-content-center">
                        <img src={HeadshotOne} alt="" class="w-100 h-auto"/>
                    </div>
                    
                    <div class="container-fluid d-flex flex-column">
                        <img src={HeadshotTwo} alt="" class="w-100"/>
                        <img src={HeadshotThree} alt="" class="w-50 pt-4"/>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <h2>Get the job of your dreams quickly.</h2>
                <p>Explore our job listings and find the perfect job for you.</p>
                <ul>
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
                <button type="button" class="btn btn-primary">Learn More</button>
            </div>
        </section>
        </>
    )
}

export default LearnMore;