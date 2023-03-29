import IconOne from "../assets/icon-1.svg";
import IconTwo from "../assets/icon-2.svg";
import IconThree from "../assets/icon-3.svg";

const HowWork = () => {
    return (
        <>
            <section>
                <div className="wrapper">
                    <div className="row py-5">
                        <div className="d-flex align-items-center flex-md-row flex-column">
                            <div className="col-12 col-md-4">
                                <hr />
                            </div>
                            <div className="col-12 col-md-4">
                                <h2 className="text-center">How's It Work?</h2>
                            </div>
                            <div className="col-12 col-md-4">
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="row px-5">
                        <div className="col-12 col-md-4 d-flex flex-column align-items-center">
                            <img className="pb-4" src={IconOne} alt="Step one" />
                            <h4 className="text-center">Create Account</h4>
                            <p className="text-center">It's very easy to open an account and start your journey.</p>
                        </div>
                        <div className="col-12 col-md-4 d-flex flex-column align-items-center">
                            <img className="pb-4" src={IconTwo} alt="Step two" />
                            <h4 className="text-center">Complete Your Profile</h4>
                            <p className="text-center">Complete your profile with all the info to the attention you want</p>
                        </div>
                        <div className="col-12 col-md-4 d-flex flex-column align-items-center">
                            <img className="pb-4" src={IconThree} alt="Step three" />
                            <h4 className="text-center">Apply or Hire</h4>
                            <p className="text-center">Apply and get your preferable jobs with all the requirements and get hired.</p>
                        </div>
                        <div className="py-5">
                            <hr />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HowWork;