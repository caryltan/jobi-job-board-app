import IconOne from "../assets/icon-1.svg";
import IconTwo from "../assets/icon-2.svg";
import IconThree from "../assets/icon-3.svg";

const HowWork = () => {
    return (
        <>
        <section>
            <div class="wrapper">
            <div class="row pt-5">
                <div class="col-12 col-md-4">
                    <hr/>
                </div>
                <div class="col-12 col-md-4 pb-5">
                    <h2 class="text-center">How's It Work?</h2>
                </div>
                <div class="col-12 col-md-4">
                    <hr/>
                </div>
            </div>
            <div class="row px-5">
                <div class="col-12 col-md-4 d-flex flex-column align-items-center">
                    <img class="pb-4" src={IconOne} alt="Step one"/>
                    <h4>Create Account</h4>
                    <p class="text-center">It's very easy to open an account and start your journey.</p>
                </div>
                <div class="col-12 col-md-4 d-flex flex-column align-items-center">
                    <img class="pb-4" src={IconTwo} alt="Step two"/>
                    <h4>Complete Your Profile</h4>
                    <p class="text-center">Complete your profile with all the info to the attention you want</p>
                </div>
                <div class="col-12 col-md-4 d-flex flex-column align-items-center">
                    <img class="pb-4" src={IconThree} alt="Step three"/>
                    <h4>Apply or Hire</h4>
                    <p class="text-center">Apply and get your preferable jobs with all the requirements and get hired.</p>
                </div>
                <hr />
            </div>
            </div>
        </section>
        </>
    )
}

export default HowWork;