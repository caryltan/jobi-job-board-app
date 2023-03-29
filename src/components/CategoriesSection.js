import PenIcon from "../assets/categories-icons/pen-icon.svg";
import UserIcon from "../assets/categories-icons/user-icon.svg";
import CodeIcon from "../assets/categories-icons/code-icon.svg";
import BarsIcon from "../assets/categories-icons/bars-icon.svg";
import BriefcaseIcon from "../assets/categories-icons/briefcase-icon.svg";
import PhoneIcon from "../assets/categories-icons/phone-icon.svg";
import PencilIcon from "../assets/categories-icons/pencil-icon.svg";

const CategoriesSection = () => {
    return (
        <>
            <div className="wrapper py-5">
                <h2>Most demanded job categories.</h2>
            </div>
            <section className="album categories-section py-5 ">
                <div className="wrapper">
                    <div className="container">

                        <div className="row px-3  py-5">

                            {/* <div className="container-sm shadow p-3 mb-5 bg-white rounded category-card h-50 px-4"> */}
                            <div className="col-6 col-lg-3">
                                <div className="card mb-4 shadow bg-white border-light category-card">
                                    <div className="card-body">
                                        <div className="card-img-top">
                                            <img src={PenIcon} alt="pen icon" className="pb-4" />
                                        </div>
                                        <div className="card-text">
                                            <h5 className="pb-4">Design & Development</h5>
                                            <p className="text-muted">2340 openings</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3 ">
                                <div className="card mb-4 shadow bg-white border-light category-card">
                                    <div className="card-body">
                                        <div className="card-img-top">
                                            <img src={CodeIcon} alt="coding icon" className="pb-4" />
                                        </div>
                                        <div className="card-text">
                                            <h5 className="pb-4">Programming & Coding</h5>
                                            <p className="text-muted">2340 openings</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3 ">
                                <div className="card mb-4 shadow bg-white border-light category-card">
                                    <div className="card-body">
                                        <div className="card-img-top">
                                            <img src={UserIcon} alt="user icon" className="pb-4" />
                                        </div>
                                        <div className="card-text">
                                            <h5 className="pb-4">Customer Marketing & Sales</h5>
                                            <p className="text-muted">2340 openings</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3 ">
                                <div className="card mb-4 shadow bg-white border-light category-card">
                                    <div className="card-body">
                                        <div className="card-img-top">
                                            <img src={BarsIcon} alt="slider bars icon" className="pb-4" />
                                        </div>
                                        <div className="card-text">
                                            <h5 className="pb-4">Video Editing & 3D Work</h5>
                                            <p className="text-muted">2340 openings</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3 ">
                                <div className="card mb-4 shadow bg-white border-light category-card">
                                    <div className="card-body">
                                        <div className="card-img-top">
                                            <img src={BriefcaseIcon} alt="briefcase icon" className="pb-4" />
                                        </div>
                                        <div className="card-text">
                                            <h5 className="pb-4">Business Marketing</h5>
                                            <p className="text-muted">2340 openings</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3 ">
                                <div className="card mb-4 shadow bg-white border-light category-card">
                                    <div className="card-body">
                                        <div className="card-img-top">
                                            <img src={PencilIcon} alt="pencil icon" className="pb-4" />
                                        </div>
                                        <div className="card-text">
                                            <h5 className="pb-4">Art & Animation</h5>
                                            <p className="text-muted">2340 openings</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3 ">
                                <div className="card mb-4 shadow bg-white border-light category-card">
                                    <div className="card-body">
                                        <div className="card-img-top">
                                            <img src={PhoneIcon} alt="phone icon" className="pb-4" />
                                        </div>
                                        <div className="card-text">
                                            <h5 className="pb-4">Business Development</h5>
                                            <p className="text-muted">2340 openings</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3 ">
                                <div className="card mb-4 shadow bg-white border-light category-card">
                                    <div className="card-body">
                                        <div className="card-img-top">
                                            <img src={PhoneIcon} alt="phone icon" className="pb-4" />
                                        </div>
                                        <div className="card-text">
                                            <h5 className="pb-4">13k+ Jobs already posted</h5>
                                            <p className="text-muted">2340 openings</p>
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

export default CategoriesSection;