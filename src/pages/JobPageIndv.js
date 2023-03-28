import {
    Link,
    Routes,
    Route,
    useParams,
    useLocation,
} from 'react-router-dom';
import { useState, useEffect } from "react";
import NavBarDark from "../components/NavBarDark";
import BulletOne from "../assets/bullet-one.svg";
import BulletTwo from "../assets/bullet-two.svg";
import BulletThree from "../assets/bullet-three.svg";
import BulletFour from "../assets/bullet-four.svg";
import BulletFive from "../assets/bullet-five.svg";
import FacebookIcon from "../assets/social-icons/facebook-f.svg";
import TwitterIcon from "../assets/social-icons/twitter.svg";
import ShareIcon from "../assets/share-icon.png";

const JobPageIndv = () => {


    const location = useLocation();

    const CopyLink = (e) => {
        e.preventDefault();
        const queryParameters = window.location.href.split('/');
        const lastSegment = queryParameters.pop()
        navigator.clipboard.writeText(`https://jobi-job-board-app.netlify.app/job-listings/${lastSegment}`)
    }


    return (
        <>

            <header className="bg-brand-dark pt-4">
                <NavBarDark />
                <div className="d-flex flex-column pt-4 pb-5">
                    <div className="d-flex justify-content-center">
                        <div className="d-flex flex-column">
                            <div>
                                <h1 className="text-center text-white">Job Details</h1>
                            </div>
                            <div>
                                <p className="text-center text-white">Is this the right fit for you? View company job details & requirements</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="wrapper flex-column flex-lg-row d-flex py-5 justify-content-between">
                <div className="col-12 col-lg-7 col-xl-8">
                    <div>
                        <p><span className="text-muted">{location.state.date}</span> by <strong>{location.state.company}</strong></p>
                        <h2>{location.state.jobTitle}</h2>
                    </div>
                    <section className="d-flex flex-row py-3 flex-wrap">
                        <div className="d-flex bg-brand-ultra-light me-3 my-2 px-3 py-2 rounded align-items-center share-button">
                            <img src={FacebookIcon} alt="Facebook Icon" className="social-icon-small me-2"/>
                            <p className="mb-0 job-details ">Facebook</p>
                        </div>
                        <div className="d-flex bg-brand-ultra-light me-3 my-2 px-3 py-2 rounded align-items-center share-button">
                            <img src={TwitterIcon} alt="Twitter Icon" className="social-icon-small me-2"/>
                            <p className="mb-0 job-details ">Twitter</p>
                        </div>
                        <div className="d-flex bg-brand-ultra-light me-3  my-2 px-3 py-2 rounded align-items-center share-button" onClick={CopyLink}>
                            <img src={ShareIcon} alt="Share Icon" className="social-icon-small me-2"/>
                            <p className="mb-0 job-details ">Copy</p>
                        </div>
                    </section>
                    <section className="rounded-brand border border-grey my-4 px-4 py-3">
                        <div className="d-flex py-3 align-items-center">
                            <img src={BulletOne} alt="bullet point one" className="bullet-icon me-2" />
                            <h3 className="job-heading mb-0">Overview</h3>
                        </div>
                        <p className="lh-lg">{location.state.longOverview}</p>
                    </section>
                    <section className="rounded-brand border border-grey my-4 px-4 py-3">
                        <div className="d-flex py-3">
                            <img src={BulletTwo} alt="bullet point two" className="bullet-icon me-2" />
                            <h3 className="job-heading">Job Description</h3>
                        </div>
                        <p className="lh-lg">{location.state.jobDescription}</p>
                    </section>
                    <section className="rounded-brand border border-grey my-4 px-4 py-3">
                        <div className="d-flex py-3">
                            <img src={BulletThree} alt="bullet point three" className="bullet-icon me-2" />
                            <h3 className="job-heading">Responsibilities</h3>
                        </div>

                        <ul className="check-list-job">
                            {[...location.state.responsibilities].map((responsibility) => {
                                return (
                                    <>
                                        <li className="mb-3 lh-lg">
                                            <p className="mx-2">{responsibility}</p>
                                        </li>
                                    </>
                                )
                            })
                            }
                        </ul>
                    </section>
                    <section className="rounded-brand border border-grey my-4 px-4 py-3">
                        <div className="d-flex py-3">
                            <img src={BulletFour} alt="bullet point four" className="bullet-icon me-2" />
                            <h3 className="job-heading">Required Skills</h3>
                        </div>

                        <ul className="check-list-job">
                            {[...location.state.requiredSkills].map((skill) => {
                                return (
                                    <>
                                        <li className="mb-3 lh-lg">
                                            <p className="mx-2">{skill}</p>
                                        </li>
                                    </>
                                )
                            })
                            }
                        </ul>
                    </section>
                    <section className="rounded-brand border border-grey my-4 px-4 py-3">
                        <div className="d-flex py-3">
                            <img src={BulletFive} alt="bullet point five" className="bullet-icon me-2" />
                            <h3 className="job-heading">Benefits</h3>
                        </div>

                        <ul className="check-list-job">
                            {[...location.state.benefits].map((benefit) => {
                                return (
                                    <>
                                        <li className="mb-3 lh-lg">
                                            <p className="mx-2">{benefit}</p>
                                        </li>
                                    </>
                                )
                            })
                            }
                        </ul>
                    </section>
                </div>



                <div className="col-12 col-lg-4 col-xl-3">
                    <section className="bg-brand-ultra-light pt-5 pb-4">
                        <section className="pb-4">
                            <div className="d-flex justify-content-center">
                                <img src={location.state.logo} alt={`${location.state.company} logo`} className="company-icon-large pb-3" />
                            </div>
                            <div className="d-flex justify-content-center">
                                <p>{location.state.company}</p>
                            </div>
                            <div className="d-flex justify-content-center">
                                <a
                                    href="https://www.google.ca/"
                                    target="_blank"
                                    className="btn btn-primary"
                                >
                                    Visit Website
                                </a>
                            </div>
                        </section>


                        <hr className="pb-4 mx-auto my-auto w-80" />


                        <section className="row px-4">
                            <div className="col-6 px-4">
                                <div className="d-flex justify-content-center justify-content-sm-start">
                                    <p className="text-muted job-sub-heading mb-1">Salary</p>
                                </div>
                                <div className="d-flex justify-content-center justify-content-sm-start">
                                    <p className="job-details"><strong>{location.state.salary}</strong></p>
                                </div>
                            </div>
                            <div className="col-6 px-4">
                                <div className="d-flex justify-content-center justify-content-sm-start">
                                    <p className="text-muted job-sub-heading mb-1">Expertise</p>
                                </div>
                                <div className="d-flex justify-content-center justify-content-sm-start">
                                    <p className="job-details"><strong>{location.state.expertise}</strong></p>
                                </div>
                            </div>
                            <div className="col-6 px-4">
                                <div className="d-flex justify-content-center justify-content-sm-start">
                                    <p className="text-muted job-sub-heading mb-1">Location</p>
                                </div>
                                <div className="d-flex justify-content-center justify-content-sm-start">
                                    <p className="job-details"><strong>{location.state.location}</strong></p>
                                </div>
                            </div>
                            <div className="col-6 px-4">
                                <div className="d-flex justify-content-center justify-content-sm-start">
                                    <p className="text-muted job-sub-heading mb-1 justify-content-sm-start">Job Type</p>
                                </div>
                                <div className="d-flex justify-content-center justify-content-sm-start">
                                    <p className="job-details"><strong>{location.state.jobType}</strong></p>
                                </div>
                            </div>
                            <div className="col-6 px-4">
                                <div className="d-flex justify-content-center justify-content-sm-start">
                                    <p className="text-muted job-sub-heading mb-1">Date</p>
                                </div>
                                <div className="d-flex justify-content-center justify-content-sm-start">
                                    <p className="job-details"><strong>{location.state.date}</strong></p>
                                </div>
                            </div>
                            <div className="col-6 px-4">
                                <div className="d-flex justify-content-center justify-content-sm-start">
                                    <p className="text-muted job-sub-heading mb-1">Experience</p>
                                </div>
                                <div className="d-flex justify-content-center justify-content-sm-start">
                                    <p className="job-details"><strong>{location.state.experience}</strong></p>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="d-flex flex-wrap justify-content-center">
                                {[...location.state.tags].map((tag) => {
                                    return (
                                        <>
                                            <div className="btn btn-tag mx-1 my-1">
                                                <p className="tag-text mb-0">{tag}</p>
                                            </div>
                                        </>
                                    )
                                })
                                }
                            </div>
                        </section>
                        <section className="col-12 d-flex justify-content-center pt-4">

                            <a
                                href="https://www.google.ca/"
                                target="_blank"
                                className="btn btn-primary"
                            >
                                Apply Now
                            </a>

                        </section>
                    </section>
                </div>
            </main>




        </>
    )
}


export default JobPageIndv;