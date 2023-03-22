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
            <section class="px-5 pt-5 bg-light">
                <div>
                    <h2>Most demanding job categories.</h2>
                </div>
                <div class="row px-5 pt-5">
                    <div class="col-6 col-lg-3">
                        <div class="container-sm shadow p-3 mb-5 bg-white rounded category-card h-50 px-4">
                            <img src={PenIcon} alt="pen icon" class="pb-4" />
                            <h5 class="pb-4">Design & Development</h5>
                            <p>2340 openings</p>
                        </div>
                        <div class="container-sm shadow p-3 mb-5 bg-white rounded h-50 px-4">
                            <img src={CodeIcon} alt="coding icon" class="pb-4" />
                            <h5 class="pb-4">Programming & Coding</h5>
                            <p>2340 openings</p>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3">
                        <div class="container-sm shadow p-3 mb-5 bg-white rounded h-50 px-4">
                            <img src={UserIcon} alt="user icon" class="pb-4" />
                            <h5 class="pb-4">Customer Marketing & Sales</h5>
                            <p>2340 openings</p>
                        </div>
                        <div class="container-sm shadow p-3 mb-5 bg-white rounded h-50 px-4">
                            <img src={BarsIcon} alt="slider bars icon" class="pb-4" />
                            <h5 class="pb-4">Video Editing & 3D Work</h5>
                            <p>2340 openings</p>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3">
                        <div class="container-sm shadow p-3 mb-5 bg-white rounded h-50 px-4">
                            <img src={BriefcaseIcon} alt="briefcase icon" class="pb-4" />
                            <h5 class="pb-4">Business Marketing</h5>
                            <p>2340 openings</p>
                        </div>
                        <div class="container-sm shadow p-3 mb-5 bg-white rounded h-50 px-4">
                            <img src={PencilIcon} alt="pencil icon" class="pb-4" />
                            <h5 class="pb-4">Art & Animation</h5>
                            <p>2340 openings</p>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3">
                        <div class="container-sm shadow p-3 mb-5 bg-white rounded h-50 px-4">
                            <img src={PhoneIcon} alt="phone icon" class="pb-4" />
                            <h5 class="pb-4">Business Development</h5>
                            <p>2340 openings</p>
                        </div>
                        <div class="container-sm shadow p-3 mb-5 bg-white rounded h-50 px-4">
                            <h5 class="pb-4">13k+ Jobs already posted</h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CategoriesSection;