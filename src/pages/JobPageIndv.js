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

const JobPageIndv = () => {


    const location = useLocation();




    return (
        <>
            <header>
                <NavBarDark />
            </header>
            <main className="wrapper-80 flex-row d-flex py-5 justify-content-between">
                <div className="col-8">
                    <div>
                        <p><span className="text-muted">{location.state.date}</span> by <strong>{location.state.company}</strong></p>
                        <h2>{location.state.jobTitle}</h2>
                    </div>
                    <section className="rounded-brand border border-grey">
                        <h3>Overview</h3>
                        <p>{location.state.longOverview}</p>
                    </section>
                    <section>
                        <h3>Job Description</h3>
                        <p>{location.state.jobDescription}</p>
                    </section>
                    <section>
                        <h3>Responsibilities</h3>
                        <ul className="check-list-job">
                            {[...location.state.responsibilities].map((responsibility) => {
                                return (
                                    <>
                                        <li>{responsibility}</li>
                                    </>
                                )
                            })
                            }
                        </ul>
                    </section>
                    <section>
                        <h3>Required Skills</h3>
                        <ul className="check-list-job">
                            {[...location.state.requiredSkills].map((skill) => {
                                return (
                                    <>
                                        <li>{skill}</li>
                                    </>
                                )
                            })
                            }
                        </ul>
                    </section>
                    <section>
                        <h3>Benefits</h3>
                        <ul className="check-list-job">
                            {[...location.state.benefits].map((benefit) => {
                                return (
                                    <>
                                        <li>{benefit}</li>
                                    </>
                                )
                            })
                            }
                        </ul>
                    </section>
                </div>



                <div className="col-3 bg-brand-ultra-light">
                    <section>
                        <section>
                            <div>
                                <img src={location.state.logo} alt={`${location.state.company} logo`} />
                                <p>{location.state.company}</p>
                            </div>
                            <div>
                                <Link className="btn btn-primary">Visit Website</Link>
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
                    </section>
                </div>
            </main>




        </>
    )
}


export default JobPageIndv;