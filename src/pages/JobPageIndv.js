import {
    Link,
    Routes,
    Route,
    useParams,
    useLocation,
} from 'react-router-dom';
import { useState, useEffect } from "react";
import NavBarDark from "../components/NavBarDark";

const JobPageIndv = () => {


    const location = useLocation();




    return (
        <>
            <header>
                <NavBarDark />
            </header>
            <main>
                <div>
                    <p>{location.state.date} by {location.state.company}</p>
                    <h2>{location.state.jobTitle}</h2>
                </div>
                <section>
                    <h3>Overview</h3>
                    <p>{location.state.longOverview}</p>
                </section>
                <section>
                    <h3>Job Description</h3>
                    <p>{location.state.jobDescription}</p>
                </section>
                <section>
                    <h3>Responsibilities</h3>
                    <ul>
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
                    <ul>
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
                    <ul>
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
            </main>


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
        </>
    )
}


export default JobPageIndv;