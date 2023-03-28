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
import Checkmark from "../assets/checkmark.svg";

const JobPageIndv = () => {


    const location = useLocation();




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

            <main className="wrapper flex-row d-flex py-5 justify-content-between">
                <div className="col-8">
                    <div>
                        <p><span className="text-muted">{location.state.date}</span> by <strong>{location.state.company}</strong></p>
                        <h2>{location.state.jobTitle}</h2>
                    </div>
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
                                        <li className="mb-3 lh-lg mx-2">
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
                                        <li className="mb-3 lh-lg mx-2">
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
                                        <li className="mb-3 lh-lg mx-2">
                                            <p className="mx-2">{benefit}</p>
                                        </li>
                                    </>
                                )
                            })
                            }
                        </ul>
                    </section>
                </div>



                <div className="col-3">
                    <section className="bg-brand-ultra-light py-5">
                        <section>
                            <div className="d-flex justify-content-center">
                                <img src={location.state.logo} alt={`${location.state.company} logo`} className="company-icon-large" />
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
                        <section>
                            <div>
                                <p className="text-muted">Salary</p>
                                <p><strong>{location.state.salary}</strong></p>
                            </div>
                            <div>
                                <p className="text-muted">Expertise</p>
                                <p><strong>{location.state.expertise}</strong></p>
                            </div>
                            <div>
                                <p className="text-muted">Location</p>
                                <p><strong>{location.state.location}</strong></p>
                            </div>
                            <div>
                                <p className="text-muted">Job Type</p>
                                <p><strong>{location.state.jobType}</strong></p>
                            </div>
                            <div>
                                <p className="text-muted">Date</p>
                                <p><strong>{location.state.date}</strong></p>
                            </div>
                            <div>
                                <p className="text-muted">Experience</p>
                                <p><strong>{location.state.experience}</strong></p>
                            </div>
                        </section>
                        <section>
                            <ul>
                                {[...location.state.tags].map((tag) => {
                                    return (
                                        <>
                                            <li>{tag}</li>
                                        </>
                                    )
                                })
                                }
                            </ul>
                        </section>
                        <section>
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